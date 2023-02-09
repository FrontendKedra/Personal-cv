import styled from "styled-components";

export const Container = styled.div`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 1216px;
  padding: 32px;
  margin-bottom: 72px;
`;

export const Header = styled.article`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.iron};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding-bottom: 12px;
  }
`;

export const Title = styled.header`
  font-weight: 900;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.mineShaft};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Icon = styled.p`
  margin: 0 0 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin: 0 0 0 12px;
  }
`;

export const List = styled.ul`
  margin-top: 32px;
  padding-left: 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-columns: 1fr;
    margin-top: 12px;
  }
`;

export const ListItem = styled.li`
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  list-style: none;
  color: ${({ theme }) => theme.colors.slateGray};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const Paragraph = styled.p`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 16px;
  margin: 0;
`;
