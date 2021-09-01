import styled, { css } from 'styled-components';

type TextProps = {
  $bold?: boolean;
  $end?: boolean;
};

export const textDefinitions = css<TextProps>`
  ${props => props.$bold && { 'font-weight': 'bold' }}
  ${props => props.$end && {
    'display': 'flex',
    'align-items': 'flex-end',
    'justify-content': 'flex-end',
    'text-align': 'end',
  }}
`;
export const Title = styled.span<TextProps>`
  ${textDefinitions}
  font-size: ${props => props.theme.titleSize}
`;

export const Subtitle = styled.span<TextProps>`
  ${textDefinitions}
  font-size: ${props => props.theme.subtitleSize}
`;

export const Label = styled.span<TextProps>`
  ${textDefinitions}
  font-size: ${props => props.theme.bodySize}
`;
