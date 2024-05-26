<# Frontend

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

- PHP 8.0.9
- XAMPP Control Panel v3.3.0
- Composer

## Instalasi dan Penggunaan

Ikuti langkah-langkah ini untuk mengatur proyek di mesin lokal Anda:

1. **Update composer**
   ```sh
   composer update
   ```
2. **Copy .env.example and setting env**
    ```sh
    # jika ingin menjalankan frontend (app react native) di android maka ganti localhost dengan IPv4 anda 
    APP_URL=http://localhost
    # jika ingin menjalankan frontend (app react native) di android maka ganti 10.0.2.2 dengan IPv4 anda 
    APP_URL_MOBILE_APP=http://10.0.2.2:8081 # menyesuaikan cors

    DB_CONNECTION=mysql
    DB_HOST=db_host_anda
    DB_PORT=db_port_anda
    DB_DATABASE=db_anda
    DB_USERNAME=db_username_anda
    DB_PASSWORD=db_password_anda
    ```
3. **Generate Key**
   ```sh
   php artisan key:generate
   ```
4. **Jalankan migrate**
   ```sh
   # terlebih dahulu nyalakan xampp mysql
   php artisan migrate:fresh
   ```
5. **Testing**
   ```sh
   php artisan test
   ```
6. **Mulai**
   ```sh
   # jika ingin menjalankan frontend (app react native) di android
   php artisan serve --host=0.0.0.0 --port=8000
   # jika ingin menjalankan frontend (app react native) di emulator
   php artisan serve
   ```
## Tambahan 
Jika bagian frontend belum diatur, silahkan disesuaikan agar aplikasi dapat berjalan dengan harapan 
```sh
cd ./../frontend
```

## Kontak

Ilham Rahmat Akbar - ilhamrhmtkbr@gmail.com

