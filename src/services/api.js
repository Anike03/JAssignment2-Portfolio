import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL.trim(),
});

export const fetchProjects = async () => {
  try {
    const [projectsRes, skillsRes] = await Promise.all([
      API.get('/api/projects'),
      API.get('/api/skills'),
    ]);

    return {
      projects: projectsRes.data || [],
      skills: skillsRes.data || [],
    };
  } catch (err) {
    console.error('API Error:', err.message);
    return { projects: [], skills: [] };
  }
};
