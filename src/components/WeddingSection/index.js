import React from 'react';
import { bool } from 'prop-types';
import LazyLoad from 'react-lazyload';

import WeddingInfoBox from './WeddingInfoBox';
import { styWrapper } from './styles';
import { CUSTOM_ANIMATION, LAZY_LOAD } from '@/constants';

const TIME = 'Sabtu, 28 November 2020';
const LOCATION = `PO Hotel, Semarang`;

function WeddingSection({ isInvitation }) {
  return (
    <div id="fh5co-event" css={styWrapper}>
      <div className="overlay" />
      <div className="container">
        <LazyLoad {...LAZY_LOAD}>
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading" style={{ animation: CUSTOM_ANIMATION }}>
              <h2 className="main-font main-font__wedding">
                Akad Nikah dan <br />
                Resepsi Pernikahan
              </h2>
              <span className="sub-title sub-title__wedding">Insha Allah akan diselenggarakan pada:</span>
            </div>
          </div>
        </LazyLoad>
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <LazyLoad {...LAZY_LOAD} offset={0}>
              <div style={{ animation: CUSTOM_ANIMATION }}>
                <WeddingInfoBox title="Akad Nikah" time="08:00 WIB" date={TIME} description={LOCATION} />
              </div>
            </LazyLoad>
            <LazyLoad {...LAZY_LOAD} offset={-200}>
              <div style={{ animation: CUSTOM_ANIMATION }}>
                <WeddingInfoBox title="Resepsi Pernikahan" time="11.00 - 14.00" date={TIME} description={LOCATION} />
              </div>
            </LazyLoad>
          </div>
        </div>
      </div>
    </div>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
