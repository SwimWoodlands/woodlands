# Page Script / Style support

## Overview
Swimtopia editor can't really support the handling of <style> or <script> tags in a text snippet.  Both of these
tags work on first save but will be converted to <p> tags on subsequent saves.  This presents a problem in using
javascript or custom styles per page.  The pagescript component works around this issue allowing us to reliably
drop script and/or style into a Swimtopia snippet.  The PageScript component integrates into script that is added
to the header of all pages via Swimtopia configuration.  It will look in the document for <textarea> tags of class
page_script or page_style and ensure that these textareas are not displayable.  When dectected the script within the tag is executed when the page is ready (for page_script elements) and any page_style elements are wrapped in
a <script> tag and added to the header of the document.
## Usage
<textarea class="page_script>
  console.log("Place any javascript inside this textarea");
</textarea>
<textarea class="page_style">
  #content {
      color: red;
      font-size: 1.5em;
  }
</textarea>
