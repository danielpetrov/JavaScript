var module = (function(){
    'use strict';

    var self,
        info,
        REQUIRED_INFO_TEXT = "Please enter Name, Age and Gender sepparated by blank space!";

    function promptUserForInfo(){
        info = prompt(REQUIRED_INFO_TEXT);

        if(info != null){
            info = info.split(" ");
        }

        return self;
    }

    function appendToTable(id){
        var tableBody = document.getElementById(id),
            newRow = document.createElement('tr'),
            newData;

        info.forEach(function(td){
            newData = document.createElement('td');
            newData.innerHTML = td;
            newRow.appendChild(newData);
        });

        tableBody.appendChild(newRow);

        return self;
    }

    self = {
        prompt: promptUserForInfo,
        append: appendToTable
    };

    return self;
})();


