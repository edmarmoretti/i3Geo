def.type('pvc.CategoricalAbstract',pvc.CartesianAbstract).init(function(options){this.base(options);var parent=this.parent;if(parent){this._catRole=parent._catRole}}).add({_initVisualRoles:function(){this.base();this._catRole=this._addVisualRole('category',this._getCategoryRoleSpec())},_getCategoryRoleSpec:function(){return{isRequired:true,defaultDimension:'category*',autoCreateDimension:true}},_generateTrendsDataCellCore:function(newDatums,dataCell,trendInfo){var serRole=this._serRole;var xRole=this._catRole;var yRole=dataCell.role;var trendOptions=dataCell.trend;this._warnSingleContinuousValueRole(yRole);var dataPartDimName=this._dataPartRole.firstDimensionName();var yDimName=yRole.firstDimensionName();var xDimName;var isXDiscrete=xRole.isDiscrete();if(!isXDiscrete){xDimName=xRole.firstDimensionName()}var sumKeyArgs={zeroIfNone:false};var ignoreNullsKeyArgs={ignoreNulls:false};var data=this.visibleData(dataCell.dataPartValue);var allPartsData=this.visibleData(null,ignoreNullsKeyArgs);var allCatDataRoot=allPartsData.flattenBy(xRole,ignoreNullsKeyArgs);var allCatDatas=allCatDataRoot._children;def.scope(function(){return(serRole&&serRole.isBound())?data.flattenBy(serRole).children():def.query([null])}).each(genSeriesTrend,this);function genSeriesTrend(serData1){var funX=isXDiscrete?null:function(allCatData){return allCatData.atoms[xDimName].value};var funY=function(allCatData){var group=data._childrenByKey[allCatData.key];if(group&&serData1){group=group._childrenByKey[serData1.key]}return group?group.dimensions(yDimName).sum(sumKeyArgs):null};var options=def.create(trendOptions,{rows:def.query(allCatDatas),x:funX,y:funY});var trendModel=trendInfo.model(options);var dataPartAtom=data.owner.dimensions(dataPartDimName).intern(this.root._firstTrendAtomProto);if(trendModel){allCatDatas.forEach(function(allCatData,index){var trendX=isXDiscrete?index:allCatData.atoms[xDimName].value;var trendY=trendModel.sample(trendX,funY(allCatData),index);if(trendY!=null){var catData=data._childrenByKey[allCatData.key];var efCatData=catData||allCatData;var atoms;if(serData1){var catSerData=catData&&catData._childrenByKey[serData1.key];if(catSerData){atoms=Object.create(catSerData._datums[0].atoms)}else{atoms=Object.create(efCatData._datums[0].atoms);def.copyOwn(atoms,serData1.atoms)}}else{atoms=Object.create(efCatData._datums[0].atoms)}atoms[yDimName]=trendY;atoms[dataPartDimName]=dataPartAtom;var newDatum=new pvc.data.Datum(efCatData.owner,atoms);newDatum.isVirtual=true;newDatum.isTrend=true;newDatum.trendType=trendInfo.type;newDatums.push(newDatum)}},this)}}},_interpolateDataCell:function(dataCell){var nullInterpMode=dataCell.nullInterpolationMode;if(nullInterpMode){var InterpType;switch(dataCell.nullInterpolationMode){case'linear':InterpType=pvc.data.LinearInterpolationOper;break;case'zero':InterpType=pvc.data.ZeroInterpolationOper;break;case'none':break;default:throw def.error.argumentInvalid('nullInterpolationMode',''+nullInterpMode)}if(InterpType){this._warnSingleContinuousValueRole(dataCell.role);var visibleData=this.visibleData(dataCell.dataPartValue);if(visibleData.childCount()>0){var allPartsData=this.visibleData(null,{ignoreNulls:false});new InterpType(allPartsData,visibleData,this._catRole,this._serRole,dataCell.role,true).interpolate()}}}},_createVisibleData:function(dataPartValue,keyArgs){var serGrouping=this._serRole&&this._serRole.flattenedGrouping();var catGrouping=this._catRole.flattenedGrouping();var partData=this.partData(dataPartValue);var ignoreNulls=def.get(keyArgs,'ignoreNulls');var groupKeyArgs={visible:true,isNull:ignoreNulls?false:null};return serGrouping?partData.groupBy([catGrouping,serGrouping],groupKeyArgs):partData.groupBy(catGrouping,groupKeyArgs)},_getContinuousVisibleCellExtent:function(valueAxis,valueDataCell){var valueRole=valueDataCell.role;switch(valueRole.name){case'series':case'category':return this.base(valueAxis,valueDataCell)}this._warnSingleContinuousValueRole(valueRole);var dataPartValue=valueDataCell.dataPartValue;var valueDimName=valueRole.firstDimensionName();var data=this.visibleData(dataPartValue);var useAbs=valueAxis.scaleUsesAbs();if(valueAxis.type!=='ortho'||!valueDataCell.isStacked){return data.leafs().select(function(serGroup){var value=serGroup.dimensions(valueDimName).sum();return useAbs&&value<0?-value:value}).range()}return data.children().select(function(catGroup){var range=this._getStackedCategoryValueExtent(catGroup,valueDimName,useAbs);if(range){return{range:range,group:catGroup}}},this).where(def.notNully).reduce(function(result,rangeInfo){return this._reduceStackedCategoryValueExtent(result,rangeInfo.range,rangeInfo.group)}.bind(this),null)},_getStackedCategoryValueExtent:function(catGroup,valueDimName,useAbs){var posSum=null,negSum=null;catGroup.children().select(function(serGroup){var value=serGroup.dimensions(valueDimName).sum();return useAbs&&value<0?-value:value}).each(function(value){if(value!=null){if(value>=0){posSum+=value}else{negSum+=value}}});if(posSum==null&&negSum==null){return null}return{max:posSum||0,min:negSum||0}},_reduceStackedCategoryValueExtent:function(result,catRange,catGroup){return pvc.unionExtents(result,catRange)},_coordinateSmallChartsLayout:function(scopesByType){this.base(scopesByType);var titleSizeMax=0;var titleOrthoLen;var axisIds=null;var sizesMaxByAxisId={};this.children.forEach(function(childChart){childChart.basePanel.layout();var size;var panel=childChart.titlePanel;if(panel){if(!titleOrthoLen){titleOrthoLen=panel.anchorOrthoLength()}size=panel[titleOrthoLen];if(size>titleSizeMax){titleSizeMax=size}}var axesPanels=childChart.axesPanels;if(!axisIds){axisIds=def.query(def.ownKeys(axesPanels)).where(function(alias){return alias===axesPanels[alias].axis.id}).select(function(id){sizesMaxByAxisId[id]={axis:0,title:0};return id}).array()}axisIds.forEach(function(id){var axisPanel=axesPanels[id];var sizes=sizesMaxByAxisId[id];var ol=axisPanel.axis.orientation==='x'?'height':'width';size=axisPanel[ol];if(size>sizes.axis){sizes.axis=size}var titlePanel=axisPanel.titlePanel;if(titlePanel){size=titlePanel[ol];if(size>sizes.title){sizes.title=size}}})},this);this.children.forEach(function(childChart){if(titleSizeMax>0){var panel=childChart.titlePanel;panel.size=panel.size.clone().set(titleOrthoLen,titleSizeMax)}var axesPanels=childChart.axesPanels;axisIds.forEach(function(id){var axisPanel=axesPanels[id];var sizes=sizesMaxByAxisId[id];var ol=axisPanel.axis.orientation==='x'?'height':'width';axisPanel.size=axisPanel.size.clone().set(ol,sizes.axis);var titlePanel=axisPanel.titlePanel;if(titlePanel){titlePanel.size=titlePanel.size.clone().set(ol,sizes.title)}});childChart.basePanel.invalidateLayout()},this)},defaults:{orthoAxisOrdinal:false}});