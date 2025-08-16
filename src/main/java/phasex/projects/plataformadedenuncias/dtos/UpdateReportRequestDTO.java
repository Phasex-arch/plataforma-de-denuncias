package phasex.projects.plataformadedenuncias.dtos;

import phasex.projects.plataformadedenuncias.beans.ReportTypes;

public record UpdateReportRequestDTO(ReportTypes reportType, String descricao) {
}
