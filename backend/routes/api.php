<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Member;

use App\Http\Controllers\AuthController;

// Auth Routes (Public)
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Protected Routes
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);
    
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});

// Endpoint untuk Integration Test
Route::get('/test-integration', function () {
    try {
        // Cek total member di database
        $count = Member::count();
        
        return response()->json([
            'status' => 'success',
            'message' => 'Integrasi Backend Laravel 13 Berhasil!',
            'data' => [
                'members_count' => $count,
                'php_version' => PHP_VERSION,
                'laravel_version' => app()->version(),
                'server_time' => now()->toDateTimeString(),
            ]
        ], 200);
    } catch (\Exception $e) {
        return response()->json([
            'status' => 'error',
            'message' => 'Gagal terhubung ke Database: ' . $e->getMessage()
        ], 500);
    }
});
