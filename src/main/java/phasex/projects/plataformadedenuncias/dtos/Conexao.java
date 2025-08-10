package phasex.projects.plataformadedenuncias.dtos;

import io.github.cdimascio.dotenv.Dotenv;
import java.sql.Connection;
import java.sql.DriverManager;

public class Conexao {
    public static void main(String[] args) {
        try {
            Dotenv dotenv = Dotenv.load();

            String usuario = dotenv.get("DB_USER");
            String senha = dotenv.get("DB_PASSWORD");
            Connection conexao = DriverManager.getConnection(
                    "jdbc:postgresql://localhost:5432/denunciadb-container",
                    usuario,
                    senha
            );
            if (conexao != null) {
                System.out.println("Conectado com sucesso!");
            } else {
                System.out.println("Conexão falhou.");
            }
        } catch (Exception e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}
