<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    private $names=["Category 1","Category 2","Category 3","Category 4"];

    public function run()
    {
        for ($i = 0; $i < count($this->names); $i++) {
            DB::table('categories')->insert([
                'name' => $this->names[$i],
            ]);
        }
    }

}
