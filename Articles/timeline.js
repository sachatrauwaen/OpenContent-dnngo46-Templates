(function ($) {
    $(document).ready(function () {
        initPage(document);
    });
    $(document).on("opencontent.change", function (event, element) {
        initPage(element);
    });
    /*
    function initPage(element) {
        $(".jplist", element).each(function () {
            $(this).jplist({
                itemsBox: '.list'
                , itemPath: '.list-item'
                , panelPath: '.jplist-panel'
                ,deepLinking: true    
            });
        });
    }
    */

    var template = '';

    function initPage(element) {
        $(".jplist", element).each(function () {

            var moduleScope = $(this),
                self = moduleScope,
                sf = $.ServicesFramework($(this).attr('data-moduleid'));

			Handlebars.registerPartial('social', $('#social-template').html());
				
            var $list = $('#demo .list')
			    , template = Handlebars.compile($('#jplist-template').html());

            $(this).jplist({
                itemsBox: ".list"
                , itemPath: ".list-item"
                , panelPath: ".jplist-panel"
                , deepLinking: false
                , dataSource: {
                    type: 'server'
                    , server: {
                        ajax: {
                            data: {}
                                , url: sf.getServiceRoot('OpenContent') + "JplistAPI/List"
							    , dataType: 'json'
							    , type: 'POST'
                                , beforeSend: sf.setModuleHeaders
                        }
                    }
                    , render: function (dataItem, statuses) {
                        $list.html(template(dataItem.content));
						
						$('.LightBox_youtube').each(function(){
							$('img', this).attr('src', $.jYoutube($(this).attr('href')));
							
						});
						
						$('.LightBox_image').each(function(){
							$(this).magnificPopup({type:'image',callbacks:{beforeOpen:function(){
							this.st.image.markup=this.st.image.markup.replace('mfp-figure','mfp-figure mfp-with-anim');
							this.st.mainClass=this.st.el.attr('data-effect')?this.st.el.attr('data-effect'):"mfp-zoom-in";
							}},removalDelay:500,closeOnContentClick:true,midClick:true});

						});

						$('.LightBox_youtube, .LightBox_vimeo, .LightBox_gmaps').magnificPopup({disableOn:700,type:'iframe',preloader:false,fixedContentPos:false,callbacks:{beforeOpen:function(){this.st.mainClass=this.st.el.attr('data-effect')?this.st.el.attr('data-effect'):"mfp-zoom-in";}},removalDelay:500,closeOnContentClick:true,midClick:true});$("[class^='LightBox_youtube_gallery'],[class^='LightBox_vimeo_gallery'],[class^='LightBox_gmaps_gallery']").each(function(){$("."+$(this).attr("class").split(" ")[0]).magnificPopup({disableOn:700,type:'iframe',preloader:false,fixedContentPos:false,gallery:{enabled:true,preload:[0,1]},callbacks:{beforeOpen:function(){this.st.mainClass=this.st.el.attr('data-effect')?this.st.el.attr('data-effect'):"mfp-zoom-in";},open:function(){$.magnificPopup.instance.next=function(){var self=this;self.wrap.removeClass('mfp-ready');setTimeout(function(){$.magnificPopup.proto.next.call(self);setTimeout(function(){self.wrap.addClass('mfp-ready');},16);},120);};$.magnificPopup.instance.prev=function(){var self=this;self.wrap.removeClass('mfp-ready');setTimeout(function(){$.magnificPopup.proto.prev.call(self);setTimeout(function(){self.wrap.addClass('mfp-ready');},16);},120);}},},removalDelay:500,closeOnContentClick:true,midClick:true})});
						$('.LightBox_image_group').each(function(index,element){$(this).magnificPopup({delegate:'a',type:'image',tLoading:'Loading ...',gallery:{enabled:true,navigateByImgClick:true,preload:[1,1]},image:{tError:' could not be loaded.',titleSrc:function(item){return item.el.attr('title');}},callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace('mfp-figure','mfp-figure mfp-with-anim');this.st.mainClass=this.st.el.attr('data-effect')?this.st.el.attr('data-effect'):"mfp-zoom-in";},open:function(){$.magnificPopup.instance.next=function(){var self=this;self.wrap.removeClass('mfp-ready');setTimeout(function(){$.magnificPopup.proto.next.call(self);},120);};$.magnificPopup.instance.prev=function(){var self=this;self.wrap.removeClass('mfp-ready');setTimeout(function(){$.magnificPopup.proto.prev.call(self);},120);}},imageLoadComplete:function(){var self=this;setTimeout(function(){self.wrap.addClass('mfp-ready');},16);}},removalDelay:500,closeOnContentClick:true,midClick:true});});
						
						
						sbg();
                    }
                }

            });
        });

		// for detail
		$('.LightBox_youtube').each(function(){
			$('img', this).attr('src', $.jYoutube($(this).attr('href')));
			
		});
				
		sbg();

        $(".flexslider.flex-carousel", element).each(function () {
            $(this).flexslider({
                'animationLoop': $(this).attr("data-animationloop") ? $(this).data("animationloop") : false,
                'slideshow': $(this).attr("data-slideshow") ? $(this).data("slideshow") : false,
                'animation': "slide",
                'touch': $(this).attr("data-touch") ? $(this).data("touch") : false,
                'controlNav': $(this).attr("data-controlnav") ? $(this).data("controlnav") : false,
                'directionNav': $(this).attr("data-directionnav") ? $(this).data("directionnav") : false,
                'itemWidth': $(this).attr("data-itemwidth") ? $(this).data("itemwidth") : 210,
                'itemMargin': $(this).attr("data-itemmargin") ? $(this).data("itemmargin") : 5,
                'minItems': $(this).attr("data-minitems") ? $(this).data("minitems") : 0,
                'maxItems': $(this).attr("data-maxitems") ? $(this).data("maxitems") : 0,
                'move': $(this).attr("data-move") ? $(this).data("move") : 0,
                'asNavFor': $(this).attr("data-asnavfor") ? $(this).data("asnavfor") : "",
            });
        });
        $(".flexslider.flex-slider", element).each(function () {
            $(this).flexslider({
                'animationLoop': $(this).attr("data-animationloop") ? $(this).data("animationloop") : false,
                'slideshow': $(this).attr("data-slideshow") ? $(this).data("slideshow") : false,

                'animation': $(this).attr("data-animation") ? $(this).data("animation") : "slide",
                'touch': $(this).attr("data-touch") ? $(this).data("touch") : false,
                'controlNav': $(this).attr("data-controlnav") ? $(this).data("controlnav") : false,
                'directionNav': $(this).attr("data-directionnav") ? $(this).data("directionnav") : false,
                'sync': $(this).attr("data-sync") ? $(this).data("sync") : "",

            });
        });


        //$(".jplist-detail .description a").oembed(null, {'maxWidth':300});

     
    }
    if (typeof Handlebars != 'undefined') {
        Handlebars.registerHelper('formatDateTime', function (context, format) {

            if (window.moment && context && moment(context).isValid()) {

                var f = format || "DD/MM/YYYY";

                return moment(context).format(f);

            } else {

                return context;   //  moment plugin is not available, context does not have a truthy value, or context is not a valid date

            }

        });

        Handlebars.registerHelper('lookup', function (context, field, value, options) {
            if (context) {

                for (var i = 0; i < context.length; i++) {
                    if (context[i][field] == value) {

                        return options.fn(context[i]);
                    }
                }
            }

            return context;
        });
		
		Handlebars.registerHelper('ifeven', function(conditional, options) {
		  if((conditional % 2) == 0) {
			return options.fn(this);
		  } else {
			return options.inverse(this);
		  }
		});
				
		Handlebars.registerHelper("math", function(lvalue, operator, rvalue, options) {
			lvalue = parseFloat(lvalue);
			rvalue = parseFloat(rvalue);
				
			return {
				"+": lvalue + rvalue,
				"-": lvalue - rvalue,
				"*": lvalue * rvalue,
				"/": lvalue / rvalue,
				"%": lvalue % rvalue
			}[operator];
		});
				
    }
     
    
}(jQuery));


$.extend({
  jYoutube: function( url, size ){
    if(url === null){ return ""; }

    size = (size === null) ? "big" : size;
    var vid;
    var results;

    results = url.match("[\?&]v=([^&#]*)");

    vid = ( results === null ) ? url : results[1];

    if(size == "small"){
      return "http://img.youtube.com/vi/"+vid+"/2.jpg";
    }else {
      return "http://img.youtube.com/vi/"+vid+"/0.jpg";
    }
  }
});
