package com.grupo2.seguradora.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Usuario extends Pessoa {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String senha;
    private String cep;

    public Usuario() {}

    public Usuario(String nome, String cpfCnpj, Long id, String senha, String cep) {
        super(nome, cpfCnpj);
        this.id = id;
        this.senha = senha;
        this.cep = cep;
    }



    // Getters e Setters adicionais
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getSenha() { return senha; }
    public void setSenha(String senha) { this.senha = senha; }

    public String getCep() { return cep; }
    public void setCep(String cep) { this.cep = cep; }
}
