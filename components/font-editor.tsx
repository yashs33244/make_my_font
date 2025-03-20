"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface FontEditorProps {
  fontUrl: string | null
}

export function FontEditor({ fontUrl }: FontEditorProps) {
  const [fontSize, setFontSize] = useState(24)
  const [letterSpacing, setLetterSpacing] = useState(0)
  const [lineHeight, setLineHeight] = useState(1.5)
  const [sampleText, setSampleText] = useState("The quick brown fox jumps over the lazy dog")

  // In a real app, we would load the font using @font-face
  const fontStyle = fontUrl
    ? {
        fontFamily: "'CustomFont', sans-serif",
      }
    : {}

  return (
    <div className="space-y-6">
      <Tabs defaultValue="preview">
        <TabsList className="grid w-full grid-cols-2 bg-[#EBFAFE]">
          <TabsTrigger value="preview" className="data-[state=active]:bg-[#1798C1] data-[state=active]:text-[#FFFFFF]">
            Preview
          </TabsTrigger>
          <TabsTrigger value="adjust" className="data-[state=active]:bg-[#1798C1] data-[state=active]:text-[#FFFFFF]">
            Adjust
          </TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="space-y-4">
          <Card className="border-[#5C818A]">
            <CardContent className="pt-6">
              <div
                className="min-h-[200px] p-4 border rounded-md border-[#5C818A] bg-[#FFFFFF]"
                style={{
                  ...fontStyle,
                  fontSize: `${fontSize}px`,
                  letterSpacing: `${letterSpacing}px`,
                  lineHeight: lineHeight,
                  color: "#073742",
                }}
              >
                {sampleText}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-2">
            <Label htmlFor="sample-text" className="text-[#073742]">
              Sample Text
            </Label>
            <Input
              id="sample-text"
              value={sampleText}
              onChange={(e) => setSampleText(e.target.value)}
              placeholder="Enter text to preview"
              className="border-[#5C818A]"
            />
          </div>
        </TabsContent>

        <TabsContent value="adjust" className="space-y-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="font-size" className="text-[#073742]">
                  Font Size: {fontSize}px
                </Label>
              </div>
              <Slider
                id="font-size"
                min={8}
                max={72}
                step={1}
                value={[fontSize]}
                onValueChange={(value) => setFontSize(value[0])}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="letter-spacing" className="text-[#073742]">
                  Letter Spacing: {letterSpacing}px
                </Label>
              </div>
              <Slider
                id="letter-spacing"
                min={-5}
                max={10}
                step={0.1}
                value={[letterSpacing]}
                onValueChange={(value) => setLetterSpacing(value[0])}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="line-height" className="text-[#073742]">
                  Line Height: {lineHeight}
                </Label>
              </div>
              <Slider
                id="line-height"
                min={0.8}
                max={3}
                step={0.1}
                value={[lineHeight]}
                onValueChange={(value) => setLineHeight(value[0])}
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" className="border-[#5C818A] text-[#073742]">
          Reset
        </Button>
        <Button className="bg-[#1798C1] text-[#FFFFFF] hover:bg-[#1798C1]/90">Save Adjustments</Button>
      </div>
    </div>
  )
}

