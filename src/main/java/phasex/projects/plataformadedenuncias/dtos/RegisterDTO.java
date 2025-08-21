package phasex.projects.plataformadedenuncias.dtos;

import phasex.projects.plataformadedenuncias.beans.UserRole;

public record RegisterDTO(String login, String password, String email, UserRole role) {
}
