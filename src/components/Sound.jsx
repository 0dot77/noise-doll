import styled from 'styled-components';
import PlaylistPlayer from './PlaylistPlayer';

const SoundContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
`;

const SoundTitleContainer = styled.div`
  width: 80%;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  font-family: 'mainFont';
  justify-content: center;
  font-size: 2rem;
  @media all and (max-width: 767px) {
    font-size: 1rem;
  }
`;

const Sound = ({ title, url }) => {
  return (
    <SoundContainer>
      <SoundTitleContainer>
        <h1>{title}</h1>
      </SoundTitleContainer>
      <PlaylistPlayer url={url} />
    </SoundContainer>
  );
};

export default Sound;
