import React, { useContext } from 'react';
import styles from './CharactersComponent.module.css';
import { RMcontext } from '../../context/context';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const CharactersComponent = () => {
  const {characters} = useContext(RMcontext)

  return(
    <div className={styles.cc_container}> 
    <br></br>
    <br></br>
    <br></br>
    
    <SimpleBar style={{ maxHeight:300}}>
    <div className={styles.cc_container_simplebar}>
   {characters.length?(
            <>
            {characters.map((character)=>(
                <>   
        <div className={styles.cc_container_simplebar_galery}>  
        <h3 key={character.id}>{character.name}</h3>
        <img src={character.image} alt=""/>  
         </div>  
        </>
    ))} 
    </>
    )   :   (   <p>Cargando...</p>  )}
</div>
</SimpleBar>
    </div>
)};

CharactersComponent.propTypes = {};

CharactersComponent.defaultProps = {};

export default CharactersComponent;
