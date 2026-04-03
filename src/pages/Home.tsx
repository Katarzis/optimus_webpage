import { Link } from 'react-router-dom';
import Section from '@/components/Section';
import Card from '@/components/ui/Card';
import { blogPosts } from '@/lib/blog';
import styles from './Home.module.css';

const services = [
  {
    title: 'Könyvelés',
    text: 'Teljes körű könyvelés egyéni vállalkozóknak és társaságoknak. Határidők, bevallások, mérlegképes könyvelés igény szerint.',
  },
  {
    title: 'Adótanácsadás',
    text: 'Adóoptimalizálás, tervezés és jogszabálykövetés — hogy döntései megfeleljenek a hatályos szabályoknak.',
  },
  {
    title: 'Bérszámfejtés',
    text: 'Bérek, járulékok, bejelentések és igazolások kezelése megbízhatóan, diszkréten.',
  },
  {
    title: 'Vállalkozói könyvelő',
    text: 'Személyre szabott együttműködés induló és növekvő vállalkozások számára Kecskemét és környékén.',
  },
];

export default function Home() {
  const preview = blogPosts.slice(0, 3);

  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className="container">
          <p className={styles.eyebrow}>Könyvelő iroda · Kecskemét</p>
          <h1 id="hero-title" className={styles.heroTitle}>
            Megbízható könyvelés és pénzügyi partnerünk
          </h1>
          <p className={styles.lead}>
            Az Optimus Accounting Kft. professzionális könyvelési, adó- és bérszámfejtési szolgáltatásokat nyújt —{' '}
            <strong>könyvelés Kecskemét</strong> és vonzáskörzetében.
          </p>
          <div className={styles.heroActions}>
            <Link to="/kapcsolat" className={styles.btnPrimary}>
              Kapcsolatfelvétel
            </Link>
            <Link to="/kapcsolat#idopont" className={styles.btnSecondary}>
              Időpontfoglalás
            </Link>
          </div>
        </div>
      </section>

      <Section
        id="szolgaltatasok"
        title="Szolgáltatások"
        intro="Komplex megoldások a mindennapi adminisztrációtól a stratégiai tanácsadásig. Kulcsszavak: adótanácsadás, bérszámfejtés, vállalkozói könyvelő."
      >
        <div className={styles.grid}>
          {services.map((s) => (
            <Card key={s.title} title={s.title}>
              <p>{s.text}</p>
            </Card>
          ))}
        </div>
        <p className={styles.more}>
          <Link to="/szolgaltatasok">Részletes szolgáltatáslista →</Link>
        </p>
      </Section>

      <Section variant="muted" title="Miért minket válasszon?" intro="Rövid, üzleti hangvétel — a végleges szöveget a megrendelővel egyeztetve töltjük ki.">
        <ul className={styles.trust}>
          <li>Gyors válaszidő és átlátható kommunikáció</li>
          <li>Tapasztalt csapat a pénzügyi szektorban</li>
          <li>GDPR-kompatibilis adatkezelés és biztonságos folyamatok</li>
        </ul>
      </Section>

      <Section title="Legfrissebb a blogról" intro="Hasznos cikkek könyvelésről és adózásról. (Minta bejegyzések — később CMS.)">
        <ul className={styles.blogList}>
          {preview.map((post) => (
            <li key={post.slug}>
              <article className={styles.blogCard}>
                <time dateTime={post.date} className={styles.date}>
                  {post.date}
                </time>
                <h3 className={styles.blogTitle}>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
              </article>
            </li>
          ))}
        </ul>
        <p className={styles.more}>
          <Link to="/blog">Összes cikk →</Link>
        </p>
      </Section>

      <Section variant="muted" title="Készen áll az együttműködésre?">
        <p className={styles.ctaText}>Kérjen visszahívást vagy foglaljon időpontot online.</p>
        <div className={styles.ctaRow}>
          <Link to="/kapcsolat" className={styles.ctaBtn}>
            Üzenet küldése
          </Link>
        </div>
      </Section>
    </>
  );
}
