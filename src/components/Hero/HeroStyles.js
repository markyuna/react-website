import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const HeroSection = styled.section`
	height: 60vh;
  background: linear-gradient(-60deg, #fa7c30 30%, rgba(0, 0, 0, 0) 40%), url('https://res.cloudinary.com/dxrttyi2g/image/upload/v1683904748/IMG_6360_nbzn1d.jpg');
	background-position: center;
	background-size: cover;
	padding-top: clamp(50px, 25vh, 220px);
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);

`;

export const HeroVideo = styled.video`
	object-fit: cover;
	width: 100%;
	height: 70%;
  top: 0;
	position: absolute;
	z-index: -1;
  opacity: 0.8;
`;

export const HeroText = styled.p`
	margin-bottom: 35px;
	font-size: clamp(1.5rem, 1.5vw, 1.3rem);
	line-height: 24px;
	text-align: center;
	letter-spacing: 2px;
	color: black;
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;
`;

export const HeroButton = styled(Button)`
	color: black;

	&:before {
		background: #fff;
		height: 500%;
	}

	&:hover:before {
		height: 0%;
	}

	&:hover {
		color: white;
	}
`;
