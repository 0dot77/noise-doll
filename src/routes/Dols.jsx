import Dol1 from '../components/Dol1';
import Dol2 from '../components/Dol2';
import Dol3 from '../components/Dol3';
import Dol4 from '../components/Dol4';
import Dol5 from '../components/Dol5';
import { useLocation } from 'react-router-dom';

export default function Dols() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === '/introduce-dols' ? (
        <Dol1 nextPath={'/noise2'} title="NOM nom" />
      ) : pathname === '/noise2' ? (
        <Dol2
          nextPath={'/noise3'}
          title="DID YOU HEAR THAT?
        "
        />
      ) : pathname === '/noise3' ? (
        <Dol3
          title="pure on pure
        "
          nextPath={'/noise4'}
        />
      ) : pathname === '/noise4' ? (
        <Dol4 title="Again, Morning" nextPath={'/noise5'} />
      ) : (
        <Dol5 title="7/20" nextPath={'/introduce-dols'} />
      )}
    </>
  );
}
