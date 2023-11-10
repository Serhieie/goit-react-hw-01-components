import styled from '@emotion/styled';

export const Statistics = styled.section`
  padding-top: 30px;
  text-align: center;
  width: 500px;
  margin: 0 auto;
  margin-bottom: 100px;
  background-color: ${props => props.theme.colors.light};
  box-shadow: 2px 2px 10px ${props => props.theme.colors.shadowBox};
  border-radius: 4px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.darkFont};
  padding: 20px;
  background-color: ${props => props.theme.colors.lightBlue};
  width: 200px;
  margin: 0 auto;
  border-radius: 4px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  background-color: ${props => props.theme.colors.light};
  width: 500px;
  height: 100px;
  padding: 0;
  margin-top: 20px;
  border: 1px solid ${props => props.theme.colors.light};
  border-radius: 10px;
`;
