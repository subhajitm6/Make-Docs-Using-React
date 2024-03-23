import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";


const Card = ({data, reference}) => {
  return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={0.2} dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }} className='relative w-48 h-56 bg-zinc-400 rounded-3xl px-8 py-10 overflow-hidden flex-shrink-0'>
            <FaRegFileAlt />
            <p className='text-sm mt-5 font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex items-center justify-between mb-5 px-8 py-3'>
                    <h5>{data.filesize}</h5>
                    <span className='w-5 h-5 bg-sky-200 rounded-full flex items-center justify-center'>
                        {data.close ? <IoCloseCircleOutline /> : <LuDownload />}        
                    </span>
                </div>
                {
                    data.tag.isOpen && (
                        <div className={`tag w-full py-3 ${data.tag.tagColor === "red" ? "bg-red-600" : "bg-green-600"} flex items-center justify-center`}>
                            <h1 className='text-sm font-semibold'>{data.tag.tagTitle}</h1>
                        </div>
                    )
                }
                
            </div>
        </motion.div>
  )
}

export default Card