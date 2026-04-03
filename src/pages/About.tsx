import Section from '@/components/Section';
import styles from './Page.module.css';

export default function About() {
  return (
    <>
      <div className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.title}>Rólunk</h1>
          <p className={styles.subtitle}>
            Az Optimus Accounting Kft. célja, hogy könyvelő irodaként megbízható, naprakész partnere legyen
            vállalkozásának Kecskeméten és környékén.
          </p>
        </div>
      </div>
      <Section title="Történetünk" intro="Helyőrző szöveg — cserélje le a valós bemutatkozással, alapítás évével és küldetésnyilatkozattal.">
        <div className={styles.prose}>
          <p>
            Csapatunk a pénzügyi szektorban szerzett tapasztalattal segíti ügyfeleit a mindennapi könyvelési feladatoktól
            az adó- és bérügyekig. Személyre szabott megközelítéssel dolgozunk egyéni vállalkozókkal és társaságokkal
            egyaránt.
          </p>
          <p>
            <strong>Figyelem:</strong> ez az oldal minta; a végleges tartalmat és jogi megfelelést a megrendelő jóváhagyásával
            kell publikálni.
          </p>
        </div>
      </Section>
      <Section variant="muted" title="Értékeink">
        <ul className={styles.list}>
          <li>Pontosság és határidők betartása</li>
          <li>Átlátható kommunikáció</li>
          <li>Adatvédelem és diszkréció</li>
        </ul>
      </Section>
    </>
  );
}
