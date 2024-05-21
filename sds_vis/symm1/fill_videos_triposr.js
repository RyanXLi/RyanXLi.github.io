
document.addEventListener('DOMContentLoaded', () => {

    const videos = ['artefact1.mp4', 'plane2.mp4', 'umbrella2.mp4', 'dragon2.mp4', 'character4.mp4', 'tank1.mp4', 'character1.mp4', 'tank2.mp4', 'glasses3.mp4', 'dragon4.mp4', 'artefact5.mp4', 'tank6.mp4', 'artefact3.mp4', 'glasses2.mp4', 'plane7.mp4', 'plane6.mp4', 'dragon3.mp4', 'car1.mp4', 'tank7.mp4', 'character2.mp4', 'plane5.mp4', 'toy1.mp4', 'umbrella1.mp4', 'umbrella3.mp4', 'glasses4.mp4', 'gun1.mp4', 'plane1.mp4', 'character3.mp4', 'tank5.mp4', 'dragon1.mp4', 'artefact2.mp4', 'character5.mp4', 'artefact4.mp4', 'glasses1.mp4'];


    const gallery = document.getElementById('video-gallery-triposr');
    videos.forEach((video, index) => {
        // Create a container div for the index and video
        const container = document.createElement('div');
        container.classList.add('video-container');

        // Create a p element for the index
        const indexElement = document.createElement('p');
        indexElement.textContent = `Video ${index + 1}`;

        // Create the video element
        const videoElement = document.createElement('video');
        videoElement.autoplay = true;
        videoElement.controls = true;
        videoElement.muted = true;
        videoElement.loop = true;
        videoElement.playsInline = true;

        const sourceElement = document.createElement('source');
        sourceElement.src = `videos/triposr/${video}`;
        sourceElement.type = 'video/mp4';

        videoElement.appendChild(sourceElement);

        // Append the index and video to the container
        container.appendChild(indexElement);
        container.appendChild(videoElement);

        // Append the container to the gallery
        gallery.appendChild(container);
    });
});

