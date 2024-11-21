import Link from 'next/link';
import React from 'react';
// import Hero from './Hero/page';
import HeroPage from './HeroPage/page';

function Home() {
  return (
    <div>
      <Link href='/hero'><HeroPage /></Link>
    </div>
  )
}

export default Home;