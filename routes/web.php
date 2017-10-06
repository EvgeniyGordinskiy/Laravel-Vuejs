<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('{path}', function () {
    return view('index');
})->where('path', '(.*)');

Route::post('auth', ['as' => 'auth.authenticate', 'uses' => 'Auth\LoginController@login']);
Route::post('auth/register', ['as' => 'auth.register', 'uses' => 'Auth\RegisterController@register']);
Route::post('auth/logout', ['as' => 'auth.logout', 'uses' =>'Auth\LoginController@logout']);