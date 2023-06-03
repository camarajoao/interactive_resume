import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';

import joao from '../public/images/profileJoaoCamara.png'
import tennis from '../public/images/tennis.jpg'
import run from '../public/images/run.png'
import fdu from '../public/images/fdu.png'
import murray from '../public/images/murray.png'
import brainstation from '../public/images/brainstation.png'
import vancouver from '../public/images/vancouver.jpg'
import experience from '../public/images/experience.jpg'
import skills from '../public/images/techstack.png'
import profile from '../public/images/profile.jpeg'
import DescriptionLeft from '../components/DescriptionLeft';
import DescriptionRight from '../components/DescriptionRight';
import Header from '../components/Header';
import TennisDescription from '../components/TennisDescription';
import CityDescription from '../components/CityDescription';
import MarathonDescription from '../components/MarathonDescription';

export default function Home() {

  const [theme, setTheme] = useState(null)
  useEffect(() => {
    // Perform localStorage action
    const localTheme = window.localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
    } else {
      setTheme('light')
    }
  }, []);

  const [sidebarLeft, setSidebarLeft] = useState(false);
  const showSidebarLeft = () => setSidebarLeft(true);
  const hideSidebarLeft = () => setSidebarLeft(false);
  const [sidebarRight, setSidebarRight] = useState(false);
  const showSidebarRight = () => setSidebarRight(true);
  const hideSidebarRight = () => setSidebarRight(false);

  const [sidebarCity, setSidebarCity] = useState(false);
  const showSidebarCity = () => setSidebarCity(true);
  const hideSidebarCity = () => setSidebarCity(false);

  const [sidebarTennis, setSidebarTennis] = useState(false);
  const showSidebarTennis = () => setSidebarTennis(true);
  const hideSidebarTennis = () => setSidebarTennis(false);

  const [sidebarMarathon, setSidebarMarathon] = useState(false);
  const showSidebarMarathon = () => setSidebarMarathon(true);
  const hideSidebarMarathon = () => setSidebarMarathon(false);

  return (
    <div className='container' data-theme={theme}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <DescriptionLeft sidebarLeft={sidebarLeft} />
        <DescriptionRight sidebarRight={sidebarRight} />
        <Image src={joao} className='joao' />
        <Image src={vancouver} className={styles.vancouver} onMouseEnter={showSidebarCity} onMouseLeave={hideSidebarCity} />
        <CityDescription sidebarCity={sidebarCity} />
        <Image src={tennis} className={styles.tennis} onMouseEnter={showSidebarTennis} onMouseLeave={hideSidebarTennis} />
        <TennisDescription sidebarTennis={sidebarTennis} />
        <Image src={run} className={styles.run} onMouseEnter={showSidebarMarathon} onMouseLeave={hideSidebarMarathon} />
        <MarathonDescription sidebarMarathon={sidebarMarathon} />
        <Image src={brainstation} className={styles.brainstation} onMouseEnter={showSidebarLeft} onMouseLeave={hideSidebarLeft} />
        <Image src={murray} className={styles.murray} onMouseEnter={showSidebarLeft} onMouseLeave={hideSidebarLeft} />
        <Image src={fdu} className={styles.fdu} onMouseEnter={showSidebarLeft} onMouseLeave={hideSidebarLeft} />
        <Image src={profile} className={styles.placeholder3} onMouseEnter={showSidebarRight} onMouseLeave={hideSidebarRight} />
        <Image src={skills} className={styles.placeholder2} onMouseEnter={showSidebarRight} onMouseLeave={hideSidebarRight} />
        <Image src={experience} className={styles.placeholder1} onMouseEnter={showSidebarRight} onMouseLeave={hideSidebarRight} />
        <Image src={profile} className={styles.profile} onMouseEnter={showSidebarRight} onMouseLeave={hideSidebarRight} />
        <Image src={skills} className={styles.skills} onMouseEnter={showSidebarRight} onMouseLeave={hideSidebarRight} />
        <Image src={experience} className={styles.experience} onMouseEnter={showSidebarRight} onMouseLeave={hideSidebarRight} />
      </main>
    </div>
  )
}
