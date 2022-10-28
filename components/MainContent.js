import styles from '../styles/MainContent.module.css';
import { AboutTarget } from './aside_components/AboutTarget';
import { SuscribeTarget } from './aside_components/SuscribeTarget';
import { CategoriesTarget } from './aside_components/CategoriesTarget';

export function MainContent({ children, handleSuscribe }) {
  return (
    <main className={styles.mainContainer}>
      {children}
      <aside className={styles.asideSection}>
        <AboutTarget />
        <SuscribeTarget handleSuscribe={handleSuscribe}/>
        <CategoriesTarget />
      </aside>
    </main>
  );
}
