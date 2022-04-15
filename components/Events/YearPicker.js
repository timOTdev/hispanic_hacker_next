import styled from 'styled-components';

const YearPickerWrapper = styled.aside`
  margin: 0 auto;
  text-align: center;
  button {
    margin: 1rem;
  }
  hr {
    width: 20%;
  }
`;
const Button = styled.button`
  background: none;
  border-radius: 5px;
  padding: 5px;
  color: ${({ theme }) => theme.linkUnderline};
  border: 2px solid ${({ theme }) => theme.linkUnderline};
  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.linkUnderline};
    border: 2px solid ${({ theme }) => theme.fontColor};
  }
`;

export default function YearPicker({ setYear }) {
  return (
    <YearPickerWrapper>
      <hr />
      <Button onClick={() => setYear('2022')}>2022</Button>
      <Button onClick={() => setYear('2021')}>2021</Button>
      <hr />
    </YearPickerWrapper>
  );
}
