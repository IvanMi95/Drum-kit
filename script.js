window.onload = () => {

  document.addEventListener('keydown', function (e) {
    if (e.keyCode == 69) {
      document.getElementById('crash').currentTime = 0
      document.getElementById('crash').play();
    } else if (e.keyCode == 82) {
      document.getElementById('ride').currentTime = 0
      document.getElementById('ride').play();
    } else if (e.keyCode == 70) {
      document.getElementById('floorTom').currentTime = 0
      document.getElementById('floorTom').play();
    } else if (e.keyCode == 86) {
      document.getElementById('highTom').currentTime = 0
      document.getElementById('highTom').play();
    } else if (e.keyCode == 71) {
      document.getElementById('lowTom').currentTime = 0
      document.getElementById('lowTom').play();
    } else if (e.keyCode == 66) {
      document.getElementById('kickOne').currentTime = 0
      document.getElementById('kickOne').play();
    } else if (e.keyCode == 86) {
      document.getElementById('kickTwo').currentTime = 0
      document.getElementById('kickTwo').play();
    } else if (e.keyCode == 74) {
      document.getElementById('snare').currentTime = 0
      document.getElementById('snare').play();
    } else if (e.keyCode == 73) {
      document.getElementById('hiHatOpen').currentTime = 0
      document.getElementById('hiHatOpen').play();
    } else if (e.keyCode == 75) {
      document.getElementById('hiHatOpen').currentTime = 0
      document.getElementById('hiHatOpen').play();
    }

  });
}