const Container = ({ children, ...props }) => {
  return (
    <div className='px-8 md:p-0 sm:max-w-2xl xl:max-w-5xl mx-auto flex flex-col' {...props}>
      {children}
    </div>
  );
};

export default Container;
