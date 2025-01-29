// Sample projects data - you can modify this with your actual projects
const projects = [
    {
        title: "Project 1",
        description: "Description of your first project goes here.",
        image: "https://via.placeholder.com/300x200",
        link: "https://github.com/yourusername/project1"
    },
    {
        title: "Project 2",
        description: "Description of your second project goes here.",
        image: "https://via.placeholder.com/300x200",
        link: "https://github.com/yourusername/project2"
    },
    // Add more projects as needed
];

// Function to create project cards
function createProjectCard(project) {
    return `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View on GitHub</a>
            </div>
        </div>
    `;
}

// Load projects when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        projectsContainer.innerHTML += createProjectCard(project);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
