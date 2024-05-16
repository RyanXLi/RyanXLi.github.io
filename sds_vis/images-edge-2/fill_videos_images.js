
document.addEventListener('DOMContentLoaded', () => {

    const videos = ['concave_9_rgba.mp4', 'composite-object_5_rgba.mp4', 'SDXL_horse2_rgba.mp4', 'real-images_13_rgba.mp4', 'SDXL_basket1_rgba.mp4', 'transparent_16_rgba.mp4', 'deformable_000000552902_rgba.mp4', 'composite-object_nolicense14_rgba.mp4', 'ood-pose_nolicense4_rgba.mp4', 'concave_nolicense15_rgba.mp4'];


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

