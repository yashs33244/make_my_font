import { DEFAULT_BACKGROUNDS } from "@/lib/config";

export function BackgroundSelector({
  backgroundColor,
  setBackgroundColor,
}: any) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {DEFAULT_BACKGROUNDS.map((bg) => (
        <div
          key={bg.name}
          className="w-8 h-8 rounded-full cursor-pointer border border-[#5C818A]"
          style={{ backgroundColor: bg.color }}
          onClick={() => setBackgroundColor(bg.color)}
        />
      ))}
    </div>
  );
}
