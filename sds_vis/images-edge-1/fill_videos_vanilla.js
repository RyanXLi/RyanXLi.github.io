
document.addEventListener('DOMContentLoaded', () => {

    const videos = ['painting_chair2_rgba.mp4', 'SDXL_cake2_rgba.mp4', 'ood-pose_nolicense17_rgba.mp4', 'concave_nolicense6_rgba.mp4', 'real-images_10_rgba.mp4', 'ood-pose_nolicense6_rgba.mp4', 'real-images_000000297147_rgba.mp4', 'concave_nolicense5_rgba.mp4', 'ood-pose_nolicense2_rgba.mp4', 'real-images_000000081394_rgba.mp4'];


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

