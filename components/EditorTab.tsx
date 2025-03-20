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

export const EditorTab = ({ generatedFont }: any) => {
  return (
    <Card className="border-[#5C818A]">
      <CardHeader className="bg-[#EBFAFE] border-b border-[#5C818A]">
        <CardTitle className="text-[#073742]">Text Editor</CardTitle>
        <CardDescription className="text-[#5A6C71]">
          Write or paste text to see it in your custom font.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <TextEditor fontUrl={generatedFont} />
      </CardContent>
      <CardFooter className="flex justify-between border-t border-[#5C818A] bg-[#FAFAFA]">
        <Button variant="outline" className="border-[#5C818A] text-[#073742]">
          Reset
        </Button>
        <Button className="bg-[#1798C1] text-[#FFFFFF] hover:bg-[#1798C1]/90">
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </CardFooter>
    </Card>
  );
};
