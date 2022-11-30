# Project Tugas Multiple Platform - React Native

## Anggota Kelompok:

- Danang Wisnu Prayoga (24060120140160)
- Agung Ramadhani (24060120120016)
- Annas Bachtiar (24060120140151)
- Farrel Samuel Nicholas (24060120130121)
- Rijal Kurniawan (24060120120001)

## Environment Setup

##### 1. Install chocolate https://chocolatey.org/install

##### 2. Then, Install openjdk11

```bash
  choco install -y nodejs-lts openjdk11
```

##### 3. Configure the ANDROID_HOME environment variable

```bash
  1. Open the Windows Control Panel.
  2. Click on User Accounts, then click User Accounts again
  3. Click on Change my environment variables
  4. Click on New... to create a new ANDROID_HOME user variable that points to the path to your Android SDK:
```

![Logo](https://i.ibb.co/QpBXR5W/env-setup.png)

##### 4. Clone repository

```bash
  git clone https://github.com/PBP4/react-native
```

##### 5. Connecting API

##### 6. Start your application

```bash
  npx react-native run-android
```

or use yarn

```bash
  yarn android
```

## Connecting API

Langkah menggunakan react native dengan PHP + MySQL (Backend API)

```bash
  1. Buat database pada MySQL dan gunakan file (https://github.com/PBP4/api)
  2. Setting database pada file api.php
  3. Setting react-native/src/pages/DataForm/index.jsx
  4. Jika menggunakan local storage (XAMPP/Laragon) pastikan alamat url sama dengan ipconfig wifi
  5. Jika datasabe dihosting atau online gunakan alamat api
  6. Jalankan program
```

## Apk Android

Download File Apk: [React-Kelompok4](https://github.com/PBP4/react-native/blob/master/app-release.apk)

## License

[MIT](https://choosealicense.com/licenses/mit/)
