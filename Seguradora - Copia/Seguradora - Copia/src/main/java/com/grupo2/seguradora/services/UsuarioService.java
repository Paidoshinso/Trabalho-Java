package com.grupo2.seguradora.services;

import com.grupo2.seguradora.domain.Usuario;
import com.grupo2.seguradora.repositorio.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Usuario> findAll() {
        return usuarioRepository.findAll();
    }

    public Usuario findById(long id) {
        Optional<Usuario> user = usuarioRepository.findById(id);
        user.orElseThrow();
        return user.get();
    }

    public Usuario insert(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }
}
