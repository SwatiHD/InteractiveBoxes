document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', function (e) {
    // Prevent toggling if the user clicked a select box
    if (e.target.tagName === 'SELECT' || e.target.tagName === 'OPTION') {
      return;
    }

    // Remove active from all boxes if you want only one open at a time
    document.querySelectorAll('.box').forEach(b => b.classList.remove('active'));

    // Add active to clicked box
    this.classList.add('active');
  });
});

function changeColor(selectElement, boxId) {
  const box = document.getElementById(boxId);
  box.style.backgroundColor = selectElement.value || '#ccc';
}

function changeSize(selectElement, boxId) {
  const box = document.getElementById(boxId);
  box.classList.remove('small', 'medium', 'large');

  if (selectElement.value) {
    box.classList.add(selectElement.value);
  }
}