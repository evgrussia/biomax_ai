import { AlertCircle, X } from "lucide-react";
import { useState } from "react";

export function DemoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 p-0.5">
      <div className="relative flex items-center justify-between gap-4 rounded-[15px] bg-gradient-to-r from-orange-600/95 via-amber-600/95 to-yellow-600/95 px-6 py-4 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <AlertCircle className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-white">Demo Mode Active</p>
            <p className="text-sm text-white/90">
              This is a demonstration dashboard. Connect your device for real-time health monitoring.
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/30"
        >
          <X className="h-4 w-4 text-white" />
        </button>
      </div>
    </div>
  );
}
