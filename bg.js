chrome.webRequest.onBeforeRequest.addListener(
    function(details) { 
    	chrome.tabs.update({url: "chrome://newtab"});
    },
    {urls: ["*://*/*"]},
    ["blocking"]);