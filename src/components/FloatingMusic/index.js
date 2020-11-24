import React, { Fragment, useState } from 'react';
import IconMusic from './assets/m-1.png';
import IconMusicStop from './assets/m-2.png';
import MusicBacksound from './assets/sound.mp3';

import { styMusicFloating } from './styles';

function FloatingMusic() {
  const [play, setPlay] = useState(true);

  const toggleMusic = () => {
    const myAudio = document.getElementById('myAudio');
    /**
     * This function built-in with html5 function
     * doc: https://www.w3schools.com/tags/ref_av_dom.asp
     */
    if (play) {
      myAudio.pause();
    } else {
      myAudio.play();
    }

    setPlay(!play);
  };

  return (
    <Fragment>
      <div css={styMusicFloating}>
        <audio id="myAudio" loop className="hide">
          <source src={MusicBacksound} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div onClick={toggleMusic}>
          <img
            src={play ? IconMusic : IconMusicStop}
            className="icon-music"
            alt="icon-music"
            title={`${play ? 'Matikan Musik' : 'Putar Musik'}`}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default FloatingMusic;
