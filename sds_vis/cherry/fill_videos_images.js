
document.addEventListener('DOMContentLoaded', () => {

    const videos = ['ood-pose_nolicense12.mp4', 'cake3.mp4', 'ACE_Coffee_Mug_Kristen_16_oz_cup_0009.mp4', 'concave_9.mp4', 'mug2.mp4', 'car2.mp4', 'adapter.mp4', 'MINI_EXCAVATOR_0012.mp4', 'cake2.mp4', 'concave_nolicense4.mp4', 'ood-pose_nolicense11.mp4', 'basket1.mp4', 'large-fov_nolicense3.mp4', 'composite-object_nolicense14.mp4', 'chair1.mp4', 'RJ_Rabbit_Easter_Basket_Blue_0013.mp4', 'ood-pose_000000578792.mp4', 'SORTING_TRAIN_0004.mp4', 'ood-pose_nolicense1.mp4', 'sculpture1.mp4', 'concave_1.mp4', 'monster.mp4', 'hedgedog.mp4', 'ood-pose_nolicense2.mp4', 'BUNNY_RACER_0013.mp4', 'sculpture2.mp4'];


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
        sourceElement.src = `videos/crm/${video}`;
        sourceElement.type = 'video/mp4';

        videoElement.appendChild(sourceElement);

        // Append the index and video to the container
        container.appendChild(indexElement);
        container.appendChild(videoElement);

        // Append the container to the gallery
        gallery.appendChild(container);
    });
});

