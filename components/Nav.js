import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div``;
const Socials = styled.div``;
const Menus = styled.div``;

export default function Nav() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}
