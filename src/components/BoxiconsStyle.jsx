'use client';
import React, { useEffect, useState } from 'react';

export default function BoxiconsStyle() {
  const [media, setMedia] = useState('print');

  useEffect(() => {
    setMedia('all');
  }, []);

  return (
    <link
      rel="stylesheet"
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      media={media}
    />
  );
}
