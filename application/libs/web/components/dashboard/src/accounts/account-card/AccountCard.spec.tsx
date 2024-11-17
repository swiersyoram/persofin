import { render } from '@testing-library/react';
import { AccountCard } from './AccountCard';
import { Account } from '@persofin/types';
import { undefined } from 'zod';

describe('Sidebar', () => {
  it('should render successfully', () => {
    const account: Account = {
      created_by: '',
      created_date: new Date(),
      last_modified_by: '',
      last_modified_date: new Date(),
      owner_id: '',
      id: '1',
      name: 'Account Name',
      description: 'Account Description',
    };
    const { baseElement } = render(<AccountCard account={account} />);
    expect(baseElement).toBeTruthy();
  });
});
