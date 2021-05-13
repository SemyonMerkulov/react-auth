import styled from 'styled-components'
import {useSelector} from "react-redux"
import { FiLogOut, FiUser } from 'react-icons/fi';
import {useAppActions} from '../hooks';


const ButtonLogout = styled.button`
  font-size: 1.25rem;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

const Wrapper = styled.div`
  background: white;
  width: 100%;
`;

const Inner = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px 0;
`;

const IconContainer = styled.div`
  font-size: 1.5rem;
`;

const UserTitle = styled.span`
  font-size: 1rem;
  line-height: 1.75;
  padding: 0 7px;
`;

const Header = props => {
  const {user} = useSelector(state => state.user);
  const {logoutUser} = useAppActions();
  const handleClick = () => {
    logoutUser();
  }
  
  return(
    <Wrapper>
      <Container>
        <Inner>
          <IconContainer>
            <FiUser/>
          </IconContainer>
          <UserTitle>
            {user.name}
          </UserTitle>
          <ButtonLogout onClick={handleClick}>
            <FiLogOut/>
          </ButtonLogout>
        </Inner>
      </Container>
    </Wrapper>  
  );
}

export default Header