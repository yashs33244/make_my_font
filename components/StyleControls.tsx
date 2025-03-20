import { Label } from "recharts";
import { Slider } from "@/components/ui/slider";

export function StyleControls({ lineHeight, setLineHeight }: any) {
  return (
    <div className="flex items-center gap-2">
      <Label className="text-sm">Line Height:</Label>
      <Slider
        value={[lineHeight]}
        onValueChange={(value) => setLineHeight(value[0])}
        min={1}
        max={3}
        step={0.1}
        className="w-48"
      />
      <span className="text-sm">{lineHeight.toFixed(1)}</span>
    </div>
  );
}
