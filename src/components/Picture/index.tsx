import bgDarkDesktop from '../../assets/bg-desktop-dark.jpg'
import bgDarkMobile from '../../assets/bg-mobile-dark.jpg'

export const Picture = () => {
  return (
    <picture className='absolute z-0'>
      <source media='(min-width: 376px)' srcSet={bgDarkDesktop} />
      <img
        src={bgDarkMobile}
        alt='background mobile dark'
        className='h-auto max-w-full '
      />
    </picture>
  )
}
