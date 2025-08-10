package phasex.projects.plataformadedenuncias.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import phasex.projects.plataformadedenuncias.beans.ReportBean;
import phasex.projects.plataformadedenuncias.dtos.DenunciaRequestDto;
import phasex.projects.plataformadedenuncias.dtos.DenunciaResponseDTO;
import phasex.projects.plataformadedenuncias.repositories.ReportRepo;

import java.util.List;
import java.util.UUID;

@Service
public class DenunciaService {

    private final ReportRepo reportRepo;

    public DenunciaService(ReportRepo reportRepo) {
        this.reportRepo = reportRepo;
    }

    public DenunciaResponseDTO save(DenunciaRequestDto denunciaDto) {
        ReportBean reportBean = new ReportBean(denunciaDto.getReportType(),denunciaDto.getConteudoCriptografado());
        reportRepo.save(reportBean);
        return new DenunciaResponseDTO(reportBean.getId());
    }

    public List<ReportBean> findAll() {
        return reportRepo.findAll();
    }

    public ReportBean findById(UUID id) {
        return reportRepo.findById(id).orElse(null);
    }

    public void delete(UUID id) {
        reportRepo.deleteById(id);
    }

}
