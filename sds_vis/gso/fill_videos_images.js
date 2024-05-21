
document.addEventListener('DOMContentLoaded', () => {

    const videos = ['Poppin_File_Sorter_Blue_0008.mp4', 'GRANDFATHER_DOLL_0009.mp4', 'Schleich_S_Bayala_Unicorn_70432_0005.mp4', 'ACE_Coffee_Mug_Kristen_16_oz_cup_0009.mp4', '2_of_Jenga_Classic_Game_0011.mp4', '3D_Dollhouse_Happy_Brother_0014.mp4', 'MINI_EXCAVATOR_0012.mp4', 'CHICKEN_RACER_0004.mp4', '60_CONSTRUCTION_SET_0008.mp4', '3D_Dollhouse_Sink_0007.mp4', 'RJ_Rabbit_Easter_Basket_Blue_0013.mp4', 'Reebok_ALLYLYNN_0008.mp4', 'CASTLE_BLOCKS_0009.mp4', 'Racoon_0005.mp4', '3D_Dollhouse_TablePurple_0011.mp4', 'SORTING_TRAIN_0004.mp4', 'Animal_Planet_Foam_2Headed_Dragon_0015.mp4', 'BUNNY_RACER_0013.mp4'];


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

