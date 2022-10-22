import Image from 'next/future/image';
import styles from '../../styles/AboutTargetComponent.module.css';
import userPhoto from '../../assets/userPhoto.png';
import linkedinImage from '../../assets/linkedin.svg';
import mailImage from '../../assets/gmail.svg';

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
            <div>
                <a href="">
                    <Image
                        src={mailImage}
                        className={styles.aboutTargetSocialImage} 
                        alt="gmail"
                        width={25}
                        height={25}
                    />
                </a>
                <a href="https://www.linkedin.com/in/alexiscontreraschavez/" target="__blank">
                    <Image
                        src={linkedinImage}
                        className={styles.aboutTargetSocialImage} alt="linkedin"
                        width={25}
                        height={25}
                    />
                </a>
            </div>
        </section>
    );
}