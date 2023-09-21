# jQuery CountryPicker
[Homepage](https://www.berlinsms.de/)

# Description
A jquery-plugin to pick a country-code in a formular

# Usage

Include jquery    
```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

Download bsms-country-picker.js and all-countries.js
```link
https://raw.githubusercontent.com/berlinSMS/country-picker/main/bsms-country-picker.js
https://raw.githubusercontent.com/berlinSMS/country-picker/main/all-countries.js
```

Include bsms-country-picker and all-countries.js
```html
<script src="bsms-country-picker.js"></script>
<script src="all-countries.js"></script>
```

Find your jquery-container and assign country-picker
```js
$('.plugin-container').bsmsCountryPicker();    
```

Make sure, the script is fully loaded, before you assign country-picker, e.g. use jquerys 'ready'
```js
$(document).ready(()=>{
    $('.plugin-container').bsmsCountryPicker();
});    
```

Add options, if needed:
```js
$(document).ready(function() {
	$('.country-picker-container').bsmsCountryPicker({
		countries: { 
			"AT": { name:"Österreich",  code:"+43"} ,
			"DE": { name:"Deutschland", code:"+49"}, 
			"CH": { name:"Schweiz",     code:"+41"}, 
		}, 
		defaultCountry: "DE"
	});
});   
```

# Options


| Option         | DESCRIPTION                                                                                                                                     | DEFAULT                               |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| countries      | Dictionary of available countries, each key must be an uniqued identifier of a country, values are dictionaries of name and code of the country | {"DE": { name:"Germany", code:"+49"}} |
| defaultCountry | identifier of a country, which ist selected initialy, has to be a key in the countries-dictionary                                               | DE                                    |
| inputName      | name-attribute of a hidden input-tag, which the plugin includes to the form                                                                     | bsms-country-code                     |
| className      | for costum-css, class of the dropdown-container                                                                                                 | bsms-country-code                     |         
                                                                                                                                                                           
