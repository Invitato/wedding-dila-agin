import { css } from '@emotion/core';
import Background from './pink.jpg';

export const styWrapper = css`
  background-image: url(${Background});
  background-size: cover;
  background-position: bottom;
  width: 100%;
  min-height: 70vh;

  .sub-title {
    color: #828282;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 20px;
    color: var(--font-black-ui);
  }

  .parent {
    margin: -16px 16px 16px 16px;
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
      font-size: 16px;
    }
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 14px;
    }
  }
`;
