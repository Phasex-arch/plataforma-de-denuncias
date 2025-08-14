package phasex.projects.plataformadedenuncias.beans;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "report")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class ReportBean{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @EqualsAndHashCode.Include
    private Integer id;

    @Enumerated(EnumType.STRING)
    private ReportTypes tipo;

    private String descricao;

    private LocalDateTime dataCriacao;

    private UUID token_denuncia;

    public ReportBean(ReportTypes tipo, String conteudoCriptografado) {
        this.tipo = tipo;
        this.descricao = conteudoCriptografado;
        this.dataCriacao = LocalDateTime.now();
    }

}
