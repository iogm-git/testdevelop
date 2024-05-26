<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SchoolsTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_get_schools()
    {
        $response = $this->json('get', 'api/schools');

        $response->assertStatus(200);
    }

    public function test_store_school()
    {
        $response = $this->json('post', 'api/schools', [
            'nama' => '',
            'tipe' => ''
        ]);

        $response->assertStatus(422);
    }
}
