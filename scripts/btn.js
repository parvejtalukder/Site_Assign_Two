// Learned From W3 School
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.card-btn');  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Flower Added to Cart');
    });
  });
});
