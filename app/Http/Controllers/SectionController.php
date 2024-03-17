<?php

namespace App\Http\Controllers;

use App\Http\Requests\Section\StoreRequest;
use App\Http\Requests\Section\UpdateRequest;
use App\Http\Resources\Branch\BranchResource;
use App\Models\Section;

class SectionController extends Controller
{

    public function index()
    {
        return inertia('Section/Index');
    }


    public function create()
    {
        return inertia('Section/Create');
    }


    public function store(StoreRequest $request)
    {
        $data = $request->validated();
        Section::firstOrCreate($data);
        return redirect()->route('sections.index');
    }


    public function show(Section $section)
    {
        //
    }


    public function edit(Section $section)
    {
        //
    }


    public function update(UpdateRequest $request, Section $section)
    {
        //
    }


    public function destroy(Section $section)
    {
        //
    }

    public function branchIndex(Section $section) {
        // dd(BranchResource::collection($section->branches)->resolve());
        return BranchResource::collection($section->branches)->resolve();
    }
}
