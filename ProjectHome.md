var relatedTitles = new Array();
var relatedTitlesNum = 0;
var relatedUrls = new Array();
var thumburl = new Array();
function related\_results\_labels\_thumbs(json) {
for (var i = 0; i < json.feed.entry.length; i++) {
var entry = json.feed.entry[i](i.md);
relatedTitles[relatedTitlesNum](relatedTitlesNum.md) = entry.title.$t;
try
{thumburl[relatedTitlesNum](relatedTitlesNum.md)=entry.media$thumbnail.url;}


catch (error){

s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);
if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))
{thumburl[relatedTitlesNum](relatedTitlesNum.md)=d;} else {if(typeof(defaultnoimage) !== 'undefined') thumburl[relatedTitlesNum](relatedTitlesNum.md)=defaultnoimage; else thumburl[relatedTitlesNum](relatedTitlesNum.md)="![http://3.bp.blogspot.com/-PpjfsStySz0/UF91FE7rxfI/AAAAAAAACl8/092MmUHSFQ0/s1600/no_image.jpg](http://3.bp.blogspot.com/-PpjfsStySz0/UF91FE7rxfI/AAAAAAAACl8/092MmUHSFQ0/s1600/no_image.jpg)";}

}

if(relatedTitles[relatedTitlesNum](relatedTitlesNum.md).length>35) relatedTitles[relatedTitlesNum](relatedTitlesNum.md)=relatedTitles[relatedTitlesNum](relatedTitlesNum.md).substring(0, 35)+"...";
for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k](k.md).rel == 'alternate') {
relatedUrls[relatedTitlesNum](relatedTitlesNum.md) = entry.link[k](k.md).href;
relatedTitlesNum++;


}
}
}
}
function removeRelatedDuplicates\_thumbs() {
var tmp = new Array(0);
var tmp2 = new Array(0);
var tmp3 = new Array(0);
for(var i = 0; i < relatedUrls.length; i++) {
if(!contains\_thumbs(tmp, relatedUrls[i](i.md)))
{
tmp.length += 1;
tmp[tmp.length - 1] = relatedUrls[i](i.md);
tmp2.length += 1;
tmp3.length += 1;
tmp2[tmp2.length - 1] = relatedTitles[i](i.md);
tmp3[tmp3.length - 1] = thumburl[i](i.md);
}
}
relatedTitles = tmp2;
relatedUrls = tmp;
thumburl=tmp3;


}

function contains\_thumbs(a, e) {
for(var j = 0; j < a.length; j++) if (a[j](j.md)==e) return true;
return false;
}


function printRelatedLabels\_thumbs(current) {
var splitbarcolor;
if(typeof(splittercolor) !== 'undefined') splitbarcolor=splittercolor; else splitbarcolor="#DDDDDD";
for(var i = 0; i < relatedUrls.length; i++)
{
if((relatedUrls[i](i.md)==current)||(!relatedTitles[i](i.md)))
{
relatedUrls.splice(i,1);
relatedTitles.splice(i,1);
thumburl.splice(i,1);
i--;
}
}


var r = Math.floor((relatedTitles.length - 1) **Math.random());
var i = 0;**

if(relatedTitles.length>0) document.write('<h2>'+relatedpoststitle+'</h2>');
document.write('<div />');
while (i < relatedTitles.length && i < 20 && i<maxresults) {
document.write('<a style="text-decoration:none;padding:5px;float:left;');
if(i!=0) document.write('border-left:solid 0.5px '+splitbarcolor+';"');
else document.write('"');
document.write(' href="' + relatedUrls[r](r.md) + '"><img src="'+thumburl[r]+'" /><br /><div>'+relatedTitles<a href='r.md'>r</a>+'</div>

Unknown end tag for &lt;/a&gt;

');

i++;


if (r < relatedTitles.length - 1) {
r++;
} else {
r = 0;
}

}
document.write('

Unknown end tag for &lt;/div&gt;

');

relatedUrls.splice(0,relatedUrls.length);
thumburl.splice(0,thumburl.length);
relatedTitles.splice(0,relatedTitles.length);

}