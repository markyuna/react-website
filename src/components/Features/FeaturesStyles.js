import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FeatureSection = styled.div`
height: 60vh;
background: linear-gradient(-60deg, #fa7c30 30%, rgba(0, 0, 0, 0) 40%), url('https://res.cloudinary.com/dxrttyi2g/image/upload/v1683904748/IMG_6360_nbzn1d.jpg');
background-position: center;
background-size: cover;
padding-top: clamp(70px, 25vh, 220px);
box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

export const FeatureTitle = styled.h2`
	text-align: center;
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	line-height: 1.06;
	letter-spacing: 0.4rem;
	margin: auto;
`;

export const FeatureTextWrapper = styled.div`
	position: relative;
	padding: 0 0 10px;
	margin-bottom: 2rem;
`;

export const FeatureWrapper = styled.div`
	display: grid;
    box-sizing: border-box;
	grid-template-rows: repeat(2, 1fr);
	grid-gap: 3rem;

	@media screen and (max-width: 1100px) {
		grid-template-rows: repeat(2, 1fr);
		grid-row-gap: 2rem;
	}

	@media screen and (max-width: 290px) {
		grid-template-rows: repeat(2, 1fr);
  		max-width: 50%;
	}
`;

export const FeatureColumn = styled(motion.div)`
	display: flex;
	flex-flow: row;
    flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background: #f3f3f3;
	padding: 20px;
	box-shadow: 0 0 32px 8px #d0d0d0;
	border-radius: 20px;
`;

export const FeatureImageWrapper = styled.div`
	border-radius: 100%;
	border: 2px solid #000;
`;
export const FeatureName = styled.h3`
	font-weight: 600;
	font-size: 1.8rem;
	letter-spacing: 2px;
    padding: 10px;

	@media screen and (max-width: 390px) {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 1.2px;
	}
`;
export const FeatureText = styled.p`
	margin: 1rem 10px auto;
	text-align: justify;
	font-size: 1.2rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: #626881;

	@media screen and (max-width: 390px) {
		display: none;
	}
`;
