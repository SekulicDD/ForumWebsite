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
            RoleSeeder::class, //done
            UserSeeder::class,//done
            CategorySeeder::class,//done
            PostSeeder::class,//done
            ReplySeeder::class,//done
            ImageSeeder::class,//done
            ImagePostSeeder::class, //done
            NotificationSeeder::class,
            FriendSeeder::class,
        ]);
    }
}
