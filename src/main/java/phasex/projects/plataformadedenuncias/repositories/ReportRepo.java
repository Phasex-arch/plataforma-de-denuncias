package phasex.projects.plataformadedenuncias.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import phasex.projects.plataformadedenuncias.beans.ReportBean;

public interface ReportRepo extends JpaRepository<ReportBean, Integer> {

}
