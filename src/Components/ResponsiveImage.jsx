export function ResponsiveImage() {
  return (
    <picture>
      {/*  WebP */}
      <source
        media='(min-width: 1920px)'
        srcset='/images/presentation-picture@2000.webp'
        type='image/webp'
      />
      <source
        media='(min-width: 1200px)'
        srcset='/images/presentation-picture@1200.webp'
        type='image/webp'
      />
      <source
        media='(min-width: 768px)'
        srcset='/images/presentation-picture@850.webp'
        type='image/webp'
      />

      {/* JPG */}
      <source
        media='(min-width: 1920px)'
        srcset='/images/presentation-picture@2000.jpg'
        type='image/jpg'
      />
      <source
        media='(min-width: 1200px)'
        srcset='/images/presentation-picture@1200.jpg'
        type='image/jpg'
      />
      <source
        media='(min-width: 768px)'
        srcset='/images/presentation-picture@850.jpg'
        type='image/jpg'
      />

      {/* Fallback */}

      <img
        src='/images/presentation-picture@760.jpg'
        alt='Presentation picture'
      />
    </picture>
  );
}
