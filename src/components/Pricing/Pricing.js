import React from 'react';
import { Button, Heading, TextWrapper } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import {
	PricingSection,
	PricingWrapper,
	PricingContainer,
	PricingCardInfo,
	PricingCardPlan,
	PricingCardCost,
	PricingCardFeatures,
	PricingCardText,
	PricingCardFeature,
	PricingCard,
} from './PricingStyles';
import { pricingData } from '../../data/PricingData';

function Pricing() {
	return (
		<IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
			<PricingSection id="pricing">
				<PricingWrapper>
					<Heading>Pick Your Best Option</Heading>

					<TextWrapper
						mb="1.4rem"
						weight="600"
						size="1.1rem"
						color="white"
						align="center"
					>
						Create, maintain and store your data with Delta.
					</TextWrapper>
					<PricingContainer>
						{pricingData.map(({ title, price, description, features }, index) => (
							<PricingCard key={index}>
								<PricingCardInfo>
									<PricingCardPlan>{title}</PricingCardPlan>
									<PricingCardCost>{price}</PricingCardCost>
									<PricingCardText>{description}</PricingCardText>
									<PricingCardFeatures>
										{features.map((feature, featureIndex) => (
											<PricingCardFeature key={featureIndex}>
												{feature}
											</PricingCardFeature>
										))}
									</PricingCardFeatures>
									<Button>Get Started</Button>
								</PricingCardInfo>
							</PricingCard>
						))}
					</PricingContainer>
				</PricingWrapper>
			</PricingSection>
		</IconContext.Provider>
	);
}
export default Pricing;
