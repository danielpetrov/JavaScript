var module = (function(){
    'use strict';

    var self;

    function calculateVolume(radius){
        radius = radius || 0;

        this.volume = (4/3) * Math.PI * Math.pow(radius,3);
        this.volume = parseFloat(Math.round(module.volume * 100) / 100).toFixed(4);

        return self;
    }

    function getVolume(){
        return this.volume || 0;
    }

    function setVolumeToPlaceholder(elementId){
        document.getElementById(elementId).placeholder = this.getVol();

        return self;
    }

    self = {
        calcVol : calculateVolume,
        getVol : getVolume,
        setVol : setVolumeToPlaceholder
    };

    return self;
})();
