const intro = `
      <div class="story-day"><h2>Chapter 1, Dawn</h2></div>
        <h2 class="episode-title">At The Campsite</h2>
		    <br />
        <p>
		<img src="images/landscape/fire_202.png" id="camp-fire" class="story-img-r" alt="firepit">
          You wake up at your campsite. For a short while you feel confused as
          not knowing where you are. Soon you remember... You are traveling to
          Smalltown, a village to the far north. You feel somewhat
          worried and excited at the same time, knowing this is the first time
          you have been this far from your own village.		  
        </p>
        <br />  
        <p>                    
          The reason for you being here in the first place is to deliver a
          mysterious package to your old uncle who lives in smalltown.
          As you really needed an excuse to leave your village...            
          The package was given to you by your mother who refused to say anything about it's content. 
		  Still you gave her your word to deliver the package no matter what. 
        </p>
        <br>
        <p>You gather your things and proceed with your journey.</p>
        <br>
        <span class="story-more">Click to continue...</span> <br>   
        `;

const roadJunction = `
        <div class="story-day"><h2>Chapter 1, Noon</h2></div>
          <h2 class="episode-title">The Road Junction</h2>
		      <br /> 
        <p>
          After a few hours you arrive to a road junction, at the side of the
          road lies a sign. The sign is severly worn-out but you can still
          decipher the word 'To Smalltown'. The problem is that there is no way
          to know which road the sign once pointed to. At first you curse the
          plight you find yourself in, but soon enough you come to your senses.
          You have not come this far just to give up!
        </p>
        <br />
        <h4>Do you go North or East?</h4>
        <br />

        <ul class="road-fork">
          <br />
          <h3>Decision:</h3>
          <br />
          <li id="road-north" class="dec-item">North</li>
          <li id="road-east" class="dec-item">East</li>
        </ul>
        <br />
      `;

/*** NORTH ROAD ***/

const northRoad = `
        <div class="story-day"><h2>Chapter 1, Noon</h2></div>
          <h2 class="episode-title">The Corpse</h2>
        <br> 
        <p>
			<img class="story-img" src="images/landscape/roadForestNorth_850.jpg"> 
          You decide to go north. The road goes through a varied landscape of
          forests and open fields. While enjoying the scenery you see something lying on the road. 
          Getting closer you see it's the corpse of a man. From his clothes you can tell he was one of the kings tax collectors. 
          The fresh blood dripping from his neck also reveals that whatever happened to him it must have been recent!                    
        </p>
        <br />
        <p>
          Worried about the possibility of an assassin still lurking around your
          instincts tells you to leave this place. But then you think about the
          prospect of finding something valuable. Life is hard and ignoring an
          opportunity like this would be foolish... And whatever this poor
          fellow might be carrying he will for sure not need it any more you
          figure.
        </p><br>

        <ul class="road-corpse">
          <br />
          <h3>Decision:</h3>
          <br />
          <li id="road-loot" class="dec-item">Loot the corpse</li>
          <li id="road-leave" class="dec-item">Leave the place</li>
        </ul>
        <br /><br />
        <div id="show-loot" class="items"></div>        
      `;

const northWolf = `
      <div class="story-day"><h2>Chapter 1, Noon</h2></div>
        <h2 class="episode-title">An Assassin</h2>
      <br> 
        <p>
          <img class="story-img-r" src="images/paw_190.png"> 
          Happy about your find all worries about what killed this man
          seems long gone. But suddenly you are taken back to reality by a sound behind you. 
          You turn around just in time to see a dire wolf charging you!  
          In no time the wolf jumps you trying to sink his teeth into your throat...
        </p><br>
        <p>          
          You manage to raise your arms just in time to protect your self and get away with a few bruises.
          The wolf has not giving up tough and starts to circle you preparing for another attack. 
          He is agile and powerful, he has already brought down one prey and he has no intention to let you go either. 
          This will be a fight of life and death...
        </p><br>
        <span class="story-more">Click to continue...</span> <br>   
      `;

const northWolfBattle = `
      <div class="story-day"><h2>Chapter 1, Noon</h2></div>
      <h2 class="episode-title">Beast Killer</h2>
      <br/> 

      <article class="wolf-victory1">
      <p>The fight goes on for a good while, with the wolf patiently circling you making probing attacks. 
      In the midst of battle you lose your concentration for just a moment and the wolf is up on you on the drop an eye...      
      You fall to the ground with the wolf above you... 
      While desperatly trying to avoid his teeths you manage to thrust your knife deep in to the underbelly of the beast.       
      The beast gives away a whimpering noise and soon he lies dead by your side. 
      </p><br />
      <span id="get-lostHp" class="text-more">More...</span> <br>   
      </article>
   
      <!-- If hp above zero -->
      <article class="wolf-victory-survive wolf-victory-survive-hd">
      
      <div class="show-lostHp bad-info">
      <i class="fas fa-thumbs-down"></i>
      </div><br />

      <p>
      You are covered in blood, most of it from the wolf ...but yours as well as you have not escaped unharmed either.      
      Happy to be alive you curse your own greed that almost cost you your life! 
      Still, you are alive and a lesson learned...
      </p><br>                  
      <span class="story-more">Click to continue...</span> <br>   
      </article>


      <!-- If hp reaches zero -->
      <article class="wolf-victory-pyrrhic wolf-victory-pyrrhic-hd">
        <br>

      <div class="show-lostHp bad-info">
      <i class="fas fa-thumbs-down"></i>
      </div><br />

        <p>
          The beast lies dead by your side but your joy is short lived as you get aware of the price you have paid.
          You are bleeding from several wounds and there is no help in sight.
          As your life force slowly leaves your body you contemplate about how stupid you were to let greed cloud your judgement...          
        </p><br>
        <span class="game-over">Click to continue...</span><br>   
      </article><br>       
`;

const northWolfDefeat = `
      <div class="story-day"><h2>Chapter 1, Noon</h2></div>
      <h2 class="episode-title">The Price of Greed</h2>
      <br> 
      <p>Despite your best efforts the beast is to powerful and avoids your attacks with ease while injuring you in return.
      Wounded and tired you are getting desperate. 
      The beast circles you patiently not leaving any escape rout, it's almost as it can smell your fear...
      When weakened enough the wolf makes it's final attack...
      In the end you are an easy prey and the last thing you feel are a set of sharp teeths tearing your throat open. 
      </p><br>      
      <span class="game-over">Click to continue...</span> <br>   
`;

const northWitch = `
        <div class="story-day"><h2>Chapter 1, Afternoon</h2></div>
          <h2 class="episode-title">A Good Deed</h2>
        <br>         
        <p>
          You wisely enough leave the corpse in a hurry and continue your
          journey along the northern road. After a while you meet an old women
          that struggles with a heavy load on her back. She hardly seems to
          notice you when she passes by your side with her heavy burden.
        </p>
        <br />

        <ul class="road-troll">
          <br />
          <h3>Decision:</h3>
          <br />
          <li id="road-help" class="dec-item">Offer to help</li>
          <li id="road-continue" class="dec-item">Continue journey</li>
        </ul>
    `;

const eastNorthWitch = `
        <div class="story-day"><h2>Chapter 1, Afternoon</h2></div>
          <h2 class="episode-title">A Good Deed</h2>
        <br>         
        <p>
          Happy to be on the main road again you are optimistic about reaching Smalltown before nighfall.
          You have almost forgotten about the terrifying encounter with the hungry beast when you meet an old women
          that struggles with a heavy load on her back. You look at her with some pity as she passes by your side without even giving you a glancing look.
        </p>
        <br />

        <ul class="road-troll">
          <br />
          <h3>Decision:</h3>
          <br />
          <li id="road-help" class="dec-item">Offer to help</li>
          <li id="road-continue" class="dec-item">Continue journey</li>
        </ul>
    `;

const northHelpWitch = `
          <div class="story-day"><h2>Chapter 1, Afternoon</h2></div>
            <h2 class="episode-title">The Witch</h2>
            <br>
          <p>
          <img class="story-img-r" src="images/witch_190.png"
          />
          You offer the old women a hand. At first she seems surprised but then graciously accepts. 
          You grab the bag without much effort and carry it to her house a short walk away. 
          Getting inside you are met by a sweet and repugnant smell... You know instantly it's the smell of death!
          You then notice that the bag you been carrying is full of bones, some apperantly human. 
          Frozen in fear you are taken back to reality by the old witch who thanks you for the 
          good deed and gifts you a small bottle containing some red liquid. 
          She then looks at you and say; By custom I would ask you to stay, but since you been so
          kind and helpful, I will ask you to leave! 
          You happily oblige to her request and leave the house with your flesh still attached to your
          bones.
        </p>
        <br><br>
        <span class="items">
        You have aquired an unidentified potion <i class="fas fa-thumbs-up"></i>
        </span>
        <br><br>
        <span class="story-more">Click to continue...</span> <br />
        <p style="display: none;" id="continue-journey">
          You decide to continue your journey. There is no time for good deeds
          and you need to reach Smalltown as quickly as possible.
        </p>      
      `;

const northFrog = `
		<div class="story-day"><h2>Chapter 1, Noon</h2></div>
        <h2 class="episode-title">Quack Quack...</h2>
      <br>      
    <p>You offer the old women a hand. At first she seems surprised but then graciously accepts. 
    You grab the bag but to your surprise it's heavier than you anticipated! 
    Despite repeated efforts you can't carry it for more then a few meters and finally you are forced to accept defeat. 
		It's clear you lack the necessary strength to carry it!  
		</p><br>
		<p>
    Witnessing your sad performance fills the old women with contempt... 
    She points her bony fingers at you while uttering some incomprehensive sentences.    
    <img class="story-img-r" src="images/landscape/frog_232.png">
    In the very next moment she grows to the size of a giant, 
    well... that's what you think until you notice you have been transformed to a frog. 
    You try desperately to communicate but the only sound coming out from your mouth is; quack quack... 
		</p><br>
		<p>
    The old women, seemingly uninterested by your predicament grabs her bag and continues down the road.         
    Seeing the only hope of reversing your misfortunes leave propels you to act. 
    Using your long back legs you jump after her. 
    Sadly enough your misfortunes are not over as a cat appears from nowhere and grabs you with its claws! 
    The last thing you feel are the sharp teeths of the beast crushing your soft skull!
		</p><br><br>
        <!--<span class="story-more">Click to continue...</span> <br />-->
        <span class="game-over">Click to continue...</span> <br />
    </article>
   `;

const northWitchSave = `     
    <article id="result2"> 
    <div class="story-day"><h2>Chapter 1, Noon</h2></div>
        <h2 class="episode-title">Weak But Sage</h2>
    <br>     
    <p>
    A strange feeling rushes through your body but the effect soon wanes. 
    The witch looks at you in disbelief...   
    She seems confused by the fact that her magic don't seem to have any effect on you! 
    <img class="story-img-r" src="images/hand_320.png">
    </p><br>    
    <p>
    The now furious witch picks up a stone and throws it at you hitting you on the back...    
    Somewhat satisfied she grabs her bag and continue down the road. 
    While looking on as the old witch disappears from sight you keep wondering what's in her bag... 
    </p><br>
    <p>
    There are lots of strange things happening in this world you figure... 
    before grabbing your things and continue your walk in the opposite direction.
    </p><br><br>
    <span class="story-more">Click to continue...</span> <br />
    </article>
  `;

/*** EAST ROAD ***/

const eastRoad = `
      <div class="story-day"><h2>Chapter 1, Noon</h2></div>
        <h2 class="episode-title">Wrong turn</h2>
      <br> 
      <p>
        <img class="story-img" src="images/landscape/roadForest_872.jpg"> 
        You decide to go east. After a while the road starts to get more and
        more narrow and it doesn't take long before the tree branches starts to get in your way. 
        For sure a road to Smalltown would be more used then this... 
        The feeling that you took the wrong turn gets stronger with every step and soon enough you start to think about going back.
      </p><br>
      <span id="story-troll" class="story-more">Click to continue...</span> <br />
`;

const eastRoadTroll = `
    <div class="story-day"><h2>Chapter 1, Noon</h2></div>
        <h2 class="episode-title">Invitation to dinner</h2>
      <br><br>             
        <p>
        <img id="east-troll" class="story-img-r" src="./images/eastTroll_352.png" alt="Armed troll" />
          Your thoughts are interrupted by the roar of a huge troll blocking your way!   
          </p><br>          
          <p>
          The troll grins as he points at you and then to his mouth. It
          seems the beast is inviting you to dinner, but not as guest but as
          the <i>dinner</i>! Trolls usually prefers gnomes or dwarfs but when hungry they are not picky and anything that moves can be on the menu... 
          </p><br>          
          <p>
          It doesn't take long before he raises his axe and charge you!
          </p><br>

        <ul class="road-troll">
          <br />
          <h3>Decision:</h3>
          <br />
          <li id="road-flee" class="dec-item">Flee</li>
          <li id="road-fightTroll" class="dec-item">Fight the troll</li>
        </ul><br>      
    `;

const eastFightTroll = `
      <div class="story-day"><h2>Chapter 1, Afternoon</h2></div>
        <h2 class="episode-title">A Hero Is Born</h2>
      <br> 

      <article id="road-fightTroll">
      <p>The fight is brutal with the beast repeatedly attacking you with his axe!
      You manage to skillfully avoid his attacks while looking for an opportunity to respond in kind.            
      After a while you notice that the beast it getting tired, as he gasps for air and the attacks get less frequent.
      </p><br />
      <p>
      Tired and frustrated the beast makes a fatal mistake when slashing his axe at you with full force, missing completely, and for a short moment losing his balance.
      This is the moment you been waiting for... with a quick struck you manage to severly injure the beast. 
      The troll falls on his knees with a deep wound to the chest. 
      You look on as the beast desperately tries to get on his feet, but no no avail...
      </p><br>
      <!--<span id="get-lostHpT" class="show-troll-hp">More...</span> <br />-->
      <span class="show-troll-hp">More...</span> <br />
      </article>

      <!-- If hp above zero -->      
      <article class="troll-victory-survive troll-victory-survive-hd">    
      <br /> 
      <div class="troll-lostHp bad-info">
        <i class="fas fa-thumbs-down"></i>
      </div><br />

      <img id="blood" class="story-img-r" src="./images/blood_220.png" alt="blood splatter" />
      <p>
      His eyes watches you with fear as he moans in agony.
      To you it almost sounds like he is asking you to end his misery... 
      You grab your knife and with a powerfull thrust you pierce the heart of the beast! 
      Soon enough the troll lies dead by your feet in a massive pool of blood.       
	    </p>
      <span class="story-more">Click to continue...</span> <br />
      </article>
      
      <!.. if hp 0 or lower -->
      <article class="troll-victory-pyrrhic troll-victory-pyrrhic-hd">
      <p>
      The beast lies dead by your feet but your joy is short lived as you get aware of the price you have paid.
      You are bleeding from several wounds and there is no help in sight.
      As your life force slowly leaves your body you wonder what's inside the box you carrying...          
      </p><br>
      <span class="game-over">Click to continue...</span><br>
      </article>  
      `;

const eastFightTrollDefeat = `
      <div class="story-day"><h2>Chapter 1, Afternoon</h2></div>
        <h2 class="episode-title">Served for Dinner</h2>
      <br> 
      <p id=""road-fightTroll>The fight is brutal with the beast repeatedly attacking you with his axe! 
      As the battle comence you have no problem keeping him at bay by simply avoiding his attacks.           
      But the beast is relentless in his attacks and the longer it goes on the more exhausted you get.
      </p><br>
      <p> 
      In the end you are so tired that the beast knocks you to the ground by simply running you down.       
      While lying on the ground the troll is quick to secure his prey by holding you down with his sheer weight.       
      Lying helpless on the ground you gasp for air as the ribs gives way to the weight of the beast.      
      The very content beast grins while smelling you... He then raises his axe and with a massive stroke splits your head in two...  	  
      </p><br>
      <span class="game-over">Click to continue...</span> <br />
`;

// Loot troll
const lootTroll = `
  <div class="story-day"><h2>Chapter 1, Afternoon</h2></div>
        <h2 class="episode-title">Honour Is All</h2>
  <br> 
  <p>Looking at the dead troll you don't lose any time searching for anything of value.   
  Searching the corpse only reveals some smelly underwear and a bag with some rotten meat. 
  You can't say for sure but you suspect it's elf flesh."; 
  The massive axe is to heavy to carry around so you don't bother with it. 
  Some troll are known to gather lots of gold but this one seems to have been more interested in food then valuables... 
  </p><br>
  
  <p>
  Tough, having defeated the troll fills you with confidence and so you decide to continue along the same road, ready for whatever challenge can present it self ahead! 
  Soon enough you are rewarded for your unyielding attitude when the narrow road reconnects with what you only can assume is the main road to Smalltown.
  </p><br>
  
  <span class="story-more">Click to continue...</span> <br />
`;

const roadFleeTroll = `
	<div class="story-day"><h2>Chapter 1, Afternoon</h2></div>
        <h2 id="troll-flee-title" class="episode-title">Cowards live longer</h2>
      <br> 
    <p>
    You have no intention to fight and decide to make a run for it! 
    And you run as you never done before... The troll gives away terrifying screams while slashing his axe at you with full force.     
    The chase drag on for a good while with the hungry beast unwilling to let his dinner get away!
    </p><br>
    <span id="flee-troll" class="text-more">More...</span><br />    
    `;

// Add same page add extensions
const roadFleeTrollSuccess = `
    <p> 
    But you soon notice the creature struggling to keep up... and after a while you can neither see or hear him.      
	  You keep running tough, strongly motivated by fear of becoming consumed by a hungry troll.      
    It's not until you reach the road junction, from where you took the wrong turn, that you finally permit yourself to rest. 
    You fall to the ground exhausted but relieved, having escaped the hungry beast. 
	</p><br>
	<p>
	After a short break you feel refreshed enough to continue your travel. But this time along the north road.
    </p><br>       		
    <span class="story-more">Click to continue...</span> <br />
  `;

const roadFleeTrollFail = `	
	<p>
  At first it seems you manage to keep a safe distance to the beast. 
  But the troll is persistent and it doesn't take long before he starts to catch up.   
  With panic mounting you lose your concentration for a moment and trip on a small rock lying on the road. 
  Lying on the ground you see a massive axe cutting the air... 
  ...there is an instant of immense pain before every part of your body goes numb.  
  </p><br>
  <p>  
  With the axe deeply buried in your chest you can only watch as the troll tears of your right arm.
  The beast then rips of the cloth and starts chewing on it.  
  It's true you figure, trolls like there food fresh..."  
	</p><br><br>
    <span class="game-over">Click to continue...</span> <br />   
	`;

// SMALLTOWN
const smalltownGate = `
      <div class="story-day"><h2>Chapter 1, Dusk</h2></div>
        <h2 class="episode-title">The Gate</h2>
        <br>
        <article id="part1">
          <p>
            After a non-eventful walk of a few hours you finally reach
            Smalltown. The town is surrounded by a wooden pallisade and the
            only way in is through a closed gate. At the side of the gate you
            see a small bell that you use to get the attention of whoever might
            be on the other side. Soon you hear a voice from the inside; Who is
            disturbing the peace at this late hour? You present your self and
            explains your business. There is a moment of silence before you hear
            the voice again, "I'm very thirsty having to guard the gate at this
            late hour... But perhaps we can help each other out?".
          </p>
          <br/> 
          <p>
			      You need to enter and I need something to remedy my thirst.
			      This is getting complicated... Well... I have some water...! The
            voice - now sounding very irritated; Water is of no use to me! And
            if you don't intend to spend the night on the outside with trolls
            and who knows what, you better find something more useful to offer!
          </p>
          <br />
          <span id="gate1" class="gate-more">More...</span><br />
        </article>

        <article id="part2">
          <p>
            You no longer have any doubts about what the 'guard' really wants
            and since you have no intention to spend another night in the
            wilderness you reach for a bottle in your bag. The bottle consist of
            prime quality 'Dragonfire', the strongest kind of liqor around and
            excellent as anticeptic when healing injurys. I have some
            'Dragonfire'... You hardly finish the sentence when the gate opens and you are faced
            by an old gnome in a funny hat, armed with nothing more than a
            violin.
          </p>
          <br />
          <span id="gate2" class="gate-more">More...</span><br />
        </article>

        <article id="part3">
          <p>
            <img class="story-img-l gnome-img" src="images/gnomeBard2_300.png" />
            Seeing the gnome it becomes clear to you he is no guard. From the
            look of it he just happened to pass by the gate when he heard the
            bell you figure. With his eyes fixated at the bottle the gnome ask you for the Dragonfire in exchange for entrance.  
			      The gnome doesn't seem capable of stopping anyone from going anywhere
            but beating up a gnome, even a fool, would probably be a bad way to
            begin your stay here. Besides, a deal is a deal... You give him the
            bottle. The gnome, losing no time, grabs it and
            starts to empty it as there is no tomorrow! You look on amazed, as he manages to consume all its content in a few minutes.
            From your experience a bottle of 'Dragonfire' is enough to keep a fully grown orc busy for a whole evening... 
          </p>
          <br /><br />
          <span id="gate3" class="gate-more">More...</span><br />
        </article>

        <article id="part4">
          <p>
            After emptying the bottle the gnome stares in to the open air for a
            moment and then comence to sing at full voice accompanied by some ill tempered
            strokes at the violin!
         
            From what you can hear the song depicts a randy story involving an
            elf and a dwarf in a brothel... Gnomes might be small but they are
            known to have loud pitched voices. What can explain that
            many make there living as bards. But hearing this gnome makes it
            clear that there is no talent to be found in this case!
          </p>
          <br />
          <span id="gate4" class="gate-more">More...</span><br />
        </article>

        <article id="part5">
          <p>
            <img class="story-img-r gnome-img" src="images/gnomeBard_300.png" /> It
            doesn't take long before your sentiments are shared by the
            inhabitants of the town as you hear windows open all around you.
            Before even having the opportunity to get away from the crescendo
            you are hit by a bag of garbage thrown by an angry dwarf
            women. Apparently she thinks you are as guilty as the gnome of
            disturbing her sleep. The gnome, hit repeatedly by all kinds of
            projectiles, accompanied by derogatory remarks, continues
            his performance bravely and unshaken. While wondering about the
            amount of garbage the inhabitants of the town seem to have the
            gnomes performance is finally brought to an end by a particularly
            well placed projectile hitting him in the head. The projectile in
            combination with the 'Dragonfire' take there toll as the gnome falls
            to the ground and rapidly falls to sleep snoring loudly. With
            that all goes back to normal, and as quickly as it all began it's over!
          </p>
          <br /><br>
            <span id="gate5" class="gate-more story-more">Click to continue...</span> <br />
    `;

const arrivedSmalltown = `
    <div class="story-day"><h2>Chapter 1, Night</h2></div>
      <h2 class="episode-title">Smalltown</h2>
      <br>
        <p>
        Despite the rather unlucky events at the gate you are happy about having reached Smalltown. 
        Now you just have to find your uncle:s house! According
        to your mother he lives by the main square where a strange wooden sculpture can be seen. It shouldn't be hard to find you figure.
        After all Smalltown is, well... a smallish town. You direct yourself to
        what you assume is the center of the village and after a few minutes
        you reach a square with a strange looking sculpture surrounded by some
        houses that looks larger than it's contemporarys in the village.
      </p>
      <br />
      <span class="story-more">More...</span> <br />

      <div id="show-square">
      <img class="story-img"
        id="img-smalltown"
        src="images/landscape/smalltown2_850.jpg"
        alt="houses in Smalltown"
      />

      <p>
        Your uncles house is to be found at the southern side of the square
        and that's the direction you stear your steps. Soon you are standing
        in front of a two level building with pointed roof. On the door you
        see a sign with the words Dr. Baltazar. Finally! You have reached your
        uncles house!
      </p>
      <br>
      <p>
        Despite the late hour and the fact you smell of old garbage you don't
        hesitate to knock on the door! It doesn't take long before you hear footsteps and through the window you see a light being lit. 
        In the next moment the door opens and in front of you stands an old man looking at you curiously. 
        And who might you be? He asks.
      </p><br><br>      
      <h2 class="episode-title">End Chapter 1<h2>
      </div> 
  `;

  
// ANCHORS
const episodeContainer = document.getElementById("episode-container");
const bd = document.querySelector("body");
//const wrp = document.querySelector(".wrapper");
const storyWrapper = document.querySelector(".story-wrapper");
const btnKeepChar = document.getElementById("btn-keep");

// SOUND
//const mp3Sound = new Audio();

// LISTENERS
//btnKeepChar.addEventListener('click', startAdventure);
//btnKeepChar.addEventListener('click', getStat);
btnStart.addEventListener("click", startAdventure);


// CALLBACKS

// Render method to display story parts
let eC = episodeContainer;
let render = (template, b = eC) => {
  if (!b) return;
  b.innerHTML = template;
};


function startAdventure() {
  mp3Sound.pause();  
  //mp3Sound.src = "mp3/fireplace.mp3";
  //mp3Sound.play();

  wrp.style.display = "none";
  btnStart.style.display = "none";
  eC.style.display = "block";

  render(intro);

  let clickMore = document.querySelector(".story-more");
  clickMore.addEventListener("click", showText);
  displayCharStat();
}

function getAllStat() {
  let localStat;
  localStat = JSON.parse(localStorage.getItem("characterStat"));
  let arrStat = Object.values(localStat);

  let strStat = `Str <span>${arrStat[0]}</span> `;
  let dexStat = `Dex <span>${arrStat[1]}</span> `;
  let conStat = `Con <span>${arrStat[2]}</span> `;
  let wsdStat = `Wsd <span>${arrStat[3]}</span> `;
  //intStat = `Int <span>${arrStat[4]}</span> `;
  let hpStat = `Hp <span>${arrStat[4]}</span> `;
  let glStat = `Gold <span>${arrStat[5]}</span> `;

  //let newArr = [strStat, dexStat, conStat, wsdStat, intStat, hpStat];
  let newArr = [strStat, dexStat, conStat, wsdStat, hpStat, glStat];
  return newArr;
}

function getAllStatOnchange() {
  let localStat;
  localStat = JSON.parse(localStorage.getItem("characterStat"));
  let arrStat = Object.values(localStat);
  displayCharStat(arrStat);
}

function displayCharStat(para) {
  if (!para) {
    let statContainer = document.querySelector(".stat-container-hd");
    statContainer.classList.toggle("stat-container-hd");
    let allStat = getAllStat();
    let allListItems = document.querySelectorAll(".stat-li");

    for (let i = 0; i < allListItems.length; i++) {
      allListItems[i].innerHTML = allStat[i];
    }
  } else if (para) {
    let index = para.length-1;
    let allListItems = document.querySelectorAll(".stat-li");
    allListItems[index].innerHTML = `Hp <span>${para[index]}</span> `;
  }
}

function showCharacterStat() {
  let statContainer = document.querySelector(".stat-container-hd");
  statContainer.classList.toggle("stat-container-hd");
}

function showText() {
  mp3Sound.pause();
  render(roadJunction);
  // Choises
  const roadNorth = document.querySelector("#road-north");
  const roadEast = document.querySelector("#road-east");
  roadNorth.addEventListener("click", goNorth);
  roadEast.addEventListener("click", goEast);
}

function goNorth() {
  mp3Sound.src = "mp3/sunnyRoad.mp3";
  mp3Sound.play(); 

  render(northRoad);
  // Choices
  const lootCorpse = document.getElementById("road-loot");
  const leaveCorpse = document.getElementById("road-leave");
  lootCorpse.addEventListener("click", showLoot);
  leaveCorpse.addEventListener("click", roadLeave);
}

function showLoot() {
  let roadCorpse = document.querySelector(".road-corpse");
  roadCorpse.style.display = "none";
  let lootSpan = document.getElementById("show-loot");
  let loot = Math.floor(Math.random() * 100);
  lootSpan.innerHTML = `<br />
                        You find: 
                        <span>${loot} Gold</span><br />
                        <span class="story-more story-more-loot">Click to continue...</span> <br /><br />
                        `;
  let displayLoot = lootSpan.getElementsByTagName("span")[0];
  displayLoot.style.color = "gold";
  lootSpan.style.textAlign = "center";
  let clickMore = document.querySelector(".story-more-loot");
  clickMore.addEventListener("click", wolfText);
  setGold(loot);
}

// Set amount gold in localstorage and display data
function setGold(loot) {
  let localStat;
  localStat = JSON.parse(localStorage.getItem("characterStat"));
  let arrStat = Object.values(localStat);

  let baseGold = arrStat[5];
  let newBaseGold = parseInt(baseGold) + parseInt(loot);
  // We set the local storage gl to new amount of gold
  localStat["gl"] = newBaseGold;
  localStorage.setItem("characterStat", JSON.stringify(localStat));
  // We change the displayed stat  
  getAllStatOnchange();
}

function wolfText() {
  render(northWolf);
  let clickMore = document.querySelector(".story-more");
  clickMore.addEventListener("click", wolfAttack);
}

function wolfAttack() {
  let localStat;
  localStat = JSON.parse(localStorage.getItem("characterStat"));
  let arrStat = Object.values(localStat);
  parseInt(arrStat);

  if (arrStat[0] > 9 && arrStat[1] > 9) {
    render(northWolfBattle);
    let clickMore = document.querySelector(".text-more");
    clickMore.addEventListener("click", wolfAfterBattle);
  } else {
    render(northWolfDefeat);
    const storyOver = document.querySelector(".game-over");
    storyOver.addEventListener("click", gameOverEpisode);
  }
}

function wolfAfterBattle() {
  let remHp = calcLostHp();
  getAllStatOnchange();

  if (remHp <= 0) {
    let eptitle = document.querySelector(".episode-title");
    eptitle.innerText = "A Pyrric Victory";
    let pyrrhic = document.querySelector(".wolf-victory-pyrrhic");
    pyrrhic.classList.toggle('wolf-victory-pyrrhic-hd');    
    let clickMore = document.querySelector(".game-over");
    clickMore.addEventListener("click", gameOverEpisode);
  } else {
    let survive = document.querySelector(".wolf-victory-survive");
    survive.classList.toggle('wolf-victory-survive-hd');
    let clickMore = document.querySelector(".story-more");
    clickMore.addEventListener("click", roadToWitch);
  }
}

function calcLostHp() {
  let localStat;
  localStat = JSON.parse(localStorage.getItem("characterStat"));
  let arrStat = Object.values(localStat);
  //let arrKeys = Object.keys(localStat);
  parseInt(arrStat);
  let hpIndex = arrStat.length -1;
  let charCon = arrStat[2];
  let charHp = arrStat[hpIndex];
  let lostHp = 0;
  let remainingHp = 0;

  // Result lost hp
  if (charCon <= 8) {
    lostHp = Math.floor(Math.random() * 25);
    remainingHp = charHp - lostHp;
  } else if (charCon <= 10) {
    lostHp = Math.floor(Math.random() * 20);
    remainingHp = charHp - lostHp;
  } else {
    lostHp = Math.floor(Math.random() * 15);
    remainingHp = charHp - lostHp;
  }

  displayHp(lostHp);
  // We set the local storage hp to remainingHp
  localStat["hp"] = remainingHp;
  localStorage.setItem("characterStat", JSON.stringify(localStat));
  // We return the remaining character hp
  return remainingHp;
}

function displayHp(para) {
  let getLostHp = document.getElementById("get-lostHp");
  getLostHp.style.display = "none";
  let showLostHp = document.querySelectorAll(".show-lostHp");
  if (para > 0) {
    showLostHp.forEach(span => {
      span.innerHTML = `You lose ${para} 
                      hitpoints <i class="fas fa-thumbs-down"></i><br />`;
    });
  } else {
    showLostHp.forEach(span => {
      span.innerHTML = "";
    });
  }
}

// THE WITCH
function roadToWitch() {
  render(eastNorthWitch);
  // New choices
  const helpWitch = document.getElementById("road-help");
  const roadContinue = document.getElementById("road-continue");
  helpWitch.addEventListener("click", theWitch);
  roadContinue.addEventListener("click", arrivingGate);
}

function theWitch() {
  let localStat;
  localStat = JSON.parse(localStorage.getItem("characterStat"));
  // get and display character stat
  let arrStat = Object.values(localStat);
  parseInt(arrStat);
  // Save against witch
  if (arrStat[0] > 10) {
    render(northHelpWitch);
    let clickMore = document.querySelector(".story-more");
    clickMore.addEventListener("click", arrivingGate);
  } else if (arrStat[3] > 10) {
    render(northWitchSave);
    const storyOver = document.querySelector(".story-more");
    storyOver.addEventListener("click", arrivingGate);
  } else {
    render(northFrog);
    const storyOver = document.querySelector(".game-over");
    storyOver.addEventListener("click", gameOverEpisode);
  }
}

// EAST ROAD
function goEast() {
  render(eastRoad);
  const roadTroll = document.querySelector("#story-troll");
  roadTroll.addEventListener("click", meetTroll);
}

// TROLL
function meetTroll() {
  mp3Sound.src = "mp3/trollRoar.mp3";
  mp3Sound.play();
  render(eastRoadTroll);
  let fight = document.getElementById("road-fightTroll");
  let flee = document.getElementById("road-flee");
  fight.addEventListener("click", fightTroll);
  flee.addEventListener("click", fleeTroll);
}

function fightTroll() {
  render(eastFightTroll);
  let showTrollHp = document.querySelector(".show-troll-hp");
  let localStat;
  localStat = JSON.parse(localStorage.getItem("characterStat"));
  let arrStat = Object.values(localStat);
  parseInt(arrStat);

  // SURVIVE
  if (arrStat[0] > 9 && arrStat[1] > 9) {    
    showTrollHp.addEventListener("click", trollAfterBattle);
  }
  // DEAD
  else {
    render(eastFightTrollDefeat);
    const storyOver = document.querySelector(".game-over");
    storyOver.addEventListener("click", gameOverEpisode);
  }
}


function trollAfterBattle() {
  let showTrollHp = document.querySelector(".show-troll-hp");
  showTrollHp.style.display = "none";
  let remHp = calcLostHpTroll();
  getAllStatOnchange();
  
  if (remHp <= 0) {
    let eptitle = document.querySelector(".episode-title");
    eptitle.innerText = "A Pyrric Victory";    
    let pyrrhic = document.querySelector(".troll-victory-pyrrhic");
    pyrrhic.classList.toggle('troll-victory-pyrrhic-hd');
    let clickMore = document.querySelector(".game-over");
    clickMore.addEventListener("click", gameOverEpisode);
  } else {
    let survive = document.querySelector(".troll-victory-survive");
    survive.classList.toggle('troll-victory-survive-hd');
    let clickMore = document.querySelector(".story-more");
    clickMore.addEventListener("click", victoryTrollLoot);
  }
}


function calcLostHpTroll() {
  let localStat;
  localStat = JSON.parse(localStorage.getItem("characterStat"));
  let arrStat = Object.values(localStat);
  parseInt(arrStat);
  let hpIndex = arrStat.length -1;
  let charDex = arrStat[1];
  let charCon = arrStat[2];
  let charHp = arrStat[hpIndex];
  let lostHp = 0;
  let remainingHp = 0;

  // Result lost hp
  if (charCon <= 8 && charDex < 9) {
    lostHp = Math.floor(Math.random() * 25);
    remainingHp = charHp - lostHp;
  } else if (charCon <= 10) {
    lostHp = Math.floor(Math.random() * 20);
    remainingHp = charHp - lostHp;
  } else {
    lostHp = Math.floor(Math.random() * 15);
    remainingHp = charHp - lostHp;
  }

  displayHpTroll(lostHp);
  
  // We set the local storage hp to remainingHp
  localStat["hp"] = remainingHp;
  localStorage.setItem("characterStat", JSON.stringify(localStat));

  // We return the remaining character hp
  return remainingHp;
}

// Display message about lost hp
function displayHpTroll(para) {
  let showLostHp = document.querySelector(".troll-lostHp");
  if (para > 0) {
    showLostHp.innerHTML = `You lose ${para} 
                          hitpoints <i class="fas fa-thumbs-down"></i><br />`;
  } else {
    showLostHp.innerHTML = "";
  }
}

function victoryTrollLoot() {
  render(lootTroll);
  let storyContinue = document.querySelector(".story-more");
  storyContinue.addEventListener("click", roadToWitch);
}

// Logic fleeing troll
function fleeTroll() {
  render(roadFleeTroll);
  let moreText = document.getElementById("flee-troll");
  moreText.addEventListener("click", fleeTrollResult);
}
function fleeTrollResult() {
  let localStat;
  localStat = JSON.parse(localStorage.getItem("characterStat"));
  let arrStat = Object.values(localStat);
  parseInt(arrStat);
  const text = document.getElementById("episode-container");
  const fleeTroll = document.getElementById("flee-troll");
  const episodeTitle = document.getElementById("troll-flee-title");
  fleeTroll.style.display = "none";

  // Result based on character dexterity
  if (arrStat[1] > 10) {
    episodeTitle.innerText = "A Lucky Escape";
    text.innerHTML += roadFleeTrollSuccess;
    let clickMore = document.querySelector(".story-more");
    clickMore.addEventListener("click", roadToWitch);
  } else {
    episodeTitle.innerText = "Split Vision";
    text.innerHTML += roadFleeTrollFail;
    let gameOver = document.querySelector(".game-over");
    gameOver.addEventListener("click", gameOverEpisode);
  }
}
/*** END TROLL FLEE LOGIC ***/

// Continue on north road
function roadLeave() {
  mp3Sound.pause();
  render(northWitch);
  // New choices
  const helpWitch = document.getElementById("road-help");
  const roadContinue = document.getElementById("road-continue");
  helpWitch.addEventListener("click", theWitch);
  roadContinue.addEventListener("click", arrivingGate);
}

// GATE SMALLTOWN
function arrivingGate() {
  render(smalltownGate);
  //let g1 = document.getElementById("gate1");
  let gates = document.querySelectorAll(".gate-more");
  gates.forEach(more => {
    more.addEventListener("click", showMore);
  });
}

function showMore(ev) {
  let gateTrg = ev.target.id;
  switch (gateTrg) {
    case "gate1":
      document.querySelector("#part2").style.display = "block";
      let rt1 = ev.target;
      rt1.style.display = "none";
      break;
    case "gate2":
      document.querySelector("#part3").style.display = "block";
      let rt2 = ev.target;
      rt2.style.display = "none";
      break;
    case "gate3":
      document.querySelector("#part4").style.display = "block";
      let rt3 = ev.target;
      rt3.style.display = "none";
      break;
    case "gate4":
      document.querySelector("#part5").style.display = "block";
      let rt4 = ev.target;
      rt4.style.display = "none";
      break;
    case "gate5":
      inSmalltown();
      break;
    default:
      break;
  }
}

function inSmalltown() {
  render(arrivedSmalltown);
  let clickMore = document.querySelector(".story-more");
  clickMore.addEventListener("click", showSquare);
}

function showSquare() {
  let clickMore = document.querySelector(".story-more");
  clickMore.style.display = "none";
  const foo = document.getElementById("show-square");
  foo.style.display = "block";
}

// GAME OVER
function gameOverEpisode() {
  mp3Sound.src = "mp3/gameOver.mp3";
  mp3Sound.play();

  let statContainer = document.querySelector(".stat-container");
  statContainer.style.display = "none";

  let gOver = `<h1 id="msg-over">GAME OVER</h1>`;
  render(gOver);
}
