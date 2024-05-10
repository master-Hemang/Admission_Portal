<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class personal_details extends Model
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
        'college_email',
        'aadhar_number',
        'country',
        'state',
        'city',
        'pincode',
        'permanent_address_line_1',
        'permanent_address_line_2',
        'blood_group',
        'nationality',
        'religion',
        'birth_place',
        'uploaded_photo',
        'uploaded_signature'
    ];

}