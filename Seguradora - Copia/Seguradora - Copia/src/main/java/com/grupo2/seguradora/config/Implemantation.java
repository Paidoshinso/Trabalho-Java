package com.grupo2.seguradora.config;

import com.grupo2.seguradora.domain.Usuario;
import com.grupo2.seguradora.repositorio.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Implemantation implements CommandLineRunner {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public void run(String... args) throws Exception {

        usuarioRepository.deleteAll();

        usuarioRepository.save(new Usuario("nome", "cpf",null, "senha", "cep"));
    }
}
