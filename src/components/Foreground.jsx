import React, { useRef } from "react";
import Card from "./Card";
import { FaLandMineOn } from "react-icons/fa6";

const Foreground = () => {

  const ref = useRef(null);
  /*
  const data = {
    icon, desc, filesize, closeOrDownload, tadDetails 
  }
  */

  const data = [
    {
      desc: "You are the shuckiest shuck faced shuck in the world!", 
      fileSize: ".8mb",
      close: true,
      tag: {
        isOpen: 0,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Never ask an elf for help; they might decide your better off dead, eh.",
      fileSize: ".8mb",
      close: 0,
      tag: {
        isOpen: 1,
        tagTitle: "Upload Now",
        tagColor: "blue",
      },
    },
    {
      desc: "All of my best friends are dead people. Someday I've got to figure out how that happened.",
      fileSize: ".8mb",
      close: 1,
      tag: {
        isOpen: 1,
        tagTitle: "Download Now",
        tagColor: "red",
      },
    },
  ];
  return (
    <>
      <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex flex-wrap gap-10 p-5">

        {data.map((item, index) => (
          <Card  data={item} key={index} reference={ref} />
        ))}
        
      </div>
    </>
  );
  
};

export default Foreground;
