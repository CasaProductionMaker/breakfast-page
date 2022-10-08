const stuff = [];
const ids = [];
storage = window.localStorage;
function SendE()
{
	var emailAddress = "andre.yong@outlook.com?subject=New Order&body=" + stuff+ids;
	document.getElementById("submitorder").setAttribute("href", "mailto:" + emailAddress); 
}
function AddItem(item, special)
{
	let rand = Math.floor((Math.random() * 100000000000000000000000) + 1);
	const div = document.createElement("div");
	if(special == "1")
	{
		div.innerHTML = "<h3></h3><input><label> Salt</label><br><input><label> Pepper</label><br>";
	}else{
		div.innerHTML = "<h3></h3><input><label> Salt</label><br><input><label> Pepper</label><br>";
	}
	const element = document.getElementById("orderdiv").appendChild(div);
	console.log(element);
	element.classList.add("align-center");
	element.classList.add("order");
	const nodeList = element.children;
	let inputs = 0;
	let labels = 0;
	let options = 0;
	for (let i = 0; i < nodeList.length; i++) {
		if(nodeList[i].tagName == "INPUT")
		{
			const att = document.createAttribute("type");
			att.value = "checkbox";
			nodeList[i].setAttributeNode(att);
			inputs++;
			if(inputs == 1)
			{
				const att1 = document.createAttribute("id");
				att1.value = "salt" + rand.toString();
				nodeList[i].setAttributeNode(att1);
				const att2 = document.createAttribute("name");
				att2.value = "salt";
				nodeList[i].setAttributeNode(att2);
				const att3 = document.createAttribute("value");
				att3.value = "Salt";
				nodeList[i].setAttributeNode(att3);
			}
			if(inputs == 2)
			{
				const att1 = document.createAttribute("id");
				att1.value = "pepper" + rand.toString();
				nodeList[i].setAttributeNode(att1);
				const att2 = document.createAttribute("name");
				att2.value = "pepper";
				nodeList[i].setAttributeNode(att2);
				const att3 = document.createAttribute("value");
				att3.value = "Pepper";
				nodeList[i].setAttributeNode(att3);
			}
		}
		if(nodeList[i].tagName == "LABEL")
		{
			labels++;
			if(labels == 1)
			{
				const att1 = document.createAttribute("for");
				att1.value = "salt" + rand.toString();
				nodeList[i].setAttributeNode(att1);
			}
			if(labels == 2)
			{
				const att1 = document.createAttribute("for");
				att1.value = "pepper" + rand.toString();
				nodeList[i].setAttributeNode(att1);
			}
		}
		if(nodeList[i].tagName == "H3")
		{
			nodeList[i].innerHTML = item;
		}
	}
	ids.push(rand);
	stuff.push(item);
}
function Update()
{
	stuff.length = 0;
	ids.length = 0;
	document.getElementById("orderdiv").innerHTML = "";
	if(localStorage.getItem("Fried") == "x")
	{
		stuff.push("Fried Egg");
	}
	if(localStorage.getItem("Hard") == "x")
	{
		stuff.push("Hard Boiled Egg");
	}
	if(localStorage.getItem("Scrambled") == "x")
	{
		stuff.push("Scrambled Egg");
	}
	if(localStorage.getItem("Sunny") == "x")
	{
		stuff.push("Sunny Side Up");
	}
	if(localStorage.getItem("Pie") == "x")
	{
		stuff.push("Egg Pie");
	}
	if(localStorage.getItem("Omlette") == "x")
	{
		stuff.push("Egg Omlette");
	}
	stuff.forEach(Add);
	function Add(value, index, array) {
		if(value == "Egg Pie" || value == "Egg Omlette")
		{
			AddItem(value, "1");
		}else{
			AddItem(value, "0");
		}
	}
}
Update();
//document.querySelector('.messageCheckbox').checked;
function EncodeStuff()
{
	let encoded = "";
	stuff.forEach(enc);
	function enc(value, index, array) {
		if("Fried" == value)
		{
			encoded += "1"+document.querySelector("#salt"+ids[index]).checked+document.querySelector("#pepper"+ids[index]).checked+"/";
		}else if("Hard" == value)
		{
			encoded += "1"+document.querySelector("#salt"+ids[index]).checked+document.querySelector("#pepper"+ids[index]).checked+"/";
		}else if("Scrambled" == value)
		{
			encoded += "1"+document.querySelector("#salt"+ids[index]).checked+document.querySelector("#pepper"+ids[index]).checked+"/";
		}else if("Sunny" == value)
		{
			encoded += "1"+document.querySelector("#salt"+ids[index]).checked+document.querySelector("#pepper"+ids[index]).checked+"/";
		}else if("Pie" == value)
		{
			encoded += "1"+document.querySelector("#salt"+ids[index]).checked+document.querySelector("#pepper"+ids[index]).checked+"/";
		}else if("Omlette" == value)
		{
			encoded += "1"+document.querySelector("#salt"+ids[index]).checked+document.querySelector("#pepper"+ids[index]).checked+"/";
		}else{
			encoded += "000"+"/";
		}
	}
	return encoded;
}
function Clear()
{
	localStorage.setItem("Fried", "");
	localStorage.setItem("Hard", "");
	localStorage.setItem("Scrambled", "");
	localStorage.setItem("Sunny", "");
	localStorage.setItem("Pie", "");
	localStorage.setItem("Omlette", "");
	Update();
}