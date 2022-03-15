import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import UserMenu from './components/UserMenu';
import Logo from './components/Logo';
import Menu from './components/Menu';
import MobileMenu from './components/MobileMenu';
import styles from './styles';
import { MenuItem } from '../../interfaces';

const NavBar = () => {
  const menu: MenuItem[] = [
    { name: 'Explore', href: '#', current: true },
    { name: 'Add trip', href: '#', current: false },
    { name: 'Suggestions', href: '#', current: false },
    { name: 'My trips', href: '#', current: false },
  ];

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className={styles.navbarContainer}>
            <div className={styles.navbarBox}>
              <div className={styles.mobile.box}>
                <Disclosure.Button className={styles.mobile.button}>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className={styles.navbarLeft}>
                <Logo />
                <Menu menu={menu} />
              </div>
              <UserMenu />
            </div>
          </div>

          <MobileMenu menu={menu} />
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
