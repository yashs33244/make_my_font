import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export const ProcessingOverlay = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 p-6 border border-[#5C818A] rounded-lg bg-[#EBFAFE]"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <Loader2 className="h-12 w-12 text-[#1798C1] animate-spin" />
        <div className="space-y-2">
          <h3 className="text-xl font-medium text-[#073742]">
            Processing Your Handwriting
          </h3>
          <p className="text-[#5A6C71]">
            Our AI is analyzing your handwriting patterns and creating your
            custom font. This may take a few moments.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
