def.type('pvc.BoxplotChart',pvc.CategoricalAbstract).add({_processOptionsCore:function(options){this.base.apply(this,arguments);options.stacked=false},_initVisualRoles:function(){this.base();var roleSpecBase={isMeasure:true,requireSingleDimension:true,requireIsDiscrete:false,valueType:Number};[{name:'median',label:'Median',defaultDimension:'median',isRequired:true},{name:'lowerQuartil',label:'Lower Quartil',defaultDimension:'lowerQuartil'},{name:'upperQuartil',label:'Upper Quartil',defaultDimension:'upperQuartil'},{name:'minimum',label:'Minimum',defaultDimension:'minimum'},{name:'maximum',label:'Maximum',defaultDimension:'maximum'}].forEach(function(info){this._addVisualRole(info.name,def.create(roleSpecBase,info))},this)},_getTranslationClass:function(translOptions){return def.type(this.base(translOptions)).add(pvc.data.BoxplotChartTranslationOper)},_initPlotsCore:function(){new pvc.visual.BoxPlot(this);if(this.options.plot2){this._animatable=true;new pvc.visual.PointPlot(this,{name:'plot2',defaults:{LinesVisible:true,DotsVisible:true,OrthoRole:'median',ColorAxis:2},fixed:{OrthoAxis:1}})}},_bindAxes:function(hasMultiRole){this.base(hasMultiRole);var typeAxes=this.axesByType.ortho;if(typeAxes){typeAxes.forEach(function(axis){axis.option.defaults({Offset:0.02})})}},_createPlotPanels:function(parentPanel,baseOptions){var plots=this.plots;var boxPlot=plots.box;var boxPanel=new pvc.BoxplotPanel(this,parentPanel,boxPlot,Object.create(baseOptions));this.bpChartPanel=boxPanel;var plot2Plot=plots.plot2;if(plot2Plot){if(pvc.debug>=3){this._log("Creating Point panel.")}var pointPanel=new pvc.PointPanel(this,parentPanel,plot2Plot,Object.create(baseOptions));pointPanel._v1DimRoleName.value=plot2Plot.option('OrthoRole')}},defaults:{crosstabMode:false}}).addStatic({measureRolesNames:['median','lowerQuartil','upperQuartil','minimum','maximum']});