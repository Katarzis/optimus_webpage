import { Link } from 'react-router-dom';
import Section from '@/components/Section';
import { blogPosts } from '@/lib/blog';
import styles from './Blog.module.css';
import pageStyles from './Page.module.css';

export default function BlogList() {
  return (
    <>
      <div className={pageStyles.pageHeader}>
        <div className="container">
          <h1 className={pageStyles.title}>Blog</h1>
          <p className={pageStyles.subtitle}>
            Hírek, adó- és könyvelési témák. A bejegyzések jelenleg statikus minták — integrálhatók headless CMS-sel.
          </p>
        </div>
      </div>
      <Section>
        <ul className={styles.list}>
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <article className={styles.item}>
                <time dateTime={post.date} className={styles.time}>
                  {post.date}
                </time>
                <h2 className={styles.postTitle}>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className={styles.readMore}>
                  Tovább olvasom
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
