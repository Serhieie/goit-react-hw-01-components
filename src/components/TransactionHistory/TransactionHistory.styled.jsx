import styled from '@emotion/styled';

export const Table = styled.table`
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  box-shadow: 2px 2px 10px ${props => props.theme.colors.shadowBox};
  margin-bottom: 100px;
  color: ${props => props.theme.colors.darkFont};
  font-size: 22px;
}

&th,
 td {
  padding: 16px 28px;
  border: 1px solid ${props => props.theme.colors.tableBorder};
}

&th {
  padding: 20px 36px;
  font-size: 28px;
  background-color: ${props => props.theme.colors.tableHead};
}

&tr:nth-of-type(even) {
  background-color: ${props => props.theme.colors.tableLight};
}

&tr:nth-of-type(odd) {
  background-color: ${props => props.theme.colors.tableDark};
}`;
