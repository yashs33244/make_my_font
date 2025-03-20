"use client";

import {
  FileText,
  NotepadTextIcon as Paragraph,
  Save,
  FileUp,
  FileType2 as FontIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function PdfExtractor({ handlePdfImport }: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 text-[#073742]">
          <FileText className="h-4 w-4 mr-1" />
          Extract PDF
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Extract PDF Content</DialogTitle>
        </DialogHeader>
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
      </DialogContent>
    </Dialog>
  );
}
