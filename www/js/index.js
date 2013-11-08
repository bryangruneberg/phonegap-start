var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
	if(id=="deviceready") { app.ptsGo(); }
    },
    // CMS Entry Point. The CMS Application can now start
    ptsGo: function() {
      // Whenever the landingPage is clicked, the game page must show
      app.bindLandingPageClick();

      // Whenever the enter button is clicked
      app.bindEnterButtonClick();

      // Whenever the "restart" buttone is clicked
      app.bindRestartButton();

      // Fade in the landing pager
      $('#landingPage.appPage').fadeIn();
    },
    // Function to bind the landingPageClick
    bindLandingPageClick: function() {
        $('#landingPage').click(function() {
            app.changeAppPage('gamePage');
        });
    },
    bindEnterButtonClick: function() {
        $('#enterButton').click(function() {
            app.changeAppPage('entryPage');
        });
    },
    bindRestartButton: function() {
        $('.restartAppButton').click(function() {
            app.changeAppPage('landingPage');
        });
    },
    changeAppPage: function(toPage) {
       $('.appPage:visible').fadeOut('fast', function(){ $('#' + toPage).fadeIn()});
    }
};
