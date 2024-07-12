    document.getElementById('dongho1').addEventListener('click', function() { startClock(0); });
    document.getElementById('stopdongho1').addEventListener('click', function() { stopClock(0); });
    document.getElementById('dongho2').addEventListener('click', function() { startClock(1); });
    document.getElementById('stopdongho2').addEventListener('click', function() { stopClock(1); });
    document.getElementById('dongho3').addEventListener('click', function() { startClock(2); });
    document.getElementById('stopdongho3').addEventListener('click', function() { stopClock(2); });
    document.getElementById('dongho4').addEventListener('click', function() { startClock(3); });
    document.getElementById('stopdongho4').addEventListener('click', function() { stopClock(3); });
    document.getElementById('dungtatca').addEventListener('click', stopAllClocks);


    let clocks = [
        { running: false, elapsedTime: 0, timer: null },
        { running: false, elapsedTime: 0, timer: null },
        { running: false, elapsedTime: 0, timer: null },
        { running: false, elapsedTime: 0, timer: null }
    ];

    function startClock(index) {
        if (!clocks[index].running) {
            clocks[index].running = true;
            clocks[index].startTime = Date.now() - clocks[index].elapsedTime;

            function updateClock() {
                clocks[index].elapsedTime = Date.now() - clocks[index].startTime;

                
                let minutes = Math.floor(clocks[index].elapsedTime / (1000 * 60));
                let seconds = Math.floor((clocks[index].elapsedTime % (1000 * 60)) / 1000);

                
                minutes = minutes.toString().padStart(2, '0');
                seconds = seconds.toString().padStart(2, '0');

                
                document.getElementById(`thoigian${index + 1}`).textContent = `${minutes}:${seconds}`;
            }

        
            clocks[index].timer = setInterval(updateClock, 1000);
        }
    }

    function stopClock(index) {
        if (clocks[index].running) {
            clearInterval(clocks[index].timer); 
            clocks[index].running = false; 
            clocks[index].elapsedTime = 0; 
            document.getElementById(`thoigian${index + 1}`).textContent = '00:00'; 
        }
    }

    function stopAllClocks() {
        for (let i = 0; i < clocks.length; i++) {
            stopClock(i);
        }
    }

