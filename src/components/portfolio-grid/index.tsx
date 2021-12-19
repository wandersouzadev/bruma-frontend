import * as Styled from "./styles";
import Link from "next/link";
import Image from "next/image";
import { CommonButton } from "../common/button";
import { loadImg } from "../../utils";
import { useRouter } from "next/router";
import { PortfolioData } from "../template/portfolio";
import { useCallback, useState } from "react";
import { usePortfolioQuery } from "../../graphql/generated/graphql";
import { portfolioMapper } from "../../utils/mapper";

type PortfolioGridProps = {
  portfolios: PortfolioData[];
};

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ portfolios }) => {
  const router = useRouter();
  const [portfolioArray, setPortfolioArray] = useState(portfolios);
  const { data } = usePortfolioQuery({
    variables: { start: portfolioArray.length + 3 },
  });

  const fetchMorePortfolio = useCallback(() => {
    setPortfolioArray((old) => [...old, ...portfolioMapper(data)]);
  }, [data]);

  return (
    <Styled.PortfolioGridWrapper>
      <Styled.Grid>
        {portfolioArray.map((portfolio) => (
          <Link
            key={portfolio.slug}
            href={router.route + "/" + portfolio.slug}
            passHref
          >
            <a>
              <Styled.Portfolio>
                <Styled.Thumbnail>
                  <Image
                    src={loadImg(portfolio.cover?.url)}
                    layout="fill"
                    alt={portfolio.cover?.alternativeText || ""}
                  />
                  <Styled.Category>{portfolio.category.name}</Styled.Category>
                </Styled.Thumbnail>
                <Styled.Content>
                  <Styled.Title>{portfolio.title}</Styled.Title>
                  <Styled.Description>
                    {portfolio.description.slice(0, 100) + "..."}
                  </Styled.Description>
                </Styled.Content>
              </Styled.Portfolio>
            </a>
          </Link>
        ))}
      </Styled.Grid>
      {portfolioArray.length + 3 > 6 && (
        <CommonButton
          onClick={fetchMorePortfolio}
          variant="secondary"
          fontSize={6}
          padding={4}
        >
          ver mais textos
        </CommonButton>
      )}
    </Styled.PortfolioGridWrapper>
  );
};
