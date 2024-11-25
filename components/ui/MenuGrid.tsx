import React from 'react';
import Link from 'next/link';

const MenuGrid = () => {
  const menuItems = [
    { title: 'Construction', link: '/Construction', icon: '📊' },
    { title: 'Cc Cameras', link: '/Cc Cameras', icon: '⚙️' },
    { title: 'WebSite Design', link: '/WebSite Design', icon: '👤' },
    { title: 'Home Appliances', link: '/Home Appliances', icon: '✉️' },
    { title: 'Finance', link: '/analytics', icon: '📈' },
    { title: 'Brahmin', link: '/help', icon: '❓' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {menuItems.map((item, index) => (
        <Link href={item.link} key={index}>
          <div className="group flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer">
            <div className="text-5xl mb-2 transition-transform transform group-hover:scale-110">
              {item.icon}
            </div>
            <div className="text-lg font-medium text-gray-700 mt-2 group-hover:text-blue-600">
              {item.title}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuGrid;

// Tailwind CSS classes used:
// - `grid`: Creates a grid layout.
// - `grid-cols-2 md:grid-cols-3 lg:grid-cols-4`: Defines responsive column numbers.
// - `gap-6`: Adds spacing between grid items.
// - `p-4`: Adds padding around the container.
// - `bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow`: Adds card style with shadow and hover effect.
// - `text-5xl mb-2`: Styles the icon.
// - `group-hover:scale-110`: Adds a hover effect to scale up icons.
// - `text-lg font-medium text-gray-700 group-hover:text-blue-600`: Styles the underlying text with hover effect.

// Usage: 
// Import MenuGrid in your Next.js page (e.g., `pages/index.tsx`) and include it as a component.

// Note: This component is designed to be a grid display of card items, each linking to a new page, not a traditional dropdown menu.
