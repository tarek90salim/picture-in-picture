const videoElement = document.getElementById("video");
const btn = document.getElementById("btn");

// Prompt user to select a media stream, pass it to video element, and play it
async function selectMediaStream () {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // catch error here
        console.log(error);
    }
}

btn.addEventListener("click", async () => {
    // disable button
    btn.disabled = true;
    // Start Pic-in-pic
    await videoElement.requestPictureInPicture();
    // Reset button
    btn.disabled = false;
});

// On load
selectMediaStream();