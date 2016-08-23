import React from 'react';
import { baseFonts } from '../theme';

const wrapperStyle = {
  margin: '0 10px 10px',
};

const headingStyle = {
  ...baseFonts,
  background: '#40464e',
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  fontSize: '12px',
  fontWeight: 'normal',
  color: '#fff',
  border: '1px solid #40464e',
  textAlign: 'center',
  borderRadius: '2px',
  padding: '5px',
  cursor: 'pointer',
  margin: 0,
  float: 'none',
  overflow: 'hidden',
};

const shortcutIconStyle = {
  textTransform: 'uppercase',
  background: '#40464e',
  letterSpacing: '3.5px',
  fontSize: 12,
  fontWeight: 'normal',
  color: '#fff',
  border: '1px solid #40464e',
  textAlign: 'center',
  borderRadius: 2,
  padding: 5,
  cursor: 'pointer',
  margin: 0,
  display: 'inlineBlock',
  paddingLeft: 8,
  float: 'right',
  marginLeft: 5,
  outline: 0,
};

const linkStyle = {
  textDecoration: 'none',
};

const Header = ({ openShortcutsHelp, name, url }) => (
  <div style={wrapperStyle}>
    <button className="sb-shortcuts" style={shortcutIconStyle} onClick={openShortcutsHelp}>
      ⌘
    </button>
    <a style={linkStyle} href={url} target="_blank">
      <h3 className="sb-header" style={headingStyle}>{name}</h3>
    </a>
  </div>
);

Header.propTypes = {
  openShortcutsHelp: React.PropTypes.func,
  name: React.PropTypes.string,
  url: React.PropTypes.string,
};

export default Header;
