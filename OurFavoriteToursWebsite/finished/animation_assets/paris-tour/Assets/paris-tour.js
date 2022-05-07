(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"paris_tour_atlas_", frames: [[767,183,158,105],[927,183,132,111],[602,810,500,75],[905,330,165,77],[0,0,765,808],[1061,183,88,145],[0,810,600,100],[767,0,500,75],[767,290,136,102],[1269,0,446,68],[1102,77,300,104],[767,77,333,104]]}
];


// symbols:



(lib.Arc = function() {
	this.initialize(ss["paris_tour_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.catacombs = function() {
	this.initialize(ss["paris_tour_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.champs = function() {
	this.initialize(ss["paris_tour_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cruise = function() {
	this.initialize(ss["paris_tour_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ecotourbase = function() {
	this.initialize(ss["paris_tour_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.eiffel = function() {
	this.initialize(ss["paris_tour_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.eiffel_title = function() {
	this.initialize(ss["paris_tour_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.louvre_title = function() {
	this.initialize(ss["paris_tour_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.monalisa = function() {
	this.initialize(ss["paris_tour_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.paris = function() {
	this.initialize(ss["paris_tour_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.seine_title = function() {
	this.initialize(ss["paris_tour_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.under_title = function() {
	this.initialize(ss["paris_tour_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("PARIS", "bold 50px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 58;
	this.text.lineWidth = 264;
	this.text.parent = this;
	this.text.setTransform(0,-13.5);

	this.text_1 = new cjs.Text("FAVORITE CITY TOUR", "bold 30px 'Arial'", "#FFA400");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 36;
	this.text_1.lineWidth = 363;
	this.text_1.parent = this;
	this.text_1.setTransform(0,-42.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.5,-44.3,367,88.69999999999999);


(lib.SignUpText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgWCDIAAhiIhPijIAyAAIAcBDIAXA6IABAAIAZg6IAchDIAwAAIhOCjIAABig");
	this.shape.setTransform(257.35,28.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AA/CDIgUhHIhXAAIgUBHIgvAAIBVkFIA1AAIBWEFgAAhAYIgJggIgYhWIgBAAQgNA2gKAgIgJAgIBCAAg");
	this.shape_1.setTransform(236.3,28.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AhiCDIAAkFIBGAAQA8AAAhAhQAhAhAABAQAAA/ghAiQghAig6AAgAg0BdIAVAAQBSAAAAhdQAAhchSAAIgVAAg");
	this.shape_2.setTransform(213.45,28.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AhSBjQggglAAg+QAAg/AggkQAfgkAzAAQA0AAAfAkQAgAkAAA/QAAA+ggAlQgfAlg0AAQgzAAgfglgAgwhFQgTAZAAAsQAAArATAaQASAaAeAAQAfAAASgaQATgaAAgrQAAgsgTgZQgSgZgfAAQgeAAgSAZg");
	this.shape_3.setTransform(186.925,28.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AgWCDIAAjeIhLAAIAAgnIDEAAIAAAnIhMAAIAADeg");
	this.shape_4.setTransform(162.65,28.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC00").s().p("AhdCDIAAkFIBYAAQBjAAAABRQgBAqgcAVQgaAVgsAAIgqAAIAABggAgvgBIAmAAQA5AAAAgwQAAgYgPgKQgNgKgdAAIgmAAg");
	this.shape_5.setTransform(132.75,28.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC00").s().p("AhiANIAAiRIAuAAIAACVQAABMA1AAQA2AAAAhMIAAiVIAsAAIAACRQAAB4hiAAQhjAAAAh4g");
	this.shape_6.setTransform(107.1,28.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC00").s().p("AAyCDIhQiTIgbg3IgCAAQAGBFAAASIAABzIgsAAIAAkFIAwAAIBQCSIAbA4IACAAQgGhDAAgVIAAhyIAsAAIAAEFg");
	this.shape_7.setTransform(72.825,28.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC00").s().p("AhDBlQgjglAAg/QAAg+AkgmQAigkA1AAQAuAAAgAiIgZAcQgXgVgdAAQgiAAgVAZQgWAaAAArQAAAtAVAZQAVAZAmAAQAYAAANgMIAAg4IgxAAIAAglIBaAAIAAByQghAggzAAQg1AAghgjg");
	this.shape_8.setTransform(47.025,28.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC00").s().p("AgWCDIAAkFIAtAAIAAEFg");
	this.shape_9.setTransform(29.25,28.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC00").s().p("AhdBhIAbgfQAfAdAkAAQAWAAAMgJQAMgJAAgPQAAgPgMgJQgHgFgWgKIgjgPQg0gVAAgwQAAgfAYgVQAZgWAlAAQAwAAAhAiIgYAdQgagWgfAAQgRAAgLAIQgMAIAAAPQAAANANAJQAHAGAVAIIAjAPQA1AVAAAxQAAAhgZAWQgaAXgrAAQg2AAgngng");
	this.shape_10.setTransform(12.875,28.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SignUpText, new cjs.Rectangle(0,0,269.5,54.3), null);


(lib.RedCircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(10,1,1).p("AHqAAQAADLiQCQQiPCPjLAAQjKAAiQiPQiPiQAAjLQAAjKCPiQQCQiPDKAAQDLAACPCPQCQCQAADKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RedCircle, new cjs.Rectangle(-54,-54,108,108), null);


(lib.ParisUndergroundText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.under_title();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ParisUndergroundText, new cjs.Rectangle(0,0,333,104), null);


(lib.ParisTextImg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.paris();
	this.instance.setTransform(-223,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ParisTextImg, new cjs.Rectangle(-223,-34,446,68), null);


(lib.MonaLisa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.monalisa();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MonaLisa, new cjs.Rectangle(0,0,136,102), null);


(lib.LouvreText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.louvre_title();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LouvreText, new cjs.Rectangle(0,0,500,75), null);


(lib.EiffelTextImage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.eiffel_title();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.EiffelTextImage, new cjs.Rectangle(0,0,600,100), null);


(lib.EiffelImage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.eiffel();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.EiffelImage, new cjs.Rectangle(0,0,88,145), null);


(lib.CruiseText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.seine_title();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CruiseText, new cjs.Rectangle(0,0,300,104), null);


(lib.CruiseBoat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cruise();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CruiseBoat, new cjs.Rectangle(0,0,165,77), null);


(lib.Cover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0088C0").s().p("EglfAPoIAA/PMBK/AAAIAAfPg");
	this.shape.setTransform(240,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cover, new cjs.Rectangle(0,0,480,200), null);


(lib.Champs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.champs();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Champs, new cjs.Rectangle(0,0,500,75), null);


(lib.Catacombs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.catacombs();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Catacombs, new cjs.Rectangle(0,0,132,111), null);


(lib.Base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ecotourbase();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base, new cjs.Rectangle(0,0,765,808), null);


(lib.ArcImage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Arc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ArcImage, new cjs.Rectangle(0,0,158,105), null);


(lib.ParisTitle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(183.5,44.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,367,88.7);


// stage content:
(lib.paristour = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"load underground image and text":326,"move to river":420,"move to arc":618,"just sitting still":876});

	// sign up today
	this.instance = new lib.SignUpText();
	this.instance.setTransform(240.05,141.15,1,1,0,0,0,134.8,27.2);
	this.instance.alpha = 0.9883;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1062).to({_off:false},0).to({alpha:1},66).to({alpha:0},16).wait(1));

	// Paris Title
	this.instance_1 = new lib.ParisTitle("synched",0);
	this.instance_1.setTransform(240,75.35,1,1,0,0,0,183.5,44.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1047).to({_off:false},0).to({alpha:1},15).to({startPosition:0},65).to({alpha:0},17).wait(1));

	// Paris
	this.parisText = new lib.ParisTextImg();
	this.parisText.name = "parisText";
	this.parisText.setTransform(251,107);
	this.parisText.alpha = 0;
	this.parisText._off = true;

	this.timeline.addTween(cjs.Tween.get(this.parisText).wait(14).to({_off:false},0).to({alpha:1},15).wait(52).to({alpha:0},15).to({_off:true},1).wait(1048));

	// solid blue
	this.cover = new lib.Cover();
	this.cover.name = "cover";

	this.timeline.addTween(cjs.Tween.get(this.cover).wait(51).to({alpha:0},15).wait(946).to({alpha:1},30).wait(103));

	// louvre text
	this.instance_2 = new lib.LouvreText();
	this.instance_2.setTransform(144,121.5,0.8,0.8,0,0,0,249.9,37.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(907).to({_off:false},0).to({alpha:1},15).wait(30).to({alpha:0},15).to({_off:true},1).wait(177));

	// louvre image
	this.mona = new lib.MonaLisa();
	this.mona.name = "mona";
	this.mona.setTransform(428,112,1,1,0,0,0,68,51);
	this.mona.alpha = 0;
	this.mona._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mona).wait(891).to({_off:false},0).to({alpha:1},15).wait(62).to({alpha:0},15).to({_off:true},1).wait(161));

	// champs (arc) text
	this.instance_3 = new lib.Champs();
	this.instance_3.setTransform(350,100.05,0.87,0.87,0,0,0,250,37.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(709).to({_off:false},0).to({alpha:1},15).wait(30).to({alpha:0},15).to({_off:true},1).wait(375));

	// arc (champs)
	this.instance_4 = new lib.ArcImage();
	this.instance_4.setTransform(53,101.5,1,1,0,0,0,79,52.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(693).to({_off:false},0).to({alpha:1},15).wait(62).to({alpha:0},15).to({_off:true},1).wait(359));

	// cruise text
	this.instance_5 = new lib.CruiseText();
	this.instance_5.setTransform(308,107,1,1,0,0,0,150,52);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(542).to({_off:false},0).to({alpha:1},15).wait(29).to({alpha:0},15).to({_off:true},1).wait(543));

	// cuise pic
	this.instance_6 = new lib.CruiseBoat();
	this.instance_6.setTransform(69.5,109.5,1,1,0,0,0,82.5,38.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(526).to({_off:false},0).to({alpha:1},15).wait(61).to({alpha:0},15).to({_off:true},1).wait(527));

	// paris underground text
	this.instance_7 = new lib.ParisUndergroundText();
	this.instance_7.setTransform(180.5,94.55,1,1,0,0,0,166.5,52);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(343).to({_off:false},0).to({alpha:1},15).wait(30).to({alpha:0},15).to({_off:true},1).wait(741));

	// paris underground image
	this.undergroundImage = new lib.Catacombs();
	this.undergroundImage.name = "undergroundImage";
	this.undergroundImage.setTransform(389,82.5,1,1,0,0,0,66,55.5);
	this.undergroundImage.alpha = 0;
	this.undergroundImage._off = true;

	this.timeline.addTween(cjs.Tween.get(this.undergroundImage).wait(327).to({_off:false},0).to({alpha:1},15).wait(62).to({alpha:0},15).to({_off:true},1).wait(725));

	// eiffel text
	this.eiffelText = new lib.EiffelTextImage();
	this.eiffelText.name = "eiffelText";
	this.eiffelText.setTransform(380.05,100.1,0.8,0.8,0,0,0,300.1,50.1);
	this.eiffelText.alpha = 0;
	this.eiffelText._off = true;

	this.timeline.addTween(cjs.Tween.get(this.eiffelText).wait(130).to({_off:false},0).to({alpha:1},15).wait(30).to({alpha:0},15).to({_off:true},1).wait(954));

	// eiffel image
	this.eiffelImage = new lib.EiffelImage();
	this.eiffelImage.name = "eiffelImage";
	this.eiffelImage.setTransform(57,77.5,1,1,0,0,0,44,72.5);
	this.eiffelImage.alpha = 0;
	this.eiffelImage._off = true;

	this.timeline.addTween(cjs.Tween.get(this.eiffelImage).wait(114).to({_off:false},0).to({alpha:1},15).wait(61).to({alpha:0},15).to({_off:true},1).wait(939));

	// moving circle
	this.instance_8 = new lib.RedCircle();
	this.instance_8.setTransform(60.45,97.55);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(106).to({x:61.45},0).to({alpha:1},7).wait(93).to({x:60.45},0).to({x:408.75},120).wait(94).to({x:63.55},90).wait(276).to({x:406.7,y:119.25},90).wait(166).to({_off:true},1).wait(102));

	// background
	this.base = new lib.Base();
	this.base.name = "base";
	this.base.setTransform(228.5,60.05,1,1,0,0,0,382.5,404);

	this.timeline.addTween(cjs.Tween.get(this.base).wait(206).to({x:195.5,y:-63.6},120).wait(94).to({x:300.6,y:-78},90).wait(108).to({x:242.85,y:238.4},60).wait(108).to({x:260.35,y:98.3},90).wait(166).to({_off:true},1).wait(102));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53,-382,630.1,1024.4);
// library properties:
lib.properties = {
	id: 'DF2AB09ECB034FB9A14D2C3F8175B8FD',
	width: 480,
	height: 200,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/paris_tour_atlas_.png", id:"paris_tour_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

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
an.compositions['DF2AB09ECB034FB9A14D2C3F8175B8FD'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;