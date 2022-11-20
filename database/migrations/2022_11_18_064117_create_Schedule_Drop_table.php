<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateScheduleDropTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Schedule_Drop', function (Blueprint $table) {
            $table->string('First_Name', 100);
            $table->string('Last_Name', 100)->nullable();
            $table->string('Email', 100)->nullable();
            $table->bigInteger('Phonenumber')->nullable()->unique('Phonenumber');
            $table->string('service', 50)->nullable();
            $table->date('date')->nullable();
            $table->time('time')->nullable();
            $table->integer('customer_ID');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Schedule_Drop');
    }
}
