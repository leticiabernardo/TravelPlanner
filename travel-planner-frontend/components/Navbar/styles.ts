const Styles = {
  navbarContainer: 'max-w-7xl mx-auto px-2 sm:px-6 lg:px-8',
  navbarBox: 'relative flex items-center justify-between h-16',
  navbarLeft:
    'flex-1 flex items-center justify-center sm:items-stretch sm:justify-start',
  mobile: {
    box: 'absolute inset-y-0 left-0 flex items-center sm:hidden',
    button:
      'inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white',
  },
  menu: {
    container: 'hidden sm:block sm:ml-6',
    box: 'flex space-x-4',
    items: {
      item: 'px-3 py-2 rounded-md text-sm font-medium',
      defaultLink: 'text-gray-300 hover:bg-gray-700 hover:text-white',
      currentLink: 'bg-gray-900 text-white',
    },
  },
  logo: {
    box: 'flex-shrink-0 flex items-center text-white font-bold',
  },
  userMenu: {
    container:
      'absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0',
    btnNotification:
      'bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white',
    menu: {
      btn: 'bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white',
      box: 'origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none',
      items: {
        item: 'block px-4 py-2 text-sm text-gray-700',
        defaultLink: '',
        currentLink: 'bg-gray-100',
      },
    },
  },
};

export default Styles;
