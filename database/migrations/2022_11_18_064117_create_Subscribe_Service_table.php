<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubscribeServiceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Subscribe_Service', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->string('First_Name', 100);
            $table->string('Last_Name', 100)->nullable();
            $table->string('Email', 100)->nullable();
            $table->bigInteger('Phonenumber');
            $table->string('subscribe', 100)->nullable();
            $table->string('plan', 100)->nullable();
            $table->string('day', 50)->nullable();
            $table->string('address', 256)->nullable();
            $table->string('city', 50)->nullable();
            $table->string('State', 50)->nullable();
            $table->integer('cust_ID')->nullable()->unique('cust_ID');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Subscribe_Service');
    }
}
