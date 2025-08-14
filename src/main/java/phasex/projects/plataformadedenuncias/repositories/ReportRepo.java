package phasex.projects.plataformadedenuncias.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import phasex.projects.plataformadedenuncias.beans.ReportBean;

@Repository
public interface ReportRepo extends JpaRepository<ReportBean, Integer> {

}
