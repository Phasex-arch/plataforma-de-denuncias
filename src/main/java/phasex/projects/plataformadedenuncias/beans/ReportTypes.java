package phasex.projects.plataformadedenuncias.beans;

import lombok.Getter;

@Getter
public enum ReportTypes {
    TRABALHISTA("Trabalhista"),
    PUBLICA("Publica"),
    CRIMINAL("Criminal"),
    ADMINISTRATIVA("Administrativa"),
    DIREITOS_HUMANOS("Direitos humanos");

    private String type;

    ReportTypes(String type) { this.type = type; }
}
