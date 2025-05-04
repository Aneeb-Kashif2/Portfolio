let text = ["GRAPHIC DESIGNER", "MERN STACK DEVELOPER", "C++ PROGRAMMER" , "JAVA PROGRAMMER" , "PYTHON PROGRAMMER "];
let currentTextIndex = 0;
let currentCharIndex = 0;
let textSpeed = 150; // Speed of typing (in ms)
let intro = document.querySelectorAll(".js-intro"); // Query all elements with the class js-intro

function changeText() {
  if (currentTextIndex < text.length) {
    let currentWord = text[currentTextIndex];
    intro.forEach(function (el) {
      el.innerHTML = "I_"; // Add blinking cursor to all js-intro elements
    });
    
    // Typing effect for each word
    setTimeout(function typeWord() {
      if (currentCharIndex < currentWord.length) {
        intro.forEach(function (el) {
          el.innerHTML = currentWord.substring(0, currentCharIndex + 1) + "_"; // Append each character with the blinking cursor
        });
        currentCharIndex++;
        setTimeout(typeWord, textSpeed);
      } else {
        setTimeout(function () {
          currentTextIndex++; // Move to the next word
          currentCharIndex = 0;
          changeText(); // Restart typing for the next word
        }, 1000); // Wait for 1 second before starting the next word
      }
    }, textSpeed);
  } else {
    currentTextIndex = 0; // Reset to start over
    changeText(); // Restart the animation
  }
}

window.onload = changeText;



document.addEventListener('scroll', function () {

  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const logo = document.querySelector('#logos');
  const prjBtn = document.querySelector('.prj-btn');

  if (window.scrollY > 50) {
      navbar.style.setProperty('background-color', 'rgba(249, 247, 247, 0.9)', 'important');
      logo.style.color = 'white';
      prjBtn.style.backgroundColor = 'white';
      prjBtn.style.color = 'black';
      navLinks.forEach(link => {
          link.style.color = 'white';
      });
  } else {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
      logo.style.color = 'white';
      prjBtn.style.backgroundColor = 'white';
      prjBtn.style.color = 'black';
      navLinks.forEach(link => {
          link.style.color = 'white';
      });
  }
});
