import styles from '../styles';
import { classNames } from '@helpers/classNames';
import { MenuItem } from '../../../interfaces';

type MenuProps = {
  menu: MenuItem[];
};

const Menu = ({ menu }: MenuProps) => {
  return (
    <div className={styles.menu.container}>
      <div className={styles.menu.box}>
        {menu.map(item => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? styles.menu.items.currentLink
                : styles.menu.items.defaultLink,
              styles.menu.items.item
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Menu;
