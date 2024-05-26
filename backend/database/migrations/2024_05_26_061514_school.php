<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schools', function (Blueprint $table) {
            $table->id();
            $table->longText('foto')->nullable();
            $table->enum('tipe', ['swasta', 'negeri']);
            $table->string('nama');
            $table->string('alamat');
            $table->string('kode_pos');
            $table->enum('provinsi', config('province.name'));
            $table->enum('kabupaten', config('province.city'));
            $table->string('telepon');
            $table->string('email');
            $table->string('facebook')->nullable();
            $table->string('jumlah_siswa');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schools');
    }
};
