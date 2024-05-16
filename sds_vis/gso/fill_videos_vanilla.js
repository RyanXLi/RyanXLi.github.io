
document.addEventListener('DOMContentLoaded', () => {

    const videos = ['Poppin_File_Sorter_Blue_0008_rgba.mp4', '3D_Dollhouse_Happy_Brother_0014_rgba.mp4', '2_of_Jenga_Classic_Game_0011_rgba.mp4', '3D_Dollhouse_Sink_0007_rgba.mp4', 'RJ_Rabbit_Easter_Basket_Blue_0013_rgba.mp4', 'BUNNY_RACER_0013_rgba.mp4', 'GRANDFATHER_DOLL_0009_rgba.mp4', 'ACE_Coffee_Mug_Kristen_16_oz_cup_0009_rgba.mp4', 'Reebok_ALLYLYNN_0008_rgba.mp4', 'MINI_EXCAVATOR_0012_rgba.mp4'];


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

