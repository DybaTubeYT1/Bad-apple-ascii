
const density = "Ñ@#W$9876543210?!abc;:+=-,._      ";

const videoPaths = ['BadApple.mp4', 'cool.mp4', 'bruh.mp4']

var videos
let asciiDiv


function setup() {
  noCanvas()

  const loadVideos = (i = -1) => {
    i ++;
    if (i <= videoPaths.length - 1){
          videos[i] = createVideo(videoPaths[i], loadVideo(i));
   } else {
          videos[i] = createVideo(videoPaths[i]);
   }
   
  }


  videos = createVideo('badapple.mp4')
  videos.size(48,36)
  videos.hide()
  videos.loop()
  videos.volume(1)

  asciiDiv = createDiv();
}



function draw() {
  videos.loadPixels()
  let asciiImage = "";
  for (let j = 0; j < videos.height; j++) {
    for (let i = 0; i < videos.width; i++) {
      const pixelIndex = (i + j * videos.width) * 4;
      const r = videos.pixels[pixelIndex + 0];
      const g = videos.pixels[pixelIndex + 1];
      const b = videos.pixels[pixelIndex + 2];
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
