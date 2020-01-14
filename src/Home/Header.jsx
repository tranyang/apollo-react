import React from 'react';
import { Link } from 'bisheng/router';

export default function Header(props) {
  return (
    <header {...props} id="header">
      <Link id="logo">
        <img alt="logo" src="./Asset/logo.svg" />
        <img alt="Apollo" src="./Asset/apollo.svg" />
      </Link>
    </header>
  );
}
