import * as Styled from "./styles";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSocialLinksQuery } from "../../graphql/generated/graphql";
import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";

export const Header: React.FC = () => {
  const router = useRouter();

  const handleActiveRoute = (uri: string): boolean => {
    return router.pathname.startsWith(uri);
  };

  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/social-links`,
    async (url: string) => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }
  );

  return (
    <Styled.Header>
      <Link passHref={true} href="/">
        <Styled.MenuTitle>,Bruna Waltrick.</Styled.MenuTitle>
      </Link>
      <Styled.HeaderMenu>
        <Styled.MenuList>
          <li>
            <Link href="/about" passHref>
              <Styled.Link active={handleActiveRoute("/about")}>
                sobre mim
              </Styled.Link>
            </Link>
          </li>
          <li>
            <Link href="/portfolio" passHref>
              <Styled.Link active={handleActiveRoute("/portfolio")}>
                portfólio
              </Styled.Link>
            </Link>
          </li>
          <li>
            <Link href="/blog" passHref>
              <Styled.Link active={handleActiveRoute("/blog")}>
                blog
              </Styled.Link>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <Styled.Link active={handleActiveRoute("/contact")}>
                contato
              </Styled.Link>
            </Link>
          </li>
        </Styled.MenuList>
      </Styled.HeaderMenu>
      <Styled.MenuSocial>
        <a href={data?.facebook?.url} target="_blank" rel="noopener noreferrer">
          <Image
            src="/icon/facebook.svg"
            alt="link para o facebook"
            width={18}
            height={18}
          />
        </a>
        <a
          href={data?.instagram?.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icon/instagram.svg"
            alt="link para o instagram"
            width={18}
            height={18}
          />
        </a>
        <a href={data?.linkedin?.url} target="_blank" rel="noopener noreferrer">
          <Image
            src="/icon/linkedin.svg"
            alt="link para o linkedin"
            width={18}
            height={18}
          />
        </a>
        <a href={data?.medium?.url} target="_blank" rel="noopener noreferrer">
          <Image
            src="/icon/medium.svg"
            alt="link para o medium"
            width={18}
            height={18}
          />
        </a>
      </Styled.MenuSocial>
    </Styled.Header>
  );
};
