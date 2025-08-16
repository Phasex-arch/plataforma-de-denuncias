package phasex.projects.plataformadedenuncias.dtos;

import phasex.projects.plataformadedenuncias.beans.ReportTypes;

public record UpdateReportResponseDTO(String descricao, ReportTypes reportType) {
}
