<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class hostel_details extends Model
{
    use HasFactory;

    protected $fillable = [
        'college_email',
        'food_habit',
        'laptop_details',
        'model_no',
        'serial_no'
    ];
}