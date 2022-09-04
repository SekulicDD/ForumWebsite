<?php

namespace Database\Seeders;

use App\Models\Notification;
use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NotificationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('notifications')->insert([
            'user_id' => 1,
            'post_id' => 1,
        ]);
        DB::table('notifications')->insert([
            'user_id' => 1,
            'post_id' => 2,
        ]);
        DB::table('notifications')->insert([
            'user_id' => 2,
            'post_id' => 3,
        ]);
    }
}
