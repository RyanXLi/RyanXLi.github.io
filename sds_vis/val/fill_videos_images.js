
document.addEventListener('DOMContentLoaded', () => {

    const videos = ['monster_rgba.mp4', 'hedgedog_rgba.mp4', 'gun2_rgba.mp4', 'stone_bench_rgba.mp4', 'tower_rgba.mp4', 'adapter_rgba.mp4', 'frames_rgba.mp4', 'leg_island_rgba.mp4', 'angrybird_rgba.mp4', 'jet_rgba.mp4'];


    const gallery = document.getElementById('video-gallery-images');
    videos.forEach((video, index) => {
        // Create a container div for the index and video
        const container = document.createElement('div');
        container.classList.add('video-container');

        // Create a p element for the index
        const indexElement = document.createElement('p');
        indexElement.textContent = `Video ${index + 1}`;

        // Create the video element
        const videoElement = document.createElement('video');
        videoElement.autoplay = false;
        videoElement.controls = true;
        videoElement.muted = true;
        videoElement.loop = true;
        videoElement.playsInline = true;

        const sourceElement = document.createElement('source');
        sourceElement.src = `videos/vanilla/${video}`;
        sourceElement.type = 'video/mp4';

        videoElement.appendChild(sourceElement);

        // Append the index and video to the container
        container.appendChild(indexElement);
        container.appendChild(videoElement);

        // Append the container to the gallery
        gallery.appendChild(container);
    });
});

