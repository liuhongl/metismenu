document.addEventListener("DOMContentLoaded", function(event) {
  new MetisMenu('#menu')
  .on('shown.metisMenu', function(event) {
    Jump(".metismenu", {
      offset: event.getBoundingClientRect().x
    })
  });
});