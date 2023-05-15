import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const GalerieSection = styled.section`
	background-position: center;
	background-size: cover;
	padding-top: clamp(20px, 25vh, 220px);
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

export const GalerieVideo = styled.video`
	object-fit: cover;
	width: 100%;
	height: 50%;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
	top: 0;
	position: absolute;
	z-index: -1;
`;

export const GalerieText = styled.p`
	margin-bottom: 35px;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	line-height: 24px;
	text-align: center;
	letter-spacing: 2px;
	color: #fff;
`;

export const GalerieButton = styled(Button)`
	color: black;

	&:before {
		background: #fff;
		height: 300%;
	}

	&:hover:before {
		height: 10%;
	}

	&:hover {
		color: white;
	}
`;

export const GalerieCard = styled.div`
	&:hover {
		transform: scale(1.06);
		transition: all 0.3s ease-out;
	}
  @media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
	}

	img {
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

export const GalerieCardInfo = styled.div`
	background: #242424;
	box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
	width: 280px;
	text-decoration: none;
	border-radius: 4px;

	display: flex;
	flex-direction: column;
	padding: 24px;
	color: #fff;
	margin: auto;
	> button {
		margin-top: auto;

		&:hover {
			color: black;
			background: white;
			transition: background 0.3s ease;
		}
	}

	@media screen and (max-width: 768px) {
		width: 90%;

		&:hover {
			transform: none;
		}
	}
`;
