import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [  {    name: 'Facebook',    icon: iconStyle(FaFacebook),    url: 'https://fr-fr.facebook.com/',  },  {    name: 'Instagram',    icon: iconStyle(FaInstagram),    url: 'https://www.instagram.com/markpapermache/',  },  {    name: 'LinkedIn',    icon: iconStyle(FaLinkedin),    url: 'https://www.linkedin.com/in/marcos-suarez22/',  },];

export const footerData = [  {    title: 'Main',    links: [      { name: 'Blog', to: '/' },      { name: 'FAQs', to: '/' },      { name: 'Support', to: '/' },      { name: 'About us', to: '/' }    ]
  },
  {
    title: 'Product',
    links: [
      { name: 'Login', to: '/signup' },
      { name: 'Personal', to: '/' },
      { name: 'Galerie', to: '/galerie' },
      { name: 'Team', to: '/' }
    ]
  },
  {
    title: 'Press',
    links: [
      { name: 'Logos', to: '/' },
      { name: 'Events', to: '/' },
      { name: 'Stories', to: '/' },
      { name: 'Office', to: '/' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'GDPR', to: '/' },
      { name: 'Privacy Policy', to: '/' },
      { name: 'Terms of Service', to: '/' },
      { name: 'Disclaimer', to: '/' }
    ]
  }
];
