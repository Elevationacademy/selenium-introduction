var catIndex = 0;
var images = [
  'https://i.ytimg.com/vi/Ri-tkp3IIic/hqdefault.jpg',
  'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
  'https://i.ytimg.com/vi/icqDxNab3Do/maxresdefault.jpg',
  'https://media1.giphy.com/media/5Vy3WpDbXXMze/200_s.gif',
  'http://www.top13.net/wp-content/uploads/2015/10/perfectly-timed-funny-cat-pictures-5.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/5e/43/55/5e4355de4f1aba37be8a9feaf1ba97c7.jpg'
];
var I;

function addCatToDOM() {
  if (catIndex < images.length) {
      var img = new Image();
      img.src = images[catIndex];
      img.id = 'cat_' + catIndex;
      img.onclick = function() {
        setTimeout(setImage.bind(null, this.src), 1000);
      };
      document.body.append(img);
      catIndex++;
  }
}

function setImage(src) {
  clearInterval(I);
  var body = document.body;
  body.style.backgroundImage = 'url(' + src + ')';
  body.innerHTML = '<h1 id="success"></h1>'
}


I = setInterval(addCatToDOM, 500);
