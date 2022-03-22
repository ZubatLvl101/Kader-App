package com.example.myapplication.data.models.remotes;



import com.example.myapplication.SignIn;

import com.example.myapplication.data.models.Login;
import com.example.myapplication.data.models.LoginRequest;

import okhttp3.RequestBody;
import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Response;
import retrofit2.http.Body;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.GET;
import retrofit2.http.Header;
import retrofit2.http.Headers;
import retrofit2.http.POST;
import retrofit2.http.PUT;

public interface ApiService {
    @POST("/login")
    Call<ResponseBody> sendLogin(@Body RequestBody loginRequest);

    @POST("/register")
    Call<ResponseBody> sendRegister(@Body RequestBody registerRequest);

    @POST("/logout")
    Call<Void> sendLogout(@Header("Authorization") String token);


}
