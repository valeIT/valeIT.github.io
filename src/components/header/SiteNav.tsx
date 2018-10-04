// tslint:disable:no-http-string
import { Link } from 'gatsby';
import * as React from 'react';

import SiteNavLogo from './SiteNavLogo';
import styled, { css } from 'react-emotion';

interface SiteNavProps {
  isHome: boolean;
}

const HomeNavRaise = css`
  @media (min-width: 900px) {
    position: relative;
    top: -70px;
  }
`;

const SiteNavStyles = css`
  position: relative;
  z-index: 300;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow-y: hidden;
  height: 40px;
  font-size: 1.2rem;
`;

const SiteNavLeft = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  margin-right: 10px;
  padding-bottom: 80px;
  letter-spacing: 0.4px;
  white-space: nowrap;

  -ms-overflow-scrolling: touch;

  @media (max-width: 700px) {
    margin-right: 0;
    padding-left: 4vw;
  }
`;

const NavStyles = css`
  display: flex;
  margin: 0 0 0 -12px;
  padding: 0;
  list-style: none;

  li {
    display: block;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }

  li a {
    display: block;
    margin: 0;
    padding: 10px 12px;
    color: #fff;
    opacity: 0.8;
  }

  li a:hover {
    text-decoration: none;
    opacity: 1;
  }
`;

const SiteNavRight = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 40px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const SocialLinks = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

const SocialLink = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 10px;
  color: #fff;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }

  svg {
    height: 1.8rem;
    fill: #fff;
  }
`;

const SocialLinkFb = css`
  svg {
    height: 1.5rem;
  }
`;

// tslint:disable-next-line:no-unused
// TODO: use
export const SocialLinkWb = css`
  svg {
    height: 1.6rem;
  }

  svg path {
    stroke: #fff;
  }
`;

// tslint:disable-next-line:no-unused
// TODO: use
export const SocialLinkRss = css`
  svg {
    height: 1.9rem;
  }
`;

const SubscribeButton = styled.a`
  display: block;
  padding: 4px 10px;
  border: #fff 1px solid;
  color: #fff;
  font-size: 1.2rem;
  line-height: 1em;
  border-radius: 10px;
  opacity: 0.8;

  :hover {
    text-decoration: none;
    opacity: 1;
  }
`;

const SiteNav: React.SFC<SiteNavProps> = ({ isHome }) => (
  <nav className={`${isHome ? HomeNavRaise : ''} ${SiteNavStyles}`}>
    <SiteNavLeft>
      {!isHome && <SiteNavLogo />}
      <ul className={`${NavStyles}`} role="menu">
        {/* TODO: mark current nav item - add class nav-current */}
        <li role="menuitem">
          <Link to="/">Home</Link>
        </li>
        <li role="menuitem">
          <Link to="/about">About</Link>
        </li>
        <li role="menuitem">
          <Link to="/tags/getting-started/">Getting Started</Link>
        </li>
      </ul>
    </SiteNavLeft>
    <SiteNavRight>
      <SocialLinks>
        <a className={`${SocialLink} ${SocialLinkFb}`} href="https://www.facebook.com/ghost" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z" />
          </svg>
        </a>
        <a className={`${SocialLink}`} href="https://twitter.com/tryghost" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z" />
          </svg>
        </a>
      </SocialLinks>
      <SubscribeButton href="#subscribe">Subscribe</SubscribeButton>
    </SiteNavRight>
  </nav>
);

export default SiteNav;