import React, { useState } from 'react';
import { object, string, bool, func } from 'prop-types';
import { animateScroll } from 'react-scroll';
import { animations } from 'react-animation';

import WeddingImg from '@assets/images/wedding-logo.png';
import ScrollToDown from './ScrollToDown';
import { styWrapper, styHero, styBackground } from './styles';
import { THE_BRIDE } from '@/constants';

const DELAY_TIME = 1500;
const ANIMATION = animations || {};

function WelcomeSection({ location, guestName, isInvitation, isAnonymGuest, codeLink, onClickDetail }) {
  const [loading, setLoading] = useState(false);
  const [alreadyDownloadData, setAlreadyDownloadData] = useState(false);

  const handleScrollTo = () => {
    /** scroll into detail view */
    const element = document.getElementById('id-hello-section').offsetTop;
    animateScroll.scrollTo(element);
  };

  const handleShowDetail = () => {
    if (loading) return undefined;

    try {
      const myAudio = document.getElementById('myAudio');
      myAudio.play();
    } catch {
      console.error('FAILED_TO_PLAY_MUSIC');
    }

    onClickDetail();

    if (!alreadyDownloadData) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setAlreadyDownloadData(true);
        handleScrollTo();
      }, DELAY_TIME);
    } else {
      handleScrollTo();
    }
  };

  return (
    <div css={styHero}>
      <header
        id="fh5co-header"
        role="banner"
        className="fh5co-cover"
        css={styBackground}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row" css={styWrapper}>
            <div className="col-md-8 col-md-offset-2 text-center" style={{ animation: ANIMATION.bounceIn }}>
              <img src={WeddingImg} alt="wedding-dinda-indra" />
              <h1 className="title">The Wedding of</h1>
              <div style={{ marginTop: '1em' }}>
                <h2 className="to-dearest-name">{THE_BRIDE}</h2>
              </div>
            </div>
          </div>
          <div className="row" style={{ animation: ANIMATION.fadeIn }}>
            <ScrollToDown loading={loading} onClick={handleShowDetail} />
          </div>
        </div>
      </header>
    </div>
  );
}

WelcomeSection.propTypes = {
  guestName: string.isRequired,
  isInvitation: bool.isRequired,
  isAnonymGuest: bool.isRequired,
  location: object.isRequired,
  codeLink: string,
  onClickDetail: func.isRequired,
};

WelcomeSection.defaultProps = {
  codeLink: '',
};

export default WelcomeSection;
