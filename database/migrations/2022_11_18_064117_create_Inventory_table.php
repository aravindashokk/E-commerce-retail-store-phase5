<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInventoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Inventory', function (Blueprint $table) {
            $table->integer('Inventory_ID')->primary();
            $table->integer('Item_ID')->nullable();
            $table->string('Item_Type', 50)->nullable();
            $table->integer('Quantity')->nullable();
            $table->string('Item_Desc', 1000)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Inventory');
    }
}
