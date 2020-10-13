// Delgetstei ajilah contoroller
var uiController = (function(){
    var DOMstrings = {
      inputType: ".add__type",
      inputDescription: '.add__description',
      inputValue: ".add__value",
      addBtn: ".add__btn"
    };
    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrigns: function(){
            return DOMstrings;
        }
    }
})();


// Sanhuutei ajillah contorller
var financeController = (function(){
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
      }
      var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
      };
      var data = {
        allItems: {
          inc: [],
          exp: []
        },
        totals: {
          inc: 0,
          exp: 0
        }

})();




// Programiin holbogch controller
var appController = (function(uiController, financeController){
    
    var ctrlAddItem = function(){
        //   1. Oruulah ogogdliig delgetsees oloj abna.
    console.log(uiController.getInput());
    //   2. Olj absan ogogdluudee sanhuugiin controllert damjuulj tend hadgalna.

    //   3. Olj absan ogogduluudee web deeree tohiroh hesegt ni gargana (expense, income deer gargana)

    //  4. Tosbiig tootsoolno

    //  5. Etssiin uldegdel, tootsoog delgetsend gargana.
    }

  var setupEventListeners = function () {
    var DOM= uiController.getDOMstrings();
    document.querySelector(DOM.addBtn).addEventListener('click', function(){
        ctrlAddItem();
    
       });
    
       document.addEventListener('keypress', function(event){
           if(event.keyCode===13 || event.which ===13) {
            ctrlAddItem();
           }
  });
}

  return {
      init: function(){
          console.log('Application started...');
          setupEventListeners();
      }
  }
})(uiController, financeController);

appController.init();