<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function index()
    {
        $data = [
            [
                "name" => "John",
                "age" => 25

            ],
            [
                "name" => "Doe",
                "age" => 30
            ]
        ];
        return Inertia::render('Page', compact('data'));
    }

    public function getUsers(): JsonResponse
    {
        return response()->json([
            'users' => [
                [
                    "name" => "John",
                    "age" => 25
                ]
            ]
        ]);
    }
}
