# jQuery CountryPicker
[Homepage](https://www.berlinsms.de/)

# Description
A jquery-plugin to pick a country-code in a formular

# Usage
Download js and css for bsms-country-picker
```link
https://static.berlinsms.de/toolsforcoder/country-picker/dist/bsms-country-picker.min.js
https://static.berlinsms.de/toolsforcoder/country-picker/distbsms-country-picker.css
```

Include jquery and js+css for bsms-country-picker 
```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<link rel="stylesheet" href="bsms-country-picker.css">
<script src="bsms-country-picker.min.js"></script>
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

| Option         | DESCRIPTION                                                                                                                                     | DEFAULT           |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
| countries      | Dictionary of available countries, each key must be an uniqued identifier of a country, values are dictionaries of name and code of the country | all countries     |
| defaultCountry | identifier of a country, which ist selected initialy, has to be a key in the countries-dictionary                                               | DE                |
| inputName      | name-attribute of a hidden input-tag, which the plugin includes to the form                                                                     | bsms-country-code |         
                                                                                                                                                                           

# Functions

| Option           | DESCRIPTION                                   | PARAMETER          | RETURN             |
|------------------|-----------------------------------------------|--------------------|--------------------|
| setCountry       | Sets the country-picker to a specific country | country-short-code | jQuery caller      |
| setByPhonenumber | Sets the country-picker to a specific country | phonenumber        | jQuery caller      | 
| val              | Gets the selected country-code                |                    | string countryCode |         
                                                                                                                                                                           
