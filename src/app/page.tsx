import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Bienvenue</h1>
        <p className={styles.description}>
          Découvrez notre approche innovante pour votre réussite
        </p>
      </main>
    </div>
  );
}
