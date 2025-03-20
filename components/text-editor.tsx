"use client"

import { useState, useRef } from "react"
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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

interface TextEditorProps {
  fontUrl: string | null
}

export function TextEditor({ fontUrl }: TextEditorProps) {
  const [content, setContent] = useState<string>(`
    <h1>Your Custom Font in Action</h1>
    <p>This is a sample text using your custom handwriting font. Edit this text to see how your font looks in different contexts.</p>
    <p>Try different formatting options using the toolbar above.</p>
    <ul>
      <li>Create lists</li>
      <li>Format text</li>
      <li>Adjust alignment</li>
    </ul>
    <p>When you're happy with your text, you can download it as a PDF or image.</p>
  `)
  const [fontSize, setFontSize] = useState(16)
  const [lineHeight, setLineHeight] = useState(1.5)
  const [textColor, setTextColor] = useState("#073742")
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF")
  const [format, setFormat] = useState<string[]>([])
  const [alignment, setAlignment] = useState<string>("left")
  const [documentName, setDocumentName] = useState("Untitled Document")
  const [isEditing, setIsEditing] = useState(false)

  const editorRef = useRef<HTMLDivElement>(null)

  // In a real app, we would load the font using @font-face and integrate a proper rich text editor
  // like TipTap, CKEditor, or Quill

  const fontStyle = fontUrl
    ? {
        fontFamily: "'CustomFont', sans-serif",
        fontSize: `${fontSize}px`,
        lineHeight: lineHeight,
        color: textColor,
        backgroundColor: backgroundColor,
      }
    : {
        fontSize: `${fontSize}px`,
        lineHeight: lineHeight,
        color: textColor,
        backgroundColor: backgroundColor,
      }

  const handleFormatChange = (value: string[]) => {
    setFormat(value)

    // In a real implementation, this would apply formatting to the selected text
    // For now, we're just tracking the state
  }

  const handleAlignmentChange = (value: string) => {
    if (value) setAlignment(value)

    if (editorRef.current) {
      editorRef.current.style.textAlign = value
    }
  }

  const handleFontSizeChange = (value: string) => {
    setFontSize(Number.parseInt(value))
  }

  const increaseFontSize = () => {
    setFontSize((prev) => Math.min(prev + 1, 72))
  }

  const decreaseFontSize = () => {
    setFontSize((prev) => Math.max(prev - 1, 8))
  }

  const applyHeading = (level: string) => {
    // In a real implementation, this would apply heading to the selected text
    console.log(`Applying heading ${level}`)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        {isEditing ? (
          <Input
            value={documentName}
            onChange={(e) => setDocumentName(e.target.value)}
            className="max-w-xs border-[#5C818A]"
            onBlur={() => setIsEditing(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setIsEditing(false)
              }
            }}
            autoFocus
          />
        ) : (
          <h2
            className="text-xl font-medium text-[#073742] cursor-pointer hover:underline"
            onClick={() => setIsEditing(true)}
          >
            {documentName}
          </h2>
        )}

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="border-[#5C818A] text-[#073742]">
            <Save className="h-4 w-4 mr-1" />
            Save
          </Button>
          <Button variant="outline" size="sm" className="border-[#5C818A] text-[#073742]">
            <Share2 className="h-4 w-4 mr-1" />
            Share
          </Button>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="flex flex-wrap gap-1 p-1 border rounded-md border-[#5C818A] bg-[#FAFAFA]">
          <div className="flex items-center gap-1 px-1">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-[#073742]" onClick={() => console.log("Undo")}>
              <Undo className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-[#073742]" onClick={() => console.log("Redo")}>
              <Redo className="h-4 w-4" />
            </Button>
          </div>

          <Separator orientation="vertical" className="h-8 bg-[#5C818A]" />

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 text-[#073742]">
                <Type className="h-4 w-4 mr-1" />
                Paragraph
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48 p-0">
              <div className="flex flex-col">
                <Button variant="ghost" className="justify-start text-[#073742]" onClick={() => applyHeading("h1")}>
                  <Heading1 className="h-4 w-4 mr-2" />
                  Heading 1
                </Button>
                <Button variant="ghost" className="justify-start text-[#073742]" onClick={() => applyHeading("h2")}>
                  <Heading2 className="h-4 w-4 mr-2" />
                  Heading 2
                </Button>
                <Button variant="ghost" className="justify-start text-[#073742]" onClick={() => applyHeading("h3")}>
                  <Heading3 className="h-4 w-4 mr-2" />
                  Heading 3
                </Button>
                <Button variant="ghost" className="justify-start text-[#073742]" onClick={() => applyHeading("p")}>
                  <Paragraph className="h-4 w-4 mr-2" />
                  Paragraph
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-[#073742]" onClick={decreaseFontSize}>
              <Minus className="h-4 w-4" />
            </Button>
            <Select value={fontSize.toString()} onValueChange={handleFontSizeChange}>
              <SelectTrigger className="w-[70px] h-8 border-[#5C818A]">
                <SelectValue placeholder="Size" />
              </SelectTrigger>
              <SelectContent>
                {[8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72].map((size) => (
                  <SelectItem key={size} value={size.toString()}>
                    {size}px
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-[#073742]" onClick={increaseFontSize}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <Separator orientation="vertical" className="h-8 bg-[#5C818A]" />

          <ToggleGroup type="multiple" value={format} onValueChange={handleFormatChange} className="flex-wrap">
            <ToggleGroupItem
              value="bold"
              aria-label="Toggle bold"
              className="h-8 w-8 data-[state=on]:bg-[#BDEDFC] data-[state=on]:text-[#073742]"
            >
              <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="italic"
              aria-label="Toggle italic"
              className="h-8 w-8 data-[state=on]:bg-[#BDEDFC] data-[state=on]:text-[#073742]"
            >
              <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="underline"
              aria-label="Toggle underline"
              className="h-8 w-8 data-[state=on]:bg-[#BDEDFC] data-[state=on]:text-[#073742]"
            >
              <Underline className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>

          <Separator orientation="vertical" className="h-8 bg-[#5C818A]" />

          <ToggleGroup type="single" value={alignment} onValueChange={handleAlignmentChange} className="flex-wrap">
            <ToggleGroupItem
              value="left"
              aria-label="Align left"
              className="h-8 w-8 data-[state=on]:bg-[#BDEDFC] data-[state=on]:text-[#073742]"
            >
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="center"
              aria-label="Align center"
              className="h-8 w-8 data-[state=on]:bg-[#BDEDFC] data-[state=on]:text-[#073742]"
            >
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="right"
              aria-label="Align right"
              className="h-8 w-8 data-[state=on]:bg-[#BDEDFC] data-[state=on]:text-[#073742]"
            >
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>

          <Separator orientation="vertical" className="h-8 bg-[#5C818A]" />

          <ToggleGroup type="multiple" className="flex-wrap">
            <ToggleGroupItem
              value="bullet"
              aria-label="Bullet list"
              className="h-8 w-8 data-[state=on]:bg-[#BDEDFC] data-[state=on]:text-[#073742]"
            >
              <List className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="number"
              aria-label="Numbered list"
              className="h-8 w-8 data-[state=on]:bg-[#BDEDFC] data-[state=on]:text-[#073742]"
            >
              <ListOrdered className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>

          <Separator orientation="vertical" className="h-8 bg-[#5C818A]" />

          <div className="flex items-center gap-1">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-[#073742]">
                  <PaintBucket className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <Tabs defaultValue="text">
                  <TabsList className="w-full">
                    <TabsTrigger value="text" className="flex-1">
                      Text Color
                    </TabsTrigger>
                    <TabsTrigger value="background" className="flex-1">
                      Background
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="text" className="space-y-2 mt-2">
                    <div className="grid grid-cols-5 gap-2">
                      {[
                        "#073742",
                        "#000000",
                        "#5A6C71",
                        "#889BA0",
                        "#1798C1",
                        "#D160B7",
                        "#E15FC4",
                        "#FC84E1",
                        "#FF9254",
                      ].map((color) => (
                        <div
                          key={color}
                          className="w-8 h-8 rounded-full cursor-pointer border border-[#5C818A]"
                          style={{ backgroundColor: color }}
                          onClick={() => setTextColor(color)}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Label htmlFor="custom-color" className="text-xs">
                        Custom:
                      </Label>
                      <Input
                        id="custom-color"
                        type="color"
                        value={textColor}
                        onChange={(e) => setTextColor(e.target.value)}
                        className="w-8 h-8 p-0 border-[#5C818A]"
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="background" className="space-y-2 mt-2">
                    <div className="grid grid-cols-5 gap-2">
                      {[
                        "#FFFFFF",
                        "#FAFAFA",
                        "#EBFAFE",
                        "#BDEDFC",
                        "#D1F2FD",
                        "#FFDEF7",
                        "#FFF1FC",
                        "#F4F5F6",
                        "#EBEFF0",
                        "#E0E5E6",
                      ].map((color) => (
                        <div
                          key={color}
                          className="w-8 h-8 rounded-full cursor-pointer border border-[#5C818A]"
                          style={{ backgroundColor: color }}
                          onClick={() => setBackgroundColor(color)}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Label htmlFor="custom-bg-color" className="text-xs">
                        Custom:
                      </Label>
                      <Input
                        id="custom-bg-color"
                        type="color"
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                        className="w-8 h-8 p-0 border-[#5C818A]"
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </PopoverContent>
            </Popover>

            <Button variant="ghost" size="icon" className="h-8 w-8 text-[#073742]">
              <Link2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-[#073742]">
              <ImageIcon className="h-4 w-4" />
            </Button>
          </div>

          <Separator orientation="vertical" className="h-8 bg-[#5C818A]" />

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="h-8 text-[#073742]">
              <FileText className="h-4 w-4 mr-1" />
              Insert
            </Button>
            <Button variant="ghost" size="sm" className="h-8 text-[#073742]">
              <Download className="h-4 w-4 mr-1" />
              Export
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="line-height" className="text-xs text-[#5A6C71]">
              Line Height:
            </Label>
            <Slider
              id="line-height"
              min={1}
              max={3}
              step={0.1}
              value={[lineHeight]}
              onValueChange={(value) => setLineHeight(value[0])}
              className="w-32"
            />
            <span className="text-xs text-[#5A6C71]">{lineHeight.toFixed(1)}</span>
          </div>
        </div>
      </div>

      <div
        ref={editorRef}
        className="min-h-[500px] p-6 border rounded-md border-[#5C818A] shadow-sm"
        style={fontStyle}
        contentEditable
        dangerouslySetInnerHTML={{ __html: content }}
        onInput={(e) => setContent(e.currentTarget.innerHTML)}
      />

      <div className="flex justify-end gap-2">
        <Button variant="outline" className="border-[#5C818A] text-[#073742]">
          <FileText className="mr-2 h-4 w-4" />
          Save as PDF
        </Button>
        <Button variant="outline" className="border-[#5C818A] text-[#073742]">
          <ImageIcon className="mr-2 h-4 w-4" />
          Save as Image
        </Button>
        <Button className="bg-[#1798C1] text-[#FFFFFF] hover:bg-[#1798C1]/90">
          <Download className="mr-2 h-4 w-4" />
          Download Font
        </Button>
      </div>
    </div>
  )
}

