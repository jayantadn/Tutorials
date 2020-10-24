// +----------------------------------------+
// +----------------------------------------+
// | eML eBook Markup Language Version 1.12 |
// | (c) 2010 :  http://nixonpublishing.com |
// | Licensed  under the  Creative Commons: |
// | "Share Alike License". For details see |
// | - http://creativecommons.org/licenses/ |
// +----------------------------------------+

// version 1.00 : Jun 07 2010 - Initial Release
// Version 1.01 : Jun 09 2010 - Added Find facility
// Version 1.02 : Jun 10 2010 - Corrected Find to only highlight text (not tags)
//                              Added #hidesearch: & #showsearch:
// Version 1.03 : Jun 10 2010 - Corrected Find to disallow regular expressions
// Version 1.04 : Jun 15 2010 - Added Bookmarking using cookies
// Version 1.05 : Jun 15 2010 - Added local cookie emulation for Chrome (which disallows them)
// Version 1.06 : Jun 15 2010 - Added #lightshadow: and #darkshadow:
// Version 1.07 : Jun 16 2010 - Enlarged icons and spacing for some icons on touch screens
//                              Added local cookie emulation for Apple Apps (which disallow them)
// Version 1.08 : Jun 22 2010 - Fixed scrollbar bug when resizing in maximized mode
//                              Smoothed min <-> Max animation
// Version 1.09 : Jun 24 2010 - Added support for direct chapter access via ?chaptername query strings
// Version 1.10 : Jun 24 2010 - Chapter names at the end of the menu list can commence with a . to
//                              prevent them being displayed in the menu, but remain directly accessible
// Version 1.11 : Jul 12 2010 - Now correctly handles & in URLs
// Version 1.12 : Jul 18 2010 - The background property is now used instead of backgroundColor

// All uppercase variables are global

VERSION			= '1.12'
EMPTY			   = ''
SPACE			   = ' '
HASH			   = '#'
FONTSIZE		   = '12pt'
ANDROIDFONTSIZE= '30pt'
IPADFONTSIZE	= '18pt'
IPHONEFONTSIZE	= '22pt'
LOGOBORDER1		= '#0a2d6a'
LOGOBORDER2		= '#0a2dbb'
MINMAX			= 'min'
PAGENUM			= 1
FIRST			   = true
CHAPTER			= EMPTY
TITLE			   = EMPTY
THISCHAP		   = 0
VISIBLECHAPS   = 0
TOTALCHAPS		= 
LISTOFCHAPS    = Array()
CHAPNUMS		   = {}
SOURCETEMP		= EMPTY
MEDIAINPAGE    = false
SPEED			   = 300
FILEFOLDER		= EMPTY
FOLDCLASS		= EMPTY
EMLFOLDER		= 'eML/' // Folder containing eML's assets/resources
ISAPPLEAPP		= false
ISANDROIDAPP	= false
ISIPHONEAPP		= false
ISIPADAPP		= false
FOOTERNAV		= 1
HEADERNAV		= 0
SEARCH			= ''
CANSEARCH		= true
MENUCLASS		= 'menu_chapter'
FINDWIDTH1		= 0
FINDWIDTH2		= 0
MENUCOLOR1		= '#ffffff'
MENUCOLOR2		= '#cccccc'
QUERY			   = ''

KEYWORDS = Array('abbr', 'alignment', 'amp', 'androidfontsize', 'arial', 'arialb', 'audio', 'b', 'backcolor', 'backimage', 'bar', 'boxout', 'br', 'caret', 'cent', 'center', 'cite', 'code', 'color', 'comic', 'copy', 'courier', 'couriern', 'darkshadow', 'dd', 'degree', 'divide', 'dl', 'dt', 'e', 'email', 'embed', 'euro', 'example', 'f', 'feet', 'figure', 'filefolder', 'fontcolor', 'fontfamily', 'fontsize', 'footernav', 'footnote', 'georgia', 'h', 'half', 'hash', 'headernav', 'helvetica', 'highlight', 'hr', 'html', 'i', 'iconfolder', 'ifandroid', 'ifandroidapp', 'ifappleapp', 'ifipad', 'ifipadapp', 'ifiphone', 'ifiphoneapp', 'ifdefault', 'ifnotandroidapp', 'ifnotappleapp', 'ifnotipad', 'ifnotipadapp', 'ifnotiphone', 'ifnotiphoneapp', 'ifnotdefault', 'image', 'impact', 'inches', 'indent', 'input', 'ipadfontsize', 'iphonefontsize', 'l', 'lb', 'lightshadow', 'lsidebar', 'li', 'location', 'logoborder', 'logourls', 'lq', 'ls', 'md', 'menucolor1', 'menucolor2', 'map', 'multiply', 'n', 'nd', 'nextpage', 'nofadeout', 'hidesearch', 'note', 'ol', 'output', 'p', 'p1', 'page', 'pound', 'qa', 'quarter', 'quote', 'rb', 'reg', 'replace', 'rsidebar', 'rq', 'rs', 's', 'sc', 'see', 'showsearch', 'size', 'sms', 'sub', 'sup', 'stylesheet', 't', 'tab', 'table', 'tag', 'tah', 'tav', 'td', 'tel', 'text', 'th', 'threeq', 'times', 'timesnr', 'tip', 'titlecolor1', 'titlecolor2', 'tooltip', 'trebuchet', 'u', 'ukpound', 'ul', 'url', 'urlsection', 'verdana', 'warn', 'yen', 'youtube', '*', EMPTY)

STANDARDHEADER = "<div id='banner'><div id='logo'><img id='limage' src='#1logo.gif' width='85' height='28' /></div><div id='controls'><img id='minmax' src='#1leftarrow.png' title='Expand Window' width='35' height='40' class='darker' /><img id='fold' src='#1fold.png' title='Fold & Compact' width='35' height='40' class='darker' /><img id='unfold' src='#1unfold.png' title='Unfold & Restore' width='35' height='40' class='darker' /><img id='reduce' src='#1reduce.png' title='Reduce Text' width='35' height='40' class='darker' /><img id='default' src='#1reset.png' title='Reset Text' width='35' height='40' class='darker' /><img id='enlarge' src='#1enlarge.png' title='Enlarge Text' width='35' height='40' class='darker' /></div><table border='0' cellpadding='0' cellspacing='0' height='100%' align='center'><tr><td><div id='book'></div><div id='book1'></div></td></tr></table></div><div id='menu' class='menu' style='display:none;'></div><div id='read' class='read'><div id='content'></div></div><div id='fullfadeoverlay'></div><img id='topfadeoverlay' src='#1fade1.png' width='0' /><img id='bottomfadeoverlay' src='#1fade2.png' width='0' /><div id='webback'></div><div id='web'><iframe id='webpage' width=100% height='10000'></iframe></div>"

IPHONEHEADER = "<div id='banner'><div id='controls'><img id='fold' class='ipimg' src='#1ifold.png' width='150' height='150' /> <img id='unfold' class='ipimg' src='#1iunfold.png' width='150' height='150' /> <img id='reduce' class='ipimg' src='#1ireduce.png' width='150' height='150' /> <img id='default' class='ipimg' src='#1ireset.png' width='150' height='150' /> <img id='enlarge' class='ipimg' src='#1ienlarge.png' width='150' height='150' /></div><div id='book'></div><div id='book1'></div></div><div id='menu' class='menu' style='display:none;'></div><div id='read' class='read'><div id='content'></div></div><div id='webback'></div><div id='web'><iframe id='webpage' width=100% height='10000'></iframe></div>"

IPADHEADER = "<div id='banner'><table border='0' height='72' width='100%' cellpadding='0' cellspacing='0'><tr><td width='394' valign='top'><div id='controls'><img id='fold' src='#1ifold.png' width='70' height='70' /> &nbsp;<img id='unfold' src='#1iunfold.png' width='70' height='70' /> &nbsp;<img id='reduce' src='#1ireduce.png' width='70' height='70' /> &nbsp;<img id='default' src='#1ireset.png' width='70' height='70' /> &nbsp;<img id='enlarge' src='#1ienlarge.png' width='70' height='70' /></div></td><td valign='middle'><div id='book'></div><div id='book1'></div></td></tr></table></div><div id='menu' class='menu' style='display:none;'></div><div id='read' class='read'><div id='content'></div></div><div id='webback'></div><div id='web'><iframe id='webpage' width=100% height='10000'></iframe></div>"

EXAMPLESTR	= "\n<div class='example' id='xmp#1'><div class='caption'>Example #2-#1: #3</div><pre class='code'>"
ESTR2		   = 'Example <i>#1-#2</i>'
ESTR3		   = '</pre></div>'
FIGURESTR	= "<div class='figure'><img src='#1#4' style='border:solid #2px #888888' title='#6'/><br /><span class='caption'>Figure #5-#3: #6</span></div>"
FSTR2		   = 'Figure <i>#1-#2</i>'
TABLESTR	   = "<p><div class='tableout'><span class='caption'>Table #2-#1: #3</span><br /><table class='tablein' cellspacing='0' cellpadding='5'>"
TSTR2		   = 'Table <i>#1-#2</i>'
TSTR3		   = '</table></div>'
HEADINGSTR	= "</div><h#1 id='head_accord#3' #4><img id='img_accord#3'src='#5dot.gif' width='0' height='0' title='Fold Contents' onclick=\"foldtoggle('accord#3')\" style='cursor:pointer' /><img id='bmk_accord#3'src='#5dot.gif' width='0' height='0' title='Set Bookmark' onclick=\"dobookmark(#3)\" style='cursor:pointer' /><span onclick=\"foldtoggle('accord#3', 2)\" style='cursor:pointer'>#2</span></h#1><div id='accord#3' class='accordion'>"
HEADINGSTR2	= "<h3 class='nopointer'>#1</h3><hr /><h1 id='head_accord0' #4><img id='img_accord0' src='#5dot.gif' width='0' title='Fold Contents' onclick=\"foldtoggle('accord0')\" style='cursor:pointer' /><img id='bmk_accord0'src='#5dot.gif' width='0' height='0' title='Set Bookmark' onclick=\"dobookmark(0)\" style='cursor:pointer' /><span onclick=\"foldtoggle('accord0', 2)\" style='cursor:pointer'>#2</span></h1><div id='accord0' class='accordion'><br /><br />#3"
MAPSTR		= "<div class='mapout'><iframe id='gmap' class='mapin' width='#1' height='#2' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='http://maps.google.com/maps?f=q&amp;q=#3&amp;ie=UTF8&amp;z=12&amp;output=embed'></iframe><br /><a class='url' href='http://maps.google.com/maps/?q=#3' target='_blank'><span class='caption'><i>Map of #4</span></i></a></div>"
IMAPSTR		= "<div class='mapout'><a class='url' href='http://maps.google.com/maps/?q=#3' target='_blank'><img class='mapin' src='http://maps.google.com/maps/api/staticmap?center=#3&amp;zoom=14&amp;size=#1x#2&amp;maptype=roadmap&amp;sensor=false'></a><br /><a class='url' href='http://maps.google.com/maps/?q=#3' target='_blank'><span class='caption'><i>Map of #4</span></i></a></div>"
APPMAPSTR	= "<div class='mapout'><img class='mapin' src='http://maps.google.com/maps/api/staticmap?center=#3&amp;zoom=14&amp;size=#1x#2&amp;maptype=roadmap&amp;sensor=false'><br /><span class='caption'><i>Map of #4</span></i></div>"
NOTESTR		= "<p><div class='simplebox'><table><tr><td valign='top'><img style='padding:0px 15px;' src='#2note.png' title='Note' width='#1' height='#1' /></td><td>"
WARNSTR		= "<p><div class='simplebox'><table><tr><td valign='top'><img style='padding:0px 15px;' src='#2warn.png' title='Warning' width='#1' height='#1' /></td><td>"
TIPSTR		= "<p><div class='simplebox'><table><tr><td valign='top'><img style='padding:0px 15px;' src='#2tip.png' title='Tip' width='#1' height='#1' /></td><td>"
NOTESTR2	   = '</td></tr></table></div>'
AUDIOSTR	   = "<div class='audioout'><object class='audioin' type='application/x-shockwave-flash' data='#3audio.swf' height='30' width='300'><param name='FlashVars' value='mp3=#1&amp;showstop=1&amp;showvolume=1&amp;bgcolor1=189ca8&amp;bgcolor2=085c68'></object><br /><span class='caption'>Audio: #2</span></div>"
EAUDIOSTR	= "<div class='audioout'><object type='application/x-shockwave-flash' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#width='300' height='24' data='#3audio.swf'><param name='FlashVars' value='mp3=#1&amp;showstop=1&amp;showvolume=1&amp;bgcolor1=189ca8&amp;bgcolor2=085c68'><param name='movie' value='#3audio.swf'><param name='bgcolor' value='#ffffff'><embed href='#3audio.swf' bgcolor1='189ca8' width='300' height='30' name='Audio Player' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer'></embed></object><br /><span class='caption'>Audio: #2</span></div>"
IAUDIOSTR	= "<div class='audioout'><object class='audioin' type='audio/mpegapplication' data='#1' width='250' height='16'><param name='autoplay' value='false' /><param name='showcontrols' value='true' /><param name='src' value='#1' /><param name='volume' value='50' /></object><br /><span class='caption'>Audio: #2</span></div>"
QASTR		   = "<div class='qaout' onclick='VisibilityToggle(\"qa_#1\")' title='Click to reveal and hide the answer'><b>Q</b>.<span class='qaquestion'> #2</span><br /><b>A</b>.<span class='qaanswer' id='qa_#1' style='visibility:hidden'> #3</span></div>"
MENUSTR		= "<span style='font-size:#1; font-size:#2' class='menuhead'>Bookmarks</span><table width='100%' class='bookmarks'><tr><td>"
LSIDESTR 	= "<p><div class='leftsidebar' style='width:#1px';>"
RSIDESTR 	= "<p><div class='rightsidebar' style='width:#1px';>"
URLSTR		= "<a class='url' href='#1' target='_blank'>#2</a>"
REPLACESTR	= "<a class='url' href='#1'>#2</a>"
APPURLSTR	= "<span class='url' onclick='showurl(\"#1\")'>#2</span>"
URLSTR2		= "<a class='url' href='#1' target='_blank'>"
APPURLSTR2	= "<span class='url' onclick='showurl(\"#1\")'>"
URLSTR2C	   = "</a>"
APPURLSTR2C	= "</span>"
YOUTUBESTR	= "<div class='youtubeout'><div class='youtubein'#1</div><span class='caption'>#2</span></div>"
EMAILSTR	   = "<a class='url' href='mailto:#1'>#2</a>"
SMSSTR		= "<a class='url' href='sms:#1' title='#1'>#2</a>"
TELSTR		= "<a class='url' href='tel:#1' title='#1'>#2</a>"
ABBRSTR		= "<abbr title='#1'>#2</abbr>"
TTIPSTR		= "<span title='#1'>#2</span>"
THSTR		   = "<tr><th>#1</th></tr>"
CITESTR		= "<span class='cite'><sup><a href='#cite_#1'>[#1]</a></sup></span>"
IMAGESTR	   = "<img src='#1' width='#2' align='absmiddle' border='0' />"
HTAGSTR		= "InsVars(HEADINGSTR, t1[0], find(t1[1]), ++accordionid, FOLDCLASS, EMLFOLDER)"
MAPTAGSTR	= "InsVars(MAPSTR, t1[0], t1[1], escape(t1[02]), find(t1[02]))"
YTTAGSTR	   = "InsVars(YOUTUBESTR, EmbedYouTube(t1[0], t1[1]), find(t1[2]))"
ARIAL		   = "<font face='Arial'>"
ARIALB		= "<font face='Arial Black'>"
ANDALE		= "<font face='Andale Mono'>"
COMIC		   = "<font face='Comic Sans MS'>"
COURIER		= "<font face='Courier'>"
COURIERN	   = "<font face='Courier New'>"
GEORGIA		= "<font face='Georgia'>"
HELVETICA	= "<font face='Helvetica'>"
IMPACT		= "<font face='Impact'>"
TIMES		   = "<font face='Times'>"
TIMESNR		= "<font face='Times New Roman'>"
TREBUCHET	= "<font face='Trebuchet MS'>"
VERDANA		= "<font face='Verdana'>"

window.onload = function()
{
	var menuwidth, j, loc

	Initialize() // This program uses functions from the PJ.js library (http://pluginjavascript.com)

	for (j=0 ; j < KEYWORDS.length ; ++j) KEYWORDS[j] += ':'

	KEYWORDS[j++] = HASH
	KEYWORDS[j++] = '-'
	KEYWORDS[j++] = '...'
	KEYWORDS[j++] = '*'

	// Assumes that the web page has been called up from the ADK webview like this: index.htm?androidapp
	QUERY = unescape(window.location.search.substring(1))
	
	if (QUERY == 'androidapp')
	{
		ISANDROIDAPP = true
		QUERY = ''
	}

	loc = window.location + EMPTY

	if (loc.search('nixonpublishing.com') > 0)	// Are we running on the nixonpublishing.com website?
	{	// Yes, but it could have been linked to from an app, so disable app detection...
		// ...otherwise the icons won't be fetched from the right folders, and we aren't an app anyway
		ISAPPLEAPP		= false
		ISIPADAPP		= false
		ISIPHONEAP		= false
		ISANDROIDAPP	= false
	}

	// Apple Xcode doesn't support subfolders
	if (ISAPPLEAPP) EMLFOLDER = EMPTY

	ISIPHONE	= (BROWSER == 'iPhone')
	ISANDROID	= (BROWSER == 'Android')
	ISIPAD		= (BROWSER == 'iPad')
	ISIE		= (BROWSER == 'IE')
	ISMOBILE	= (ISIPHONE || ISIPAD || ISANDROID)
	ISAPPLE		= (ISIPHONE || ISIPAD)
	ICONS		= EMLFOLDER

	if (ISIPHONE)		menuwidth = 195
	else if (ISANDROID)	menuwidth = 195
	else if (ISAPPLE)	menuwidth = 160
	else				menuwidth = 150

	if (ISANDROID)		FONTSIZE = ANDROIDFONTSIZE
	else if (ISIPHONE)	FONTSIZE = IPHONEFONTSIZE
	else if (ISIPAD)	FONTSIZE = IPADFONTSIZE
	else if (ISMOBILE)	FONTSIZE = IPHONEFONTSIZE

	var button		= (ISMOBILE || ISANDROID) ? 'F' : 'Find'
	var buttondiff	= 54
	var buttonpadt	= 4
	var buttonpadb	= 3

	if (!ISMOBILE && navigator.userAgent.indexOf('Mac')) buttondiff += 4
	if (ISMOBILE && ISIPHONE) {	buttondiff -= 2 }
	if (ISMOBILE && ISIPAD) {	buttondiff -= 4 }
	if (BROWSER == 'Chrome') { 	buttondiff -= 2;	buttonpadt += 1 }
	if (BROWSER == 'Opera')		buttonpadt += 1
	if (BROWSER == 'IE')		buttonpadt += 0.5
	if (BROWSER == 'Firefox')	buttonpadt -= 0.5
	if (ISANDROID)			{	buttonpadt += 1;	buttonpadb += 2;	buttondiff -= 20 }

	var html		= InsVars("<table id='menutable' cellpadding='0' cellspacing='0' border='0' width='#1'><tr><td valign='top' style='padding:0px'><form onsubmit='return dosearch()' style='font-size:#4'><span id='find'><input autocomplete='off' id='search' type='text' value='#2' style='width:#3px; font-size:#4; margin-bottom:10px' title='Enter text to highlight (clear to revert)' /><span class='submit' id='submit' style='padding:#6px 2px #7px; font-size:#4;' onclick='dosearch()'>#5</span></span><div id='bookmarks' style='display:none'></div></td></form></tr><tr><td valign='top'><table cellpadding='3' cellspacing='2' border='0' width='100%'>", menuwidth, SEARCH, menuwidth - buttondiff, FONTSIZE, button, buttonpadt, buttonpadb)
	var menus		= Array()
	var fadeflag	= true

	FINDWIDTH1 = menuwidth - buttondiff
	FINDWIDTH2 = FINDWIDTH1 + 16

	if (ISMOBILE && !ISAPPLEAPP && !ISANDROIDAPP)	// Scroll the navigation bar out of sight
	{
		window.scrollTo(0, 1)
		setTimeout(function() {window.scrollTo(0, 1) }, 2000)
	}

	window.onresize				= function() { layout(true) }	// Most computers
	window.onorientationchange	= function() { layout(true) }	// iPhone/iPad etc

	if (ISANDROID)
	{
		document.title	= PUBIPHONE
		MENUCLASS		= 'menu_android'
		Html('end', InsVars(IPHONEHEADER, EMLFOLDER))
	}
	else if (ISIPHONE)
	{
		document.title	= PUBIPHONE
		MENUCLASS		= 'menu_iphone'
		Html('end', InsVars(IPHONEHEADER, EMLFOLDER))
	}
	else if (ISAPPLE)
	{
		document.title	= PUBIPAD
		MENUCLASS		= 'menu_ipad'
		Html('end', InsVars(IPADHEADER, EMLFOLDER))
	}
	else Html('end', InsVars(STANDARDHEADER, EMLFOLDER))

	S(Array('read', 'content'), 'fontSize', FONTSIZE)

	for (var head in CHAPTERS)	// Extract chapters from the array
	{
		var tstring = CHAPTERS[head]
		if (tstring == EMPTY) tstring = head

		if (head)
		{
			if (head.substr(0,1) != '.')
			{
				if (head.length > 3)
					html += InsVars("<tr id='_#1'><td class='#3'><b>#1</b><br /><div class='menu_title'>#2</div></td></tr>", head, tstring, MENUCLASS)
				else html += InsVars("<tr id='_#1'><td class='#3'><b>#1</b> #2</td></tr>", head, tstring, MENUCLASS)
				Hide(head)
				menus.push('_' + head)
				++VISIBLECHAPS
				LISTOFCHAPS[TOTALCHAPS++] = head
			}
			else LISTOFCHAPS[TOTALCHAPS++] = head.substr(1)
		}
	}

	if (ISANDROIDAPP) html += InsVars("<tr><td style='color:#cccccc; font-size:#1; padding-bottom:15px; cursor:pointer;' onclick='self.location=\"http://nixonpublishing.com\"' ><br /><center><i>Created<br />with <font color='#cccc00'>eML</font> #2</i></center></td></tr>", FONTSIZE.substr(0,2) - (ISANDROID * 5) - (!ISMOBILE * 2) + (ISIPHONE * 4) + 'pt', VERSION )
	else html += InsVars("<tr><td style='color:#cccccc; font-size:#1; padding-bottom:15px; cursor:pointer;' onclick='alert(\"\\nThis publication was created with eML version #2.\\n\\nFor further details please visit nixonpublishing.com\\n \")'><br /><center><i>Created with <font color='#cccc00'>eML</font> #2</i></center></td></tr>", FONTSIZE.substr(0,2) - (ISANDROID * 5) - (!ISMOBILE * 2) + (ISIPHONE * 4) + 'pt', VERSION)

	Html('menu', html + '</table></tr></td></table>')

	showbookmarks()

	if (ISANDROID)		ResizeHeight('search', 53)
	else if (ISIPHONE)	ResizeHeight('search', 30)
	else if (ISIPAD)	ResizeHeight('search', 26)

	if (!ISMOBILE)	// Non mobile version with built-in scrolling reading frame
	{
		S('fullfadeoverlay').zIndex		= ZINDEX + 1
		O('topfadeoverlay').src			= ICONS  + 'fade1.png'
		O('bottomfadeoverlay').src		= ICONS  + 'fade2.png'

		Opacity('fullfadeoverlay', 100)
		FadeOut('fullfadeoverlay', 500, 0, "S('fullfadeoverlay').zIndex = -1000")
	}

	Hide(Array('webback', 'web')) 
	GoTo('webback', 0, 0)

	if (ISAPPLE)	var winwidth = GetWindowWidth()
	else			var winwidth = 998

	ResizeHeight('web', 10000)		// Mobile apps open URLs in a frame with a 'Back' button above it
	ResizeHeight('webback', 132)    
	GoTo('web', 0, 130)
	Html('webback', "<table width='100%' height='128'><tr><td><input class='bigbutton' type=submit value=' Return to publication ' style='padding:3px;' /></td></tr></table>")

	O('webback').onclick = function()	// Hide the URL frame
	{
		if (!ISANDROID) O('webpage').src = EMPTY	// Android blows up on this
		ResizeWidth(Array('webback', 'web'), winwidth)
		Hide(Array('webback', 'web'))
		S(Array('webback', 'web'), 'zIndex', -10000)
	}

	if (QUERY)
	{
		CHAPTER = QUERY

		for (j = 0 ; j < TOTALCHAPS ; ++j)
		{
			if (CHAPTER	== LISTOFCHAPS[j])
				THISCHAP = j
		}
	}
	else CHAPTER = menus[0].substr(1)

	if (CHAPTERS[CHAPTER]) TITLE = CHAPTERS[CHAPTER]
	else if (CHAPTERS['.' + CHAPTER]) TITLE = CHAPTERS['.' + CHAPTER]
	else
	{
		CHAPTER	= menus[0].substr(1)
		TITLE	= CHAPTERS[CHAPTER]
	}

	var h = Html(CHAPTER).replace(/<\/pre>/i, EMPTY).replace(/<pre>/i, EMPTY)

	if (ISANDROID || ISIPHONE)
	{
		S('book').fontSize	= '40pt'
		S('book1').fontSize	= '34pt'
	}
	else if (ISAPPLE)
	{
		S('book').fontSize	= '22pt'
		S('book1').fontSize	= '18pt'
	}
	else
	{
		S('book').fontSize	= '16pt'
		S('book1').fontSize	= '12pt'
	}

	// Force load from current folder as Xcode disallows subfolders
	if (ISAPPLEAPP) document.body.style.backgroundImage = "url(back.jpg)"

	SOURCETEMP = processeml(processeml(h), 1, null, (VISIBLECHAPS > 1) ? 1 : null)
	Hide('loading')
	Html('content', SOURCETEMP)
	O(menus, 'onclick', menuclick)
	Hide(Array('content', 'read', 'banner', 'controls', 'webback', 'webpage'))
	layout(true)
	Show(Array('content', 'read', 'menu', 'banner', 'controls'))
	layout(true)
}

function dofindwidth()
{
	if (ISMOBILE) return

	if (O('menu').scrollHeight <= H('menu'))
	{
		ResizeWidth('menutable', FINDWIDTH2 + 44)
		ResizeWidth('search', FINDWIDTH2)
	}
	else
	{
		ResizeWidth('menutable', FINDWIDTH1 + 45)
		ResizeWidth('search', FINDWIDTH1)
	}
}

function dosearch()
{
	var oldsearch = SEARCH
	SEARCH = O('search').value

	if (SEARCH != oldsearch)
	{
		menuclick('_' + CHAPTER)
		O('search').focus()
	}

	return false;
}

function layout(noanim)	// if noanim == true the reading window cannot be resized
{
	var st		= O('read').scrollTop
	var h		= GetWindowHeight()
	var w		= GetWindowWidth()
	var top		= 60
	var left	= 5

	GoTo('menu', left, top + 1)

	if (MINMAX == 'max')	// Reading frame is full size
	{
		Hide('menu')
		var menuwfr	= 0
		var menuwto	= 150
		var readwfr	= w - 172
		var readwto	= w - 22
	}
	else
	{
		Show('menu')
		var menuwfr	= 150
		var menuwto	= 0
		var readwfr	= w - 22
		var readwto	= w - menuwfr - 22
	}

	if (ISANDROID || ISIPHONE)
	{
		if (ISIPHONE)
		{
			w = 980
			S('controls').margin = '20px 0px 0px 9px'
		}
		else
		{
			w = 990
			S('controls').margin = '20px 0px 0px 20px'
		}

		SPEED 	= 1
		top		= 320

		Resize('banner', w - 4, top)
		GoTo('banner', 0, 0)
		GoTo('menu', left, top + 4)
		ResizeWidth('menu', 195)
		GoTo('read', left + 205, top + 4)
		ResizeWidth('read', w - 205)
	}
	else if (ISAPPLE)
	{
		SPEED	= 1
		top		= 88
		w		= 980
		left	= 0

		S('controls').margin = '9px 0px 0px 5px'
		S('book').lineHeight = '120%'
		Resize('banner', w - 10, top)
		GoTo('banner', left, 0)
		GoTo('menu', left, top + 4)
		ResizeWidth('menu', 160)
		GoTo('read', left + 165, top + 4)
		ResizeWidth('read', w - 167)
	}
	else
	{
		Resize('menu', 156, h - 72)
		S('menu').overflow = 'auto'

		if (O('menu').scrollHeight > O('menu').clientHeight)
			Resize('menutable', menuwfr - 22, h - 72)

		Resize('banner', w - 10, 55)
		GoTo('banner', left, 0)
		dofindwidth()
	}

	if (!ISMOBILE)
	{
		if (FIRST || noanim)
		{
			ResizeWidth('content', readwto - 60)
			Resize(Array('read', 'fullfadeoverlay'), readwto, h - 72)
			GoTo(Array('read', 'fullfadeoverlay'), left + menuwfr + 5, top)
			Resize(Array('topfadeoverlay', 'bottomfadeoverlay'), readwto - 17, 20)
			GoTo('topfadeoverlay', left + menuwfr + 6, top + 1)
			GoTo('bottomfadeoverlay', left + menuwfr + 6, h - 31)
			S('content').overflow	= VIS
			S('read').overflow		= 'auto'
		}
		else
		{
			Zoom('read', 1, 0, readwfr, h - 72, readwto, h - 72, SPEED, -1, 0, "S('read').overflow = 'auto'")
			Zoom('content', 1, 0, readwfr - 40, h - 72, readwto - 40, h - 72, SPEED, -1, 0, "S('content').overflow = 'auto'")
			Zoom(Array('topfadeoverlay', 'bottomfadeoverlay'), 1, 0, readwfr - 17, 20, readwto - 17, 20, SPEED, -1)
			Slide('read', left + menuwto + 5, top, left + menuwfr + 5, top, SPEED, 0)
			Slide('topfadeoverlay', left + menuwto + 6, top + 1, left + menuwfr + 6, top + 1, SPEED, 0)
			Slide('bottomfadeoverlay', left + menuwto + 6, h - 31,	left + menuwfr + 6, h - 31, SPEED, 0)
		}

		Opacity('fullfadeoverlay', 0)
		Resize('logo', 85, 30)
		O('read').scrollTop	= st
		O('logo').onclick	= function() { self.location.href = 'http://nixonpublishing.com' }
	}

	FIRST = false
}

function menuclick(id, section)	// Chapter menu selection
{
	if (typeof id != 'string') id = this.id

	CHAPTER = id.substr(1, id.length - 1)

	if (CHAPTERS['.' + CHAPTER])
		TITLE = CHAPTERS['.' + CHAPTER]
	else TITLE = CHAPTERS[CHAPTER]

	var nextchap 	= null
	var prevchap	= null
	var h			= Html(CHAPTER).replace(/<\/pre>/i, EMPTY).replace(/<pre>/i, EMPTY)
	var scrolldiff	= 100

	for (var j = 0 ; j < TOTALCHAPS ; ++j)
		if (CHAPTER == LISTOFCHAPS[j]) THISCHAP = j

	if (THISCHAP < (VISIBLECHAPS - 1))	nextchap = THISCHAP + 1
	if (THISCHAP > 0)					prevchap = THISCHAP - 1

	SOURCETEMP = processeml(processeml(h), 1, prevchap, nextchap)

	if (!section)
	{
		section = 0
		scrolldiff = 170
	}

	if (ISMOBILE)
	{
		Html('content', SOURCETEMP)

		if (MEDIAINPAGE) setTimeout(function() { Html('content', SOURCETEMP) }, 500)

		MEDIAINPAGE = false
		if (typeof PREVIOUSCHAP != UNDEF)
			S(PREVIOUSCHAP).background = EMPTY
		S(id).background = '#444'
		PREVIOUSCHAP = id

		if (ISIPHONE)		scrolldiff -= 40
		else if (ISIPAD)	scrolldiff -= 50
		else if (ISANDROID)	scrolldiff -= 25

		if (section)
		{
			setTimeout(function()
				{ window.scrollTo(0, Y('img_accord' + section) - scrolldiff) }, 500)
		}
		else window.scrollTo(0, 1)
	}
	else	// Fade out the old, and fade in the new chapter
	{
		S('fullfadeoverlay').zIndex = ZINDEX + 1
		Chain(Array("FadeIn('fullfadeoverlay', 300, 0)",
			"ChainThis(\"Html('content', SOURCETEMP)\")",
			InsVars("ChainThis(\"O('read').scrollTop = Y('img_accord' + #1) - #2\")", section, scrolldiff),
			"FadeOut('fullfadeoverlay', 300, 0)",
			"ChainThis(\"S('fullfadeoverlay').zIndex = -1000\")"
			)
		)
	}
}

function foldunfoldall(action)
{
	var tags = document.getElementsByTagName("*")

	for (var j = 0 ; j < tags.length ; ++ j)
	{
		if (tags[j].className == 'accordion')
		{
			if (action == 'fold')
			{
				if (!O(tags[j].id).Deflated)
				{
					O(tags[j].id).Deflated = false
					foldtoggle(tags[j].id, 1)
				}
				else foldtoggle(tags[j].id, 2)

			}
			else
			{
				if (O(tags[j].id).Deflated)
					foldtoggle(tags[j].id, 1)
				else foldtoggle(tags[j].id, 2)
			}
		}
	}
}

function restorestate(id)	// After a Zoom() scrollbars need restoring
{
	return InsVars("S('#1').overflow = VIS; S('#1').height = 'auto'", id)
}

function foldtoggle(id, type)
{
	var margin = false

	if (type == 2)
	{
		var temp	= O('img_' + id).src
		var len		= temp.length

		if (temp.substr(len - 7, 7) == 'dot.gif')
		{
			margin = '20px 0px 5px'
		
			dispfoldimg(id,	O(id).Deflated ? 1 : -1)

			temp	= O('bmk_' + id).src
			len		= temp.length
			
			dispbmkimg(id)
		}
		else
		{
			O('img_' + id).src = FILEFOLDER + 'dot.gif'
			Resize('img_' + id, 0, 0)
			Resize('bmk_' + id, 0, 0)
			S('bmk_' + id).margin = '0px'
		}
	}
	else if (O(id).Deflated)
	{
		if (type) margin = '20px 0px 5px'
		dispfoldimg(id, -1, margin)
		dispbmkimg(id)

		if (ISMOBILE)
		{
			O(id).Deflated = false
			Show(id)
		}
		else Reflate(id, 0, 1, SPEED, 0, restorestate(id))
	}
	else
	{
		if (type) margin = '2px 0px'
		dispfoldimg(id, 1, margin)
		dispbmkimg(id)

		if (ISMOBILE)
		{
			O(id).Deflated = true
			Hide(id)
		}
		else Deflate(id, 0, 1, SPEED)
	}
}

function dispfoldimg(id, type, margin)
{
	var size				= 24
	S('img_' + id).margin	= '0px'

	if (margin)	S('head_' + id).margin = margin

	sizeicons(id, 'img_', 'unfold.png', 'fold.png', 'Unfold Section', 'Fold Section', type == 1)
}

function dispbmkimg(id)
{
	var ismarked	= false
	var cookie		= ProcessCookie('read', PUBLICATION)
	var size		= 24

	if (cookie != false)
	{
		var bookmarks	= cookie.split(',')
		var len			= bookmarks.length
		var chap        = THISCHAP
		var sect		= id.substr(6)
		
		if (chap < 10)			chap = '00' + chap
		else if (chap < 100)	chap = '0'	+ chap
		if (sect < 10)			sect = '00' + sect
		else if (sect < 100)	sect = '0'	+ sect
		if (cookie.search(chap + ':' + sect) > -1) ismarked = true
	}

	sizeicons(id, 'bmk_', 'bookm1.png', 'bookm0.png', 'Remove Bookmark', 'Set Bookmark', ismarked)
}

function sizeicons(id, head, icon1, icon2, title1, title2, test)
{
	var size = 24

	if (ISMOBILE)
	{
		if (ISANDROID)		size = 72
		else if (ISIPHONE)	size = 60
		else if (ISIPAD)	size = 48

		if (test)	O(head + id).src = EMLFOLDER + 'i' + icon1
		else		O(head + id).src = EMLFOLDER + 'i' + icon2
	}
	else
	{
		if (test)	O(head + id).src = EMLFOLDER + icon1
		else		O(head + id).src = EMLFOLDER + icon2
	}

	if (ISMOBILE && head == 'bmk_')
		S(head + id).margin = InsVars('0px #1px', size / 2)
	else S(head + id).margin = '0px 4px 0px 0px'

	if (test)	O(head + id).title = title1
	else		O(head + id).title = title2

	Resize(head + id, size, size)
	S(head + id).zIndex			= ZINDEX + 1
	S(head + id).verticalAlign	= InsVars('-#1px', parseInt(size / 7))
}

function showbookmarks()
{
	var cookie = ProcessCookie('read', PUBLICATION)

	if (cookie != false)
	{
		var bookmarks	= cookie.split(',')
		var len			= bookmarks.length
		var newcookie	= ''
		var menustr		= InsVars(MENUSTR, FONTSIZE, ISANDROID ? '80%' : '100%')
		var found		= false
		var prevchap	= -1
		var flag		= false
		var chapnum, sect

		bookmarks.sort()

		for (var j = 0 ; j < len ; ++j)
		{
			if (bookmarks[j].length > 0)
			{
				flag	= true
				temp	= bookmarks[j].split(':')
				chapnum	= temp[0] * 1

				if (chapnum != prevchap)
				{
					menustr += InsVars("<div class='#1' style='margin:#5px 0px 4px; color:#6' onclick='menuclick(\"_#2\")'><b><i>#2</i></b></div><span class='#1'><div class='menu_title' style='margin-bottom:4px; color:#7' onclick='menuclick(\"_#2\", #4)'><i>#3</i></div></span>", MENUCLASS, LISTOFCHAPS[chapnum], getheading(LISTOFCHAPS[chapnum], temp[1] * 1), temp[1] * 1, (j > 0) ? 8 : 3, MENUCOLOR1, MENUCOLOR2)
					prevchap = chapnum
				}
				else
				{
					menustr += InsVars("<span class='#1'><div class='menu_title' style='margin-bottom:4px; color:#5' onclick='menuclick(\"_#2\", #4)'><i>#3</i></div></span>", MENUCLASS, LISTOFCHAPS[chapnum], getheading(LISTOFCHAPS[chapnum], temp[1] * 1), temp[1] * 1, MENUCOLOR2)
				}
			}
		}

		if (flag)
		{
			Html('bookmarks', menustr + InsVars("</td></tr></table><span style='font-size:#1; font-size:#2' class='menuhead' >Contents</span></span>", FONTSIZE, ISANDROID ? '80%' : '100%'))
			Show('bookmarks')
		}
		else Hide('bookmarks')
	}
	else Hide('bookmarks')

	dofindwidth()

	function getheading(chapter, section)
	{
		var contents = ' ' + Html(chapter).replace(/<\/pre>/i, EMPTY).replace(/<pre>/i, EMPTY)

		if (section == 0)
		{
			if (CHAPTERS['.' + chapter])
				contents = CHAPTERS['.' + chapter]
			else contents = CHAPTERS[chapter]
			
			if (contents == '') contents = chapter
			return contents
		}

		for (var j = 0 ; j < section ; ++j)
			contents = contents.substr(contents.search(/[^#]#h:/i) + 2)

		contents = contents.substr(4, contents.search(/\n/i) - 4)
		contents = contents.replace(/##/g, '&*&')
		contents = contents.replace(/#[\w]+:/g, '')
		contents = contents.replace(/#-/g, '')
		contents = contents.replace(/;/g, '')
		contents = contents.replace('&*&', '#')
		contents = contents.replace(/(\W)/g, "$&<span style='font-size:1px'> </span>")
		return contents
	}
}

function dobookmark(section)
{
	var cookie = ProcessCookie('read', PUBLICATION)
	var chapnum, sect

	if (cookie == false) cookie = ''

	var bookmarks	= cookie.split(',')
	var len			= bookmarks.length
	var newcookie	= ''
	var found		= false
	var k			= 0
	temp			= []

	if (THISCHAP < 10)			chapnum = '00' + THISCHAP
	else if (THISCHAP < 100)	chapnum = '0'  + THISCHAP
	if (section < 10)			sect	= '00' + section
	else if (section < 100)		sect	= '0'  + section
	
	var entry = chapnum + ':' + sect

	bookmarks.sort()
	for (var j = 0 ; j < len ; ++j)
	{
		if (bookmarks[j] == entry)
			found = true
		else if (bookmarks[j].length > 0)
			newcookie += bookmarks[j] + ','
	}

	if (!found)	newcookie += entry
	else		newcookie = newcookie.substr(0, newcookie.length - 1)

	if (newcookie.length > 0)
		ProcessCookie('save', PUBLICATION, newcookie, 31536000)
	else ProcessCookie('erase', PUBLICATION)
	showbookmarks()
	dispbmkimg('accord' + section)
}

function getstylesheet(where)
{
	var newcss = document.createElement('link')
	newcss.setAttribute('type',		'text/css')
	newcss.setAttribute('rel',		'stylesheet')
	newcss.setAttribute('media',	'screen')
	newcss.href = where
	document.getElementsByTagName('head')[0].appendChild(newcss)
	return EMPTY
}

function showurl(url)	// For mobile devices
{
	if (ISAPPLE)	var winwidth = GetWindowWidth()
	else			var winwidth = 998

	O('webpage').src = url
	S(Array('webback', 'web'), 'zIndex', 10000)
	ResizeWidth(Array('webback', 'web'), winwidth)
	Show(Array('webback', 'web', 'webpage'))
	window.scrollTo(0, 1)
}

function processeml(source, pass, prevchap, nextchap)	// find tags and process them
{
	var title1 = (TITLE != EMPTY && TITLE != SPACE) ? ': ' + TITLE : EMPTY

	if (typeof source == UNDEF)
	{
		Html('book', PUBLICATION)
		Html('book1', InsVars("#1#2", CHAPTER, title1))
		return InsVars("<h3 class='nopointer'>#1</h3><hr /><h1>#2</h1>", CHAPTER, TITLE)
	}

	if (NOTESTR.search('#2') > -1)
	{
		if (ISMOBILE)	// Mobile devices need larger icons
		{
			NOTESTR	= InsVars(NOTESTR, 120, '#1')
			TIPSTR	= InsVars(TIPSTR,  120, '#1')
			WARNSTR	= InsVars(WARNSTR, 120, '#1')
		}
		else
		{
			NOTESTR	= InsVars(NOTESTR, 60, '#1')
			TIPSTR	= InsVars(TIPSTR,  60, '#1')
			WARNSTR	= InsVars(WARNSTR, 60, '#1')
		}
	}

	if (ISAPPLE)
	{
		AUDIOSTR = IAUDIOSTR

		if (ISAPPLEAPP)	MAPSTR = APPMAPSTR
		else			MAPSTR = IMAPSTR
	}
	else if (ISIE) AUDIOSTR = EAUDIOSTR

	if (ISMOBILE)
	{
		URLSTR		= APPURLSTR
		URLSTR2		= APPURLSTR2
		URLSTR2C	= APPURLSTR2C
	}

	var index		= 0
	var start		= 0
	var dest		= EMPTY
	var keyslen		= KEYWORDS.length
	var sourcelen	= source.length
	var value		= EMPTY
	var figures		= new Array()
	var tables		= new Array()
	var examples	= new Array()
	var cites		= new Array()
	var stack		= new Array()
	var haligns		= new Array()
	var valigns		= new Array()
	var figurenum	= 1
	var tablenum	= 1
	var examplenum	= 1
	var citenum		= 1
	var qanum		= 1
	var accordionid	= 0
	var t1, t2, chap, found, sofar, len1, j, tempkey

	if (CHAPTER.toLowerCase().substr(0,8) == 'chapter ')
		chap = CHAPTER.substr(8)
	else chap = CHAPTER

	// Some (all?) browsers convert & to &amp;, so change it back
	source = source.replace(/&amp;/g, '&')

	while (index != -1)	// Main loop
	{
		index = source.indexOf(HASH, start)

		if (index != -1)
		{
			found = false
			sofar = source.substr(start, index++ - start)
			if (pass != 1) sofar = find(sofar)
			start = index

			if (sofar != '\n') dest += sofar 

			for (j = 0 ; j < keyslen && start < sourcelen && !found ; ++j)	// Loop through tags until one matches
			{
				len1 = KEYWORDS[j].length

				if (source.substr(index, len1).toLowerCase() == KEYWORDS[j])	// A match was found
				{
					value = processkeyword(KEYWORDS[j], index + len1)
					if (value.length) dest += value
					found = true	// Allow loop to end
				}
			}

			if (!found)	// No tag matched, so keep the #
			{
				start = index
				dest += HASH
			}
		}
	}

	if (ISMOBILE) FOLDCLASS = "class='fold'"

	if (!pass)
	{
		Html('book', PUBLICATION)
		Html('book1', InsVars("#1#2", CHAPTER, title1))

		O('reduce' ).onclick = reducefontsize
		O('enlarge').onclick = increasefontsize
		O('default').onclick = defaultfontsize
		O('fold'   ).onclick = function() { foldunfoldall('fold') } 
		O('unfold' ).onclick = function() { foldunfoldall('unfold') }

		if (!ISMOBILE)
		{
			O('minmax').onclick	= dominmax

			if (LOGOBORDER1 != 'none')
				S('logo').background	= LOGOBORDER1

			if (LOGOBORDER2 != 'none')
			{
				O('logo').onmouseover		= function() { S('logo').background = LOGOBORDER2 }

				if (LOGOBORDER1 != 'none')
					O('logo').onmouseout	= function() { S('logo').background = LOGOBORDER1 }
				else O('logo').onmouseout	= function() { S('logo').background = EMPTY }
			}
		}

		dest += source.substr(start)
		dest  = dest.replace(/\^/g, '&lt;')

		if (cites.length > 0)
		{
			var thecites = "<br /><br /><hr><ol class='references'>"

			for (j = 0 ; j < cites.length ; ++j)
				thecites += InsVars("<a name='cite_#1'></a><li>#2</li>", j + 1, cites[j])
			dest += processeml(thecites, 2) + '</ol>'
		}

		//img_accord0 is the first scrollTo anchor for a chapter with no title
		if (TITLE == EMPTY || TITLE == SPACE) return "<span id='img_accord0'></span>" + dest
		else return InsVars(HEADINGSTR2, CHAPTER, TITLE, dest, FOLDCLASS, EMLFOLDER)
	}

	if (!QUERY)
	{
		var pchap	= LISTOFCHAPS[prevchap]
		var nchap	= LISTOFCHAPS[nextchap]
		var ptitle	= CHAPTERS[LISTOFCHAPS[prevchap]]
		var ntitle	= CHAPTERS[LISTOFCHAPS[nextchap]]
		var footer	= "<table border='0' width='100%' style='padding:20px 0px 10px;'><tr valign='top'>"
		var sep     = ': '

		if (ISIPHONE || ISANDROID)
		{
			sep		= '<br />'
			ptitle	= '&nbsp; &nbsp;' + ptitle
			nchap	= nchap + '&nbsp; &nbsp;'
		}

		if (ntitle != EMPTY) nchap += sep
		if (ptitle != EMPTY) pchap += sep

		if (prevchap != null)
			footer += InsVars("<td class='url' onclick='menuclick(\"_#3\")'> <span style='font-size:125%; vertical-align:-1px'>&laquo;</span> #1<i>#2</i></td>", pchap, ptitle, LISTOFCHAPS[prevchap])

		if (nextchap != null)
			footer += InsVars("<td class='url' onclick='menuclick(\"_#3\")' align=right>#1<i>#2</i> <span style='font-size:125%; vertical-align:-1px;'>&raquo;</span></td>", nchap, ntitle, LISTOFCHAPS[nextchap])

		footer += '</td></tr></table>'
		dest += source.substr(start)

		if (HEADERNAV == 1) dest = footer + dest
		if (FOOTERNAV == 1) dest += footer
	}
	else dest += '<br /><br />'

	return dest + '</div>'

	function reducefontsize()
	{
		var k = S('content').fontSize
		var l = k.length
		var m = k.substr(0, l - 2)

		if (m > 2)
		{
			var n = k.substr(l - 2, 2)
			S('content').fontSize = --m + n
		}
	}

	function increasefontsize()
	{
		var k = S('content').fontSize
		var l = k.length
		var m = k.substr(0, l - 2)
		var n = k.substr(l - 2, 2)
		S('content').fontSize = ++m + n
	}

	function defaultfontsize()
	{
		S('content').fontSize = FONTSIZE
	}

	function dominmax()
	{
		if (O('read').ZO_Flag) return

		if (MINMAX == 'min')
		{
			MINMAX				= 'max'
			O('minmax').title	= 'Contract Window'
			O('minmax').src		= EMLFOLDER + 'rightarrow.png'
		}
		else
		{
			MINMAX				= 'min'
			O('minmax').title	= 'Expand Window'
			O('minmax').src		= EMLFOLDER + 'leftarrow.png'
		}

		layout()
	}

	function processkeyword(key, pos)
	{
		tempkey = key.substr(0, key.length - 1)
		if (tempkey.length == 0 || key == '...') tempkey = key

		switch (tempkey)
		{
			default:
				getline()
				start += key.length
				return EMPTY

			case '*':
				return pushandreturn(" -->", "<!-- ")

			case 'abbr':
				return splitandinsert("InsVars(ABBRSTR, t1[0], find(t1[1]))")

			case 'alignment':
				return setstyle('textAlign')

			case 'andale':
				return dofont(ANDALE)

			case 'androidfontsize':
				return setstyle(tempkey)

			case 'arial':
				return dofont(ARIAL)

			case 'arialb':
				return dofont(ARIALB)

			case 'audio':
				MEDIAINPAGE = true;
				return splitandinsert("InsVars(AUDIOSTR, FILEFOLDER + t1[0], find(t1[1]), EMLFOLDER)")

			case 'b':
				return pushandreturn('</b>', '<b>')

			case 'backcolor':
			case 'backimage':
				return setstyle('background')

			case 'bar':
				return justreturn('&#124;')

			case 'br':
				return justreturn('<br />')

			case 'boxout':
				return pushandreturn('</div>', "<p><div class='boxout'>")

			case 'caret':
				return justreturn('&#94;')

			case 'cent':
				return justreturn('&cent;')

			case 'center':
				return pushandreturn('</div>', "<div align='center'>")

			case 'cite':
			case 'footnote':
				return justreturn(docite(), 1)

			case 'code':
				return pushandreturn('</pre></div>', "<div class='tab'><pre class='code1'>")

			case 'color':
				return pushandreturn('</span>', InsVars("<span style='color:#1;'>", getline()), 1)

			case 'comic':
				return dofont(COMIC)

			case 'copy':
				return justreturn('&copy;')

			case 'courier':
				return dofont(COURIER)

			case 'couriern':
				return dofont(COURIERN)

			case 'dd':
				return pushandreturn('</dd>', '<dd>')

			case 'degree':
				return justreturn('&deg;')

			case 'divide':
				return justreturn('&divide;')

			case 'dl':
				return pushandreturn('</dl>', '<dl>')

			case 'dt':
				return pushandreturn('</dt>', '<dt>')

			case 'e':
				examplenum = refertoitem(examples, examplenum)
				return InsVars(ESTR2, chap, t2)

			case 'email':
				return splitandinsert("InsVars(EMAILSTR, t1[0], find(t1[1]))")

			case 'euro':
				return justreturn('&euro;')

			case 'example':
				examplenum = labelitem(ESTR3, examples, examplenum)
				return InsVars(EXAMPLESTR, t2, chap, find(t1[1]))

			case 'f':
				figurenum = refertoitem(figures, figurenum)
				return InsVars(FSTR2, chap, t2)

			case 'feet':
				return justreturn('&prime;')

			case 'figure':
				figurenum = labelitem(null, figures, figurenum)
				return InsVars(FIGURESTR, FILEFOLDER, t1[2], t2, t1[1], chap, find(t1[3]))

			case 'filefolder':
				if (ISAPPLEAPP) getline()
				else FILEFOLDER = getline()
				return EMPTY

			case 'fontcolor':
				return setstyle('color')

			case 'fontfamily':
				return setstyle('fontFamily')

			case 'fontsize':
				return setstyle('fontSize')

			case 'footernav':
				FOOTERNAV = getline()
				return EMPTY

			case 'georgia':
				return dofont(GEORGIA)

			case 'h':
				return splitandinsert(HTAGSTR)

			case 'half':
				return justreturn('&frac12;')

			case 'hash':
			case 'pound':
			case HASH:
				return justreturn('&#35;')

			case 'headernav':
				HEADERNAV = getline()
				return EMPTY

			case 'helvetica':
				return dofont(HELVETICA)

			case 'hidesearch':
				Hide('find')
				SEARCH = ''
				return justreturn(EMPTY)

			case 'highlight':
				return pushandreturn('</span>', InsVars("<span style='background:#1;'>", getline()), 1)

			case 'hr':
				return justreturn(InsVars("<hr style width='#1' />", getline()), 1)

			case 'html':
				return pushandreturn('</div>', "<div>")

			case 'i':
				return pushandreturn('</i>', '<i>')

			case 'ifandroid':
				return iftag(ISANDROID)

			case 'ifandroidapp':
				return iftag(ISANDROIDAPP)

			case 'ifappleapp':
				return iftag(ISAPPLEAPP)

			case 'ifipad':
				return iftag(ISIPAD)

			case 'ifipadapp':
				return iftag(ISIPADAPP)

			case 'ifiphone':
				return iftag(ISIPHONE)

			case 'ifiphoneapp':
				return iftag(ISIPHONEAPP)

			case 'ifdefault':
				return iftag(!ISMOBILE)

			case 'ifnotandroid':
				return iftag(!ISANDROID)

			case 'ifnotandroidapp':
				return iftag(!ISANDROIDAPP)

			case 'ifnotappleapp':
				return iftag(!ISAPPLEAPP)

			case 'ifnotipad':
				return iftag(!ISIPAD)

			case 'ifnotipadapp':
				return iftag(!ISIPADAPP)

			case 'ifnotiphone':
				return iftag(!ISIPHONE)

			case 'ifnotiphoneapp':
				return iftag(!ISIPHONEAPP)

			case 'ifnotdefault':
				return iftag(ISMOBILE)

			case 'iconfolder':
				ICONS = getline()
				return EMPTY

			case 'inches':
				return justreturn('&Prime;')

			case 'indent':
				return pushandreturn('</div>', InsVars("<div style='padding-left:#1px'>", getline()), 1)

			case 'input':
				return pushandreturn("</div>", "<p><div class='input'>")

			case 'image':
				return splitandinsert("InsVars(IMAGESTR, FILEFOLDER + t1[0], t1[1])")

			case 'impact':
				return dofont(IMPACT)

			case 'ipadfontsize':
			case 'iphonefontsize':
				return setstyle(tempkey)

			case 'l':
				return pushandreturn('</span>', "<span class='literal'>")

			case 'lb':
				return justreturn('&lt;')

			case 'lsidebar':
				return pushandreturn('</div>', InsVars(LSIDESTR, getline()), 1)

			case 'li':
				return pushandreturn('</li>', '<li>')

			case 'lightshadow':
			case 'darkshadow':
				return pushandreturn('</span>', InsVars("<span class='#1'>", tempkey))

			case 'lq':
				return justreturn('&ldquo;')

			case 'logoborder':
				t1 = getargs()
				LOGOBORDER1 = t1[0]
				LOGOBORDER2 = t1[1]
				return EMPTY

			case 'location':
				self.location = getargs()

			case 'logourls':
				O('limage').src = getline()
				return EMPTY

			case 'ls':
				return justreturn('&lsquo;')

			case 'map':
				return splitandinsert(MAPTAGSTR)

			case 'md':
				return justreturn('&mdash;')

			case 'menucolor1':
				changemenucolor('menu_chapter')
				return EMPTY

			case 'menucolor2':
				changemenucolor('menu_title')
				return EMPTY

			case 'multiply':
				return justreturn('&times;')

			case 'n':
				return justreturn('&nbsp;')

			case 'nd':
				return justreturn('&ndash;')

			case 'nextpage':
				getline()
				return InsVars("<br /><span style='float:right;'>Page #1</span><br /><hr>", PAGENUM++)

			case 'nofadeout':
				Hide(Array('topfadeoverlay', 'bottomfadeoverlay'))
				return justreturn(EMPTY)

			case 'note':
				return pushandreturn(NOTESTR2, InsVars(NOTESTR, ICONS))

			case 'ol':
				return pushandreturn('</ol>', '<ol>')

			case 'output':
				return pushandreturn("</div>", "<p><div class='input' style='font-weight:bold;'>")

			case 'p':
				return justreturn("<p class='p'>")

			case 'p1':
				return justreturn("<p class='p1'>")

			case 'page':
				PAGENUM = getline()
				return EMPTY

			case 'quarter':
				return justreturn('&frac14;')

			case 'qa':
				return splitandinsert("InsVars(QASTR, qanum++, t1[0], t1[1])")

			case 'quote':
				return pushandreturn("</div>", "<p><div class='quote'>")

			case 'rb':
				return justreturn('&gt;')

			case 'reg':
				return justreturn('&reg;')

			case 'replace':
				return splitandinsert("InsVars(REPLACESTR, t1[0], t1[1])")

			case 'rsidebar':
				return pushandreturn('</div>', InsVars(RSIDESTR, getline()), 1)

			case 'rq':
				return justreturn('&rdquo;')

			case 'rs':
				return justreturn('&rsquo;')

			case 's':
				return pushandreturn('</s>', '<s>')

			case 'sc':
				return justreturn(';')

			case 'see':
				return InsVars("<span class='url' onclick='menuclick(\"_#1\")'>#1</span>", getline())

			case 'showsearch':
				Show('find')
				return justreturn(EMPTY)

			case 'size':
				return pushandreturn('</span>', InsVars("<span style='font-size:#1;'>", getline()), 1)

			case 'sms':
				return splitandinsert("InsVars(SMSSTR, t1[0], find(t1[1]))")

			case 'sub':
				return pushandreturn('</sub>', '<sub>')

			case 'sup':
				return pushandreturn('</sup>', '<sup>')

			case 'stylesheet':
				getstylesheet(getline())
				return EMPTY

			case 't':
				tablenum = refertoitem(tables, tablenum)
				return InsVars(TSTR2, chap, t2)

			case 'tab':
				return pushandreturn('</div>', "<div class='tab'>")

			case 'table':
				return setuptable()

			case 'tag':
				source = source.replace(new RegExp('\\' + getline(), 'g'), HASH)
				justreturn(EMPTY)

			case 'tah':
				return dotablealigns(haligns)

			case 'tav':
				return dotablealigns(valigns)

			case 'td':
				return dotabledata('td')

			case 'tel':
				return splitandinsert("InsVars(TELSTR, t1[0], find(t1[1]))")

			case 'text':
				return pushandreturn('</div>', "<div class='text'>")

			case 'th':
				return dotabledata('th')

			case 'threeq':
				return justreturn('&frac34;')

			case 'times':
				return dofont(TIMES)

			case 'timesnr':
				return dofont(TIMESNR)

			case 'tip':
				return pushandreturn(NOTESTR2, InsVars(TIPSTR, ICONS))

			case 'titlecolor1':
				S('book').color = getline()
				return EMPTY

			case 'titlecolor2':
				S('book1').color = getline()
				return EMPTY

			case 'tooltip':
				return splitandinsert("InsVars(TTIPSTR, t1[0], t1[1])")

			case 'trebuchet':
				return dofont(TREBUCHET)

			case 'u':
				return pushandreturn('</u>', '<u>')

			case 'ukpound':
				return justreturn('&pound;')

			case 'ul':
				return pushandreturn('</ul>', '<ul>')

			case 'url':
				return splitandinsert("InsVars(URLSTR, t1[0], find(t1[1]))")

			case 'urlsection':
				t1 = getline()
				return pushandreturn(URLSTR2C, InsVars(URLSTR2, t1), 1)

			case 'verdana':
				return dofont(VERDANA)

			case 'warn':
				return pushandreturn(NOTESTR2, InsVars(WARNSTR, ICONS))

			case 'yen':
				return justreturn('&yen;')

			case 'youtube':
				MEDIAINPAGE = true
				return splitandinsert(YTTAGSTR)

			case '...':
				return justreturn('&hellip;')

			case ':':
				getline(); return EMPTY

			case '-':
				++start
				if (stack.length)return stack.pop()
				else return EMPTY
		}

		function dofont(font)
		{
			return pushandreturn('</font>', font)
		}

		function iftag(cond)
		{
			if (!cond)	return pushandreturn(" -->", "<!-- ")
			else		return pushandreturn(SPACE, EMPTY)
		}

		function setuptable()
		{
			haligns.length	= valigns.length = 0
			tablenum		= labelitem(TSTR3, tables, tablenum)
			return InsVars(TABLESTR, t2, chap, t1[1])
		}

		function dotabledata(tag)
		{
			t1			= getargs()
			var temp	= EMPTY

			for (var j = 0 ; j < t1.length ; ++j)
			{
				if (typeof haligns[j] != UNDEF)
				{
					switch(haligns[j].toLowerCase())
					{
						case 'c': temp += InsVars("<#1 align='center'",		tag); break
						case 'j': temp += InsVars("<#1 align='justify'",	tag); break
						case 'r': temp += InsVars("<#1 align='right'",		tag); break
						default:  temp += InsVars("<#1",					tag); break
					}
				}
				else temp += InsVars("<#1", tag)

				if (typeof valigns[j] != UNDEF)
				{
					switch(valigns[j].toLowerCase())
					{
						case 't': temp += InsVars(" valign='top'>#2</#1>",		tag, find(t1[j])); break
						case 'm': temp += InsVars(" valign='middle'>#2</#1>",	tag, find(t1[j])); break
						case 'b': temp += InsVars(" valign='bottom'>#2</#1>",	tag, find(t1[j])); break
						default:  temp += InsVars(">#2</#1>",					   tag, find(t1[j])); break
					}
				}
				else temp += InsVars(">#2</#1>", tag, find(t1[j]))
			}

			return InsVars('<tr>#1</tr>', temp)
		}

		function dotablealigns(thearray)
		{
			t1 = getargs()
			for (var j = 0 ; j < t1.length ; ++j) thearray[j] = t1[j]
			return EMPTY
		}

		function changemenucolor(menu)
		{
			var tags  = Array()
			var color = getline()

			if (menu == 'menu_chapter')
				MENUCOLOR1 = color
			else MENUCOLOR2 = color

			tags = document.getElementsByTagName("*")

			for (var j = 0 ; j < tags.length ; ++ j)
				if (tags[j].className == menu) S(tags[j]).color = color

			return EMPTY
		}

		function splitandinsert(args)
		{
			t1 = getargs();
			return pushandreturn(null, eval(args), 1)
		}

		function pushandreturn(p, r, t)
		{
			if (p) stack.push(p)
			if (!t) start += key.length
			return r
		}

		function justreturn(r, t)
		{
			return pushandreturn(null, r, t)
		}

		function docite()
		{
			var cite			= getline()
			cites[citenum - 1]	= cite
			return InsVars(CITESTR, citenum++)
		}

		function setstyle(property)
		{
			var value = getline()

			if (property == 'fontSize' && ISMOBILE) return EMPTY

			if (ISMOBILE)
			{
				if (property == 'iphonefontsize' && ISIPHONE)
				{
					property = 'fontSize'
					IPHONEFONTSIZE = value
				}
				else if (property == 'ipadfontsize' && ISIPAD)
				{
					property = 'fontSize'
					IPADFONTSIZE = value
				}
				else if (property == 'androidfontsize' && ISANDROID)
				{
					property = 'fontSize'
					ANDROIDFONTSIZE = value
				}
			}

			if (property == 'background') document.body.background = value

			if (property != 'iphonefontsize' &&
				property != 'ipadfontsize' &&
				property != 'androidfontsize')
					S(Array('read', 'content'), property, value)

			if (property == 'fontSize') FONTSIZE = value

			return EMPTY
		}

		function refertoitem(thearray, counter)
		{
			t1					   = getline()
			if (thearray[t1])	t2 = thearray[t1]
			else thearray[t1] = t2 = counter++
			return counter
		}

		function labelitem(str, thearray, counter)
		{
			if (str) stack.push(str)
			t1						   = getargs()
			if (thearray[t1[0]])	t2 = thearray[t1[0]]
			else thearray[t1[0]] =	t2 = counter++;
			return counter
		}

		function getline()
		{
			var t = source.indexOf('\n', pos)
			var u = source.indexOf(';', pos)

			if (ISIE && t > -1)		t -= 1
			if (u > -1 && u < t)	t = u

			start = (t != -1) ? t + 1 : source.length + 1

			return source.substr(pos, start - pos - 1)
		}

		function getargs()
		{
			var t1 = getline()
			return t1.split('|')
		}
	}
}

function find(str)
{
	var len = SEARCH.length

	if (SEARCH.length > 2 && str.length >= SEARCH.length)
	{
		var search2	= ''

		for (var j = 0 ; j < len ; ++j)
			search2 = SEARCH.replace(/\W/g, '')

		if (search2 != '')
			return str.replace(new RegExp((search2), 'ig'),
				"<span style='background:#ff0; color:#00f;'>$&</span>")
	}
	return str
}

// PJ.js functions (see http://pluginjavascript.com)

function O(id, property, value)
{
	if (id instanceof Array)
	{
		var tmp = []
		for (var j = 0 ; j < id.length ; ++j)
			tmp.push(O(id[j], property, value))
		return tmp
	}

	if (typeof property != 'undefined' && typeof value != 'undefined')
	{
		if (typeof value == 'string') value = "'" + value + "'"
		return eval("O('" + id + "')." + property + " = " + value)
	}

	if (typeof id == 'object') return id
	else
	{
		try { return document.getElementById(id) }
		catch(e) { alert('Unknown ID: ' + id) }
	}
}

function S(id, property, value)
{
	if (id instanceof Array)
	{
		var tmp = []
		for (var j = 0 ; j < id.length ; ++j)
			tmp.push(S(id[j], property, value))
		return tmp
	}

	if (typeof property != UNDEF && typeof value != UNDEF)
	{
		try { return O(id).style[property] = value }
		catch(e) { alert('Unknown ID: ' + id) }
	}
	else if (typeof id == 'object') return id.style
	else
	{
		try { return O(id).style }
		catch(e) { alert('Unknown ID: ' + id) }
	}
}

function Initialize()
{
	SCROLL_X    = 0
	SCROLL_Y    = 0
	ZINDEX      = 1000
	CHAIN_CALLS = []
	INTERVAL    = 16

	UNDEF = 'undefined'
	HID   = 'hidden'
	VIS   = 'visible'
	ABS   = 'absolute'
	FIX   = 'fixed'
	REL   = 'relative'
	TP    = 'top'
	BM    = 'bottom'
	LT    = 'left'
	RT    = 'right'

	if	     (document.all)         BROWSER = 'IE'
	else if (window.opera)         BROWSER = 'Opera'
	else if (NavCheck('Chrome'))	 BROWSER = 'Chrome'
	else if (NavCheck('iPhone') ||
            NavCheck('iPod'))     BROWSER = 'iPhone'
	else if (NavCheck('iPad'))     BROWSER = 'iPad'
	else if (NavCheck('Android'))  BROWSER = 'Android'
	else if (NavCheck('Safari'))   BROWSER = 'Safari'
	else if (NavCheck('Gecko'))    BROWSER = 'Firefox'
	else                           BROWSER = 'UNKNOWN'

	if (NavCheck('AppleWebKit') && !NavCheck('Safari')) ISAPPLEAPP  = true // Added just for this program
	if (BROWSER == 'iPhone'     && !NavCheck('Safari')) ISIPHONEAPP = true
	if (BROWSER == 'iPad'       && !NavCheck('Safari')) ISIPADAPP   = true

	function NavCheck(check)
	{
		return navigator.userAgent.indexOf(check)  != -1
	}
}

function NoPx(value)
{
	return value.replace(/px/, EMPTY) * 1
}

function Px(value)
{
	return value + 'px'
}

function X(id)
{
	var obj		= O(id)
	var offset	= obj.offsetLeft

	if (obj.offsetParent)
		while(obj = obj.offsetParent)
			offset += obj.offsetLeft

	return offset
}

function Y(id)
{
	var obj		= O(id)
	var offset	= obj.offsetTop

	if (obj.offsetParent)
		while(obj = obj.offsetParent)
			offset += obj.offsetTop

	return offset
}

function W(id)
{
	var width = O(id).offsetWidth +
			NoPx(S(id).marginLeft) +
			NoPx(S(id).marginRight)

	var bord = NoPx(S(id).borderLeftWidth) +
			NoPx(S(id).borderRightWidth)

	if (bord > 0) width -= bord
	else  if (O(id).border) width -= O(id).border * 2

	return width
}

function H(id)
{
	var height = O(id).offsetHeight +
			NoPx(S(id).marginTop) +
			NoPx(S(id).marginBottom)

	var bord = NoPx(S(id).borderTopWidth) +
			NoPx(S(id).borderBottomWidth)

	if (bord > 0) height -= bord
	else if(O(id).border) height -= O(id).border * 2

	return height
}

function Html(id, value)
{
	if (typeof value != UNDEF) O(id).innerHTML = value
	return O(id).innerHTML
}

function InsVars()
{
	var tmp = arguments[0]

	for (var j = 1 ; j < arguments.length ; ++j)
		tmp = tmp.replace(new RegExp(HASH + j, 'g'), arguments[j])
	return tmp
}

function ResizeWidth(id, width)
{
	S(id, 'overflow', HID)
	S(id, 'width', Px(width))
}

function ResizeHeight(id, height)
{
	S(id, 'overflow', HID)
	S(id, 'height',	Px(height))
}

function Resize(id, width, height)
{
	ResizeWidth(id, width)
	ResizeHeight(id, height)
}

function CenterX(id)
{
	if (id instanceof Array)
	{
		for (var j = 0 ; j < id.length ; ++j)
			CenterX(id[j])
		return
	}

	S(id).left = Px(Math.round((GetWindowWidth() - W(id))) / 2 + SCROLL_X)
}

function CenterY(id)
{
	if (id instanceof Array)
	{
		for (var j = 0 ; j < id.length ; ++j)
			CenterY(id[j])
		return
	}

	S(id).top = Px(Math.round((GetWindowHeight() - H(id))) / 2 + SCROLL_Y)
}

function Center(id)
{
	CenterX(id)
	CenterY(id)
}

function GoTo(id, x, y)
{
	S(id, 'left', Px(x))
	S(id, 'top',  Px(y))
}

function GetWindowWidth()
{
	var de = document.documentElement

	if (BROWSER != 'IE')
	{
		var barwidth = de.scrollHeight > de.clientHeight ? 17 : 0
		return window.innerWidth - barwidth
	}

	return de.clientWidth || document.body.clientWidth
}

function GetWindowHeight()
{
	var de = document.documentElement

	if (BROWSER != 'IE')
	{
		var barwidth = de.scrollWidth > de.clientWidth ? 17 : 0
		return window.innerHeight - barwidth
	}

	return de.clientHeight || document.body.clientHeight
}

function Invisible(id)
{
	S(id, 'visibility', HID)
}

function Visible(id)
{
	S(id, 'visibility', VIS)
}

function VisibilityToggle(id)
{
	if (id instanceof Array)
	{
		for (var j = 0 ; j < id.length ; ++j)
			VisibilityToggle(id[j])
		return
	}

	S(id).visibility = S(id).visibility == HID ? VIS : HID
}

function Opacity(id, percent)
{
	S(id, 'opacity',		percent / 100)
	S(id, 'MozOpacity',		percent / 100)
	S(id, 'KhtmlOpacity',	percent / 100)
	S(id, 'filter',			'alpha(opacity = ' + percent + ')')
}

function Fade(id, start, end, msecs, interruptible, CB)
{
	if (id instanceof Array)
	{
		for (var j = 0 ; j < id.length ; ++j)
			Fade(id[j], start, end, msecs, interruptible, CB)
		return
	}
 
	var stepval = Math.abs(start - end) / (msecs / INTERVAL)
	
	if (O(id).FA_Flag)
	{
		if (!O(id).FA_Int) return

		clearInterval(O(id).FA_IID)
		O(id).FA_Start = O(id).FA_Level
	}
	else
	{
		O(id).FA_Start = start
		O(id).FA_Level = start
	}

	O(id).FA_Flag = true
	O(id).FA_End  = end
	O(id).FA_Int  = interruptible
	O(id).FA_Step = end > O(id).FA_Start ? stepval : -stepval
	O(id).Fadeout = end < O(id).FA_Start ? true : false
	O(id).FA_IID  = setInterval(DoFade, INTERVAL)

	function DoFade()
	{
		O(id).FA_Level += O(id).FA_Step

		if (O(id).FA_Level >= Math.max(O(id).FA_Start, O(id).FA_End) ||
				O(id).FA_Level <= Math.min(O(id).FA_Start, O(id).FA_End))
		{
			O(id).FA_Level = O(id).FA_End
			O(id).FA_Flag  = false
			clearInterval(O(id).FA_IID)
			if (typeof CB != UNDEF) eval(CB)
		}

		Opacity(id, O(id).FA_Level)
	}
}

function FadeOut(id, msecs, interruptible, CB)
{
	Fade(id, 100, 0, msecs, interruptible, CB)
}

function FadeIn(id, msecs, interruptible, CB)
{
	Fade(id, 0, 100, msecs, interruptible, CB)
}

function Hide(id, CB)
{
	S(id, 'display', 'none')
	O(id, 'HI_Flag', true)

	if (typeof CB != UNDEF) eval(CB)
}

function Show(id, CB)
{
	S(id, 'display', 'block')
	O(id, 'HI_Flag', false)

	if (typeof CB != UNDEF) eval(CB)
}

function Slide(id, frx, fry, tox, toy, msecs, interruptible, CB)
{
	if (O(id).SL_Flag)
	{
		if (!O(id).SL_Int) return
		else clearInterval(O(id).SL_IID)

		var len1	= Distance(tox - frx, toy - fry)
		frx			= X(id)
		fry			= Y(id)
		var len2	= Distance(tox - frx, toy - fry)
		msecs		*= len2 / len1
	}

	var stepx = (tox - frx) / (msecs / INTERVAL)
	var stepy = (toy - fry) / (msecs / INTERVAL)
	var count = 0

	O(id).SL_Int	= interruptible
	O(id).SL_Flag	= true
	O(id).SL_IID	= setInterval(DoSlide, INTERVAL)

	function Distance(x, y)
	{
		x = Math.max(1, x)
		y = Math.max(1, y)
		return Math.round(Math.sqrt(Math.abs(x * x) + Math.abs(y * y)))
	}

	function DoSlide()
	{
		GoTo(id, frx + stepx * count, fry + stepy * count)
		
		if (count++ >= (msecs / INTERVAL))
		{
			O(id).SL_Flag = false
			GoTo(id, tox, toy)
			clearInterval(O(id).SL_IID)
			if (typeof CB != UNDEF) eval(CB)
		}
	}
}

function Deflate(id, w, h, msecs, interruptible, CB)
{
	if (id instanceof Array)
	{
		for (var j = 0 ; j < id.length ; ++j)
			Deflate(id[j], w, h, msecs, interruptible, CB)
		return
	}

	if (O(id).DF_Flag)
	{
		if (!O(id).DF_Int) return
		else clearInterval(O(id).DF_IID)
	}
	else
	{
		if (w) O(id).DF_OldW = W(id)
		if (h) O(id).DF_OldH = H(id)

		O(id).DF_Count = msecs / INTERVAL
	}
	
	var stepw  = O(id).DF_OldW / (msecs / INTERVAL)
	var steph  = O(id).DF_OldH / (msecs / INTERVAL)
	
	S(id).overflow	= HID
	O(id).Deflated	= true
	O(id).DF_Flag	= true
	O(id).DF_Int	= interruptible
	O(id).DF_IID	= setInterval(DoDeflate, INTERVAL)
	
	function DoDeflate()
	{
		if (w) ResizeWidth(id, stepw * O(id).DF_Count) 
		if (h) ResizeHeight(id, steph * O(id).DF_Count)

		if (O(id).DF_Count-- < 1)
		{
			O(id).DF_Flag = false

			if (w) ResizeWidth(id, 0)
			if (h) ResizeHeight(id, 0)

			clearInterval(O(id).DF_IID)
			if (typeof CB != UNDEF) eval(CB)
		}
	}
}

function Reflate(id, w, h, msecs, interruptible, CB)
{
	if (id instanceof Array)
	{
		for (var j = 0 ; j < id.length ; ++j)
			Reflate(id[j], w, h, msecs, interruptible, CB)
		return
	}

	if (!O(id).Deflated) return
	else if (O(id).DF_Flag)
	{
		if (!O(id).DF_Int) return
		else clearInterval(O(id).DF_IID)
	}
	else O(id).DF_Count = 0

	var stepw  = O(id).DF_OldW / (msecs / INTERVAL)
	var steph  = O(id).DF_OldH / (msecs / INTERVAL)

	O(id).DF_Flag	= true
	O(id).Deflated	= false
	O(id).DF_Int	= interruptible
	O(id).DF_IID	= setInterval(DoReflate, INTERVAL)

	function DoReflate()
	{
		if (w) ResizeWidth(id, stepw *O(id).DF_Count) 
		if (h) ResizeHeight(id, steph * O(id).DF_Count)

		if (O(id).DF_Count++ >= msecs / INTERVAL)
		{
			O(id).DF_Flag = false

			if (w) ResizeWidth(id, O(id).DF_OldW)
			if (h) ResizeHeight(id, O(id).DF_OldH)

			clearInterval(O(id).DF_IID)
			if (typeof CB != UNDEF) eval(CB)
		}
	}
}

function Zoom(id, w, h, fromw, fromh, tow, toh,
	msecs, pad, interruptible, CB)
{
	if (id instanceof Array)
	{
		for (var j = 0 ; j < id.length ; ++j)
			Zoom(id[j], w, h, fromw, fromh, tow, toh,
				msecs, pad, interruptible, CB)
		return
	}

	if (typeof O(id).ZO_X == UNDEF)
	{
		O(id).ZO_X = X(id)
		O(id).ZO_Y = Y(id)
	}

	if (!O(id).ZO_Flag)
	{
		O(id).ZO_W		= Math.max(fromw, tow)
		O(id).ZO_H		= Math.max(fromh, toh)
		O(id).ZO_Count	= 0
	}
	else
	{
		if (!O(id).ZO_Int) return
		else clearInterval(O(id).ZO_IID)

		O(id).ZO_Count = (msecs / INTERVAL) - O(id).ZO_Count
	}

	var maxw  = Math.max(fromw, tow)
	var maxh  = Math.max(fromh, toh)
	var stepw = (tow - fromw) / (msecs / INTERVAL)
	var steph = (toh - fromh) / (msecs / INTERVAL)

	S(id).overflow	= HID
	O(id).ZO_Flag	= true
	O(id).ZO_Int	= interruptible
	O(id).ZO_IID	= setInterval(DoZoom, INTERVAL)

	function DoZoom()
	{
		if (w) O(id).ZO_W = Math.round(fromw + stepw * O(id).ZO_Count)
		if (h) O(id).ZO_H = Math.round(fromh + steph * O(id).ZO_Count)

		Resize(id, O(id).ZO_W, O(id).ZO_H)

		var midx = O(id).ZO_X + Math.round((maxw - O(id).ZO_W) / 2)
		var midy = O(id).ZO_Y + Math.round((maxh - O(id).ZO_H) / 2)

		if (pad > 0) ZoomPad(Math.max(fromw, tow),
			Math.max(fromh, toh), O(id).ZO_W, O(id).ZO_H)
		else if (pad != -1) GoTo(id, midx, midy)

		if (O(id).DB_Parent)
			GoToEdge(O(id).DB_Parent, O(id).DB_Where, 50)

		if (++O(id).ZO_Count >= (msecs / INTERVAL))
		{
			var endx		= O(id).ZO_X + Math.round((maxw - tow) / 2)
			var endy		= O(id).ZO_Y + Math.round((maxh - toh) / 2)
			O(id).ZO_Flag	= false

			Resize(id, tow, toh)
			clearInterval(O(id).ZO_IID)

			if (pad > 0) ZoomPad(fromw, fromh, tow, toh)
			else if (pad != -1) GoTo(id, endx, endy)

			if (O(id).DB_Parent)
				GoToEdge(O(id).DB_Parent, O(id).DB_Where, 50)

			if (typeof CB != UNDEF) eval(CB)
		}

		function ZoomPad(frw, frh, padw, padh)
		{
			var left	= Math.max(0, frw - Math.round(padw)) / 2
			var right	= left
			var top		= Math.max(0, frh - Math.round(padh)) / 2
			var bottom	= top

			if (left != Math.floor(left))
			{
				left  = Math.floor(left)
				right = left + 1
			}

			if (top != Math.floor(top))
			{
				top		= Math.floor(top)
				bottom	= top + 1
			}

			S(id).paddingLeft	= Px(left)
			S(id).paddingRight	= Px(right)
			S(id).paddingTop	= Px(top)
			S(id).paddingBottom	= Px(bottom)
		}
	}
}

function Chain(calls)
{
	for (var j = calls.length ; j >= 0 ; --j)
		if (calls[j])
			CHAIN_CALLS.push(calls[j])

	NextInChain()
}

function NextInChain()
{
	if (CHAIN_CALLS.length)
		CallBack(CHAIN_CALLS.pop())
}

function CallBack(expr)
{
	var insert	= expr.lastIndexOf(')')
	var left	= expr.substr(0, insert)
	var right	= expr.substr(insert)
	var middle	= "'NextInChain()'"

	if (expr.substr(insert - 1, 1) != '(')
		middle = ', ' + middle
		
	eval(left + middle + right)
}

function ChainThis(expr)
{
	eval(expr)
	NextInChain()
}

function EmbedYouTube(video, width, height, hq, full, auto)
{
	if (hq) hq = '&amp;ap=%2526fmt%3D18'
	else	hq = EMPTY

	if (width  && !height)	height = width  * 0.7500
	if (!width && height)	width  = height * 1.3333
	if (!width)				width  = 425
	if (!height)			height = 324
	
	var temp = InsVars("<object width='#1' height='#2'><param name='movie' value='http://www.youtube.com/v/#3&amp;fs=1&amp;autoplay=#4#5'>", width, height, video, auto, hq)

	temp += InsVars("</param><param name='allowFullScreen' value='#1'></param><param name='allowscriptaccess' value='always'></param>", full)

	temp += InsVars("<embed src='http://www.youtube.com/v/#1&amp;fs=1&amp;autoplay=#2#3' type='application/x-shockwave-flash' allowscriptaccess='always' allowfullscreen='true'", video, auto, hq)
		
	temp += InsVars("width='#1' height='#2'></embed></object>", width, height)

	return temp
}

function ProcessCookie(action, name, value, seconds, path, domain, secure)
{
	name = name.replace(/ /g, '_')

	if (action == 'save')
	{
		if (BROWSER == 'Chrome' || ISAPPLEAPP)
		{
			localStorage.removeItem(name)
			localStorage.setItem(name, value)
			return
		}

		var date = new Date()
		date.setTime(parseInt(date.getTime() + seconds * 1000))

		var expires     = seconds ? '; expires=' + date.toGMTString() : ''
		path            = path    ? '; path='    + path               : ''
		domain          = domain  ? '; domain='  + domain             : ''
		secure          = secure  ? '; secure='  + secure             : ''

		var cookiestr = name + '=' + value + expires + path
		document.cookie = cookiestr
	}
	else if (action == 'read')
	{
		if (BROWSER == 'Chrome' || ISAPPLEAPP)
		{
			var gi = localStorage.getItem(name)
			return (gi == null ? '' : gi)
		}

		var dc = document.cookie

		if (dc == null || !dc.length) return false
		
		var start = dc.indexOf(name + '=')

		if (start == -1) return false
		else
		{
			start  += name.length + 1
			var end = dc.indexOf(';', start)
			end     = (end == -1) ? dc.length : end
            
			return dc.substring(start, end)
		}
	}
	else if (action == 'erase')
		ProcessCookie('save', name, '', -60)
}

// It is quicker to insert the stylesheet in the HTML than load it in as a separate file

output = InsVars("<style>\
body{\
	background:#403020;\
	background-image:url('#1back.jpg')}\
a:link, a:visited, a:active, a:focus{\
	outline-style:none;\
	text-decoration:none;\
	color:#0000cc}\
.bigbutton{\
	font-size:30pt}\
.bookmarks{\
	text-shadow:#000000 2px 2px 4px;\
	font-family:arial;\
	font-size:9pt}\
.darker{\
	opacity:0.85;\
	MozOpacity:0.85;\
	KhtmlOpacity:0.85;\
	filter:alpha(opacity = '85')}\
.darker:hover{\
	opacity:1;\
	MozOpacity:1;\
	KhtmlOpacity:1;\
	filter:alpha(opacity = '100');\
	cursor:pointer}\
.fold:hover{\
	padding:6px 0px 4px 5px;\
	background:#dddddd}\
.ipimg{\
	padding:9px 14px 10px 27px;\
	float:left}\
.menu{\
	position:absolute;\
	text-shadow:#000000 2px 2px 4px;\
	font-family:arial;\
	font-size:9pt;\
	padding:0px;\
	color:#ffffff}\
.menuhead{\
	text-shadow:#000000 2px 2px 3px;\
	margin-left:3px;\
	font-weight:bold;\
	font-family:Arial;\
	color:#ffff80}\
.menu_chapter{\
	color:#ffffff}\
.menu_chapter:hover{\
	background:#555555;\
	cursor:pointer}\
.menu_title{\
	padding-left:10px;\
	color:#cccccc}\
.menu_title:hover{\
	background:#555555;\
	cursor:pointer}\
.menu_android{\
	font-size:22pt;\
	color:#ffffff}\
.menu_iphone{\
	font-size:24pt;\
	color:#ffffff}\
.menu_iphone:hover{\
	background:#555555}\
.menu_ipad{\
	font-size:19pt;\
	color:#ffffff}\
.nopointer{\
	cursor:default}\
.submit{\
	background:#cccccc;\
	text-shadow:#444444 1px 1px 2px;\
	color:#225588;\
	border:solid 1px #aaaaaa}\
.submit:hover{\
	background:#e4e4e4;\
	cursor:pointer}\
#banner{\
	position:absolute;\
	font-family:Arial,sans-serif;\
	font-size:11pt;\
	color:#ffffff}\
#book{\
	text-shadow:#000000 2px 2px 4px;\
	text-align:center}\
#book1{\
	text-shadow:#000000 2px 2px 4px;\
	text-align:center;\
	color:#cccccc}\
#content{\
	padding:0px 20px;\
	background:#ffffff}\
#content dl{\
	margin-left:30px}\
#content dt{\
	font-size:115%}\
#content h1{\
	font-size:240%}\
#content h2{\
	font-size:210%}\
#content h3{\
	font-size:170%}\
#content h4{\
	font-size:140%}\
#content h1, h2, h3, h4{\
	text-align:left;\
	margin:20px 0px 5px;\
	font-weight:normal;\
	text-shadow:#aaaaaa 2px 2px 4px}\
#content hr{\
	border:dotted 1px;\
	margin:10px 0px 10px}\
#content img{\
	margin-bottom:2px}\
#content li, dd{\
	margin-bottom:5px}\
#content p{\
	margin:0px 0px 5px}\
#content pre{\
	margin-left:10px;\
	padding-left:10px}\
#content th{\
	background:#cccccc}\
#controls{\
	margin-top:3px;\
	float:left;\
	margin-left:5px}\
#end td{\
	padding-top:3px}\
#fullfadeoverlay, #read{\
	position:absolute;\
	border:solid 1px #444444;\
	background:#ffffff}\
#logo{\
	float:left;\
	padding:5px 5px 3px;\
	margin:5px 0px 0px 2px;\
	cursor:pointer}\
#read{\
	position:absolute;\
	border:solid 1px #000000;\
	color:#333333;\
	overflow:auto}\
#topfadeoverlay, #bottomfadeoverlay{\
	position:absolute}\
#webback{\
	position:absolute;\
	text-align:center;\
	background:#403020}\
#web{\
	position:absolute;\
	overflow:scroll;\
	background:#504030}\
#webpage{\
	position:absolute;\
	display:none;\
	border:0px}\
.audioout{\
	margin:15px 0px 15px 30px}\
.audioin{\
	margin-bottom:2px}\
.boxout{\
	margin:25px 0px 20px 30px;\
	padding:10px 15px;\
	border:1px solid #888;\
	background:#eeeeee;\
	width:90%}\
.caption{\
	font-style:italic;\
	font-size:90%;\
	margin-bottom:0px}\
.cite a{\
	font-size:80%;\
	text-decoration:none;\
	color:#0000cc}\
.cite:hover a{\
	text-decoration:underline;\
	color:#0000cc}\
.code{\
	margin-top:10px;\
	border-left:dotted 2px #888888}\
.code1{\
	margin:10px 0px 10px 0px;\
	border-left:dotted 2px #888888}\
.example{\
	margin:15px 0px 15px 20px;\
	padding:2px 0px 0px 10px}\
.figure{\
	margin:15px 0px 15px 30px}\
.input{\
	text-align:left;\
	font-family:'Lucida Console', Monospace, 'Courier New', Courier;\
	margin:10px 0px 10px 30px;\
	padding:2px 0px 0px 10px;\
	border-left:dotted 2px #888888;\
	width:90%}\
.leftsidebar{\
	float:left;\
	padding:5px;\
	margin-right:10px;\
	border:1px solid #888888;\
	background:#dddddd}\
.literal{\
	font-family:'Lucida Console', Monospace, 'Courier New', Courier;\
	letter-spacing:-.05em}\
.mapout{\
	margin:15px 0px 15px 30px}\
.mapin{\
	border:solid 1px #888888;\
	margin-bottom:3px}\
.p{\
	text-indent:30px}\
.p1{\
	text-indent:0px}\
.qaout{\
	margin:15px 0px 15px 30px;\
	padding-left:10px;\
	border-left:dotted 1px #888888;\
	min-height:32px;\
	cursor:pointer;\
	width:90%}\
.qaquestion{\
	color:#226622;\
	font-style:italic}\
.qaanswer{\
	color:#226622}\
.quote{\
	background:transparent url(#1quote.png) 5px 0px no-repeat;\
	text-align:left;\
	padding:5px 0px 0px 35px;\
	margin:10px 0px 15px 10px;\
	font-family:Times New Roman;\
	font-style:italic;\
	width:90%;\
	color:#444444}\
.references{\
	font-size:90%;\
	font-style:italic;\
	color:#444444}\
.rightsidebar{\
	float:right;\
	padding:5px;\
	margin-left:10px;\
	border:1px solid #888888;\
	background:#dddddd}\
.lightshadow{\
	text-shadow:#aaaaaa 2px 2px 4px}\
.darkshadow{\
	text-shadow:#444444 2px 2px 4px}\
.simplebox{\
	margin:15px 0px 15px 30px;\
	padding:0px 5px 4px 0px;\
	border:1px solid #888888;\
	background:#eeeeee;\
	width:90%}\
.tab{\
	margin:0px 0px 0px 20px}\
.tableout{\
	margin:15px 0px 15px 30px}\
.tablein{\
	margin-top:5px;\
	border:solid 1px #aaaaaa;\
	max-width:95%}\
.text{\
	width:90%;\
	margin:15px 0px 15px 30px;\
	padding:0px 0px 0px 10px;\
	border-left:dotted 2px #888888}\
.url{\
	text-decoration:none;\
	color:#0000cc}\
.url:hover, .url:active{\
	cursor:pointer;\
	text-decoration:underline;\
	color:#0000cc}\
.url:focus{\
	color:#880088}\
.vertdots{\
	border-left:dotted 2px #888888}\
.youtubeout{\
	margin:15px 0px 15px 30px}\
.youtubein{\
	margin-bottom:3px}\
</style></div><table id='loading' style='position:absolute;' width='100%' height=100% bgcolor='#403020'><tr><td align='center'><font face='Verdana' color='#ffffff' style='font-size:26pt;'><h2 style='text-shadow:#000000 2px 2px 4px;'><center>Loading...<br><br>" + PUBLICATION + "</center></h2></font></td></tr></table><div id='end'></div></body></html>", EMLFOLDER)

document.write(output)
