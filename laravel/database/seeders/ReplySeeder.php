<?php

namespace Database\Seeders;

use App\Models\Reply;
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
        Reply::factory()->count(200)->create(); 
    }
}
