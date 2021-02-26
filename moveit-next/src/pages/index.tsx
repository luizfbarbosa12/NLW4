import React from "react";
import ExperienceBar from "../components/experienceBar";
import Head from 'next/head'
import { Profile } from "../components/profile";
import styles from '../styles/pages/home.module.css'
import { CompletedChallenges } from "../components/completedChallenges";
import { Countdown } from "../components/countDown";
import { ChallengeBox } from "../components/challengeBox";


export default function Home() {
  return (
    <div className={styles.container}> 
    <Head>
      <title>Início | move.it</title>
    </Head>
      
    <ExperienceBar/>
    <section>
      <div>
        <Profile/>
        <CompletedChallenges/>
        <Countdown/>
        
      </div>
      <div>
      <ChallengeBox/>
      </div>
    </section>
    </div>
    
  )
}
