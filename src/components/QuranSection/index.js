import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import LazyLoad from 'react-lazyload';

import { THE_BRIDE, CUSTOM_ANIMATION } from '@/constants';
import IMG_DIVIDER from './assets/divider.png';
import { styWrapper, styDivider } from './styles';

function HelloSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="id-hello-section" css={styWrapper}>
        <div className="container">
          <LazyLoad height={200} offset={-200}>
            <div className="row" style={{ paddingTop: '2em' }}>
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                {/* <h2 className="main-font">Assalamualaikum Wr. Wb</h2> */}
                <h3
                  className="sub-title hs"
                  style={{ animation: CUSTOM_ANIMATION }}
                >{`The Wedding of ${THE_BRIDE}`}</h3>
                <p className="info quran" style={{ animation: CUSTOM_ANIMATION }}>
                  وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ
                  بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
                </p>
                <p className="info" style={{ animation: CUSTOM_ANIMATION }}>
                  "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu
                  sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih
                  dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang
                  berfikir. (Qs. Ar-Ruum: 21)
                </p>
              </div>
            </div>
          </LazyLoad>
        </div>
      </div>

      <LazyLoad height={200} offset={-100}>
        <div css={styDivider} style={{ animation: CUSTOM_ANIMATION }}>
          <img src={IMG_DIVIDER} alt="divider" />
        </div>
      </LazyLoad>
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
