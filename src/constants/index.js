import { easings } from 'react-animation';

/**
 * Link
 */
export const GOOGLE_CALENDAR_LINK = `https://calendar.google.com/calendar/event?action=TEMPLATE&dates=20201003T040000Z%2F20201003T060000Z&text=Dinda+%26+Indra+Wedding&details=Dinda+%26+Indra+Wedding`;
export const GOOGLE_MAPS_LINK = `https://g.page/HARRISHotelSentralandSemarang?share`;

/**
 * Wedding time
 */
export const EPOCH_START_EVENT = 1606525200;
export const EPOCH_END_EVENT = 1606546800;
export const UTC_WEDDING_TIME = '2020-10-03:04:00:00Z';

export const THE_BRIDE = 'Dila & Agin';
export const SOUND_BY = `Elvis Presley - Can't Help Falling In Love With You (Saxophone Cover by Alexandra)`;
export const SOUND_URL = 'https://www.youtube.com/watch?v=llcQu-XB6oE&feature=youtu.be&ab_channel=AlexandraIlieva';

/**
 * @string
 * constants for custom animation
 */
const FALLBACK_EASING = easings || {};
export const CUSTOM_ANIMATION = `pop-in 1.5s ${FALLBACK_EASING.easeOutBack} forwards`;
export const LAZY_LOAD = {
  height: 200,
  offset: -150,
};
