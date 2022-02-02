//this runs in background

let color = '#3aa757'; //green
//an event is added
chrome.runtime.onInstalled.addListener(() => {
// Inside the onInstalled listener, the extension will set a value using the storage API. This will allow multiple extension components to access that value and update it.
  chrome.storage.sync.set({ color });
//When using storage.sync, the stored data will automatically be synced to any Chrome browser that the user is logged into, provided the user has sync enabled.
//color property is set 
  console.log('Default background color set to %cgreen', `color: ${color}`);
});