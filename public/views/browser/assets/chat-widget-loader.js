//create a chat widget
(function() {
  var script = document.createElement('script');
  script.src = '/dist/frontend/main.js'; // Adjust the path to your Angular app's main.js
  script.onload = function() {
    var chatWidget = document.createElement('app-chat-widget');
    document.body.appendChild(chatWidget);
  };
  script.onerror = function(event) {
    console.error('Failed to load chat widget:', event);
  };
  document.head.appendChild(script);
})();

