//make the form
//make event for the submit button
//take the data from the form
//foreach of the fields see if it is correct
//if it is not correct append child with error text next to the incorrect field
//add event listeners
//if correct post it
var validateForm = (function(){
    'use strict';

    var self,
        EMPTY_FIELD_ERROR = "Please fill the required field! *",
        validFields,
        allFields = [];

    function validateForm(){
        allFields.push(document.getElementById('fname'));
        allFields.push(document.getElementById('lname'));
        allFields.push(getRadioChecked('gender'));
        allFields.push(document.getElementById('country'));

        allFields.forEach(function(element){
            validateEmptyField(element);
            //validate other stuff
        });

        allFields = [];

        return self;
    }

     function appendErrorToDiv(element){
        if(element.parentNode.innerHTML.indexOf(EMPTY_FIELD_ERROR) == -1){
            var newErrorText = document.createElement('span');
            newErrorText.style.color = 'red';
            newErrorText.style.borderBottom = '1px solid';
            newErrorText.innerHTML = EMPTY_FIELD_ERROR;

            element.parentNode.appendChild(newErrorText);

            element.parentNode.firstElementChild.style.color = 'red';
            element.parentNode.firstElementChild.nextElementSibling.style.borderColor = 'red';
        }
    }

    function removeErrorFromDiv(element){
        if(!(element.parentNode.innerHTML.indexOf(EMPTY_FIELD_ERROR) == -1)){
            var span = document.getElementsByTagName('span');
            element.parentNode.removeChild(span[0]);
        }
        element.parentNode.firstElementChild.nextElementSibling.style.borderColor = 'green';
        element.parentNode.firstElementChild.style.color = 'green';

    }

    function validateEmptyField(element){
        var formIsValid = true;

        if(element.value == ''){
            formIsValid = false;
            appendErrorToDiv(element);
        } else {
            removeErrorFromDiv(element);
        }

        if(formIsValid){
            validFields = allFields;
        }

    }


    function getRadioChecked(radioName)
    {
        var oRadio = document.forms[0].elements[radioName];

        for(var i = 0; i < oRadio.length; i++)
        {
            if(oRadio[i].checked)
            {
                return oRadio[i];
            }
        }
    }

    function addEventListenerToForm(){
        var form = document.getElementById("form");
        form.addEventListener("change", validate, false);

        function validate(ev) {
            var element = ev.target;
            if(element.type != 'button'){
                validateEmptyField(element);
            }
        }

        return self;
    }

    function addEventListenerToSelect(id){
        var select = document.getElementById(id);
        select.addEventListener("change", ifOther, false);
        function ifOther(ev) {
            if(ev.target.selectedIndex == 4){
                var div = document.createElement('div');
                div.innerHTML = 'Type your country here:';
                var input = document.createElement('input');
                input.type = 'text';
                input.name = 'country';
                select.parentNode.appendChild(div);
                select.parentNode.appendChild(input);

            }
        }
    }

    function submitForm(){
        if(validFields){//if not undefined
            //some ajax request maybe
            validFields = undefined;
        }
    }

    self = {
        validate: validateForm,
        addEventToForm : addEventListenerToForm,
        submit: submitForm,
        addEventToSelect: addEventListenerToSelect
    };

    return self;
})();

validateForm.addEventToSelect('country');
//validateForm.addEventToForm();

