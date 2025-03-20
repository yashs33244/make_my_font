"use client";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";
import {
  AlertCircle,
  Download,
  FileText,
  ArrowRight,
  CheckCircle,
  X,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { TextEditor } from "@/components/text-editor";

export default function ConverterPage() {
  const [activeTab, setActiveTab] = useState("template");
  const [isUploading, setIsUploading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [generatedFont, setGeneratedFont] = useState<string | null>(null);
  const [uploadedPDF, setUploadedPDF] = useState<string | null>(null);
  const [hasDownloadedTemplate, setHasDownloadedTemplate] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIsUploading(true);
      setError(null);

      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("http://localhost:5001/", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`Server responded with ${response.status}`);
        }

        // The response should be the S3 URL
        const fontUrl = await response.text();

        setUploadedImage(URL.createObjectURL(file));
        setGeneratedFont(fontUrl);
        setTimeout(() => {
          setIsUploading(false);
          setIsProcessing(false);
          setActiveTab("editor");
        }, 1000);
      } catch (err) {
        console.error("Error uploading image:", err);
        setError("Failed to upload image. Please try again.");
        setIsUploading(false);
      }
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

  const clearUpload = () => {
    setUploadedImage(null);
    setGeneratedFont(null);
  };

  const clearPDF = () => {
    setUploadedPDF(null);
  };

  useEffect(() => {
    // Add @font-face rule when generatedFont is available
    if (generatedFont) {
      const style = document.createElement("style");
      style.textContent = `
        @font-face {
          font-family: 'CustomFont';
          src: url('${generatedFont}') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
      `;
      document.head.appendChild(style);

      return () => {
        document.head.removeChild(style);
      };
    }
  }, [generatedFont]);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-[#073742] mb-6">
        Handwriting to Font Converter
      </h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="template">1. Get Template</TabsTrigger>
          <TabsTrigger value="upload">2. Upload Sample</TabsTrigger>
          <TabsTrigger value="editor" disabled={!generatedFont}>
            3. Use Your Font
          </TabsTrigger>
        </TabsList>

        <TabsContent value="template">
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Download Template</CardTitle>
              <CardDescription>
                Download our template and fill it with your handwritten
                characters.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <img
                    src="https://yashs3324-bk.s3.eu-north-1.amazonaws.com/handwrite_filled_form.jpg"
                    alt="Template preview"
                    className="w-full rounded-lg border border-[#5C818A]"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-lg font-medium text-[#073742]">
                    Instructions:
                  </h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Download the template PDF</li>
                    <li>Print it on clean white paper</li>
                    <li>
                      Fill in each character box with your handwriting using a
                      black pen
                    </li>
                    <li>
                      Scan or take a clear photo of the completed template
                    </li>
                    <li>Upload the image in the next step</li>
                  </ol>
                  <Button
                    onClick={downloadTemplate}
                    className="bg-[#1798C1] mt-4"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Template
                  </Button>

                  {hasDownloadedTemplate && (
                    <Button
                      onClick={() => setActiveTab("upload")}
                      className="ml-4 bg-[#073742]"
                    >
                      Next Step
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upload">
          <Card>
            <CardHeader>
              <CardTitle>Step 2: Upload Your Sample</CardTitle>
              <CardDescription>
                Upload a scan or photo of your completed template.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 flex flex-col items-center justify-center">
                  {uploadedImage ? (
                    <div className="relative w-full">
                      <img
                        src={uploadedImage}
                        alt="Uploaded template"
                        className="w-full rounded-lg border border-[#5C818A]"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute top-2 right-2 bg-white rounded-full h-8 w-8 border-none"
                        onClick={clearUpload}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="w-full h-64 border-2 border-dashed border-[#5C818A] rounded-lg flex flex-col items-center justify-center p-4">
                      <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                      <label
                        htmlFor="imageUpload"
                        className="cursor-pointer flex flex-col items-center justify-center w-full h-full"
                      >
                        <FileText className="h-12 w-12 text-[#5C818A] mb-4" />
                        <p className="text-center text-[#5C818A]">
                          Click to upload your handwriting sample
                          <span className="block text-sm mt-2">
                            PNG, JPG or PDF up to 10MB
                          </span>
                        </p>
                      </label>
                    </div>
                  )}

                  {error && (
                    <Alert variant="destructive" className="mt-4">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                </div>

                <div className="flex-1 space-y-4">
                  <h3 className="text-lg font-medium text-[#073742]">
                    Tips for best results:
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Ensure good lighting when taking a photo</li>
                    <li>Keep the camera parallel to the paper</li>
                    <li>Make sure all character boxes are visible</li>
                    <li>Use a black pen with medium thickness</li>
                    <li>
                      Write naturally - this will give the most authentic
                      results
                    </li>
                  </ul>

                  {uploadedImage &&
                    !isUploading &&
                    !isProcessing &&
                    !generatedFont && (
                      <Button
                        onClick={() => {
                          setIsProcessing(true);
                          // Processing is handled during upload now
                        }}
                        className="bg-[#1798C1] mt-4"
                      >
                        Generate My Font
                      </Button>
                    )}

                  {(isUploading || isProcessing) && (
                    <div className="space-y-2 mt-4">
                      <p className="text-sm text-[#5A6C71]">
                        {isUploading
                          ? "Uploading..."
                          : "Processing your handwriting..."}
                      </p>
                      <Progress value={isUploading ? 30 : 70} className="h-2" />
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="editor">
          <Card>
            <CardHeader>
              <CardTitle>Step 3: Use Your Font</CardTitle>
              <CardDescription>
                Your handwriting has been converted to a font! Test it out in
                the editor below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TextEditor fontUrl={generatedFont} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
