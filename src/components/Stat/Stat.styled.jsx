import styled from '@emotion/styled';

export const Item = styled.li`
  color: ${props => props.theme.colors.light};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  height: 100%;
  width: 100%;
  gap: 10px;

  &:not(:last-child) {
    border-right: 1px solid ${props => props.theme.colors.light};
  }
  &:last-child {
    border-bottom-right-radius: 10px;
  }
  &:first-of-type {
    border-bottom-left-radius: 10px;
  }
`;

export const Percentage = styled.span`
  padding: 4px;
  border-radius: 8px;
  color: ${props => props.theme.colors.darkFont};
  font-size: 24px;
  font-weight: 600;
  background-color: ${props => props.theme.colors.light};
`;
