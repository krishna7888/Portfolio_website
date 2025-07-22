document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent! (In real life, you'd hook this up to a backend 😄)");
  });
  

  function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("show");
}


document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.remove('show');
  });
});
