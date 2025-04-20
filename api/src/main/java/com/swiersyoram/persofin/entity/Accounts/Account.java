package com.swiersyoram.persofin.entity.Accounts;

import com.swiersyoram.persofin.entity.BaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "accounts")
public class Account extends BaseEntity {
    private String name;
    private String description;
    private String ownerId;
    private String iban;
}
