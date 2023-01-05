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
        DB::table('users_friends')->insert([
            'user_id' => 1,
            'friend_id' => 2,
            'accepted'=> 1
        ]);
        DB::table('users_friends')->insert([
            'user_id' => 1,
            'friend_id' => 3,
            'accepted'=> 1
            
        ]);
         DB::table('users_friends')->insert([
            'user_id' => 2,
            'friend_id' => 3,
            'accepted'=> 0
        ]);
        DB::table('users_friends')->insert([
            'user_id' => 2,
            'friend_id' => 4,
            'accepted'=> 1
        ]);
    }
}
