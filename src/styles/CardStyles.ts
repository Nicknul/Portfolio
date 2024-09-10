const CardStyles = {
  container: (isSelected: boolean, isMobile: boolean) =>
    `bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-80 h-auto transform transition-transform duration-300 cursor-pointer ${
      isSelected ? 'bg-zinc-800' : ''
    } ${!isMobile ? 'hover:-translate-y-2 hover:bg-zinc-800 group' : ''} relative`,

  image: (isSelected: boolean, isMobile: boolean) =>
    `w-full h-full object-cover transition-opacity duration-300 ${isSelected ? 'opacity-0' : ''} ${
      !isMobile ? 'group-hover:opacity-0' : ''
    }`,

  content: (isSelected: boolean, isMobile: boolean) => ({
    category: `text-sm text-gray-500 ${isSelected ? 'text-white' : ''} ${!isMobile ? 'group-hover:text-white' : ''}`,
    title: `text-lg sm:text-xl font-semibold mt-2 ${isSelected ? 'text-white' : ''} ${
      !isMobile ? 'group-hover:text-white' : ''
    }`,
  }),

  buttons: (isSelected: boolean, isMobile: boolean) =>
    `absolute inset-0 flex flex-col justify-center items-center space-y-2 transition-all duration-300 ${
      isMobile ? (isSelected ? 'block' : 'hidden') : 'opacity-0 group-hover:opacity-100'
    }`,

  buttonBase: 'w-full max-w-[150px]',
};

export default CardStyles;
