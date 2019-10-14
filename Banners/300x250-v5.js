(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._300x250 = function() {
	this.initialize(img._300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,356,239);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A3838").s().p("AgQAYIACgIQAGAEAHAAQAJAAAAgIQAAgGgJgDQgOgEAAgKQAAgHAFgEQAFgEAIAAQAHAAAFADIgCAHQgEgDgHAAQgHAAAAAHQAAAFAJAEQANAEAAALQAAAHgFAEQgFAEgIAAQgIAAgHgDg");
	this.shape.setTransform(88.3,52.5,1.704,1.704);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A3838").s().p("AgDAeQgEgDAAgKIAAgcIgIAAIAAgHIAIAAIAAgNIAJgCIAAAPIAOAAIAAAHIgOAAIAAAbQAAALAHAAIAFgBIABAHIgIABQgHAAgDgEg");
	this.shape_1.setTransform(81.5,51.3,1.704,1.704);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A3838").s().p("AANAmIAAgdQAAgPgMgBQgKAAgCAJIgBAFIAAAfIgKAAIAAhLIAKAAIAAAgIAAAAQADgEAEgCQAFgDAEAAQAHAAAFAFQAGAFAAAMIAAAeg");
	this.shape_2.setTransform(73.5,50.4,1.704,1.704);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A3838").s().p("AgTAiIACgIQAIAFAIAAQAQgBAAgRIAAgHIAAAAQgFAKgLgBQgJAAgHgHQgHgIAAgKQAAgMAIgIQAHgHAJAAQAMAAAEAJIAAAAIABgIIAIAAIAAAsQgBARgHAHQgHAGgLAAQgLAAgHgEgAgJgYQgFAFABAJQAAASAOAAQAKAAADgJIABgFIAAgJIAAgFQgEgKgKAAQgGABgEAFg");
	this.shape_3.setTransform(62.9,54.4,1.704,1.704);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3A3838").s().p("AgEAkIAAgzIAJAAIAAAzgAgFgeQAAgFAFgBQAGABAAAFQABAGgHAAQgFAAAAgGg");
	this.shape_4.setTransform(55.8,50.8,1.704,1.704);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3A3838").s().p("AgEAmIAAhLIAJAAIAABLg");
	this.shape_5.setTransform(51.5,50.4,1.704,1.704);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3A3838").s().p("AgPAUQgHgHAAgMQAAgLAGgIQAHgIAKAAQAMAAAFAIQAFAHAAAJIAAAEIgkAAQAAASARAAQAJAAAFgDIACAHQgHADgKAAQgMAAgGgHgAgNgEIAbAAQAAgQgOAAQgLAAgCAQg");
	this.shape_6.setTransform(40.8,52.5,1.704,1.704);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3A3838").s().p("AANAmIAAgdQAAgPgMgBQgJAAgDAJIgBAFIAAAfIgJAAIAAhLIAJAAIAAAgQADgFAEgBQAFgDAEAAQASAAAAAWIAAAeg");
	this.shape_7.setTransform(31,50.4,1.704,1.704);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3A3838").s().p("AgDAeQgDgDAAgKIAAgcIgIAAIAAgHIAIAAIAAgNIAIgCIAAAPIANAAIAAAHIgNAAIAAAbQAAALAHAAIAFgBIABAHIgJABQgGAAgDgEg");
	this.shape_8.setTransform(22.7,51.3,1.704,1.704);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3A3838").s().p("AAGAnIAAgsIgVAAIAAAsIgJAAIAAgsIgIAAIAAgHIAIAAIAAgCQAAgNAFgFQAGgFAIAAQAEAAACACIgBAHIgFgBQgKAAAAAOIAAADIAVAAIAAgDQAAgMAGgHQAGgEAHAAQAFAAADACIgBAHIgHgBQgKAAAAAOIAAAEIANAAIAAAHIgNAAIAAAsg");
	this.shape_9.setTransform(80.8,31.4,1.704,1.704);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3A3838").s().p("AgRAUQgIgIAAgLQAAgNAIgHQAHgIAKAAQAMAAAHAIQAHAIAAALQAAANgJAIQgHAHgKAAQgKAAgHgIgAgLgNQgEAFAAAIQAAAJAFAFQAEAGAGAAQAHAAAEgGQAFgFAAgJQAAgHgEgFQgEgIgIAAQgHABgEAGg");
	this.shape_10.setTransform(69.9,33.7,1.704,1.704);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3A3838").s().p("AANAbIAAgdQAAgQgNAAQgJAAgCAKIAAAEIAAAfIgKAAIAAg0IAHAAIACAJQAFgKALAAQAHAAAFAFQAHAFAAAMIAAAfg");
	this.shape_11.setTransform(55.8,33.5,1.704,1.704);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3A3838").s().p("AgMAbIAAg0IAIAAIABALIAAAAQADgMALAAIACAAIAAAJIgDAAQgKAAgCAMIgBAFIAAAbg");
	this.shape_12.setTransform(48,33.5,1.704,1.704);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3A3838").s().p("AgVAEIAAgeIAJAAIAAAcQAAARAMAAQAIAAAEgJIABgEIAAggIAJAAIABA0IgJAAIAAgJIgBAAQgGAKgKAAQgSAAAAgXg");
	this.shape_13.setTransform(39.4,33.7,1.704,1.704);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3A3838").s().p("AgEAlIAAhAIgWAAIAAgIIA1AAIAAAIIgXAAIAABAg");
	this.shape_14.setTransform(30.6,31.9,1.704,1.704);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3A3838").s().p("AgBgLIAJgBQgCANgHAMIgHABQAFgNACgMg");
	this.shape_15.setTransform(76.8,19.2,1.704,1.704);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3A3838").s().p("AgQAXQgEgEAAgGQAAgUAfAAIAAgBQAAgMgLABQgIAAgGADIgCgGQAIgEAIgBQAUAAAAAWIABAfIgJAAIAAgHIgBAAQgGAJgJgBQgHABgFgFgAgKALQAAAKAJgBQAIAAADgJIABgDIAAgIIgDAAQgSAAAAALg");
	this.shape_16.setTransform(70.4,14.7,1.704,1.704);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3A3838").s().p("AANAaIgNgVIgNAVIgKAAIATgaIgSgZIAKAAIANAUIAAAAIAMgUIAKAAIgRAZIASAag");
	this.shape_17.setTransform(61.8,14.7,1.704,1.704);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3A3838").s().p("AgPAUQgHgHAAgMQAAgLAGgIQAHgIAKAAQAMAAAFAIQAFAHAAAJIAAAEIgkAAQAAASARAAQAIAAAGgDIACAHQgGADgLAAQgMAAgGgHgAgNgEIAbAAQAAgPgNAAQgMAAgCAPg");
	this.shape_18.setTransform(53.1,14.7,1.704,1.704);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3A3838").s().p("AgEAnIAAhNIAJAAIAABNg");
	this.shape_19.setTransform(46.2,12.6,1.704,1.704);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3A3838").s().p("AAVAlIgIgYIgZAAIgIAYIgJAAIAYhJIALAAIAZBJgAgLAGIAVAAIgKghg");
	this.shape_20.setTransform(38.5,13,1.704,1.704);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#393838").ss(1,0,0,4).p("AFTDVQgggFgfgLQhAgXgBgdQA1gdAegoQAfgoAAgsQAAhVhhg7Qhgg8iIAAQiIAAhhA8QhgA7AABVQAABTBgA8QBhA8CIAAQA4AAA1gMQAJAGAlAHQBAAMB8AFg");
	this.shape_21.setTransform(57,36.3,1.704,1.704);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ACVDEQglgHgKgGQg0ALg4AAQiIABhhg8Qhgg8AAhTQAAhUBgg8QBhg8CIAAQCIAABgA8QBhA8AABUQAAAsggAoQgdAog2AdQACAdA/AXQAgALAfAFQh7gGhAgLg");
	this.shape_22.setTransform(57.3,36.3,1.704,1.704);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1,-1,117.7,74.6), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3gQ1MAAAghqMAvBAAAMAAAAhqg");
	this.shape.setTransform(150.5,107.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,301,215.5), null);


(lib.mybutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,51,102,0.627)").s().p("A3PTcMAAAgm3MAufAAAMAAAAm3g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib._300x250v5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.MyClickTagButton.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(window.clickTag, '_blank');
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(220));

	// Layer 6
	this.instance = new lib._300x250();
	this.instance.parent = this;
	this.instance.setTransform(-124,-62,1.192,1.192);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(220));

	// Layer 2
	this.MyClickTagButton = new lib.mybutton();
	this.MyClickTagButton.parent = this;
	this.MyClickTagButton.setTransform(150.8,126.4,1.005,1.005,0,0,0,0.3,0.9);
	new cjs.ButtonHelper(this.MyClickTagButton, 0, 1, 2, false, new lib.mybutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.MyClickTagButton).wait(220));

	// Layer 4
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(380.3,118.6,1,1,0,0,0,58.1,36.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:57,regY:36.3,x:369.6,y:123.5},0).wait(1).to({x:354,y:123.8},0).wait(1).to({x:338.4,y:123.6},0).wait(1).to({x:322.9,y:123},0).wait(1).to({x:307.3,y:122.3},0).wait(1).to({x:291.8,y:121.5},0).wait(1).to({x:276.3,y:120.5},0).wait(1).to({x:260.7,y:119.6},0).wait(1).to({x:245.2,y:118.5},0).wait(1).to({x:245.1},0).wait(1).to({x:245},0).wait(1).to({x:244.9},0).wait(1).to({x:244.8},0).wait(2).to({x:244.7},0).wait(1).to({x:244.6},0).wait(1).to({x:244.5},0).wait(1).to({x:244.4},0).wait(1).to({x:244.3},0).wait(1).to({x:244.2},0).wait(1).to({x:244.1},0).wait(2).to({x:244},0).wait(1).to({x:243.9},0).wait(1).to({x:243.8},0).wait(1).to({x:243.7},0).wait(1).to({x:243.6},0).wait(1).to({x:243.5},0).wait(1).to({x:243.4},0).wait(1).to({x:243.3},0).wait(2).to({x:243.2},0).wait(1).to({x:243.1},0).wait(1).to({x:243},0).wait(1).to({x:242.9},0).wait(1).to({x:242.8},0).wait(1).to({x:242.7},0).wait(1).to({x:242.6},0).wait(2).to({x:242.5},0).wait(1).to({x:242.4},0).wait(1).to({x:242.3},0).wait(1).to({x:242.2},0).wait(1).to({x:260.8,y:120.1},0).wait(1).to({x:279.5,y:121.8},0).wait(1).to({x:298.1,y:123.4},0).wait(1).to({x:316.7,y:125},0).wait(1).to({x:335.3,y:126.6},0).wait(1).to({x:354,y:128.3},0).wait(1).to({x:372.6,y:129.9},0).wait(1).to({x:391.2,y:131.5},0).wait(169));

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AALAfIgLgnIgKAnIgQAAIgUg9IAQAAIAMAoIALgoIAPAAIAKAoIAMgoIARAAIgUA9g");
	this.shape.setTransform(166.2,195.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAdQgIgEgEgIQgEgHAAgKQAAgIAEgIQAEgIAHgEQAIgEAIAAQAOAAAJAJQAJAKAAANQAAAOgJAJQgJAKgOAAQgIAAgHgEgAgKgNQgEAFAAAIQAAAJAEAFQAEAFAGAAQAGAAAFgFQAEgFAAgJQAAgIgEgFQgFgFgGAAQgGAAgEAFg");
	this.shape_1.setTransform(157.8,195.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARArIgig3IAAA3IgQAAIAAhVIARAAIAiA4IAAg4IAQAAIAABVg");
	this.shape_2.setTransform(149.6,194.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAsIAAhWIAQAAIAAAJQADgEAFgDQAFgDAFAAQALAAAIAIQAIAJAAAQQAAAOgIAIQgIAJgLAAQgEAAgEgCQgEgBgFgGIAAAggAgJgaQgEAFAAAKQAAAKAEAEQAEAFAFAAQAGAAAEgFQAEgDAAgKQAAgLgEgFQgEgEgGAAQgFAAgEAEg");
	this.shape_3.setTransform(138.4,197.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAdQgIgEgEgIQgEgHAAgKQAAgIAEgIQAEgIAHgEQAIgEAIAAQAOAAAJAJQAJAKAAANQAAAOgJAJQgJAKgOAAQgIAAgHgEgAgKgNQgEAFAAAIQAAAJAEAFQAEAFAGAAQAGAAAFgFQAEgFAAgJQAAgIgEgFQgFgFgGAAQgGAAgEAFg");
	this.shape_4.setTransform(130.9,195.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAMArIAAghQAAgKgBgBQgBgDgCgCQgDgBgDAAQgEAAgDACQgDACgBADQgCAEAAAIIAAAfIgRAAIAAhVIARAAIAAAfQAIgJAKAAQAGAAAFACQAEACACAEQADADABAEIABALIAAAlg");
	this.shape_5.setTransform(123.5,194.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAlQgJgHgBgPIARgCQABAJAFAEQAFAEAHAAQAIAAAEgEQAFgDAAgFQAAgDgCgCQgCgCgFgCIgNgEQgOgDgFgEQgIgHAAgLQAAgGAEgGQADgGAHgDQAHgDAKAAQAQAAAIAHQAIAHABAMIgSABQgBgHgEgCQgDgDgHAAQgHAAgFADQgDACAAADQAAADADACQADADAMADQANADAGADQAGAEAEAEQADAGAAAIQAAAHgEAHQgEAGgIAEQgHADgMAAQgPAAgJgIg");
	this.shape_6.setTransform(115.7,194.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AF2BmQAAAHgFAFQgFAFgIAAIrIAAQgHAAgFgFQgGgFAAgHIAAjLQAAgHAGgFQAFgFAHAAILIAAQAIAAAFAFQAFAFAAAHg");
	this.shape_7.setTransform(141.7,195.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BD413E").s().p("AljB3QgIAAgFgFQgGgFABgHIAAjLQgBgHAGgFQAFgFAIAAILHAAQAIAAAFAFQAGAFgBAHIAADLQABAHgGAFQgFAFgIAAg");
	this.shape_8.setTransform(141.7,195.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6CB460").s().p("AArAZIAAgkIgRAkIgFAAIgRgkIAAAAIAAAkIgHAAIAAgxIAJAAIARAlIAAAAIASglIALAAIAAAxgAgiAZIAAgqIgRAAIAAgHIApAAIAAAHIgQAAIAAAqg");
	this.shape_9.setTransform(279.6,20.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6CB460").s().p("AhhBeQgqgnAAg3QAAg2AqgnQAognA5AAQA6AAApAnQAoAnAAA2IAAAKIgBAHIjoAAIAFAMQAKAcAZAQQAZARAdAAQAXAAAVgKQAUgKANgRIAFgGIAkAZIgFAFQgTAageAPQgeAPgiAAQg5AAgogngAgyhMQgWANgNAXIgIAOIC6AAIgHgOQgNgXgXgNQgWgNgcAAQgbAAgXANg");
	this.shape_10.setTransform(194.1,31.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6CB460").s().p("AhiBeQgognAAg3QAAg2AognQApgnA5AAQA6AAAoAnQAqAnAAA2QAAA3gqAnQgoAng6AAQg5AAgpgngAhCg+QgcAaAAAkQAAAlAcAbQAbAaAnAAQAoAAAbgaQAcgbAAglQAAgkgcgaQgbgbgoAAQgnAAgbAbg");
	this.shape_11.setTransform(261,31.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6CB460").s().p("AB4CAIAAiiQAAgUgPgPQgOgOgUAAQgUAAgOAOQgPAPAAAUIAACiIgrAAIAAiiQgBgUgOgPQgOgOgUAAQgUAAgOAOQgPAPAAAUIAACiIgtAAIAAiiQABgmAbgcQAbgbAnAAQAlAAAcAaIAFAGIAGgGQAcgaAlAAQAnAAAbAbQAbAcABAmIAACig");
	this.shape_12.setTransform(227.6,31.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6CB460").s().p("AAGBmIgGgGIgFAGQgcAbglgBQgnABgbgcQgcgbABgnIAAiiIAsAAIAACiQAAAVAOAOQAPAOAUAAQAUAAAOgOQAPgOAAgVIAAiiIArAAIAACiQAAAVAOAOQAPAOAUAAQAUAAAPgOQAOgOAAgVIAAiiIAsAAIAACiQAAAngbAbQgcAcgmgBQglABgcgbg");
	this.shape_13.setTransform(160.7,31.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(220));

	// Layer 5
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.5,125.6,1,1,0,0,0,150.5,125.3);
	this.instance_2.alpha = 0.84;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:107.8,y:108.1},0).wait(13).to({alpha:0.812},0).wait(1).to({alpha:0.784},0).wait(1).to({alpha:0.756},0).wait(1).to({alpha:0.728},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.672},0).wait(1).to({alpha:0.644},0).wait(1).to({alpha:0.616},0).wait(1).to({alpha:0.588},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.532},0).wait(1).to({alpha:0.504},0).wait(1).to({alpha:0.476},0).wait(1).to({alpha:0.448},0).wait(1).to({alpha:0.42},0).wait(1).to({alpha:0.392},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.336},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.28},0).wait(1).to({alpha:0.252},0).wait(1).to({alpha:0.224},0).wait(1).to({alpha:0.196},0).wait(1).to({alpha:0.168},0).wait(1).to({alpha:0.14},0).wait(1).to({alpha:0.112},0).wait(1).to({alpha:0.084},0).wait(1).to({alpha:0.056},0).wait(1).to({alpha:0.028},0).wait(1).to({alpha:0},0).wait(172).to({alpha:0.164},0).wait(1).to({alpha:0.328},0).wait(1).to({alpha:0.492},0).wait(1).to({alpha:0.656},0).wait(1).to({alpha:0.82},0).wait(1));

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHgAgFAAQAAAGAFAAQAFAAAAgGQAAgFgFAAQgFAAAAAFgAACAEIgCgEIgBAAIAAAEIgBAAIAAgHIACAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIADAEgAgBAAIABAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIgBAAg");
	this.shape_14.setTransform(290.6,241.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhrBaIAQg0IAGAGIBTAAQAEAAAEgCQACgDADgFIAAgCIAAgGQAAgDgGAAIgxAAIgOgBQgNgCgGgKQgFgIAAgMIABgKIAHgcQAFgUAMgLQALgLAQAAICJAAIgMAtIgGgGIhWAAQgGAAgCAGIgCAIIABACQABADAFAAIA4AAIAJABQAKACAGAIQAKALgFAQIgOA0QgFAQgMAIQgJAIgOAAg");
	this.shape_15.setTransform(240.6,233.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AApBaQgPABgHgDQgIgCgEgKQgJAJgJADQgJACgNAAIgrAAIgQgBQgHgBgFgFQgFgEgCgIQgDgHACgJIAJghQAGgXANgIQANgIAYAAIgOgXIgFgMQgCgEACgGQAEgQAPgGQAPgFARgBIBxAAIgEAnQgFgFgFgCQgIgCgGgBIgfAAIgLACQgFABgBAEIAAAGIADAFIAcAwIANgLQAHgGACgHIACgIIAdAAIgHAaQgCACgEAEIgaAWIANAXQADAFAEACQAEADAGAAQAIAAAJgFIgOAjgAgtAsQgBAIABADQABADAIAAIANAAQAKAAAGgGIgcgug");
	this.shape_16.setTransform(213.7,233.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhTBaQgLAAgGgKQgIgPAHgbQASg9AJghQADgNAHgJQAJgLANAAIB+AAQARAAADATQACAMgDAOIgYBfQgGAXgOAKQgJAGgJAAgAgUghIgRBAQgDAHADAFQACADAEAAIAqAAQAGAAADgGIADgJIAShAQABgGgDgDIgEgCIgsAAQgIABgDAKg");
	this.shape_17.setTransform(260.7,233.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AACBbIgfhmIgWBWQgDALADAFIhGAAQAFgHADgJQAIgYARhEIAPhBIgGgIIBTAAIAdBhIAUhKQACgPgCgIIBFAAIgGAJQgmCVgBAIQgBAEAAALg");
	this.shape_18.setTransform(281.6,233.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag7BaQAGgHAEgQIAoiVIgFgIIBKAAIgHAIIgoCVQgEALAFAMg");
	this.shape_19.setTransform(82.9,233.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag9BaQgaABgHgUQgEgLACgKQAShTAJgdQAGgRASgHQAJgDAIgBIB9AAIgMAwIgFgFIhGAAQgRAAgDANIgQBAQgEASASAAIBGAAIAJgEIgOAug");
	this.shape_20.setTransform(38.7,233.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAVBaIgShGIgbAAIgPA1IADARIhRAAIANgXIAlh5IgsAAIAHgdIgGgHIDBAAQAvAAgPA9QgHAbgUAOQgKAIgIACIALAtIALAXgAgNgQIAkAAIALgBQAMgFADgNQADgMgLgFIgLgCIghAAg");
	this.shape_21.setTransform(65.5,233.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNARQgGAAACgGIAGgVQABgHAGAAIASAAQAFAAgBAHIgGAVQgCAGgFAAg");
	this.shape_22.setTransform(24.1,240.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ah0BaIAMgSIAph+IglAAIAKgdIgGgHICqAAQAUAAAJAHQAWAOgLArQgQA/gqgBIhSAAIgKAiIACAUgAgOgGIAjAAIAQgDQAQgGAAgUQAAgSgVgBIghAAg");
	this.shape_23.setTransform(17.5,233.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgNARQgGAAACgGIAGgVQABgHAGAAIASAAQAGAAgCAHIgGAVQgBAGgGAAg");
	this.shape_24.setTransform(47.8,240.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAVBaIgShGIgbAAIgPA1IADARIhRAAIANgXIAkh5IgsAAIAIgcIgFgIIDAAAQAvAAgPA9QgHAbgUAOQgKAIgIACIAKAtIALAXgAgNgQIAjAAIAMgBQAMgFADgNQAFgTgYAAIghAAg");
	this.shape_25.setTransform(164.8,233.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ah1BaIALgTIAqiZIgGgIICVAAIAXAHQAVAMgHAgQgMAygOArQgMAlgigBgAgkAuIA2AAQAIgBAEgHIALgsIAHgdQABgHgBgCQgBgDgHAAIgzAAg");
	this.shape_26.setTransform(187.6,233.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAsBaIAEgSIgEgVIhYAAIgcAnIgxAAIBqiQIglAAIAOgcIgDgIIB2AAIAjCdIAKAXgAAfAJIgLgzIgjAzIAuAAg");
	this.shape_27.setTransform(138.9,233.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAGBaIAKgTIALgwIhAAAIgOAyQAAAIAEAJIhOAAIAMgSIAoiZIgDgJIBJAAIgFAKIgOAyIA/AAIANgzIgCgJIBKAAIgHAJIgoCUQgCAKAFANg");
	this.shape_28.setTransform(116.4,233.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag8BaQgbABgHgUQgDgLACgKQARhTAKgdQAFgRATgHQAJgDAIgBIB8AAIgMAvIgGgEIhFAAQgQAAgEANIgQBAQgEASATAAIBEgBIAHgCIgRAtg");
	this.shape_29.setTransform(96.9,233.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("A3ZzfMAuzAAAMAAAAh1IAAFKMguzAAAIAAlKg");
	this.shape_30.setTransform(149.8,125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BD413E").s().p("A3gCqIAAgKMAuyAAAIAAlJIAAFJMguyAAAIAAlJMAuyAAAIAPAAIAAFTg");
	this.shape_31.setTransform(150.5,233.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26,63,562.9,312.8);
// library properties:
lib.properties = {
	id: '919114EA74C5894CA85590575894FC6B',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/_300x250.jpg", id:"_300x250"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['919114EA74C5894CA85590575894FC6B'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;