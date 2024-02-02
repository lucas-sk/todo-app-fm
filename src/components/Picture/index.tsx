import { useTheme } from '@/context/ThemeContext'
import bgDarkDesktop from '../../assets/bg-desktop-dark.jpg'
import bgLightDesktop from '../../assets/bg-desktop-light.jpg'
import bgDarkMobile from '../../assets/bg-mobile-dark.jpg'
import bgLightMobile from '../../assets/bg-mobile-light.jpg'

export const Picture = () => {
  const { theme } = useTheme()

  const srcSet = theme === 'dark' ? bgDarkDesktop : bgLightDesktop
  const srcImg = theme === 'dark' ? bgDarkMobile : bgLightMobile

  return (
    <picture className='absolute z-0'>
      <source media='(min-width: 376px)' srcSet={srcSet} />
      <img
        src={srcImg}
        alt='background mobile dark'
        className='w-full h-full object-cover object-center max-h-80'
      />
    </picture>
  )
}
