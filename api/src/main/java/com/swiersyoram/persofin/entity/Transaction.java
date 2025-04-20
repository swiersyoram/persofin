package com.swiersyoram.persofin.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Entity
@Table(name = "transactions")
@Getter
@Setter
public class Transaction extends BaseEntity {

    private Integer amount;
    private String description;
    private UUID userId;
}
