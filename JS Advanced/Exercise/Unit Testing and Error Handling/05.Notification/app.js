function notify(message) {
  const notificationRef = document.getElementById('notification');
  notificationRef.style.display = 'block';
  notificationRef.textContent = message;

  notificationRef.addEventListener('click', (e)=>{
      let div = e.target;
      div.style.display = 'none';
  })
}