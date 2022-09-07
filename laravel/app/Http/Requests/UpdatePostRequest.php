<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;

class UpdatePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    // public function authorize()
    // {
    //     return false;
    // }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'id'=>'required|exists:posts,id',
            'message_id'=>'required|exists:messages,id',
            'user_id'=>[
                'required|exists:users,id',
                Rule::exists("messages","user_id")->where("message_id","message_id")  
            ],
            'title'=> ' max:50',
            'category_id'=>'exists:categories,id',
            'text_content'=>' min:10 | max:1000',
            'title'=>'min:10 | max:100'
        ];       
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success'   => false,
            'message'   => 'Validation errors',
            'data'      => $validator->errors()
        ]));
    }
}
