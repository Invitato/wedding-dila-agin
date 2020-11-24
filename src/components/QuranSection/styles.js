import { css } from '@emotion/core';
import Background from './assets/bg-flower.jpg';

export const styWrapper = css`
  background-image: url(${Background});
  background-size: cover;
  background-position: bottom;
  width: 100%;
  min-height: 70vh;

  .sub-title {
    color: var(--font-black-ui);
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 20px;
    font-family: var(--font-family-content);
  }

  .quran {
    margin: 32px 0;
    font-size: 1.3em;
  }

  p {
    font-size: 16px;
    margin-top: 16px;
  }

  @media screen and (max-width: 500px) {
    .sub-title {
      font-size: 18px;
      margin: 0 0 8px 0;
    }

    p {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 14px;
    }
  }
`;
