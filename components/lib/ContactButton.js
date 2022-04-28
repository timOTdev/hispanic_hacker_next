import styled from 'styled-components';
import Link from 'next/link';

const Button = styled.button`
  background: none;
  border-radius: 5px;
  display: block;
  margin: 3rem auto;
  padding: 5px;
  border: 2px solid ${({ theme }) => theme.linkUnderline};
  a {
    color: ${({ theme }) => theme.linkUnderline};
  }
  :hover {
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.fontColor};
  }
`;

export default function ContactButton() {
  return (
    <Button>
      <Link href='/links'>Contact Us</Link>
    </Button>
  );
}
