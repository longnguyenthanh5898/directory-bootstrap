var navbarInput = document.getElementById("search_search")
 inputLength = navbarInput.offsetWidth
 var onFocus = false;

if( onFocus === false && navbarInput.onfocus ){
    navbarInput.style.width = inputLength + "32px" 
    onFocus = true;
} else{
    navbarInput.style.width = inputLength
}