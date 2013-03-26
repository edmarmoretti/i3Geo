def.type('pvc.visual.Scene').init(function(parent,keyArgs){if(pvc.debug>=4){this.id=def.nextId('scene')}this._renderId=0;this.renderState={};pv.Dom.Node.call(this,null);this.parent=parent||null;this.root=this;if(parent){var index=def.get(keyArgs,'index',null);parent.insertAt(this,index);this.root=parent.root}else{this._active=null;this._panel=def.get(keyArgs,'panel')||def.fail.argumentRequired('panel',"Argument is required on root scene.")}var group=def.get(keyArgs,'group',null),datum;if(group){datum=group._datums[0]}else{datum=def.get(keyArgs,'datum')}this.datum=datum||null;this.group=group;var parentAtoms;var source=(group||datum);this.atoms=source?source.atoms:(parentAtoms=(parent&&parent.atoms))?Object.create(parentAtoms):{};source=(datum||group);this.firstAtoms=source?source.atoms:(parentAtoms=(parent&&parent.firstAtoms))?Object.create(parentAtoms):this.atoms;if(!source){this.isNull=true}this.vars=parent?Object.create(parent.vars):{}}).add(pv.Dom.Node).add({isNull:false,datums:function(){return this.group?this.group.datums():(this.datum?def.query(this.datum):def.query())},format:function(mask){return def.format(mask,this._formatScope,this)},_formatScope:function(prop){if(prop.charAt(0)==='#'){prop=prop.substr(1).split('.');if(prop.length>2){throw def.error.operationInvalid("Scene format mask is invalid.")}var atom=this.atoms[prop[0]];if(atom){if(prop.length>1){switch(prop[1]){case'value':return atom.value;case'label':break;default:throw def.error.operationInvalid("Scene format mask is invalid.")}}return atom}return null}return def.getPath(this.vars,prop)},isRoot:function(){return this.root===this},panel:function(){return this.root._panel},chart:function(){return this.root._panel.chart},compatVersion:function(){return this.root._panel.compatVersion()},children:function(){if(!this.childNodes){return def.query()}return def.query(this.childNodes)},leafs:function(){function getFirstLeafFrom(leaf){while(leaf.childNodes.length){leaf=leaf.childNodes[0]}return leaf}var root=this;return def.query(function(nextIndex){if(!nextIndex){var item=getFirstLeafFrom(root);if(item===root){return 0}this.item=item;return 1}var next=this.item.nextSibling;if(next){this.item=next;return 1}var current=this.item;while((current!==root)&&(current=current.parentNode)){if((next=current.nextSibling)){this.item=getFirstLeafFrom(next);return 1}}return 0})},anyInteraction:function(){return(!!this.root._active||this.anySelected())},isActive:false,setActive:function(isActive){isActive=!!isActive;if(this.isActive!==isActive){rootScene_setActive.call(this.root,this.isActive?null:this)}},clearActive:function(){return rootScene_setActive.call(this.root,null)},anyActive:function(){return!!this.root._active},active:function(){return this.root._active},activeSeries:function(){var active=this.active();var seriesVar;return active&&(seriesVar=active.vars.series)&&seriesVar.value},isActiveSeries:function(){if(this.isActive){return true}var activeSeries;return(activeSeries=this.activeSeries())!=null&&(activeSeries===this.vars.series.value)},isSelected:function(){return this._selectedData().is},anySelected:function(){return this._selectedData().any},_selectedData:function(){return this.renderState._selectedData||(this.renderState._selectedData=this._createSelectedData())},_createSelectedData:function(){var any=this.panel().chart.data.owner.selectedCount()>0,isSelected=any&&this.datums().any(function(datum){return datum.isSelected});return{any:any,is:isSelected}}});function scene_renderId(renderId){if(this._renderId!==renderId){if(pvc.debug>=20){pvc.log({sceneId:this.id,oldRenderId:this._renderId,newRenderId:renderId})}this._renderId=renderId;this.renderState={}}}function rootScene_setActive(scene){var ownerScene;if(scene&&(ownerScene=scene.ownerScene)){scene=ownerScene}if(this._active!==scene){if(this._active){scene_setActive.call(this._active,false)}this._active=scene||null;if(this._active){scene_setActive.call(this._active,true)}return true}return false}function scene_setActive(isActive){isActive=!!isActive;if(this.isActive!==isActive){if(!isActive){delete this.isActive}else{this.isActive=true}}}