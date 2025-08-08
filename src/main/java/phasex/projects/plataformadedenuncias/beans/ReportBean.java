package phasex.projects.plataformadedenuncias.beans;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;
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
    @GeneratedValue(strategy = GenerationType.AUTO)
    @EqualsAndHashCode.Include
    private UUID id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ReportTypes tipo;

    @Column(nullable = false)
    private String conteudoCriptografado;

    @Column(nullable = false)
    private String hashVerificacao;

    @Column(nullable = false)
    private Timestamp dataCriacao;

    @Column(nullable = false)
    private boolean investigada = false;
}
