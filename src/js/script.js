function Toggler(selector){
    this.el = document.querySelector(selector);
};

Toggler.prototype.getElem = function(){
    //Pierwsza z nich o nazwie getElem powinna po prostu zwrócić znaleziony wcześniej element
    
    
    return this.el;
};

Toggler.prototype.show = function(){
    this.el.style.display = "initial";
};

Toggler.prototype.hide = function(){
    this.el.style.display = "none";
};





var elem = new Toggler("#section");
var button = document.querySelector("#button");



button.addEventListener("click", function() {
    console.log("work work work work workin on thhis shit")
    
    if(elem.getElem().style.display == "none") {
        elem.show();
    } else {
        elem.hide();
    }
 
}, false);




