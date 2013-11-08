/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
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
	if(id=="deviceready") { app.cmsGo(); }
    },
    // CMS Entry Point. The CMS Application can now start
    cmsGo: function() {

      alert('starting the app');
        
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
