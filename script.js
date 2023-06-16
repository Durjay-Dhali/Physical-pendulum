window.onload = function() {
    const pendulum = document.querySelector('.pendulum');
    const switchToggle = document.getElementById('switch');
  
    switchToggle.addEventListener('change', function() {
      if (switchToggle.checked) {
        pendulum.style.animationPlayState = 'running';
        document.querySelector('.switch-label').textContent = 'Turn Off';
      } else {
        pendulum.style.animationPlayState = 'paused';
        document.querySelector('.switch-label').textContent = 'Turn On';
      }
    });
  };
  