package com.example2.demo.services;
import org.springframework.stereotype.Service;
import com.example2.demo.dto.PokemonResponse;
import com.example2.demo.dto.QuizRequest;

@Service // el frontend envía las respuestas y Spring Boot se encarga de procesarlas 
public class FormService {

    public PokemonResponse pokemon(QuizRequest respuestas){
        
        int sumaPuntos = respuestas.getPregunta1() + respuestas.getPregunta2()
        + respuestas.getPregunta3() + respuestas.getPregunta4() + respuestas.getPregunta5();

        String nombrePokemon;
        String imagenPokemon;


        if (sumaPuntos <= 7){
            nombrePokemon = "Eevee";
            imagenPokemon = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png";
        } else if (sumaPuntos <= 11){
            nombrePokemon = "Mew";
            imagenPokemon = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/151.png";
        }else if (sumaPuntos <= 13){
            nombrePokemon = "Pikachu";
            imagenPokemon = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png";
        }else {
            nombrePokemon = "Bulbasur";
            imagenPokemon = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png";
        }

        return new PokemonResponse(nombrePokemon, imagenPokemon);

    }
    
}
