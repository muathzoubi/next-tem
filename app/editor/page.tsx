import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Underline } from "lucide-react";
import { Italic } from "lucide-react";
import { Bold } from "lucide-react";
import { useState } from "react";

const Editor = () => {
  const [content, setContent] = useState("");
  const [fontSize, setFontSize] = useState(16);

  const handleFormat = (format: string) => {
    // Implement formatting logic here
    console.log("Formatting:", format);
  };

  return (
    <div className="h-full w-full mx-auto rounded-lg border bg-[#1e1e2e] text-white shadow-lg">
      <div className="flex items-center gap-1 border-b border-border/20 px-2 py-1">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-white/80 hover:text-white"
          onClick={() => handleFormat("bold")}
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-white/80 hover:text-white"
          onClick={() => handleFormat("italic")}
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-white/80 hover:text-white"
          onClick={() => handleFormat("underline")}
        >
          <Underline className="h-4 w-4" />
        </Button>
        <Separator orientation="vertical" className="mx-1 h-6 bg-white/20" />
        {/* Add more buttons here */}
      </div>
      <div
        className="min-h-[100vh] outline-none p-4"
        contentEditable
        style={{ fontSize: `${fontSize}px` }}
        dangerouslySetInnerHTML={{ __html: content }}
        onInput={(e) => setContent(e.currentTarget.innerHTML)}
      />
    </div>
  );
};

export default Editor;

