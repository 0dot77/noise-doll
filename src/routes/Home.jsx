import styled from 'styled-components';
import Layout from '../components/Layout';

const HomeContainer = styled.article`
  width: 100%;
  height: 80%;
  background-color: #000000;
`;

export default function Home() {
  return (
    <Layout>
      <HomeContainer></HomeContainer>
    </Layout>
  );
}
