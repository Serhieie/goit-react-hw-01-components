import styled from '@emotion/styled';

export const ListItem = styled.li`
  background-color: ${props => `${props.theme.colors.white}`};
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 40px;
  border-radius: 4px;
  box-shadow: ${props => `2px 2px 10px ${props.theme.colors.shadowBox}`};
`;

export const Name = styled.p`
  font-size: 28px;
  font-weight: 500;
  color: ${props => `${props.theme.colors.darkFont}`};
  margin: 0;
`;

export const Status = styled.span`
  width: 25px;
  height: 25px;
  margin-right: 20px;
  border-radius: 40px;
  background-color: ${props =>
    props.online
      ? `${props.theme.colors.green}`
      : `${props.theme.colors.orange}`}};
`;
