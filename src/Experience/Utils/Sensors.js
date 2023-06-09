export default class Sensors {
  constructor() {
    this.x = 0;
    this.y = 0;

    this.btn = document.getElementById("request");
    this.text = document.getElementById("text");

    // Hide the button and text initially
    this.btn.style.opacity = '0';
    this.text.style.opacity = '0';

    setTimeout(() => {
      this.text.style.opacity = '1';
    }, 500);

    // Add a timeout to show the button and text after five seconds
    setTimeout(() => {
      this.btn.style.opacity = '1';
    }, 3000);

    this.btn.addEventListener("click", this.permission.bind(this));
  }

  permission() {
    console.log('Permission clicked.');
    if (typeof(DeviceMotionEvent) !== "undefined" && typeof(DeviceMotionEvent.requestPermission) === "function") {
      DeviceMotionEvent.requestPermission().then(response => {
        if (response == "granted") {
          this.btn.style.visibility = 'hidden';
          this.text.style.visibility = 'hidden';
          window.addEventListener("devicemotion", this.handleMotion.bind(this));
        }
      })
      .catch(console.error);
    } else if (typeof(DeviceMotionEvent) === "undefined" && typeof(AbsoluteOrientationSensor) === "function") {
      const options = { frequency: 60 }; // Adjust the frequency as needed
      const sensor = new AbsoluteOrientationSensor(options);
      sensor.addEventListener("reading", this.handleMotion.bind(this));
      sensor.start();
    } else {
      alert("DeviceMotionEvent and AbsoluteOrientationSensor are not supported on this device.");
    }
  }

  handleMotion(event) {
    if (event instanceof DeviceMotionEvent) {
      this.x = event.accelerationIncludingGravity.x * 0.4;
      this.y = event.accelerationIncludingGravity.y * 0.4;
    } else if (event instanceof AbsoluteOrientationSensor) {
      this.x = event.quaternion[0] * 0.4; // Adjust the values as needed
      this.y = event.quaternion[1] * 0.4;
    }
  }
}