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
    contact: 'Kontakt',
    downloadResume: 'Ladda ned CV',
    name: 'Namn',
    age: 'Ålder',
    email: 'Email',
    occupation: 'Sysselsättning',
    other: 'Annat',
    version_control: 'Versionshantering',
    db_management: 'Databashantering',
    unix_based_systems: 'Unixbaserade system'
  },
  eng: {
    about: 'About',
    skills: 'Skills',
    timeline: 'Timeline',
    contact: 'Contact',
    downloadResume: 'Download résumé',
    name: 'Name',
    age: 'Age',
    email: 'Email',
    occupation: 'Occupaction',
    other: 'Other',
    version_control: 'Version control',
    db_management: 'Database management',
    unix_based_systems: 'Unix based systems'
  }
};