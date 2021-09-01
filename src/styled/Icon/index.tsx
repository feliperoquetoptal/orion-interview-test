import styled from 'styled-components';

type IconProps = {
  $green?: boolean;
  $red?: boolean;
};

export const IconButton = styled.div<IconProps>`
  margin: 2px;
  ${{ 'cursor': 'pointer', '&:active': { 'opacity': 0.7, 'transition': '0s' } }};
  ${props => props.$green && { 'color': '#0F0' }}
  ${props => props.$red && { 'color': '#F00' }}
`;
