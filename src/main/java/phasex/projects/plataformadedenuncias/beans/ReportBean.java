package phasex.projects.plataformadedenuncias.beans;

import jakarta.persistence.*;
import lombok.*;


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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Integer id;

    @Enumerated(EnumType.STRING)
    private ReportTypes tipo;

    private String descricao;

    private LocalDateTime dataCriacao;

    @Column(name = "token_denuncia")
    private UUID tokenDenuncia;

    public ReportBean(ReportTypes tipo, String conteudoCriptografado) {
        this.tipo = tipo;
        this.descricao = conteudoCriptografado;
        this.dataCriacao = LocalDateTime.now();
        this.tokenDenuncia = UUID.randomUUID();
    }

}
