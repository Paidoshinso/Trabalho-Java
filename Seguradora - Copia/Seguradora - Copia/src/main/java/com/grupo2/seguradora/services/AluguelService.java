package com.grupo2.seguradora.services;

import com.grupo2.seguradora.domain.Aluguel;
import org.springframework.stereotype.Service;

@Service
public class AluguelService {

    public double calcularTotal(Aluguel aluguel) {
        aluguel.calcularValorTotal();
        return aluguel.getValorTotal();
    }
}
