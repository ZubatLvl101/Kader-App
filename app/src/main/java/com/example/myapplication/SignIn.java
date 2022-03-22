package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.collection.ArrayMap;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import com.example.myapplication.Dialogs.LoginFailedDialog;

import org.json.JSONObject;

import java.io.IOException;
import java.util.Map;

import com.example.myapplication.data.models.remotes.ApiService;
import com.example.myapplication.data.models.remotes.ApiUtils;
import com.example.myapplication.data.models.Login;
import okhttp3.RequestBody;
import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class SignIn extends AppCompatActivity implements View.OnClickListener {
    private static final String TAG = "";
    private ApiService mApiService;
    static SignIn apiKey;
    private String key;
    static String token;
    EditText email, password;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        Button login = findViewById(R.id.loginButton);
        login.setOnClickListener(this);

        TextView register = findViewById(R.id.registerLogin);
        register.setOnClickListener(this);


        mApiService = ApiUtils.getApiService();
        email = findViewById(R.id.usernameLogin);
        password = findViewById(R.id.passwordLogin);


    }

    @Override
    public void onClick(View view) {
        switch (view.getId()) {
            case R.id.loginButton:

                email = findViewById(R.id.usernameLogin);
                password = findViewById(R.id.passwordLogin);

                if (email.getText().toString() != null && password.getText().toString() != null) {
                    sendLogin(email.getText().toString(), password.getText().toString());

                    if (token != null) {
                        Intent intent = new Intent(this, Home.class);
                        startActivity(intent);


                    }
                }
                break;

            case R.id.registerLogin:
                Intent j = new Intent(this, Register.class);
                startActivity(j);
                break;
        }


    }

    private void sendLogin(String mEmail, String mPassword) {

        Map<String, Object> jsonParams = new ArrayMap<>();
        jsonParams.put("password", mPassword);
        jsonParams.put("e_mail", mEmail);

        RequestBody body = RequestBody.create(okhttp3.MediaType.parse("application/json; charset=utf-8"), (new JSONObject(jsonParams)).toString());

        Call<ResponseBody> response = mApiService.sendLogin(body);

        response.enqueue(new Callback<ResponseBody>() {
            @Override
            public void onResponse(Call<ResponseBody> call, Response<ResponseBody> response) {
                if (response.isSuccessful()) {
                    try {
                        token = "token " + response.body().string();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }

                } else {

                    LoginFailedDialog loginFailedDialog = new LoginFailedDialog();
                    loginFailedDialog.show(getSupportFragmentManager(), "Login Failed Try again");


                }

            }

            @Override
            public void onFailure(Call<ResponseBody> call, Throwable t) {
                System.out.println("Exception: " + t);

            }

        });
    }
}