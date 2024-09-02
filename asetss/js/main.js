document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('video:not(.not)');
    
    videos.forEach(video => {
        video.addEventListener('mouseenter', () => {
            video.play();
        });
        
        video.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    });
});
