import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';

import Favicon from './assets/invitato-logo.png';
import { THE_BRIDE } from '@/constants';

import '@assets/css/icomoon.css';
import '@assets/css/bootstrap.css';
import '@assets/css/style.css';
// custom styles
import './assets/custom-styles.css';

const URL = 'https://invitato.com';
const TITLE = `The Wedding of ${THE_BRIDE}`;
const IMAGE_URL = `https://user-images.githubusercontent.com/10141928/100097262-0be9ba00-2e8f-11eb-97d4-7da7ab7a0d50.jpg`;
const META_DESCRIPTION = `Dengan memohon Rahmat dan Ridho Illahi, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan kelancaran dan keberkahan. - ${THE_BRIDE}`;

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>{TITLE}</title>

        {/* Favicon */}
        <link rel="icon" type="image/png" href={Favicon} />

        {/* font and SEO tags */}
        <meta property="og:title" content={TITLE} />
        <meta property="og:image" content={IMAGE_URL} />
        <meta property="og:url" content={URL} />
        <meta property="og:site_name" content={TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={IMAGE_URL} />
        <meta name="twitter:url" content={URL} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@idindrakusuma" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
