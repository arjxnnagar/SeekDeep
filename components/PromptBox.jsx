import { assets } from '@/assets/assets';
import React, { useState } from 'react'
import Image from 'next/image';

const PromptBox = ({loading,setLoading}) => {

  const [prompt,setPrompt] = useState("");


  return (
    <form
      className={
        'w-4xl ${false ? "max-w-3x1" : "max-w-zx1"} bg-[#404045] p-4 rounded-3xl mt-4 transition-all'
      }
    >
      <textarea
        className="outline-none w-full resize-none overflow-hidden wrap-break-word bg-transparent"
        rows={2}
        placeholder="Message DeepSeek"
        required
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
      />

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <p
            className='flex items-center gap-2 text-xs border border-gray-300/40
            px-2 py-1 rounded-full cursor-pointer hover: bg-gray-500/20
            transition'>
            <Image className="h-5" src={assets.deepthink_icon} alt="" />
            DeepThink (R1)
          </p>
          <p
            className='flex items-center gap-2 text-xs border border-gray-300/40
            px-2 py-1 rounded-full cursor-pointer hover: bg-gray-500/20
            transition' >
            <Image className="h-5" src={assets.search_icon} alt="" />
            Search
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Image src={assets.pin_icon} className="w-4 cursor-pointer" alt="" />
          <button
            className={`${prompt ? "bg-primary" : "bg-[#71717a]"} rounded-full p-2 cursor-pointer`}
            disabled={!prompt}
          >
            <Image
              src={prompt ? assets.arrow_icon : assets.arrow_icon_dull}
              className="w-3.5 aspect-square"
              alt=""
            />
          </button>
        </div>
      </div>
    </form>
  );
}

export default PromptBox