package phasex.projects.plataformadedenuncias.exceptions;

public class TipoInvalidoException extends RuntimeException {
    public TipoInvalidoException(String message) {
        super(message);
    }
    public TipoInvalidoException(){super("Tipo de denuncia inválido");}
}
