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
    $.fn.bsmsCountryPicker = function(options) {
                
        const defaultSettings = {
            countries: {"DE": { name:"Germany", code:"+49"}},
            defaultCountry: "DE",
            inputName: 'bsms-country-code',
        };

        const settings = $.extend({}, defaultSettings, options);

        return this.each(function() {
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
            
        });
    };
})(jQuery);
