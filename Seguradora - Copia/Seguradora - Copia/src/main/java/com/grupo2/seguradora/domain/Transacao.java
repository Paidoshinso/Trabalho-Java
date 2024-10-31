package com.grupo2.seguradora.domain;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class Transacao {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    protected double valorTotal;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public double getValorTotal() { return valorTotal; }
    public void setValorTotal(double valorTotal) { this.valorTotal = valorTotal; }

    // Método abstrato para ser implementado pelas classes derivadas
    public abstract void calcularValorTotal();
}
