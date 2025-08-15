package phasex.projects.plataformadedenuncias.dtos;

import phasex.projects.plataformadedenuncias.beans.ReportTypes;

import java.time.LocalDateTime;
import java.util.UUID;

public record DenunciaTokenResponse(String description, ReportTypes reportType, LocalDateTime dataCriacao, UUID denunciaToken) {
}
