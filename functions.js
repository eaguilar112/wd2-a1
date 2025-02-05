function openTab(tabId) {
    let tabs = document.querySelectorAll('div[id^="tab"]');
    tabs.forEach(tab => tab.style.display = "none");

    document.getElementById(tabId).style.display = "block";
}