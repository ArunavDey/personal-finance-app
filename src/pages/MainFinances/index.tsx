import { FC } from "react";
import styled from "styled-components";
import Counter from "../../components/common/Counter";

const MainFinances: FC = () => {
  const current_balance = 55437.81;

  return (
    <div className="MainFinances">
      <ContainerCard>
        <Header>Main Finances</Header>
        <Counter title={"Balance"} value={current_balance}/>
      </ContainerCard>
    </div>
  );
};

const ContainerCard = styled.div`
  display: flex;
  height: 100vh;
  width: 40rem;
  border-radius: 1rem;
  background: #282828;
  padding: 1.5rem;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #fe8019;
  margin-bottom: 2rem;
`;


export default MainFinances;
