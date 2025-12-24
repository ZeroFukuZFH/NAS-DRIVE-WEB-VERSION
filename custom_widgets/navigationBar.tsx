"use client"

import { useState } from "react"

interface OptionsProps {
  title: string
  isClicked: boolean
}

export default function NavigationBar() {
  const [options, setOptions] = useState<OptionsProps[]>([
    { title: "My Drive", isClicked: true },
    { title: "Recent", isClicked: false },
    { title: "Starred", isClicked: false },
    { title: "Trash", isClicked: false },
  ])

  const handleClick = (index: number) => {
    setOptions(prev =>
      prev.map((item, i) => ({
        ...item,
        isClicked: i === index, 
      }))
    )
  }

  return (
    <div>
      <ul className="flex flex-col">
        {options.map((item, index) => (
          <li key={index}>
            <button
              className={`px-4 py-1 rounded-2xl min-w-28 w-full cursor-pointer text-[14px] text-left ${item.isClicked ? "bg-[rgb(0,65,108)] text-white" : "hover:bg-[rgba(255,255,255,0.2)]"}`}
              onClick={() => handleClick(index)}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
