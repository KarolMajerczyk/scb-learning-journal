document.querySelector(".posts").addEventListener("click", (e) => {
  if (e.target.classList.contains("card")) {
    document.location.pathname = "/pages/post.html";
  }
});
