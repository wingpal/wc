/*------------------------------------------------------------------------
 # MegaSlide - Sep 17, 2013
 # ------------------------------------------------------------------------
 # Designed & Handcrafted by MegaDrupal
 # Websites:  http://www.megadrupal.com -  Email: info@megadrupal.com
 # Author: BaoNV
 ------------------------------------------------------------------------*/

(function(e){function n(e){var t=e.toString().split(" ");return t.length==3}var t={100:"Thin","100italic":"Thin Italic",200:"Extra Light","200italic":"Extra Light Italic",300:"Light","300italic":"Light Italic",400:"Normal","400italic":"Italic",500:"Medium","500italic":"Medium Italic",600:"Semi Bold","600italic":"Semi Bold Italic",700:"Bold","700italic":"Bold Italic",800:"Extra Bold","800italic":"Extra Bold Italic",900:"Heavy","900italic":"Heavy Italic"};MegaSlider.Toolbar=function(e){this.panel=e};MegaSlider.Toolbar.prototype={constructor:MegaSlider.Toolbar,init:function(){function n(){var t=e("#mdt-opacity-slider").slider("value");e("#mdt-opacity").val(t/100).trigger("change")}function r(){var t=e(this).slider("value");e("input",this).val(t).trigger("change")}var t=this;e("#mdf-toolbar").tinyscrollbar();e("#mdf-toolbar .box-toolbar h3").click(function(){var t=e(this).next(".box-content");if(t.is(":visible")){t.slideUp(function(){e("#mdf-toolbar").tinyscrollbar_update("relative")})}else{t.slideDown(function(){e("#mdf-toolbar").tinyscrollbar_update("relative")})}});e("#mdf-toolbar .add-new-object a").click(function(){if(e(this).hasClass("btn-text")){t.panel.addBoxItem("text")}else if(e(this).hasClass("btn-image")){t.panel.addBoxItem("image");e("#mdf-toolbar .mdt-proportions").trigger("click")}else if(e(this).hasClass("btn-video")){t.panel.addBoxItem("video");e("#mdf-toolbar .mdt-proportions").trigger("click")}return false});e("#mdf-toolbar textarea.mdt-texttitle").keyup(function(){t.panel.setItemTitle(e(this).val())});e("#mdf-toolbar input.mdt-alt-image").keyup(function(){t.panel.setItemTitle(e(this).val())});e("#mdf-toolbar #mdf-edit-image").click(function(){var n=new MdImagePopup({onSubmit:function(n,r){t.panel.setItemImageSrc(r.fileid,n,r.name);e("#mdf-toolbar input.mdt-alt-image").val(r.name)}});return false});e("#mdt-opacity-slider").slider({min:0,max:100,value:100,slide:n,change:n});e("#mdf-toolbar input.mdt-color").spectrum({clickoutFiresChange:true,showInput:true,preferredFormat:"hex6",move:function(t){e(this).val(t.toHexString()).trigger("change")}});e("#mdf-toolbar input.mdt-background-color").spectrum({clickoutFiresChange:true,showAlpha:true,showInput:true,preferredFormat:"rgb",move:function(t){e(this).val(t.toRgbString()).trigger("change")}});e("#checkbox-padding").bind("change",function(){if(e(this).is(":checked")){e("#padding-content").slideDown(function(){e("#mdf-toolbar").tinyscrollbar_update("relative")});t.panel.setPadding(1)}else{e("#padding-content").slideUp(function(){e("#mdf-toolbar").tinyscrollbar_update("relative")});t.panel.setPadding(0)}});e("#checkbox-border").bind("change",function(){if(e(this).is(":checked")){e("#border-content").slideDown(function(){e("#mdf-toolbar").tinyscrollbar_update("relative")});t.panel.setBorder(1)}else{e("#border-content").slideUp(function(){e("#mdf-toolbar").tinyscrollbar_update("relative")});t.panel.setBorder(0)}});e("#border-content").mdPanelBorder({changeAllBorder:function(e){t.panel.setItemBorder("all",e)},changeLeftBorder:function(e){t.panel.setItemBorder("left",e)},changeTopBorder:function(e){t.panel.setItemBorder("top",e)},changeRightBorder:function(e){t.panel.setItemBorder("right",e)},changeBottomBorder:function(e){t.panel.setItemBorder("bottom",e)}});e("#mdf-toolbar input.mdt-width").keyup(function(){var t=e("#mdf-toolbar a.mdt-proportions");if(t.hasClass("active")){var n=t.data("proportions");if(n>0){e("#mdf-toolbar input.mdt-height").val(Math.round(e(this).val()/n))}}});e("#mdf-toolbar input.mdt-height").keyup(function(){var t=e("#mdf-toolbar a.mdt-proportions");if(t.hasClass("active")){var n=t.data("proportions");if(n>0){e("#mdf-toolbar input.mdt-width").val(Math.round(e(this).val()*n))}}});e("#mdf-toolbar .mdt-proportions").click(function(){if(e(this).hasClass("active")){e(this).removeClass("active")}else{var t=e("#mdf-toolbar input.mdt-width").val();var n=e("#mdf-toolbar input.mdt-height").val();var r=1;if(t>0&&n>0)r=t/n;e(this).data("proportions",r);e(this).addClass("active")}});e("#checkbox-drop-shadow").bind("change",function(){if(e(this).is(":checked")){e("#shadow-content").slideDown(function(){e("#mdf-toolbar").tinyscrollbar_update("relative")});t.panel.setShadow(1)}else{e("#shadow-content").slideUp(function(){e("#mdf-toolbar").tinyscrollbar_update("relative")});t.panel.setShadow(0)}});e("#mdf-toolbar input.shadow-angle").knob({change:function(t){e("#mdf-toolbar input.shadow-angle").trigger("change")}});e("#mdf-toolbar #mdt-shadow-blur, #mdf-toolbar #mdt-shadow-offset").slider({min:0,max:50,value:0,slide:r,change:r});e("#mdf-toolbar input.shadow-color").spectrum({clickoutFiresChange:true,preferredFormat:"hex6",showInput:true,move:function(t){e(this).val(t.toHexString()).trigger("change")}});e("#mdf-toolbar select.mdt-font-family").change(function(){t.panel.changeFontFamily(e(this).val());t.changeFontWeightOption(e("option:selected",this).data("fontweight"))});e("#mdf-toolbar select.mdt-font-family").bind("updatevalue",function(){t.changeFontWeightOption(e("option:selected",this).data("fontweight"))});e("input.mdt-link-color, input.mdt-link-brcolor, input.mdt-link-bgcolor","#mdf-toolbar").spectrum({clickoutFiresChange:true,showInput:true,showAlpha:true,preferredFormat:"rgb",move:function(t){e(this).val(t.toRgbString()).trigger("change")}});e("#dlg-video").dialog({resizable:false,autoOpen:false,draggable:false,modal:true,width:680,buttons:{OK:function(){t.panel.setVideoData(e("#video-id").val(),e("#video-name").val(),e("#video-thumb").attr("src"),e("#video-thumb-id").val());e(this).dialog("close")}},open:function(){if(t.selectedItem!=null){var n=t.selectedItem.getItemValues();e("#video-url").val("");e("#video-id").val(n.fileid);e("#video-name").val(n.title);e("#video-thumb-id").val(n.thumbid);e("#video-thumb").attr("src",n.thumb)}},close:function(){}});e("#mdf-edit-video").click(function(){e("#dlg-video").dialog("open");return false});e("#videothumb-pick").click(function(){var t=new MdImagePopup({onSubmit:function(t,n){e("#video-thumb").attr("src",t);e("#video-thumb-id").val(n.fileid)}});return false});e("#video-search").click(function(){var t=e("#video-url").val();new submitVideo(t,function(t){e("#video-id").val(t.id);e("#video-name").val(t.title);e("#video-thumb").attr("src",t.thumb)});return false});e("#mdf-toolbar .mdt-input").change(function(){var n=e(this).attr("name");switch(n){case"width":case"height":t.panel.setItemSize(e("#mdf-toolbar input.mdt-width").val(),e("#mdf-toolbar input.mdt-height").val());break;case"left":case"top":t.panel.setItemAttribute(n,e(this).val());break;case"startani":case"stopani":case"startaniTime":case"stopaniTime":t.panel.setItemData(n,e(this).val());break;case"color":case"backgroundColor":case"opacity":t.panel.setItemCss(n,e(this).val());break;case"paddingTop":case"paddingBottom":case"paddingRight":case"paddingLeft":case"borderTopLeftRadius":case"borderTopRightRadius":case"borderBottomRightRadius":case"borderBottomLeftRadius":t.panel.setItemCssPx(n,e(this).val());break;case"fontWeight":t.panel.setItemFontWeight(e(this).val());break;case"fontSize":case"lineHeight":t.panel.setItemCssPx(n,e(this).val());break;case"link":case"linkColor":case"linkBorderColor":case"linkBackgroundColor":case"linkTarget":case"linkCustomClass":case"customClass":case"customCss":t.panel.setItemData(n,e(this).val());break;case"shadowAngle":case"shadowOffset":case"shadowBlur":case"shadowColor":t.panel.setItemShadow(n,e(this).val());break;default:t.panel.setItemCss(n,e(this).val())}return false});e("#mdf-toolbar a.button-style").click(function(){if(e(this).hasClass("active")){t.panel.setItemCss(e(this).attr("name"),e(this).attr("normal"));e(this).removeClass("active")}else{t.panel.setItemCss(e(this).attr("name"),e(this).attr("active"));e(this).addClass("active")}return false});e("#mdf-toolbar a.button-align").click(function(){if(e(this).hasClass("active")){if(e(this).hasClass("mdt-left-alignment"))return;t.panel.setItemCss("textAlign","left");e("#mdf-toolbar a.mdt-left-alignment").addClass("active");e(this).removeClass("active")}else{t.panel.setItemCss("textAlign",e(this).attr("value"));e("#mdf-toolbar a.button-align").removeClass("active");e(this).addClass("active")}return false});e("#mdf-toolbar a.mdt-btn-align").click(function(){if(e(this).hasClass("mdt-align-left")){t.panel.alignLeftSelectedBox()}else if(e(this).hasClass("mdt-align-right")){t.panel.alignRightSelectedBox()}else if(e(this).hasClass("mdt-align-center")){t.panel.alignCenterSelectedBox()}else if(e(this).hasClass("mdt-align-top")){t.panel.alignTopSelectedBox()}else if(e(this).hasClass("mdt-align-bottom")){t.panel.alignBottomSelectedBox()}else if(e(this).hasClass("mdt-align-vcenter")){t.panel.alignMiddleSelectedBox()}return false});e("#mdf-toolbar a.mdt-btn-space").click(function(){if(e(this).hasClass("mdt-spacev")){t.panel.spaceVertical(e("input.mdt-spacei","#mdf-toolbar").val())}else if(e(this).hasClass("mdt-spaceh")){t.panel.spaceHorizontal(e("input.mdt-spacei","#mdf-toolbar").val())}return false});this.hideToolbar();e("#mdf-toolbar").tinyscrollbar_update("relative")},changeSelectItem:function(e,t){this.selectedItem=e;this.triggerChangeSelectItem(t)},triggerChangeSelectItem:function(t){if(t){this.showToolbarMultiSelect()}else{if(this.selectedItem==null){this.hideToolbar()}else{this.changeToolbarValue()}}setTimeout(function(){e("#mdf-toolbar").tinyscrollbar_update("relative")},450)},showToolbarMultiSelect:function(){e("#mdf-toolbar .box-item:not(.box-align)").hide();e("#mdf-toolbar .box-item.box-align").slideDown()},hideToolbar:function(){e("#mdf-toolbar .box-item").hide()},changeToolbarValue:function(){if(this.selectedItem!=null){var t=this.selectedItem.getItemValues();e("#mdf-toolbar input.mdt-width").val(t.width);e("#mdf-toolbar input.mdt-height").val(t.height);e("#mdf-toolbar .mdt-proportions").trigger("click");e("#mdf-toolbar input.mdt-left").val(t.left);e("#mdf-toolbar input.mdt-top").val(t.top);e("#mdf-toolbar select.mdt-startani").val(t.startani);e("#mdf-toolbar select.mdt-stopani").val(t.stopani);e("#mdf-toolbar input.mdt-startani-time").val(t.startaniTime);e("#mdf-toolbar input.mdt-stopani-time").val(t.stopaniTime);e("#mdf-toolbar input.mdt-color").spectrum("set",t.color);e("#mdf-toolbar input.mdt-background-color").spectrum("set",t.backgroundColor);if(t.opacity){e("#mdf-toolbar #mdt-opacity-slider").slider("value",t.opacity*100);e("#mdf-toolbar input.mdt-opacity").val(t.opacity)}else{e("#mdf-toolbar #mdt-opacity-slider").slider("value",100);e("#mdf-toolbar input.mdt-opacity").val(100)}e("#mdf-toolbar input.mdt-p-top").val(t.paddingTop);e("#mdf-toolbar input.mdt-p-right").val(t.paddingRight);e("#mdf-toolbar input.mdt-p-bottom").val(t.paddingBottom);e("#mdf-toolbar input.mdt-p-left").val(t.paddingLeft);if(t.padding){e("#checkbox-padding").prop("checked",true).trigger("change")}else{e("#checkbox-padding").prop("checked",false).trigger("change")}e("#mdf-toolbar input.mdt-border-width").val("");e("#mdf-toolbar select.mdt-border-style").val("");e("#mdf-toolbar input.border-color").spectrum("set","");e("#border-position a.bp-border").removeClass("active selected");e("#border-position a.bp-all").attr("attr-border",t.borderAll).toggleClass("active",n(t.borderAll));e("#border-position a.bp-top").attr("attr-border",t.borderTop).toggleClass("active",n(t.borderTop));e("#border-position a.bp-right").attr("attr-border",t.borderRight).toggleClass("active",n(t.borderRight));e("#border-position a.bp-bottom").attr("attr-border",t.borderBottom).toggleClass("active",n(t.borderBottom));e("#border-position a.bp-left").attr("attr-border",t.borderLeft).toggleClass("active",n(t.borderLeft));if(t.border){e("#checkbox-border").prop("checked",true).trigger("change")}else{e("#checkbox-border").prop("checked",false).trigger("change")}e("#mdf-toolbar input.mdt-br-topleft").val(t.borderTopLeftRadius);e("#mdf-toolbar input.mdt-br-topright").val(t.borderTopRightRadius);e("#mdf-toolbar input.mdt-br-bottomleft").val(t.borderBottomRightRadius);e("#mdf-toolbar input.mdt-br-bottomright").val(t.borderBottomLeftRadius);e("#shadow-content input.shadow-angle").val(t.shadowAngle).trigger("change");e("#mdf-toolbar #mdt-shadow-offset").slider("value",t.shadowOffset||0);e("#mdf-toolbar #mdt-shadow-blur").slider("value",t.shadowBlur||0);e("#mdf-toolbar input.shadow-offset").val(t.shadowOffset);e("#mdf-toolbar input.shadow-blur").val(t.shadowBlur);e("#shadow-content input.shadow-color").spectrum("set",t.shadowColor);if(t.shadow){e("#checkbox-drop-shadow").prop("checked",true).trigger("change")}else{e("#checkbox-drop-shadow").prop("checked",false).trigger("change")}e("#mdf-toolbar input.mdt-link-value").val(t.link);e("#mdf-toolbar input.mdt-link-color").spectrum("set",t.linkColor);e("#mdf-toolbar input.mdt-link-brcolor").spectrum("set",t.linkBorderColor);e("#mdf-toolbar input.mdt-link-bgcolor").spectrum("set",t.linkBackgroundColor);e("#mdf-toolbar select.mdt-link-target").val(t.linkTarget);e("#mdf-toolbar input.mdt-link-custom-class").val(t.linkCustomClass);e("#mdf-toolbar input.mdt-customclass").val(t.customClass);e("#mdf-toolbar input.mdt-customcss").val(t.customCss);if(t.type=="text"){e("#mdf-toolbar textarea.mdt-texttitle").val(t.title);e("#mdf-toolbar .box-item.box-text").slideDown();e("#mdf-toolbar .box-item:not(.box-text)").hide();e("#mdf-toolbar select.mdt-font-family").val(t.fontFamily).trigger("updatevalue");e("#mdf-toolbar select.mdt-font-weight").val(t.fontWeight);e("#mdf-toolbar input.mdt-fontsize").val(t.fontSize);e("#mdf-toolbar input.mdt-lineheight").val(t.lineHeight);e("#mdf-toolbar a.mdt-font-bold").toggleClass("active",t.fontWeight=="bold");e("#mdf-toolbar a.mdt-font-italic").toggleClass("active",t.fontStyle=="italic");e("#mdf-toolbar a.mdt-font-underline").toggleClass("active",t.textDecoration=="underline");e("#mdf-toolbar a.mdt-font-allcaps").toggleClass("active",t.textTransform=="uppercase");e("#mdf-toolbar a.mdt-left-alignment").toggleClass("active",t.textAlign=="left");e("#mdf-toolbar a.mdt-center-alignment").toggleClass("active",t.textAlign=="center");e("#mdf-toolbar a.mdt-right-alignment").toggleClass("active",t.textAlign=="right");e("#mdf-toolbar a.mdt-justified-alignment").toggleClass("active",t.textAlign=="justified")}else if(t.type=="image"){e("#mdf-toolbar input.mdt-alt-image").val(t.title);e("#mdf-toolbar .box-item.box-image").slideDown();e("#mdf-toolbar .box-item:not(.box-image)").hide()}else if(t.type=="video"){e("textarea.mdt-videoname","#mdf-toolbar").val(t.title);e("input.mdt-video-fileid","#mdf-toolbar").val(t.fileid);e("img.mdt-videosrc","#mdf-toolbar").attr("src",t.thumb);e("#mdf-toolbar .box-item.box-video").slideDown();e("#mdf-toolbar .box-item:not(.box-video)").hide()}}},changePositionValue:function(t,n){e("input.mdt-left","#mdf-toolbar").val(Math.round(t));e("input.mdt-top","#mdf-toolbar").val(Math.round(n))},changeSizeValue:function(t,n){e("input.mdt-width","#mdf-toolbar").val(Math.round(t));e("input.mdt-height","#mdf-toolbar").val(Math.round(n))},changeTimelineValue:function(){if(this.selectedItem!=null){e("input.mdt-starttime","#mdf-toolbar").val(Math.round(this.selectedItem.data("starttime")));e("input.mdt-stoptime","#mdf-toolbar").val(Math.round(this.selectedItem.data("stoptime")))}},changeFontWeightOption:function(n){var r='<option value=""></option>';var i=e("#mdf-toolbar select.mdt-font-weight").data("value");if(n){var s=n.split(",");for(var o=0;o<s.length;o++){var u=s[o].replace(/^\s+|\s+$/g,"");r+='<option value="'+u+'">'+t[u]+"</option>"}}e("#mdf-toolbar select.mdt-font-weight").html(r).val(i)},focusEdit:function(){if(this.selectedItem!=null){var t=this.selectedItem.data("type");if(t=="text"){e("textarea.mdt-textvalue","#mdf-toolbar").focus()}else if(t=="image"){e("#mdf-edit-image").trigger("click")}else if(t=="video"){e("#mdf-edit-video").trigger("click")}}},changePositionLeft:function(t){e("#mdf-toolbar input.mdt-left").val(Math.round(t))},changePositionTop:function(t){e("#mdf-toolbar input.mdt-top").val(Math.round(t))}}})(jQuery)