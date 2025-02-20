import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>Chào mừng đến với Website của chúng tôi</h1>
      <nav>
        <ul>
          <li><a href="/">Trang chủ</a></li>
          <li><a href="/about">Giới thiệu</a></li>
          <li><a href="/services">Dịch vụ</a></li>
          <li><a href="/contact">Liên hệ</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
