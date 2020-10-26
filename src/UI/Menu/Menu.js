import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">⚙️</span>
        Productivity
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">🧘</span>
        Meditation
        </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">🐼</span>
        Relax
        </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">🎙️</span>
        Podcast
        </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">📚</span>
        Audiobooks
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;