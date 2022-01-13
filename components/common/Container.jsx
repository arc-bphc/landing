const Container = ({ children, ...props }) => {
  return (
    <div className='px-8 md:p-0 sm:max-w-2xl lg:max-w-5xl mx-auto' {...props}>
      {children}
    </div>
  );
};

export default Container;
