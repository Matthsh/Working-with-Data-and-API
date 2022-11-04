// script for ./index.html


function setup() {
    noCanvas();
    const video = createCapture(VIDEO)
    video.size(320, 240);

    /* Using geolocator to fetch your location */
    let lat, lon;
    
    const button = document.getElementById("submit");
    button.addEventListener("click", async (event) => {
      const nome = document.getElementById("nome").value;
      video.loadPixels();
      const image64 = video.canvas.toDataURL();

      const data = { lat, lon, nome, image64 };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      };
      const response = await fetch('/api', options)
      const res_to_json = await response.json();
      console.log(res_to_json)

    });
    
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        document.getElementById("latitude").innerText = lat;
        document.getElementById("longitude").innerText = lon;
      });
    } else {
      console.log("geolocation not available")
    };
  }