import React from 'react';
import { Header } from 'components/theme';
import { Container } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import lauthieb from 'assets/illustrations/lauthieb.png';
import { Wrapper, IntroWrapper, Details, Thumbnail, Picture } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <Picture>
          <img src={lauthieb} alt="Laurent Thiebault" />
        </Picture>
        <h1>Hello! 👋</h1>
        <h4>
          I’m Laurent, Frontend Engineer at{' '}
          <a
            href="https://developers.decathlon.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Decathlon Developers"
          >
            Decathlon
          </a>
          , Founder of{' '}
          <a
            href="https://www.meetup.com/FrontendBeers"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Frontend Beers"
          >
            Frontend Beers
          </a>{' '}
          &{' '}
          <a href="https://youtu.be/AYmeUnBfWrc" target="_blank" rel="noopener noreferrer" aria-label="Musician">
            Musician 🎵
          </a>
        </h4>
      </Details>
      <Thumbnail>
        <img src={dev} alt="Developer" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
