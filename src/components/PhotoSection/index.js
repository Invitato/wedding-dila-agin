import React from 'react';
import ImageGallery from 'react-image-gallery';
import LazyLoad from 'react-lazyload';
import 'react-image-gallery/styles/css/image-gallery.css';
import { photos } from './photo-data';
import { THE_BRIDE, CUSTOM_ANIMATION } from '@/constants';

function PhotoSection() {
  return (
    <div id="fh5co-testimonial" style={{ backgroundColor: '#f9f3f5' }}>
      <div className="container">
        <div className="row">
          <LazyLoad height={200}>
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2 className="main-font pr-co" style={{ animation: CUSTOM_ANIMATION }}>
                  {THE_BRIDE}
                </h2>
              </div>
            </div>
          </LazyLoad>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <ImageGallery autoPlay infinite lazyLoad items={photos} showBullets={false} />;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoSection;
