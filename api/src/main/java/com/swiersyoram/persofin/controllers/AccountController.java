package com.swiersyoram.persofin.controllers;

import com.swiersyoram.persofin.entity.Accounts.Account;
import com.swiersyoram.persofin.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "/accounts")
public class AccountController {

    @Autowired
    AccountService accountService;

    @PostMapping()
    @PreAuthorize("hasAuthority('PERMISSION_create:accounts')")
    public Account createAccount(@RequestBody Account account) {
        return accountService.saveAccount(account);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('PERMISSION_update:accounts')")
    public void updateAccount(
            @PathVariable UUID id,
            @RequestBody Account updatedAccount
    ) {
        accountService.updateAccount(id, updatedAccount);
    }

    @GetMapping("")
    @PreAuthorize("hasAuthority('PERMISSION_read:accounts')")
    public List<Account> getAccounts(
            Principal principal
    ) {
        return accountService.getAccountsByOwnerId(principal.getName());
    }

}
