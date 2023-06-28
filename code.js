window.addEventListener('mouseout', function(e) {
    if (e.clientY < -5 && e.clientX > 1450) 
    {
      document.getElementById('exit-popup').style.display = 'block';
    }
    });
  
  document.getElementById('exit-popup').addEventListener('click', function(e) {
    if (e.target === this)
    {
      this.style.display = 'none';
    }
  });
  