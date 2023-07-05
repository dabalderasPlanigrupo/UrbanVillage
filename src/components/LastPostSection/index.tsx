import { Button } from '../Utilities/button';
import { Container } from '../Utilities/container';
import { Elements } from './elements';
import { FbPostsList } from '../homeList';
import { Inline } from '../Utilities/inline';
import { Section } from '../Utilities/section';
import { TitleWithIcon } from '../Utilities/titleWithIcon';

const LastPostSection = () => {
  return (
    <Section backgroundColor="#ffffff">
      <Container>
        <TitleWithIcon
          textColor="var(--color-gris)"
          iconColor="var(--color-gris)"
        >
          Nosotros
        </TitleWithIcon>
        <Elements fbPostsList={FbPostsList} />
        <Inline>
          <Button
            buttonColor="var(--color-blanco)"
            href="https://www.facebook.com/plazabellaanahuac/photos"
          >
            Ver más
          </Button>
        </Inline>
      </Container>
    </Section>
  );
};

export default LastPostSection;
