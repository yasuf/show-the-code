import type { NextPage } from 'next';
import React from 'react';
import Editor from '../components/Editor';
import Accordion from '../components/Accordion';

const Home: NextPage = () => {
  // const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(["1"]));
  const accordionItems = [                                                                                                                                                                                                     
    {
      title: 'Documentation',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    },
    {
      title: 'Developer Hub',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    },
    {
      title: 'Code Exchange',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    },
    {
      title: 'Integrations',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    },
  ];
    return (
      <div className="quadrant-bg bg-[#FFFFFF] w-full gap-4">
        <article className='col-start-2 col-span-2 text-pretty'>
          <h1 className='text-center font-[700] text-[40px] leading-[3.19rem] text-[#000000] pt-[57px]'>an</h1>
          <p className='font-[inter] text-[16px] text-center leading-[1.21rem] font-[300] text-[#646464] pt-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br />industry's standard dummy text ever since the 1500s</p>
        </article>

        <div className="mx-auto flex justify-center min-h-screen w-full main_tool">
          <div className="... h-[33.209rem]">
            <Editor />
          </div>

          <div className='...'>
            <div className="flex flex-1 my-[19.67px]">
                <div className="flex items-center justify-center ml-[61.79px] w-[540px]">
                  {/* <Accordion 
                    items={accordionItems} 
                  /> */}
                  <Accordion />
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;