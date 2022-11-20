<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiceOrderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Service_Order', function (Blueprint $table) {
            $table->increments('Order_ID');
            $table->integer('Customer_ID')->nullable();
            $table->unsignedBigInteger('Phonenumber')->nullable();
            $table->string('Service', 30)->nullable();
            $table->string('First_Name', 100);
            $table->string('Last_Name', 100)->nullable();
            $table->string('Email', 100)->nullable();
            $table->integer('items')->nullable();
            $table->string('instruction', 100)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Service_Order');
    }
}
