import * as Styled from "./styles";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { loadImg } from "../../utils";
import { PortfolioData } from "../template/portfolio";

type PortfolioTopGridProps = {
  latest?: PortfolioData;
  portfolios?: PortfolioData[];
};

export const PortfolioTopGrid: React.FC<PortfolioTopGridProps> = ({
  latest = null,
  portfolios,
}) => {
  const router = useRouter();
  return (
    <Styled.PortfolioHighGridWrapper>
      {latest && (
        <Styled.LatestPortfolio>
          <Styled.TitleWrapper>
            <Styled.Title>{latest.title}</Styled.Title>
            <Styled.Description>
              {latest.description?.slice(0, 50) + "..."}
            </Styled.Description>
          </Styled.TitleWrapper>
          <Styled.ImageWrapper>
            <Image
              src={loadImg(latest.cover.url || "")}
              layout="fill"
              alt={latest.cover?.alternativeText || ""}
            />
          </Styled.ImageWrapper>
          <Link passHref={true} href={router.route + "/" + latest.slug}>
            <Styled.Link>ler</Styled.Link>
          </Link>
        </Styled.LatestPortfolio>
      )}

      <Styled.Grid>
        {portfolios?.map((portfolio) => (
          <Link
            key={portfolio.slug}
            passHref={true}
            href={router.route + "/" + portfolio.slug}
          >
            <a>
              <Styled.Post>
                <Styled.Content>
                  <Styled.Title>{portfolio.title}</Styled.Title>
                  <Styled.Description>
                    {portfolio.description.slice(0, 50) + "..."}
                  </Styled.Description>
                </Styled.Content>
                <Styled.Thumbnail>
                  <Image
                    src={loadImg(portfolio.cover?.url || "")}
                    layout="fill"
                    alt={portfolio.cover?.alternativeText || ""}
                  />
                </Styled.Thumbnail>
              </Styled.Post>
            </a>
          </Link>
        ))}
      </Styled.Grid>
    </Styled.PortfolioHighGridWrapper>
  );
};
