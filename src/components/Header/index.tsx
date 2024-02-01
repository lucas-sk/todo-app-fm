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
         {theme === 'dark' && <Sun className='hover:text-white-500'/>}
         {theme === 'light' && <Moon className='hover:text-white-500'/>}
      </Button>
    </header>
  );
};
