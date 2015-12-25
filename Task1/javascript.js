/**
 * Created by daniel on 25.12.2015 г..
 */
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var assocArray = [];
var max = 0;
var currentMax = 0;
var maxOccuredSymbol = '';

for(i=0, count=arr1.length; i<count;i++){
    if(!assocArray[arr1[i]]){
        assocArray[arr1[i]] = 0;
    }
    assocArray[arr1[i]]++;

    currentMax = assocArray[arr1[i]];

    if(max < currentMax){
        max = currentMax;
        maxOccuredSymbol = arr1[i];
    }
}

console.log(maxOccuredSymbol, assocArray[maxOccuredSymbol], 'times');

