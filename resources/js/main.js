const openTab = (event, appName) => {
  // Get all elements with class="tabcontent" and hide them
  document.querySelectorAll('.tabcontent').forEach((elem) => {
    elem.style.display = 'none';
  });

  // Get all elements with class="tablinks" and remove the class "active"
  document.querySelectorAll('.tablinks').forEach((elem) => {
    elem.classList.remove('active');
  });

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(appName).style.display = 'block';
  event.currentTarget.classList.add('active');
};

document.querySelector('#defaultOpen').click();
