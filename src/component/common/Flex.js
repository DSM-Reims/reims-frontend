import styled from "styled-components";

export const FlexRow = styled.div`
  width: ${(props) => (props.fullWidth ? "100%" : "initial")};
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: ${(props) => (props.flex ? props.flex : undefined)};
  padding: ${(props) => (props.padding ? props.padding : undefined)};
  gap: ${(props) => (props.gap ? props.gap : 0)}px;
  align-items: ${(props) => (props.align ? props.align : "center")};
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
`;

export const FlexCol = styled.div`
  width: ${(props) => (props.fullWidth ? "100%" : "initial")};
  display: flex;
  flex-direction: column;
  flex: ${(props) => (props.flex ? props.flex : undefined)};
  padding: ${(props) => (props.padding ? props.padding : undefined)};
  gap: ${(props) => (props.gap ? props.gap : 0)}px;
  align-items: ${(props) => (props.align ? props.align : "flex-start")};
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
`;
