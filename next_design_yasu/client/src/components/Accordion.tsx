"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import type { Selection } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

import vectoricon from '../../public/icons/Vector.png';
import businessicon from '../../public/icons/business.png';
import codeicon from '../../public/icons/code.png';
import foldericon from '../../public/icons/folder.png';

const Acc: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));

  useEffect(() => {
    console.log(selectedKeys);
  }, [selectedKeys])

  const defaultContent =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.";

  return (
    <Accordion
      selectedKeys={selectedKeys}
      // @ts-expect-error
      onSelectionChange={setSelectedKeys}
      className="text-[#2B2B2B] accordionFont"
    >
      <AccordionItem
        startContent={<Image src={vectoricon} alt="icon" width={26.3} height={22} className="mr-[20px]" />}
        key="1"
        aria-label="Accordion 1"
        title="Documentation"
        className={`font-[700] text-start border-b-[2px] border-b-[#FFFFFF] text-[20px] pt-[20px] pb-[20px] px-[20px] ${selectedKeys.has("1") ? 'bg-white border-b-[2px] border-b-[#3154E0]' : 'bg-transparent'}`}
      >
        <p className="text-[16px] text-[#646464] px-6 font-[300]">
          {defaultContent}
        </p>
      </AccordionItem>

      <AccordionItem
        startContent={<Image src={businessicon} alt="icon" width={26.3} height={22} className="mr-[20px]" />}
        key="2"
        aria-label="Accordion 2" title="Developer Hub" className={`font-[700] text-start border-b-[2px] border-b-[#FFFFFF] text-[20px] pt-[50px] pb-[20px] px-[20px] ${selectedKeys.has("2") ? 'bg-white border-b-[2px] border-b-[#3154E0]' : 'bg-transparent'}`}>
        <p className="text-[16px] text-[#646464] px-6 font-[300]">
          {defaultContent}
        </p>
      </AccordionItem>

      <AccordionItem startContent={<Image src={codeicon} alt="icon" width={26.3} height={22} className="mr-[20px]" />} key="3" aria-label="Accordion 3" title="Code Exchange" className={`font-[700] text-start border-b-[2px] border-b-[#FFFFFF] text-[20px] pt-[50px] pb-[20px] px-[20px] ${selectedKeys.has("3") ? 'bg-white border-b-[2px] border-b-[#3154E0]' : 'bg-transparent'}`}>
        <p className="text-[16px] text-[#646464] px-6 font-[300]">
          {defaultContent}
        </p>
      </AccordionItem>

      <AccordionItem startContent={<Image src={foldericon} alt="icon" width={26.3} height={22} className="mr-[20px]" />} key="4" aria-label="Accordion 4" title="Integrations" className={`font-[700] text-start border-b-[2px] border-b-[#FFFFFF] text-[20px] pt-[50px] pb-[20px] px-[20px] ${selectedKeys.has("4") ? 'bg-white border-b-[2px] border-b-[#3154E0]' : 'bg-transparent'}`}>
        <p className="text-[16px] text-[#646464] px-6 font-[300]">
          {defaultContent}
        </p>
      </AccordionItem>
    </Accordion>
  );
}

export default Acc;
