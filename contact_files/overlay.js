google.maps.__gjsload__('overlay', function(_){var fu=_.oa("j"),gu=_.l(),hu=function(a){a.ag=a.ag||new gu;return a.ag},iu=function(a){this.T=new _.fg(function(){var b=a.ag;if(a.getPanes()){if(a.getProjection()){if(!b.j&&a.onAdd)a.onAdd();b.j=!0;a.draw()}}else{if(b.j)if(a.onRemove)a.onRemove();else a.remove();b.j=!1}},0)},ju=function(a,b){function c(){return _.gg(e.T)}var d=hu(a),e=d.Ge;e||(e=d.Ge=new iu(a));_.C(d.V||[],_.R.removeListener);var f=d.ca=d.ca||new _.wl,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("center",g,"projectionCenterQ");
f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.Uh=d.Uh||new fu(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.V=[_.R.addListener(a,"panes_changed",c),_.R.addListener(g,"zoom_changed",c),_.R.addListener(g,"offset_changed",c),_.R.addListener(b,"projection_changed",c),_.R.addListener(g,"projectioncenterq_changed",c)];c();b instanceof _.ce&&(_.Lm(b,"Ox"),_.Nm("Ox","-p",a))},
mu=function(a){if(a){var b=a.getMap(),c=a.__gmop;if(c){if(c.map==b)return;a.__gmop=null;c.ig()}if(b&&b instanceof _.ce){var d=b.__gm;d.overlayLayer?a.__gmop=new ku(b,a,d.overlayLayer):d.j.then(function(c){c=c.ya;var e=new lu(b,c);c.qa(e);d.overlayLayer=e;mu(a)})}}},ku=function(a,b,c){this.map=a;this.ma=b;this.Ll=c;this.ue=!1;_.Lm(this.map,"Ox");_.Nm("Ox","-p",this.ma);c.l.push(this);c.j&&nu(this,c.j);c.m.Sf()},nu=function(a,b){a.ma.get("projection")!=b&&(a.ma.bindTo("panes",a.map.__gm),a.ma.set("projection",
b))},lu=function(a,b){this.A=a;this.m=b;this.j=null;this.l=[]};_.A(fu,_.S);fu.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.L(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.j:null))};_.A(iu,_.S);ku.prototype.draw=function(){this.ue||(this.ue=!0,this.ma.onAdd&&this.ma.onAdd());this.ma.draw&&this.ma.draw()};ku.prototype.ig=function(){_.Om("Ox","-p",this.ma);this.ma.unbindAll();this.ma.set("panes",null);this.ma.set("projection",null);_.bb(this.Ll.l,this);this.ue&&(this.ue=!1,this.ma.onRemove?this.ma.onRemove():this.ma.remove())};lu.prototype.dispose=_.l();
lu.prototype.Db=function(a,b,c,d,e,f){var g=this.j=this.j||new _.bm(this.A,this.m,_.l());g.Db(a,b,c,d,e,f);a=_.ua(this.l);for(b=a.next();!b.done;b=a.next())b=b.value,nu(b,g),b.draw()};_.He("overlay",{Kg:function(a){if(a){var b=a.getMap();if(b&&b instanceof _.ce||a.__gmop)mu(a);else{b=a.getMap();var c=hu(a),d=c.al;c.al=b;d&&(c=hu(a),(d=c.ca)&&d.unbindAll(),(d=c.Uh)&&d.unbindAll(),a.unbindAll(),a.set("panes",null),a.set("projection",null),_.C(c.V,_.R.removeListener),c.V=null,c.Ge&&(c.Ge.T.Ma(),c.Ge=null),_.Om("Ox","-p",a));b&&ju(a,b)}}},preventMapHitsFrom:function(a){_.Dn(a,{gb:function(a){return _.Vm(a.event)},Ia:function(a){return _.Sm(a)},$b:function(a){return _.Tm(a)},Ua:function(a){return _.Tm(a)},
Ka:function(a){return _.Um(a)}}).Bc(!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.td);a.addEventListener("contextmenu",_.td);a.addEventListener("dblclick",_.td);a.addEventListener("mousedown",_.td);a.addEventListener("mousemove",_.td);a.addEventListener("MSPointerDown",_.td);a.addEventListener("pointerdown",_.td);a.addEventListener("touchstart",_.td);a.addEventListener("wheel",_.td)}});});
