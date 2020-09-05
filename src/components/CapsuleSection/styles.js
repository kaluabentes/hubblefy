import styled from "styled-components";

export const Container = styled.section`
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  font-size: 1rem;
  margin: 0 0 10px 0;
  font-weight: normal;
`;

export const Grid = styled.div`
  display: flex;

  & > div {
    margin-right: 15px;
  }
`;
