<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (!auth()->attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Credenciales incorrectas, por favor intente de nuevo'
            ], 401);
        }
        $user = auth()->user();
        $user->token = $user->createToken('authToken')->plainTextToken;
        return response()->json([
            'user' => $user,
            'message' => 'Registro exitoso'
        ]);
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6|confirmed'
        ]);

        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password)
            ]);

            $user->token = $user->createToken('authToken')->plainTextToken;

            return response()->json([
                'user' => $user,
                'message' => 'Registro exitoso'
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage()
            ], 500);
        }

    }
}
