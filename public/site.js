var I;
var catIndex = 0;
var images = [
  'https://i.ytimg.com/vi/Ri-tkp3IIic/hqdefault.jpg',
  'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
  'https://i.ytimg.com/vi/icqDxNab3Do/maxresdefault.jpg',
  'https://media1.giphy.com/media/5Vy3WpDbXXMze/200_s.gif',
  'http://www.top13.net/wp-content/uploads/2015/10/perfectly-timed-funny-cat-pictures-5.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/5e/43/55/5e4355de4f1aba37be8a9feaf1ba97c7.jpg'
];

function addCatImage() {
  if (catIndex < images.length) {
      var img = new Image();
      img.src = images[catIndex];
      img.id = 'cat_' + catIndex;
      img.onclick = () => setBackgroundImage(img.src);
      document.body.appendChild(img);
      catIndex++;
  }
}

function setBackgroundImage(src) {
  clearInterval(I);
  Promise.resolve('using a promise to make this run async').then(() => {
    document.body.style.backgroundImage = `url(${src})`;
    document.body.innerHTML = '<h1 id="success"></h1>'
  });
}

I = setInterval(addCatImage, 500);
