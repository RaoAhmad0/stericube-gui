function openTab(evt, tabName) {
    var tabContent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    var tabLinks = document.getElementsByClassName("tab-btn");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    var newColor = evt.currentTarget.getAttribute('data-color');
    document.getElementById("mainContainer").style.backgroundColor = newColor;
    
    
}

// Set first tab as active and background on page load
window.onload = function() {
    var firstTab = document.querySelector(".tab-btn.active");
    var firstColor = firstTab.getAttribute("data-color");
    document.getElementById("mainContainer").style.backgroundColor = firstColor;
}
