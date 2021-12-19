import * as Styled from "./styles";
import Image from "next/image";
import { loadImg } from "../../utils";

export type CustomerData = {
  name: string;
  logo: {
    url: string;
    alternativeText: string;
  };
};

export type CustomerSingleProps = {
  customer: CustomerData;
};

export const CustomerSingle: React.FC<CustomerSingleProps> = ({ customer }) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>Cliente:</Styled.Title>
      {(customer.logo.url && (
        <Styled.ImageWrapper>
          <Image
            src={loadImg(customer.logo.url)}
            alt={customer.logo?.alternativeText || ""}
            layout="fill"
          />
        </Styled.ImageWrapper>
      )) || <Styled.Text>{customer.name}</Styled.Text>}
    </Styled.Wrapper>
  );
};
