package com.example2.demo.dto;

public class PokemonResponse {
    private String nombre;
    private String imagen;

    public PokemonResponse(String nombre, String imagen){
        this.nombre = nombre;
        this.imagen = imagen;
    }

    public String getNombre(){
        return nombre;
    }

    public String getImagen(){
        return imagen;
    }
}
