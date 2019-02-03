
//Contact form Modal from Bootstrap///
$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var recipient = button.data('whatever'); // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    modal.find('.modal-title').text('New message to ' + recipient);
    modal.find('.modal-body input').val(recipient);
  })


  /// Animation from ScrollReveal ////
  window.sr = ScrollReveal();
  sr.reveal('#DefaultNav', {
    duration:1500,
    origin: 'top',
    distance: '100px'
  })
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
 
  sr.reveal('#SecondRowTitle', {
    duration:1500,
    origin: 'left',
    distance: '100px',
    viewFactor : 0.2
  });
  sr.reveal('#EducationThumbnail', {
    duration:1000,
    origin: 'bottom',
    distance: '200px',
    viewFactor : 0.2
  });
  sr.reveal('#second', {
    duration:1000,
    origin: 'bottom',
    distance: '200px',
    viewFactor : 0.3
  });
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