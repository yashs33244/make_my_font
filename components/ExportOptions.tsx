"use client";

import { useState, useRef, useEffect } from "react";
import {
  FileText,
  NotepadTextIcon as Paragraph,
  Save,
  FileUp,
  FileType2 as FontIcon,
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

export function ExportOptions({
  exportState,
  setExportState,
  exportDocument,
  documentName,
}: any) {
  return (
    <div className="flex items-center gap-2">
      <Select
        value={exportState.exportFormat}
        onValueChange={(value) =>
          setExportState((prev: any) => ({ ...prev, exportFormat: value }))
        }
      >
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Format" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="pdf">PDF</SelectItem>
          <SelectItem value="image">Image</SelectItem>
        </SelectContent>
      </Select>
      <Button
        onClick={() => exportDocument(exportState.exportFormat)}
        disabled={exportState.exportInProgress}
      >
        {exportState.exportInProgress ? "Exporting..." : "Export"}
      </Button>
    </div>
  );
}
