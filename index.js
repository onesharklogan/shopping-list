//use alt-shift-f for format remember :)

$(function () {
    $('#js-shopping-list-form').submit(event => {
        //we dont want to use the default submit behavior - we write our own
        event.preventDefault();

        //get the value from shopping-list-entry store it as textVal
        const textVal = $("#shopping-list-entry").val();

        //add a new li using our textVal
        $(".shopping-list").append("<li> <span class='shopping-item'>" + textVal + "</span> <div class='shopping-item-controls'> <button class='shopping-item-toggle'> <span class='button-label'>check</span> </button> <button class='shopping-item-delete'> <span class='button-label'>delete</span> </button> </div> </li>");

        // QUESTION HERE - HOW CAN I STRUCTURE THIS SO THAT THE EVENTS WILL FIRE ON ORIGINAL ITEMS & THE APPENDED ITEMS
        // I WANT TO AVOID THE DUPLICATION I HAVE...

        //delete the div and using .on applies it to the newly appended items also
        $('.shopping-item-delete').on('click', function (event) {
            $(this).closest("li").remove();
        });

        //toggle class and using .on applies it to the newly appended items also
        $('.shopping-item-toggle').on('click', function (event) {
            $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
        });

    });

    //HERE YOU WILL SEE I DUPLICATED THE CODE FOR THE EVENTS - SO THAT IT CAN APPLY TO ORIGINAL LIST ITEMS
    
    //delete the div and using .on applies it to the newly appended items also
    $('.shopping-item-delete').on('click', function (event) {
        $(this).closest("li").remove();
    });

    //toggle class and using .on applies it to the newly appended items also
    $('.shopping-item-toggle').on('click', function (event) {
        $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
    });


});

