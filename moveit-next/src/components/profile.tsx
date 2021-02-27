import { useContext } from 'react'
import { ChallengesContext } from '../contexts/challengeContext'
import styles from '../styles/components/profile.module.css'

export function Profile() {
    const {level} = useContext(ChallengesContext)
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/luizfbarbosa12.png" alt="Diego Fernandes"/>
            <div>
                <strong>Diego Fernandes</strong>
                <p>
                    <img src="../public/icons/level.svg" alt="level"/>
                   Level {level}
                </p>
            </div>
        </div>
    )
}