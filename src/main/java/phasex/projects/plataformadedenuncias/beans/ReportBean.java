package phasex.projects.plataformadedenuncias.beans;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "denuncia")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class ReportBean{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private UUID id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ReportTypes tipo;

    @Column(nullable = false)
    private String conteudoCriptografado;

    @Column(nullable = false)
    private LocalDateTime dataCriacao;

    @Column(nullable = false)
    private boolean investigada = false;

    public ReportBean(ReportTypes tipo, String conteudoCriptografado) {
        this.tipo = tipo;
        this.conteudoCriptografado = conteudoCriptografado;
        this.dataCriacao = LocalDateTime.now();
    }

}
