import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

type AnimatedElementProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  motionProps?: MotionProps;
};

export const AnimatedElement = ({
  children,
  delay = 0,
  duration = 0.5,
  y = 20,
  className = "",
  motionProps,
}: AnimatedElementProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};
