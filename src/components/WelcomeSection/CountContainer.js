import React from 'react';
import useDateCountdown from '@/hooks/useDateCountdown';
import CountItem from './CountItem';
import { styMargin } from './styles';

function CountContainer() {
  const { days, hours, minutes, seconds, timeHasRunOut, isEventOver } = useDateCountdown();
  const finalText = isEventOver ? 'SUDAH' : 'SEDANG';

  if (timeHasRunOut) return null;

  return (
    <div className="col-md-12" css={styMargin('0 0 16px 0')}>
      <CountItem text="Hari" number={days} />
      <CountItem text="Jam" number={hours} />
      <CountItem text="Menit" number={minutes} />
      <CountItem text="Detik" number={seconds} />
    </div>
  );
}

export default CountContainer;
