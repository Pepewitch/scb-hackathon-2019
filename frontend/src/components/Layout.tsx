import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

export const Container = styled(Flex)`
  padding: 24px;
`

export const Card = styled.div`
  background-color: white;
  border-radius: 16px;
  width: 100%;
`