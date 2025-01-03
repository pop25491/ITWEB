import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const toggleHighlight = () => {
    setIsHighlighted(!isHighlighted);
  };

  return (
    <header>
      <h1>สาขา เทคโนโลยีสารสนเทศ</h1>
      <h1>วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่</h1>
    </header>
  );
}

export default Header;