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
  Table,
} from "lucide-react";

// UI Components
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";

// Modular components

// Mock PDF extraction service

export function EditorToolbar({
  fontSize,
  setFontSize,
  fontState,
  setFontState,
  handleFontChange,
  format,
  setFormat,
  alignment,
  applyFormatting,
  textColor,
  setTextColor,
  backgroundColor,
  setBackgroundColor,
  handlePdfImport,
}: any) {
  const handleFormatChange = (value: any) => {
    setFormat(value);
    value.forEach((format: any) => {
      applyFormatting(format);
    });
  };

  const handleAlignmentChange = (value: any) => {
    if (value) {
      applyFormatting("alignment", value);
    }
  };

  const increaseFontSize = () => {
    setFontSize(Math.min(fontSize + 1, 72));
  };

  const decreaseFontSize = () => {
    setFontSize(Math.max(fontSize - 1, 8));
  };

  return (
    <div className="flex flex-wrap gap-1 p-1 border rounded-md border-[#5C818A] bg-[#FAFAFA]">
      {/* Undo/Redo */}
      <div className="flex items-center gap-1 px-1">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-[#073742]"
          onClick={() => document.execCommand("undo", false)}
        >
          <Undo className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-[#073742]"
          onClick={() => document.execCommand("redo", false)}
        >
          <Redo className="h-4 w-4" />
        </Button>
      </div>

      <Separator orientation="vertical" className="h-8 bg-[#5C818A]" />

      {/* Font Family */}
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="sm"
          className="h-8 text-[#073742]"
          onClick={() =>
            setFontState((prev) => ({ ...prev, showFontDialog: true }))
          }
        >
          <FontIcon className="h-4 w-4 mr-1" />
          {fontState.currentFont}
          <ChevronDown className="h-4 w-4 ml-1" />
        </Button>
      </div>

      <Separator orientation="vertical" className="h-8 bg-[#5C818A]" />

      {/* Paragraph Style */}
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
            <Button
              variant="ghost"
              className="justify-start text-[#073742]"
              onClick={() => applyFormatting("heading", "h1")}
            >
              <Heading1 className="h-4 w-4 mr-2" />
              Heading 1
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-[#073742]"
              onClick={() => applyFormatting("heading", "h2")}
            >
              <Heading2 className="h-4 w-4 mr-2" />
              Heading 2
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-[#073742]"
              onClick={() => applyFormatting("heading", "h3")}
            >
              <Heading3 className="h-4 w-4 mr-2" />
              Heading 3
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-[#073742]"
              onClick={() => applyFormatting("heading", "p")}
            >
              <Paragraph className="h-4 w-4 mr-2" />
              Paragraph
            </Button>
          </div>
        </PopoverContent>
      </Popover>

      {/* Font Size */}
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-[#073742]"
          onClick={decreaseFontSize}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Select
          value={fontSize.toString()}
          onValueChange={(value) => setFontSize(Number(value))}
        >
          <SelectTrigger className="w-[70px] h-8 border-[#5C818A]">
            <SelectValue placeholder="Size" />
          </SelectTrigger>
          <SelectContent>
            {[8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72].map(
              (size) => (
                <SelectItem key={size} value={size.toString()}>
                  {size}px
                </SelectItem>
              )
            )}
          </SelectContent>
        </Select>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-[#073742]"
          onClick={increaseFontSize}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <Separator orientation="vertical" className="h-8 bg-[#5C818A]" />

      {/* Text Formatting */}
      <ToggleGroup
        type="multiple"
        value={format}
        onValueChange={handleFormatChange}
        className="flex-wrap"
      >
        <ToggleGroupItem
          value="bold"
          aria-label="Toggle bold"
          className="h-8 w-8 data-[state=on]:bg-[#BDEDFC] data-[state=on]:text-[#073742]"
          onClick={() => applyFormatting("bold")}
        >
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="italic"
          aria-label="Toggle italic"
          className="h-8 w-8 data-[state=on]:bg-[#BDEDFC] data-[state=on]:text-[#073742]"
          onClick={() => applyFormatting("italic")}
        >
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="underline"
          aria-label="Toggle underline"
          className="h-8 w-8 data-[state=on]:bg-[#BDEDFC] data-[state=on]:text-[#073742]"
          onClick={() => applyFormatting("underline")}
        >
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>

      <Separator orientation="vertical" className="h-8 bg-[#5C818A]" />

      {/* Alignment */}
      <ToggleGroup
        type="single"
        value={alignment}
        onValueChange={handleAlignmentChange}
        className="flex-wrap"
      >
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

      {/* Lists */}
      <ToggleGroup type="multiple" className="flex-wrap">
        <ToggleGroupItem
          value="bullet"
          aria-label="Bullet list"
          className="h-8 w-8 data-[state=on]:bg-[#BDEDFC] data-[state=on]:text-[#073742]"
          onClick={() => document.execCommand("insertUnorderedList", false)}
        >
          <List className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="number"
          aria-label="Numbered list"
          className="h-8 w-8 data-[state=on]:bg-[#BDEDFC] data-[state=on]:text-[#073742]"
          onClick={() => document.execCommand("insertOrderedList", false)}
        >
          <ListOrdered className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>

      <Separator orientation="vertical" className="h-8 bg-[#5C818A]" />

      {/* Colors */}
      <div className="flex items-center gap-1">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-[#073742]"
            >
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
                    "#FFFFFF",
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
                    "#000000",
                    "#333333",
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

        {/* Hyperlink */}
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-[#073742]"
          onClick={() =>
            document.execCommand(
              "createLink",
              false,
              prompt("Enter URL:", "https://")
            )
          }
        >
          <Link2 className="h-4 w-4" />
        </Button>

        {/* Image */}
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-[#073742]"
          onClick={() =>
            document.execCommand(
              "insertImage",
              false,
              prompt("Enter image URL:", "https://")
            )
          }
        >
          <ImageIcon className="h-4 w-4" />
        </Button>
      </div>

      <Separator orientation="vertical" className="h-8 bg-[#5C818A]" />

      {/* Insert PDF */}
      <div className="flex items-center gap-1">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 text-[#073742]">
              <FileText className="h-4 w-4 mr-1" />
              Insert
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Insert Content</DialogTitle>
            </DialogHeader>
            <Tabs defaultValue="pdf">
              <TabsList className="w-full">
                <TabsTrigger value="pdf" className="flex-1">
                  PDF
                </TabsTrigger>
                <TabsTrigger value="image" className="flex-1">
                  Image
                </TabsTrigger>
                <TabsTrigger value="table" className="flex-1">
                  Table
                </TabsTrigger>
              </TabsList>
              <TabsContent value="pdf" className="space-y-4 mt-4">
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#5C818A] rounded-lg p-8">
                  <FileUp className="w-12 h-12 text-[#1798C1] mb-4" />
                  <p className="text-center mb-4">
                    Upload a PDF file to extract its content.
                  </p>
                  <Input
                    type="file"
                    accept=".pdf"
                    className="max-w-xs"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handlePdfImport(e.target.files[0]);
                      }
                    }}
                  />
                </div>
              </TabsContent>
              <TabsContent value="image">
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#5C818A] rounded-lg p-8">
                  <ImageIcon className="w-12 h-12 text-[#1798C1] mb-4" />
                  <p className="text-center mb-4">
                    Insert an image by providing a URL.
                  </p>
                  <Input
                    type="text"
                    placeholder="Enter image URL"
                    className="max-w-xs"
                    onChange={(e) => {
                      const url = e.target.value;
                      if (url) {
                        document.execCommand("insertImage", false, url);
                      }
                    }}
                  />
                </div>
              </TabsContent>
              <TabsContent value="table">
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#5C818A] rounded-lg p-8">
                  <Table className="w-12 h-12 text-[#1798C1] mb-4" />
                  <p className="text-center mb-4">
                    Insert a table with custom rows and columns.
                  </p>
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      placeholder="Rows"
                      className="w-20"
                      min="1"
                      max="10"
                    />
                    <Input
                      type="number"
                      placeholder="Columns"
                      className="w-20"
                      min="1"
                      max="10"
                    />
                    <Button
                      variant="default"
                      onClick={() => {
                        const rows = parseInt(
                          document.querySelector('input[placeholder="Rows"]')
                            .value,
                          10
                        );
                        const cols = parseInt(
                          document.querySelector('input[placeholder="Columns"]')
                            .value,
                          10
                        );
                        if (rows > 0 && cols > 0) {
                          const table = document.createElement("table");
                          table.setAttribute("border", "1");
                          for (let i = 0; i < rows; i++) {
                            const row = table.insertRow();
                            for (let j = 0; j < cols; j++) {
                              const cell = row.insertCell();
                              cell.innerHTML = "&nbsp;";
                            }
                          }
                          document.execCommand(
                            "insertHTML",
                            false,
                            table.outerHTML
                          );
                        }
                      }}
                    >
                      Insert
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </div>

      <Separator orientation="vertical" className="h-8 bg-[#5C818A]" />

      {/* Save & Share */}
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-[#073742]"
          onClick={() =>
            toast({
              title: "Saved",
              description: "Your document has been saved.",
            })
          }
        >
          <Save className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-[#073742]"
          onClick={() =>
            toast({
              title: "Share",
              description:
                "Share functionality is not implemented in this demo.",
            })
          }
        >
          <Share2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
