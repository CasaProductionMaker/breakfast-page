const stuff = [];
storage = window.localStorage;
function SendE()
{
	var emailAddress = "andre.yong@outlook.com";
	var subjectbody = "?subject=New Order&body=";
	var bodyorder = "Hi i am a god";
	document.getElementById("submitorder").setAttribute("href", "mailto:" + emailAddress + subjectbody + bodyorders); 
}
function AddItem(item)
{
	let rand = Math.floor((Math.random() * 100000000000000000000000) + 1);
	const div = document.createElement("div");
	div.innerHTML = "<h3></h3><input><label> Salt</label><br><input><label> Pepper</label>";
	const element = document.getElementById("orderdiv").appendChild(div);
	console.log(element);
	element.classList.add("align-center");
	element.classList.add("order");
	const nodeList = element.children;
	let inputs = 0;
	let labels = 0;
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
	localStorage.setItem("recent", item);
	stuff.push(item);
}
function Update()
{
	document.getElementById("orderdiv").innerHTML = "";
	stuff.forEach(Add);
	function Add(value, index, array) {
		AddItem(value);
	}
}