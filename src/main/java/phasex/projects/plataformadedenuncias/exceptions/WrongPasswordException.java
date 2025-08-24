package phasex.projects.plataformadedenuncias.exceptions;

public class WrongPasswordException extends RuntimeException {
    public WrongPasswordException(String message) {
        super(message);
    }
    public WrongPasswordException() {super("Senha inválida");}
}
