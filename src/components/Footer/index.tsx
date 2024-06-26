import Image from 'next/image';
import Link from 'next/link';
import LogoP from '@/images/logo.png';
import LogoSC from '@/images/logo_bw.png';
import React from 'react';
import styled from 'styled-components';
import { AiFillCalendar } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { Column } from '../Utilities/column';
import { Container } from '../Utilities/container';
import { device } from '@/utils/devices';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FooterRow } from './footerRow';
import { HiLocationMarker } from 'react-icons/hi';
import { IconWithText } from './iconWithText';
import { Section } from '../Utilities/section';
import { SocialLink, SocialRow } from '../Utilities/social';
import { SectionFooter } from '../Utilities/sectionFooter';

const Footer = () => {
  return (
    <>
      <Section
        backgroundColor="var(--color-secundario)"
        borderTopLeftRight="40px 40px"
        id="footer"
      >
        <FooterRow>
          <Column size={3} title="Contacto">
            <IconWithText text="Lunes a Domingo de 10:00 am - 10:00 pm">
              <AiFillCalendar size={20} color="var(--color-blanco)" />
            </IconWithText>
            <IconWithText
              text="Av. Eugenio Garza Sada Sur 3431, Sin Nombre de Col 42, 64845 Monterrey, N.L."
              link="https://maps.app.goo.gl/ztKgQ6Db7pVk8RKD7"
            >
              <HiLocationMarker size={20} color="var(--color-blanco)" />
            </IconWithText>
            <IconWithText text="+52 (818)-387-3888" link="tel: +528183873888">
              <BsFillTelephoneFill size={20} color="var(--color-blanco)" />
            </IconWithText>
          </Column>
          <Column title="Mapa del Sitio">
            <List>
              <li>
                <Link color="var(--color-blanco)" href="/">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/directorio">Directorio</Link>
              </li>
              <li>
                <Link href="/eventos">Eventos</Link>
              </li>
              <li>
                <Link href="/promociones">Promociones</Link>
              </li>
              <li>
                <Link href="#footer">Contacto</Link>
              </li>
            </List>
          </Column>
          <Column title="Siguenos">
            <SocialRow>
              <SocialLink
                href="https://www.facebook.com/UrbanVillageOficial"
                target="_blank"
                fontSize="20px"
                variant="rounded"
              >
                <FaFacebookF />
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/urbanvillage_gs"
                target="_blank"
                fontSize="20px"
                variant="rounded"
              >
                <FaInstagram />
              </SocialLink>
            </SocialRow>
          </Column>
        </FooterRow>
      </Section>
      <SectionFooter backgroundColor="black">
        <Container textAlign="center">
          <CustomDiv>
            <LogosDiv>
              <Logos side="left">
                <Image src={LogoP} alt="Logo Planigrupo" />
              </Logos>
              <Logos color="var(--color-blanco)" side="left">
                <Image src={LogoSC} alt="Logo Plaza Santa Catarina" />
              </Logos>
            </LogosDiv>
            <NavLink>
              <CustomLink
                href="https://planigrupo.com.mx/nosotros/"
                target="_blank"
              >
                Nosotros
              </CustomLink>
              <CustomLink
                href="https://planigrupo.com.mx/portafolio/"
                target="_blank"
              >
                Portafolio
              </CustomLink>
              <CustomLink
                href="https://planigrupo.com.mx/comercializacion/"
                target="_blank"
              >
                Comercializacion
              </CustomLink>
              <CustomLink
                href="https://planigrupo.com.mx/inversionistas/"
                target="_blank"
              >
                Inversionistas
              </CustomLink>
              <CustomLink
                href="https://planigrupo.com.mx/contacto/"
                target="_blank"
              >
                Contacto
              </CustomLink>
            </NavLink>
          </CustomDiv>
        </Container>
      </SectionFooter>
    </>
  );
};

const Logos = styled.div<{ side: string; color?: string }>`
  border-left: 2px solid ${({ color }) => color || 'E0ECFF'};
  float: ${({ side }) => side || 'left'};
  height: auto;
  padding-left: 20px;
  padding-right: 20px;
  width: 120px;

  ${device.tablet} {
  }

  ${device.laptop} {
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style: none;
  padding: 0;

  a {
    color: var(--color-blanco);
    transition: color 0.3s;

    &:hover {
      color: var(--color-principal);
    }
  }
`;

const NavLink = styled.div`
  align-items: center;
  color: var(--color-blanco);
  display: grid;
  height: auto;
  justify-content: center;

  ${device.laptop} {
    display: flex;
  }
`;

const CustomLink = styled.a`
  margin-right: 0px;
  margin-top: 5px;

  ${device.laptop} {
    margin-right: 32px;
  }
`;

const CustomDiv = styled.div`
  align-content: center;
  display: grid;
  ${device.laptop} {
  }
`;

const LogosDiv = styled.div`
  margin: 0 auto;
  padding-bottom: 25px;
  ${device.laptop} {
  }
`;

export default Footer;
