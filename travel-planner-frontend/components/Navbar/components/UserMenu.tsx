import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/outline';
import { classNames } from '@helpers/classNames';
import styles from '../styles';

const UserMenu = () => {
  return (
    <div className={styles.userMenu.container}>
      <button type="button" className={styles.userMenu.btnNotification}>
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </button>

      <Menu as="div" className="ml-3 relative">
        <div>
          <Menu.Button className={styles.userMenu.menu.btn}>
            <span className="sr-only">Open user menu</span>
            <img className="h-8 w-8 rounded-full" src="/user.png" alt="" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className={styles.userMenu.menu.box}>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active
                      ? styles.userMenu.menu.items.currentLink
                      : styles.userMenu.menu.items.defaultLink,
                    styles.userMenu.menu.items.item
                  )}
                >
                  Settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active
                      ? styles.userMenu.menu.items.currentLink
                      : styles.userMenu.menu.items.defaultLink,
                    styles.userMenu.menu.items.item
                  )}
                >
                  Sign out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default UserMenu;
