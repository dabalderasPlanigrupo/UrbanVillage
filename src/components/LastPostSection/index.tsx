import { Section } from '../Utilities/section';
import { Elements } from './elements';
import { FbPostsList } from '../homeList';
import { TitleWithIcon } from '../Utilities/titleWithIcon';
import { Container } from '../Utilities/container';

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
      </Container>
    </Section>
  );
};

export default LastPostSection;
