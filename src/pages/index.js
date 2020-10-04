import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, About, Contact, Projects, Posts } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Posts />
    <Projects />
    <About />
    <Contact />
  </Layout>
);
