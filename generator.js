// JavaScript Document


var adjective = ["Strawberry", "Blueberries", "Peaches", "Cherries", "Oranges", "Apples", "Bannana", "Blackberry", "Mango", "Raspeberry", "Dragonfruit", "Pomegrante", "Cranberry", "Pumpkin", "Plum", "Acai", "Pink Guava", "Papaya", "Passion Fruit", "Kiwi", "Mulberries"]

var adjectiveTwo = ["Strawberry", "Blueberries", "Peaches", "Cherries", "Oranges", "Apples", "Bannana", "Blackberry", "Mango", "Raspeberry", "Dragonfruit", "Pomegrante", "Cranberry", "Pumpkin", "Plum", "Acai", "Pink Guava", "Papaya", "Passion Fruit", "Kiwi", "Mulberries"]

var object = ["Orange Blossom Honey", "Clover Honey", "Hot Honey", "Blueberry Honey", "Sourwood Honey", "Mesquite Honey", "Maple Blossom Honey", "Fireweed Honey", "Buckwheat Honey", "Wildflower Honey", "Meadowfoam Honey"]

var addittives = ["Vanilla Beans", "Cinnamon Stick", "Coffee Beans", "Ginger", "Clove", "Nutmeg", "Allspice"," ", "Roses", "Chocolate Nibbs", "Rose Hips", "Rhubard"]

var addittivesTwo = ["Vanilla Beans", "Cinnamon Stick", "Coffee Beans", "Ginger", "Clove", "Nutmeg", "Allspice"," ", "Roses", "Chocolate Nibbs", "Rose Hips", "Rhubard"]


var list;

function generator() {
	document.getElementById("recipe").innerHTML = adjective[Math.floor(Math.random() * adjective.length)] + "&#44; " + adjectiveTwo[Math.floor(Math.random() * adjectiveTwo.length)] + "&#44; " + object[Math.floor(Math.random() * object.length)] + "&#44; " + addittives[Math.floor(Math.random() * addittives.length)] + "&#44; " + addittivesTwo[Math.floor(Math.random() * addittivesTwo.length)];;;
}