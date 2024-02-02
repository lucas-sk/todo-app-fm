import { useTheme } from '@/context/ThemeContext';
import { Moon } from '../Moon';
import Sun from '../Sun';
import { Button } from '../ui/button';

export const Header = () => {
  const { theme, toggleTheme } = useTheme()

  function handleToggleTheme() {
    toggleTheme()
  }

  return (
    <header className='flex justify-between items-center'>
      <h3 className=' text-[1.625rem] font-bold  tracking-[0.4em] text-white-700'>
        TODO
      </h3>
       <Button onClick={handleToggleTheme} className='bg-transparent shadow-transparent hover:bg-transparent' size={'icon'}>
         {theme === 'dark' && <Sun className='dark:text-dark-100 dark:hover:text-dark-300'/>}
         {theme === 'light' && <Moon className='text-light-100 hover:text-light-200'/>}
      </Button>
    </header>
  );
};
