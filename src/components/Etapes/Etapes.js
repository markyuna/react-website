import React from 'react';
import { Button, Heading, TextWrapper } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import {
  EtapeSection,
  EtapeWrapper,
  EtapeContainer,
  EtapeCardInfo,
  EtapeCardPlan,
  EtapeCardCost,
  EtapeCardFeatures,
  EtapeCardText,
  EtapeCardFeature,
  EtapeCard,
} from './EtapesStyles';
import { EtapeData } from '../../data/EtapeData';

function Etape() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
      <EtapeSection id="Etape">
        <EtapeWrapper>
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
          <EtapeContainer>
            {EtapeData.map((card, index) => (
              <EtapeCard key={index}>
                <EtapeCardInfo>
                  <EtapeCardPlan>{card.title}</EtapeCardPlan>
                  <EtapeCardCost>{card.price}</EtapeCardCost>
                  <EtapeCardText>{card.numAcc}</EtapeCardText>
                  <EtapeCardFeatures>
                    {card.features.map((feature, index) => (
                      <EtapeCardFeature key={index}>{feature}</EtapeCardFeature>
                    ))}
                  </EtapeCardFeatures>
                  <Button>Get Started</Button>
                </EtapeCardInfo>
              </EtapeCard>
            ))}
          </EtapeContainer>
        </EtapeWrapper>
      </EtapeSection>
    </IconContext.Provider>
  );
}

export default Etape;
