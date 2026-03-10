package com.example2.demo.dto;

public class QuizRequest {
    private int pregunta1;
    private int pregunta2;
    private int pregunta3;
    private int pregunta4;
    private int pregunta5;

    //Getters
    public int getPregunta1() {
        return pregunta1;
    }

    public int getPregunta2() {
        return pregunta2;
    }

    public int getPregunta3() {
        return pregunta3;
    }

    public int getPregunta4() {
        return pregunta4;
    }

    public int getPregunta5() {
        return pregunta5;
    }

    //Setters
    public void setPregunta1(int pregunta1){
        this.pregunta1 = pregunta1;
    }

    public void setPregunta2(int pregunta2){
        this.pregunta2 = pregunta2;
    }

    public void setPregunta3(int pregunta3){
        this.pregunta3 = pregunta3;
    }

    public void setPregunta4(int pregunta4){
        this.pregunta4 = pregunta4;
    }

    public void setPregunta5(int pregunta5){
        this.pregunta5 = pregunta5;
    }
}
