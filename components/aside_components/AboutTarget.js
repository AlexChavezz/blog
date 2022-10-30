import Image from 'next/future/image';
import userPhoto from '../../assets/userPhoto.png';
import { SocialNetworks } from '../SocialNetworks';
import styles from '../../styles/AboutTargetComponent.module.css';

export const AboutTarget = () => {
    return (
        <section className={styles.aboutTarget}>
            <Image
                src={userPhoto} className={styles.aboutTargetImage}
                alt="alexis chavez"
                width={120}
                height={120}
            />
            <span className={styles.aboutTargetName}>Alexis Chavez</span>
            <p className={styles.aboutTargetDescription}>
                Hola mi nombre es Alexis un desarrollador apasionado por la tecnologia y desarrollo de
                softaware me gusta mucho aprender y compartir mis concociemientos con los demas.
                ¿Conectamos?
            </p>
          <SocialNetworks />
        </section>
    );
}