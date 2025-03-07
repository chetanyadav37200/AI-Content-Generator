import React from 'react';
import { UserButton } from '@clerk/nextjs';

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center'>
      <div className='ml-auto'> {/* Push UserButton to the right */}
      <UserButton afterSignOutUrl="/" appearance={{ elements: { avatarBox: { width: 48, height: 48 } } }} />

      </div>
    </div>
  );
}

export default Header;
