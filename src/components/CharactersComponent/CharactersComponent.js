import React, { useContext } from 'react';
import styles from './CharactersComponent.module.css';
import { RMcontext } from '../../context/context';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


const CharactersComponent = () => {
  const {characters} = useContext(RMcontext)
  console.log(characters)

  return(
    <div className={styles.CharactersComponent}> 
    <SimpleBar style={{ maxHeight: 900 }}>
   {characters.length?(
            <>
            {characters.map((character)=>(
                <>
        <p key={character.id}>{character.name}</p>
    
        <img src={character.image} alt=""/>   
        </>
    ))} 
    </>
    ):(
        <p>Cargando...</p>
    )}

</SimpleBar>
    </div>
)};

CharactersComponent.propTypes = {};

CharactersComponent.defaultProps = {};

export default CharactersComponent;
