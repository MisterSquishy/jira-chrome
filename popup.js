let button = document.getElementById('createIssue');
button.addEventListener('click', function() {
  chrome.storage.sync.get(['jiraUrl', 'jiraProjectId'], function(data) {
    if(data.jiraUrl && data.jiraProjectId) {
      chrome.tabs.create({'url': `${data.jiraUrl}/secure/CreateIssueDetails!init.jspa?pid=${data.jiraProjectId}&summary=im+cool&issuetype=10002` } );
    } else {
      chrome.tabs.create({'url': "/options.html" } )
    }
  })
})