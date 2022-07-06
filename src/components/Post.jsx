import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.mainHeader}>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/luldsilva.png"
          />
          <div className={styles.authorInfo}>
            <strong>Lucas Li Silva</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="06 de Julho as 15:23" dateTime="2022-07-06 15:23:00">
          Publicado ha 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>{' '}
        </p>
      </div>
    </article>
  );
}
