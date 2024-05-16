
document.addEventListener('DOMContentLoaded', () => {

    const videos = ['real-images_5_rgba.mp4', 'SDXL_sculpture5_rgba.mp4', 'concave_000000081394_rgba.mp4', 'concave_10_rgba.mp4', 'SDXL_chair1_rgba.mp4', 'large-fov_nolicense8_rgba.mp4', 'fine-detail_000000081394_rgba.mp4', 'large-fov_nolicense3_rgba.mp4', 'SDXL_castle-cake1_rgba.mp4', 'real-images_2_rgba.mp4'];


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

