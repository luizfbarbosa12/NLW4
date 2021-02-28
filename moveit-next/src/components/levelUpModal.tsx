import { useContext } from "react";
import { ChallengesContext } from "../contexts/challengeContext";
import styles from "../styles/components/levelUpModal.module.css";

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabéns</strong>

        <p>Você alcançou um novo level.</p>
        <button onClick={closeLevelUpModal} type="button">
          X
        </button>
      </div>
    </div>
  );
}
