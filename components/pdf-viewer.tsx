"use client"

import { useState, useEffect } from "react"
import { Loader2, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"

interface PDFViewerProps {
  pdfUrl: string
  fontUrl: string | null
}

export function PDFViewer({ pdfUrl, fontUrl }: PDFViewerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isProcessed, setIsProcessed] = useState(false)
  const [zoom, setZoom] = useState(100)

  // In a real app, we would use PDF.js to render the PDF and extract text

  useEffect(() => {
    // Simulate PDF loading
    const timer = setTimeout(() => {
      setIsLoading(false)
      setTotalPages(5) // Mock 5 pages
    }, 1500)

    return () => clearTimeout(timer)
  }, [pdfUrl])

  const processPDF = () => {
    setIsProcessing(true)

    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false)
      setIsProcessed(true)
    }, 3000)
  }

  const zoomIn = () => {
    setZoom((prev) => Math.min(prev + 10, 200))
  }

  const zoomOut = () => {
    setZoom((prev) => Math.max(prev - 10, 50))
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="h-8 w-8 text-[#1798C1] animate-spin mb-4" />
        <p className="text-[#073742]">Loading PDF...</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <Tabs defaultValue="original">
        <TabsList className="grid w-full grid-cols-2 bg-[#EBFAFE]">
          <TabsTrigger value="original" className="data-[state=active]:bg-[#1798C1] data-[state=active]:text-[#FFFFFF]">
            Original
          </TabsTrigger>
          <TabsTrigger
            value="converted"
            disabled={!isProcessed}
            className="data-[state=active]:bg-[#1798C1] data-[state=active]:text-[#FFFFFF]"
          >
            Converted
          </TabsTrigger>
        </TabsList>

        <TabsContent value="original" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={zoomOut}
                disabled={zoom <= 50}
                className="border-[#5C818A] text-[#073742]"
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2">
                <Slider
                  min={50}
                  max={200}
                  step={10}
                  value={[zoom]}
                  onValueChange={(value) => setZoom(value[0])}
                  className="w-24"
                />
                <span className="text-xs text-[#5A6C71]">{zoom}%</span>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={zoomIn}
                disabled={zoom >= 200}
                className="border-[#5C818A] text-[#073742]"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-sm text-[#5A6C71]">
              Page {currentPage} of {totalPages}
            </div>
          </div>

          <div
            className="aspect-[8.5/11] bg-white border border-[#5C818A] rounded-md overflow-hidden"
            style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}
          >
            <iframe src={pdfUrl} className="w-full h-full" title="PDF Preview" />
          </div>

          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="border-[#5C818A] text-[#073742]"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="border-[#5C818A] text-[#073742]"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <div className="flex justify-center pt-4">
            <Button
              onClick={processPDF}
              disabled={isProcessing}
              className="bg-[#1798C1] text-[#FFFFFF] hover:bg-[#1798C1]/90"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>Convert Text with My Font</>
              )}
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="converted" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={zoomOut}
                disabled={zoom <= 50}
                className="border-[#5C818A] text-[#073742]"
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2">
                <Slider
                  min={50}
                  max={200}
                  step={10}
                  value={[zoom]}
                  onValueChange={(value) => setZoom(value[0])}
                  className="w-24"
                />
                <span className="text-xs text-[#5A6C71]">{zoom}%</span>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={zoomIn}
                disabled={zoom >= 200}
                className="border-[#5C818A] text-[#073742]"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-sm text-[#5A6C71]">
              Page {currentPage} of {totalPages}
            </div>
          </div>

          <div
            className="aspect-[8.5/11] bg-white border border-[#5C818A] rounded-md overflow-hidden"
            style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}
          >
            {/* In a real app, this would show the converted PDF with the custom font */}
            <div className="w-full h-full flex items-center justify-center p-8">
              <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'CustomFont', sans-serif" }}>
                  Sample Document
                </h2>
                <p className="mb-4" style={{ fontFamily: "'CustomFont', sans-serif" }}>
                  This is your document with your custom handwriting font applied. Notice how the text has been
                  transformed to match your unique style while maintaining perfect readability.
                </p>
                <p style={{ fontFamily: "'CustomFont', sans-serif" }}>
                  You can now download this document or continue editing it in our text editor.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="border-[#5C818A] text-[#073742]"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <Button className="bg-[#1798C1] text-[#FFFFFF] hover:bg-[#1798C1]/90">
              <Download className="mr-2 h-4 w-4" />
              Download Converted PDF
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="border-[#5C818A] text-[#073742]"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

