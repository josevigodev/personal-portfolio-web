// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { CarouselIndicator } from './CarouselIndicator';

export function SeeMoreProject({
  title,
  description,
  technologies,
  demoLink,
  githubLink,
  alt,
  gallery,
  onClose,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setProgress(0);
    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 100 / 40;
        if (newProgress >= 100) {
          setCurrentIndex(
            currentIndex === gallery.length - 1 ? 0 : currentIndex + 1,
          );
          return 0;
        }
        return newProgress;
      });
    }, 100);
  }, [gallery.length, currentIndex]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const handleClose = (e) => {
    console.log(e.target.classList);
    if (!e.target.classList.contains('fun')) return;
    onClose();
  };

  // Slide handlers
  const handlePrevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? gallery.length - 1 : currentIndex - 1);
    startTimer();
  };

  const handleNextSlide = () => {
    setCurrentIndex(currentIndex === gallery.length - 1 ? 0 : currentIndex + 1);
    startTimer();
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => handleClose(e)}
        className='fun fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 lg:p-24 bg-surface-dim/40 backdrop-blur-2xl'
      >
        <button
          onClick={(e) => handleClose(e)}
          className='fun fixed top-8 right-8 z-[110] text-on-surface hover:text-primary transition-colors group cursor-pointer'
        >
          <span className='fun material-symbols-outlined text-4xl'>close</span>
        </button>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className='w-full max-w-7xl h-full max-h-[850px] bg-surface-container-low flex flex-col md:flex-row relative border border-outline-variant/10 shadow-2xl'
        >
          <div className='w-full md:w-[60%] h-[400px] md:h-full relative bg-primary/10 group'>
            <div className='overflow-hidden relative h-full'>
              <div
                className='flex h-full transition-transform duration-500 ease-in-out'
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {gallery.map((src, index) => (
                  <img
                    key={index}
                    alt={`${alt} - screenshot ${index + 1}`}
                    className='w-full h-full object-contain opacity-90 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 flex-shrink-0'
                    data-alt={description}
                    src={src}
                  />
                ))}
              </div>

              <CarouselIndicator
                items={gallery}
                currentIndex={currentIndex}
                progress={progress}
              />

              <div className='absolute top-8 left-8 px-4 py-1 bg-primary text-on-primary font-headline font-bold text-xs tracking-widest uppercase'>
                DEPLOYED_STABLE
              </div>
            </div>

            <div className='absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6'>
              <button
                onClick={handlePrevSlide}
                className='bg-surface-dim/80 p-4 hover:bg-primary hover:text-on-primary transition-all active:scale-90'
              >
                <span className='material-symbols-outlined'>
                  arrow_back_ios_new
                </span>
              </button>
              <button
                onClick={handleNextSlide}
                className='bg-surface-dim/80 p-4 hover:bg-primary hover:text-on-primary transition-all active:scale-90'
              >
                <span className='material-symbols-outlined'>
                  arrow_forward_ios
                </span>
              </button>
            </div>
          </div>

          <div className='project-container w-full md:w-[40%] overflow-y-auto p-12 lg:p-16 flex flex-col justify-between bg-surface-container-low border-l border-outline-variant/10'>
            <div>
              <div className='mb-12'>
                <h1 className='font-headline text-5xl lg:text-7xl font-bold tracking-tighter leading-none mb-8 text-on-surface'>
                  {title}
                </h1>
                <div className='w-20 h-2 bg-primary mb-8'></div>
              </div>

              <div className='space-y-6 mb-12'>
                <p className='text-on-surface-variant leading-relaxed text-lg'>
                  {description}
                </p>
              </div>
              <div className='mb-12'>
                <h3 className='font-headline text-[10px] tracking-[0.3em] text-outline mb-6 uppercase'>
                  System Stack
                </h3>
                <div className='flex flex-wrap gap-x-8 gap-y-4'>
                  {technologies.map((tech, index) => (
                    <div key={index} className='flex items-center gap-2 group'>
                      <span className='w-1.5 h-1.5 bg-primary group-hover:scale-150 transition-transform'></span>
                      <span className='font-headline cursor-default text-sm tracking-widest text-on-surface uppercase'>
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto'>
              <a
                href={demoLink}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-primary text-on-primary font-headline font-bold py-5 tracking-[0.2em] hover:brightness-110 active:scale-95 transition-all text-xs flex items-center justify-center'
              >
                LIVE DEMO
              </a>
              <a
                href={githubLink}
                target='_blank'
                rel='noopener noreferrer'
                className='border border-outline-variant hover:bg-surface-bright text-on-surface font-headline font-bold py-5 tracking-[0.2em] active:scale-95 transition-all text-xs flex items-center justify-center'
              >
                SOURCE CODE
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
