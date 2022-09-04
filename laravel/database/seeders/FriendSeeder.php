<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Seeder;

class FriendSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('friends')->insert([
            'user_one' => 1,
            'user_two' => 2,
        ]);
        DB::table('friends')->insert([
            'user_one' => 1,
            'user_two' => 3,
        ]);
         DB::table('friends')->insert([
            'user_one' => 2,
            'user_two' => 3,
        ]);
        DB::table('friends')->insert([
            'user_one' => 2,
            'user_two' => 4,
        ]);
    }
}
