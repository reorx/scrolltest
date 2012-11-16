var $sections = $('section');  // all content sections
var $navs = $('nav > ul > li');  // all nav sections

var topsArray = $sections.map(function() {
    return $(this).position().top - 300;  // make array of the tops of content
}).get();                                 //   sections, with some padding to
                                          //   change the class a little sooner
var len = topsArray.length;  // quantity of total sections
var currentIndex = 0;        // current section selected

var getCurrent = function( top ) {   // take the current top position, and see which
    for( var i = 0; i < len; i++ ) {   // index should be displayed
        if( top > topsArray[i] && topsArray[i+1] && top < topsArray[i+1] ) {
            return i;
        }
    }
};

   // on scroll,  call the getCurrent() function above, and see if we are in the
   //    current displayed section. If not, add the "selected" class to the
   //    current nav, and remove it from the previous "selected" nav
$(document).scroll(function(e) {
    var scrollTop = $(this).scrollTop();
    var checkIndex = getCurrent( scrollTop );
    if( checkIndex !== currentIndex ) {
        currentIndex = checkIndex;
        $navs.eq( currentIndex ).addClass("selected").siblings(".selected").removeClass("selected");
    }
});
