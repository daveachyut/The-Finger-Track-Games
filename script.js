// Create global variables
const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');
const ringElement = document.getElementsByClassName('product-hero-image')[0];

/*
 * Calculates the angle between AB and the X axis
 * A and B are points (ax,ay) and (bx,by)
 */
function getAngleDeg(ax,ay,bx,by) {
  var angleRad = Math.atan((ay-by)/(ax-bx));
  var angleDeg = angleRad * 180 / Math.PI;
  
  return(angleDeg);
}

/*
 * Calculates the Euclidean distance between A and B
 * X is an array of all landmark points
 * A and B are points p1 and p2
 */
function Euclidean(X, p1, p2) {
  var x_1 = X[p1]['x']
  var x_2 = X[p2]['x']
  
  var y_1 = X[p1]['y']
  var y_2 = X[p2]['y']
  
  var Dist = Math.pow((x_1 - x_2), 2) + Math.pow((y_1 - y_2), 2);
  
  return(Math.sqrt(Dist));
}

function onResults(results) {
  canvasCtx.save();

  // Initialize canvas
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

  canvasCtx.drawImage(
      results.image, 0, 0, canvasElement.width, canvasElement.height);

  // If Landmarks are available
  if (results.multiHandLandmarks) {
	  
	// For all 21 points
    for (const landmarks of results.multiHandLandmarks) {
      
	  // Draw connectors
	  drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
                     {color: '#00FF00', lineWidth: 5});
      
	  // Draw landmarks
	  drawLandmarks(canvasCtx, landmarks, {color: '#FF0000', lineWidth: 2});
	  
	  canvasCtx.save();
        
	  var X = landmarks;
	  
	  var mouse1_X = X[7]['x']
	  var mouse1_Y = X[7]['y']

	  var mouse2_X = X[8]['x']
	  var mouse2_Y = X[8]['y']
	 
	  var mouseX = X[8]['x']
	  var mouseY = X[8]['y']
	  
  	  var ringAngle = getAngleDeg(mouse1_X, mouse1_Y, mouse2_X, mouse2_Y);
	  
	  /*canvasCtx.drawImage(
        ringElement, (mouseX * canvasElement.width) - 23, (mouseY * canvasElement.height) - 8, ringElement.width, ringElement.height);*/
  
	  var x_scale = Euclidean(X, 12, 16);
      var y_scale = Euclidean(X, 6, 7);

	  if (ringAngle < 270){
	    var firingAngle = ringAngle + 90;
	  }
	  else {
	    var firingAngle = ringAngle - 90;
	  }

      ringElement.width = 39
	  ringElement.height = 20

	  var x_s = x_scale / 0.03
	  var y_s = y_scale / 0.05

	  //function drawImage(ctx, image, x, y, w, h, degrees){
	  canvasCtx.save();
	  
      // Move registration point to the center of the canvas
      canvasCtx.translate((mouseX * canvasElement.width + ringElement.width / 2) - 20, (mouseY * canvasElement.height + ringElement.height / 2) - 10);
      canvasCtx.rotate(firingAngle * Math.PI/180.0);
      canvasCtx.scale(x_s, y_s)
	  canvasCtx.translate(-(ringElement.width / 2) + 20, -(ringElement.height / 2) + 10);

      //canvasCtx.drawImage(ringElement, (mouseX * canvasElement.width) - 20, (mouseY * canvasElement.height) - 10, ringElement.width, ringElement.height);
      canvasCtx.drawImage(ringElement, -20, -10, ringElement.width, ringElement.height);
      
	  //context.setTransform(1,0,0,1,0,0)
	  canvasCtx.restore();
    //}
	
    }
  }
  canvasCtx.restore();
}

// Initialize hands
const hands = new Hands({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.1/${file}`;
}});

// Set parameters for hands
hands.setOptions({
  maxNumHands: 1,
  minDetectionConfidence: 0.61,
  minTrackingConfidence: 0.61
});
hands.onResults(onResults);

// Initialize camera
const camera = new Camera(videoElement, {
  onFrame: async () => {
    await hands.send({image: videoElement});
  },
  width: 1280,
  height: 720
});

// Start camera
camera.start();
/*$('.product-hero-image').css('z-index', '0');*/