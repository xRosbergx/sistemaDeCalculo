var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(){
	event.preventDefault();//impede comportamento padrao

	var campoNome = document.querySelector("#campo-nome");
	var campoPeso = document.querySelector("#campo-peso");
	var campoAltura = document.querySelector("#campo-altura");

	if (campoNome.value == "" | campoAltura.value == "" | campoPeso.value == ""){
		//alert("Preencha os campos");
		var elemento_pai = document.querySelector("main");

		// Criar elemento
		var dialogo = document.createElement('h3');

		// Criando o nó de texto de outra forma
		dialogo.textContent = "Ops, preencha os campos para continuar!"

		// Inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
		setTimeout(function(){ elemento_pai.appendChild(dialogo); },1000);
		//remove o nó selecioando mais proximo
		setTimeout(function(){
			var no = document.querySelector("h3");
		if (no.parentNode) 
		  no.parentNode.removeChild(no);
		},5000);
	}else{
		var pacienteNovo = "<tr class='paciente'>"+
						"<td class='info-nome'>"+ campoNome.value+"</td>"+
						"<td class='info-peso' >"+ campoPeso.value +"</td>"+
						"<td class='info-altura'>"+ campoAltura.value +"</td>"+
						"<td class='info-imc'></td>"+
					"</tr>";

		var tabela = document.querySelector("table"); // primeiro elemento
		tabela.innerHTML = tabela.innerHTML + pacienteNovo; //conteudo antigo mais conteudo novo

		campoNome.value = "";
		campoPeso.value = "";
		campoAltura.value = "";
	}
});
