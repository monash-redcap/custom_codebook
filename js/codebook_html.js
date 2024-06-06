$(document).ready(function(){
    // Search for button with text "Print page"
    var printButton = $("button:contains('Print page')");
    // Check if button is found
    if (printButton.length > 0) {
        // Create new button
        var newButton = $('<button class="jqbuttonmed hidden-when-popup ui-button ui-corner-all ui-widget" onclick="customDataDictionary()"><i class="fa-sharp fa-solid fa-book"></i> Custom Codebook</button>');
        // Append new button beside the found button
        printButton.after(newButton);
    }
});
