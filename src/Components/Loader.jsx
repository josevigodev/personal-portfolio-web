import { motion } from 'motion/react';

export function Loader ({lang}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-dvh bg-[#0b0b0f]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='flex flex-col items-center gap-3'
      >
        <motion.span
          animate={{ opacity: [0.2, 1, 0.2 ] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="text-4xl text-white tracking-[0.35em] uppercase"
        >
          {lang ? 'Loading' : 'Cargando'}
        </motion.span>

        <span className='text-lg text-white/40'>
          {lang ? 'Preparing portfolio' : 'Preparando portfolio'}
        </span>
      </motion.div>
    </div>
  )
}