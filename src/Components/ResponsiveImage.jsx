export function ResponsiveImage() {
  return (
    <picture>
      <source
        media='(min-width: 1920px)'
        srcSet='/images/presentation-picture@2000.webp'
        type='image/webp'
      />
      <source
        media='(min-width: 1200px)'
        srcSet='/images/presentation-picture@1200.webp'
        type='image/webp'
      />
      <source
        media='(min-width: 768px)'
        srcSet='/images/presentation-picture@850.webp'
        type='image/webp'
      />
      <source
        media='(min-width: 1920px)'
        srcSet='/images/presentation-picture@2000.jpg'
        type='image/jpg'
      />
      <source
        media='(min-width: 1200px)'
        srcSet='/images/presentation-picture@1200.jpg'
        type='image/jpg'
      />
      <source
        media='(min-width: 768px)'
        srcSet='/images/presentation-picture@850.jpg'
        type='image/jpg'
      />
      <img
        src='/images/presentation-picture@760.jpg'
        alt='Presentation picture'
      />
    </picture>
  );
}
