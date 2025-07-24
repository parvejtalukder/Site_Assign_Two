const buttons = document.querySelectorAll('.cards-btn');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Flower Added to Cart');
  });
});
