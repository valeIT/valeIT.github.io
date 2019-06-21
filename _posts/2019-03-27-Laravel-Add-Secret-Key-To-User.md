---
layout: post
title: Hoe to add a secret key to your user in Laravel
date: 2019-03-27 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

First, we need to update our database to add the field to store the secret key. Open a terminal window to your project's root and run:

```
php artisan make:migration addsecretkey_users_table
```

This will create a database migration. Open the generated migration file in database/migrations and add the field in the database for the key:

```
<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddsecretkeyUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function ($table) {
            $table->string('api_secret_key');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function ($table) {
            $table->dropColumn('api_secret_key');
        });
    }
}
```

Open the User object in /app/User.php and generate the key for each new user. We want the key to be created each time a new user registers, we also want that once a key is set nobody is able to edit it. And finally, we want the user not to be able to see the key directly.

To hide the key we add it to the hidden fields array:

```
 /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'api_secret_key',
    ];
```

Now we can initialize the key each time we initialize a User. I haven't found a way to do it properly so we 'hack' the email setter and also set the secret key the first time we set the email. (If anyone knows a way to do it better, please let me know!)

```
public function setEmailAttribute($value)//gets called each time the email is set or changed
    {
        $this->attributes['email'] = $value;//first we set the email, this would be the only thing in the original method
        if (!isset($this->attributes['api_secret_key'])) {//we check if the key is not already set
            $this->attributes['api_secret_key'] = $this->generateApiKey();//if it's not we set the result of the generateApiKey method into the api_secret_key field
        }
    }
```

We can now implement the generateApiKey method:

```
 public function generateApiKey()
    {
        return bin2hex(random_bytes(32));
    }
```

Please note that accoding to PHP documentation random_bytes is cryptographically secure:

> Returns a string containing the requested number of cryptographically secure random bytes.

Obviously, don't use this for passwords. Use Laravel integrated password management! It is really easy to use and straightforward.
