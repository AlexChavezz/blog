import linkedinImage from '../assets/linkedin.svg';
import mailImage from '../assets/gmail.svg';
import styles from '../styles/SocialNetworkComponent.module.css';
import Image from 'next/image';

export const SocialNetworks = () => {
    return (
        <div>
            <a href="mailto: alexiscontreras@ieee.org" className={styles.aboutTargetSocialImage}>
                <Image
                    src={mailImage}
                    alt="gmail"
                    width={25}
                    height={25}
                />
            </a>
            <a href="https://www.linkedin.com/in/alexiscontreraschavez/" target="__blank" className={styles.aboutTargetSocialImage}>
                <Image
                    src={linkedinImage}
                    alt="linkedin"
                    width={25}
                    height={25}
                />
            </a>
        </div>
    );
}