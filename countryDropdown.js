// countryDropdown.js
(function($) {
    $.fn.countryDropdown = function(options) {
        
		if (!options.className) options.className = 'bsms-country-code';
		
        const defaultStyles = `
.${options.className} {
  position:relative;
  display: inline-block;
  top:0px;
  left:0px;
  width:55px;
}
.${options.className}:hover {
  background-color: RGBA(240,240,240,0.9);
  width:280px;
  max-height:300px;
  top:2px;
  overflow-x:visible;
  overflow-y: scroll; 
}
.${options.className}       input[type="radio"] + label{
   font-family:arial
}
.${options.className}       input[type="radio"] + label div{
   font-weight: bold; 
   color: darkblue;
   width:50px;
   display:inline-block
}
.${options.className}       input[type="radio"] + label span {
   font-style: italic; 
   color: #e83e8c;
   min-width:200px;
  display:inline-block;
}
.${options.className}       input[type="radio"] {
  display: none;
}
.${options.className}       input[type="radio"] + label {
  display: none;
}
.${options.className}       input[type="radio"]:checked + label {
  color: #28AADC;
  display: inline-block;
}
.${options.className}       input[type="radio"]:checked + label span {
  display: none;
}
.${options.className}       input[type="radio"]:checked + label div:after {
  content:"\\25BE";
}
.${options.className}:hover input[type="radio"] + label {
  display: inline-block;
}
.${options.className}:hover input[type="radio"] + label:hover {
  background-color: lightblue;
}
.${options.className}:hover input[type="radio"]:checked + label {
  background-color: lightgrey;
}
.${options.className}:hover input[type="radio"]:checked + label span {
  display:inline-block
}
.${options.className}:hover input[type="radio"]:checked + label div:after {
  content:''
}`;    
                
        const defaultSettings = {
            userStyles: defaultStyles,
            countries: {"DE": { name:"Germany", code:"+49"}},
			defaultCountry: "DE",
            inputName: 'bsms-country-code',
            className: 'bsms-country-code'
        };

        const settings = $.extend({}, defaultSettings, options);

        $(`<style type="text/css">${settings.userStyles}</style>`)
            .prependTo('head');    

        return this.each(function() {
            const $container = $(this);
            const $dropdown = $(`<div class="${settings.className}"></div>`).appendTo($container);

            $.each(settings.countries, function(short, country) {
				$dropdown.append(`
<div>
<input id="${short}" type="radio" name="${settings.inputName}" value="${country.code}"/>
<label for="${short}">
	<div>${country.code}</div>
	<span>${country.name}</span>
</label>
</div>`);
            });
			$dropdown.find(`input`).first()
				.prop('checked', true);
			$dropdown.find(`input#${settings.defaultCountry}`)
				.prop('checked', true);
			$container.append($dropdown);

            $dropdown.hover(()=>{
				const $checkedInput = $dropdown.find(`input:checked`).closest('div');
				$dropdown.scrollTop( $dropdown.scrollTop() + $checkedInput.position().top );            
            });

            $dropdown.click(()=>{
				$dropdown
					.fadeOut(1)
					.delay(1)
					.fadeIn(1);
            });
        });
    };
})(jQuery);
