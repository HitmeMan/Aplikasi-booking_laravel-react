<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class kursi extends Model
{
    use HasFactory;
    
    /**
     * fillable
     * 
     * @var array
     */
    protected $fillable = [
        'no_kuris',
        'tempat_asal',
        'destinasi',
        'harga'
    ];
}
