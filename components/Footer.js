import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div``;
const Socials = styled.div``;
const Menus = styled.div``;
const Copyright = styled.div``;

export default function Header() {
  return (
    <Wrapper>
      <h2>Footer</h2>
      <Socials>
        <a href="">Meetup</a>
        <a href="">Slack</a>
        <a href="">Youtube</a>
        <a href="">Instagram</a>
      </Socials>
      <Menus>
        <Link href="/events">Events</Link>
        <Link href="/about">About</Link>
        <Link href="/links">Links</Link>
      </Menus>
      <Copyright>
        <p>Made with tacos, coffee, and care.</p>
      </Copyright>
    </Wrapper>
  );
}
