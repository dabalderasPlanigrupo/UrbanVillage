import { useState } from 'react';
import Image from 'next/image';
import { Navbar } from './navbar';
import { Menu, MenuItem } from './menu';
import { HeaderBlock } from './headerBlock';
import { HamburguerButton } from './hamburguerButton';
import Link from 'next/link';
import LogoImage from '@/images/logo-sc-bw.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderBlock>
      <Navbar as="nav" className={menuOpen ? 'fixed' : ''}>
        <div className="logo">
          <Link href="/" legacyBehavior>
            <a>
              <Image
                src={LogoImage}
                alt="Header"
                height={115}
                width={150}
                objectFit="contain"
              />
            </a>
          </Link>
        </div>
        <HamburguerButton
          onClick={toggleMenu}
          className={menuOpen ? 'close' : ''}
        />
        <Menu className={menuOpen ? '' : 'hide'}>
          <MenuItem onClick={toggleMenu}>
            <Link href="/directorio">
              <a>DIRECTORIO</a>
            </Link>
          </MenuItem>
          <MenuItem onClick={toggleMenu}>
            <Link href="/eventos">
              <a>EVENTOS</a>
            </Link>
          </MenuItem>
          <MenuItem onClick={toggleMenu}>
            <Link href="/promociones">
              <a>PROMOCIONES</a>
            </Link>
          </MenuItem>
          <MenuItem onClick={toggleMenu}>
            <Link href="#footer">
              <a>CONTACTO</a>
            </Link>
          </MenuItem>
        </Menu>
      </Navbar>
    </HeaderBlock>
  );
};

export default Header;
