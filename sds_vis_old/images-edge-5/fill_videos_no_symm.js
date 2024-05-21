
document.addEventListener('DOMContentLoaded', () => {

    const videos = ['SDXL_cake3_rgba.mp4', 'SDXL_cake1_rgba.mp4', 'ood-pose_nolicense5_rgba.mp4', 'real-images_000000552902_rgba.mp4', 'real-images_000000029393_rgba.mp4', 'real-images_000000556873_rgba.mp4', 'real-images_shaker-no-7-rocking-chair-rocking-chair-18781910-ch-18460985-2-fcd1cd_rgba.mp4', 'real-images_000000036861_rgba.mp4', 'painting_car2_rgba.mp4', 'fine-detail_2_rgba.mp4'];


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

