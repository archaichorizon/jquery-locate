#jquery-locate#

jquery-locate positions the top left corner of the selected element relative to another, 'reference' element.  The
required position is specified in a simple rule-string based on CSS' approach to positioning.

The `locate` method responds to nine base x-y positions (e.g. `rb` for "right bottom").  Additionally you may specify a
pixel offset for each axis (e.g. `r+3b-3`).

![](https://github.com/archaichorizon/jquery-locate/raw/master/screenshot_1.png)

##Usage##

In the following example `#locateable` is moved to the top left corner of `#reference`.

<code>
jQuery('#locateable').locate('#reference', 'lt');
</code>

Next, `#locateable` is offset from the top left corner of `#reference` by 50 pixels along both the x and the y axes.

<code>
jQuery('#locateable').locate('#reference', 'l+50t+50');
</code>

Browse to `test/index.html` for working examples.