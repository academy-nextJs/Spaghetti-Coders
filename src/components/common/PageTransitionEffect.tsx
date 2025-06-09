"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useEffect, useRef } from "react";
import { useTheme } from "next-themes";

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

// const variants = {
//   hidden: { opacity: 0, x: -200, y: 100 },
//   enter: { opacity: 1, x: 0, y: 0 },
//   exit: { opacity: 0, x: 0, y: -100 },
// };

//Fade In/Out with Scale:
// const variants = {
//   hidden: { opacity: 0, scale: 0.95 },
//   enter: { opacity: 1, scale: 1 },
//   exit: { opacity: 0, scale: 1.05 }
// };

// Slide and Fade with Spring:
// const variants = {
//   hidden: { opacity: 0, y: 50 },
//   enter: { 
//     opacity: 1, 
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 200,
//       damping: 20
//     }
//   },
//   exit: { 
//     opacity: 0,
//     y: -50,
//     transition: {
//       duration: 0.3
//     }
//   }
// };

// Rotate and Scale:
// const variants = {
//   hidden: { opacity: 0, rotate: -5, scale: 0.9 },
//   enter: { 
//     opacity: 1, 
//     rotate: 0, 
//     scale: 1,
//     transition: {
//       duration: 0.5,
//       ease: [0.61, 1, 0.88, 1]
//     }
//   },
//   exit: { 
//     opacity: 0,
//     rotate: 5, 
//     scale: 0.9,
//     transition: {
//       duration: 0.4
//     }
//   }
// };

// Slide with Perspective:
// const variants = {
//   hidden: { 
//     opacity: 0, 
//     x: -300,
//     rotateY: 45,
//     // perspective: 1000 
//   },
//   enter: { 
//     opacity: 1, 
//     x: 0,
//     rotateY: 0,
//     // perspective: 1000,
//     transition: {
//       type: "spring",
//       damping: 20,
//       stiffness: 100
//     }
//   },
//   exit: { 
//     opacity: 0,
//     x: 300,
//     rotateY: -45,
//     // perspective: 1000,
//     transition: {
//       duration: 0.5
//     }
//   }
// };

// Elastic Bounce:
// const variants = {
//   hidden: { 
//     opacity: 0, 
//     y: 100,
//     scale: 0.8 
//   },
//   enter: { 
//     opacity: 1, 
//     y: 0,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 300,
//       damping: 15,
//       mass: 1
//     }
//   },
//   exit: { 
//     opacity: 0,
//     y: -100,
//     scale: 0.8,
//     transition: {
//       duration: 0.3
//     }
//   }
// };

// GPT:
// Slide-In with Fade
// const variants = {
//   hidden: { opacity: 0, x: 100 },
//   enter: { opacity: 1, x: 0 },
//   exit: { opacity: 0, x: -100 },
// };

// Scale Up with Fade
// const variants = {
//   hidden: { opacity: 0, scale: 0.95 },
//   enter: { opacity: 1, scale: 1 },
//   exit: { opacity: 0, scale: 0.95 },
// };

// Page Slide
// const variants: Variants = {
//   hidden: { 
//     opacity: 0, 
//     x: -300,
//     rotateY: 45,
//   },
//   enter: { 
//     opacity: 1, 
//     x: 0,
//     rotateY: 0,
//   },
//   exit: { 
//     opacity: 0,
//     x: 300,
//     rotateY: -45,
//   }
// };


export const PageTransitionEffect = ({ children }: { children: React.ReactNode }) => {
  const key = usePathname();
  const body = useRef<HTMLBodyElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  useEffect(() => {
    body.current = document.body as HTMLBodyElement
  }, [])

  const variants: Variants = {
    hidden: { 
      opacity: 1, 
      x: -1700,
      rotateY: 45,
      backgroundColor: `${isDark ? 'black' : 'white'}`,
    },
    enter: { 
      opacity: 1, 
      x: 0,
      rotateY: 0,
      backgroundColor: `${isDark ? 'black' : 'white'}`,
    },
    exit: { 
      opacity: 0,
      x: 0,
      backdropFilter: 'blur(10px)',
    }
  };

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={key}
        id="motionDiv"
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ ease: 'easeInOut', duration: 1 }}
        className="overflow-hidden size-full"
        onAnimationStart={() => body.current?.classList.add("motion-sizing-fix")}
        onAnimationComplete={() => body.current?.classList.remove("motion-sizing-fix")}
      >
        <FrozenRouter>
          {children}
        </FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
};