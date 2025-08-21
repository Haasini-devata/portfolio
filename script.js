// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('.section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// Button click handlers
document.querySelector('.btn-primary').addEventListener('click', () => {
  // Scroll to contact section or open contact modal
  const contactSection = document.querySelector('#contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    // You can add a contact modal or redirect to contact page
    alert('Contact functionality can be implemented here!');
  }
});

document.querySelector('.btn-secondary').addEventListener('click', () => {
  // Scroll to projects section
  const projectsSection = document.querySelector('#projects');
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  }
});

// Social links functionality
document.querySelectorAll('.social-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const linkType = link.classList[1]; // Gets the second class (linkedin, github, etc.)
    
    // You can replace these with actual URLs
    const socialUrls = {
      linkedin: 'https://linkedin.com/in/devata-haasini',
      github: 'https://github.com/devata-haasini',
      portfolio: '#',
      email: 'mailto:devata.haasini@example.com'
    };
    
    if (socialUrls[linkType]) {
      if (linkType === 'email') {
        window.location.href = socialUrls[linkType];
      } else {
        window.open(socialUrls[linkType], '_blank');
      }
    }
  });
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 150);
  }
});

// Add scroll-to-top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #6366f1;
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1000;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.style.opacity = '1';
  } else {
    scrollToTopBtn.style.opacity = '0';
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
        
    }
    emailjs.send("service_d4emmsb","template_hlx568s",parms).then(alert("Email sent!!"))
}
