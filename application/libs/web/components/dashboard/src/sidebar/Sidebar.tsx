import { PLogo } from '@persofin/icons';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { ApiRoutes, ApplicationRoutes } from '@persofin/utils';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { MdWallet } from 'react-icons/md';

interface SideBarItem extends PropsWithChildren {
  route: ApplicationRoutes;
}

function SideBarItem({ children, route }: SideBarItem) {
  return (
    <Link href={route}>
      <div className={'cursor-pointer hover:scale-105 duration-150'}>
        {children}
      </div>
    </Link>
  );
}

export function Sidebar() {
  return (
    <div className={'p-5'}>
      <div
        className={
          'w-[65px] rounded-md h-full bg-white flex flex-col items-center shadow p-5 justify-between'
        }
      >
        <div className={'flex-col'}>
          <Link href={ApplicationRoutes.dashboard} className={'cursor-pointer'}>
            <PLogo className={'h-fit w-full mb-5'} />
          </Link>
          <SideBarItem route={ApplicationRoutes.accounts}>
            <MdWallet className={'text-3xl'} />
          </SideBarItem>
        </div>
        <a href={ApiRoutes.logout}>
          <RiLogoutCircleLine className={'text-xl cursor-pointer'} />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
