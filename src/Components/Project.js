import React, { useState, useEffect } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState({ id: '', name: '', description: '', languages: [], authors: [], image: '' });

  useEffect(() => {
    fetch('http://localhost:3001/projects')
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const method = currentProject.id ? 'PUT' : 'POST';
    const url = currentProject.id ? `http://localhost:3001/projects/${currentProject.id}` : 'http://localhost:3001/projects';

    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(currentProject),
    })
      .then(response => response.json())
      .then(data => {
        if (method === 'POST') {
          setProjects([...projects, data]);
        } else {
          setProjects(projects.map(project => (project.id === data.id ? data : project)));
        }
        setCurrentProject({ id: '', name: '', description: '', languages: [], authors: [], image: '' });
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/projects/${id}`, { method: 'DELETE' })
      .then(() => setProjects(projects.filter(project => project.id !== id)));
  };

  const handleEdit = (project) => {
    setCurrentProject(project);
  };

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <button onClick={() => handleEdit(project)}>Edit</button>
            <button onClick={() => handleDelete(project.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <h2>{currentProject.id ? 'Edit Project' : 'Add Project'}</h2>
        <input
          type="text"
          value={currentProject.name}
          onChange={(e) => setCurrentProject({ ...currentProject, name: e.target.value })}
          placeholder="Project Name"
          required
        />
        <textarea
          value={currentProject.description}
          onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })}
          placeholder="Project Description"
          required
        />
        <input
          type="text"
          value={currentProject.languages.join(', ')}
          onChange={(e) => setCurrentProject({ ...currentProject, languages: e.target.value.split(', ') })}
          placeholder="Languages (comma-separated)"
          required
        />
        <input
          type="text"
          value={currentProject.authors.join(', ')}
          onChange={(e) => setCurrentProject({ ...currentProject, authors: e.target.value.split(', ') })}
          placeholder="Authors (comma-separated)"
          required
        />
        <input
          type="url"
          value={currentProject.image}
          onChange={(e) => setCurrentProject({ ...currentProject, image: e.target.value })}
          placeholder="Image URL"
          required
        />
        <button type="submit">{currentProject.id ? 'Update Project' : 'Add Project'}</button>
      </form>
    </div>
  );
}

export default Projects;
