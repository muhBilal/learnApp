<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('pages.home');
});
Route::get('/menu', function () {
    return view('pages.menu');
});

// Route::get('/admin', function () {
//     return view('admin.pages.dashboard');
// });
