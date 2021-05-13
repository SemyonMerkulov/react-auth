import styled from 'styled-components'
import { FiLogOut, FiUser } from 'react-icons/fi';


const ButtonLogout = styled.button`
  font-size: 1.25rem;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Container = styled.div`
  background: white;
  width: 100%;
`;

const Inner = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px 10px;
`;

const IconContainer = styled.div`
  font-size: 1.5rem;
`;

const UserTitle = styled.span`
  font-size: 1rem;
  line-height: 1.75;
  padding: 0 7px;
`;

const Header = () => {
  return(
    <Container>
      <Inner>
        <IconContainer>
          <FiUser/>
        </IconContainer>
        <UserTitle>
          admin
        </UserTitle>
        <ButtonLogout>
          <FiLogOut/>
        </ButtonLogout>
      </Inner>
    </Container>
  );
}

export default Header