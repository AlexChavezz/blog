import { useState } from 'react';
import { URL_API } from '../../API/api';
import { useForm } from '../../hooks/useForm';
import styles from '../../styles/SuscribeTargetComponent.module.css';

const initialState = {
  status: false,
  message: null,
  type: ''
}

export const SuscribeTarget = () => {
  const [suscribeState, setSuscribeState] = useState(initialState);
  return (
    <section className={!suscribeState.status ? styles.SuscribeContainer:styles.SuscribeContainer}>
      {
        suscribeState.status ?
        (
          <p>{suscribeState.message}</p>
        )
        :
        (
          <ContentComponent setSuscribeAlert={setSuscribeState}/>
        )
      }

    </section>
  );
}

const ContentComponent = ({setSuscribeAlert}) => {
  const [values, handleInputChange, reset] = useForm({
    name: '',
    email: '',
  });
  const sendFollower = (e) => {
    e.preventDefault();
    window.fetch(`${URL_API}/suscribers/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        date: new Date().toISOString(),
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        // -> Do something to show the user that suscribe was successful
        if (response.ok) {
          console.log('Suscribe was successful');
          setSuscribeAlert({status: true, type:'Success', message: response.message});
        }
      })
      .catch((error) => {
        setSuscribeAlert({ status: true, message: error.message, type: 'Error'});
      })
    reset();
  }
  return (
    <>
      <article>
        <h3 className={styles.SuscribeTitle}>SUSCRIBETE</h3>
        <p className={styles.SuscribeText}>Para resivir por email las últimas noticias.</p>
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
        <input type="submit" value="Suscribe Me" className={styles.SuscribeButton} />
      </form>
    </>
  );
}