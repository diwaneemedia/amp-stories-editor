webpackJsonp([0],[,function(e,t,a){"use strict";a(2);a(4)()},function(e,t){},,function(e,t,a){"use strict";var n=a(0),i=a(5),s=a(6);e.exports=function(){function e(){var e=n(this),t=n(".c-canvas--center .c-canvas__bcg-img"),a=t.attr("data-page"),i=t.attr("data-name"),s={data:T.pages[a][i],pageName:a,propName:i};if(console.log(s),!e.hasClass("selected")){n(".b-ui__tool__edit-bcg .selected").removeClass("selected"),e.addClass("selected");w.find(".c-canvas--center .c-canvas__bcg-img img").attr("src",e.attr("data-src")),l(s),T.pages[a][i].src=e.attr("data-src"),console.log(D)}}function t(){var e=n(".b-ui__tool__edit-text__item.color input");if(e)return e.val()}function a(){C.find(".active").removeClass("active")}function o(e){e.stopPropagation();var t=n(this),i=n(".b-ui__tool__"+t.attr("data-toolclass"));n(".b-ui__main__inner.canvas"),n(".b-ui__main__inner.reposition-background");console.log(t.data("toolclass")),"edit-text"!=t.data("toolclass")&&n(".c-canvas--center .selected").removeClass("selected"),t.hasClass("selected")||(n(".b-ui__menu .c-ui-btn.selected").removeClass("selected"),t.addClass("selected")),i.hasClass("active")||(a(),i.addClass("active"))}function l(e){var t=e.data;D.tools[t.toolForEdit].pageName=e.pageName,D.tools[t.toolForEdit].propName=e.propName,console.log("STATE UPDATED"),console.log(D.tools[t.toolForEdit])}function c(e){var t=D.tools.editText.pageName,a=D.tools.editText.propName;n("#"+t+" ."+a).css({color:e}),T.pages[t][a].css.color=e,console.log("New color is "+T.pages[t][a].css.color)}function d(e){console.log("FontWeight updated");var t=D.tools.editText.pageName,a=D.tools.editText.propName,i=n("#"+t+" ."+a),s=e.target.checked?"700":"400";i.css({"font-weight":""+s}),T.pages[t][a].css.weight=s,console.log("New font weight is: "+T.pages[t][a].css.weight)}function r(e){console.log("FontItalic updated");var t=D.tools.editText.pageName,a=D.tools.editText.propName,i=n("#"+t+" ."+a),s=e.target.checked?"italic":"normal";i.css({"font-style":""+s}),T.pages[t][a].css.style=s,console.log("New font style is: "+T.pages[t][a].css.style)}function p(e){console.log("Font Underline updated");var t=D.tools.editText.pageName,a=D.tools.editText.propName,i=n("#"+t+" ."+a),s=e.target.checked?"underline":"none";i.css({"text-decoration":""+s}),T.pages[t][a].css.decoration=s,console.log("New font style is: "+T.pages[t][a].css.decoration)}function _(e){console.log("Font Alignment updated");var t=D.tools.editText.pageName,a=D.tools.editText.propName,i=n("#"+t+" ."+a),s=e.target.checked?"center":"left";i.css({"text-align":""+s}),T.pages[t][a].css.align=s,console.log("New text alignment is: "+T.pages[t][a].css.align)}function u(e){console.log("FontSize update");var t=D.tools.editText.pageName,a=D.tools.editText.propName,i=n("#"+t+" ."+a),s=n(".b-ui__tool__edit-text__item.size input"),o=void 0;38==e.which||104==e.which?(s.val(parseInt(s.val())+1),o=s.val(),i.css({fontSize:o+"px"}),T.pages[t][a].css.size=o,console.log("New font size is: "+T.pages[t][a].css.size)):40==e.which||98==e.which?(s.val(parseInt(s.val())-1),o=s.val(),i.css({fontSize:o+"px"}),T.pages[t][a].css.size=o,console.log("New font size is: "+T.pages[t][a].css.size)):13==e.which&&(s.val(parseInt(s.val())),o=s.val(),i.css({fontSize:o+"px"}),T.pages[t][a].css.size=o,console.log("New font size is: "+T.pages[t][a].css.size))}function g(e){console.log("Text update");var t=D.tools.editText.pageName,a=D.tools.editText.propName,i=n("#"+t+" ."+a),s=n(".b-ui__tool__edit-text__item.label textarea");console.log(s.val()),i.text(s.val()),T.pages[t][a].text=s.val(),console.log("New Text is: "+T.pages[t][a].text)}function f(e){var a=e.data.css,i="400"==a.weight?"":"checked",s="normal"==a.style?"":"checked",o="none"==a.decoration?"":"checked",l="left"==a.align?"":"checked";n(".b-ui__tool .b-ui__tool__edit-text__inner").empty().append("\n              <div class=\"b-ui__tool__edit-text__item family\">\n                  <span class='icon'>Aa</span>\n                  <div class='list'>\n                    <span class='selected'>"+a.font+"</span>\n                    <ul>\n                        <li data-font='Arial'> Arial </li>\n                        <li data-font='Arial Black'> Arial Black</li>\n                        <li data-font='Helvetica'> Helvetica </li>\n                        <li data-font='Times'> Times </li>\n                        <li data-font='Verdana'> Verdana </li>\n                        <li data-font='Georgia'> Georgia </li>\n                        <li data-font='Palatino'> Palatino </li>\n                        <li data-font='Bookman'> Bookman </li>\n                    </ul>\n                  </div>\n              </div>\n              <div class=\"b-ui__tool__edit-text__item size\">\n                  <input class='font-size' type=\"text\" value=\""+a.size+'">\n                  <span class=\'text\'>Font Size</span>\n              </div>\n              <div class="b-ui__tool__edit-text__item color">\n                  <span class=\'icon\'>\n                      <input type="color" name="favcolor" value="'+a.color+"\">\n                  </span>\n                  <span class='text'>"+a.color+"</span>\n              </div>\n              <div class=\"b-ui__tool__edit-text__item add-remove\">\n                    <div class='item'>\n                        <span class='btn'>+</span>\n                        <span class='label'>Add Label</span>\n                    </div>\n                    <div class='item'>\n                        <span class='btn'>-</span>\n                        <span class='label'>Delete Label</div>\n                    </div>\n              </div>\n              <div class=\"b-ui__tool__edit-text__item label\">\n                  <textarea rows=\"10\">"+e.data.text+'</textarea>\n              </div>\n              <div class="b-ui__tool__edit-text__item switches">\n                  <label class="c-switch" for=\'bold\'>\n                    <input type="checkbox" id=\'bold\' '+i+">\n                    <span class=\"slider round\"></span>\n                    <span class='c-switch__title'>Bold</span>\n                  </label>\n                  <label class=\"c-switch\" for='italic'>\n                    <input type=\"checkbox\" id='italic' "+s+">\n                    <span class=\"slider round\"></span>\n                    <span class='c-switch__title'>Italic</span>\n                  </label>\n                  <label class=\"c-switch\" for='underline'>\n                    <input type=\"checkbox\" id='underline' "+o+">\n                    <span class=\"slider round\"></span>\n                    <span class='c-switch__title'>Underline</span>\n                  </label>\n                  <label class=\"c-switch\" for='center'>\n                    <input type=\"checkbox\" id='center' "+l+">\n                    <span class=\"slider round\"></span>\n                    <span class='c-switch__title'>Center</span>\n                  </label>\n              </div>\n            ");var f=n(".b-ui__tool__edit-text__item.color input"),v=n(".b-ui__tool__edit-text__item.size input"),b=n(".b-ui__tool__edit-text__item.label textarea"),m=n(".b-ui__tool__edit-text__item.switches #bold"),x=n(".b-ui__tool__edit-text__item.switches #italic"),h=n(".b-ui__tool__edit-text__item.switches #underline"),y=n(".b-ui__tool__edit-text__item.switches #center"),N=n(".b-ui__tool__edit-text__item.family .selected"),S=n(".b-ui__tool__edit-text__item.family .list ul"),k=S.find("li");f.on("change",function(){var e=t();c(e),n(".b-ui__tool__edit-text__item.color .text").text(e)}),v.on("keyup",u),b.on("keyup",g),m.on("click",d),x.on("click",r),h.on("click",p),y.on("click",_),N.on("click",function(){S.slideToggle()}),k.on("click",function(){var e=n(this),t=e.data("font"),a=D.tools.editText.pageName,i=D.tools.editText.propName,s=n("#"+a+" ."+i);console.log(t),s.css({"font-family":""+t}),T.pages[a][i].css.font=t,S.slideUp(200),N.text(t)})}function v(){console.log(JSON.stringify(T))}function b(e){var t=D.tools.editText,a=(n(".b-ui__tool__edit-text"),n(".c-ui-btn--edit-text").hasClass("selected"));return console.log(t),!(t.pageName!=e.pageName||t.propName!=e.propName||!a)}function m(e){e.stopPropagation(),n(".c-canvas--center .selected").removeClass("selected")}function x(e){console.log("text tool called"),console.log(e);var t=(D.tools.editText,n(".b-ui__tool__edit-text"));if(t.hasClass("active")){if(b(e))return void console.log("ALREADY ACTIVE - RETURN");l(e),f(e)}else a(),l(e),f(e),t.addClass("active")}function h(e){e.hasClass("selected")||(n(".c-canvas--center").find(".dragableText.selected").removeClass("selected"),e.addClass("selected"))}function y(e){e.stopPropagation(),console.log("klik");var t=n(this),a=t.attr("data-page"),i=t.attr("data-name"),s={data:T.pages[a][i],pageName:a,propName:i};console.log({isTextToolActive:b(s)}),b(s)||(x(s),h(t),n(".c-ui-btn--edit-text").hasClass("selected")||(n(".b-ui__menu .c-ui-btn.selected").removeClass("selected"),n(".c-ui-btn--edit-text").addClass("selected")))}function N(e){var t=e.target,a=t.getAttribute("data-page"),i=t.getAttribute("data-name"),s={data:T.pages[a][i],pageName:a,propName:i};console.log(t.classList[0]),x(s),h(n(".c-canvas--center ."+t.classList[0])),n(".c-ui-btn--edit-text").hasClass("selected")||(n(".b-ui__menu .c-ui-btn.selected").removeClass("selected"),n(".c-ui-btn--edit-text").addClass("selected"))}function S(e){var t=e.target,a=t.getAttribute("data-page"),n=t.getAttribute("data-name");T.pages[a][n];T.pages[a][n].css.x=t.getAttribute("data-x"),T.pages[a][n].css.y=t.getAttribute("data-y"),console.log("DRAG END"),console.log("X: ",t.getAttribute("data-x")),console.log("Y: ",t.getAttribute("data-y"))}function k(e){console.log(e.target.getAttribute("data-x"));var t=e.target,a=(parseFloat(t.getAttribute("data-x"))||0)+e.dx,n=(parseFloat(t.getAttribute("data-y"))||0)+e.dy;t.style.transform="translate("+a+"px, "+n+"px)",t.setAttribute("data-x",a),t.setAttribute("data-y",n)}var T={story:{pagesCount:1,title:"AMP story builder",publisher:"Diwanee Serbia",publisherLogoSrc:"src/logo.jpg",posterPortraitSrc:"src/posterPortrait.jpg",ads:!1},pages:{page1:{id:1,background:{toolForEdit:"editBcg",src:"/assets/img/placeholder.jpg"},title:{toolForEdit:"editText",text:"Dummy Title",css:{color:"#ff0000",font:"Arial Black",size:"32",weight:"400",decoration:"none",align:"left",x:"30",y:"50"}},description:{toolForEdit:"editText",text:"Dummy Description text, type here your content.",css:{color:"#ffffff",font:"Helvetica",size:"24",weight:"400",decoration:"none",align:"left",x:"30",y:"300"}}}},slider:{count:0,currentSlide:0}},w=n(".b-ui"),A=w.find(".b-ui__main"),C=w.find(".b-ui__tools"),z=w.find(".c-ui-btn"),E=(w.find(".b-ui__tool__edit-bcg"),w.find(".b-ui__tool__edit-text"),w.find(".b-ui__tool__edit-bcg__item")),D=(w.find(".c-canvas--center"),w.find(".c-canvas--center"),w.find(".c-canvas--center"),{tools:{editBcg:{src:"/assets/img/placeholder.jpg",pageName:"page1",propName:"background"},editText:{pageName:"page1",propName:""}}});!function(){var e=T.pages.page1;e.title.css,e.description.css,s.addSlide(A,T),n(".dragableText").click(y),i.generateGlobalSettings(w,T.story)}(),E.click(e),z.click(o),A.click(m),n(".get-json").click(v),n(".b-ui__tool__edit-layout__add-remove .item").click(function(){console.log("NEW SLIDE"),s.addSlide(A,T),n(".dragableText").click(y)}),n(".control.left").click(function(){console.log("PREV SLIDE"),s.prevSlide(A,T),n(".dragableText").click(y)}),n(".control.right").click(function(){console.log("Next SLIDE"),s.nextSlide(A,T),n(".dragableText").click(y)}),function(){interact(".dragableText").draggable({restrict:{restriction:"parent",endOnly:!0,elementRect:{top:0,left:0,bottom:1,right:1}},onmove:k,onstart:N,onend:S}),console.log("bind interactJS")}()}},function(e,t,a){"use strict";var n=a(0);e.exports={generateGlobalSettings:function(e,t){console.log(e,t);var a=t.ads?"checked":"";e.find(".b-ui__tool .b-ui__tool__edit-general__inner").append('\n            <div class=\'b-ui__tool__edit-general__info\'>\n                <div class="b-ui__tool b-ui__tool__edit-general__item">\n                    <span>title</span>\n                    <input type="text" value="'+t.title+'" data-prop=\'title\'>\n                  </div>\n                  <div class="b-ui__tool b-ui__tool__edit-general__item">\n                    <span>publisher</span>\n                    <input type="text" value="'+t.publisher+'" data-prop=\'publisher\'>\n                  </div>\n                  <div class="b-ui__tool b-ui__tool__edit-general__item">\n                    <span>publisher-logo-source</span>\n                    <input type="text" value="'+t.publisherLogoSrc+'" data-prop=\'publisherLogoSrc\'>\n                  </div>\n                  <div class="b-ui__tool b-ui__tool__edit-general__item">\n                    <span>poster-portrait-source</span>\n                    <input type="text" value="'+t.posterPortraitSrc+"\" data-prop='posterPortraitSrc'>\n                  </div>\n            </div>\n            <div class='b-ui__tool__edit-general__ads'>\n                <div class=\"b-ui__tool b-ui__tool__edit-general__item-ads\">\n                    <label class=\"c-switch\" for='ads'>\n                      <input type=\"checkbox\" id='ads' "+a+">\n                      <span class=\"slider round\"></span>\n                      <span class='c-switch__title'>Ads</span>\n                    </label>\n                </div>\n            </div>\n             \x3c!-- <button class='get-json'>Generate JSON</button> --\x3e\n            ");var i=n(".b-ui__tool__edit-general__info input"),s=n("#ads");i.on("change",function(e){var a=n(this),i=a.data("prop");t[i]=a.val(),console.log(t)}),s.on("click",function(e){t.ads=e.target.checked})}}},function(e,t,a){"use strict";function n(e){return"color:"+e.color+";\n     font-family:"+e.font+";\n     font-size:"+e.size+"px;\n     font-weight:"+e.weight+";\n     font-style:"+e.style+";\n     text-align:"+e.align+";\n     text-decoration:"+e.decoration+";"}function i(e,t){console.log({pageObj:e,inCenter:t});var a=t?"dragableText":"",i=t?1:.9;return' <div class="" id=\'page'+e.id+'\'>\n        <div class="c-canvas__bcg-img" data-page="page'+e.id+'" data-name="background">\n            <img src="'+e.background.src+'" alt="">\n        </div>\n        <div class="c-canvas__title '+a+'"\n             data-page="page'+e.id+'"\n             data-name="title"\n             data-x='+e.title.css.x+"\n             data-y="+e.title.css.y+'\n             style="transform: translate('+e.title.css.x*i+"px,"+e.title.css.y*i+'px)"\n        >\n            <h1\n            class="title"\n            style="'+n(e.title.css)+'"\n            >'+e.title.text+'</h1>\n        </div>\n        <div class="c-canvas__description '+a+'"\n             data-page="page'+e.id+'"\n             data-name="description"\n             data-x='+e.description.css.x+"\n             data-y="+e.description.css.y+'\n             style="transform: translate('+e.description.css.x*i+"px,"+e.description.css.y*i+'px)"\n        >\n            <p\n            class="description"\n            style="'+n(e.description.css)+'"\n            >'+e.description.text+"</p>\n        </div>\n    </div>"}var s=a(0);e.exports={addSlide:function(e,t){var a=t.slider,n=e.find(".c-canvas--left"),o=e.find(".c-canvas--center"),l=e.find(".c-canvas--right"),c=s(".b-slider"),d=c.find(".b-slider__dots"),r=c.find(".b-slider__current-num span");a.count++,a.currentSlide=a.count;var p={id:a.count,background:{toolForEdit:"editBcg",src:"assets/img/placeholder.jpg"},title:{toolForEdit:"editText",text:"Dummy Title",css:{color:"#ff0000",font:"Arial Black",size:"32",weight:"400",style:"normal",decoration:"none",align:"left",x:"30",y:"50"}},description:{toolForEdit:"editText",text:"Dummy Description text, type here your content.",css:{color:"#ffffff",font:"Helvetica",size:"24",weight:"400",style:"normal",decoration:"none",align:"left",x:"30",y:"300"}}};t.pages["page"+a.count]=p,o.empty().append(i(p,!0)),a.count>1&&n.empty().append(i(t.pages["page"+(a.currentSlide-1)],!1)),l.empty(),d.find(".current").removeClass("current"),d.append("<span class='dot current'></span>"),r.text(a.count),console.log(t)},prevSlide:function(e,t){var a=t.slider,n=e.find(".c-canvas--left"),o=e.find(".c-canvas--center"),l=e.find(".c-canvas--right"),c=s(".b-slider"),d=c.find(".b-slider__dots"),r=c.find(".b-slider__current-num span");if(console.log(a.currentSlide),1==a.currentSlide)return void console.log("YOU ARE ON FIRST SLIDE");l.empty().append(i(t.pages["page"+a.currentSlide],!1)),a.currentSlide--,o.empty().append(i(t.pages["page"+a.currentSlide],!0)),a.currentSlide>1?n.empty().append(i(t.pages["page"+(a.currentSlide-1)],!1)):n.empty(),d.find(".current").removeClass("current").prev().addClass("current"),r.text(a.currentSlide)},nextSlide:function(e,t){var a=t.slider,n=e.find(".c-canvas--left"),o=e.find(".c-canvas--center"),l=e.find(".c-canvas--right"),c=s(".b-slider"),d=c.find(".b-slider__dots"),r=c.find(".b-slider__current-num span");if(console.log(a.currentSlide),a.currentSlide==a.count)return void console.log("YOU ARE ON LAST SLIDE");n.empty().append(i(t.pages["page"+a.currentSlide],!1)),a.currentSlide++,o.empty().append(i(t.pages["page"+a.currentSlide],!0)),a.currentSlide<a.count?l.empty().append(i(t.pages["page"+(a.currentSlide+1)],!1)):l.empty(),d.find(".current").removeClass("current").next().addClass("current"),r.text(a.currentSlide)}}}],[1]);