package phasex.projects.plataformadedenuncias.services;



import org.springframework.stereotype.Service;
import phasex.projects.plataformadedenuncias.beans.ReportBean;
import phasex.projects.plataformadedenuncias.dtos.DenunciaRequestDto;
import phasex.projects.plataformadedenuncias.dtos.DenunciaResponseDTO;
import phasex.projects.plataformadedenuncias.dtos.DenunciaTokenResponse;
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
        ReportBean reportBean = new ReportBean(denunciaDto.getReportType(),denunciaDto.getDescricao());
        reportRepo.save(reportBean);
        return new DenunciaResponseDTO( reportBean.getDescricao(),reportBean.getTipo(),reportBean.getDataCriacao(),reportBean.getTokenDenuncia());
    }

    public DenunciaResponseDTO createResponseDTO(ReportBean reportBean) {
        return new DenunciaResponseDTO(reportBean.getDescricao(),reportBean.getTipo(),reportBean.getDataCriacao(),reportBean.getTokenDenuncia());
    }

    public DenunciaTokenResponse createTokenResponse(ReportBean reportBean) {
        return new DenunciaTokenResponse(reportBean.getDescricao(),reportBean.getTipo(),reportBean.getDataCriacao(), reportBean.getTokenDenuncia());
    }

    public List<ReportBean> findAll() {
        return reportRepo.findAll();
    }

    public ReportBean findById(Integer id) {
        return reportRepo.findById(id).orElse(null);
    }

    public ReportBean findByUUID(UUID uuid) {
        return reportRepo.findBytokenDenuncia(uuid).orElse(null);
    }


    public void delete(Integer id) {
        reportRepo.deleteById(id);
    }

}
