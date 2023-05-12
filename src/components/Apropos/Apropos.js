
import React from 'react';
import { Container, MainHeading } from '../../globalStyles';
import { AproposSection, AproposText, PricingCard } from './AproposStyles';


const Apropos = () => {

  return (
    <>
    <AproposSection>
			<Container>
				<MainHeading>A propos</MainHeading>
				<AproposText>
        L'art du modelage en papier mâché..
				</AproposText>
			</Container>
    </AproposSection>
    </>
  );
}

export default Apropos;
