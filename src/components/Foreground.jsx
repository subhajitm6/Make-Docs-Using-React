
import { useRef } from 'react';
import React from 'react';
import Card from './Card';

const Foreground = () => {

  const ref = useRef(null);

  const data=[
    {
      desc: "hi my name is subhajit manna",
      filesize: "0.8mb",
      close: true,
      tag: {
        isOpen:true,
        tagTitle: "Download Now",
        tagColor: "green"
      } 
    },
    {
      desc: "hi my name is subhajit manna",
      filesize: "0.8mb",
      close: true,
      tag: {
        isOpen:true,
        tagTitle: "Download Now",
        tagColor: "green"
      } 
    },
    {
      desc: "hi my name is subhajit manna",
      filesize: "0.8mb",
      close: false,
      tag: {
        isOpen:false,
        tagTitle: "Upload Now",
        tagColor: "red"
      } 
    }
  ];

  return (
    <div>
        <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full px-8 py-10 gap-10 flex flex-wrap'>
            {data.map((item, index)=>(
              <Card data={item} reference={ref}/>
            ))}
        </div>
    </div>
  )
}

export default Foreground