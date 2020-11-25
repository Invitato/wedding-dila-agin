import React from 'react';
import { bool } from 'prop-types';
import { easings } from 'react-animation';
import LazyLoad from 'react-lazyload';

import WeddingInfoBox from './WeddingInfoBox';
import { styWrapper } from './styles';

const TIME = 'Sabtu, 28 November 2020';
const LOCATION = `PO Hotel Semarang, Semarang`;

const CUSTOM_ANIMATION = `pop-in 500ms ${easings.easeOutBack} forwards`;

function WeddingSection({ isInvitation }) {
  return (
    <LazyLoad height={300} offset={-100}>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading" style={{ animation: CUSTOM_ANIMATION }}>
              <h2 className="main-font main-font__wedding">Akad Nikah dan Resepsi Pernikahan</h2>
              <span className="sub-title sub-title__wedding">Insha Allah akan diselenggarakan pada:</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1" style={{ animation: CUSTOM_ANIMATION }}>
              <WeddingInfoBox title="Akad Nikah" time="08:00 WIB" date={TIME} description={LOCATION} />
              <WeddingInfoBox title="Resepsi Pernikahan" time="11.00 - 14.00" date={TIME} description={LOCATION} />
            </div>
          </div>
        </div>
      </div>
    </LazyLoad>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
