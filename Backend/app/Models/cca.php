<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cca extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'cca_sports',
        'eca_sports',
        'major_game',
        'minor_game'
    ];
}