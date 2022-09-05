<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
use App\Mail\ResetPasswordMail;
use App\Models\ResetPassword;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Str;

class ResetPasswordController extends Controller
{
    public function resetPassword(Request $request){
        if(!$this->validateEmail($request->email)){
           return $this->failedResponse();
        }
        $this->sendEmail($request->email);
        return $this->successfulResponse();
    }

    private function validateEmail($email){
        return !!User::where('email', $email)->first();
    }

    private function sendEmail($email){
        $token=$this->createToken($email);
        Mail::to($email)->send(new ResetPasswordMail($token));
    }

    private function createToken($email){
        $oldToken = ResetPassword::where('email', $email)->select("token")->first();
        if($oldToken)
            return $oldToken->token;

        $token=Str::random(60);
        $resetPass=new ResetPassword([
            "email"=>$email,
            "token"=>$token,
            "created_at"=>Carbon::now()
        ]);
        $resetPass->save();
        return $token;
    }

    private function failedResponse(){
        return response()->json([
            "error"=>"Email is not found in database. Please try again."
        ],Response::HTTP_NOT_FOUND);
    }

    private function successfulResponse(){
        return response()->json([
            "message"=>"We sent you reset password, please check your email."
        ],Response::HTTP_OK);
    }

    public function changePassword(Request $request){
        $validator = Validator::make($request->all(), [
            'password' => 'required|string|min:6',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }

        $user=User::where('email', $request->email)->first();
        if(!$user){
            return response()->json([
                "error"=>"Token is invalid. Please try again."
            ],Response::HTTP_BAD_REQUEST);
        }
        $user->password=Hash::make($request->password);
        $user->save();
        ResetPassword::where('email',$request->email)->delete();

        return response()->json([
            "success"=>"Password changed succesfuly."
        ],Response::HTTP_OK);
    }

}
