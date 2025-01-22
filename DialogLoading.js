//Globle Variables
var Globle_Dialog_popupContainer = "HTMLElement";
var Globle_styleSheet = "styleSheet";

/*
** @blameter_1 args = {
** text: "Deny", 
** background: "tomato", 
** color: "white",
** html:"code html",//custom loading html
** style:"code css",//custom loading css
** }
**
** @blameter_2 type_Loading = true(Dialog) or false(Included)
** @blameter_3 includedElement = DOM Element It is used in case of blameter type_Loading = false
*/
function DialogLoading(args,type_Loading,includedElement){
    //Default variable value
    var txt =  args.text || "جاري التحميل...";
    var color = args.color || "#FAD700";
    var background = args.background || "#dddddd";
    var type = type_Loading || false;//هنا هو مضمن ام ديالوج
    var DOMElement = includedElement || "";
    var html = args.html || "";//value text
    var css = args.style || "";//value text
    
    //Popup container that will work as an overlay
    const popupContainer = document.createElement("DIV");
    popupContainer.setAttribute('id', 'jsPopupContainer');
	popupContainer.style.background = 'rgba(0,0,0,0.5)';
	popupContainer.style.position = 'fixed';
	popupContainer.style.height = '100vh';
	popupContainer.style.width = '100%';
	popupContainer.style.zIndex = '999';
	popupContainer.style.top = '0';
	popupContainer.style.left = '0';

    //The main Popup
	const popup = document.createElement("div");
	popup.setAttribute("id", "jsPopup");
	popup.style.background = '#ffffff';
    popup.style.padding = "8px 32px 8px 32px";
	popup.style.maxWidth = '90%';
	popup.style.borderRadius = '5px';
	popup.style.left = '50%';
	popup.style.top = '30%';
	popup.style.transform = 'translate(-50%)';
	popup.style.position = 'absolute';
    
    //loade progress
    const loade = document.createElement("DIV");
    loade.id = "jsLoade";
    loade.style.width = "50px";
    loade.style.height = "50px";
    loade.style.border = "8px solid " + background;
    loade.style.position = "relative";
    loade.style.zIndex = 1;
    loade.style.borderRadius = "50%";
    loade.style.margin = "16px auto";
    loade.style.borderTop = "8px solid " + color;
    loade.style.webkitAnimation = "skin 0.5s linear infinite";
    loade.style.animation = "skin 0.5s linear infinite";
    
    //text progress
    const text = document.createElement("H4");
    text.id = "jsText";
    text.innerHTML = txt;
    text.style.color = "#000000";
    text.style.fontWeight = "bold";
    text.style.textAlign = "center";
    text.style.margin = "0px";
    text.style.padding = "0px";
    text.style.fontSize = "0.9em";

    //style sheet tage
    const Style = document.createElement("style");
    Style.setAttribute("type","text/css");
    Style.id = "jsStyle";
    Style.innerHTML = "@-webkit-keyframes skin {0% { -webkit-transform: rotate(0deg); }100% { -webkit-transform: rotate(360deg); }}@keyframes skin {0% { transform: rotate(0deg); }100% { transform: rotate(360deg); }}";
    
    //Globle_Dialog
    Globle_Dialog_popupContainer = popupContainer;
    Globle_styleSheet = Style;
	
    //console.log(type);
    //console.log(DOMElement);
    if(type){
        //console.log(html);
        //console.log(css);
        if( html != "" && css != "" ){
            //style sheet tage
            var style_sheet = document.createElement("STYLE");
            style_sheet.setAttribute("type","text/css");
            style_sheet.id = "jsStyleSheetCustom";
            style_sheet.innerHTML = css;
            popup.append(style_sheet);
            popup.innerHTML = "<style type='text/css'>" + css + "</style>" + html;
        }else{ 
            //Appending the popup loade div to the main popup
            popup.append(loade);
            
            //Appending the popup text h4 to the main popup
            if(txt != ""){
                //The user may send it as a blank.
                popup.append(text);
            }
        }
        //Appending the popup to the popupContainer 
	    popupContainer.append(popup);
    
        //Appending tage style sheet on the main document
	    document.body.append(Style);
    
	    //Appending popupContainer on the main document
	    document.body.append(popupContainer);
    }else{
        //The main Popup
	    const popupIncluded = document.createElement("div");
	    popupIncluded.setAttribute("id", "jsPopup");
	    popupIncluded.style.maxWidth = '90%';
        popupIncluded.style.padding = "8px 32px 8px 32px";
	    popupIncluded.style.transform = 'translate(-50%)';
        popupIncluded.style.display = "inline-block";
        popupIncluded.style.position = 'relative';

        if( html != "" && css != "" ){
            //style sheet tage
            const style_sheet = document.createElement("style");
            style_sheet.setAttribute("type","text/css");
            style_sheet.id = "jsStyleSheetCustom";
            style_sheet.innerHTML = css;
            
            popupIncluded.append(style_sheet);
            popupIncluded.append(html);
        }else{ 
            //Appending the popup loade div to the main popup
            popupIncluded.append(loade);
            
            //Appending the popup text h4 to the main popup
            if(txt != ""){
                //The user may send it as a blank.
                popupIncluded.append(text);
            }
        }

        if(DOMElement != ""){
            document.body.append(Style);
            DOMElement.append(popupIncluded);
        }else{
            document.body.append(popupIncluded);
        }
    }

}

//function for close dialog progress
function Close_DialogLoading() {
    Globle_Dialog_popupContainer.remove();
    Globle_styleSheet.remove();
}