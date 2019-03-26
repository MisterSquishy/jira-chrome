let input = document.getElementById('jiraUrlInput');
input.addEventListener('change', function(event) {
  chrome.storage.sync.set({jiraUrl: event.target.value}, function() {
    console.log('jiraUrl is ' + event.target.value);
  })
});
let projectIdInput = document.getElementById('jiraProjectIdInput');
projectIdInput.addEventListener('change', function(event) {
  chrome.storage.sync.set({jiraProjectId: event.target.value}, function() {
    console.log('jiraProjectId is ' + event.target.value);
  })
});