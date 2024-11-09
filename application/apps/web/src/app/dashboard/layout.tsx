import { ReactNode } from 'react';
import { Sidebar } from '@persofin/dashboard';

interface IProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: IProps) => {
  return (
    <div className={'bg-gray-200 h-full w-full flex'}>
      <Sidebar />
      <div className={'w-full p-5'}>{children}</div>
    </div>
  );
};

export default DashboardLayout;
