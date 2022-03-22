package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.ArrayMap;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.example.myapplication.Dialogs.EmailMatchDialog;
import com.example.myapplication.Dialogs.FillFormDialog;
import com.example.myapplication.Dialogs.LengthDialog;
import com.example.myapplication.Dialogs.PasswordMatchDialog;

import java.util.Map;

import com.example.myapplication.data.models.remotes.ApiService;
import com.example.myapplication.data.models.remotes.ApiUtils;
import com.example.myapplication.data.models.Login;

import org.json.JSONObject;

import okhttp3.RequestBody;
import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class Register extends AppCompatActivity implements View.OnClickListener {

    private static final String TAG = "";
    private ApiService mApiService;

    EditText username, email, confirmEmail, password, confirmPassword;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        Button register = findViewById(R.id.registerButtonReg);
        register.setOnClickListener(this);


    }

    @Override
    public void onClick(View view) {


        username = findViewById(R.id.emailReg);
        email = findViewById(R.id.emailReg);
        confirmEmail = findViewById(R.id.emailBestätigenReg);
        password = findViewById(R.id.passwortReg);
        confirmPassword = findViewById(R.id.passwortBestätigenReg);

        if (!email.getText().toString().equals(confirmEmail.getText().toString())) {
            //email.getText().clear();
            confirmEmail.getText().clear();
            EmailMatchDialog emailMatchDialog = new EmailMatchDialog();
            emailMatchDialog.show(getSupportFragmentManager(), "dialog email do not match");


        } else if (username.getText().toString().equals("") || email.getText().toString().equals("") || password.getText().toString().equals("") || confirmPassword.getText().toString().equals("") || confirmEmail.getText().toString().equals("") || !email.getText().toString().contains("@")) {
            FillFormDialog fillFormDialog = new FillFormDialog();
            fillFormDialog.show(getSupportFragmentManager(), "empty form");


        } else if (!password.getText().toString().equals(confirmPassword.getText().toString())) {
            confirmPassword.getText().clear();
            password.getText().clear();
            PasswordMatchDialog passwordMatchDialog = new PasswordMatchDialog();
            passwordMatchDialog.show(getSupportFragmentManager(), "dialog password do not match");
        } else if (username.getText().toString().length() < 3 || password.getText().toString().length() < 3) {
            confirmPassword.getText().clear();
            password.getText().clear();
            LengthDialog lengthDialog = new LengthDialog();
            lengthDialog.show(getSupportFragmentManager(), "dialog length to short");
        } else if (email.getText().toString().equals(confirmEmail.getText().toString()) && password.getText().toString().equals(confirmPassword.getText().toString())) {
            sendRegister(email.getText().toString(), password.getText().toString(), username.getText().toString());
            Intent intent = new Intent(this, SignIn.class);
            startActivity(intent);


        }

    }

    private void sendRegister(String mEmail, String mPassword, String mUsername) {

        Map<String, Object> jsonParams = new ArrayMap<>();
        jsonParams.put("password", mPassword);
        jsonParams.put("e_mail", mEmail);
        jsonParams.put("username", mUsername);

        RequestBody body = RequestBody.create(okhttp3.MediaType.parse("application/json; charset=utf-8"), (new JSONObject(jsonParams)).toString());

        Call<ResponseBody> response = mApiService.sendRegister(body);

        response.enqueue(new Callback<ResponseBody>() {
            @Override
            public void onResponse(Call<ResponseBody> call, Response<ResponseBody> response) {
                if (response.isSuccessful()) {


                } else {


                }

            }

            @Override
            public void onFailure(Call<ResponseBody> call, Throwable t) {
                System.out.println("Exception: " + t);

            }

        });
    }
}