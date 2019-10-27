/**
 * SOSOBTC插件，Create By Ymj、Li.hq 
 */
(function(window, undefined){
	var __hasProp = {}.hasOwnProperty;
	
	function Model(modelName){
		var _fn = arguments.callee;
		this.modelName = modelName;
		//接受参数并初始化
		this.init 	= (function(modelName){
			if (modelName != undefined && _fn.init[modelName]) return _fn.init[modelName];
			return function(){};
		})(modelName);
	}
	//暂不支持深度复制
	Model.extend = function(){
		var result = arguments[0] || {};
		for ( var i = 1; i < arguments.length; i++) {
			for (var key in arguments[i]){
				result[key] = arguments[i][key];
			}
		}
		return result;
	};
	//模块的公用方法
	Model.extend(Model.prototype, {
		extend : Model.extend,
		/**
		 * 生成iframe
		 */
		makeIframe : function(opt){
			var iframe = document.createElement('iframe'),
				element = document.getElementById(opt.id);
			
			iframe.src = this.src;
			iframe.setAttribute("frameborder", "0");
			iframe.setAttribute("border", "0");
			iframe.setAttribute("width", "100%");
			iframe.setAttribute("height", "100%");
			iframe.setAttribute("id", "sosobtc_market_iframe");
			if (typeof opt.completeLoad == "function"){
				iframe.onload = opt.completeLoad;
			}
			//iframe插入文档
			element.appendChild(iframe);
		}
	});
	//模块列表
	Model.init = {
		//实时价格
		Market	: function(object){
			var opt = this.extend({
				//默认参数
				row  		: ['price', 'buy', 'sell', 'high', 'low', 'vol'],
				short_tip 	: true,
				show_tip: true,
				completeLoad: function(){}
			}, (object || {}));
			//默认参数
			var param = [];
			if (opt.btc && opt.btc instanceof Array){
				param.push("btc=" + encodeURIComponent(opt.btc.join("|")));
			}
			if (opt.ltc && opt.ltc instanceof Array){
				param.push("ltc=" + encodeURIComponent(opt.ltc.join("|")));
			}
			if (opt.alt && opt.alt instanceof Array){
				param.push("alt=" + encodeURIComponent(opt.alt.join("|")));
			}
			if (opt.bter && opt.bter instanceof Array){
				param.push("bter=" + encodeURIComponent(opt.bter.join("|")));
			}
			if (opt.others && opt.others instanceof Array){
				param.push("others=" + encodeURIComponent(opt.others.join("|")));
			}
			console.log(param);
			param.push("short_tip=" + ((opt.short_tip) ? "1" : "0"));
			param.push("show_tip=" + ((opt.show_tip) ? "1" : "0"));
			param.push("td_height=" + ((opt.td_height) ? opt.td_height : ""));
			//显示项
			if (opt.row && opt.row instanceof Array){
				param.push("row=" + encodeURIComponent(opt.row.join("|")));
			}
			this.src = ("https:" == document.location.protocol ? "https": "http") + "://static2.sosobtc.com/plugin/market" + (param.length > 0 ? "?" + param.join("&") : "");
			this.makeIframe(opt);
		},
		//K线图
		Kline	: function(object){
			var opt = this.extend({
				//默认参数
				sid: "",					// 
				
				enableChatRoom: true,		// 是否使用聊天室
				chatRoomHeight: 180,		// 聊天室高度
				chatRoomWidth: 320,			// 聊天室宽度
				enableHotKeyEsc: true,		// 是否使用快捷键Esc来关闭聊天室
				enableHotKeyEnter: true,	// 是否使用快捷键Enter来打开聊天室
				openChatRoom: true,			// 是否在页面加载完成时打开聊天室
				completeLoad: function(){}
				
			}, (object || {}));
			
			this.src = ("https:" == document.location.protocol ? "https": "http") + "://static2.sosobtc.com/plugin/kline?" + _ob2uri(opt);
			this.makeIframe(opt);
			
			function _ob2uri(ob, encode){
				encode = typeof encode === "undefined" ? true : Boolean(encode);
				
				var ret = '';
				for(var prop in ob){
					if(!__hasProp.call(ob, prop))
						continue;
					ret += prop + '=' + _string(ob[prop]) + '&'
				}
				if(!!ret){
					ret = ret.slice(0, -1);
				}
				return ret;
				
				function _string(ob){
					return encode ? encodeURIComponent(String(ob)) : String(ob);
				}
			}
			
			function _extend(){
				
			}
		}
	};
	function sosobtc(modelName){
		return new Model(modelName);
	}
	window.SOSOBTC = sosobtc;
})(window);
