<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Payment', function (Blueprint $table) {
            $table->integer('Order_ID')->nullable();
            $table->string('Payment_Type', 50)->nullable();
            $table->timestamp('Payment_DateTime')->nullable();
            $table->string('Payment_Status', 10)->nullable();
            $table->integer('Bill_No')->primary();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Payment');
    }
}
