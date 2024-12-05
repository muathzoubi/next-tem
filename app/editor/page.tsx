"use client"

import * as React from "react"
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Plus, Minus } from 'lucide-react'

import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export default function TextEditor() {
  const [content, setContent] = React.useState("Edit this content to add your own quotes.")
  const [fontSize, setFontSize] = React.useState(16)

  const handleFormat = (command: string) => {
    document.execCommand(command, false)
  }

  const adjustFontSize = (increment: number) => {
    setFontSize((prev) => Math.max(8, Math.min(32, prev + increment)))
  }

  return (
    <div className="w-full mx-auto  border bg-[#1e1e2e] text-white shadow-lg h-full">
      <div className="flex items-center gap-1 px-2 py-1 border-b border-border/20">
        <div className="flex gap-1.5">
          <div className="w-3 h-3  bg-red-500" />
          <div className="w-3 h-3  bg-yellow-500" />
          <div className="w-3 h-3  bg-green-500" />
        </div>
        <div className="flex items-center gap-1 ml-4">
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-white/80 hover:text-white"
            onClick={() => handleFormat("bold")}
          >
            <Bold className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-white/80 hover:text-white"
            onClick={() => handleFormat("italic")}
          >
            <Italic className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-white/80 hover:text-white"
            onClick={() => handleFormat("underline")}
          >
            <Underline className="h-4 w-4" />
          </Button>
          <Separator orientation="vertical" className="mx-1 h-6 bg-white/20" />
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-white/80 hover:text-white"
            onClick={() => handleFormat("justifyLeft")}
          >
            <AlignLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-white/80 hover:text-white"
            onClick={() => handleFormat("justifyCenter")}
          >
            <AlignCenter className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-white/80 hover:text-white"
            onClick={() => handleFormat("justifyRight")}
          >
            <AlignRight className="h-4 w-4" />
          </Button>
          <Separator orientation="vertical" className="mx-1 h-6 bg-white/20" />
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-white/80 hover:text-white"
            onClick={() => adjustFontSize(-2)}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-white/80 hover:text-white"
            onClick={() => adjustFontSize(2)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div 
        className="min-h-[100vh] p-4 outline-none"
        contentEditable
        style={{ fontSize: `${fontSize}px` }}
        dangerouslySetInnerHTML={{ __html: content }}
        onInput={(e) => setContent(e.currentTarget.innerHTML)}
      />
    </div>
  )
}

