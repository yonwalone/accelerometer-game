export default class Sensors {
  constructor() {
    this.x = 0;
    this.y = 0;

    this.btn = document.getElementById("request")
    this.text = document.getElementById("text")

    // Hide the button and text initially
    this.btn.style.opacity = '0'
    this.text.style.opacity = '0'

    setTimeout(() => {
      this.text.style.opacity = '1'
    }, 500)

    // Add a timeout to show the button and text after five seconds
    setTimeout(() => {
      this.btn.style.opacity = '1'
    }, 3000)

    this.btn.addEventListener("click", this.permission.bind(this))
  }

  permission() {
    console.log('Permission clicked.')
    if ( typeof( DeviceMotionEvent ) !== "undefined" && typeof( DeviceMotionEvent.requestPermission ) === "function" ) {
      DeviceMotionEvent.requestPermission().then(response => {
          if (response == "granted") {
            this.btn.style.visibility='hidden'
            this.text.style.visibility='hidden'
            window.addEventListener( "devicemotion", (e) => {
                this.x = e.accelerationIncludingGravity.x * 0.4
                this.y = e.accelerationIncludingGravity.y * 0.4
            })
          }
      })
          .catch(console.error)
    } else {
        alert("DeviceMotionEvent is not defined");
    }
  }
}