package phasex.projects.plataformadedenuncias.controllers;


import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.bind.annotation.*;
import phasex.projects.plataformadedenuncias.beans.UserBean;
import phasex.projects.plataformadedenuncias.dtos.AuthenticateLoginDTO;
import phasex.projects.plataformadedenuncias.dtos.RegisterDTO;
import phasex.projects.plataformadedenuncias.repositories.UsersRepository;

import java.net.URI;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

    private final AuthenticationManager authenticationManager;

    private final UsersRepository usersRepository;

    public AuthenticationController(AuthenticationManager authenticationManager, UsersRepository usersRepository) {
        this.authenticationManager = authenticationManager;
        this.usersRepository = usersRepository;
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid AuthenticateLoginDTO body) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(body.login(), body.password());
        var auth = this.authenticationManager.authenticate(usernamePassword);

        return ResponseEntity.ok().build();

    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody @Valid RegisterDTO body) {
        if(this.usersRepository.findByLogin(body.login())!=null || this.usersRepository.findByEmail(body.email())!=null) {
            return ResponseEntity.badRequest().build();
        };
        String encriptedPassword = new BCryptPasswordEncoder().encode(body.password());

        UserBean user = new UserBean(body.email(), body.login(), encriptedPassword, body.role());
        usersRepository.save(user);
        return ResponseEntity.created(URI.create("/api/user")).body(user);
    }
}
