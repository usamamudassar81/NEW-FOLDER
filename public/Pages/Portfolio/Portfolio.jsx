import React, { useEffect, useState } from 'react';

const Portfolio = () => {
  const [projects,setProjects]=useState([]);
  const [filteredProjects,setFilteredProjects]=useState([]);
  const [selectedCategory,setSelectedCategory]=useState('All');
 useEffect(()=>{
  fetch('projects.json').then(res => res.json()).then(data => {
    setProjects(data);
    setFilteredProjects(data);
  });
 },[]);

 const handleFilterClick = (category) => {
  setSelectedCategory(category);
  if(category ==='All'){
    setFilteredProjects(projects);
  }else{
    const filtered = projects.filter(project => project.category === category);
    setFilteredProjects(filtered);
  }
 }
 
 
 
  return (
    <section className='portfolio'> <header><h2 className='h2 article-title'>Portfolio</h2>
    </header>   
    <ul className='filter-list'>
    {['All','Web design','Applicaions','Web development'].map(category => (
      <li key={category} className='filter-item'>
        
        <button onClick={()=> handleFilterClick(category)}
        data-filter-btn className={category===selectedCategory ?  'active':''}>{category}</button>
      </li>
    ))}
    </ul>
    <section className='projects'>
      <ul className='project-list'>
        {
          filteredProjects.map(project => (
            <li key={project.id}>
              <a href='#'>
                <figure>
                  <img src={project.image} alt="" />
                </figure>
              </a>
            </li>
          ))
        }
      </ul>
    </section>
   
    
    
    </section>
   
  );
}

export default Portfolio;