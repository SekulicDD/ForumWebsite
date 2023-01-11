<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    private $roles = ["Admin","User"];
    public function run()
    {
        for ($i = 0; $i < count($this->roles); $i++) {
            DB::table('roles')->insert([
                'name' => $this->roles[$i],
            ]);
        }
    }
}
