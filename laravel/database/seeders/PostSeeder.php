<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {
        for ($i = 1; $i < 4; $i++) {
            DB::table('posts')->insert([
                'title'=>"Neki title",
                'category_id'=>5-$i,
                'message_id'=>$i
            ]);
        }
    }
}
