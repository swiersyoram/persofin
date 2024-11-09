package com.swiersyoram.persofin.repository;

import com.swiersyoram.persofin.entity.Accounts.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface AccountRepository extends JpaRepository<Account, UUID> {
    List<Account> findByOwnerId(String ownerId);
}
