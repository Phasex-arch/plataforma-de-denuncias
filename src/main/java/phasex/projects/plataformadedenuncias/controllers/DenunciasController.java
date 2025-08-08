package phasex.projects.plataformadedenuncias.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import phasex.projects.plataformadedenuncias.dtos.DenunciaRequestDto;

@RestController
@RequestMapping("/api/denuncia")
public class DenunciasController {

    @PostMapping
    public ResponseEntity<?> postarDenuncia(@RequestBody DenunciaRequestDto denuncia) {
        return null;

    }



}
