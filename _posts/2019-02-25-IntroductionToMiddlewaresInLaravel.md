---
layout: post
title: Introduction To Middlewares In Laravel
date: 2019-02-21 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: []
image: /assets/article_images/.jpeg
image2: /assets/article_images/.jpeg
author: Valentino Urbano
---

<!-- Ever wanted to add a check to your Laravel APIs? -->

[
In Laravel to add a check against an API we need to add a middleware. It can for example check if the api key is correct, or if the user is logged in. FOr example in [markdown love][1] I use a middleware to check at each request if that specific user has enough calls remaining that month to be able to process the request.

1. Create a new middleware class in "\App\Http\Middleware", call it for example "CheckApiKey" and add:

```
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use App\User;


class CheckApiKey
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        //DO YOUR CHECK

        return $next($request);
    }
}
```

The check can be as simple or as complicated as you like, for this tutorial we are simply going to check if the request contains a valid API KEY. Replace "//DO YOUR CHECK" with:

```
        $key = $request->input('apiKey');//use input if the value is in the body
        //$key = $request->header('apiKey');//use header if the value is in the header
        $hostname = env('API_KEY_APPLICATION');

        if ($key !== $hostname) {
            response('Not valid request.', 401);
        }
```

It reads the content from the request for the key 'apiKey' and checks if it's the same key that we loaded in the environemnt. To load the key in the environment open .env and add at the bottom:

```
API_KEY_APPLICATION = TESTKEY
```

Now we need to assign a name to the middleware. Go in "App\Http\Kernel" and add to the "\$routeMiddleware" array the entry for the apiKey check:

```
        'checkApiKey' => \App\Http\Middleware\CheckApiKey::class
```

Finally we need to assign the middleware to our route. Go to routes/api and add it to the route:

```
Route::post('/user', 'Api\APIController@getUser')->middleware('checkApiKey');
```

[1]: ;mdlove

](
In Laravel, we can add a check in any API, by adding a middleware to that specific endpoint. A middleware is a function that will check preconditions and continue execution only if these conditions are met. Otherwise, you can return an error message to the application making the request knows how to behave and what to show to the user.

A middle can, for example, check if the API Key the client is using is correct, or if the user making the request exists and is currently logged in.

In [Markdown Love][1] I use a middleware to check before each request if that specific user account has enough API calls remaining that month to be able to convert the content to markdown.

## Add a Middleware to your Laravel Project

1. Create a new middleware class in "\App\Http\Middleware" and call it as you wish, for example, I used "CheckApiKey". The name should reflect what the check is for. Open the file and add:

```
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use App\User;


class CheckApiKey
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  request
     * @param  \Closure  next
     * @return mixed
     */
    public function handle(request, Closure next)
    {
        //DO YOUR CHECK

        return next(request);
    }
}
```

The check can be as simple or as complicated as you like, for this tutorial we are simply going to check if the request contains a valid API KEY.

Replace "//DO YOUR CHECK" with:

```
        key = request->input('apiKey');//use input if the value is in the body
        //key = request->header('apiKey');//use header if the value is in the header
        hostname = env('API_KEY_APPLICATION');

        if (key !== hostname) {
            response('Not valid request.', 401);
        }
```

The method reads the content from the request for the key 'apiKey' and checks if it's the same key that we loaded in the environment. Please note the comments on 2 different if the key is in the header or body of the request. The 'env' is the key that we loaded our server with.

To load it in the environment open .env and add at the bottom:

```
API_KEY_APPLICATION = TESTKEY
```

Remember that if you have cached your configuration you might need to clear the cache and recache the updated value.

Now we need to assign a name to the middleware class to be able to use it. Go in "App\Http\Kernel" and add to the "\$routeMiddleware" array the entry for the apiKey check:

```
        'checkApiKey' => \App\Http\Middleware\CheckApiKey::class
```

From this time on you can refer to the middleware by its name 'checkApiKey'.

Finally we need to assign the middleware to our route. Go to routes/api and add it to the route:

```
Route::post('/user', 'Api\APIController@getUser')->middleware('checkApiKey');
```

This will check the middleware and only deliver the request to your controller if it passes all the checks implemented in the middleware file.

[1]: https://markdown.love

)
