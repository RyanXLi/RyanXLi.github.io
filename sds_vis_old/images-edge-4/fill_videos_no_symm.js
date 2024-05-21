
document.addEventListener('DOMContentLoaded', () => {

    const videos = ['fine-detail_shaker-no-7-rocking-chair-rocking-chair-18781910-ch-18460985-2-fcd1cd_rgba.mp4', 'composite-object_nolicense15_rgba.mp4', 'real-images_000000519611_rgba.mp4', 'deformable_horse2_rgba.mp4', 'transparent_15_rgba.mp4', 'painting_nolicense9_rgba.mp4', 'concave_5_rgba.mp4', 'real-images_000000181816_rgba.mp4', 'SDXL_mug1_rgba.mp4', 'ood-pose_nolicense1_rgba.mp4'];


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

