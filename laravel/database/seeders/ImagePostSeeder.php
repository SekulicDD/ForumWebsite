<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ImagePostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('image_post')->insert([
            'image_id' => 1,
            'post_id' => 2,
        ]);
        DB::table('image_post')->insert([
            'image_id' => 2,
            'post_id' => 2,
        ]);
        DB::table('image_post')->insert([
            'image_id' => 3,
            'post_id' => 3,
        ]);
    }
}
