// Projects data with new repositories
const projects = [
    {
        title: "Computer Vision Projects",
        description: "A collection of computer vision projects including face detection, object tracking, and image segmentation using OpenCV and deep learning.",
        image: "https://raw.githubusercontent.com/matterport/Mask_RCNN/master/assets/street.png",
        link: "https://github.com/JayedBarek/computer-vision-projects",
        technologies: ["Python", "OpenCV", "TensorFlow", "PyTorch"],
        type: "Fork from matterport/Mask_RCNN"
    },
    {
        title: "Natural Language Processing",
        description: "Implementation of modern NLP techniques including transformers, BERT, and GPT models. Includes text classification, sentiment analysis, and language generation.",
        image: "https://raw.githubusercontent.com/huggingface/transformers/master/docs/source/imgs/transformers_logo_name.png",
        link: "https://github.com/JayedBarek/nlp-research",
        technologies: ["Python", "PyTorch", "Transformers", "NLTK"],
        type: "Fork from huggingface/transformers"
    },
    {
        title: "Reinforcement Learning",
        description: "Implementation of various reinforcement learning algorithms and environments. Includes DQN, PPO, and A3C with practical applications.",
        image: "https://raw.githubusercontent.com/openai/gym/master/docs/assets/classic_control.gif",
        link: "https://github.com/JayedBarek/rl-algorithms",
        technologies: ["Python", "PyTorch", "Gym", "NumPy"],
        type: "Fork from openai/gym"
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
