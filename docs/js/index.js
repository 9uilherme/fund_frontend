function showHideByClass(element) {
    
    var list= document.getElementsByClassName(element);
    [].forEach.call(list, function(el) {
        if(el.style.display == 'none'){
            el.style.display  = 'block';
        }else{
            el.style.display  = 'none';
        }
    });
}

function showHideById(element) {
    var element = document.getElementById(element), i;
    
    if(element.style.display == 'none'){
        element.style.display  = 'block';
    }else{
        element.style.display  = 'none';
    }

}

function showHideByClasses(arrayElement) {

    arrayElement.forEach(function(element) {
        showHideByClass(element);
    });
}