<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Seeder;

class ReplySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {      
        DB::table('replies')->insert([
            'user_id' => 1,
            'post_id' => 2,
            'text_content'=>"Neki reply"
        ]);
        DB::table('replies')->insert([
            'user_id' => 2,
            'post_id' => 2,
            'text_content'=>"Neki drugi text reply"
        ]);
        DB::table('replies')->insert([
            'user_id' => 1,
            'post_id' => 2,
            'reply_id'=>2,
            'text_content'=>"Neki reply na neki drugi reply"
        ]);
    }
}
