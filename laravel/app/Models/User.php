<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;
use \Staudenmeir\LaravelMergedRelations\Eloquent\HasMergedRelationships;
class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable, HasMergedRelationships;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function role(){
        return $this->belongsTo(Role::class);
    }

    public function posts(){
        return $this->hasMany(Post::class);
    }

    public function replies(){
        return $this->hasMany(Reply::class);
    }

    public function notifications()
    {
        return $this->belongsTo(Notification::class);
    }

    public function image(){
        return $this->belongsTo(Image::class);
    }

    //JWT
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    public function getJWTCustomClaims()
    {
        return [];
    }

    //FRIENDS
    
    public function friendsTo()
    {
        return $this->belongsToMany(User::class,"users_friends","user_id","friend_id")
        ->withPivot('accepted');
    }

    public function friendsFrom()
    {
        return $this->belongsToMany(User::class,"users_friends","friend_id","user_id")
        ->withPivot('accepted');
    }

    public function pendingFriendsTo()
    {
        return $this->friendsTo()->wherePivot('accepted', false);
    }
    
    public function pendingFriendsFrom()
    {
        return $this->friendsFrom()->wherePivot('accepted', false);
    }
    
    public function acceptedFriendsTo()
    {
        return $this->friendsTo()->wherePivot('accepted', true);
    }
    
    public function acceptedFriendsFrom()
    {
        return $this->friendsFrom()->wherePivot('accepted', true);
    }

    public function friends()
    {
        return $this->mergedRelationWithModel(User::class, 'friends_view');
    }
}
