import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useAuth0 } from '@auth0/auth0-react';

const iconStyle = (Icon) => <Icon />;

const FooterData = () => {
  const { isAuthenticated } = useAuth0();

  const footerSocialData = [
    {
      name: 'Facebook',
      icon: iconStyle(FaFacebook),
      url: 'https://fr-fr.facebook.com/',
    },
    {
      name: 'Instagram',
      icon: iconStyle(FaInstagram),
      url: 'https://www.instagram.com/markpapermache/',
    },
    {
      name: 'LinkedIn',
      icon: iconStyle(FaLinkedin),
      url: 'https://www.linkedin.com/in/marcos-suarez22/',
    },
  ];

  const footerData = [
    {
      title: 'Main',
      links: [
        { name: 'Blog', to: '/' },
        { name: 'FAQs', to: '/' },
        { name: 'Support', to: '/' },
        { name: 'About us', to: '/' },
      ],
    },
    {
      title: 'Product',
      links: [
        isAuthenticated ? { name: 'Profile', to: '/profile' } : { name: 'Conexion', to: '/LoginButton' },
        { name: 'Atelier', to: '/' },
        { name: 'Galerie', to: '/galerie' },
        { name: 'Team', to: '/' },
      ],
    },
    {
      title: 'Press',
      links: [
        { name: 'Logos', to: '/' },
        { name: 'Events', to: '/' },
        { name: 'Stories', to: '/' },
        { name: 'Office', to: '/' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'GDPR', to: '/' },
        { name: 'Privacy Policy', to: '/' },
        { name: 'Terms of Service', to: '/' },
        { name: 'Disclaimer', to: '/' },
      ],
    },
  ];

  return { footerData, footerSocialData };
};

export default FooterData;
