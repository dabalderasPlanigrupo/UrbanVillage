import styled from 'styled-components';

const SocialRow = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  padding: 20px 0;
`;

const SocialLink = styled.a<{ variant?: string; fontSize?: string }>`
  align-items: center;
  background-color: ${({ variant }) =>
    variant === 'rounded' && 'var(--color-blanco)'};
  border-radius: 50%;
  color: ${({ variant }) =>
    variant === 'rounded' ? 'var(--color-secundario)' : 'var(--color-blanco)'};
  display: grid;
  font-size: ${({ fontSize }) => fontSize};
  height: 30px;
  justify-content: center;
  transition: color 0.3s;
  width: 30px;

  &:hover {
    background-color: ${({ variant }) =>
      variant === 'rounded' && 'var(--color-principal)'};
  }
`;

export { SocialRow, SocialLink };
