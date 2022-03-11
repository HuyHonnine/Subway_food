// load màn hình chờ
  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  
  function fadeOut(){
    setInterval(loader, 3000);
  }
  
  window.onload = fadeOut();

  let nav = document.querySelector('.nav');

  document.querySelector('#btn-nav').onclick = () =>{
      nav.classList.toggle('active'); 
  }