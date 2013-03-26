def.type('pvc.visual.Dot',pvc.visual.Sign).init(function(panel,parentMark,keyArgs){var pvMark=parentMark.add(pv.Dot);var protoMark=def.get(keyArgs,'proto');if(protoMark){pvMark.extend(protoMark)}keyArgs=def.setDefaults(keyArgs,'freeColor',false);this.base(panel,pvMark,keyArgs);if(!def.get(keyArgs,'freePosition',false)){var basePosProp=panel.isOrientationVertical()?"left":"bottom",orthoPosProp=panel.anchorOrtho(basePosProp);this._lockDynamic(orthoPosProp,'y')._lockDynamic(basePosProp,'x')}this._bindProperty('shape','shape')._bindProperty('shapeRadius','radius')._bindProperty('shapeSize','size').optional('strokeDasharray',undefined).optional('lineWidth',1.5)}).prototype.property('size').constructor.add({y:function(){return 0},x:function(){return 0},shape:function(){return this.delegateExtension()},radius:function(){this.state.radius=this.delegateExtension()},baseSize:function(){var radius=this.state.radius;if(radius!=null){return radius*radius}return this.base()},defaultSize:function(){return 12},interactiveSize:function(size){if(this.scene.isActive){return Math.max(size,5)*2.5}return size},interactiveColor:function(color,type){var scene=this.scene;if(scene.isActive){if(type==='stroke'){return color.brighter(1)}}else if(this.showsSelection()&&scene.anySelected()&&!scene.isSelected()){if(this.isActiveSeriesAware&&scene.isActiveSeries()){return color.alpha(0.8)}else{switch(type){case'fill':return this.dimColor(color,type);case'stroke':return color.alpha(0.45)}}}return this.base(color,type)}});