import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
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

export const footerData = [
	{
		title: 'Main',
		links: ['Blog', 'FAQs', 'Support', 'About us'],
	},
	{
		title: 'Product',
		links: ['Login', 'Personal', 'Business', 'Team'],
	},
	{
		title: 'Press',
		links: ['Logos', 'Events', 'Stories', 'Office'],
	},
	{
		title: 'Legal',
		links: ['GDPR', 'Privacy Policy', 'Terms of Service', 'Disclaimer'],
	},
];
