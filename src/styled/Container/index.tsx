import styled from 'styled-components';

type ContainerProps = {
  $spaceBetween?: boolean;
};

export const Page = styled.div<ContainerProps>`
  background-color: ${props => props.theme.backgroundColor};
  display: flex;
  flex-direction: column;
  padding: 48px 25%;
`;

export const List = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 16px 0;
`;

export const Card = styled.div<ContainerProps>`
  margin: 8px;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  &:hover { box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2) };
`;

export const Row = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${props => props.$spaceBetween && { 'justify-content': 'space-between' }}
`;
