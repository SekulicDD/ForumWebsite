<?php

namespace Database\Seeders;

use App\Models\Image;
use App\Models\Post;
use DB;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ImagePostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        for ($i = 0; $i < 30; $i++) {
            DB::table('image_post')->insert([
                'image_id' => $faker->numberBetween(1, Image::count()),
                'post_id'=> $faker->unique()->numberBetween(1, Post::count()),
            ]);
        }
       
    }
}
