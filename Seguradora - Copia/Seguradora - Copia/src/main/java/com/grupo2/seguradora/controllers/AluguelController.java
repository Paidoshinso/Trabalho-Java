package com.grupo2.seguradora.controllers;

import com.grupo2.seguradora.domain.Aluguel;
import com.grupo2.seguradora.services.AluguelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/aluguel")
public class AluguelController {

    @Autowired
    private AluguelService aluguelService;

    @PostMapping("/calcular")
    public double calcularAluguel(@RequestBody Aluguel aluguel) {
        return aluguelService.calcularTotal(aluguel);
    }
}
