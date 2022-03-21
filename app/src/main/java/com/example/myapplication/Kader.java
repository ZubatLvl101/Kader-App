package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;

public class Kader extends AppCompatActivity implements View.OnClickListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_kader);

        ImageView Trikot1 = findViewById(R.id.nr1Kader);
        ImageView Trikot2 = findViewById(R.id.nr2Kader);
        ImageView Trikot3 = findViewById(R.id.nr3Kader);
        ImageView Trikot4 = findViewById(R.id.nr4Kader);
        ImageView Trikot5 = findViewById(R.id.nr5Kader);
        ImageView Trikot6 = findViewById(R.id.nr6Kader);
        ImageView Trikot7 = findViewById(R.id.nr7Kader);
        ImageView Trikot8 = findViewById(R.id.nr8Kader);
        ImageView Trikot9 = findViewById(R.id.nr9Kader);
        ImageView Trikot10 = findViewById(R.id.nr10Kader);
        ImageView Trikot11 = findViewById(R.id.nr11Kader);
        ImageView Trikot12 = findViewById(R.id.nr12Kader);
        ImageView Trikot13 = findViewById(R.id.nr13Kader);
        ImageView Trikot14 = findViewById(R.id.nr14Kader);
        ImageView Trikot15 = findViewById(R.id.nr15Kader);
        ImageView Trikot16 = findViewById(R.id.nr16Kader);
        ImageView Trikot17 = findViewById(R.id.nr17Kader);
        ImageView Trikot18 = findViewById(R.id.nr18Kader);
        ImageView Trikot19 = findViewById(R.id.nr19Kader);
        ImageView Trikot20 = findViewById(R.id.nr20Kader);
        ImageView Trikot21 = findViewById(R.id.nr21Kader);
        ImageView Trikot22 = findViewById(R.id.nr22Kader);

        Trikot1.setOnClickListener(this);
        Trikot2.setOnClickListener(this);
        Trikot3.setOnClickListener(this);
        Trikot4.setOnClickListener(this);
        Trikot5.setOnClickListener(this);
        Trikot6.setOnClickListener(this);
        Trikot7.setOnClickListener(this);
        Trikot8.setOnClickListener(this);
        Trikot9.setOnClickListener(this);
        Trikot10.setOnClickListener(this);
        Trikot11.setOnClickListener(this);
        Trikot12.setOnClickListener(this);
        Trikot13.setOnClickListener(this);
        Trikot14.setOnClickListener(this);
        Trikot15.setOnClickListener(this);
        Trikot16.setOnClickListener(this);
        Trikot17.setOnClickListener(this);
        Trikot18.setOnClickListener(this);
        Trikot19.setOnClickListener(this);
        Trikot20.setOnClickListener(this);
        Trikot21.setOnClickListener(this);
        Trikot22.setOnClickListener(this);
    }

    @Override
    public void onClick(View view) {
        switch (view.getId()){
            case R.id.nr1Kader:
            case R.id.nr6Kader:
            case R.id.nr2Kader:
            case R.id.nr3Kader:
            case R.id.nr4Kader:
            case R.id.nr5Kader:
            case R.id.nr7Kader:
            case R.id.nr8Kader:
            case R.id.nr9Kader:
            case R.id.nr10Kader:
            case R.id.nr11Kader:
            case R.id.nr12Kader:
            case R.id.nr13Kader:
            case R.id.nr14Kader:
            case R.id.nr15Kader:
            case R.id.nr16Kader:
            case R.id.nr17Kader:
            case R.id.nr18Kader:
            case R.id.nr19Kader:
            case R.id.nr20Kader:
            case R.id.nr21Kader:
            case R.id.nr22Kader:
                Intent intent = new Intent(this,SpielerBiografie.class);
                startActivity(intent);
                break;

        }
    }
}