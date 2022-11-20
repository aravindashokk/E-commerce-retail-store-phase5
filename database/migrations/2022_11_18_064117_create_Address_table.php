<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAddressTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Address', function (Blueprint $table) {
            $table->integer('ID')->primary();
            $table->string('Address', 50)->nullable();
            $table->string('Address_2', 50)->nullable();
            $table->string('District', 30)->nullable();
            $table->string('City', 30)->nullable();
            $table->string('State', 30)->nullable();
            $table->string('Country', 30)->nullable();
            $table->integer('Postal_Code')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Address');
    }
}
