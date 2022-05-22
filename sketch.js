
const density = "Ñ@#W$9876543210?!abc;:+=-,._      ";

const videoPaths = ['BadApple.mp4', 'cool.mp4', 'bruh.mp4']

var video = createVideo('BadApple.mp4')

let asciiDiv


function setup() {
  noCanvas()



  video.play()
  video.size(48,36)
  video.hide()
  video.loop()
  video.volume(1)


  asciiDiv = createDiv();
}



function draw() {
  video.loadPixels()
  let asciiImage = "";
  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      const charIndex = floor(map(avg, 0, 255, 0, 29));
      const c = density.charAt(charIndex);
      if (c == ' ') asciiImage += "&nbsp;";
      else asciiImage += c;
    }
    asciiImage += '<br/>';
  }
  asciiDiv.html(asciiImage);
}
