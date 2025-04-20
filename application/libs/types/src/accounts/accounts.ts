import { BaseEntity } from '../base-entity';

export interface Account extends BaseEntity {
  name: string;
  description: string;
  owner_id: string;
  iban: string;
}
