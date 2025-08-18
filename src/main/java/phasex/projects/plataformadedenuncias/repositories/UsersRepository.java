package phasex.projects.plataformadedenuncias.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import phasex.projects.plataformadedenuncias.beans.UserBean;

import java.util.List;

public interface UsersRepository extends JpaRepository<UserBean, String> {

    UserDetails findByEmail(String email);
    UserDetails findByLogin(String login);
}
