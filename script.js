// Projects data with your actual repositories
const projects = [
    {
        title: "Analysis of Computer Algorithms",
        description: "Implementation and analysis of various computer algorithms, focusing on algorithm design, complexity analysis, and optimization techniques.",
        image: "https://raw.githubusercontent.com/JayedBarek/CSCE5150-Analysis-of-Computer-Algorithm/main/banner.png",
        link: "https://github.com/JayedBarek/CSCE5150-Analysis-of-Computer-Algorithm",
        technologies: ["Python", "Jupyter Notebook", "Algorithm Analysis"],
        type: "Course Project - CSCE 5150"
    },
    {
        title: "Introduction to Artificial Intelligence",
        description: "Exploration of fundamental AI concepts including search algorithms, knowledge representation, machine learning, and neural networks.",
        image: "https://raw.githubusercontent.com/JayedBarek/CSCE5210-Introduction-to-AI/main/banner.png",
        link: "https://github.com/JayedBarek/CSCE5210-Introduction-to-AI",
        technologies: ["Python", "TensorFlow", "scikit-learn", "AI Algorithms"],
        type: "Course Project - CSCE 5210"
    },
    {
        title: "Fundamentals of Database Systems",
        description: "Implementation of database concepts, including relational algebra, SQL, database design, and transaction management.",
        image: "https://raw.githubusercontent.com/JayedBarek/CSCE5350-Fundamental-of-Database/main/banner.png",
        link: "https://github.com/JayedBarek/CSCE5350-Fundamental-of-Database",
        technologies: ["SQL", "Database Design", "PostgreSQL"],
        type: "Course Project - CSCE 5350"
    },
    {
        title: "Academic Portfolio",
        description: "A comprehensive academic portfolio showcasing research work, publications, and academic achievements.",
        image: "https://raw.githubusercontent.com/JayedBarek/academicpages.github.io/master/images/banner.jpg",
        link: "https://github.com/JayedBarek/academicpages.github.io",
        technologies: ["JavaScript", "Jekyll", "HTML/CSS", "Markdown"],
        type: "Personal Website"
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
