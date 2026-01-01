// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Feature card expand functionality
function toggleExpand(card) {
  const expandSection = card.querySelector('.feature-expand');
  const btn = card.querySelector('.expand-btn');
  
  if (expandSection.classList.contains('active')) {
    expandSection.classList.remove('active');
    btn.textContent = 'Learn More';
  } else {
    // Close all other expanded cards
    document.querySelectorAll('.feature-expand.active').forEach(section => {
      section.classList.remove('active');
      section.parentElement.querySelector('.expand-btn').textContent = 'Learn More';
    });
    
    expandSection.classList.add('active');
    btn.textContent = 'Show Less';
  }
}

// Make toggleExpand available globally
window.toggleExpand = toggleExpand;

