// components/Sidebar.tsx
import React from 'react';
import { useRouter } from 'next/router';

interface MenuItemProps {
  name: string;
  ext: string;
  filename: string;
  language: string;
  icon: string;
}

const menuItems: MenuItemProps[] = [
  { name: 'Kotlin', language: "kotlin", filename: 'kotlin.kt', ext: 'kt', icon: '/icons/kotlin.svg' },
  { name: 'C#', language: "csharp", filename: 'csharp.cs', ext: 'cs', icon: '/icons/csharp.svg' },
  { name: 'Scala', language: "scala", filename: 'scala.scala', ext: 'scala', icon: '/icons/scala.svg' },
  { name: 'Ruby', language: "ruby", filename: 'ruby.rb', ext: 'rb', icon: '/icons/ruby.svg' },
  { name: 'Python', language: "python", filename: 'python.py', ext: 'py',  icon: '/icons/python.svg' },
  { name: 'Go', language: "go", filename: 'go.go', ext: 'go', icon: '/icons/go.svg' },
  { name: 'Java', language: "java", filename: 'java.java', ext: 'java', icon: '/icons/java.svg' },
  { name: 'Javascript', language: "javascript", filename: 'javascript.js', ext: 'js', icon: '/icons/javascript.svg' },
  { name: 'Swift', language: "swift", filename: 'swift.swift', ext: 'swift', icon: '/icons/swift.svg' },
  { name: 'PHP', language: "php", filename: 'php.php', ext: 'php', icon: '/icons/php.svg' },
  { name: 'Laravel', language: "php", filename: 'laravel.php', ext: 'php', icon: '/icons/laravel.svg' },
  { name: 'Symfony', language: "twig", filename: 'symfony.twig', ext: 'twig', icon: '/icons/symfony.svg' },
  { name: 'Rails', language: "ruby", filename: 'rails.rb', ext: 'rb', icon: '/icons/rails.svg' },
];

const Sidebar_backend = ({language, setLanguage, file, setFile}:any) => {
  const router = useRouter();

  return (
    <div>
      <div className="p-0">
        {/* <h2 className="sidebarTitle text-xl font-semibold mb-4 text-[#000000]">Application :</h2> */}
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
                <div key={item.name} onClick={() => {setLanguage(item.language); setFile(item.filename)}} className={`flex items-center p-2 rounded-[2.85px] sidebarText h-[1.463rem] text-gray-700 font-medium ${file==item.filename? 'bg-[#3154E0] !text-white' : ''} ${language.pathname === item.name ? 'bg-[#3154E0] text-white' : ' border-indigo-500'}`}>
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

export default Sidebar_backend;
