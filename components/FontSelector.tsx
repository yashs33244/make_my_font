"use client";

import { useState, useRef, useEffect } from "react";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Link2,
  ImageIcon,
  FileText,
  Download,
  Type,
  ChevronDown,
  Heading1,
  Heading2,
  Heading3,
  NotepadTextIcon as Paragraph,
  Undo,
  Redo,
  Save,
  Share2,
  PaintBucket,
  Minus,
  Plus,
  Upload,
  BookOpen,
  FileUp,
  Palette,
  FileType2 as FontIcon,
} from "lucide-react";

// UI Components
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Card, CardContent } from "@/components/ui/card";

export function FontSelector({
  availableFonts,
  customFonts,
  currentFont,
  handleFontChange,
  addCustomFont,
}: any) {
  const [fontName, setFontName] = useState("");
  const [fontUrl, setFontUrl] = useState("");

  const handleAddFont = () => {
    if (fontName && fontUrl) {
      addCustomFont(fontName, fontUrl);
      setFontName("");
      setFontUrl("");
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {/* Available Fonts */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2">System Fonts</h3>
            <div className="space-y-1">
              {availableFonts.map((font: any) => (
                <Button
                  key={font.name}
                  variant={currentFont === font.name ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => handleFontChange(font.name)}
                >
                  {font.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Custom Fonts */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2">Custom Fonts</h3>
            <div className="space-y-1">
              {customFonts.map((font: any) => (
                <Button
                  key={font.name}
                  variant={currentFont === font.name ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => handleFontChange(font.name)}
                >
                  {font.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Add Custom Font */}
      <div className="space-y-2">
        <h3 className="font-semibold">Add Custom Font</h3>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Font Name"
            value={fontName}
            onChange={(e) => setFontName(e.target.value)}
          />
          <Input
            type="url"
            placeholder="Font URL (WOFF2)"
            value={fontUrl}
            onChange={(e) => setFontUrl(e.target.value)}
          />
          <Button onClick={handleAddFont}>Add</Button>
        </div>
      </div>
    </div>
  );
}
