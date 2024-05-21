
document.addEventListener('DOMContentLoaded', () => {

    const videos = ['SDXL_sculpture2_rgba.mp4', 'real-images_000000471869_rgba.mp4', 'SDXL_sculpture4_rgba.mp4', 'painting_horse2_rgba.mp4', 'real-images_1_rgba.mp4', 'SDXL_sculpture1_rgba.mp4', 'ood-pose_nolicense13_rgba.mp4', 'real-images_9_rgba.mp4', 'real-images_4_rgba.mp4', 'real-images_000000537053_rgba.mp4'];


    const gallery = document.getElementById('video-gallery-vanilla');
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

