document.addEventListener('DOMContentLoaded', () => {
    const videos = [
        "02691156_172764bea108bbcceae5a783c313eb36_0000.mp4",
        "02691156_5608c1b40a0c2fc9c2912ef1a1302821_0000.mp4",
        "02691156_5c6590461085c93ea91e80f26309099e_0000.mp4",
        "02691156_f0bd0660d9cec23cf2b0736dd4d8afe0_0000.mp4",
        "faucet_27fcbef035fd4993b39b062a2a86385e_0017_rgba.mp4",
        "faucet_27fcbef035fd4993b39b062a2a86385e_0018_rgba.mp4",
        "glasses_004_0003_rgba.mp4",
        "joystick_001_0004_rgba.mp4",
        "timer_010_0002_rgba.mp4",
        "timer_011_0002_rgba.mp4",
        "toy_aerocraft_white_fighter1_0374_rgba.mp4",
        "toy_boat_042_0004_rgba.mp4",
        "toy_boat_059_0003_rgba.mp4",
        "toy_boat_064_0004_rgba.mp4",
        "toy_car_007_0000_rgba.mp4",
        "toy_car_007_0002_rgba.mp4",
    ];

    // const gallery = document.getElementById('video-gallery-dg');
    // videos.forEach(video => {
        
    //     const videoElement = document.createElement('video');
    //     // videoElement.id = 'dollyzoom';
    //     videoElement.autoplay = true;
    //     videoElement.controls = true;
    //     videoElement.muted = true;
    //     videoElement.loop = true;
    //     videoElement.playsInline = true;
    //     videoElement.margin = "10px";
    //     videoElement.height = "200px";

    //     const sourceElement = document.createElement('source');
    //     sourceElement.src = `videos/dg/${video}`;
    //     sourceElement.type = 'video/mp4';

    //     videoElement.appendChild(sourceElement);
    //     gallery.appendChild(videoElement);
    // });

    const gallery = document.getElementById('video-gallery-dg');
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
        sourceElement.src = `videos/dg/${video}`;
        sourceElement.type = 'video/mp4';

        videoElement.appendChild(sourceElement);

        // Append the index and video to the container
        container.appendChild(indexElement);
        container.appendChild(videoElement);

        // Append the container to the gallery
        gallery.appendChild(container);
    });
});
