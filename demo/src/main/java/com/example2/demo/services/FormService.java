package com.example2.demo.services;
import org.springframework.stereotype.Service;
import com.example2.demo.dto.PokemonResponse;
import com.example2.demo.dto.QuizRequest;

@Service
public class FormService {

    public PokemonResponse pokemon(QuizRequest respuestas){
        
        int sumaPuntos = respuestas.getPregunta1() + respuestas.getPregunta2()
        + respuestas.getPregunta3() + respuestas.getPregunta4() + respuestas.getPregunta5();

        String nombrePokemon;
        String imagenPokemon;


        if (sumaPuntos <= 7){
            nombrePokemon = "HOLA1";
            imagenPokemon = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png";
        } else if (sumaPuntos <= 11){
            nombrePokemon = "HOLA2";
            imagenPokemon = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png";
        }else if (sumaPuntos <= 13){
            nombrePokemon = "HOLA3";
            imagenPokemon = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png";
        }else {
            nombrePokemon = "HOLA4";
            imagenPokemon = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png";
        }

        return new PokemonResponse(nombrePokemon, imagenPokemon);

    }
    
}
