/***********************************************************************************
*	(c) Ger Versluis 2000 version 5.411 24 December 2001 (updated Jan 31st, 2003 by Dynamic Drive for Opera7)
*	For info write to menus@burmees.nl		          *
*	You may remove all comments for faster loading	          *		
***********************************************************************************/

	var NoOffFirstLineMenus=5;			// Number of first level items
						// Colorvariables:
						// Color variables take HTML predefined color names or "#rrggbb" strings
						//For transparency make colors and border color ""
	var LowBgColor='E2E2E2';			// Background color when mouse is not over
	var LowSubBgColor='DCDCDC';			// Background color when mouse is not over on subs
	var HighBgColor='C5C5C5';			// Background color when mouse is over
	var HighSubBgColor='ffffff';			// Background color when mouse is over on subs
	var FontLowColor='006699';			// Font color when mouse is not over
	var FontSubLowColor='003366';			// Font color subs when mouse is not over
	var FontHighColor='003366';			// Font color when mouse is over
	var FontSubHighColor='1263AD';			// Font color subs when mouse is over
	var BorderColor='black';			// Border color
	var BorderSubColor='black';			// Border color for subs
	var BorderWidth=0;				// Border width
	var BorderBtwnElmnts=0;			// Border between elements 1 or 0
	var FontFamily="arial, verdana,technical"	// Font family menu items
	var FontSize=8;				// Font size menu items
	var FontBold=1;				// Bold menu items 1 or 0
	var FontItalic=0;				// Italic menu items 1 or 0
	var MenuTextCentered='left';			// Item text position 'left', 'center' or 'right'
	var MenuCentered='center';			// Menu horizontal position 'left', 'center' or 'right'
	var MenuVerticalCentered='';		// Menu vertical position 'top', 'middle','bottom' or static
	var ChildOverlap=.1;				// horizontal overlap child/ parent
	var ChildVerticalOverlap=.1;			// vertical overlap child/ parent
	var StartTop=80;				// Menu offset x coordinate
	var StartLeft=0;				// Menu offset y coordinate
	var VerCorrect=0;				// Multiple frames y correction
	var HorCorrect=0;				// Multiple frames x correction
	var LeftPaddng=12;				// Left padding
	var TopPaddng=3;				// Top padding
	var FirstLineHorizontal=1;			// SET TO 1 FOR HORIZONTAL MENU, 0 FOR VERTICAL
	var MenuFramesVertical=1;			// Frames in cols or rows 1 or 0
	var DissapearDelay=1000;			// delay before menu folds in
	var TakeOverBgColor=1;			// Menu frame takes over background color subitem frame
	var FirstLineFrame='navig';			// Frame where first level appears
	var SecLineFrame='space';			// Frame where sub levels appear
	var DocTargetFrame='space';			// Frame where target documents appear
	var TargetLoc='';				// span id for relative positioning
	var HideTop=0;				// Hide first level when loading new document 1 or 0
	var MenuWrap=1;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0
	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover
	var WebMasterCheck=0;			// menu tree checking on or off 1 or 0
	var ShowArrow=1;				// Uses arrow gifs when 1
	var KeepHilite=1;				// Keep selected path highligthed
	var Arrws=['tri.gif',5,10,'tridown.gif',5,5,'trileft.gif',5,10];	// Arrow source, width and height

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}


// Menu tree
//	MenuX=new Array(Text to show, Link, background image (optional), number of sub elements, height, width);
//	For rollover images set "Text to show" to:  "rollover:Image1.jpg:Image2.jpg"

Menu1=new Array("rollover:imagenes/leftmenu.gif:imagenes/leftmenu.gif","","",0,21,200);

Menu2=new Array("rollover:imagenes/empresa_on.gif:imagenes/empresa_off.gif","empresa.html","",0,21,106);

Menu3=new Array("rollover:imagenes/productos_on.gif:imagenes/productos_off.gif","#","",8,21,104);
	Menu3_1=new Array("ABRAZADERAS","#","",11,22,260);
		Menu3_1_1=new Array("Banda Estampada","","",2,20,200);
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
			Menu3_1_11=new Array("Herramientas para Abrazaderas","","",4);
				Menu3_1_11_1=new Array("Pinza Clip","pinza_clic.html","",0,20,100);
				Menu3_1_11_2=new Array("Pinza Elastica","pinza_elastica.html","",0);
				Menu3_1_11_3=new Array("Pinzas Trak","pinzas_trak.html","",0);
				Menu3_1_11_4=new Array("Pinzas Banding","pinzas_banding.html","",0);

	Menu3_2=new Array("PRECINTOS","#","",4);
		Menu3_2_1=new Array("Plásticos","precintos_plasticos.html","",0,20,190);
			Menu3_2_2=new Array("Inoxidables","","",2,20,140);
				Menu3_2_2_1=new Array("Inoxidable 430","inox.html","",0,20,100);
				Menu3_2_2_2=new Array("Inoxidable 304","304.html","",0);
		Menu3_2_3=new Array("Para Taza de Vehículos","seguridad.html","",0);
		Menu3_2_4=new Array("Herramientas para Precintos","","",2);
			Menu3_2_4_1=new Array("de Plastico","pinzas_precintos_auto.html","",0,20,130);
			Menu3_2_4_2=new Array("de Acero Inoxidable","pinzas_banding.html","",0);

		
	Menu3_3=new Array("AUTOPARTES","#","",3);
		Menu3_3_1=new Array("Caños de Escape","escape.html","",0,20,140);
		Menu3_3_2=new Array("Power Trak","ford.html","",6);
			Menu3_3_2_1=new Array("Ford","ford.html","",0,20,80);
			Menu3_3_2_2=new Array("VW","vw.html","",0);
			Menu3_3_2_3=new Array("FIAT","fiat.html","",0);
			Menu3_3_2_4=new Array("Renault","renault.html","",0);
			Menu3_3_2_5=new Array("Citroen","citroen.html","",0);
			Menu3_3_2_6=new Array("Peugeot","peugeot.html","",0);
	Menu3_3_3=new Array("Intercooler","intercooler.html","",0);
	
	Menu3_4=new Array("CLAMPS","clamps.html","",0);
		
	Menu3_5=new Array("GRAMPAS Y FIJACIONES PARA CAÑOS","grampas.html","",0);
		
	Menu3_6=new Array("CINTA PTFE, VINI TAPE y CINTA AISLADORA","teflon.html","",0);
	
	Menu3_7=new Array("TERMOCONTRAIBLE","termo.html","",0);
	
	Menu3_8=new Array("ACEITERAS","aceitera.html","",0);

Menu4=new Array("rollover:imagenes/novedades_on.gif:imagenes/novedades_off.gif","novedades.html","",0,21,103);

Menu5=new Array("rollover:imagenes/contacto_on.gif:imagenes/contacto_off.gif","contacto.html","",0,21,147);