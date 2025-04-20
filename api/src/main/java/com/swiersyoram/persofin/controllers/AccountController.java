package com.swiersyoram.persofin.controllers;

import com.swiersyoram.persofin.entity.Accounts.Account;
import com.swiersyoram.persofin.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "/accounts")
@RequiredArgsConstructor
public class AccountController {
    private final AccountService accountService;

    @PostMapping()
    @PreAuthorize("hasAuthority('PERMISSION_create:accounts')")
    public Account createAccount(@RequestBody Account account) {
        return accountService.saveAccount(account);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('PERMISSION_update:accounts')")
    public Account updateAccount(
            @PathVariable UUID id,
            @RequestBody Account updatedAccount
    ) {
        return accountService.updateAccount(id, updatedAccount);
    }

    @GetMapping("")
    @PreAuthorize("hasAuthority('PERMISSION_read:accounts')")
    public List<Account> getAccounts(
            Principal principal
    ) {
        return accountService.getAccountsByOwnerId(principal.getName());
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('PERMISSION_read:accounts')")
    public Account getAccount(
            @PathVariable UUID id
    ) {
        return accountService.getAccountById(id);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('PERMISSION_delete:accounts')")
    public void deleteAccount(
            @PathVariable UUID id
    ) {
        accountService.deleteAccount(id);
    }

}
