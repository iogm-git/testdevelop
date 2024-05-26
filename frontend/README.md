# Frontend

## Daftar Isi

- [Pendahuluan](#pendahuluan)
- [Fitur](#fitur)
- [Persyaratan](#persyaratan)
- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)

## Pendahuluan

Ini adalah aplikasi mobile yang dikembangkan menggunakan React Native untuk pendaataan sekolah. Kekurangan jika project ini dijalankan menggunakan emulator, tidak bisa mengambil foto dari galeri dan menginputkannya. tapi jika menggunakan device android bisa dan project berjalan lancar sesuai dengan kegunaan.

## Fitur

- Input Sekolah

## Persyaratan

Untuk menjalankan proyek ini, Anda memerlukan:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup) (bukan expo) (windows, android)
- Android Studio (untuk pengembangan Android)
- ADB (Android Debug Bridge)

## Instalasi

Ikuti langkah-langkah ini untuk mengatur proyek di mesin lokal Anda:

1. **Instal dependensi**
   ```sh
   npm install
   ```

2. **Sesuaikan Env**
   ```sh
   cd src/service/api.js
   # Ubah baseURL : 
   # - jika ingin dijalankan di device maka gunakan : IPv4 
   # - dan jika tidak gunakan : http://10.0.2.2:8000 
   ```
3. **Tambahan**
   ```sh
   # pergi ke direktori frontend
   cd android
   # buat file `local.properties` seperti contoh local.properties.example
   # sesuaikan properti sdk.dir yang ada pada pc anda
   ```

## Penggunaan
- Jika run di device android 
   1. **Buat Debug apk**
      ```sh
      # pergi ke direktori frontend
      cd android
      ./gradlew clean
      ./gradlew assembleDebug
      ```
   2. **Copy apk ke Device Android**
      ```sh
      # buka file explorer
      # pergi ke direktori project di install
      # masuk ke folder frontend
      # copy aplikai pada android/app/build/outputs/apk/debug/app-debug.apk ke dalam device android yang digunakan dan install aplikasinya.
      ``` 
   3. **Memastikan**
      ```sh
      # - koneksi wifi yang sama
      # - mode usb debugging (jika menggunakan kabel usb)
      # - periksa adb di pc : adb devices
      # - jika belum diberi akses : adb shell pm grant nomor_device_anda
      ```
   4. **Jalankan Metro Bundler**
      ```sh
      # pergi ke direktori frontend
      npm start
      ```
   5. **Jalankan apk**
      ```sh
      # buka apk frontend yang tadi sudah di install
      # shake device dan pergi ke settings
      # pilih 'Debug server host & port for device'
      # input port IPv4 anda lalu klik ok, misal http://192.168.x.xxx:8081
      # kembali dan reload aplikasi untuk siap digunakan
      ```

- Jika run menggunakan emulator
   1. **Jalankan emulator**
      ```sh
      # pergi ke direktori frontend
      # buka package.json
      # sesuaikan emulator anda 
      # "scripts": {
      #     "emulator": "path\\emulator.exe -avd emulator_anda"
      # },

      npm run emulator
      ```
   2. **Jalankan**
      ```sh
      # pergi ke direktori frontend
      # buka terminal kedua
      npm start

      # pergi ke direktori frontend
      # buka terminal ketiga
      npm run android
      ```

Jangan lupa setelah semua dilakukan, anda harus reload aplikasi jika backend sudah diatur
## Tambahan 
Jika bagian backend belum diatur, silahkan disesuaikan agar aplikasi dapat berjalan dengan harapan 
```sh
cd ./../backend
```

## Kontak

Ilham Rahmat Akbar - ilhamrhmtkbr@gmail.com
