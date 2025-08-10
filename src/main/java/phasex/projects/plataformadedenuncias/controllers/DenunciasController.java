package phasex.projects.plataformadedenuncias.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import phasex.projects.plataformadedenuncias.dtos.DenunciaRequestDto;
import phasex.projects.plataformadedenuncias.dtos.DenunciaResponseDTO;
import phasex.projects.plataformadedenuncias.services.DenunciaService;

@RestController
@RequestMapping("/api/denuncia")
public class DenunciasController {

    private final DenunciaService denunciaService;

    public DenunciasController(DenunciaService denunciaService) {
        this.denunciaService = denunciaService;
    }

    @PostMapping
    public ResponseEntity<DenunciaResponseDTO> postarDenuncia(@RequestBody DenunciaRequestDto denuncia) {
        DenunciaResponseDTO denunciaID = denunciaService.save(denuncia);
        return ResponseEntity.status(HttpStatus.CREATED).body(denunciaID);

    }



}
