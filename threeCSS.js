let crabCount = 0;
const MAX_CRABS = 6;

function spawnCrab() {
    if (crabCount >= MAX_CRABS) {
        alert("There's no party. I just lost them, stop clicking now.");
        return;
    }
    
    crabCount++;

    document.getElementById('crabCounter').textContent = crabCount + ' Crabs';
    document.getElementById('crabCounter').className = 'badge bg-success';
    
    
    const crab = document.createElement('img');
    crab.src = 'https://png.pngtree.com/png-clipart/20220124/ourmid/pngtree-a-plate-of-crab-free-transparent-elements-png-image_4252917.png';
    crab.style.width = '200px';
    crab.style.height = 'auto';
    crab.style.position = 'absolute';
    crab.style.left = Math.random() * 90 + '%';
    crab.style.top = (70 + Math.random() * 25) + '%';
    crab.style.animation = 'crabWalk 2s ease-in-out';
    document.getElementById('crabZone').appendChild(crab);
    
}