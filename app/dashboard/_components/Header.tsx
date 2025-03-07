import React from 'react';
import { Search } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center'>
      <div className='ml-auto'> {/* Push UserButton to the right */}
        <UserButton afterSignOutUrl='/' appearance={{ layout: { avatarSize: 48 } }} /> {/* Make UserButton bigger */}
      </div>
    </div>
  );
}

export default Header;
