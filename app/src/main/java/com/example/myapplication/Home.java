package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class Home extends AppCompatActivity implements View.OnClickListener{

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
        Button kader = findViewById(R.id.kaderButtonHome);
        Button tabelle = findViewById(R.id.tabelleButtonHome);
        Button ergebnisse = findViewById(R.id.ergebnisseButtonHome);
        Button news = findViewById(R.id.newsButtonHome);
        Button einstellungen = findViewById(R.id.einstellungenButtonHome);
        Button wetten = findViewById(R.id.wettenButtonHome);

        kader.setOnClickListener(this);
        tabelle.setOnClickListener(this);
        ergebnisse.setOnClickListener(this);
        news.setOnClickListener(this);
        einstellungen.setOnClickListener(this);
        wetten.setOnClickListener(this);
    }

    @Override
    public void onClick(View view) {
        switch (view.getId()){
            case R.id.kaderButtonHome:
                Intent i = new Intent(this,Kader.class);
                startActivity(i);
                break;
            case R.id.tabelleButtonHome:
                Intent j = new Intent(this,Tabelle.class);
                startActivity(j);
                break;
            case R.id.ergebnisseButtonHome:
                Intent k = new Intent(this,Ergebnisse.class);
                startActivity(k);
                break;
            case R.id.newsButtonHome:
                Intent l = new Intent(this,News.class);
                startActivity(l);
                break;
            case R.id.einstellungenButtonHome:
                Intent m = new Intent(this,Einstellungen.class);
                startActivity(m);
                break;
            case R.id.wettenButtonHome:
                Intent n = new Intent(this,Wettenansicht.class);
                startActivity(n);
                break;
        }

    }
}