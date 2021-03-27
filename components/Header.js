import styled from "styled-components";
import Link from "next/link";
import Nav from "./Nav";

const Wrapper = styled.div``;

export default function Header() {
  return (
    <Wrapper>
      <h2>Header</h2>
      <div>
        <Link href="/">Welcome to Hispanic Hackers</Link>
      </div>
      <div>
        <Nav />
      </div>
    </Wrapper>
  );
}
