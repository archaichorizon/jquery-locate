/*globals jQuery*/
/**
 * jquery-locate
 * 
 * @copyright Copyright (c) 2012, Dan Bettles 
 * @author Dan Bettles <dan@archaichorizon.com>
 */

/**
 * lt = left top
 * lc = left center
 * lb = left bottom
 * rt = right top
 * rc = right center
 * rb = right bottom
 * ct = center top
 * cc = center center
 * cb = center bottom
 * 
 * @param {String|jQuery} refEl
 * @param {String} position
 * @throws "The position is invalid" if the position is invalid
 */
jQuery.fn.locate = function (refEl, position) {
    return this.each(function () {
        var oThisEl = jQuery(this),
            oRefEl = jQuery(refEl),
            offsetPatn = '[\\+\\-]\\d+',
            positionRegx = '^([lrc])(' + offsetPatn + ')?([tcb])(' + offsetPatn + ')?$',
            aPositionMatch = null,
            oRefElOffset = oRefEl.offset(),
            refElWidth = oRefEl.outerWidth(),
            refElHeight = oRefEl.outerHeight(),
            newLeft = 0,
            newTop = 0;

        aPositionMatch = (new RegExp(positionRegx, 'i')).exec(position);

        if (!(aPositionMatch instanceof Array)) {
            throw 'The position ("' + position + '") is invalid';
        }

        switch (aPositionMatch[1]) {
        case 'l':
            newLeft = oRefElOffset.left;
            break;
        case 'r':
            newLeft = oRefElOffset.left + refElWidth;
            break;
        case 'c':
            newLeft = oRefElOffset.left + (refElWidth / 2);
            break;
        }

        if (typeof aPositionMatch[2] === 'string') {
            newLeft += parseInt(aPositionMatch[2], 10);
        }

        switch (aPositionMatch[3]) {
        case 't':
            newTop = oRefElOffset.top;
            break;
        case 'c':
            newTop = oRefElOffset.top + (refElHeight / 2);
            break;
        case 'b':
            newTop = oRefElOffset.top + refElHeight;
            break;
        }

        if (typeof aPositionMatch[4] === 'string') {
            newTop += parseInt(aPositionMatch[4], 10);
        }

        oThisEl.css({
            position: 'absolute',
            left: newLeft + 'px',
            top: newTop + 'px'
        });
    });
};

/**
 * @namespace Contains resources used by jquery-locate
 */
jQuery.locate = {
};