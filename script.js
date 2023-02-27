/* Channel ID: 6RvSLPdFbOiDxp8o */
let dovati;

const drone = new Scaledrone("6RvSLPdFbOiDxp8o");
console.log(drone);

drone.on("open", (error) => {
  if (error) {
    return console.error(error);
  }
});
const room = drone.subscribe("my-room");

room.on("open", (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Connected to room");
  }
});

function sandData() {
  dovati = document.getElementById("faj").value;
  console.log(dovati);
  drone.publish({
    room: "my-room",
    message: { poruka: dovati, score: 42 },
  });

  room.on("message", (message) => console.log("Received data:", message.data));
}
