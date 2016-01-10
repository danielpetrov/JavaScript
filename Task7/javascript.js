var module = (function(){
    'use strict';
    var self,
        number,
        KG_TO_LB = 2.20462262,
        LB_TO_KG = 0.45359237038037829803270366517422;

    function convertKilos(from, to, num){
        number = num || 0;

        if(from === 'lb' && to === 'kg'){
            number = num * LB_TO_KG;
        } else if(from === 'kg' && to === 'lb'){
            number =  num * KG_TO_LB;
        } else {
            number = num;
        }

        return self;
    }

    function getNumber(){
        return number || 0;
    }

    function printNumberToElementById(id){
        var result = '' + module.getNum();

        var output = document.getElementById(id);
            output.textContent = result;

        return self;
    }

    self = {
        convert : convertKilos,
        getNum : getNumber,
        setNum : printNumberToElementById
    };

    return self;
})();

