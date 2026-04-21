<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Attributes\Fillable;

#[Table('members')]
#[Fillable(['user_id', 'height', 'weight', 'goal', 'membership_expires_at'])]
class Member extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
