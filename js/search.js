// build time:Fri May 17 2019 16:36:24 GMT+0800 (GMT+08:00)
var searchFunc=function(t,e,r){function i(t){t=t.replace(/<style([\s\S]*?)<\/style>/gi,"");t=t.replace(/<script([\s\S]*?)<\/script>/gi,"");t=t.replace(/<\/div>/gi,"\n");t=t.replace(/<\/li>/gi,"\n");t=t.replace(/<li>/gi,"  *  ");t=t.replace(/<\/ul>/gi,"\n");t=t.replace(/<\/p>/gi,"\n");t=t.replace(/<br\s*[\/]?>/gi,"\n");t=t.replace(/<[^>]+>/gi,"");return t}function n(t){var e,r,i=[];for(e=0;e<t.length;e++){for(r=e+1;r<t.length+1;r++){i.push(t.slice(e,r).join(" "))}}return i}$.ajax({url:t,dataType:"xml",success:function(t){var a=$("entry",t).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("link",this).attr("href")}}).get();var l=document.getElementById(e);if(!l){return}var s=document.getElementById(r);l.addEventListener("input",function(){var t=[];var e=n(this.value.trim().toLowerCase().split(" ")).sort(function(t,e){return e.split(" ").length-t.split(" ").length});s.innerHTML="";if(this.value.trim().length<=0){return}a.forEach(function(r){var n=0;if(!r.title||r.title.trim()===""){r.title="Untitled"}var a=r.title.trim().toLowerCase();var l=i(r.content.trim());var s=r.url;var c=-1;var u=-1;var f=-1;if(l!==""){e.forEach(function(t){c=a.indexOf(t);u=l.toLowerCase().indexOf(t);if(c>=0||u>=0){n+=1;if(u<0){u=0}if(f<0){f=u}}})}if(n>0){var o={};o.rank=n;o.str="<li><a href='"+s+"' class='search-result-title'>"+a+"</a>";if(f>=0){var v=f-20;var h=f+80;if(v<0){v=0}if(v==0){h=100}if(h>l.length){h=l.length}var p=l.substr(v,h);var g=new RegExp(e.join("|"),"gi");p=p.replace(g,function(t){return'<em class="search-keyword">'+t+"</em>"});o.str+='<p class="search-result">'+p+"...</p>"}o.str+="</li>";t.push(o)}});t.sort(function(t,e){return e.rank-t.rank});var r='<ul class="search-result-list">';for(var l=0;l<t.length;l++){r+=t[l].str}r+="</ul>";s.innerHTML=r})}})};
//rebuild by neat 