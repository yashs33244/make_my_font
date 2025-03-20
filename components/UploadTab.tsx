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
import { PDFViewer } from "@/components/pdf-viewer";
import { TextEditor } from "@/components/text-editor";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Navbar from "@/components/Navbar";

export const UploadTab = ({
  uploadedImage,
  isUploading,
  onImageUpload,
  onClearUpload,
  isProcessing,
  onProcessHandwriting,
}: any) => {
  return (
    <Card className="border-[#5C818A]">
      <CardHeader className="bg-[#EBFAFE] border-b border-[#5C818A]">
        <CardTitle className="text-[#073742]">
          Upload Your Handwriting Sample
        </CardTitle>
        <CardDescription className="text-[#5A6C71]">
          Upload a clear image of your filled handwriting template.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {!uploadedImage ? (
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#5C818A] rounded-lg p-12 text-center">
            <Upload className="h-12 w-12 text-[#889BA0] mb-4" />
            <h3 className="text-lg font-medium mb-2 text-[#073742]">
              Drag and drop your completed template
            </h3>
            <p className="text-sm text-[#5A6C71] mb-4">
              Or click to browse files (JPG, PNG, PDF)
            </p>
            <Input
              type="file"
              accept="image/*"
              className="hidden"
              id="handwriting-upload"
              onChange={onImageUpload}
              disabled={isUploading}
            />
            <Button
              asChild
              disabled={isUploading}
              className="bg-[#1798C1] text-[#FFFFFF] hover:bg-[#1798C1]/90"
            >
              <label htmlFor="handwriting-upload">
                {isUploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>Select File</>
                )}
              </label>
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative">
              <Image
                src={uploadedImage || "/placeholder.svg"}
                alt="Uploaded handwriting sample"
                width={800}
                height={400}
                className="w-full rounded-lg object-contain max-h-[400px] border border-[#5C818A]"
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 bg-[#D160B7] hover:bg-[#E15FC4]"
                onClick={onClearUpload}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="font-name" className="text-[#073742]">
                  Font Name
                </Label>
                <Input
                  id="font-name"
                  placeholder="My Handwriting Font"
                  className="border-[#5C818A]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="font-description" className="text-[#073742]">
                  Description (Optional)
                </Label>
                <Textarea
                  id="font-description"
                  placeholder="A brief description of your font"
                  className="border-[#5C818A]"
                />
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between border-t border-[#5C818A] bg-[#FAFAFA]">
        <Button
          variant="outline"
          onClick={onClearUpload}
          disabled={!uploadedImage || isProcessing}
          className="border-[#5C818A] text-[#073742]"
        >
          Clear
        </Button>
        <Button
          onClick={onProcessHandwriting}
          disabled={!uploadedImage || isProcessing}
          className="bg-[#1798C1] text-[#FFFFFF] hover:bg-[#1798C1]/90"
        >
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>Create My Font</>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};
