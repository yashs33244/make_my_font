"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Upload,
  Loader2,
  Download,
  FileText,
  Edit,
  Trash2,
  Info,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { TextEditor } from "@/components/text-editor";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Navbar from "@/components/Navbar";
import { PDFViewer } from "./pdf-viewer";

export const PDFTab = ({
  uploadedPDF,
  isUploading,
  onPDFUpload,
  onClearPDF,
}: any) => {
  return (
    <Card className="border-[#5C818A]">
      <CardHeader className="bg-[#EBFAFE] border-b border-[#5C818A]">
        <CardTitle className="text-[#073742]">PDF Converter</CardTitle>
        <CardDescription className="text-[#5A6C71]">
          Upload a PDF to replace its text with your custom font.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!uploadedPDF ? (
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#5C818A] rounded-lg p-12 text-center">
            <FileText className="h-12 w-12 text-[#889BA0] mb-4" />
            <h3 className="text-lg font-medium mb-2 text-[#073742]">
              Drag and drop your PDF
            </h3>
            <p className="text-sm text-[#5A6C71] mb-4">
              Or click to browse files
            </p>
            <Input
              type="file"
              accept=".pdf"
              className="hidden"
              id="pdf-upload"
              onChange={onPDFUpload}
              disabled={isUploading}
            />
            <Button
              asChild
              disabled={isUploading}
              className="bg-[#1798C1] text-[#FFFFFF] hover:bg-[#1798C1]/90"
            >
              <label htmlFor="pdf-upload">
                {isUploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>Select PDF</>
                )}
              </label>
            </Button>
          </div>
        ) : (
          <PDFViewer pdfUrl={uploadedPDF} fontUrl={null} />
        )}
      </CardContent>
      <CardFooter className="flex justify-between border-t border-[#5C818A] bg-[#FAFAFA]">
        <Button
          variant="outline"
          onClick={onClearPDF}
          disabled={!uploadedPDF}
          className="border-[#5C818A] text-[#073742]"
        >
          Clear
        </Button>
        <Button
          disabled={!uploadedPDF}
          className="bg-[#1798C1] text-[#FFFFFF] hover:bg-[#1798C1]/90"
        >
          <Download className="mr-2 h-4 w-4" />
          Download Converted PDF
        </Button>
      </CardFooter>
    </Card>
  );
};
