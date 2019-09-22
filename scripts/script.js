/*** SCRIPT DRAGONS AND TROUBLE ***/

"use strict"
				
		/*** CLASSES AND OBJECTS ***/	
		
		// Basic Character Class
		class Character {
			constructor(gender, race, level, role) {
				this.level = level;
				this.race = race;
				this.gender = gender;
				this.role = role;				
			}
		} 
		 
		// Basic Race Stat
		class RaceStat {
			//constructor(strength,dexterity,constitution,wisdom,intelligence,hitpoints,gold) {
			constructor(strength,dexterity,constitution,wisdom,hitpoints,gold) {
				this.strength = strength;
				this.dexterity = dexterity;
				this.constitution = constitution;
				this.wisdom = wisdom;
				//this.intelligence = intelligence;			
				this.hitpoints = hitpoints;							
				this.gold = gold;							
			}				
		}		
		
		class Weapons {
			constructor(longSword, shortSword, axe, spear, staff, bow) {
				this.longSword = longSword;
				this.shortSword = shortSword;
				this.axe = axe;
				this.spear = spear;
				this.staff = staff;
				this.bow = bow;				
			}
		}		
		
		// Calculate stat for each character
		class CalculateCharacterStat {
			//constructor(strBase,dexBase,conBase,wsdBase,intBase,hpBase) {								
			constructor(strBase,dexBase,conBase,wsdBase,hpBase,glBase) {								
				this.strF = strBase;		
				this.dexF = dexBase;		
				this.conF = conBase;		
				this.wsdF = wsdBase;		
				//this.intF = intBase;						
				this.hpF = hpBase;									
				this.glF = glBase;						
			}	
			calcCharData(race) {	
				this.raceF = race;	
				let strData = Math.floor(Math.random() * 10) + this.strF;
				let dexData = Math.floor(Math.random() * 10) + this.dexF;
				let conData = Math.floor(Math.random() * 10) + this.conF;
				let wsdData = Math.floor(Math.random() * 10) + this.wsdF;
				//let intData = Math.floor(Math.random() * 10) + this.intF;				
				let hpData = Math.floor(Math.random() * 10) + this.hpF;	
				let glData = this.glF;	
				// adjusted min stat based on race
				switch(true) {
					case this.raceF === "human" && wsdData < 7:
						wsdData = 7;
						break;
					/*case this.raceF === "elf" && intData < 8:
						intData = 8;
						break;					*/
					case this.raceF === "dwarf" && conData < 8:
						conData = 8;
						break;
					case this.raceF === "orc" && strData < 9:
						strData = 9;
						break;
					default:
						break;						
				}					
				//showData(strData,dexData,conData,wsdData,intData,hpData);				
				showData(strData,dexData,conData,wsdData,hpData,glData);				
			}			
		}
				
		// Character Name Object
		let characterName = {			
			_name: "",			
			set name(value) {    
				this._name = value;
			},			
			get name() {
				return this._name;
			}
		}
				
		// Set image for each race and gender
		class RaceImg {		
			constructor(src) {
				this.src = src;
				charImg.src = this.src;
			}			
		}	
		
		// Main store data	
		class SelectedCharacter {
			//constructor(name,src,strData,dexData,conData,wsdData,intData,hpData,selectedRace) {
			constructor(name,src,strData,dexData,conData,wsdData,hpData,glData,selectedRace) {
				this.name = name;		
				this.src = src;		
				this.strF = strData;		
				this.dexF = dexData;		
				this.conF = conData;		
				this.wsdF = wsdData;		
				//this.intF = intData;		
				this.hpF = hpData;		
				this.glF = glData;		
				this.selectedRace = selectedRace;
			}									
		}
		
		// OBJECTS: for each race		
		// We set the basic stat for each race		
		let human = new RaceStat(5,5,5,5,10,120);		
		let elf = new RaceStat(4,5,4,6,10,120);
		let dwarf = new RaceStat(6,3,6,5,11,100);
		let orc = new RaceStat(7,4,6,3,11,100);		
		let allRaces = [human,elf,dwarf,orc];
	
		
		/*** LOGIC ***/		
					
		// GLOBAL ANCHORS		
		const wrp = document.querySelector('.wrapper');
		const footer = document.querySelector('footer');
		/*** MENU ***/
		const menu = document.querySelector('.menu');
		const newG = document.getElementById('new-game'); 
		const loadG = document.getElementById('load-game'); 
		const leaveG = document.getElementById('leave-game'); 
		/*** CHARACTER PAGE ***/
		const btnBack = document.getElementById('back');
		//const displayStat = document.getElementById('display-stat');
		const btnCreate = document.getElementById('btn-create');
		const race = document.getElementById('race');		
		const nameCharacter = document.getElementById('name-character');		
		const imgFigure = document.querySelector('#char-img');		
		const charImg = document.querySelector('#char-img img');	
		const charImgFlex = document.querySelector('.flex-item-img')
		const faMagn = document.querySelector('.fa-expand');
		const displayData = document.querySelectorAll('.display-data');		
		//const displayDataHd = document.querySelectorAll('.display-data-hd');		
		const myCharacter = document.getElementById('my-character');		
		const characterText = document.getElementById('character-text');		
		/*** CHARACTER STAT ***/
		const genderData = document.getElementById('gender-data');
		const raceData = document.getElementById('race-data');
		const roleData = document.getElementById('role-data');
		const classData = document.getElementById('class-data');		
		const strD = document.getElementById('str');
		const dexD = document.getElementById('dex');
		const conD = document.getElementById('con');
		const wsdD = document.getElementById('wsd');
		//const intD = document.getElementById('int');
		const hpD = document.getElementById('hp');		
		const glD = document.getElementById('gl');		
		/*** CHARACTER CREATE/DEL/START BTN ***/
		const btnKeep = document.getElementById('btn-keep');
		const btnDelete = document.getElementById('btn-delete');
		const btnStart = document.querySelector('.btn-start');
		//const startButton = document.getElementById('start-button');
		
		
		// LISTENERS		
		newG.addEventListener('click', createCharacterState);
		btnBack.addEventListener('click', backToMenu);
		//loadG.addEventListener('click', getCharacterTest);
		loadG.addEventListener('click', getCharacter);
		leaveG.addEventListener('click', showCredits);
		btnCreate.addEventListener('click', getInput );			
		btnKeep.addEventListener('click', keepCharacter );
		btnDelete.addEventListener('click', clearStorage );		
		faMagn.addEventListener('click', showImg);
					
			
		// CALL BACKS			
		
		const mp3Sound = new Audio();

		// Menu choice - go to character page
		function createCharacterState() {
			// Sound effects		
			//mp3Sound.src = "mp3/fluteKushal_Parikh.mp3";
			//mp3Sound.play();			
			
			wrp.style.display = "block";
			menu.style.display = "none";
			myCharacter.style.display = "none";	
			btnBack.style.display = "inherit";
			footer.style.display = "none";
		}		
		// Return to menu - escape key
		document.onkeydown = function(evt) {
			evt = evt || window.event;
			var isEscape = false;
			if ("key" in evt) {
				isEscape = (evt.key === "Escape" || evt.key === "Esc");
			} else {
				isEscape = (evt.keyCode === 27);
			}
			if (isEscape) {
				wrp.style.display = "none";
				menu.style.display = "block";
				footer.style.display = "initial";					
			}
		};

		// Return to menu - btn
		function backToMenu() {			
			window.location.reload();
			footer.style.display = "initial";
		} 

		// Show Credits
		function showCredits() {
			alert(`This game has been created by Philip Ribera.
			All rights reserved: Includes; layout, design and written content.
			The images are provided by https://pixabay.com\nPixaby-license; https://pixabay.com/en/service/license/
			Sound effects are provided by http://soundbible.com\nPublic domain; http://soundbible.com/royalty-free-sounds-1.html#pdsounds`);
		}
		

		// Main function - get user input choices
		function getInput(ev) {
			ev.preventDefault();		
			myCharacter.style = "display: block";
			nameCharacter.focus();		
			nameCharacter.value = "";						
			btnDelete.style.display = "none";

			let selectedRace = race.options[race.selectedIndex].value;			
			let checkedGender = document.querySelector('input[name="gender"]:checked').value;
			let checkedLvl = "Level 1";
			let checkedRole = document.querySelector('input[name="role"]:checked').value;
			// We call calcStat() with selected race as argument
			switch(selectedRace) {			
				case "human":				
					calcStat(selectedRace)
					break;
				case "elf":
					calcStat(selectedRace)
					break;
				case "dwarf":					
					calcStat(selectedRace)
					break;
				case "orc":										
					calcStat(selectedRace)
					break;
				default:
					break;			
			}	
			let myChar = new Character(checkedGender, selectedRace, checkedLvl="Level 1", checkedRole);				
			setImage(checkedGender,selectedRace,checkedRole);
			showChar(myChar);	
		}	
					
		function calcStat(raceInput) {			
			let racesD = ['human','elf','dwarf','orc'];
			//let strMod,dexMod,conMod,wsdMod,intMod,hpMod = 0;					
			let strMod,dexMod,conMod,wsdMod,hpMod,glMod = 0;					
			
			for( let i = 0; i < allRaces.length; i++ ) {									
				if( raceInput === racesD[i] ) {	
					strMod = allRaces[i].strength;
					dexMod = allRaces[i].dexterity;
					conMod = allRaces[i].constitution;
					wsdMod = allRaces[i].wisdom;
					//intMod = allRaces[i].intelligence;											
					hpMod = allRaces[i].hitpoints;												
					glMod = allRaces[i].gold;																	
					break;
				}							
			}			
			//let baseData = new CalculateCharacterStat(strMod,dexMod,conMod,wsdMod,intMod,hpMod);	
			let baseData = new CalculateCharacterStat(strMod,dexMod,conMod,wsdMod,hpMod,glMod);	
			baseData.calcCharData(raceInput);
		}

					
		// Chose character image
		function setImage(gender,race,role) {			
			
			let src = "";
				
			switch(true) {			
				case gender === "male" && race==="human":					
					if( role === "warrior") {
						src = "malHumWar";					
					} else if(role === "mage") {
						src = "malHumWiz";					
					} else {
						src = "malHumThf";					
					}					
					break;				
				case gender === "female" && race === "human":
					if( role === "warrior") {
						src = "femHumWar";
					} else if( role === "mage" ) {
						src = "femHumWiz";
					} else {
						src = "femHumThf";
					}					
					break;					
				case gender ==="male" && race === "elf":
					if( role === "warrior") {
						src = "malElfWar";
					} else if( role === "mage" ) {
						src = "malElfWiz";
					} else {
						src = "malElfThf";
					}
					break;
				case gender ==="female" && race === "elf":
					if( role === "warrior") {
						src = "femElfWar";
					} else if( role === "mage" ) {
						src = "femElfWiz";
					} else {
						src = "femElfThf";
					}					
					break;
				case gender === "male" && race === "dwarf":
					if( role === "warrior") {
						src = "malDwfWar";
					} else if( role === "mage" ) {
						src = "malDwfWiz";
					} else {
						src = "malDwfThf";
					}					
					break;
				case gender === "female" && race === "dwarf":
					if( role === "warrior") {
						src = "femDwfWar";
					} else if( role === "mage" ) {
						src = "femDwfWiz";
					} else {
						src = "femDwfThf";
					}	
					break;
				case gender === "male" && race === "orc":
					if( role === "warrior") {
						src = "malOrcWar";
					} else if( role === "mage" ) {
						src = "malOrcWiz";
					} else {
						src = "malOrcThf";
					}	
					break;
				case gender === "female" && race === "orc":
					if( role === "warrior") {
						src = "femOrcWar";
					} else if( role === "mage" ) {
						src = "femOrcWiz";
					} else {
						src = "femOrcThf";
					}	
					break;
				default:
					break;			
			}
			setCharacterImage(src);
		}	
			
		// Set character image	
		function setCharacterImage(src) {
			let imgFirst = "images/";	
			let imgEnd = "_310.png";
			let srcUrl = imgFirst + src + imgEnd;
			new RaceImg(srcUrl);		
		}			
		// Show large img
		function showImg() {
			charImg.classList.toggle('lgImg');	
			imgFigure.classList.toggle('lgImg');			
			imgFigure.classList.toggle('flex-item-img');			
			displayData.forEach( (el) => {				
				el.classList.toggle('display-data-hd');
			});
			charImgFlex.classList.toggle('char-img-exp');			
		}
			
		// Set character name
		function setGetName() {
			let charName = document.getElementById('name-character').value;	
			characterName._name = charName;
		}
				
		// Display basic character features			
		function showChar(charData) {			
			let lvl = charData.level.toUpperCase();	
			let race = charData.race.toUpperCase();				
			let gender = charData.gender.toUpperCase();			
			let role = charData.role.toUpperCase();		
			// Display character text info				
			characterText.innerHTML = `<span> ${gender} ${race}, </span> 
			<span> ${lvl} ${role} </span>`;			
		}

		// Display character stat
		//function showData(strData,dexData,conData,wsdData,intData,hpData) {
		function showData(strData,dexData,conData,wsdData,hpData, glData) {

			// We set descriptive titles on different stat
			const strTitle = "Strength is important to cause damage i combat and for some special events";
			const dexTitle = "Dexterity is important to avoid being hit in combat and flee from danger";
			const conTitle = "Constitution is important to resist damage";
			const wsdTitle = "Wisdom is important for the ability to use and resist magic.";
			const hpTitle = "Hitpoints is your life force, if it drops to 0 you character is dead.";
			strD.setAttribute('title', strTitle);
			dexD.setAttribute('title', dexTitle);
			conD.setAttribute('title', conTitle);
			wsdD.setAttribute('title', wsdTitle);
			hpD.setAttribute('title', hpTitle);

			// We insert stat values
			strD.innerHTML = `Strength <span> ${strData} </span>`;
			dexD.innerHTML = `Dexterity <span> ${dexData} </span>`;
			conD.innerHTML = `Constitution <span> ${conData} </span>`;
			wsdD.innerHTML = `Wisdom <span> ${wsdData} </span>`;
			//intD.innerHTML = `Intelligence <span> ${intData} </span>`;			
			hpD.innerHTML = `Hitpoints <span> ${hpData} </span>`;						
			glD.innerHTML = `Gold <span> ${glData} </span>`;						
		}			
				
		// We save all data/localStorage when user press 'Create Character'
		function keepCharacter() {
			btnDelete.style.display = "initial";
			//btnStart.style.display = "inherit";
			btnStart.classList.toggle('btn-startHd');
			btnStart.style.display = "block";
			btnStart.id = "start-button";
			

			let selectedRace = race.options[race.selectedIndex].value;			
			let checkedGender = document.querySelector('input[name="gender"]:checked').value;
			let checkedLvl = "Level 1";
			let checkedRole = document.querySelector('input[name="role"]:checked').value;			
			let nameF = document.getElementById('name-character');						
			let nameDef = "";							
			let src = charImg.src; 
			let strF = document.getElementById('str').firstElementChild.innerText;
			let dexF = document.getElementById('dex').firstElementChild.innerText;
			let conF = document.getElementById('con').firstElementChild.innerText;
			let wsdF = document.getElementById('wsd').firstElementChild.innerText;
			//let intF = document.getElementById('int').firstElementChild.innerText;
			let hpF = document.getElementById('hp').firstElementChild.innerText;
			let glF = document.getElementById('gl').firstElementChild.innerText;
			
			// Default parameters for character name 
			if(nameF.value === "") {				
				nameDef = ( checkedGender === "male" ) ? "Zlatan" : "Ripley";				
				nameF.value = nameDef;
			} else {
				nameDef = nameF.value;
			}	
			
			// We save all character data
			let characterData = {
				gender: checkedGender,
				race: selectedRace,
				level: checkedLvl,				
				role: checkedRole,
				name: nameDef,
				src: src					
			}
			let characterStat = {
				str: strF,
				dex: dexF,
				con: conF,
				wsd: wsdF,
				//_int: intF,
				hp: hpF,		
				gl: glF
			}
			let characterInfo = {				
				gender: checkedGender,
				race: selectedRace,
				level: checkedLvl,				
				role: checkedRole
			}
			let characterAllData = {
				gender: checkedGender,
				race: selectedRace,
				level: checkedLvl,				
				role: checkedRole,
				name: nameDef,
				src: src,	
				dex: dexF,
				con: conF,
				wsd: wsdF,
				//_int: intF,
				hp: hpF,		
				gl: glF				
			}
			
			// We need logic to add several characters			
			let nameId = nameDef;			
			
			localStorage.setItem(nameId, JSON.stringify(characterData) ); 
			localStorage.setItem('characterData', JSON.stringify(characterData) ); 
			localStorage.setItem('characterStat', JSON.stringify(characterStat) ); 
			localStorage.setItem('characterInfo', JSON.stringify(characterInfo) ); 
			localStorage.setItem('characterAllData', JSON.stringify(characterAllData) ); 
		}	
		

		// Get storage keys and display info if key is chosen
		function getCharacterTest() {
			btnDelete.style.display = "initial";
			myCharacter.style.display = "block";
			wrp.style.display = "block";
			menu.style.display = "none";
			
			let localStat, localName, localData, localInfo, localAll;
			let dynVar = "Ripley";
			
			localName = JSON.parse(localStorage.getItem( dynVar ));
			localData = JSON.parse(localStorage.getItem('characterData'));
			localStat = JSON.parse(localStorage.getItem('characterStat'));
			localInfo = JSON.parse(localStorage.getItem('characterInfo'));
			localAll = JSON.parse(localStorage.getItem('characterAllData'));
						
			// Get character name and display it						
			let key;
			for (var i = 0; i < localStorage.length; i++) {
				key = localStorage.key(i);
				if(key === dynVar) {
					console.log( localName );
					// localSt.getItem(key);
				}
			}	
		}
								
		
		// Get character when load game
		function getCharacter() {
			btnDelete.style.display = "initial";
			myCharacter.style.display = "inline-block";
			wrp.style.display = "block";
			menu.style.display = "none";
			btnBack.style.display = "inherit";
			
			let localData;
			let localStat;
			let localInfo;

			// We need to add logic to get specifik character
			// we can use .map() to get the id/stat we need 
			localData = JSON.parse(localStorage.getItem('characterData'));
			localStat = JSON.parse(localStorage.getItem('characterStat'));
			localInfo = JSON.parse(localStorage.getItem('characterInfo'));

			// Get character name and display it
			let getName = localData.name;
			nameCharacter.value = getName;

			// Get and display character image
			let srcUrl = localData.src;
			new RaceImg(srcUrl)

			// get and display character info
			let charInfo = Object.values(localInfo);
			let myChar = new Character(...charInfo);
			showChar(myChar);

			// get and display character stat
			let arrStat = Object.values(localStat);
			parseInt(arrStat);						
			showData(...arrStat);
		}
		
		// Clear the local storage 			
		function clearStorage() {
			nameCharacter.value = "";
			localStorage.clear();
		}		
		
		
		