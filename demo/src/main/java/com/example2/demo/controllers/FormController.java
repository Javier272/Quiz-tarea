package com.example2.demo.controllers;
import org.springframework.web.bind.annotation.*;

import com.example2.demo.services.FormService;
import com.example2.demo.dto.QuizRequest;
import com.example2.demo.dto.PokemonResponse;

@RestController
@RequestMapping("/api")
public class FormController {
    
    private FormService formService;

    public FormController(FormService formService){
        this.formService = formService;
    }

    @PostMapping("/quiz")

    public PokemonResponse quiz(@RequestBody QuizRequest respuestas){
        return formService.pokemon(respuestas);
    }
}
