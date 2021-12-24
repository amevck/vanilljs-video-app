(function App() {
    const video = document.getElementById('videoplayer');
    const seekBarDiv = document.getElementById('seek-bar');
    const seekBar = document.getElementById('seek-bar-input');
    document.getElementById('thumbnail').style.display = 'none';
    // Positions of markers in seconds.
    const positions = [4];
    const thumbnailStart = 4;
    const thumbnailEnd = 60;

    // Event listener for the seek bar
    seekBar.addEventListener('change', function () {
        var time = video.duration * (seekBar.value / 100);
        video.currentTime = time;
    });

    // Update the seek bar as the video plays
    video.addEventListener('timeupdate', function () {
        const value = (100 / video.duration) * video.currentTime;
        if (video.currentTime >= thumbnailStart && video.currentTime <= thumbnailEnd) {
            document.getElementById('thumbnail').style.display = '';
        }
        else {
            document.getElementById('thumbnail').style.display = 'none';
        }
        seekBar.value = value;
    });


    // change video progress when click on seek bar
    seekBar.addEventListener('mouseup', function () {
        var time = video.duration * (seekBar.value / 100);
        console.log(time);
        video.currentTime = time;
    });

    // add data point on the seek bar
    video.addEventListener('loadedmetadata', () => {
        positions.forEach(function (position) {
            if (position <= video.duration) {
                const left = (position / video.duration) * 100 + '%';
                const marker = document.createElement('div');
                marker.setAttribute('id', 'marker');
                marker.classList.add('bubles');
                marker.style.left = left;
                seekBarDiv.appendChild(marker);
            }
        });
    });
})();
