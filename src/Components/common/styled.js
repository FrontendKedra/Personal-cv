import styled from "styled-components";

export const HeaderParagraph = styled.p`
  color: ${({theme})=> theme.colors.slateGray};
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-bottom: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-bottom: 8px;
  }
`;