const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('nav a');

links.forEach((link, index) => {
  link.addEventListener('click', () => {
    sections.forEach(section => section.classList.remove('active'));
    links.forEach(link => link.classList.remove('active'));
    sections[index].classList.add('active');
    link.classList.add('active');
  });
});