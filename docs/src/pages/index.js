import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
      <header className="homepage">
        <div className="container">
          <h1 className="hero__title">Elian Codes <span>Documentation</span></h1>
          <p className="hero__subtitle">The Open Documentation for all technologies related to the <a href="https://www.elian.codes" target="_blank">ElianCodes website</a></p>
        </div>
      </header>
    </>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="The Open Documentation website for all the technologies used in the ElianCodes website">
      <HomepageHeader />
    </Layout>
  );
}
