// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface MenuItemProps {
  name: string;
  href: string;
  icon: string;
}

const menuItems: MenuItemProps[] = [
  { name: 'Kotlin', href: '/kotlin', icon: '/icons/kotlin.svg' },
  { name: 'C#', href: '/csharp', icon: '/icons/csharp.svg' },
  { name: 'Scala', href: '/scala', icon: '/icons/scala.svg' },
  { name: 'Ruby', href: '/ruby', icon: '/icons/ruby.svg' },
  { name: 'Python', href: '/python', icon: '/icons/python.svg' },
  { name: 'Go', href: '/go', icon: '/icons/go.svg' },
  { name: 'Java', href: '/java', icon: '/icons/java.svg' },
  { name: 'JavaScript', href: '/javascript', icon: '/icons/javascript.svg' },
  { name: 'Swift', href: '/swift', icon: '/icons/swift.svg' },
  { name: 'PHP', href: '/php', icon: '/icons/php.svg' },
  { name: 'Laravel', href: '/laravel', icon: '/icons/laravel.svg' },
  { name: 'Symfony', href: '/symfony', icon: '/icons/symfony.svg' },
  { name: 'Rails', href: '/rails', icon: '/icons/rails.svg' },
];

const Sidebar = ({language, setLanguage}:any) => {
  const router = useRouter();

  return (
    <div>
      <div className="p-0">
        <h2 className="sidebarTitle text-xl font-semibold mb-4 text-[#000000]">Application :</h2>
        <ul>
          {menuItems.map((item) => (
            <li key={item.href}>
                <div onClick={() => setLanguage(item.name)} className={`flex items-center p-2 rounded-[2.85px] sidebarText h-[1.463rem] ${language.pathname === item.name ? 'bg-blue-500' : 'text-gray-700 hover:bg-[#3154E0] border-indigo-500'}`}>
                  <img src={item.icon} alt={item.name} className="h-[11.41px] w-[11.41px] mr-3" />
                  {item.name}
                </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
