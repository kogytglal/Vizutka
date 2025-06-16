
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.achievements li');
  items.forEach((item, index) => {
    setTimeout(() => {
      item.style.transition = 'all 0.6s ease-in-out';
      item.style.transform = 'scale(1.05)';
      item.style.backgroundColor = '#90caf9';
    }, index * 400);
  });
});