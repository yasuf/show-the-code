import type { NextPage } from 'next';
import React from 'react';
import Editor from '../components/Editor';
import Accordion from '../components/Accordion';

const Home: NextPage = () => {
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
      <div>
        <div className="mx-auto flex justify-center min-h-screen w-full main_tool">
          <div className="... h-[33.209rem]">
            <Editor />
          </div>

          {/* <div className='...'>
            <div className="flex flex-1 my-[19.67px]">
                <div className="flex accordionFont items-center justify-center ml-[61.79px] w-[540px]">
                  <Accordion
                    items={accordionItems}
                  />
                  <Accordion />
                </div>
            </div>
          </div> */}
        </div>
      </div>
    );
}

export default Home;
