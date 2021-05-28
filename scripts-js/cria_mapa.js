//Acessamos a funcao passando o parametros que queremos o valor do seu retorno .Ex: o parametro [stars]

function ObtemParametro(OParametro) {
	/*
	window.location.search.substr(1).split('&') -> array 
    
    // window.location -> Obtem os argumentos da URL (?id=1)
    // window.location.substr(1) -> Retira o '?'
    // window.location.substr(1).split('&') -> Se tivesse mais outro argumento, ele 
    separaria e retornaria em um array (tipo lista em python)

    */
    var params = window.location.search.substr(1).split('&');

    for (var i = 0; i < params.length; i++) {  
        var p = params[i].split('=');   // -> ['id', 1]
        if (p[0] == OParametro) {       // se o 'id' == parametro que qro
            return decodeURIComponent(p[1]); 
        		   /*
        		    Essa parte do decode era pra caso o argumento que mandasse 
        		    fosse algo codificado, como o шеллы, que precisa ser codificado
        		    para mandar.
        		   */
        }
    }
    return false;
}


// ===================================================================


document.addEventListener('DOMContentLoaded', 
	function() {
		var id = ObtemParametro('id'); // Obtém o ID da página
		let html = '';

		// FATOR DE PROPORÇÃO
		//let ft = 5 / 0.67; // Fator de proporção (multi)
		let ft = 2/10 * 0.67; // Fator de proporção (divi)

		// A partir daqui foca nos desenhos
		var comp_tot = 450 * ft; // var comp_tot = 60.3;
		var larg_tot = 100 * ft; //var larg_tot = 13.4;

		var comp_oc = 0 // Comprimento ocupado
		var larg_oc = 0 // Largura ocupado 
		var quant = 0 // Quantidade de terrenos

		let comp = 0;
		let larg = 0;

		let preco = 0; 

		if (id == 1) {
			comp = ft * (30 + 5); // comp = 4.69;
			comp_terreno = ft * 30;

			larg = ft * 10; // larg = 1.34

			preco = 60000;

			// larg == 1.34 (10) + 0.67 (5)
			for (var qt_larg = parseInt(larg_tot/larg); qt_larg > 0; qt_larg--) {	
				html += '<div class="sessao">\n ';

				larg_oc += larg / ft

				for (var qt_comp = parseInt(comp_tot/comp); qt_comp > 0; qt_comp--) {
					html += "\
						\t<div class='desenho op1'>\n \
							\t<div class='container'>\n \
								\t<div class='terreno'>\n \
								\t</div>\n \
								\t<div class='rua'>\n \
								\t</div>\n \
							\t</div>\n \
						\t</div>\n \
						\ ";

					quant ++
					comp_oc += comp / ft
				} 
				if (comp_tot - Math.floor(comp_tot/comp) * comp >= comp_terreno) {
					html += "\
						\t<div class='desenho so_terreno op1'>\n \
							\t<div class='container'>\n \
								\t<div class='terreno'>\n \
								\t</div>\n \
							\t</div>\n \
						\t</div>\n \
						\ ";

					quant ++
					comp_oc += comp_terreno / ft
				}

				html += '</div> \n \ ';
			}

			comp_oc /= parseInt(larg_tot/larg)

		}

		if (id == 2) {
			comp = ft * (28 + 4); // comp = 4.29; 
			comp_terreno = ft * 28

			larg = ft * (9 + 2) ;// larg = 1.47;

			preco = 75000

			for (var qt_larg = parseInt(larg_tot/larg); qt_larg > 0; qt_larg--) {	

				html += '<div class="sessao">\n ';
				if (qt_larg != 1) { 
					larg_oc += larg / ft; 
				} else {
				 	larg_oc += larg / ft - 2;
				}


				for (var qt_comp = parseInt(comp_tot/comp)-1; qt_comp > 0; qt_comp--) {
					if (qt_larg != 1) { 
						html += "\
							\t<div class='desenho op2'>\n \
								\t<div class='container'>\n \
									\t<div class='terreno'>\n \
									\t</div>\n \
									\t<div class='rua' id='primeira-rua'>\n \
									\t</div>\n \
									\t<div class='rua' id='segunda-rua'>\n \
									\t</div>\n \
									\t<div class='rua' id='intersec'>\n \
									\t</div>\n \
								\t</div>\n \
							\t</div>\n \
							\ ";

						comp_oc += comp / ft;

					} else {
						html += "\
							\t<div class='desenho op2 modelo3'>\n \
								\t<div class='container'>\n \
									\t<div class='terreno'>\n \
									\t</div>\n \
									\t<div class='rua' id='primeira-rua'>\n \
									\t</div>\n \
								\t</div>\n \
							\t</div>\n \
							\ ";

						comp_oc += comp / ft;
					}

					quant ++
				}

				if (comp_tot - Math.floor(comp_tot/comp) * (comp - 1) >= comp_terreno) {
					if (qt_larg != 1) {
						html += "\
							\t<div class='desenho so_terreno op2 modelo1'>\n \
								\t<div class='container'>\n \
									\t<div class='terreno'>\n \
									\t</div>\n \
									\t<div class='rua' id='segunda-rua'>\n \
									\t</div>\n \
								\t</div>\n \
							\t</div>\n \
							\ ";

						comp_oc += comp_terreno / ft;

					} else {
						html += "\
							\t<div class='desenho so_terreno op2 modelo2'>\n \
								\t<div class='container'>\n \
									\t<div class='terreno'>\n \
									\t</div>\n \
								\t</div>\n \
							\t</div>\n \
							\ ";

						comp_oc += comp_terreno / ft;
					}

					quant ++
					html += '</div> \n \ ';
				} 

				html += '</div> \n \ ';
			}

			comp_oc /= parseInt(larg_tot/larg)
		}


		// ====================================================================

		// Cálculo das informações → Agora tá lá em cima
		//var larg_oc = Math.round(larg * ft * parseInt(larg_tot/larg));
		//var comp_oc = Math.round(comp * ft * parseInt(comp_tot/comp));
		//var quant = parseInt(larg_tot/larg) * parseInt(comp_tot/comp);

		//Coloca as informações 
		var info = '\
		<h2> Valores do terreno </h2> \n \
		<p> \n \
			Tamanho ocupado: ' + larg_oc*comp_oc + 'm² <br> \n \
			Comprimento total: ' + comp_oc + 'm <br> \n \
			Largura total: ' + larg_oc + 'm <br> \n \
			Quantidade construída: ' + quant + '\n \
		</p> \n \ '
		document.querySelector('#ter').innerHTML = info;

		// Parte do preço
		var pre_pag = '\
		<h2> Preço </h2> \n \
		<p id="preco">  \n \
			' + (preco * quant).toLocaleString('pt-BR', {style: 'currency', currency:'BRL'}) + ' <br>\n \
		</p> \n \ '


		// Aplicação dos HTML
		document.querySelector('#prc-div').innerHTML = pre_pag
		document.querySelector('.mapa-total').innerHTML = html;

	}
)