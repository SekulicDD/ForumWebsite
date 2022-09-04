<?php

namespace Database\Seeders;

use App\Models\Message;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MessageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    private $msg=["Slazem se u potpunosti.","Veoma zanimljiv sadrzaj.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel blandit ipsum. Phasellus sit amet dapibus orci, ut dapibus magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam sit amet turpis vel tortor varius tempor. Sed vitae lorem mauris. Morbi feugiat massa mi, malesuada viverra leo sodales non. Vivamus et lorem et nulla suscipit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sit amet urna dignissim, et lobortis nisi sagittis. Cras ipsum justo, vestibulum eu fringilla pretium, tempus non tortor. Duis sit amet arcu id nibh luctus hendrerit. Phasellus vehicula porta aliquet. Phasellus bibendum mauris mi, a tempor eros tincidunt vitae. In in nibh odio.","Mauris pellentesque nunc vitae turpis vehicula, in semper dui pretium. Cras at placerat urna, eget consequat metus. Nunc ipsum ante, malesuada vel cursus sed, malesuada eu nisi. Suspendisse potenti."];
 
    public function run()
    {
        for ($i = 1; $i <= count($this->msg); $i++) {
            DB::table('messages')->insert([
                'user_id' => $i,
                'text_content' => $this->msg[$i-1],
            ]);
        }
    }
}
