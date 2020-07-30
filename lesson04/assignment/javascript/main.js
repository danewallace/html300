//Listener to toggle art flipping behavior for cover art
var art = document.querySelector('.art');
art.addEventListener( 'click', function() {
  art.classList.toggle('is-flipped');
});
