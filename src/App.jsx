import { Navbar } from './Components/Navbar';
import { motion } from 'motion/react';
import { ProjectsSection } from './Components/ProjectsSection';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className='relative min-h-screen flex flex-col justify-center px-12 pt-32 overflow-hidden'>
          <div className='absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none'>
            <div className='absolute inset-0 bg-gradient-to-l from-primary/20 to-transparent'></div>
            <img
              alt=''
              className='w-full h-full object-cover grayscale'
              data-alt='Abstract cybernetic grid background in dark tones'
              src='https://lh3.googleusercontent.com/aida-public/AB6AXuBCrtYr_DzqsW_N72-Ak9AffLXfLrRxhYOiaFmUocO8GqpAtOVlcUl-bAT4f2hki8KDik4idwiXAOY6ZsToJsPgRXWrqYdYKFP_ouAXGG4pN9EMXhPwyBtStojK_4uv5LGnALdHp2eTuZ4GXemswquEE_mom9w476PWfw6Q_PvowUgahJ35FDX_0NVjrnuDnNDukPOnFlMEMFTv445bLfm5dBdPZf_g3lCYZia3BlZH5s_gZmQvaB5YZIvM2ZAc8SJVKVVPsAEruUtT'
            />
          </div>
          <div className='max-w-[1400px] w-full relative z-10'>
            <h1 className='font-headline text-[clamp(4rem,10vw,8rem)] leading-[0.85] font-black tracking-tighter uppercase mb-12'>
              Building Digital <br />
              <span className='text-primary text-glow'>Empires</span>
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-12 items-end'>
              <div className='md:col-span-6'>
                <p className='font-body text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl'>
                  Building interfaces that command attention. Every line of
                  code, every pixel, designed with precision and impact.
                </p>
              </div>
              <div className='md:col-span-6 md:text-right hidden md:block'>
                <div className='inline-flex flex-col gap-2'>
                  <span className='text-xs font-label uppercase tracking-widest text-outline'>
                    Latency: 24ms
                  </span>
                  <span className='text-xs font-label uppercase tracking-widest text-outline'>
                    Status: Sovereign
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='absolute bottom-12 left-12 flex items-center gap-6'>
            <div className='w-12 h-[1px] bg-primary'></div>
            <span className='font-label text-xs uppercase tracking-widest text-on-surface-variant'>
              Scroll to explore
            </span>
          </div>
        </section>

        <section className='py-32 px-12 bg-background relative' id='experience'>
          <div className='max-w-[1920px] mx-auto'>
            <div className='mb-24'>
              <span className='font-label text-xs tracking-[0.3em] uppercase text-primary mb-4 block'>
                Archive_001
              </span>
              <motion.h2
                initial={{ opacity: 0, x: -70 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
                className='font-headline text-6xl md:text-8xl font-black tracking-tighter uppercase'
              >
                Work <br />
                History
              </motion.h2>
            </div>
            <div className='border-l border-outline-variant/30 pl-8 md:pl-20 relative'>
              <div className='relative mb-20'>
                <div className='absolute -left-[37px] md:-left-[85px] top-2 w-4 h-4 bg-primary'></div>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-12'>
                  <div className='md:col-span-4'>
                    <motion.span
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      viewport={{ once: true, amount: 0.3 }}
                      className='font-headline text-primary font-bold uppercase tracking-widest text-sm mb-2 block'
                    >
                      Nov 2025 – Feb 2026
                    </motion.span>
                    <motion.h3
                      initial={{ opacity: 0, y: -40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: 'easeOut',
                        delay: 0.3,
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                      className='font-headline text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4'
                    >
                      Intern Frontend <br />
                      Web Developer
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: 0.7,
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                      className='font-label text-sm uppercase tracking-widest text-on-surface-variant'
                    >
                      PitchMatter • Dubai, UAE
                    </motion.div>
                  </div>
                  <div className='md:col-span-8'>
                    <ul className='space-y-8'>
                      <motion.li
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: 'easeOut',
                          delay: 0.7,
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className='flex gap-6 group'
                      >
                        <span className='font-headline font-bold text-primary text-xl'>
                          01
                        </span>
                        <p className='font-body text-xl text-on-surface leading-relaxed group-hover:text-primary transition-colors'>
                          Fixed UI bugs and aligned the frontend with Figma
                          designs using{' '}
                          <span className='text-primary'>React</span>,{' '}
                          <span className='text-primary'>Tailwind CSS</span>,
                          and <span className='text-primary'>TypeScript</span>,
                          improving visual consistency, responsiveness, and
                          overall user experience.
                        </p>
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: 'easeOut',
                          delay: 0.8,
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className='flex gap-6 group'
                      >
                        <span className='font-headline font-bold text-primary text-xl'>
                          02
                        </span>
                        <p className='font-body text-xl text-on-surface leading-relaxed group-hover:text-primary transition-colors'>
                          Built reusable and scalable React components,
                          leveraging{' '}
                          <span className='text-primary'>Redux Toolkit</span>{' '}
                          for state management to reduce duplication and
                          accelerate future feature development.
                        </p>
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: 'easeOut',
                          delay: 0.9,
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className='flex gap-6 group'
                      >
                        <span className='font-headline font-bold text-primary text-xl'>
                          03
                        </span>
                        <p className='font-body text-xl text-on-surface leading-relaxed group-hover:text-primary transition-colors'>
                          Improved accessibility using semantic HTML, ARIA
                          attributes, and usability best practices, contributing
                          to a more inclusive and accessible interface.
                        </p>
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: 'easeOut',
                          delay: 1,
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className='flex gap-6 group'
                      >
                        <span className='font-headline font-bold text-primary text-xl'>
                          04
                        </span>
                        <p className='font-body text-xl text-on-surface leading-relaxed group-hover:text-primary transition-colors'>
                          Integrated frontend components with backend APIs,
                          using <span className='text-primary'>TypeScript</span>{' '}
                          and <span className='text-primary'>Zod</span> for data
                          validation and safer data handling, ensuring smooth
                          and predictable UI behavior.
                        </p>
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: 'easeOut',
                          delay: 1.1,
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className='flex gap-6 group'
                      >
                        <span className='font-headline font-bold text-primary text-xl'>
                          05
                        </span>
                        <p className='font-body text-xl text-on-surface leading-relaxed group-hover:text-primary transition-colors'>
                          Collaborated with the team using{' '}
                          <span className='text-primary'>Git</span>,{' '}
                          <span className='text-primary'>GitHub</span>, pull
                          requests and code reviews, actively communicating
                          ideas, and contributing to shared frontend decisions.
                        </p>
                      </motion.li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProjectsSection />
        <section
          className='py-32 px-12 bg-background relative overflow-hidden'
          id='about'
        >
          <div className='max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-24 items-center'>
            <div className='md:col-span-7'>
              <span className='font-label text-xs tracking-[0.3em] uppercase text-primary mb-6 block'>
                Identity.Manifesto
              </span>
              <motion.h2
                initial={{ opacity: 0, x: -70 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
                className='font-headline text-6xl md:text-8xl font-black tracking-tighter uppercase mb-12'
              >
                The Digital <br />
                Architect
              </motion.h2>
              <div className='space-y-8'>
                <motion.p
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className='font-body text-2xl text-on-surface leading-relaxed'
                >
                  I operate at the intersection of brutalist design and
                  high-order engineering. My philosophy is simple:{' '}
                  <span className='text-primary font-bold'>
                    Absolute Competence.
                  </span>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className='font-body text-lg text-on-surface-variant leading-relaxed max-w-2xl'
                >
                  I create high-quality, user-focused frontend solutions with
                  precision and care. Every project I build is designed to
                  perform and impress.
                </motion.p>
              </div>
              <div className='grid grid-cols-2 gap-12 mt-16 border-t border-outline-variant/30 pt-12'>
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h4 className='font-headline font-bold text-primary text-xl uppercase mb-2'>
                    Philosophy
                  </h4>
                  <p className='font-label text-sm text-on-surface-variant uppercase tracking-widest'>
                    Performance first. Aesthetics second. Compromise never.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h4 className='font-headline font-bold text-primary text-xl uppercase mb-2'>
                    Technique
                  </h4>
                  <p className='font-label text-sm text-on-surface-variant uppercase tracking-widest'>
                    Full-stack dominance with a focus on immersive UI systems.
                  </p>
                </motion.div>
              </div>
            </div>
            <div className='md:col-span-5 relative'>
              <div className='aspect-[3/4] bg-surface-container-high relative overflow-hidden'>
                <img
                  alt=''
                  className='w-full h-full object-cover object-top grayscale brightness-75 contrast-125'
                  data-alt='Dramatic black and white portrait of a professional developer'
                  src='/personal-portfolio-web/me.webp'
                />
                <div className='absolute inset-0 border-[20px] border-primary/10'></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='w-full border-t border-[#484849]/15 bg-[#0e0e0f]'>
        <div className='flex flex-col md:flex-row justify-between items-center w-full px-12 py-16 max-w-[1920px] mx-auto gap-8'>
          <div className="text-lg font-bold text-[#9cff93] font-['Space_Grotesk'] uppercase tracking-widest">
            JOSEVIGO.DEV
          </div>
          <div className="font-['Inter'] text-sm tracking-widest uppercase text-[#adaaab]">
            © 2026 THE DIGITAL ARCHITECT. ALL RIGHTS RESERVED.
          </div>
          <div className='flex gap-8'>
            <a
              className="font-['Inter'] text-sm tracking-widest uppercase text-[#adaaab] hover:text-[#9cff93] transition-colors opacity-80 hover:opacity-100"
              href='https://github.com/josevigodev'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
            <a
              className="font-['Inter'] text-sm tracking-widest uppercase text-[#adaaab] hover:text-[#9cff93] transition-colors opacity-80 hover:opacity-100"
              href='https://linkedin.com/in/josevigodev'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>
            {/* <a
              className="font-['Inter'] text-sm tracking-widest uppercase text-[#adaaab] hover:text-[#9cff93] transition-colors opacity-80 hover:opacity-100"
              href='https://read.cv/josevigodev'
              target='_blank'
              rel='noopener noreferrer'
            >
              Read.cv
            </a> */}
          </div>
        </div>
      </footer>
    </>
  );
}
