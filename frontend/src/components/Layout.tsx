import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

export const Container = styled(Flex)`
  padding: 24px;
`