import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// import { Button } from '@nextui-org/react';
import Sidebar_backend from './Sidebar_backend';
import Sidebar_frontend from './Sidebar_frontend';
import Sidebar_analytics from './Sidebar_analytics';
import CodeEditor_backend from './CodeEditor_backend';
import CodeEditor_frontend from './CodeEditor_frontend';
import CodeEditor_analytics from './CodeEditor_analytics';

import icon1 from '../../public/icons/Icon1.png';
import icon2 from '../../public/icons/Icon2.png';
import icon3 from '../../public/icons/Icon3.png';

const tabs: string[] = ['Front-end', 'Back-end'];

const CodeEditorWin: React.FC = ({icon}:any) => {
    const [code, setCode] = useState(' ');
    const [activeTab, setActiveTab] = useState<string>(tabs[0]);
    const [language, setLanguage] = useState<string>('javascript');
    const [file, setFile] = useState<string>('javascript.js');


    const handleTabClick = (tab: string): void => {
        setActiveTab(tab);
    };

    return (
        <div className="border-2 border-inherit rounded-[8px] overflow-hidden flex flex-col h-full">
            <div className="flex bg-zinc-400 text-[#2B2B2B] overflow-hidden rounded-t-[5.71px] text-[13px] leading-[0.546rem] font-[700] font-['Nunito Sans']">
                <button
                    className={`px-4 py-3 w-[6.953rem] h-[2rem] font-Grotesk ${activeTab === "Front-end" ? 'bg-zinc-50 editorButton text-[#2B2B2B] text-[13px] leading-[0.546rem] font-[700] rounded-t-[5.71px]' : 'bg-gray-400'}`}
                    onClick={() => handleTabClick("Front-end")}
                >
                    <Image src={icon1} alt={icon} width={13.69} height={13.69} className="mb-[-10.5px]"  />
                    <div className="ml-[14px]">
                        Front-end
                    </div>
                </button>

                <button
                    className={`px-4 py-3 w-[6.953rem] h-[1.569rem] font-Grotesk ${activeTab === "Back-end" ? 'bg-zinc-50 editorButton text-[#2B2B2B] text-[13px] leading-[0.546rem] font-[700] rounded-t-[5.71px]' : 'bg-gray-400'}`}
                    onClick={() => handleTabClick("Back-end")}
                >
                    <Image src={icon2} alt={icon} width={13.69} height={13.69} className="mb-[-10.5px]"  />
                    <div className="ml-[14px]">
                        Back-end
                    </div>
                </button>

                {/* <button
                    className={`px-4 py-3 w-[6.953rem] h-[1.569rem] font-Grotesk ${activeTab === "Analytics" ? 'bg-zinc-50 editorButton text-[#2B2B2B] text-[6.85px] leading-[0.546rem] font-[700] rounded-t-[5.71px]' : 'bg-gray-400'}`}
                    onClick={() => handleTabClick("Analytics")}
                >
                    <Image src={icon3} alt={icon} width={13.69} height={13.69} className="mb-[-10.5px]"  />
                    <div className="ml-[14px]">
                        Analytics
                    </div>
                </button> */}
            </div>

            <div className="w-[35.451rem] h-[95%] bg-red-400 SidebarBG">
                {/* Dynamic content based on active tab */}
                {activeTab === 'Front-end' &&
                    <div className="h-full flex">
                        <div className="sidebarPosition w-1/4">
                            <Sidebar_frontend language={language} file={file} setFile={setFile} setLanguage= {setLanguage}/>
                        </div>

                        <div className="bg-slate-100 w-3/4 rounded-[5.71px] mt-[8.9px] ml-[11.48px] mb-[10px] mt-[8.9px] overflow-hidden ...">
                            <CodeEditor_frontend key={language} file={file} language={language} value={code} onChange={setCode} />
                            <button className='buildbtnhover float-right text-[#000000] text-[9.13px] rounded-r-[20px] rounded-l-[10px] px-5 py-3 mt-[15px] mx-5 border-solid border-2 border-sky-500'>
                                Build with React →
                            </button>
                        </div>
                    </div>
                }
                {activeTab === 'Back-end' &&
                    <div className="h-full flex">
                        <div className="sidebarPosition w-1/4">
                            <Sidebar_backend language={language} file={file} setFile={setFile} setLanguage= {setLanguage}/>
                        </div>

                        <div className="bg-slate-100 w-3/4 rounded-[5.71px] mt-[8.9px] ml-[11.48px] mb-[10px] mt-[8.9px] overflow-hidden ...">
                            <CodeEditor_backend key={language} file={file} language={language} value={code} onChange={setCode} />
                            <button className='buildbtnhover float-right text-[#000000] text-[9.13px] rounded-r-[20px] rounded-l-[10px] px-5 py-3 mt-[15px] mx-5 border-solid border-2 border-sky-500'>
                                Build with React →
                            </button>
                        </div>
                    </div>
                }


                {activeTab === 'Analytics' &&
                    <div className="h-full flex">
                        <div className="sidebarPosition w-1/4">
                            <Sidebar_analytics language={language} file={file} setFile={setFile} setLanguage= {setLanguage}/>
                        </div>

                        <div className="bg-slate-100 w-3/4 rounded-[5.71px] mt-[8.9px] ml-[11.48px] mb-[10px] mt-[8.9px] overflow-hidden ...">
                            <CodeEditor_analytics key={language} file={file} language={language} value={code} onChange={setCode} />
                            <button className='buildbtnhover float-right text-[#000000] text-[9.13px] rounded-r-[20px] rounded-l-[10px] px-5 py-3 mt-[15px] mx-5 border-solid border-2 border-sky-500'>
                                Build with React →
                            </button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default CodeEditorWin;
