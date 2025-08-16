package phasex.projects.plataformadedenuncias.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import phasex.projects.plataformadedenuncias.beans.ReportBean;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ReportRepo extends JpaRepository<ReportBean, Integer> {
    Optional<ReportBean> findBytokenDenuncia(UUID tokenDenuncia);

    void deleteBytokenDenuncia(UUID id);
}
