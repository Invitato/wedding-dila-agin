import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import LazyLoad from 'react-lazyload';
import { animations } from 'react-animation';

import { LAZY_LOAD, CUSTOM_ANIMATION } from '@/constants';
import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper} className="fh5co-section-gray">
        <div className="container">
          <LazyLoad {...LAZY_LOAD}>
            <div className="row" style={{ animation: animations.fadeInUp }}>
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h3 className="sub-title hs">BISMILLAHIRAHMANIRRAHIIM</h3>
                <h3 className="sub-title hs">Assalamualaikum Warahmatuallahi Wabarakatuh</h3>
                <p className="info">
                  Dengan memohon Rahmat dan <br />
                  Ridho Allah Subhanahu Wa Ta'ala
                  <br />
                  Kami bermaksud menyelenggarakan <br />
                  pernikahan putra-putri kami
                </p>
              </div>
            </div>
          </LazyLoad>
          <LazyLoad {...LAZY_LOAD}>
            <div className="row" style={{ animation: CUSTOM_ANIMATION }}>
              <div className="col-md-8 col-md-offset-2 text-center">
                <h3 className="">Isnaeni Rais Farahdila</h3>
                <p className="parent">
                  Putri dari Bapak Slamet Isyono <br /> & Ibu Suratmi
                </p>
              </div>
            </div>
          </LazyLoad>
          <LazyLoad {...LAZY_LOAD}>
            <div style={{ animation: CUSTOM_ANIMATION }}>
              <h1 style={{ textAlign: 'center', fontSize: '3em' }}>{`&`}</h1>
            </div>
            {/* GROOM */}
            <div className="row" style={{ animation: CUSTOM_ANIMATION }}>
              <div className="col-md-8 col-md-offset-2 text-center">
                <h3 className="">Agin Setiawan</h3>
                <p className="parent">
                  Putra dari Bapak Agus Setiyono <br />& Ibu Indah Mulyanti
                </p>
              </div>
            </div>
          </LazyLoad>
        </div>
      </div>
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
