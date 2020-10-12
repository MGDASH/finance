// Delgetstei ajilah contoroller
var uiController = (function(){

})();


// Sanhuutei ajillah contorller
var financeController = (function(){

})();


// Programiin holbogch controller
var appController = (function(uiController, financeController){
    var ctrlAddItem = function(){
        //   1. Oruulah ogogdliig delgetsees oloj abna.
    console.log("Delgetsees ogogdloo abah heseg");
    //   2. Olj absan ogogdluudee sanhuugiin controllert damjuulj tend hadgalna.

    //   3. Olj absan ogogduluudee web deeree tohiroh hesegt ni gargana (expense, income deer gargana)

    //  4. Tosbiig tootsoolno

    //  5. Etssiin uldegdel, tootsoog delgetsend gargana.
    }

   document.querySelector('.add__btn').addEventListener('click', function(){
    ctrlAddItem();

   });

   document.addEventListener('keypress', function(event){
       if(event.keyCode===13 || event.which ===13) {
        ctrlAddItem();
       }

   });
})(uiController, financeController);
