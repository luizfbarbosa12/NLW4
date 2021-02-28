import React from "react";
import ExperienceBar from "../components/experienceBar";
import Head from "next/head";
import { Profile } from "../components/profile";
import styles from "../styles/pages/home.module.css";
import { CompletedChallenges } from "../components/completedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/challengeBox";
import { CountdownProvider } from "../contexts/countdownContext";
import { GetServerSideProps } from "next";
import { ChallengesProvider } from "../contexts/challengeContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
