<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Seeder;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    private $names=["slika1","slika2","slika3"];
    private $src=["loc/slika1.jpg","loc/slika1.jpg","loc/slika3.jpg"];

    public function run()
    {
        for ($i = 0; $i < count($this->names); $i++) {
            DB::table('images')->insert([
                'name' => $this->names[$i],
                'alt' => $this->names[$i],
                'source' => $this->src[$i],
            ]);
        }
    }
}
