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

export const TemplateTab = ({ onDownload, onNext }: any) => {
  return (
    <Card className="border-[#5C818A]">
      <CardHeader className="bg-[#EBFAFE] border-b border-[#5C818A]">
        <CardTitle className="text-[#073742]">
          Download Handwriting Template
        </CardTitle>
        <CardDescription className="text-[#5A6C71]">
          Download our template, fill it out with your handwriting, and upload
          it to create your custom font.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#073742]">
              Instructions:
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-[#073742]">
              <li>Download the template by clicking the button below</li>
              <li>Print the template on a blank white paper</li>
              <li>
                Fill out each character box with your handwriting using a black
                pen
              </li>
              <li>Try to center each character within its box</li>
              <li>Scan or take a clear photo of your completed template</li>
              <li>Upload the image in the next step</li>
            </ol>

            <Alert className="bg-[#BDEDFC] border-[#1798C1]">
              <Info className="h-4 w-4 text-[#073742]" />
              <AlertTitle className="text-[#073742]">Important</AlertTitle>
              <AlertDescription className="text-[#073742]">
                For best results, use a black pen and ensure good lighting when
                taking a photo of your completed template.
              </AlertDescription>
            </Alert>

            <div className="flex justify-center mt-6">
              <Button
                size="lg"
                className="bg-[#1798C1] text-[#FFFFFF] hover:bg-[#1798C1]/90"
                onClick={onDownload}
              >
                <a
                  href="https://yashs3324-bk.s3.eu-north-1.amazonaws.com/handwrite_sample.png"
                  download="handwriting_template.png"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDownload();
                  }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Template
                </a>
              </Button>
              <div className="mt-4 text-center">
                <p className="text-sm text-[#5A6C71] mb-2">
                  If you've already downloaded the template, click below to
                  continue:
                </p>
                <Button
                  variant="outline"
                  onClick={onNext}
                  className="border-[#5C818A] text-[#073742]"
                >
                  I've Downloaded the Template
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-medium text-[#073742]">Example:</h3>
            <div className="relative border border-[#5C818A] rounded-md overflow-hidden">
              <Image
                src="https://yashs3324-bk.s3.eu-north-1.amazonaws.com/handwrite_filled_form.jpg"
                alt="Example of filled handwriting template"
                width={500}
                height={700}
                className="w-full object-contain"
              />
            </div>
            <p className="text-sm text-[#5A6C71] text-center">
              Example of a properly filled template
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t border-[#5C818A] bg-[#FAFAFA]">
        <div></div>
        <Button
          onClick={onNext}
          className="bg-[#1798C1] text-[#FFFFFF] hover:bg-[#1798C1]/90"
        >
          Next: Upload Your Sample
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};
