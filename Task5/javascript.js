var module = (function(){
    'use strict';

    var self,
        volume;

    function calculateVolume(radius){
        radius = radius || 0;

        volume = (4/3) * Math.PI * Math.pow(radius,3);
        volume = parseFloat(Math.round(volume * 100) / 100).toFixed(4);

        return self;
    }

    function getVolume(){
        return volume || 0;
    }

    function setVolumeToPlaceholder(elementId){
        document.getElementById(elementId).placeholder = module.getVol();

        return self;
    }

    self = {
        calcVol : calculateVolume,
        getVol : getVolume,
        setVol : setVolumeToPlaceholder
    };

    return self;
})();
