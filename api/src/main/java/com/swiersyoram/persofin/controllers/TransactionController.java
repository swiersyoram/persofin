package com.swiersyoram.persofin.controllers;

import com.swiersyoram.persofin.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/transactions")
public class TransactionController {
    private final TransactionRepository transactionRepository;
}
