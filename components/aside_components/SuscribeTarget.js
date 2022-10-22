import styles from '../../styles/SuscribeTargetComponent.module.css';

export const SuscribeTarget = () => {
    return (
      <section className={styles.SuscribeContainer}>
        <article>
            <h3 className={styles.SuscribeTitle}>SUSCRIBETE</h3>
            <p className={styles.SuscribeText}>To recive via email last posts launched.</p>
        </article>
        <form className={styles.SuscribeForm}>
            <label htmlFor="name" className={styles.SuscribeLabel}>* Name</label>
            <input type="text" name="name" className={styles.SuscribeInput}/>
            <label htmlFor="email" className={styles.SuscribeLabel}>* Email</label>
            <input type="email" name="email" className={styles.SuscribeInput}/>
            <input type="submit" value="Suscribe Me" className={styles.SuscribeButton}/>
        </form>
      </section>
    );
  }