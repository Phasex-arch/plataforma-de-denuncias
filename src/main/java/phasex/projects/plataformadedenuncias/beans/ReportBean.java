package phasex.projects.plataformadedenuncias.beans;


import jakarta.persistence.*;
import org.springframework.data.jpa.repository.JpaRepository;

@Entity
@Table(name = "reports")
public interface ReportBean extends JpaRepository<ReportBean, Integer> {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;

    ReportTypes reportType;
    String title;
    String description;
}
