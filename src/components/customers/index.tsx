import * as Styled from "./styles";
export const Customers: React.FC = () => {
  return (
    <Styled.AboutClients>
      <Styled.Title>Colaboradores {"&"} Clientes:</Styled.Title>
      <Styled.ClientsGrid>
        {exampleClients.map((client) => (
          <Styled.Client key={client.id}>{client.name}</Styled.Client>
        ))}
      </Styled.ClientsGrid>
    </Styled.AboutClients>
  );
};

const exampleClients = [
  {
    id: 1,
    name: ",Bruna Waltric.",
  },
  {
    id: 2,
    name: ",Bruna Waltric.",
  },
  {
    id: 3,
    name: ",Bruna Waltric.",
  },
  {
    id: 4,
    name: ",Bruna Waltric.",
  },
];
