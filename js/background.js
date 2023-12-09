const images = ['Picture1.png', 'Picture3.png', 'Picture4.jpg', 'Picture5.jpg', 'Picture6.png', 'Picture7.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

bgImage.src = `src/background/${chosenImage}`;

document.body.appendChild(bgImage);
