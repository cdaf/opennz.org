import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.bannerContainer}>
        <img src="/img/my-banner.jpg" alt="Custom Banner" className={styles.customBanner} />
        <div className={styles.overlay}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <a className="button button--primary button--lg" href="/docs/intro">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout>
      <HomepageHeader />
      <main>
        {/* Add additional custom sections here */}
      </main>
    </Layout>
  );
}
