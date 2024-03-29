/*
Few notes:

If the offset is inside one of the elements, it will be returned.
I'm looping through four offsets, because this gives the best accuracy.
Use it like this:

$('div.myCollection').closestToOffset({left: 5, top: 5});
 */

closestToOffset: function(offset) {
    var el = null, elOffset, x = offset.left, y = offset.top, distance, dx, dy, minDistance;
    this.each(function() {
        elOffset = $(this).offset();

        if (
        (x >= elOffset.left)  && (x <= elOffset.right) &&
        (y >= elOffset.top)   && (y <= elOffset.bottom)
        ) {
            el = $(this);
            return false;
        }

        var offsets = [[elOffset.left, elOffset.top], [elOffset.right, elOffset.top], [elOffset.left, elOffset.bottom], [elOffset.right, elOffset.bottom]];
        for (off in offsets) {
            dx = offsets[off][0] - x;
            dy = offsets[off][1] - y;
            distance = Math.sqrt((dx*dx) + (dy*dy));
            if (minDistance === undefined || distance < minDistance) {
                minDistance = distance;
                el = $(this);
            }
        }
    });
    return el;
}
