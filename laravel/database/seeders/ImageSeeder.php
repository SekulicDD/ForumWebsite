<?php

namespace Database\Seeders;

use App\Models\Image;
use DB;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */


    public function run()
    {
        Image::factory()->count(60)->create();
       
    
    }
}
