"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { TemplateTab } from "@/components/TemplateTab";
import { UploadTab } from "@/components/UploadTab";
import { ProcessingOverlay } from "@/components/ProcessingOverlay";
import { EditorTab } from "@/components/EditorTab";
import { PDFTab } from "@/components/PDFTab";
import { Edit } from "lucide-react";
import Link from "next/link";
import { Footer } from "react-day-picker";

export default function ConverterPage() {
  const [activeTab, setActiveTab] = useState("template");
  const [isUploading, setIsUploading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [generatedFont, setGeneratedFont] = useState<string | null>(null);
  const [uploadedPDF, setUploadedPDF] = useState<string | null>(null);
  const [hasDownloadedTemplate, setHasDownloadedTemplate] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIsUploading(true);
      setTimeout(() => {
        setUploadedImage(URL.createObjectURL(e.target.files![0]));
        setIsUploading(false);
      }, 1000);
    }
  };

  const handlePDFUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIsUploading(true);
      setTimeout(() => {
        setUploadedPDF(URL.createObjectURL(e.target.files![0]));
        setIsUploading(false);
      }, 1000);
    }
  };

  const downloadTemplate = () => {
    setHasDownloadedTemplate(true);
  };

  const processHandwriting = () => {
    if (!uploadedImage) return;
    setIsProcessing(true);
    setTimeout(() => {
      setGeneratedFont("custom-font-url");
      setIsProcessing(false);
      setActiveTab("editor");
    }, 3000);
  };

  const clearUpload = () => {
    setUploadedImage(null);
    setGeneratedFont(null);
  };

  const clearPDF = () => {
    setUploadedPDF(null);
  };

  return (
    <div className="flex min-h-screen flex-col font-inter">
      <Navbar />
      <main className="flex-1 container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold tracking-tighter mb-6 text-[#073742]">
            Font Converter
          </h1>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-4 bg-[#EBFAFE]">
              <TabsTrigger
                value="template"
                className="data-[state=active]:bg-[#1798C1] data-[state=active]:text-[#FFFFFF]"
              >
                Download Template
              </TabsTrigger>
              <TabsTrigger
                value="upload"
                disabled={!hasDownloadedTemplate}
                className="data-[state=active]:bg-[#1798C1] data-[state=active]:text-[#FFFFFF]"
              >
                Upload Sample
              </TabsTrigger>
              <TabsTrigger
                value="editor"
                disabled={!generatedFont}
                className="data-[state=active]:bg-[#1798C1] data-[state=active]:text-[#FFFFFF]"
              >
                Text Editor
              </TabsTrigger>
              <TabsTrigger
                value="pdf"
                disabled={!generatedFont}
                className="data-[state=active]:bg-[#1798C1] data-[state=active]:text-[#FFFFFF]"
              >
                PDF Converter
              </TabsTrigger>
            </TabsList>

            <TabsContent value="template" className="mt-6">
              <TemplateTab
                onDownload={downloadTemplate}
                onNext={() => {
                  setHasDownloadedTemplate(true);
                  setActiveTab("upload");
                }}
              />
            </TabsContent>

            <TabsContent value="upload" className="mt-6">
              <UploadTab
                uploadedImage={uploadedImage}
                isUploading={isUploading}
                onImageUpload={handleImageUpload}
                onClearUpload={clearUpload}
                isProcessing={isProcessing}
                onProcessHandwriting={processHandwriting}
              />
              {isProcessing && <ProcessingOverlay />}
            </TabsContent>

            <TabsContent value="editor" className="mt-6">
              <EditorTab generatedFont={generatedFont} />
            </TabsContent>

            <TabsContent value="pdf" className="mt-6">
              <PDFTab
                uploadedPDF={uploadedPDF}
                isUploading={isUploading}
                onPDFUpload={handlePDFUpload}
                onClearPDF={clearPDF}
              />
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
