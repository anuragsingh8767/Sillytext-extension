document.addEventListener('DOMContentLoaded', function() {
    var button= document.getElementById('button1');
    button.addEventListener('click', () =>{
        var input= document.getElementById('input').value;
        const sillycase=toSillyCase(input);
        document.getElementById('input').value=sillycase;
    })
});
function toSillyCase(silly){
    var sillycase=' ';
    for( var i=0; i<silly.length; i++){
        if(i%2==0){
            sillycase +=silly[i].toLowerCase();
        }else{
            sillycase +=silly[i].toUpperCase();
        }
    }
    return sillycase;
}
document.addEventListener('DOMContentLoaded', function() {
    var button= document.getElementById('button2');
    button.addEventListener('click', () =>{
        var input= document.getElementById('input').value;
        const sillycase=toSillyCase(input);
        document.getElementById('input').value=sillycase;
    })
});
function toSillyCase(silly){
    var sillycase=' ';
    for( var i=0; i<silly.length; i++){
        if(i%2==0){
            reversesillycase +=silly[i].toUpperCase();
        }else{
            reversesillycase +=silly[i].toLowerCase();
        }
    }
    return sillycase;
}