<?php

namespace App\Http\Controllers;

use App\Models\School;
use App\Rules\School\City;
use App\Rules\School\Province;
use App\Rules\School\Type;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class SchoolController extends Controller
{
    public function data()
    {
        return response()->json([
            'type' => 'data',
            'success' => true,
            'result' => School::all()
        ]);
    }

    public function store()
    {
        $validator = Validator::make(request()->all(), [
            'foto' => 'nullable|string',
            'tipe' => ['required', new Type],
            'nama' => 'required|string|between:5,17',
            'alamat' => 'required|string|between:5,17',
            'kode_pos' => 'required|numeric|digits_between:3,5',
            'provinsi' => ['required', new Province],
            'kabupaten' => ['required', new City(request('provinsi'))],
            'telepon' => 'required|numeric|digits_between:8,14',
            'email' => 'required|email:dns',
            'facebook' => 'nullable|string|between:5,35',
            'jumlah_siswa' => 'required|numeric|between:1,100',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'type' => 'validation_error',
                'errors' => $validator->errors(),
            ], 422);
        }

        try {
            $schoolData = [
                'foto' => request('foto'),
                'tipe' => request('tipe'),
                'nama' => request('nama'),
                'alamat' => request('alamat'),
                'kode_pos' => request('kode_pos'),
                'provinsi' => request('provinsi'),
                'kabupaten' => request('kabupaten'),
                'telepon' => request('telepon'),
                'email' => request('email'),
                'facebook' => request('facebook'),
                'jumlah_siswa' => request('jumlah_siswa'),
            ];

            School::create($schoolData);

            return response()->json([
                'success' => true,
                'message' => 'School created successfully.',
            ], 201);
        } catch (\Exception $exception) {
            Log::error($exception);

            return response()->json([
                'success' => false,
                'message' => 'Failed to create school.',
            ], 500);
        }
    }
}
