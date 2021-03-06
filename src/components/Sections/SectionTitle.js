import React from 'react';
import useSections from '../../apiCalls/Sections/fetchSections';

const SectionTitle = (props) => {
  
  const sections = JSON.parse(localStorage.getItem('sections'));
  
  // JSON.parse(localStorage.getItem('sections'));
  
  // localStorage.getItem('sections')
  console.log(sections)
  return(
    <div>

      <div id='Sections'>
        {sections.filter((section) => section._id === props.section).map((filteredSection) => {
          return (
              <div className='eachSection'> 
                <div ><h1 style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>{filteredSection.title}</h1></div> 
              </div>
            );
        })}
      </div>

    </div>
  )
  
}

export default SectionTitle
