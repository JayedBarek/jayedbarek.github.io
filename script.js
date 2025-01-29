// Sample projects data - you can modify this with your actual projects
const projects = [
    {
        title: "Machine Learning Algorithms",
        description: "A comprehensive collection of machine learning algorithms implemented from scratch. Includes supervised and unsupervised learning techniques.",
        image: "https://raw.githubusercontent.com/microsoft/ML-For-Beginners/main/images/ml.jpeg",
        link: "https://github.com/JayedBarek/machine-learning-algorithms",
        technologies: ["Python", "NumPy", "Pandas", "Scikit-learn"],
        type: "Fork from microsoft/ML-For-Beginners"
    },
    {
        title: "Deep Learning Research",
        description: "Implementation of state-of-the-art deep learning models and research papers. Focus on computer vision and natural language processing.",
        image: "https://raw.githubusercontent.com/tensorflow/docs/master/site/en/tutorials/images/cnn.png",
        link: "https://github.com/JayedBarek/deep-learning-research",
        technologies: ["Python", "TensorFlow", "PyTorch", "CUDA"],
        type: "Fork from tensorflow/models"
    },
    {
        title: "Data Structures and Algorithms",
        description: "Implementation of various data structures and algorithms with detailed explanations and complexity analysis.",
        image: "https://raw.githubusercontent.com/TheAlgorithms/Python/master/docs/images/dynamic_programming.png",
        link: "https://github.com/JayedBarek/algorithms",
        technologies: ["Python", "C++", "Java"],
        type: "Fork from TheAlgorithms/Python"
    }
];

// Function to create project cards with enhanced details
function createProjectCard(project) {
    const techStack = project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
    
    return `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/300x200?text=${encodeURIComponent(project.title)}'">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-stack">
                    ${techStack}
                </div>
                <p class="project-type">${project.type}</p>
                <a href="${project.link}" target="_blank" class="project-link">View on GitHub</a>
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
