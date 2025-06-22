

var typed = new Typed(".auto-type", {
          strings: ["programmer!", "developer!", "writer!", "artist!"],
          typeSpeed: 250,
          backSpeed: 250,
          loop:true
        });

          const cd = document.getElementById('cd');
          const audio = document.getElementById('audio');
          const skipBack = document.getElementById('skip-back');
          const skipForward = document.getElementById('skip-forward');

        
          const tracks = [
            {
              title: "Love Between... - Kali Uchis",
              audioSrc: "audios/Love Between... - Kali Uchis.mp3",
              imgSrc: "photos/Kali Uchis - ‘Red Moon In Venus’ CD.jpg"
            },
            {
              title: "WUSYANAME - Tyler, The Creator",
              audioSrc: "audios/WUSYANAME (Audio) - Tyler, The Creator.mp3",
              imgSrc: "photos/CMIYGL.png"
            },
            {
              title: "Hoe Cakes - MF DOOM",
              audioSrc: "audios/MF DOOM - Hoe Cakes (Official Audio) - MF DOOM.mp3",
              imgSrc: "photos/MMFOOD.png"
            },
            {
              title: "Nujabes - Lady Brown",
              audioSrc: "audios/Nujabes - Lady Brown (feat. Cise Starr from CYNE) [Official Audio] - Nujabes.mp3",
              imgSrc: "photos/Nujabes CD.png"
            },
            {
              title: "Superfast Jellyfish - Gorillaz",
              audioSrc: "audios/Superfast Jellyfish.mp3",
              imgSrc: "photos/Gorillaz.png"
            },
            {
              title: "Jamiroquai - Talullah",
              audioSrc: "audios/Jamiroquai - Talullah (Audio) - JamiroquaiVEVO.mp3",
              imgSrc: "photos/Jamir Dynamite.png"
            },
            {
              title: "Odd Ones - Seatbelts",
              audioSrc: "audios/Odd Ones - Seatbelts.mp3",
              imgSrc: "photos/Vitaminless - Cowboy Bebop.png"
            },
            {
              title: "Misty - Laufey",
              audioSrc: "audios/Misty - Laufey(1).mp3",
              imgSrc: "photos/Adobe Express - file (1).png"
            },

          ];

          let currentTrackIndex = 0;

          function updateTrack(index) {
            const track = tracks[index];
            audio.src = track.audioSrc;
            cd.src = track.imgSrc;

           
            cd.classList.remove('spin');
            void cd.offsetWidth;
            if (!audio.paused) {
              cd.classList.add('spin');
              audio.play();
            }
          }

          cd.addEventListener('click', function () {
            if (audio.paused) {
              cd.classList.add('spin');
              audio.play();
            } else {
              cd.classList.remove('spin');
              audio.pause();
            }
          });

       
          skipBack.addEventListener('click', () => {
            currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
            updateTrack(currentTrackIndex);
          });

          skipForward.addEventListener('click', () => {
            currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
            updateTrack(currentTrackIndex);
          });

          
          window.addEventListener('load', () => {
            updateTrack(currentTrackIndex);
          });

          function updateTrack(index) {
          const track = tracks[index];
          audio.src = track.audioSrc;
          cd.src = track.imgSrc;

   
        document.getElementById('now-playing-title').textContent = track.title;

        cd.classList.remove('spin');
        void cd.offsetWidth;
        if (!audio.paused) {
          cd.classList.add('spin');
          audio.play();
        }
      }


      audio.addEventListener('play', () => {
        document.getElementById('now-playing-status').textContent = 'NOW PLAYING:';
        document.getElementById('now-playing-title').textContent = tracks[currentTrackIndex].title;
      });

      audio.addEventListener('pause', () => {
        document.getElementById('now-playing-status').textContent = 'NOW PAUSED:';
        document.getElementById('now-playing-title').textContent = tracks[currentTrackIndex].title;
      });