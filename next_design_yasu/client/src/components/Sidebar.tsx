// components/Sidebar.tsx
import React from 'react';
import { useRouter } from 'next/router';

interface MenuItemProps {
  name: string;
  ext: string;
  filename: string;
  icon: string;
}

const menuItems: MenuItemProps[] = [
  { name: 'Kotlin', filename: 'kotlin.kt', ext: 'kt', icon: '/icons/kotlin.svg' },
  { name: 'C#', filename: 'csharp.cs', ext: 'cs', icon: '/icons/csharp.svg' },
  { name: 'Scala', filename: 'scala.scala', ext: 'scala', icon: '/icons/scala.svg' },
  { name: 'Ruby', filename: 'ruby.rb', ext: 'rb', icon: '/icons/ruby.svg' },
  { name: 'Python', filename: 'python.py', ext: 'py',  icon: '/icons/python.svg' },
  { name: 'Go', filename: 'go.go', ext: 'go', icon: '/icons/go.svg' },
  { name: 'Java', filename: 'java.java', ext: 'java', icon: '/icons/java.svg' },
  { name: 'Javascript', filename: 'javascript.js', ext: 'js', icon: '/icons/javascript.svg' },
  { name: 'Swift', filename: 'swift.swift', ext: 'swift', icon: '/icons/swift.svg' },
  { name: 'PHP', filename: 'php.php', ext: 'php', icon: '/icons/php.svg' },
  { name: 'Laravel', filename: 'laravel.php', ext: 'php', icon: '/icons/laravel.svg' },
  { name: 'Symfony', filename: 'symfony.php', ext: 'php', icon: '/icons/symfony.svg' },
  { name: 'Rails', filename: 'rails.rb', ext: 'rb', icon: '/icons/rails.svg' },
];

const Sidebar = ({language, setLanguage, setFile}:any) => {
  const router = useRouter();

  return (
    <div>
      <div className="p-0">
        <h2 className="sidebarTitle text-xl font-semibold mb-4 text-[#000000]">Application :</h2>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
                <div key={item.name} onClick={() => {setLanguage(item.name); setFile(item.filename)}} className={`flex items-center p-2 rounded-[2.85px] sidebarText h-[1.463rem] ${language.pathname === item.name ? 'bg-blue-500' : 'text-gray-700 hover:bg-[#3154E0] border-indigo-500'}`}>
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