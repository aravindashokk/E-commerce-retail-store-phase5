<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Services', function (Blueprint $table) {
            $table->integer('Service_ID')->primary();
            $table->string('Service_Name', 50)->nullable();
            $table->string('Service_Desc', 1000)->nullable();
            $table->integer('PriceperPound')->nullable();
            $table->integer('LateService_charges')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Services');
    }
}
