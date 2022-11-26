import styled from "styled-components";

export const EmailAdress = styled.a`
  font-weight: 900;
  font-size: 32px;
  color: #252525;
  text-decoration: none;
  margin-top: 24px;

    &:hover {
      color: #0366d6;
    }
`;

export const LetsTalkText = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-top: 24px;
`;

export const LetsTalkContainer = styled.div`
  max-width: 691px;
  margin-top: 120px;
`;

export const GithubLink = styled.a`
  display: inline-block;
  background-color: #dadada;
  width: 48px;
  height: 48px;

    &:hover {
      background-color: #0366d6;
    }
`;

export const LinkedInLink = styled.a`
  display: inline-block;
  color: #252525;
  width: 48px;
  height: 48px;

    &:hover {
      color: #0366d6;
    }
`;

export const ExternalLinksContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 24px;
  margin-top: 56px;
`;
