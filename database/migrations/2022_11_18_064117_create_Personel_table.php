<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersonelTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Personel', function (Blueprint $table) {
            $table->string('ID', 20)->unique('ID');
            $table->string('First_Name', 100)->nullable();
            $table->string('Last_Name', 100)->nullable();
            $table->string('Email', 100)->nullable()->unique('Email');
            $table->string('Password', 75)->nullable();
            $table->timestamp('Last_Update')->nullable()->useCurrent();
            $table->integer('Address_ID')->nullable();
            $table->string('User_Type', 10);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Personel');
    }
}
