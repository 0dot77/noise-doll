import styled, { keyframes } from 'styled-components';
import Sound from '../components/Sound';

const PlaylistContainer = styled.article`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AlbumCoverContainer = styled.section`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TumbleAnimation = keyframes`
    from {
        transform: scale(1,1);
        animation-timing-function: linear;
    }

    to {
        transform: scale(1.15,1.15);
        animation-timing-function: linear;
    }
`;

const AlbumCover = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 3px dotted white;
  animation: ${TumbleAnimation} 5s ease infinite;
  .title {
    width: 80%;
    object-fit: contain;
  }
`;

const AlbumSoundContainer = styled.article`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function Playlist() {
  return (
    <PlaylistContainer>
      <AlbumCoverContainer>
        <AlbumCover>
          <img className="title" src="assets/imgs/black.png" alt="noise dol project album coveer" />
        </AlbumCover>
      </AlbumCoverContainer>
      <AlbumSoundContainer>
        <Sound title="NOM nom" url="assets/sound/sound1.mp3" />
        <Sound title="DID YOU HEAR THAT?" url="assets/sound/sound2.mp3" />
        <Sound title="pure on pure" url="assets/sound/sound3.mp3" />
        <Sound title="Again, Morning" url="assets/sound/sound4.mp3" />
        <Sound title="7/20" url="assets/sound/sound5.mp3" />
      </AlbumSoundContainer>
    </PlaylistContainer>
  );
}
