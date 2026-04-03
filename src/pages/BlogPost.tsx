import { Link, useParams } from 'react-router-dom';
import { getPostBySlug } from '@/lib/blog';
import NotFound from '@/pages/NotFound';
import styles from './BlogPost.module.css';
import pageStyles from './Page.module.css';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <>
      <div className={pageStyles.pageHeader}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Útvonal">
            <Link to="/blog">Blog</Link>
            <span aria-hidden="true"> / </span>
            <span className={styles.current}>{post.title}</span>
          </nav>
          <h1 className={pageStyles.title}>{post.title}</h1>
          <p className={styles.meta}>
            <time dateTime={post.date}>{post.date}</time>
          </p>
        </div>
      </div>
      <article className={styles.article}>
        <div className="container">
          <div className={styles.prose}>
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <p className={styles.back}>
            <Link to="/blog">← Vissza a bloghoz</Link>
          </p>
        </div>
      </article>
    </>
  );
}
