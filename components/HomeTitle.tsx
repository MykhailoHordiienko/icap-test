'use client';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

type Props = {};

function HomeTitle({}: Props) {
  const [text] = useTypewriter({
    words: [
      'This is awesome app for ICAP...',
      'They asked me to use animation :)',
      '<ReactLovesToCodeMore/>',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <h1 className="text-2xl lg:text-6xl font-semibold px-10">
      <span className="mr-3 break-all text-slate-400 opacity-80">{text}</span>
      <Cursor cursorColor="#eab308" />
    </h1>
  );
}

export default HomeTitle;
