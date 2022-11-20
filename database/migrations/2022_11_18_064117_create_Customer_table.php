<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Student', function (Blueprint $table) {
            $table->integer('ID')->unique('ID');
            $table->string('First_Name', 100);
            $table->string('Last_Name', 100)->nullable();
            $table->string('Email', 100)->nullable()->unique('Email');
            $table->dateTime('Created_Date')->nullable()->useCurrent();
            $table->timestamp('Last_Update')->nullable()->useCurrent();
            $table->integer('Address_ID')->nullable();
            $table->string('Password', 75);
            $table->string('User_Type', 7);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Student');
    }
}
