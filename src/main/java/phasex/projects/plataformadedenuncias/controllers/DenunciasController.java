package phasex.projects.plataformadedenuncias.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import phasex.projects.plataformadedenuncias.beans.ReportBean;
import phasex.projects.plataformadedenuncias.dtos.*;
import phasex.projects.plataformadedenuncias.services.DenunciaService;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/denuncia")
public class DenunciasController {

    private final DenunciaService denunciaService;

    @Autowired
    public DenunciasController(DenunciaService denunciaService) {
        this.denunciaService = denunciaService;
    }

    @PostMapping
    public ResponseEntity<DenunciaResponseDTO> postarDenuncia(@RequestBody DenunciaRequestDto denuncia) {
        DenunciaResponseDTO denunciaSalva = denunciaService.save(denuncia);
        return ResponseEntity.status(HttpStatus.CREATED).body(denunciaSalva);

    }

    @GetMapping("/denuncias")
    public ResponseEntity<List<DenunciaResponseDTO>> getDenuncias() {
        List<DenunciaResponseDTO> denuncias = new ArrayList<>();
        List<ReportBean> reports = denunciaService.findAll();
        for (ReportBean report : reports) {
            denuncias.add(denunciaService.createResponseDTO(report));

        }
        return ResponseEntity.ok(denuncias);
    }

    @GetMapping("/{token}")
    public ResponseEntity<DenunciaTokenResponse> getDenuncia(@PathVariable String token) {
        DenunciaTokenResponse response = denunciaService.createTokenResponse(denunciaService.findByUUID(UUID.fromString(token)));
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{token}")
    public ResponseEntity<DenunciaTokenResponse> deleteDenunciaByToken(@PathVariable String token) {
        DenunciaTokenResponse response = denunciaService.deleteByUUID(UUID.fromString(token));

        return ResponseEntity.ok(response);
    }

    @PatchMapping("/{token}")
    public ResponseEntity<UpdateReportResponseDTO> updateDenuncia(@PathVariable String token,@RequestBody UpdateReportRequestDTO denuncia) {
        UpdateReportResponseDTO updatedReport = denunciaService.updateReportByUUID(UUID.fromString(token),denuncia);
        return ResponseEntity.ok(updatedReport);
    }


}
