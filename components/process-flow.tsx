'use client';

import { motion, useInView, useAnimationControls } from "framer-motion";
import { FileText, Users, Search, Edit, FileCode, Pencil, CheckCircle, Upload, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const processSteps = [
  {
    id: 1,
    title: "Receive Innovation\nDisclosure",
    icon: FileText,
    color: "bg-red-500",
    borderColor: "border-red-500",
    row: 1,
    col: 1
  },
  {
    id: 2,
    title: "Inventor\nInterview",
    icon: Users,
    color: "bg-rose-500",
    borderColor: "border-rose-500",
    row: 1,
    col: 2
  },
  {
    id: 3,
    title: "Prior Art\nSearch",
    icon: Search,
    color: "bg-orange-500",
    borderColor: "border-orange-500",
    row: 1,
    col: 3
  },
  {
    id: 4,
    title: "Draft\nClaims",
    icon: Edit,
    color: "bg-yellow-500",
    borderColor: "border-yellow-500",
    row: 1,
    col: 4
  },
  {
    id: 5,
    title: "Prepare\nSpecification",
    icon: Pencil,
    color: "bg-lime-500",
    borderColor: "border-lime-500",
    row: 2,
    col: 1
  },
  {
    id: 6,
    title: "Create\nDrawings",
    icon: FileCode,
    color: "bg-emerald-500",
    borderColor: "border-emerald-500",
    row: 2,
    col: 2
  },
  {
    id: 7,
    title: "Review &\nFinalize",
    icon: CheckCircle,
    color: "bg-green-500",
    borderColor: "border-green-500",
    row: 2,
    col: 3
  },
  {
    id: 8,
    title: "File\nPatent",
    icon: Upload,
    color: "bg-green-600",
    borderColor: "border-green-600",
    row: 2,
    col: 4
  }
];

const ProcessFlow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="relative py-8" ref={containerRef}>
      {/* Process Steps Grid */}
      <div className="relative grid grid-cols-4 gap-8 gap-y-16">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative process-box h-[160px]"
          >
            {/* Horizontal Flow Arrow */}
            {index < processSteps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.5 }}
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center bg-slate-900/80 rounded-full"
              >
                <ArrowRight className="w-5 h-5 text-gray-300" />
              </motion.div>
            )}

            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-lg border ${step.borderColor} border-opacity-50 bg-slate-800/50 backdrop-blur-sm h-full flex flex-col relative overflow-hidden group`}
            >
              {/* Sequential Highlight Effect */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.2,
                  repeat: Infinity,
                  repeatDelay: processSteps.length * 0.2,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
              />

              {/* Progress Bar */}
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`absolute top-0 left-0 h-0.5 ${step.color}`}
              />

              <div className="flex-1 flex flex-col items-center justify-center relative z-10">
                <step.icon className={`w-8 h-8 ${step.color} rounded-full p-1.5 mb-3`} />
                <h3 className="text-lg font-semibold text-white text-center whitespace-pre-line leading-snug">
                  {step.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessFlow; 