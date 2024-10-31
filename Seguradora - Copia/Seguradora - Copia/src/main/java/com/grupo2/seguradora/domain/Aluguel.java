package com.grupo2.seguradora.domain;

import jakarta.persistence.Entity;

@Entity
public class Aluguel extends Transacao {
    private String modelo;
    private int quantidade;
    private String tipoSeguro;

    public String getModelo() { return modelo; }
    public void setModelo(String modelo) { this.modelo = modelo; }

    public int getQuantidade() { return quantidade; }
    public void setQuantidade(int quantidade) { this.quantidade = quantidade; }

    public String getTipoSeguro() { return tipoSeguro; }
    public void setTipoSeguro(String tipoSeguro) { this.tipoSeguro = tipoSeguro; }

    @Override
    public void calcularValorTotal() {
        double precoAluguel = quantidade * 100; // Exemplo de preço por carro
        double precoSeguro = "Completo".equals(tipoSeguro) ? 200 : 100;
        this.valorTotal = precoAluguel + precoSeguro;
    }
}
