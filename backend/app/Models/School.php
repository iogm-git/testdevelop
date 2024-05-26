<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    public $incrementing = false;
    protected $guarded = ['id'];

    protected $casts = [
        'created_at' => 'datetime:d M Y',
    ];
}
