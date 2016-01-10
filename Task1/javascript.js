/**
 * Created by daniel on 25.12.2015 г..
 */
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3],
    assocArray = [],
    max = 0,
    currentMax = 0,
    maxOccurredSymbol = '',
    i,
    count;

for(i=0, count=arr1.length; i<count;i++){
    if(!assocArray[arr1[i]]){
        assocArray[arr1[i]] = 0;
    }
    assocArray[arr1[i]]++;

    currentMax = assocArray[arr1[i]];

    if(max < currentMax){
        max = currentMax;
        maxOccurredSymbol = arr1[i];
    }
}

console.log(maxOccurredSymbol, assocArray[maxOccurredSymbol], 'times');

