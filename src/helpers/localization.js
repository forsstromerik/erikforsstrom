import sweSvg from '../images/sweden.svg';
import engSvg from '../images/united-kingdom.svg';

export const LANGUAGES = {
  SWEDISH: {
    image: sweSvg,
    key: 'swe',
    locale: 'sv'
  },
  ENGLISH: {
    image: engSvg,
    key: 'eng',
    locale: 'en-US'
  }
}

export const translate = (language, key) => {
  return translations[language][key];
}

const translations = {
  swe: {
    about: 'Om',
    skills: 'Kompetens',
    timeline: 'Tidslinje',
    contact: 'Kontakt'
  },
  eng: {
    about: 'About',
    skills: 'Skills',
    timeline: 'Timeline',
    contact: 'Contact'
  }
};