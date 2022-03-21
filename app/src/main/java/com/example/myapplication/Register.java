package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;

import com.example.myapplication.Dialogs.EmailMatchDialog;
import com.example.myapplication.Dialogs.FillFormDialog;
import com.example.myapplication.Dialogs.LengthDialog;
import com.example.myapplication.Dialogs.PasswordMatchDialog;

public class Register extends AppCompatActivity implements View.OnClickListener {

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
        username = findViewById(R.id.usernameReg);
        email = findViewById(R.id.emailReg);
        confirmEmail = findViewById(R.id.emailBestätigenReg);
        password = findViewById(R.id.passwortReg);
        confirmPassword = findViewById(R.id.passwortBestätigenReg);


        if (view.getId() == R.id.registerButtonReg) {

            if (!email.getText().toString().equals(confirmEmail.getText().toString())) {
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
                Intent intent = new Intent(this, Login.class);
                startActivity(intent);

            }
        }
    }
}