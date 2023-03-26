import React, { useContext } from 'react';
import styles from './LocationsComponent.module.css';
import { RMcontext } from '../../context/context';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const LocationsComponent = () => {
  const {locations} = useContext(RMcontext)
console.log(locations)
  
  return(
    <div className={styles.lc_container}>
    <br></br>
    <br></br>
    <br></br>
    <SimpleBar style={{ maxHeight:300}}>
    <div>
    {locations.length?(
      <>
        {locations.map((location)=>(
          <>
        
        <h1 key={location.id}>{location.name}</h1>
        <h3>{location.type}</h3>  
        <h3>{location.dimensions}</h3>     
        </>
        ))} 
    </>
    )   :   (<p>Cargando...</p>)}
</div>
</SimpleBar>
    </div>
  )};

LocationsComponent.propTypes = {};

LocationsComponent.defaultProps = {};

export default LocationsComponent;
