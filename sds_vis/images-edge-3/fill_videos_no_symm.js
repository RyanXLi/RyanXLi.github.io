
document.addEventListener('DOMContentLoaded', () => {

    const videos = ['real-images_000000580757_rgba.mp4', 'concave_nolicense4_rgba.mp4', 'real-images_15_rgba.mp4', 'large-fov_car2_rgba.mp4', 'large-fov_000000081394_rgba.mp4', 'SDXL_mug2_rgba.mp4', 'painting_car1_rgba.mp4', 'real-images_000000537241_rgba.mp4', 'SDXL_castle1_rgba.mp4', 'ood-pose_nolicense14_rgba.mp4'];


    const gallery = document.getElementById('video-gallery-no_symm');
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
        sourceElement.src = `videos/no_symm/${video}`;
        sourceElement.type = 'video/mp4';

        videoElement.appendChild(sourceElement);

        // Append the index and video to the container
        container.appendChild(indexElement);
        container.appendChild(videoElement);

        // Append the container to the gallery
        gallery.appendChild(container);
    });
});

