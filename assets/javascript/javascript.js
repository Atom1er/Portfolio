
$(document).ready( function(){
var center = $('.center');
var welcome = $('.welcome');
var MainContent = $('.MainContent');
var projectElement = $('.projectElement');
var third = $('#third');


MainContent.hide();
center.on('click', function(){
  window.sr = ScrollReveal();

  sr.reveal('#DefaultNav', {
    duration:1500,
    origin: 'top',
    distance: '100px'
  });
  sr.reveal('.Introduction', {
      duration: 3000,
      origin: 'bottom',
      distance: '100px'
  });
  sr.reveal('#Profile', {
    duration:2000,
    origin: 'left',
    distance: '100px'
  });
  welcome.hide();
  MainContent.show();
  
  sr.reveal('#thirdRowTitle', {
    duration:1500,
    origin: 'left',
    distance: '100px',
    viewFactor : 0.2
  });
  sr.reveal('#CareerThumbnail', {
    duration:1000,
    origin: 'bottom',
    distance: '200px',
    viewFactor : 0.2
  });
  sr.reveal('#third', {
    duration:1000,
    origin: 'bottom',
    distance: '200px',
    viewFactor : 0.3
  });


});

//Contact form Modal from Bootstrap///
  $('#modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var recipient = button.data('whatever'); // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    modal.find('.modal-title').text('New message to ' + recipient);
    modal.find('.modal-body input').val(recipient);
  });

  projectElement.on('click', function(){
    // alert('clicked');
    var src = $(this).attr('data-link');
    var projectButtons = $('#projectsButton').html();
    third.empty();
    console.log(src);
    frame(src);
    third.prepend(projectButtons);
  });

  $(document).on('click', '.buttons', function(){
    var src = $(this).attr('data-link');
    $('#iframe').empty();
    var iframe = $('<iframe>');
    iframe.attr({
      'width': '100%',
      'height': '700px',
      'margin': 'auto',
      'src': src
    });
    $('#iframe').append(iframe);
  });

  function frame(src){
    var div = $('<div id="iframe">');
    var iframe = $('<iframe>');
    iframe.attr({
      'width': '90%',
      'height': '700px',
      'margin-left': '10px',
      'src': src
    })
    div.append(iframe);
    third.append(div);
  }
});