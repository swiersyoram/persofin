create Table IF NOT EXISTS accounts (
                            id UUID primary key,
                            name VARCHAR(255),
                            description VARCHAR(255),
                            created_date timestamp,
                            last_modified_date timestamp,
                            created_by VARCHAR(255),
                            last_modified_by VARCHAR(255),
                            owner_id VARCHAR(255)
);