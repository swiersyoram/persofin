package com.swiersyoram.persofin.service;

import com.swiersyoram.persofin.entity.Accounts.Account;
import com.swiersyoram.persofin.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class AccountService {
    @Autowired
    AccountRepository accountRepository;
    public Account saveAccount(Account account) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        account.setOwnerId(authentication.getName());
        return accountRepository.save(account);
    }

    public Account updateAccount(UUID id, Account updatedAccount) {
        Account existingAccount = getAccountById(id);
        existingAccount.setName(updatedAccount.getName());
        existingAccount.setDescription(updatedAccount.getDescription());

        return accountRepository.save(existingAccount);
    }


    public Account getAccountById(UUID id) {
        return accountRepository.findById(id).orElseThrow(() -> new RuntimeException("No account found with id "+id));
    }

    public List<Account> getAccountsByOwnerId(String ownerId) {
        return accountRepository.findByOwnerId(ownerId);
    }
}
