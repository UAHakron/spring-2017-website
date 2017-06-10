(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250);
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

})(jQuery); // End of use strict

// Big ol map stuff
function initMap() {
    
// Defining initial map setup - middle, zoom, etc.
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: {lat: 41.072436, lng: -81.526013},
    mapTypeId: 'hybrid',
    scrollwheel: false
  });
  
// Defining bounds of each area
  var TBFCoords = [
    {lat: 41.072158, lng: -81.526644},
    {lat: 41.071615, lng: -81.527011},
    {lat: 41.071637, lng: -81.527102},
    {lat: 41.071588, lng: -81.527137},
    {lat: 41.071657, lng: -81.527554},
    {lat: 41.071717, lng: -81.527528},
    {lat: 41.072340, lng: -81.527115}
  ];
  
  var ParkingCoords = [
  	{lat: 41.072869, lng: -81.528025},
    {lat: 41.073091, lng: -81.527864},
    {lat: 41.073603, lng: -81.527078},
    {lat: 41.073117, lng: -81.526524},
    {lat: 41.072485, lng: -81.526940}
  ];
  
  var ParkingCoords2 = [
  	{lat: 41.072869, lng: -81.528025},
    {lat: 41.073091, lng: -81.527864},
    {lat: 41.073603, lng: -81.527078},
    {lat: 41.073535, lng: -81.526968},
    {lat: 41.073869, lng: -81.526469},
    {lat: 41.074197, lng: -81.526709},
    {lat: 41.073648, lng: -81.528123},
    {lat: 41.073521, lng: -81.528335},
    {lat: 41.073351, lng: -81.528552}
  ];
  
// Drawing the shapes around the sections
          var TBFPath = new google.maps.Polygon({
          paths: TBFCoords,
          strokeColor: '#00FF00',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#00FF00',
          fillOpacity: 0.35
        });
        TBFPath.setMap(map);
        
        var ParkingPath = new google.maps.Polygon({
          paths: ParkingCoords,
          strokeColor: '#3064a8',
          strokeOpacity: 1,
          strokeWeight: 2,
          fillColor: '#3064a8',
          fillOpacity: 0.35
        });
        ParkingPath.setMap(map);
        
        var ParkingPath2 = new google.maps.Polygon({
          paths: ParkingCoords2,
          strokeColor: '#deb408',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#deb408',
          fillOpacity: 0.25
        });
        ParkingPath2.setMap(map);
        
        var lineSymbol = {
          path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
        };

// Arrows on the road showing people where to go
        var line1 = new google.maps.Polyline({
          path: [{lat: 41.073291, lng: -81.524304}, {lat: 41.072232, lng: -81.525012}],
          icons: [{
            icon: lineSymbol,
            offset: '100%'
          }],
          strokeColor: '#00ff00',
          map: map
        });
        
        var line2 = new google.maps.Polyline({
        	path: [{lat: 41.070742, lng: -81.526025}, {lat: 41.071406, lng: -81.525597}],
          icons: [{
            icon: lineSymbol,
            offset: '100%'
          }],
          strokeColor: '#00ff00',
          map: map
        });
        
        var line3 = new google.maps.Polyline({
        	path: [{lat: 41.071846, lng: -81.525560}, {lat: 41.072233, lng: -81.526570}],
          icons: [{
            icon: lineSymbol,
            offset: '100%'
          }],
          strokeColor: '#00ff00',
          map: map
        });
     
// Add the markers themselves to the map
  var marker1 = new google.maps.Marker({
    position: {lat: 41.072216, lng: -81.526982},
    title:"The Bit Factory",
    map: map
  });
    
  var marker2 = new google.maps.Marker({
    position: {lat: 41.073064, lng: -81.527251},
    title:"Primary Parking",
    map: map
  });
    
  var marker3 = new google.maps.Marker({
    position: {lat: 41.073786, lng: -81.527255},
    title:"Secondary Parking",
    map: map
  });
    
// Making info pop up on click of markers
  var infowindow = new google.maps.InfoWindow({
    content: "The Bit Factory is on the 5th Floor of the Akron Global Business Accelerator"
  });
   marker1.addListener('click', function() {
    infowindow.open(map, marker1);
       //close the other open infowindows
    infowindow2.close();
    infowindow3.close();
  });
    
  var infowindow2 = new google.maps.InfoWindow({
    content: "Primary Parking"
  });
   marker2.addListener('click', function() {
    infowindow2.open(map, marker2);
    infowindow.close();
    infowindow3.close();
  });
    
  var infowindow3 = new google.maps.InfoWindow({
    content: "Secondary Parking"
  });
   marker3.addListener('click', function() {
    infowindow3.open(map, marker3);
    infowindow.close();
    infowindow2.close();
  });
}

// Changing button text
function flipButtonText(){
    var but = document.getElementById("ScheduleButton");
    console.log(but.value);
    if(but.innerHTML == "Expand Schedule"){ 
                                          $('#surrounding').slideDown();
                                           but.style.width = '195px';   setTimeout(function(){
                                               but.innerHTML = "Collapse Schedule";
                                           }, 100);
                                          }
    else {
        $('#surrounding').slideUp();
        but.style.width = '175px';
        setTimeout(function(){
            but.innerHTML = "Expand Schedule";
        }, 100);
         }
}
