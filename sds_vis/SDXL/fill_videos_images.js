
document.addEventListener('DOMContentLoaded', () => {

    const videos = ['cake2_rgba.mp4', 'cake3_rgba.mp4', 'castle-cake1_rgba.mp4', 'mug1_rgba.mp4', 'cake1_rgba.mp4', 'horse2_rgba.mp4', 'sculpture1_rgba.mp4', 'character1_rgba.mp4', 'car2_rgba.mp4', 'sculpture4_rgba.mp4', 'mug2_rgba.mp4', 'sculpture2_rgba.mp4', 'basket1_rgba.mp4', 'chair1_rgba.mp4', 'sculpture5_rgba.mp4', 'castle1_rgba.mp4'];


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

