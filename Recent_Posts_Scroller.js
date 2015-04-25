/*
 *	Advenced Recent Posts Scroller Version 1.0.0.1 For Blogger
 *	Widget By TheFalseMasters
 *	Url: http://www.TheFalseMasters.blogspot.in/
 *	Copyright © 2015, by Ataullah (TheFalseMasters)
 */

function TFMAdvRecentPostsScrollerv3(json) {
	var TFMrecentposts;
	var TFMpostlink;
	var TFMobj;
	var TFMmarqueehtml;
	var TFMmarqueehtml2;
	var byTheFalseMasters;
	var TFMlinkgap;
	var TFMposttargetlink;
	var TFMBullet;
	try {
		TFMmarqueehtml = "\<marquee behavior=\"scroll\" onmouseover=\"this.stop();\" onmouseout=\"this.start();\" ";

		if (TFMScrollAmount) {
			TFMmarqueehtml = TFMmarqueehtml + " scrollamount = \"" + TFMScrollAmount + "%\"";
		} 
		if (TFMWidth) {
			TFMmarqueehtml = TFMmarqueehtml + " width = \"" + TFMWidth + "%\"";
		} else {
			TFMmarqueehtml = TFMmarqueehtml + " width = \"100%\"";
		}
		if (TFMScrollDelay) {
			TFMmarqueehtml = TFMmarqueehtml + " scrolldelay = \"" + TFMScrollDelay + "\"";
		}
		if (TFMDirection) {
			TFMmarqueehtml = TFMmarqueehtml + " direction = \"" + TFMDirection + "\"\>";
			if (TFMDirection == "left" || TFMDirection == "right") {
				TFMlinkgap = "&nbsp;&nbsp;&nbsp;";
			} else {
				TFMlinkgap = "\<br/\>";
			}
		}
		if (TFMtargetlink == "yes") {
			TFMposttargetlink = " target= \"_blank\" ";
		} else {
			TFMposttargetlink = " ";
		}
		if (TFMimagebullet == "yes") {
			TFMBullet = " \<img class=\"TFMbulletbimg\" src=\"" + TFMimgurl + "\" />";
		} else {
			TFMBullet = TFMBulletchar;
		}
		TFMmarqueehtml2 = "\</marquee\>"
		TFMrecentposts = "";
		for (var TFMrp = 0; TFMrp < TFMnumPosts; TFMrp++) {
			var TFMobj = json.feed.entry[TFMrp];
			if (TFMrp == json.feed.entry.length) break;
			for (var TFMcc = 0; TFMcc < TFMobj.link.length; TFMcc++) {
				if (TFMobj.link[TFMcc].rel == 'alternate') {
					TFMpostlink = TFMobj.link[TFMcc].href;
					break;
				}
			}
			TFMrecentposts = TFMrecentposts + TFMBullet + " \<a " + TFMposttargetlink + " href=\"" + TFMpostlink + "\">" + TFMobj.title.$t + "\</a\>" + TFMlinkgap;
		}
		byTheFalseMasters = "\<a tareget =\"_blank\" href=\"http://www.TheFalseMasters.blogspot.in/2011/01/add-auto-scrolling-recent-posts-widget.html\"\>+  Grab this Widget\</a\> on \<a tareget =\"_blank\" href=\"http://www.TheFalseMasters.blogspot.in/\"\>TheFalseMasters\</a\>";
		if (TFMDirection == "left") {
			TFMrecentposts = TFMrecentposts + "&nbsp;&nbsp;&nbsp;" + byTheFalseMasters;
		} else if (TFMDirection == "right") {
			TFMrecentposts = byTheFalseMasters + "&nbsp;&nbsp;&nbsp;" + TFMrecentposts;
		} else if (TFMDirection == "up") {
			TFMrecentposts = TFMrecentposts + "\<br/\>" + byTheFalseMasters;
		} else {
			TFMrecentposts = byTheFalseMasters + "\<br/\>" + TFMrecentposts;
		}
		document.write("\<style style=\"text/css\"\>.TheFalseMasters-srp{font-size:" + TFMfontsize + "px;background:#" + TFMbgcolor + ";font-weight:bold;}.TheFalseMasters-srp a{color:#" + TFMlinkcolor + ";text-decoration:none;}.TheFalseMasters-srp a:hover{color:#" + TFMlinkhovercolor + ";}img.TFMbulletbimg{vertical-align:middle;border:none;}\</style\>")
		document.write("\<div class=\"TheFalseMasters-srp\"\>" + TFMmarqueehtml + TFMrecentposts + TFMmarqueehtml2 + "\</div\>")
	} catch (exception) {
		alert(exception);
	}
}
