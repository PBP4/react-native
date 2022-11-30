import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
  Alert,
} from 'react-native';
import React, {Component} from 'react';

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      gedung: '',
      ruang: '',
      kapasitas: '',
    };
    this.url = 'http://danangwisnu.my.id/pbp/api.php';
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    await fetch(this.url)
      .then(response => response.json())
      .then(json => {
        //console.log(json.data.result);
        this.setState({
          listData: json.data.result,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  submit() {
    if (!this.state.gedung || !this.state.ruang || !this.state.kapasitas) {
      alert('Error! Data tidak boleh kosong.');
    } else if (isNaN(+this.state.kapasitas)) {
      alert('Error! Kapasitas harus berupa angka.');
    } else {
      if (this.state.id) {
        var url = this.url + '?action=update&id=' + this.state.id;
      } else {
        var url = this.url + '?action=create';
      }

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:
          'gedung=' +
          this.state.gedung +
          '&ruang=' +
          this.state.ruang +
          '&kapasitas=' +
          this.state.kapasitas,
      })
        .then(response => response.json())
        .then(json => {
          this.setState({
            id: '',
            gedung: '',
            ruang: '',
            kapasitas: '',
          });
          this.getData();
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  reset() {
    this.setState({
      id: '',
      gedung: '',
      ruang: '',
      kapasitas: '',
    });
  }

  async editData(id) {
    await fetch(this.url + '/?action=detail&id=' + id)
      .then(response => response.json())
      .then(json => {
        this.setState({
          gedung: json.data.result[0].gedung,
          ruang: json.data.result[0].ruang,
          kapasitas: json.data.result[0].kapasitas,
          id: id,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  async deleteData(id) {
    Alert.alert('Konfirmasi', 'Apakah anda yakin ingin menghapus data ini?', [
      {
        text: 'Batal',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          fetch(this.url + '?action=delete&id=' + id)
            .then(response => response.json())
            .then(json => {
              this.getData();
            })
            .catch(error => {
              console.error(error);
            });
        },
      },
    ]);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.viewData}>
            {this.state.listData &&
              this.state.listData.map((item, index) => {
                return (
                  <View key={index} style={styles.viewItem}>
                    <Text style={styles.textItem}>
                      {item.gedung}-{item.ruang}
                    </Text>
                    <Text
                      style={styles.textEdit}
                      onPress={() => this.editData(item.id)}>
                      Edit
                    </Text>
                    <Text
                      style={styles.textDelete}
                      onPress={() => this.deleteData(item.id)}>
                      Delete
                    </Text>
                  </View>
                );
              })}
          </View>
          <Text style={styles.title}>Form Data Ruang</Text>
          <View style={styles.card}>
            <TextInput
              style={styles.input}
              placeholder="Gedung"
              onChangeText={gedung => this.setState({gedung})}
              value={this.state.gedung}
            />
            <TextInput
              style={styles.input}
              placeholder="Ruang"
              onChangeText={ruang => this.setState({ruang})}
              value={this.state.ruang}
            />
            <TextInput
              style={styles.input}
              placeholder="Kapasitas"
              onChangeText={kapasitas => this.setState({kapasitas})}
              value={this.state.kapasitas}
            />
            <Text style={styles.space} />
            <Button title="Reset" onPress={() => this.reset()} />
            <Text style={styles.space} />
            <Button
              color="#000000"
              title="Submit"
              onPress={() => this.submit()}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    margin: 30,
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 0.2,
    borderColor: 'black',
    marginBottom: 10,
  },
  card: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'black',
    shadowColor: '#000',
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    marginTop: 10,
    padding: 10,
    width: 300,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'black',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
  },
  viewData: {
    width: '100%',
    padding: 10,
  },
  viewItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
  },
  textItem: {
    fontSize: 16,
    width: '70%',
  },
  textEdit: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
    width: '15%',
  },
  textDelete: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  space: {
    height: 10,
  },
});
