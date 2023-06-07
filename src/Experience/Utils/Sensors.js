export default class Sensors {
  constructor() {
    this.x = 0;
    this.y = 0;

    this.btn = document.getElementById("request")
    this.text = document.getElementById("text")

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