import { useContext } from "react";
import { ChallengesContext } from "../contexts/challengeContext";
import styles from "../styles/components/completedChallenges.module.css";



export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
