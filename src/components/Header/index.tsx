import Sun from '../Sun';

export const Header = () => {
  return (
    <header className='flex justify-between items-center'>
      <h3 className='text-[1.625rem] font-bold  tracking-[0.4em] text-white-700'>
        TODO
      </h3>
      <Sun />
    </header>
  );
};
