var module = (function(){
    'use strict';

    var self,
        info,
        requiredInfoText = "Please enter Name, Age and Gender sepparated by blank space!";

    function promptUserForInfo(){
        info = prompt(requiredInfoText);

        if(info != null){
            info = info.split(" ");
        }

        return self;
    }

    function appendToTable(id){
        var tableBody = document.getElementById(id),
            newRow = document.createElement('tr'),
            newData,
            result = '';

        for(var td in info){
            newData = document.createElement('td');

            result += '<td>';
            result += info[td];
            result += '<td/>';

            newData.innerHTML = result;
            newRow.appendChild(newData);

            result = '';
        }

        tableBody.appendChild(newRow);

        return self;
    }

    self = {
        prompt: promptUserForInfo,
        append: appendToTable
    };

    return self;
})();


