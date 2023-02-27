import React from 'react';
import { langs, services } from '../data';
import Tech from './Tech';


function TechStack() {

  return (
    // <Layout>
      <React.Fragment>


          {Object.values(langs).map((lang) => (
            <Tech
            key={lang.id}
            name={lang.name}
            img={lang.img}
            id={lang.id}
            />
            ))
          }
          {Object.values(services).map((service) => (
            <Tech
            key={service.id}
            name={service.name}
            img={service.img}
            id={service.id}
            />
            ))
          }

      </React.Fragment>
    // </Layout>
  )
}

export default TechStack;