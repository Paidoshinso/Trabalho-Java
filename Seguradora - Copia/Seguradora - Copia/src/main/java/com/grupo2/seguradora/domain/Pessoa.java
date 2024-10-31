package com.grupo2.seguradora.domain;

import jakarta.persistence.MappedSuperclass;

@MappedSuperclass // Indica que esta classe será estendida, mas não se torna uma entidade diretamente
public abstract class Pessoa {
    private String nome;
    private String cpfCnpj;

    public Pessoa(){
    }

    public Pessoa(String nome, String cpfCnpj) {
        this.nome = nome;
        this.cpfCnpj = cpfCnpj;
    }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getCpfCnpj() { return cpfCnpj; }
    public void setCpfCnpj(String cpfCnpj) { this.cpfCnpj = cpfCnpj; }
}