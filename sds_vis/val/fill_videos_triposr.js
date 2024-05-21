
document.addEventListener('DOMContentLoaded', () => {

    const videos = ['frames.mp4', 'gun.mp4', 'angrybird.mp4', 'stone_bench.mp4', 'adapter.mp4', 'jet.mp4', 'gun2.mp4', 'tower.mp4', 'warrior.mp4', 'monster.mp4', 'hedgedog.mp4', 'leg_island.mp4'];


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

