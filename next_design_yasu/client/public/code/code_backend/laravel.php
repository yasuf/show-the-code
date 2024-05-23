<?php
// File: routes/web.php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return 'Hello, Laravel!';
});

// Function example
Route::get('/greet/{name}', function ($name) {
    return "Hello, $name!";
});

// Call the function
echo app()->make('router')->dispatch(request()->create('/greet/World'))->getContent();
?>
