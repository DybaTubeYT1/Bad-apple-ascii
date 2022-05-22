
const density = "Ñ@#W$9876543210?!abc;:+=-,._         ";


let video;
let asciiDiv;
let playing = true;

function setup() {
  createCanvas()

  video = createVideo('badapple.mp4');
  video.size(48,36);
  video.volume(1)
  video.loop()

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
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0, 29));
      const c = density.charAt(charIndex);
      if (c == ' ') asciiImage += "&nbsp;";
      else asciiImage += c;
    }
    asciiImage += '<br class="ASCII"/>';
  }
  asciiDiv.html(asciiImage);
}
