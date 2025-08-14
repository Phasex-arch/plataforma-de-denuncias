package phasex.projects.plataformadedenuncias.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import phasex.projects.plataformadedenuncias.beans.ReportTypes;

@Getter
@Setter
@AllArgsConstructor
public class DenunciaRequestDto {
    private ReportTypes reportType;
    private String descricao;
}
