__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),o=r(d[2]),l=r(d[3]),s=r(d[4]),h=r(d[5]),u=r(d[6]),c=u.Picker,p=u.Text,f=u.View,b=(function(u){function b(){var n,s;t(this,b);for(var h=arguments.length,u=new Array(h),c=0;c<h;c++)u[c]=arguments[c];return(s=o(this,(n=l(b)).call.apply(n,[this].concat(u)))).state={textMetrics:[],language:'english',alignment:'left',fontSize:50},s}return s(b,u),n(b,[{key:"render",value:function(){var t=this,n={arabic:'\u0635\u0650\u0641 \u062e\u064e\u0644\u0642\u064e \u062e\u064e\u0648\u062f\u0650 \u0643\u064e\u0645\u0650\u062b\u0644\u0650 \u0627\u0644\u0634\u064e\u0645\u0633\u0650 \u0625\u0650\u0630 \u0628\u064e\u0632\u064e\u063a\u064e\u062a \u2014 \u064a\u064e\u062d\u0638\u0649 \u0627\u0644\u0636\u064e\u062c\u064a\u0639\u064f \u0628\u0650\u0647\u0627 \u0646\u064e\u062c\u0644\u0627\u0621\u064e \u0645\u0650\u0639\u0637\u0627\u0631\u0650',chinese:'Innovation in China \u4e2d\u56fd\u667a\u9020\uff0c\u6167\u53ca\u5168\u7403 0123456789',english:'The quick brown fox jumps over the lazy dog.',emoji:'\ud83d\ude4f\ud83c\udffe\ud83d\ude97\ud83d\udca9\ud83d\ude0d\ud83e\udd2f\ud83d\udc69\ud83c\udffd\u200d\ud83d\udd27\ud83c\udde8\ud83c\udde6\ud83d\udcaf',german:'Falsches \xdcben von Xylophonmusik qu\xe4lt jeden gr\xf6\xdferen Zwerg',greek:'\u03a4\u03b1\u03c7\u03af\u03c3\u03c4\u03b7 \u03b1\u03bb\u03ce\u03c0\u03b7\u03be \u03b2\u03b1\u03c6\u03ae\u03c2 \u03c8\u03b7\u03bc\u03ad\u03bd\u03b7 \u03b3\u03b7, \u03b4\u03c1\u03b1\u03c3\u03ba\u03b5\u03bb\u03af\u03b6\u03b5\u03b9 \u03c5\u03c0\u03ad\u03c1 \u03bd\u03c9\u03b8\u03c1\u03bf\u03cd \u03ba\u03c5\u03bd\u03cc\u03c2',hebrew:'\u05d3\u05d2 \u05e1\u05e7\u05e8\u05df \u05e9\u05d8 \u05d1\u05d9\u05dd \u05de\u05d0\u05d5\u05db\u05d6\u05d1 \u05d5\u05dc\u05e4\u05ea\u05e2 \u05de\u05e6\u05d0 \u05d7\u05d1\u05e8\u05d4',hindi:'\u090b\u0937\u093f\u092f\u094b\u0902 \u0915\u094b \u0938\u0924\u093e\u0928\u0947 \u0935\u093e\u0932\u0947 \u0926\u0941\u0937\u094d\u091f \u0930\u093e\u0915\u094d\u0937\u0938\u094b\u0902 \u0915\u0947 \u0930\u093e\u091c\u093e \u0930\u093e\u0935\u0923 \u0915\u093e \u0938\u0930\u094d\u0935\u0928\u093e\u0936 \u0915\u0930\u0928\u0947 \u0935\u093e\u0932\u0947 \u0935\u093f\u0937\u094d\u0923\u0941\u0935\u0924\u093e\u0930 \u092d\u0917\u0935\u093e\u0928 \u0936\u094d\u0930\u0940\u0930\u093e\u092e, \u0905\u092f\u094b\u0927\u094d\u092f\u093e \u0915\u0947 \u092e\u0939\u093e\u0930\u093e\u091c \u0926\u0936\u0930\u0925 \u0915\u0947 \u092c\u0921\u093c\u0947 \u0938\u092a\u0941\u0924\u094d\u0930 \u0925\u0947\u0964',igbo:'Nne, nna, wep\u1ee5 he\u2019l\u2019\u1ee5j\u1ecd dum n\u2019ime \u1ecdz\u1ee5z\u1ee5 \u1ee5m\u1ee5, vufesi obi nye Chukwu, \u1e45\u1ee5r\u1ecban\u1ee5, gbak\u1ecd\u1ecdn\u1ee5 kpaa, kwee ya ka o guzoshie ike; \u1ecd ghagh\u1ecb ito, nwap\u1ee5ta ezi agwa',irish:'D\u2019fhuascail \xcdosa \xdarmhac na h\xd3ighe Beannaithe p\xf3r \xc9ava agus \xc1dhaimh',japanese:'\u8272\u306f\u5302\u3078\u3069 \u6563\u308a\u306c\u308b\u3092 \u6211\u304c\u4e16\u8ab0\u305e \u5e38\u306a\u3089\u3080 \u6709\u70ba\u306e\u5965\u5c71 \u4eca\u65e5\u8d8a\u3048\u3066 \u6d45\u304d\u5922\u898b\u3058 \u9154\u3072\u3082\u305b\u305a',korean:'\ud0a4\uc2a4\uc758 \uace0\uc720\uc870\uac74\uc740 \uc785\uc220\ub07c\ub9ac \ub9cc\ub098\uc57c \ud558\uace0 \ud2b9\ubcc4\ud55c \uae30\uc220\uc740 \ud544\uc694\uce58 \uc54a\ub2e4',norwegian:'V\xe5r s\xe6re Zulu fra bade\xf8ya spilte jo whist og quickstep i min taxi.',polish:'Je\u017cu kl\u0105tw, sp\u0142\xf3d\u017a Finom cz\u0119\u015b\u0107 gry ha\u0144b!',romanian:'Muzicolog\u0103 \xeen bej v\xe2nd whisky \u0219i tequila, pre\u021b fix.',russian:'\u042d\u0445, \u0447\u0443\u0436\u0430\u043a, \u043e\u0431\u0449\u0438\u0439 \u0441\u044a\u0451\u043c \u0446\u0435\u043d \u0448\u043b\u044f\u043f (\u044e\u0444\u0442\u044c) \u2013 \u0432\u0434\u0440\u044b\u0437\u0433!',swedish:'Yxskaftbud, ge v\xe5r WC-zonm\xf6 IQ-hj\xe4lp.',thai:'\u0e40\u0e1b\u0e47\u0e19\u0e21\u0e19\u0e38\u0e29\u0e22\u0e4c\u0e2a\u0e38\u0e14\u0e1b\u0e23\u0e30\u0e40\u0e2a\u0e23\u0e34\u0e10\u0e40\u0e25\u0e34\u0e28\u0e04\u0e38\u0e13\u0e04\u0e48\u0e32 \u0e01\u0e27\u0e48\u0e32\u0e1a\u0e23\u0e23\u0e14\u0e32\u0e1d\u0e39\u0e07\u0e2a\u0e31\u0e15\u0e27\u0e4c\u0e40\u0e14\u0e23\u0e31\u0e08\u0e09\u0e32\u0e19 \u0e08\u0e07\u0e1d\u0e48\u0e32\u0e1f\u0e31\u0e19\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e27\u0e34\u0e0a\u0e32\u0e01\u0e32\u0e23 \u0e2d\u0e22\u0e48\u0e32\u0e25\u0e49\u0e32\u0e07\u0e1c\u0e25\u0e32\u0e0d\u0e24\u0e45\u0e40\u0e02\u0e48\u0e19\u0e06\u0e48\u0e32\u0e1a\u0e35\u0e11\u0e32\u0e43\u0e04\u0e23 \u0e44\u0e21\u0e48\u0e16\u0e37\u0e2d\u0e42\u0e17\u0e29\u0e42\u0e01\u0e23\u0e18\u0e41\u0e0a\u0e48\u0e07\u0e0b\u0e31\u0e14\u0e2e\u0e36\u0e14\u0e2e\u0e31\u0e14\u0e14\u0e48\u0e32 \u0e2b\u0e31\u0e14\u0e2d\u0e20\u0e31\u0e22\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e01\u0e35\u0e2c\u0e32\u0e2d\u0e31\u0e0a\u0e0c\u0e32\u0e2a\u0e31\u0e22 \u0e1b\u0e0f\u0e34\u0e1a\u0e31\u0e15\u0e34\u0e1b\u0e23\u0e30\u0e1e\u0e24\u0e15\u0e34\u0e01\u0e0e\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e43\u0e08 \u0e1e\u0e39\u0e14\u0e08\u0e32\u0e43\u0e2b\u0e49\u0e08\u0e4a\u0e30\u0e46 \u0e08\u0e4b\u0e32\u0e46 \u0e19\u0e48\u0e32\u0e1f\u0e31\u0e07\u0e40\u0e2d\u0e22\u0e2f'};return h.createElement(f,null,h.createElement(p,{onPress:function(){return t.setState(function(t){return{fontSize:t.fontSize+3}})}},"Increase size"),h.createElement(p,{onPress:function(){return t.setState(function(t){return{fontSize:t.fontSize-3}})}},"Decrease size"),h.createElement(c,{selectedValue:this.state.language,onValueChange:function(n){return t.setState({language:n})}},Object.keys(n).map(function(t){return h.createElement(c.Item,{label:t[0].toUpperCase()+t.substring(1),key:t,value:t})})),h.createElement(f,null,this.state.textMetrics.map(function(t){var n=t.x,o=t.y,l=t.width,s=t.height,u=t.capHeight,c=t.ascender,b=t.descender,y=t.xHeight;return[h.createElement(f,{key:"baseline view",style:{top:o+c,height:1,left:0,right:0,position:'absolute',backgroundColor:'red'}}),h.createElement(p,{key:"baseline text",style:{top:o+c,right:0,position:'absolute',color:'red'}},"Baseline"),h.createElement(f,{key:"capheight view",style:{top:o+c-u,height:1,left:0,right:0,position:'absolute',backgroundColor:'green'}}),h.createElement(p,{key:"capheight text",style:{top:o+c-u,right:0,position:'absolute',color:'green'}},"Capheight"),h.createElement(f,{key:"xheight view",style:{top:o+c-y,height:1,left:0,right:0,position:'absolute',backgroundColor:'blue'}}),h.createElement(p,{key:"xheight text",style:{top:o+c-y,right:0,position:'absolute',color:'blue'}},"X-height"),h.createElement(f,{key:"descender view",style:{top:o+c+b,height:1,left:0,right:0,position:'absolute',backgroundColor:'orange'}}),h.createElement(p,{key:"descender text",style:{top:o+c+b,right:0,position:'absolute',color:'orange'}},"Descender"),h.createElement(f,{key:"end of text view",style:{top:o,height:s,width:1,left:n+l,position:'absolute',backgroundColor:'brown'}}),h.createElement(p,{key:"end of text text",style:{top:o,left:n+l+5,position:'absolute',color:'brown'}},"End of text"),h.createElement(f,{key:"start of text view",style:{top:o,height:s,width:1,left:n,position:'absolute',backgroundColor:'brown'}}),h.createElement(p,{key:"start of text text",style:{top:o,left:n+5,position:'absolute',color:'brown'}},"Start of text")]}),h.createElement(p,{onTextLayout:function(n){t.setState({textMetrics:n.nativeEvent.lines})},style:{fontSize:this.state.fontSize,textAlign:this.state.alignment}},n[this.state.language])),h.createElement(c,{selectedValue:this.state.alignment,onValueChange:function(n){return t.setState({alignment:n})}},h.createElement(c.Item,{label:"Left align",value:"left"}),h.createElement(c.Item,{label:"Center align",value:"center"}),h.createElement(c.Item,{label:"Right align",value:"right"})))}}]),b})(h.Component);m.exports=b},666740,[3,4,5,8,9,54,15]);