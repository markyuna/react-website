// component name: Hero
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
  const navigate = useNavigate();

	// return (
	// 	<HeroSection>
	// 		<HeroVideo src="./assets/hero.mp4" autoPlay muted />
	// 		<Container>
	// 			<MainHeading>Marcos Suarez Romero</MainHeading>
	// 			<HeroText>
	// 				Découvrez le charme du papier mâché dans mes créations artistiques.
	// 			</HeroText>
	// 			<ButtonWrapper>
	// 				<Button onClick={() => navigate.push('/galerie')}>Voir les oeuvres</Button>
	// 				<HeroButton>Find More</HeroButton>
	// 			</ButtonWrapper>
	// 		</Container>
	// 	</HeroSection>
	// );

  return (
    <HeroSection>
      <Container>
        <MainHeading>Marcos Suarez Romero</MainHeading>
        <HeroText>
          Découvrez le charme du papier mâché dans mes créations artistiques.
        </HeroText>
        <ButtonWrapper>
          <Button onClick={() => navigate('/galerie')}>Voir les oeuvres</Button>
          <HeroButton>Find More</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
