import Section from '@/components/Section';
import Card from '@/components/ui/Card';
import styles from './Page.module.css';

const items = [
  {
    title: 'Könyvelés',
    body: (
      <>
        <p>Főkönyv, naplófőkönyv, analitika, éves zárás, beszámolók. Igény szerint mérlegképes könyvelés.</p>
        <p>
          <strong>SEO:</strong> könyvelés Kecskemét, könyvelő iroda — a publikus szöveget kulcsszavakra optimalizálja a
          tartalomszerkesztő.
        </p>
      </>
    ),
  },
  {
    title: 'Adótanácsadás',
    body: <p>Adózási kérdések, bevallások előkészítése, hatósági kapcsolattartás támogatása szakmai egyeztetés alapján.</p>,
  },
  {
    title: 'Bérszámfejtés',
    body: <p>Bérjegyzék, járulékok, bejelentések, szabadságok és igazolások kezelése.</p>,
  },
  {
    title: 'Vállalkozói és KKV tanácsadás',
    body: <p>Induló vállalkozások adminisztrációs és könyvelési rendszerének kialakítása, folyamatos konzultáció.</p>,
  },
];

export default function Services() {
  return (
    <>
      <div className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.title}>Szolgáltatások</h1>
          <p className={styles.subtitle}>
            Teljes körű könyvelési és kapcsolódó szolgáltatások — részletek és díjak egyéni ajánlatban.
          </p>
        </div>
      </div>
      <Section intro="Az alábbi lista szerkezeti minta; a pontos szolgáltatási kör és felelősség határok szerződésben rögzítendők.">
        <div className={styles.cardGrid}>
          {items.map((item) => (
            <Card key={item.title} title={item.title}>
              {item.body}
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
