'use client'; // Mark this component as a Client Component

import { PowerIcon } from '@heroicons/react/24/outline'; // Example icon (optional)

export default function SignOutButton() {
  const handleSignOut = async () => {
    try {
      const response = await fetch('/api/signout', { method: 'GET' });
      if (response.ok) {
        console.log('Signed out successfully');
        // Redirect the user to the homepage or login page
        window.location.href = '/';
      } else {
        console.error('Failed to sign out');
      }
    } catch (error) {
      console.error('Error during sign-out:', error);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
    >
      <PowerIcon className="w-6" /> {/* Example icon */}
      <div className="hidden md:block">Sign Out</div>
    </button>
  );
}