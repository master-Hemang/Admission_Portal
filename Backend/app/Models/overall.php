<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class overall extends Model
{
    use HasFactory;

    protected $fillable = [
        'jee_main_application_no',
        'institute_name',
        'first_name',
        'middle_name',
        'last_name',
        'email',
        'contact_no',
        'category',
        'allocated_category',
        'date_of_birth',
        'gender',
        'preparatory',
        'divyang',
        'admission_based_on',
        'course_code',
        'course',
        'branch',
        'email_username', 
        'email_password',
        'fee_amount',
        'fee_date',
        'fee_mode',
        'transaction_id',
    ];

}