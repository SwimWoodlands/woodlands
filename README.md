# woodlands
Site css
Included in this repository are documents from the Woodlands Swim Team site from the uploaded files section, the invitational page and the help page. Also the site logo.

When making a change to the site css it is advisable to copy the contents of the css file into the textarea in the advanced site settings. Once you are happy with the changes, copy them into the main css page, remove the old main css page, upload the new css page, then remove the css from the textarea in the advanced site settings.
What follows is the information taken from the Additional Header Content (Advanced) textarea. Hopefully I'll be able to spin off most of the javascript into it's own script at a later date:
<link href="https://swimtopia.s3.amazonaws.com/77/files/main.css?1460067429" media="screen" rel="stylesheet" type="text/css" />
<link href="https://swimtopia.s3.amazonaws.com/77/files/print.css?1461609176" media="print" rel="stylesheet" type="text/css" />
<script>
window.onload = function(){
var logo_array = document.getElementsByClassName('logo');
	var logo_img = logo_array[0].childNodes[1].childNodes[0];
	logo_img.src = "https://swimtopia.s3.amazonaws.com/77/files/Woodlands_LOGO_2015_-_G_B_on_White_537x120.jpg?1461861472";
	logo_img.width = 537;
	logo_img.height = 120;
	logo_array[0].style.display = "block";
};
</script>
