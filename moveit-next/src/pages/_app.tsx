import '../styles/global.css'
import { challengesContext } from '../contexts/challengeContext'
import { ChallengeBox } from '../components/challengeBox'
import { ChallengesProvider } from '../../src/contexts/challengeContext'
import React from 'react'
import { CountdownProvider } from '../contexts/countdownContext'


function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      
        <Component {...pageProps} />
     
    </ChallengesProvider>
  ) 
}

export default MyApp
