
document.addEventListener('DOMContentLoaded', () => {

    const videos = ['panda1.mp4', 'cake3.mp4', 'sculpture3.mp4', 'koala2.mp4', 'mug2.mp4', 'car2.mp4', 'mug1.mp4', 'character1.mp4', 'tiger1.mp4', 'cake2.mp4', 'cake1.mp4', 'horse2.mp4', 'horse1.mp4', 'basket1.mp4', 'castle1.mp4', 'castle-cake1.mp4', 'chair1.mp4', 'sculpture1.mp4', 'koala1.mp4', 'sculpture5.mp4', 'cat1.mp4', 'sculpture2.mp4', 'sculpture4.mp4'];


    const gallery = document.getElementById('video-gallery-crm');
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

