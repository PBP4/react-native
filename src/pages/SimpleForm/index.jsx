import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  submit = () => {
    if (!this.state.name) {
      alert('Error! Nama tidak boleh kosong.');
      return;
    } else if (!this.state.email) {
      alert('Error! Email tidak boleh kosong.');
      return;
    } else if (!this.state.password) {
      alert('Error! Password tidak boleh kosong.');
      return;
    } else {
      alert('Success! Data berhasil disimpan.');
      // reset data
      this.setState({
        name: '',
        email: '',
        password: '',
      });
    }
  };

  render() {
    const {name, email, password} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Example Form</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Nama"
            onChangeText={name => this.setState({name})}
            value={name}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={email => this.setState({email})}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={password => this.setState({password})}
            value={password}
          />
          <TouchableOpacity style={styles.button} onPress={this.submit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

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
  },
  buttonText: {
    color: 'white',
  },
});
