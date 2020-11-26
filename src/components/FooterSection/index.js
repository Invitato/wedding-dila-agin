import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import LazyLoad from 'react-lazyload';
import { animations } from 'react-animation';
// import { styWrapper } from '../HelloSection/styles';

import { THE_BRIDE, SOUND_BY, SOUND_URL, CUSTOM_ANIMATION, LAZY_LOAD } from '@/constants';
import CountContainer from '../WelcomeSection/CountContainer';
import { styWrapper } from './styles';

const ANIMATION = animations || {};

function FooterSection({ isInvitation }) {
  return (
    <div css={styWrapper}>
      <div id="live-wedding-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <LazyLoad {...LAZY_LOAD}>
                <h3 style={{ marginTop: '2em', color: '#c18893' }}>{`Live Wedding ${THE_BRIDE}`}</h3>
              </LazyLoad>

              <LazyLoad height={200} offset={-10}>
                <div style={{ animation: CUSTOM_ANIMATION }}>
                  <CountContainer />
                </div>
                <div style={{ animation: CUSTOM_ANIMATION }}>
                  <iframe
                    title="Live Wedding"
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/XMk-W_Jg2Pc"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <p className="info">Live: 08:00 WIB | Sabtu, 28 November 2020</p>
                </div>
              </LazyLoad>
            </div>
          </div>
        </div>
      </div>

      <div id="fh5co-couple">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <LazyLoad {...LAZY_LOAD}>
                <p className="info" style={{ animation: ANIMATION.fadeInUp }}>
                  Sehubungan dengan kondisi saat ini mengenai pembatasan jumlah tamu undangan, <br />
                  Tanpa mengurangi rasa hormat, kami mohon segala doa dan restu dari bapak/ ibu/saudara/i, dan kami
                  berharap tetap dapat menjalin tali silahturahmi melalui media online.
                </p>
              </LazyLoad>

              <LazyLoad {...LAZY_LOAD}>
                <h2 className="main-font pr-co">Terima Kasih</h2>
              </LazyLoad>
            </div>
          </div>
        </div>
      </div>
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <LazyLoad {...LAZY_LOAD}>
              <div className="col-md-12 text-center" style={{ animation: ANIMATION.fadeInUp }}>
                <p>
                  <small className="block">&copy; 2020 {THE_BRIDE}. All Rights Reserved.</small>
                  <small className="block">
                    Song by{' '}
                    <a href={SOUND_URL} target="_blank" rel="noreferrer" className="pr-co">
                      {SOUND_BY}
                    </a>
                  </small>
                  <small className="block">
                    Create with Love by{' '}
                    <a href="http://inviato.net" target="_blank" rel="noreferrer" className="pr-co">
                      Invitato.net
                    </a>
                  </small>
                </p>
              </div>
            </LazyLoad>
          </div>
        </div>
      </footer>
    </div>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
