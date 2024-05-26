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
  { name: 'Javascript', filename: 'javascript_front.js', ext: 'js', icon: '/icons/javascript.svg' },
  { name: 'React', filename: 'react.jsx', ext: 'jsx', icon: '/icons/react.svg' },
  { name: 'Android', filename: 'android.java', ext: 'java', icon: '/icons/android.svg' },
  { name: 'Vue', filename: 'vue.js', ext: 'js', icon: '/icons/vue.svg' },
  { name: 'Angular', filename: 'angular.ts', ext: 'ts', icon: '/icons/angular.svg' },
  { name: 'iOS', filename: 'ios.swift', ext: 'swift', icon: '/icons/ios.svg' },
];

const Sidebar_frontend = ({ language, setLanguage, file, setFile }: any) => {
  const router = useRouter();

  return (
    <div>
      <div className="p-0">
        <h2 className="sidebarTitle text-xl font-semibold mb-4 text-[#000000]">Application :</h2>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              {/* <div key={item.name} onClick={() => {setLanguage(item.name); setFile(item.filename)}} className={`flex items-center p-2 rounded-[2.85px] ${file==item.filename? 'bg-[#3154E0] text-[#FFFFFF]' : ''} sidebarText h-[1.463rem] ${language.pathname === item.name ? 'bg-blue-500' : 'text-gray-700 border-indigo-500'}`}> */}
              <div key={item.name} onClick={() => { setLanguage(item.name); setFile(item.filename) }} className={`flex items-center p-2 rounded-[2.85px] ${file == item.filename ? 'bg-[#3154E0] !text-[#FFFFFF]' : ''} sidebarText h-[1.463rem] ${language.pathname === item.name ? 'bg-blue-500' : 'text-gray-700 border-indigo-500'}`}>
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

export default Sidebar_frontend;