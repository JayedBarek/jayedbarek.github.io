// GitHub username
const githubUsername = 'JayedBarek';

// Function to fetch GitHub repositories
async function fetchGitHubRepos() {
    try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&direction=desc`);
        const repos = await response.json();
        return repos;
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        return [];
    }
}

// Function to create a project card
function createProjectCard(repo) {
    const technologies = repo.topics || [];
    const description = repo.description || 'No description available';
    
    return `
        <div class="project-card">
            <h3>${repo.name}</h3>
            <p>${description}</p>
            <div class="tech-stack">
                ${technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                ${repo.language ? `<span class="tech-tag">${repo.language}</span>` : ''}
            </div>
            <div class="project-links">
                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" rel="noopener noreferrer">Live Demo</a>` : ''}
            </div>
        </div>
    `;
}

// Load repositories when the page loads
document.addEventListener('DOMContentLoaded', async () => {
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = '<p>Loading repositories...</p>';

    const repos = await fetchGitHubRepos();
    
    if (repos.length > 0) {
        projectsContainer.innerHTML = repos
            .filter(repo => !repo.fork) // Filter out forked repositories
            .map(repo => createProjectCard(repo))
            .join('');
    } else {
        projectsContainer.innerHTML = '<p>No repositories found</p>';
    }
});
