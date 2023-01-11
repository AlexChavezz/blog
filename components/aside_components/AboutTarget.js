import Image from 'next/future/image';
import { SocialNetworks } from '../SocialNetworks';
import styles from '../../styles/AboutTargetComponent.module.css';

export const AboutTarget = () => {
    return (
        <section className={styles.aboutTarget}>
            <Image
                src='alexis.png' className={styles.aboutTargetImage}
                alt="alexis chavez"
                style={{borderRadius:'50%'}}
                width={120}
                height={120}
            />
            <span className={styles.aboutTargetName}>Alexis Chavez</span>
            <p className={styles.aboutTargetDescription}>
                Hola mi nombre es Alexis un desarrollador apasionado por la tecnología y desarrollo de
                software me gusta mucho aprender y compartir mis conocimientos con los demás.
                ¿Conectamos?
            </p>
          <SocialNetworks />
        </section>
    );
}