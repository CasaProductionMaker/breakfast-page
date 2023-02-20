const stuff = [];
const ids = [];
storage = window.localStorage;
function SendE()
{
	name = document.getElementById("name").value;
	var emailAddress = "andre.yong@outlook.com?subject=New Order&body=" + stuff+" values:"+EncodeStuff()+name;
	document.getElementById("submitorder").setAttribute("href", "mailto:" + emailAddress); 
}
function AddItem(item, special, yog)
{
	let rand = Math.floor((Math.random() * 100000000000000000000000) + 1);
	const div = document.createElement("div");
	if(special == "1")
	{
		div.innerHTML = "<h3></h3><input><label> Salt</label><br><input><label> Pepper</label><br><input><label> Fried Egg</label><br><input><label> Hard Boiled Egg</label><br><input><label> Sunny Side Up</label><br><input><label> Scrambled Egg</label>";
	}else if(special == "0" && yog == "0"){
		div.innerHTML = "<h3></h3><input><label> Salt</label><br><input><label> Pepper</label>";
	}else if(yog == "1"){
		div.innerHTML = "<h3></h3><input><label> Cinnamon</label><br><input><label> Cereal on the side</label>";
	}
	const element = document.getElementById("orderdiv").appendChild(div);
	console.log(element);
	element.classList.add("align-center");
	element.classList.add("order");
	const att100 = document.createAttribute("id");
	att100.value = "order" + rand.toString();
	element.setAttributeNode(att100);
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
			if(yog == "0")
			{
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
			}else if(yog == "1"){
				if(inputs == 1)
				{
					const att1 = document.createAttribute("id");
					att1.value = "cin" + rand.toString();
					nodeList[i].setAttributeNode(att1);
					const att2 = document.createAttribute("name");
					att2.value = "cin";
					nodeList[i].setAttributeNode(att2);
					const att3 = document.createAttribute("value");
					att3.value = "Cinnamon";
					nodeList[i].setAttributeNode(att3);
				}
				if(inputs == 2)
				{
					const att1 = document.createAttribute("id");
					att1.value = "cer" + rand.toString();
					nodeList[i].setAttributeNode(att1);
					const att2 = document.createAttribute("name");
					att2.value = "cer";
					nodeList[i].setAttributeNode(att2);
					const att3 = document.createAttribute("value");
					att3.value = "Cereal";
					nodeList[i].setAttributeNode(att3);
				}
			}
			if(special == "1")
			{
				if(inputs == 3)
				{
					const att1 = document.createAttribute("id");
					att1.value = "fried" + rand.toString();
					nodeList[i].setAttributeNode(att1);
					const att2 = document.createAttribute("name");
					att2.value = "fried";
					nodeList[i].setAttributeNode(att2);
					const att3 = document.createAttribute("value");
					att3.value = "FriedEgg";
					nodeList[i].setAttributeNode(att3);
				}
				if(inputs == 4)
				{
					const att1 = document.createAttribute("id");
					att1.value = "hard" + rand.toString();
					nodeList[i].setAttributeNode(att1);
					const att2 = document.createAttribute("name");
					att2.value = "hard";
					nodeList[i].setAttributeNode(att2);
					const att3 = document.createAttribute("value");
					att3.value = "HardEgg";
					nodeList[i].setAttributeNode(att3);
				}
				if(inputs == 5)
				{
					const att1 = document.createAttribute("id");
					att1.value = "sunny" + rand.toString();
					nodeList[i].setAttributeNode(att1);
					const att2 = document.createAttribute("name");
					att2.value = "frisunnyed";
					nodeList[i].setAttributeNode(att2);
					const att3 = document.createAttribute("value");
					att3.value = "SunnyEgg";
					nodeList[i].setAttributeNode(att3);
				}
				if(inputs == 6)
				{
					const att1 = document.createAttribute("id");
					att1.value = "scrambled" + rand.toString();
					nodeList[i].setAttributeNode(att1);
					const att2 = document.createAttribute("name");
					att2.value = "scrambled";
					nodeList[i].setAttributeNode(att2);
					const att3 = document.createAttribute("value");
					att3.value = "ScrambledEgg";
					nodeList[i].setAttributeNode(att3);
				}
			}
		}
		if(nodeList[i].tagName == "LABEL")
		{
			labels++;
			if(yog == "0")
			{
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
			}else if(yog == "1"){
				if(labels == 1)
				{
					const att1 = document.createAttribute("for");
					att1.value = "cin" + rand.toString();
					nodeList[i].setAttributeNode(att1);
				}
				if(labels == 2)
				{
					const att1 = document.createAttribute("for");
					att1.value = "cer" + rand.toString();
					nodeList[i].setAttributeNode(att1);
				}
			}
			if(special == "1")
			{
				if(inputs == 3)
				{
					const att1 = document.createAttribute("for");
					att1.value = "fried" + rand.toString();
					nodeList[i].setAttributeNode(att1);
				}
				if(inputs == 4)
				{
					const att1 = document.createAttribute("for");
					att1.value = "hard" + rand.toString();
					nodeList[i].setAttributeNode(att1);
				}
				if(inputs == 5)
				{
					const att1 = document.createAttribute("for");
					att1.value = "sunny" + rand.toString();
					nodeList[i].setAttributeNode(att1);
				}
				if(inputs == 6)
				{
					const att1 = document.createAttribute("for");
					att1.value = "scrambled" + rand.toString();
					nodeList[i].setAttributeNode(att1);
				}
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
	if(localStorage.getItem("GGYog") == "x")
	{
		stuff.push("Greek Gods Yogurt");
	}
	if(localStorage.getItem("OKYog") == "x")
	{
		stuff.push("Organic Kefir Yogurt");
	}
	stuff.forEach(Add);
	function Add(value, index, array) {
		if(value == "Egg Pie" || value == "Egg Omlette")
		{
			AddItem(value, "1", "0");
		}else if(value == "Organic Kefir Yogurt" || value == "Greek Gods Yogurt"){
			AddItem(value, "0", "1");
		}else{
			AddItem(value, "0", "0");
		}
	}
}
Update();
//document.querySelector('.messageCheckbox').checked;
function EncodeStuff()
{
	let encoded = "";
	ids.forEach(enc);
	function enc(value, index, array) {
		const fc = document.getElementById("orderdiv").children[index];
		let children = fc.children;
		for (let i = 0; i < children.length; i++) {
			if(children[i].tagName == "INPUT")
			{
				encoded += children[i].checked + " ";
			}
		}
		encoded += "/";
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
	localStorage.setItem("GGYog", "");
	localStorage.setItem("OKYog", "");
	Update();
}