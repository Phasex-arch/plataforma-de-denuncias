package phasex.projects.plataformadedenuncias.exceptions;

public class InvalidTokenException extends RuntimeException {
    public InvalidTokenException(String message) {
        super(message);
    }
    public InvalidTokenException() {super("Token de denúncia inválido");}
}
