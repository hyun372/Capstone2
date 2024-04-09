var initialStatusData = [
    { networkOK: true, playOK: false },
    { networkOK: true, playOK: false },
    { networkOK: true, playOK: false },
    { networkOK: true, playOK: false },
];

function updateStatus(networkOK, playOK, statusNumber) {
    var networkElement = document.getElementById('networkStatus-text__' + statusNumber);
    var networkChip = document.getElementById('networkStatus-chip__' + statusNumber);
    var playElement = document.getElementById('playStatus-text__' + statusNumber);
    var playChip = document.getElementById('playStatus-chip__' + statusNumber);
    
    // Check if any element is null before updating
    if (networkElement && networkChip && playElement && playChip) {
        networkElement.textContent = networkOK ? '네트워크 정상' : '네트워크 비정상';
        networkChip.style.backgroundColor = networkOK ? 'rgba(24, 255, 24, .87)' : 'rgba(255, 24, 24, .87)';
    
        playElement.textContent = playOK ? '플레이 가능' : '플레이 불가능';
        playChip.style.backgroundColor = playOK ? 'rgba(24, 255, 24, .87)' : 'rgba(255, 24, 24, .87)';
    } else {
        console.error('One or more elements not found for statusNumber: ' + statusNumber);
    }
}

window.onload = function() {
    // Apply initial status data to the page
    initialStatusData.forEach(function(status, index) {
        updateStatus(status.networkOK, status.playOK, index);
    });
};

window.onwheel = function() {
    // Update status for the first chip when wheel event occurs
    updateStatus(true, true, 0);
};

console.log('statusUpdate.js loaded');
