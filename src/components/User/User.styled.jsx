import styled from '@emotion/styled';

export const UserCard = styled.div`
  color: ${props => props.theme.colors.lightFont};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: ${props => props.theme.colors.light};
  width: 400px;
  height: 600px;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 100px;
  border-radius: 4px;
  text-align: center;
  box-shadow: 2px 2px 10px ${props => props.theme.colors.shadowBox};
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Avatar = styled.img`
  border-radius: 100%;
  background-color: ${props => props.theme.colors.avatarBackground};
`;

export const Name = styled.p`
  color: ${props => props.theme.colors.darkFont};
  font-weight: 700;
  margin: 0;
  margin-top: 40px;
  font-size: 28px;
`;

export const Tag = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
export const Location = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  background-color: ${props => props.theme.colors.userStatsBackground};
  width: 100%;
  height: 100px;
  margin: 0;
  padding: 0;
  margin-top: 20px;
  border: 1px solid ${props => props.theme.colors.userStatsBorder};

  > li {
    color: ${props => props.theme.colors.darkFont};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    height: 100%;
    width: 100%;
  }

  li:not(:last-child) {
    border-right: 2px solid ${props => props.theme.colors.userStatsBorder};
  }
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
