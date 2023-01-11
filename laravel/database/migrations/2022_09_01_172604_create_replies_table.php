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
        Schema::create('replies', function (Blueprint $table) {
            $table->id();
            $table->string("text_content");
            $table->foreignId("user_id")->refrences("id")->on("users")->onDelete('cascade');
            $table->foreignId("post_id")->refrences("id")->on("posts")->onDelete('cascade');
            $table->foreignId('reply_id')->refrences("id")->on("replies")->unsigned()->nullable();
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
        Schema::dropIfExists('replies');
    }
};
