import React from 'react';
import useSections from '../hooks/SectionTitleHook';

const SectionTitle = (props) => {
  const [sections] = useSections()
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
