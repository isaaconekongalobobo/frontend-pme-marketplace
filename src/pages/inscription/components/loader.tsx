import type { Variants, Transition } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import { useEffect } from 'react';

const gVariants: Variants = {
  normal: { rotate: 0 }, // if you want to start from a different angle, change this value or remove it entirely
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 1,
      ease: 'linear',
    },
  },
};

const defaultTransition: Transition = {
  type: 'spring',
  stiffness: 50,
  damping: 10,
};

const divVariant = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
}

const Loader = () => {
  const controls = useAnimation();
  useEffect (() => {
    controls.start('animate')
  },[])

  return (
    <motion.div
    variants={divVariant} initial="initial" animate="animate"
      className="cursor-pointer select-none hover:bg-accent rounded-md transition-colors duration-200 flex gap-1
       items-center justify-center"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className='size-4' viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round"strokeLinejoin="round"
      >
        <motion.g transition={defaultTransition} variants={gVariants} animate={controls}>
          <path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" />
          <path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" />
          <path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" />
        </motion.g>
        <circle cx="12" cy="12" r="10" />
      </svg>
      <span className='text-sm'>Chargement...</span>
    </motion.div>
  );
};

export { Loader };
