import { useTheme } from '@/context/ThemeContext'
import bgDarkDesktop from '../../assets/bg-desktop-dark.jpg'
import bgLightDesktop from '../../assets/bg-desktop-light.jpg'
import bgDarkMobile from '../../assets/bg-mobile-dark.jpg'
import bgLightMobile from '../../assets/bg-mobile-light.jpg'

export const Picture = () => {
  const { theme } = useTheme()

  return (
    <picture className='absolute z-0'>
      {theme === 'dark' &&
      <>
        <source media='(min-width: 376px)' srcSet={bgDarkDesktop} />
        <img
          src={bgDarkMobile}
          alt='background mobile dark'
          className='h-auto max-w-full '
        />
      </>
      }
      {theme === 'light' &&
      <>
        <source media='(min-width: 376px)' srcSet={bgLightDesktop} />
       <img
         src={bgLightMobile}
          alt='background mobile dark'
          className='h-auto max-w-full '
        />
      </>
      }

    </picture>
  )
}
