import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import about from 'assets/illustrations/about.svg';
import { Wrapper, AboutWrapper, Details, Thumbnail } from './styles';

export const About = () => (
  <Wrapper id="about">
    <AboutWrapper as={Container}>
      <Thumbnail>
        <img src={about} alt="Developer" />
      </Thumbnail>
      <Details>
        <h1>Want to know more?</h1>
        <p>
          Currently Technical Leader at Decathlon, I am thirsty for learning and sharing! Indeed, passionate about IT, I
          like to keep abreast of new developments in the field, whether technical or leisure.
        </p>
        <Button as={AnchorLink} href="#contact">
          Contact me
        </Button>
      </Details>
    </AboutWrapper>
  </Wrapper>
);
