 /***********************************************
*	(c) Ger Versluis 2000 version 13.21 April 28, 2008    *
*	You may use this script on non commercial sites.	          *
*	www.burmees.nl/menu			          *
*	You may remove all comments for faster loading	          *		
************************************************/
	var NoOffFirstLineMenus=5;			// Number of main menu  items
						// Colorvariables:
						// Color variables take HTML predefined color names or "#rrggbb" strings
						//For transparency make colors and border color ""
	var LowBgColor="red";			// Background color when mouse is not over
	var HighBgColor="lightblue";			// Background color when mouse is over
	var FontLowColor="yellow";			// Font color when mouse is not over
	var FontHighColor="blue";			// Font color when mouse is over
	var BorderColor="black";			// Border color
	var BorderWidthMain=1;			// Border width main items
	var BorderWidthSub=1;			// Border width sub items
 	var BorderBtwnMain=1;			// Border width between elements main items
	var BorderBtwnSub=1;			// Border width between elements sub items
	var FontFamily="comic sans ms,technical,arial";	// Font family menu items
	var FontSize=12;				// Font size menu items
	var FontBold=0;				// Bold menu items 1 or 0
	var FontItalic=0;				// Italic menu items 1 or 0
	var MenuTextCentered="center";		// Item text position left, center or right
	var MenuCentered="center";			// Menu horizontal position can be: left, center, right
	var MenuVerticalCentered="top";		// Menu vertical position top, middle,bottom or static
	var ChildOverlap=.2;			// horizontal overlap child/ parent
	var ChildVerticalOverlap=.2;			// vertical overlap child/ parent
	var StartTop=0;				// Menu offset x coordinate
	var StartLeft=0;				// Menu offset y coordinate
	var VerCorrect=0;				// Multiple frames y correction
	var HorCorrect=0;				// Multiple frames x correction
	var DistFrmFrameBrdr=0;			// Distance between main menu and frame border
	var LeftPaddng=0;				// Left padding
	var TopPaddng=2;				// Top padding. If set to -1 text is vertically centered
	var FirstLineHorizontal=1;			// Number defines to which level the menu must unfold horizontal; 0 is all vertical
	var MenuFramesVertical=0;			// Frames in cols or rows 1 or 0
	var DissapearDelay=1000;			// delay before menu folds in
	var UnfoldDelay=100;			// delay before sub unfolds	
	var TakeOverBgColor=1;			// Menu frame takes over background color subitem frame
	var FirstLineFrame="";			// Frame where first level appears
	var SecLineFrame="";			// Frame where sub levels appear
	var DocTargetFrame="";			// Frame where target documents appear
	var TargetLoc="MenuPos";			// span id for relative positioning
	var MenuWrap=1;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0
	var BottomUp=0;				// enables/ disables Bottom up unfold 1 or 0
	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover
	var BaseHref="";				// BaseHref lets you specify the root directory for relative links. 
						// The script precedes your relative links with BaseHref
						// For instance: 
						// when your BaseHref= "http://www.MyDomain/" and a link in the menu is "subdir/MyFile.htm",
						// the script renders to: "http://www.MyDomain/subdir/MyFile.htm"
						// Can also be used when you use images in the textfields of the menu
						// "MenuX=new Array("<img src=\""+BaseHref+"MyImage\">"
						// For testing on your harddisk use syntax like: BaseHref="file:///C|/MyFiles/Homepage/"

	var Arrws=[BaseHref+"tri.gif",5,10,BaseHref+"tridown.gif",10,5,BaseHref+"trileft.gif",5,10,BaseHref+"triup.gif",10,5];

						// Arrow source, width and height.
						// If arrow images are not needed keep source ""

	var MenuUsesFrames=0;			// MenuUsesFrames is only 0 when Main menu, submenus,
						// document targets and script are in the same frame.
						// In all other cases it must be 1

	var RememberStatus=0;			// RememberStatus: When set to 1, menu unfolds to the presetted menu item. 
						// When set to 2 only the relevant main item stays highligthed
						// The preset is done by setting a variable in the head section of the target document.
						// <head>
						//	<script type="text/javascript">var SetMenu="2_2_1";</script>
						// </head>
						// 2_2_1 represents the menu item Menu2_2_1=new Array(.......

	var BuildOnDemand=0;			// 1/0 When set to 1 the sub menus are build when the parent is moused over
	var BgImgLeftOffset=5;			// Only relevant when bg image is used as rollover
	var ScaleMenu=0;				// 1/0 When set to 0 Menu scales with browser text size setting
	var OverFormElements=0;			// Set this to 0 when the menu does not need to cover form elements.

	var HooverBold=0;				// 1 or 0
	var HooverItalic=0;				// 1 or 0
	var HooverUnderLine=0;			// 1 or 0
	var HooverTextSize=0;			// 0=off, number is font size difference on hoover
	var HooverVariant=0;			// 1 or 0

						// Below some pretty useless effects, since only IE6+ supports them
						// I provided 3 effects: MenuSlide, MenuShadow and MenuOpacity
						// If you don't need MenuSlide just leave in the line var MenuSlide="";
						// delete the other MenuSlide statements
						// In general leave the MenuSlide you need in and delete the others.
						// Above is also valid for MenuShadow and MenuOpacity
						// You can also use other effects by specifying another filter for MenuShadow and MenuOpacity.
						// You can add more filters by concanating the strings
	var MenuSlide="";
	var MenuSlide="progid:DXImageTransform.Microsoft.RevealTrans(duration=.5, transition=19)";
	var MenuSlide="progid:DXImageTransform.Microsoft.GradientWipe(duration=.5, wipeStyle=1)";

	var MenuShadow="";
	var MenuShadow="progid:DXImageTransform.Microsoft.DropShadow(color=#888888, offX=2, offY=2, positive=1)";
	var MenuShadow="progid:DXImageTransform.Microsoft.Shadow(color=#888888, direction=135, strength=3)";

	var MenuOpacity="";
	var MenuOpacity="progid:DXImageTransform.Microsoft.Alpha(opacity=75)";

	function BeforeStart(){return}
	function AfterBuild(){return}
	function BeforeFirstOpen(){return}
	function AfterCloseAll(){return}

// Menu tree:
// MenuX=new Array("ItemText","Link","background image",number of sub elements,height,width,"bgcolor","bghighcolor",
//	"fontcolor","fonthighcolor","bordercolor","fontfamily",fontsize,fontbold,fontitalic,"textalign","statustext");
// Color and font variables defined in the menu tree take precedence over the global variables
// Fontsize, fontbold and fontitalic are ignored when set to -1.
// For rollover images ItemText or background image format is:  "rollover?"+BaseHref+"Image1.jpg?"+BaseHref+"Image2.jpg" 

Menu1=new Array("rollover:imagenes/leftmenu.gif:imagenes/leftmenu.gif","","",0,21,240);

Menu2=new Array("rollover:imagenes/empresa_on.gif:imagenes/empresa_off.gif","empresa.html","",0,21,106);

Menu3=new Array("rollover:imagenes/productos_on.gif:imagenes/productos_off.gif","#","",9,21,104);
	Menu3_1=new Array("ABRAZADERAS","#","",10,22,290);
		Menu3_1_1=new Array("Banda Estampada","","",2,20,140);
				Menu3_1_1_1=new Array("Inoxidable 430","banda_inox.html","",0,20,100);
				Menu3_1_1_2=new Array("Inoxidable 304","banda.html","",0);
		Menu3_1_2=new Array("Tornillo y Tuerca","tornillo.html","",0);
		Menu3_1_3=new Array("Alambre","alambre.html","",0);
		Menu3_1_4=new Array("Power Clip","clip.html","",0);
        Menu3_1_5=new Array("Power Trak","trak.html","",0);
		Menu3_1_6=new Array("Super Presión","super_presion.html","",0);
		Menu3_1_7=new Array("Plásticas Rápidas","rapidas.html","",0);	
		Menu3_1_8=new Array("Caño de Escape","escape.html","",0);
		Menu3_1_9=new Array("Cierre Rápido","rapido.html","",0);
        Menu3_1_10=new Array("Exhibidores","exhibidores.html","",0);

	Menu3_2=new Array("PRECINTOS","#","",3);
		Menu3_2_1=new Array("Plásticos","precintos_plasticos.html","",0,20,140);
			Menu3_2_2=new Array("Inoxidables","","",2,20,140);
				Menu3_2_2_1=new Array("Inoxidable 430","inox.html","",0,20,100);
				Menu3_2_2_2=new Array("Inoxidable 304","banda.html","",0);
		Menu3_2_3=new Array("para Tasa de Vehículos","seguridad.html","",0);
		
	Menu3_3=new Array("AUTOPARTES","#","",3);
		Menu3_3_1=new Array("Caños de Escape","escape.html","",0,20,140);
		Menu3_3_2=new Array("Power Trak","trak.html","",0);
		Menu3_3_3=new Array("Intercooler","intercooler.html","",0);
		
	Menu3_4=new Array("HERRAMIENTAS","#","",2);
		Menu3_4_1=new Array("Pinzas para Abrazaderas","pinzas_abrazaderas.html","",0,20,140);
		Menu3_4_2=new Array("Pinzas para Precintos","pinzas_precintos.html","",0);
		
	Menu3_5=new Array("CLAMPS","clamps.html","",0);
		
	Menu3_6=new Array("GRAMPAS Y FIJACIONES PARA CAÑOS","grampas.html","",0);
		
	Menu3_7=new Array("CINTA PTFE, VINI TAPE","teflon.html","",0);
	
	Menu3_8=new Array("TERMOCONTRAIBLE","termo.html","",0);
	
	Menu3_9=new Array("ACEITERAS","aceitera.html","",0);

Menu4=new Array("rollover:imagenes/novedades_on.gif:imagenes/novedades_off.gif","novedades.html","",0,21,103);

Menu5=new Array("rollover:imagenes/contacto_on.gif:imagenes/contacto_off.gif","contacto.html","",0,21,147);