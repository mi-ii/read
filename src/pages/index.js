import React from 'react';
import { css } from 'astroturf';

import Layout from '../components/layout';
import SEO from '../components/seo';

const styles = css`
  .text {
    color: red;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p className={styles.text}>WHOA</p>
  </Layout>
);

export default IndexPage;
