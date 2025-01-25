let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-image');
if (images.length > 0) {
  images[currentImageIndex].style.display = 'block';

  document.getElementById('prev').addEventListener('click', () => {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    images[currentImageIndex].style.display = 'block';
  });

  document.getElementById('next').addEventListener('click', () => {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
  });
}


function submitQuiz() {
  const question1 = document.getElementById('question1').value;
  const question2 = document.getElementById('question2').value;
  document.getElementById('quiz-result').textContent = `Your ideal style is ${question1} & ${question2} style!`;
}

async function fetchJoke() {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
    const data = await response.json();
    document.getElementById('joke-content').textContent = `${data.setup} - ${data.punchline}`;
  } catch (error) {
    document.getElementById('joke-content').textContent = "Oops! Couldn't load a joke.";
  }
}
