export function CarouselIndicator({ items, currentIndex, progress }) {
  if (items.length < 2) return null;

  return (
    <>
      <div className='absolute bottom-8 left-8 flex gap-3'>
        {items.length >= 3 &&
          items.map((_, i) => (
            <div key={i} className='relative w-12 h-1 bg-gray-300'>
              {i === currentIndex && (
                <div
                  className='absolute top-0 left-0 h-full bg-primary transition-all duration-100 ease-linear'
                  style={{ width: `${progress}%` }}
                />
              )}
            </div>
          ))}
      </div>
      <div className='flex justify-center gap-2 mt-4 sm:hidden'>
        {items.map((_, i) => (
          <div key={i} className='relative w-12 h-1 bg-gray-300'>
            {i === currentIndex && (
              <div
                className='absolute top-0 left-0 h-full bg-primary transition-all duration-100 ease-linear'
                style={{ width: `${progress}%` }}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
