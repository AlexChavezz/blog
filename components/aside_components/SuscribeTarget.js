import { useForm } from '../../hooks/useForm';
import styles from '../../styles/SuscribeTargetComponent.module.css';


export const SuscribeTarget = ({handleSuscribe}) => {
  const [values, handleInputChange, reset] = useForm({
    name: '',
    email: '',
  });
  const sendFollower = (e) => {
    e.preventDefault();
    window.fetch('http://localhost:3000/api/home', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: values.name, email: values.email }),
    })
      .then((response) => response.json())
      .then(res => {
        handleSuscribe();
      })
      .catch(console.log)
    reset();
  }

  return (
    <section className={styles.SuscribeContainer}>
      <article>
        <h3 className={styles.SuscribeTitle}>SUSCRIBETE</h3>
        <p className={styles.SuscribeText}>To recive via email last posts launched.</p>
      </article>
      <form
        className={styles.SuscribeForm}
        onSubmit={sendFollower}
      >
        <label htmlFor="name" className={styles.SuscribeLabel}>* Name</label>
        <input
          type="text"
          name="name"
          className={styles.SuscribeInput}
          value={values.name}
          onChange={handleInputChange}
        />
        <label htmlFor="email" className={styles.SuscribeLabel}>* Email</label>
        <input
          type="email"
          name="email"
          className={styles.SuscribeInput}
          value={values.email}
          onChange={handleInputChange}
        />
        <input type="submit" value="Suscribe Me" className={styles.SuscribeButton} disabled/>
      </form>
    </section>
  );
}