
  const boxes = document.querySelectorAll('.box');

  boxes.forEach(boxitem => {
    boxitem.addEventListener('click', function () {
      // Hide options in all boxes first
      boxes.forEach(b => {
        b.classList.remove('expanded');
      })

      // Show options for the clicked box
      boxitem.classList.add('expanded');
    });
  });


