export function Navbar() {
  return (
    <nav className='fixed top-0 w-full z-50 bg-[#131314]/70 backdrop-blur-xl transition-all duration-300'>
      <div className='flex justify-between items-center w-full px-12 py-6 max-w-[1920px] mx-auto'>
        <div className="text-2xl font-black tracking-tighter text-[#9cff93] font-['Space_Grotesk'] uppercase">
          JOSEVIGO.DEV
        </div>
        <div className='hidden md:flex items-center gap-12'>
          <a
            className="font-['Space_Grotesk'] font-bold tracking-tighter uppercase text-[#9cff93] border-b-2 border-[#9cff93] pb-1 transition-all"
            href='#experience'
          >
            Experience
          </a>
          <a
            className="font-['Space_Grotesk'] font-bold tracking-tighter uppercase text-[#adaaab] hover:text-[#9cff93] transition-all"
            href='#projects'
          >
            Projects
          </a>
          <a
            className="font-['Space_Grotesk'] font-bold tracking-tighter uppercase text-[#adaaab] hover:text-[#9cff93] transition-all"
            href='#about'
          >
            About
          </a>
          <a
            className="font-['Space_Grotesk'] font-bold tracking-tighter uppercase text-[#adaaab] hover:text-[#9cff93] transition-all"
            href='#contact'
          >
            Contact
          </a>
        </div>
        <a
          href='/personal-portfolio-web/assets/Jose Vigo CV English.pdf'
          className='relative bg-primary text-on-primary px-8 py-3 font-["Space_Grotesk"] font-bold uppercase tracking-widest hover:translate-y-[-2px] hover:shadow-[0_0_20px_rgba(156,255,147,0.2)] transition-all active:scale-95 group'
          download='Jose Vigo CV English.pdf'
        >
          Resume
          <div className='absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity'></div>
          <div className='absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity'></div>
        </a>
      </div>
    </nav>
  );
}
