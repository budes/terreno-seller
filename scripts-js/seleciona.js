function Opcao1HTML(but, outrobut)  {

	but1.style.backgroundColor = 'rgb(250, 140, 0)';
	but1.style.color = 'rgb(240, 240, 240)';

	but2.style.backgroundColor = 'rgba(255, 255, 255, 0)';
	but2.style.color = 'rgb(20, 20, 20)';

	let html = "\
		<div id='titulo'>\n \
			<h1> Opção 1 </h1>\n \
		</div>\n \
		<content>\n \
			\n \
			\n \
			<div class='descricao'> <br>\n \
				<h2> Descrição: </h2>\n \
				<p> <i> Terrenos de 30 m × 10 m, com ruas de 5 m de largura entre esses terrenos apenas paralelas à sua largura, com valor de R$ 60 000,00 cada terreno que for comprado </i> \n \
				</p>\n \
				\n \
				<h2> Valores </h2>\n \
				<p> Área total: 350m² <br> \n \
					Área do terreno: 300m² <br> \n \
					Área das ruas: 50m² <br> <br> \n \
					Preço por terreno: R$ 60 000,00 <br> \n \
				</p> \n \
				\n \
				<a href='mapa.html?id=1'> <button class='botao-visualizar'> Visualizar </button> </a> \n \
				\n \
			</div>\n \
			<div class='desenho' id='op1'>\n \
				<div class='container'>\n \
					<div class='terreno'>\n \
						<p class='valor'> 30x10 </p> \n \
					</div>\n \
					<div class='rua'>\n \
						<p class='valor'> 5x10 </p>\n \
					</div>\n \
				</div>\n \
			</div>\n \
			\n \
		</content> \n \ ";

	document.querySelector('.detalhamento').innerHTML = html;
}

function Opcao2HTML(but, outrobut) {

	but2.style.backgroundColor = 'rgb(250, 140, 0)';
	but2.style.color = 'rgb(240, 240, 240)';

	but1.style.backgroundColor = 'rgba(255, 255, 255, 0)';
	but1.style.color = 'rgb(20, 20, 20)';

	let html = "\
		<div id='titulo'>\n \
			<h1> Opção 2 </h1>\n \
		</div>\n \
		<content>\n \
			\n \
			<div class='descricao'> <br>\n \
				<h2> Descrição: </h2>\n \
				<p> <i> terrenos de 28 m × 9 m, com ruas de 4 m de largura entre esses terrenos paralelas à sua largura e ruas com 2 m de comprimento paralelas ao seu comprimento. A área que sobrar será usada para passeios </i>.</p>\n \
				</p>\n \
				\n \
				<h2> Valores </h2>\n \
				<p> Área total: 344m²<br> \n \
					Área do terreno: 252m²<br> \n \
					Área das ruas: 92m² <br> <br> \n \
					Preço por terreno: R$ 75 000,00 \n \
				</p> \n \
				\n \
				<a href='mapa.html?id=2'> <button class='botao-visualizar'> Visualizar </button> </a> \n \
				\n \
			</div>\n \
			\n \
			<div class='desenho' id='op2'>\n \
				<div class='container'>\n \
					<div class='terreno'>\n \
						<p class='valor'> 28x9 </p> \n \
					</div>\n \
					<div class='rua' id='primeira-rua'>\n \
						<p class='valor'> 2<br>8<br>x<br>2 </p> \n \
					</div>\n \
					<div class='rua' id='segunda-rua'>\n \
						<p class='valor'> 4x9 </p> \n \
					</div>\n \
				</div>\n \
			</div>\n \
			\n \
		</content>";

	document.querySelector('.detalhamento').innerHTML = html;
	document.querySelector('.botao-visualizar').addEventListener('click', Visualizar);
}

// =========================================================================

let but1 = document.querySelector('#opcao1');
let but2 = document.querySelector('#opcao2');

but1.addEventListener('click', Opcao1HTML); 
but2.addEventListener('click', Opcao2HTML);
