import React, { useEffect, useState, Component } from 'react';
import Cookies from 'universal-cookie';
import styled from 'styled-components';
import StallsBySection from '../Stalls/StallsBySection';
import SectionsHook from '../../hooks/Sections/SectionsHook';
import sectionIsNotInLocalStorage from '../../helpers/sectionIsNotInLocalStorage';


const Sections = () => {
  <>
   { sectionIsNotInLocalStorage && <SectionsHook /> }
  </>
  const sections = JSON.parse(localStorage.getItem('sections'))

  
  const [currentSection, setCurrentSection] = useState("60c4c6ddc118f71813de7c27")
  const cookies = new Cookies();
  let signedInUser = cookies.get('user') || ''
  
  return(
    <div>
      <div className="Sections-wrap" >
        <div className="Sections-heading">
          <h1 className="Sections-heading">Welcome, {signedInUser.first_name}</h1>
          <h3 className="Sections-heading">Take a look around</h3>
        </div>
        <div id='Sections'>
          {sections.map((section) => {
            const Content = styled.div`
            border: none;
            background-image: url(${section.image});
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
        `;
            return (
              
                <Content style={{ cursor: 'pointer' }} className='eachSection' onClick={() => setCurrentSection(`${section._id}`)} ><h1 style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>{section.title}</h1 ></Content>
              
              );
          })}
        </div>
      </div>
      <div className="Stalls">
					<StallsBySection currentSection={currentSection}/>
			</div>
    </div>
  )
  
}

export default Sections
