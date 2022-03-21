package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import com.example.myapplication.Dialogs.LoginFailedDialog;

public class Login extends AppCompatActivity implements View.OnClickListener{

    EditText username, password;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        Button login = findViewById(R.id.loginButton);
        TextView register = findViewById(R.id.registerLogin);
        register.setOnClickListener(this);
        login.setOnClickListener(this);


    }

    @Override
    public void onClick(View view) {
        switch(view.getId()){
            case R.id.loginButton:

                username = findViewById(R.id.usernameLogin);
                password = findViewById(R.id.passwordLogin);

                if (username.getText().toString().equals("admin")  && password.getText().toString().equals("passwort") ){

                    Intent i = new Intent(this, Home.class);
                    startActivity(i);

                }
                else {
                    LoginFailedDialog loginFailedDialog = new LoginFailedDialog();
                    loginFailedDialog.show(getSupportFragmentManager(),"Login Failed Try again");
                }

                break;
            case R.id.registerLogin:
                Intent j = new Intent(this, Register.class);
                startActivity(j);
                break;
        }


    }
}