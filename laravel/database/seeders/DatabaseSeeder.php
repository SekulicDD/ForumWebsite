<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            RoleSeeder::class, 
            UserSeeder::class,
            CategorySeeder::class,
            SubCategorySeeder::class,
            PostSeeder::class,
            ReplySeeder::class,
            ImageSeeder::class,
            ImagePostSeeder::class, 
            NotificationSeeder::class,
            FriendSeeder::class,
        ]);
    }
}
