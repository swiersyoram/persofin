create Table IF NOT EXISTS accounts (
                            id UUID primary key,
                            name VARCHAR(255),
                            description VARCHAR(255),
                            iban VARCHAR(34),
                            created_date timestamp,
                            last_modified_date timestamp,
                            created_by VARCHAR(255),
                            last_modified_by VARCHAR(255),
                            owner_id VARCHAR(255)
);

create Table IF NOT EXISTS transactions (
                              id UUID primary key,
                              amount int,
                              description VARCHAR(255),
                              created_at timestamp,
                              updated_at timestamp,
                              created_by UUID,
                              updated_by UUID,
                              account_id UUID,
                              FOREIGN KEY (account_id) REFERENCES accounts(id)
                              ON DELETE CASCADE
);
