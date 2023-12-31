/** 
 * A jquery-plugin to pick a country-code in a formular
 *  - You need to import jquery
 *
 * @copyright Copyright (c) 2023, Energieweise Ingenieur GmbH, berlinsms
 * @link      https://www.berlinsms.de/
 * 
 * Hiermit wird jeder Person, die eine Kopie dieser Software und der zugehoerigen
 * Dokumentationsdateien (die "Software") erwirbt, kostenlos die Erlaubnis erteilt, 
 * uneingeschraenkt mit der Software zu handeln, einschliesslich und ohne 
 * Einschraenkung der Rechte, Kopien der Software zu verwenden, zu kopieren, zu 
 * modifizieren, zusammenzufuehren, zu veroeffentlichen, zu vertreiben, zu 
 * unterlizenzieren und/oder zu verkaufen, und Personen, denen die Software zur 
 * Verfuegung gestellt wird, dies unter den folgenden Bedingungen zu gestatten:
 * 
 * Dieser Copyright-Hinweis und dieser Genehmigungshinweis muessen in allen Kopien 
 * oder wesentlichen Teilen der Software enthalten sein.
 * 
 * DIE SOFTWARE WIRD OHNE MAENGELGEWAEHR ZUR VERFUEGUNG GESTELLT, OHNE AUSDRUECKLICHE 
 * ODER STILLSCHWEIGENDE GEWAEHRLEISTUNG JEGLICHER ART, EINSCHLIESSLICH, ABER NICHT
 * BESCHRAENKT AUF DIE GEWAEHRLEISTUNG DER MARKTGAENGIGKEIT, DER EIGNUNG FUER EINEN 
 * BESTIMMTEN ZWECK UND DER NICHTVERLETZUNG VON RECHTEN. IN KEINEM FALL HAFTEN DIE 
 * AUTOREN ODER URHEBERRECHTSINHABER FUER JEGLICHE ANSPRUECHE, SCHAEDEN ODER SONSTIGE 
 * HAFTUNG, SEI ES DURCH VERTRAG, UNERLAUBTE HANDLUNGEN ODER ANDERWEITIG, DIE SICH 
 * AUS DER SOFTWARE ODER DER NUTZUNG DER SOFTWARE ODER DEM SONSTIGEN UMGANG MIT 
 * DER SOFTWARE ERGEBEN ODER DAMIT ZUSAMMENHAENGEN.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of 
 * this software and associated documentation files (the "Software"), to deal in 
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the 
 * Software, and to permit persons to whom the Software is furnished to do so, 
 * subject to the following conditions:
 * 
 * This copyright notice and this permission notice must be included in all copies 
 * or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR
 * IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE 
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIMS, DAMAGES OR OTHER LIABILITY, 
 * WHETHER IN CONTRACT, TORT OR OTHERWISE, ARISING OUT OF OR RELATED TO THE SOFTWARE 
 * OR THE USE OF OR OTHER DEALINGS WITH THE SOFTWARE.
 * 
 */
 
(function($) {
    $.fn.bsmsCountryPicker = function (options) {     
        
        const caller = this;

        caller.allCountries = {
            "AF": { name: "Afghanistan", code: "+93" },
            "AL": { name: "Albania", code: "+355" },
            "DZ": { name: "Algeria", code: "+213" },
            "AS": { name: "American Samoa", code: "+1" },
            "AD": { name: "Andorra", code: "+376" },
            "AO": { name: "Angola", code: "+244" },
            "AI": { name: "Anguilla", code: "+1" },
            "AG": { name: "Antigua", code: "+1" },
            "AR": { name: "Argentina", code: "+54" },
            "AM": { name: "Armenia", code: "+374" },
            "AW": { name: "Aruba", code: "+297" },
            "AU": { name: "Australia", code: "+61" },
            "AT": { name: "Austria", code: "+43" },
            "AZ": { name: "Azerbaijan", code: "+994" },
            "BH": { name: "Bahrain", code: "+973" },
            "BD": { name: "Bangladesh", code: "+880" },
            "BB": { name: "Barbados", code: "+1" },
            "BY": { name: "Belarus", code: "+375" },
            "BE": { name: "Belgium", code: "+32" },
            "BZ": { name: "Belize", code: "+501" },
            "BJ": { name: "Benin", code: "+229" },
            "BM": { name: "Bermuda", code: "+1" },
            "BT": { name: "Bhutan", code: "+975" },
            "BO": { name: "Bolivia", code: "+591" },
            "BA": { name: "Bosnia and Herzegovina", code: "+387" },
            "BW": { name: "Botswana", code: "+267" },
            "BR": { name: "Brazil", code: "+55" },
            "IO": { name: "British Indian Ocean Territory", code: "+246" },
            "VG": { name: "British Virgin Islands", code: "+1" },
            "BN": { name: "Brunei", code: "+673" },
            "BG": { name: "Bulgaria", code: "+359" },
            "BF": { name: "Burkina Faso", code: "+226" },
            "MM": { name: "Burma Myanmar", code: "+95" },
            "BI": { name: "Burundi", code: "+257" },
            "KH": { name: "Cambodia", code: "+855" },
            "CM": { name: "Cameroon", code: "+237" },
            "CA": { name: "Canada", code: "+1" },
            "CV": { name: "Cape Verde", code: "+238" },
            "KY": { name: "Cayman Islands", code: "+1" },
            "CF": { name: "Central African Republic", code: "+236" },
            "TD": { name: "Chad", code: "+235" },
            "CL": { name: "Chile", code: "+56" },
            "CN": { name: "China", code: "+86" },
            "CO": { name: "Colombia", code: "+57" },
            "KM": { name: "Comoros", code: "+269" },
            "CK": { name: "Cook Islands", code: "+682" },
            "CR": { name: "Costa Rica", code: "+506" },
            "CI": { name: "C�te d'Ivoire", code: "+225" },
            "HR": { name: "Croatia", code: "+385" },
            "CU": { name: "Cuba", code: "+53" },
            "CY": { name: "Cyprus", code: "+357" },
            "CZ": { name: "Czech Republic", code: "+420" },
            "CD": { name: "Democratic Republic of Congo", code: "+243" },
            "DK": { name: "Denmark", code: "+45" },
            "DJ": { name: "Djibouti", code: "+253" },
            "DM": { name: "Dominica", code: "+1" },
            "DO": { name: "Dominican Republic", code: "+1" },
            "EC": { name: "Ecuador", code: "+593" },
            "EG": { name: "Egypt", code: "+20" },
            "SV": { name: "El Salvador", code: "+503" },
            "GQ": { name: "Equatorial Guinea", code: "+240" },
            "ER": { name: "Eritrea", code: "+291" },
            "EE": { name: "Estonia", code: "+372" },
            "ET": { name: "Ethiopia", code: "+251" },
            "FK": { name: "Falkland Islands", code: "+500" },
            "FO": { name: "Faroe Islands", code: "+298" },
            "FM": { name: "Federated States of Micronesia", code: "+691" },
            "FJ": { name: "Fiji", code: "+679" },
            "FI": { name: "Finland", code: "+358" },
            "FR": { name: "France", code: "+33" },
            "GF": { name: "French Guiana", code: "+594" },
            "PF": { name: "French Polynesia", code: "+689" },
            "GA": { name: "Gabon", code: "+241" },
            "GE": { name: "Georgia", code: "+995" },
            "DE": { name: "Germany", code: "+49" },
            "GH": { name: "Ghana", code: "+233" },
            "GI": { name: "Gibraltar", code: "+350" },
            "GR": { name: "Greece", code: "+30" },
            "GL": { name: "Greenland", code: "+299" },
            "GD": { name: "Grenada", code: "+1" },
            "GP": { name: "Guadeloupe", code: "+590" },
            "GU": { name: "Guam", code: "+1" },
            "GT": { name: "Guatemala", code: "+502" },
            "GN": { name: "Guinea", code: "+224" },
            "GW": { name: "Guinea-Bissau", code: "+245" },
            "GY": { name: "Guyana", code: "+592" },
            "HT": { name: "Haiti", code: "+509" },
            "HN": { name: "Honduras", code: "+504" },
            "HK": { name: "Hong Kong", code: "+852" },
            "HU": { name: "Hungary", code: "+36" },
            "IS": { name: "Iceland", code: "+354" },
            "IN": { name: "India", code: "+91" },
            "ID": { name: "Indonesia", code: "+62" },
            "IR": { name: "Iran", code: "+98" },
            "IQ": { name: "Iraq", code: "+964" },
            "IE": { name: "Ireland", code: "+353" },
            "IL": { name: "Israel", code: "+972" },
            "IT": { name: "Italy", code: "+39" },
            "JM": { name: "Jamaica", code: "+1" },
            "JP": { name: "Japan", code: "+81" },
            "JO": { name: "Jordan", code: "+962" },
            "KZ": { name: "Kazakhstan", code: "+7" },
            "KE": { name: "Kenya", code: "+254" },
            "KI": { name: "Kiribati", code: "+686" },
            "XK": { name: "Kosovo", code: "+381" },
            "KW": { name: "Kuwait", code: "+965" },
            "KG": { name: "Kyrgyzstan", code: "+996" },
            "LA": { name: "Laos", code: "+856" },
            "LV": { name: "Latvia", code: "+371" },
            "LB": { name: "Lebanon", code: "+961" },
            "LS": { name: "Lesotho", code: "+266" },
            "LR": { name: "Liberia", code: "+231" },
            "LY": { name: "Libya", code: "+218" },
            "LI": { name: "Liechtenstein", code: "+423" },
            "LT": { name: "Lithuania", code: "+370" },
            "LU": { name: "Luxembourg", code: "+352" },
            "MO": { name: "Macau", code: "+853" },
            "MK": { name: "Macedonia", code: "+389" },
            "MG": { name: "Madagascar", code: "+261" },
            "MW": { name: "Malawi", code: "+265" },
            "MY": { name: "Malaysia", code: "+60" },
            "MV": { name: "Maldives", code: "+960" },
            "ML": { name: "Mali", code: "+223" },
            "MT": { name: "Malta", code: "+356" },
            "MH": { name: "Marshall Islands", code: "+692" },
            "MQ": { name: "Martinique", code: "+596" },
            "MR": { name: "Mauritania", code: "+222" },
            "MU": { name: "Mauritius", code: "+230" },
            "YT": { name: "Mayotte", code: "+262" },
            "MX": { name: "Mexico", code: "+52" },
            "MD": { name: "Moldova", code: "+373" },
            "MC": { name: "Monaco", code: "+377" },
            "MN": { name: "Mongolia", code: "+976" },
            "ME": { name: "Montenegro", code: "+382" },
            "MS": { name: "Montserrat", code: "+1" },
            "MA": { name: "Morocco", code: "+212" },
            "MZ": { name: "Mozambique", code: "+258" },
            "NA": { name: "Namibia", code: "+264" },
            "NR": { name: "Nauru", code: "+674" },
            "NP": { name: "Nepal", code: "+977" },
            "NL": { name: "Netherlands", code: "+31" },
            "AN": { name: "Netherlands Antilles", code: "+599" },
            "NC": { name: "New Caledonia", code: "+687" },
            "NZ": { name: "New Zealand", code: "+64" },
            "NI": { name: "Nicaragua", code: "+505" },
            "NE": { name: "Niger", code: "+227" },
            "NG": { name: "Nigeria", code: "+234" },
            "NU": { name: "Niue", code: "+683" },
            "NF": { name: "Norfolk Island", code: "+672" },
            "KP": { name: "North Korea", code: "+850" },
            "MP": { name: "Northern Mariana Islands", code: "+1" },
            "NO": { name: "Norway", code: "+47" },
            "OM": { name: "Oman", code: "+968" },
            "PK": { name: "Pakistan", code: "+92" },
            "PW": { name: "Palau", code: "+680" },
            "PS": { name: "Palestine", code: "+970" },
            "PA": { name: "Panama", code: "+507" },
            "PG": { name: "Papua New Guinea", code: "+675" },
            "PY": { name: "Paraguay", code: "+595" },
            "PE": { name: "Peru", code: "+51" },
            "PH": { name: "Philippines", code: "+63" },
            "PL": { name: "Poland", code: "+48" },
            "PT": { name: "Portugal", code: "+351" },
            "PR": { name: "Puerto Rico", code: "+1" },
            "QA": { name: "Qatar", code: "+974" },
            "CG": { name: "Republic of the Congo", code: "+242" },
            "RE": { name: "R�union", code: "+262" },
            "RO": { name: "Romania", code: "+40" },
            "RU": { name: "Russia", code: "+7" },
            "RW": { name: "Rwanda", code: "+250" },
            "BL": { name: "Saint Barth�lemy", code: "+590" },
            "SH": { name: "Saint Helena", code: "+290" },
            "KN": { name: "Saint Kitts and Nevis", code: "+1" },
            "MF": { name: "Saint Martin", code: "+590" },
            "PM": { name: "Saint Pierre and Miquelon", code: "+508" },
            "VC": { name: "Saint Vincent and the Grenadines", code: "+1" },
            "WS": { name: "Samoa", code: "+685" },
            "SM": { name: "San Marino", code: "+378" },
            "ST": { name: "S�o Tom� and Pr�ncipe", code: "+239" },
            "SA": { name: "Saudi Arabia", code: "+966" },
            "SN": { name: "Senegal", code: "+221" },
            "RS": { name: "Serbia", code: "+381" },
            "SC": { name: "Seychelles", code: "+248" },
            "SL": { name: "Sierra Leone", code: "+232" },
            "SG": { name: "Singapore", code: "+65" },
            "SK": { name: "Slovakia", code: "+421" },
            "SI": { name: "Slovenia", code: "+386" },
            "SB": { name: "Solomon Islands", code: "+677" },
            "SO": { name: "Somalia", code: "+252" },
            "ZA": { name: "South Africa", code: "+27" },
            "KR": { name: "South Korea", code: "+82" },
            "ES": { name: "Spain", code: "+34" },
            "LK": { name: "Sri Lanka", code: "+94" },
            "LC": { name: "St. Lucia", code: "+1" },
            "SD": { name: "Sudan", code: "+249" },
            "SR": { name: "Suriname", code: "+597" },
            "SZ": { name: "Swaziland", code: "+268" },
            "SE": { name: "Sweden", code: "+46" },
            "CH": { name: "Switzerland", code: "+41" },
            "SY": { name: "Syria", code: "+963" },
            "TW": { name: "Taiwan", code: "+886" },
            "TJ": { name: "Tajikistan", code: "+992" },
            "TZ": { name: "Tanzania", code: "+255" },
            "TH": { name: "Thailand", code: "+66" },
            "BS": { name: "The Bahamas", code: "+1" },
            "GM": { name: "The Gambia", code: "+220" },
            "TL": { name: "Timor-Leste", code: "+670" },
            "TG": { name: "Togo", code: "+228" },
            "TK": { name: "Tokelau", code: "+690" },
            "TO": { name: "Tonga", code: "+676" },
            "TT": { name: "Trinidad and Tobago", code: "+1" },
            "TN": { name: "Tunisia", code: "+216" },
            "TR": { name: "Turkey", code: "+90" },
            "TM": { name: "Turkmenistan", code: "+993" },
            "TC": { name: "Turks and Caicos Islands", code: "+1" },
            "TV": { name: "Tuvalu", code: "+688" },
            "UG": { name: "Uganda", code: "+256" },
            "UA": { name: "Ukraine", code: "+380" },
            "AE": { name: "United Arab Emirates", code: "+971" },
            "GB": { name: "United Kingdom", code: "+44" },
            "US": { name: "United States", code: "+1" },
            "UY": { name: "Uruguay", code: "+598" },
            "VI": { name: "US Virgin Islands", code: "+1" },
            "UZ": { name: "Uzbekistan", code: "+998" },
            "VU": { name: "Vanuatu", code: "+678" },
            "VA": { name: "Vatican City", code: "+39" },
            "VE": { name: "Venezuela", code: "+58" },
            "VN": { name: "Vietnam", code: "+84" },
            "WF": { name: "Wallis and Futuna", code: "+681" },
            "YE": { name: "Yemen", code: "+967" },
            "ZM": { name: "Zambia", code: "+260" },
            "ZW": { name: "Zimbabwe", code: "+263" }
        };

        const defaultSettings = {
            countries: this.allCountries,
            defaultCountry: "DE",
            inputName: 'bsms-country-code',
        };

        const settings = $.extend({}, defaultSettings, options);
        caller.each(function() {
            const $container = $(this);
            const $dropdown = $(`<div class="bsms-country-code"></div>`).appendTo($container);

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

            $dropdown.click(event => {
                $dropdown
                    .fadeOut(1)
                    .delay(1)
                    .fadeIn(1);
            });

            $dropdown.change(event => {
                $container.val($(event.target).val());
            });

            //select and trigger default            
            var defaultInput = $dropdown.find(`input#${settings.defaultCountry}`);
            if (!defaultInput.length) {
                defaultInput = $dropdown.find(`input`).first();
            }
            defaultInput
                .prop('checked', true)
                .trigger('change');

            this.setCountry = country =>
                $dropdown.find(`input#${country}`)
                    .prop('checked', true)
                    .trigger('change');

            return this;
        });

        caller.countries = settings.countries;

        caller.setCountry = country => {
            caller.each((i,o)=>{
                o.setCountry(country);
            });
            return caller;
        }

        caller.getCountry = () => 
            caller.getCountryByPhonenumber(caller.val());    

        caller.getCountryByPhonenumber = phonenumber => {
            return Object.keys(caller.countries).find(does_match_phonenumber);

            function does_match_phonenumber(key) {
                const code = caller.countries[key].code;
                if (code == phonenumber.substr(0, code.length))
                    return true;
                if (code == '+' + phonenumber.substr(0, code.length - 1))
                    return true;
                if ('00' == phonenumber.substr(0, 2) && code === '+' + phonenumber.substr(2, code.length - 1))
                    return true;
                return false;
            }
            return caller;
        }

        caller.setByPhonenumber = phonenumber => 
            caller.setCountry(caller.getCountryByPhonenumber(phonenumber));

        return caller;

    };
})(jQuery);
