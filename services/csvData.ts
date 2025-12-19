import { CSVRow } from '../types';

const MASTER_CSV_DATA = `id,category,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
1,Amphibians,bullfrog,newt,glass frog,salamander,spadefoot,toad
2,Animals,antelope,badger,bear,beaver,bison,boar,cheetah,chimpanzee,cougar,deer,fox,gorilla,jaguar,leopard,lion,moose,otter,raccoon,tiger,weasel
3,Astronomy,asteroid,black hole,comet,eclipse,equinox,galaxy,meteor,nebula,orbit,planet,pulsar,quasar,satellite,solstice,star,supernova
4,Bears,andean bear,asian black bear,black bear,brown bear,grizzly,kodiak,malayan sun bear,panda,polar bear,sloth bear,spectacled bear,sun bear
5,Big Cats,caracal,cheetah,cougar,jaguar,leopard,lion,lynx,puma,snow leopard,tiger
6,Breads,bagel,baguette,brioche,chapati,ciabatta,focaccia,injera,lavash,naan,panettone,pita,pretzel,sourdough,tortilla,arepa,paratha,piadina,roti,cornbread,damper,rye
7,Canines,akita,basenji,beagle,boxer,bulldog,chihuahua,collie,corgi,coyote,dachshund,dingo,fox,german shepherd,great dane,greyhound,jackal,malamute,maned wolf,pembroke,pomeranian,poodle,pug,retriever,shiba inu
8,Cheeses Hard,asiago,cheddar,comte,edam,emmental,gouda,gruyere,manchego,parmesan,pecorino,provolone,taleggio
9,Cheeses Soft,camembert,gorgonzola,reblochon,ricotta,roquefort,stilton
10,Cities,bogota,chicago,lima,los angeles,new york,rio,santiago,sao paulo,toronto,bangkok,beijing,delhi,hanoi,jakarta,karachi,kuala lumpur,manila,seoul,singapore,taipei,tokyo,amsterdam,berlin,brussels,copenhagen,helsinki,london,madrid,paris,prague,rome,vienna
11,Clothing,bell bottoms,bra,coat,dress,gloves,hat,hoodie,jacket,jeans,leggings,pantyhose,scarf,shirt,skirt,socks,tank top,underwear,vest
12,Cold Desserts,banana split,fruit salad,fudge,jelly,popsicle,sundae
13,COMMON PETS,cat,dog,fish,hamster,parrot,rabbit
14,Computer File Formats,gif,json,png,pptx,xlsx,xml
15,Deer Family,caribou,chital,elk,fallow,moose,mule deer,muntjac,red deer,reindeer,roe deer,sika,white-tailed deer
16,Drinks Cold,cola,frappe,ginger ale,iced coffee,iced tea,lemonade,milkshake,seltzer,smoothie,soda,tonic,agua fresca
17,Elements Halogens,fluorine,chlorine,bromine,iodine,astatine,tennessine
18,Elements Noble Gases,helium,neon,argon,krypton,xenon,radon,oganesson
19,Finance,bond,cpi,debt,deflation,derivative,dividend,equity,future,gdp,inflation,interest,option,ppi,recession,stock,swap
20,Fish,anchovy,bass,carp,cod,halibut,herring,mackerel,perch,pike,salmon,sardine,sole,sturgeon,swordfish,tilapia,trout,tuna
21,Flightless Birds,cassowary,emu,great auk,kakapo,kiwi,moorhen,ostrich,penguin,rail,rhea,takahe,weka
22,Freshwater Fish,bass,bream,carp,catfish,perch,pike,roach,salmon,sturgeon,tench,tilapia,trout
23,Geography Deserts,arabian,atacama,chihuahuan,gobi,mojave,patagonian
24,Geography Islands,borneo,hispaniola,kyushu,madagascar,newfoundland,sumatra
25,Geography Oceans,arctic,atlantic,bay,channel,gulf,indian,pacific,ridge,sea,southern,strait,trench
26,Geography Rivers,amazon,danube,euphrates,ganges,indus,mekong,nile,rhine,thames,volga
27,Geology,agate,basalt,diamond,emerald,granite,jade,limestone,marble,obsidian,opal,quartz,ruby,sandstone,sapphire,shale,slate
28,Herbs Fresh,bay,catnip,chervil,chives,cilantro,curry leaf,hyssop,lemon balm,lemongrass,lovage,mint,sorrel,verbena,basil,chive,dill,fennel,marjoram,oregano,parsley,rosemary,sage,savory,tarragon,thyme
29,Hot Drinks,americano,cappuccino,chai,cocoa,latte,matcha,mocha,oolong,tea
30,Butterflies,admiral,blue,comma,fritillary,hairstreak,monarch,morpho,painted lady,ringlet,sulphur,swallowtail
31,Kitchen Tools,cleaver,colander,fork,grater,knife,peeler,spatula,spoon,tongs
32,Legal,affidavit,appeal,contract,counsel,deposition,hearing,injunction,judge,jury,precedent,statute,subpoena,verdict
33,Math,algebra,calculus,trigonometry,geometry,graph theory,logic,number theory,probability,set theory,statistics,topology
34,Medical,allergy,antibiotic,bacteria,diagnosis,fracture,imaging,prognosis,surgery,symptom,therapy,tumor,vaccine,virus
35,MOBILE GAMES,among us,angry birds,candy crush,clash of clans,fortnite,pokemon go
36,MOVIE VILLAINS,agent smith,darth vader,hannibal lecter,joker,thanos,voldemort
37,Olympic,archery,athletics,diving,fencing,gymnastics,judo,rowing,sailing,shooting,swimming,taekwondo,wrestling
38,Raptors,buzzard,eagle,harrier,hawk,kite,merlin
39,Reptiles,alligator,anole,boa,chameleon,cobra,crocodile,gecko,iguana,lizard,python,skink,snake,terrapin,tortoise,turtle,viper,basilisk,gila monster,monitor,whiptail
40,Seabirds,albatross,auk,booby,cormorant,frigatebird,gannet,gull,pelican,petrel,puffin,shearwater,tern
41,Shapes Polygons,dodecagon,heptagon,hexagon,nonagon,octagon,triangle,rhombus,trapezoid
42,Sharks,basking shark,blue shark,bull shark,goblin shark,great white,hammerhead,lemon shark,mako,nurse shark,reef shark,tiger shark,whale shark
43,SOCIAL MEDIA INFLUENCERS,addison rae,charli d'amelio,david dobrik,mrbeast,pewdiepie,zach king
44,Spices Savory,anise,caraway,coriander,cumin,dill seed,fenugreek,mustard,paprika,peppercorn,saffron,sumac,turmeric
45,Spices Warm,allspice,cardamom,cinnamon,clove,galangal,ginger,grains of paradise,long pepper,mace,star anise
46,Time & Date,april,calendar,clock,december,dst,july,june,march,may,minute,monday,november,october,pst,saturday,second,september,solstice,thursday,tuesday,utc
47,TV SHOWS OF THE 2000S,breaking bad,game of thrones,lost,mad men,the office,the sopranos
48,TV SHOWS OF THE 90S,buffy,frasier,friends,seinfeld,the simpsons,the x-files
49,Vegetables Leafy,arugula,bok choy,cabbage,chard,collards,endive,kale,lettuce,mizuna,mustard greens,romaine
50,Vegetables Roots,carrot,cassava,ginger,parsnip,radish,rutabaga,salsify,taro,turmeric,turnip,yam
51,Watercraft,barge,boat,canoe,catamaran,dinghy,ferry,gondola,kayak,sailboat,ship,submarine,yacht
52,Art Styles,abstract,baroque,cubism,dadaism,expression,futurism,impression,minimalism,neoclassic,pop art,realism,renaissance,rococo,surrealism,symbolism
53,Writing Genres,adventure,biography,comedy,crime,dystopian,essay,fantasy,fiction,folklore,historical,horror,memoir,mystery,non fiction,poetry,romance,satire,sci-fi,thriller,tragedy
54,Units of Time,century,day,decade,fortnight,hour,microsecond,millennium,millisecond,minute,month,nanosecond,second,week,year
55,Units of Measurement,acre,ampere,candela,centimeter,cup,foot,gallon,gram,hertz,inch,joule,kelvin,kilogram,liter,lumen,meter,mile,mole,newton,ohm,ounce,pascal,pint,pound,quart,tablespoon,teaspoon,ton,volt,watt,yard
56,Musical Scales,acoustic,blues,chromatic,diatonic,double harmonic,enigmatic,harmonic minor,major,melodic minor,minor,pentatonic,whole tone
57,Feelings and Emotions,admiration,adoration,affection,agony,alarm,amazement,amusement,anger,annoyance,anxiety,apathy,apprehension,astonishment,attraction,awe,bitterness,bliss,boredom,calmness,compassion,confidence,confusion,contempt,contentment,courage,curiosity,cynicism,delight,depression,desire,despair,determination,disappointment,disgust,dread,ecstasy,elation,embarrassment,empathy,enthusiasm,envy,euphoria,excitement,fear,frustration,gratitude,grief,guilt,happiness,hatred,hope,horror,hostility,humiliation,hurt,hysteria,indifference,interest,irritation,isolation,jealousy,joy,loneliness,love,lust,melancholy,misery,nervousness,nostalgia,optimism,panic,paranoia,passion,pessimism,pity,pleasure,pride,rage,regret,rejection,relief,remorse,resentment,sadness,satisfaction,scorn,security,self-confidence,shame,shock,shyness,skepticism,sociability,sorrow,spite,stress,surprise,sympathy,tenderness,terror,trust,uneasiness,unhappiness,vanity,wariness,wonder,worry,zeal
58,Habitats,arctic,badlands,boreal forest,canyon,cave,chaparral,cloud forest,coast,coniferous forest,coral reef,deciduous forest,delta,desert,dune,estuary,everglades,fen,field,forest,freshwater,glacier,grassland,heath,high altitude,hydrothermal vent,ice shelf,intertidal,island,jungle,kelp forest,lagoon,lake,mangrove,marine,marsh,meadow,montane,moor,mudflat,ocean,pampas,peat bog,plain,polar,pond,prairie,rainforest,river,salt marsh,sand dune,savanna,scrubland,sea,seafloor,shore,steppe,swamp,taiga,temperate forest,tidal pool,tropical,tundra,urban,valley,volcano,wetland,woodland
59,Household Rooms,kitchen,living room,bedroom,bathroom,garage,attic,basement,dining room,office,laundry room
60,Popular Sports,baseball,basketball,football,soccer,tennis,golf,hockey,boxing,swimming,running
61,Vehicles,car,truck,bicycle,airplane,boat,bus,train
62,Mammals,dog,cat,horse,elephant,lion,tiger,bear
63,Kitchen,knife,fork,spoon,plate,cup,pot,pan
64,Occupations,teacher,doctor,engineer,artist,chef,nurse,driver
65,Wildlife,bird,fish,frog,turtle,snake,deer,rabbit
66,Plants,tree,flower,grass,bush,fern,moss,cactus
67,Foods,bread,cheese,milk,butter,rice,chicken,apple
68,Body,head,arm,leg,ear,eye,hand,foot
69,Historical Eras,neolithic,medieval,renaissance,victorian,modern,ancient,industrial
70,Achievements,invention,discovery,exploration,writing,building,art,science
71,Daily Activities,eating,sleeping,dressing,walking,talking,reading,working
72,Anatomy,accountable,heart,lungs,stomach,liver,muscle,bone
73,Social Media,Facebook,Instagram,Twitter,LinkedIn,TikTok,Snapchat,Pinterest
74,Tennis Surfaces,clay,grass,hard court,carpet,indoor,outdoor,green clay,red clay,artificial turf
75,Basketball Strategies,zone defense,pick and roll,isolation,fast break,box out,double team,full court press,backdoor cut,screen
76,Soccer Leagues,premier league,la liga,serie a,bundesliga,ligue 1,mls,eredivisie,champions league,fa cup
77,NFL Terms,hail mary,blitz,field goal,safety,interception,touchback,end zone,offside,fumble
78,Olympic Athletes,usain bolt,michael phelps,simone biles,serena williams,muhammad ali,mark spitz,carl lewis,allyson felix,kristi yamaguchi
79,Basketball Players,lebron james,stephen curry,kevin durant,kawhi leonard,anthony davis,james harden,russell westbrook,derrick rose,dwyane wade
80,Football Coaches,bill belichick,andy reid,sean payton,nick saban,pete carroll,bruce arians,tom landry,vince lombardi,bill walsh
81,Tennis Players,roger federer,rafael nadal,serena williams,venus williams,novak djokovic,pete sampras,chris evert,andre agassi,martina navratilova
82,Hockey Players,wayne gretzky,mario lemieux,bobby orr,mark messier,patrick roy,jaromir jagr,steve yzerman,martin brodeur
83,Baseball Teams,yankees,red sox,dodgers,cubs,mets,giants,cardinals,blue jays,phillies
84,Soccer World Cup,brazil,germany,argentina,france,italy,spain,england,uruguay,netherlands
85,NFL Events,super bowl,conference championship,divisional playoff,wild card,pro bowl,regular season,preseason,draft,training camp
86,Olympic Venues,stadium,arena,pool,track field,gymnasium,velodrome,ice rink,marathon course,boxing ring
87,Building Toys,lego,blocks,bricks,duplo,magnet blocks,keva planks,kinetics
88,Action Figures,barbie,gi joe,transformers,ninja turtles,power rangers,action man,mega bloks
89,Classic Toys,yo-yo,marbles,top,jack in the box,hula hoop,spinning top,slinky
90,Outdoor Toys,kite,scooter,frisbee,bike,ball,jump rope,hula hoop
91,Dolls,barbie,american girl,baby doll,bratz,monster high,cabbage patch,dollhouse
92,Electronic Toys,tamagotchi,furby,robot,game boy,walkie talkie,rc car,scratch cat
93,Creative Toys,play doh,coloring book,crayons,model clay,puzzle paints,sticker book,chalk
94,Puzzles,jigsaw,puzzle,rubik,crossword,sudoku,logic puzzle,tangram,word search
95,Building Sets,lego,meccano,k'nex,erector set,lincoln logs,tinker toy,magformers
96,Plush Toys,teddy bear,stuffed rabbit,bean bag plush,plush dog,plush cat,plush dinosaur,plush elephant
97,Educational Toys,abacus,globe,math blocks,alphabet blocks,science kit,magnifying glass,microscope toy
98,Water Toys,water gun,water balloon,pool float,snorkel,goggles,swim ring,beach ball
99,Outdoor Games,soccer ball,baseball,basketball,horse shoes,tag,jump rope,relay baton
100,Stuffed Animals,teddy bear,plush dog,stuffed cat,plush elephant,stuffed lion,stuffed monkey,stuffed rabbit
101,Creative Kits,paint set,sticker book,crafting kit,coloring book,model kit,finger paints,origami set
102,Electronic Games,game boy,tamagotchi,handheld electronic,portable console,furby,rc car,electronic pet
103,Classic Games,chess,checkers,backgammon,scrabble,dominoes,parcheesi,go
104,Action Toys,gunny,action figure,transformer,robot,power ranger,hero figure,ninja doll
105,Constructive Toys,meccano,lincoln logs,k'nex,erector set,magnetic tiles,tinker toy,building blocks
106,Playsets,dollhouse,garage,treehouse,kitchen set,farm set,train set,castle
107,Outdoor Play,scooter,tricycle,kite,frisbee,ball,jump rope,hula hoop
108,Toy Vehicles,hot wheels,matchbox,die cast car,rc car,toy train,toy plane,toy boat
109,Building Kits,lego,magnet blocks,tinker toy,meccano,erector set,k'nex,duplo
110,Soft Toys,teddy bear,stuffed bunny,plush dog,bean bag plush,stuffed cat,plush elephant,stuffed lion
111,Classics,yo-yo,marbles,jack in the box,hula hoop,spinning top,slinky,tiddlywinks
112,Games,monopoly,clue,risk,scrabble,chess,checkers,sorry
113,Sports Toys,soccer ball,basketball,baseball,football,tennis ball,frisbee,jump rope
114,Fast Food Pizzerias,Domino's,Pizza Hut,Little Caesars,California Pizza Kitchen,Papa John's,Marco's Pizza,Round Table
115,Fruit Juice Brands,Tropicana,Minute Maid,Ocean Spray,V8,Mott's,Welch's,Clamato
116,Sauces and Condiments,Heinz,Kraft,Bull's Eye,Tony Chachere's,Duke's,French's,Tabasco
117,Breakfast Cereals,Cheerios,Raisin Bran,Frosted Flakes,Kellogg's,Oats,Quaker,Rice Krispies
118,Chocolate Brands,Hershey's,Mars,Lindt,Ghirardelli,Nestle,Godiva,Thorntons
119,Dairy Product Brands,Dean's,Dannon,Blue Bell,Land O'Lakes,Yoplait,Chobani,Breakstone's
120,Ice Cream Brands,Breyers,Ben & Jerry's,Haagen Dazs,Cold Stone,Talenti,Dreyer's,Blue Bell
121,Candy Brands,M&M's,Skittles,Reese's,Snickers,Kit Kat,Twix,Milky Way
122,Soft Drink Companies,Mountain Dew,Coca Cola,Fanta,Pepsi,Snapple,7 Up,Dr Pepper
123,Sears Brands,Kenmore,Craftsman,DieHard,Silvertone,Coldspot,Homart,Allstate
124,Bankrupt Tech,Compaq,Netscape,Sun Microsystems,Nortel,Polaroid,Blockbuster,BeBox
125,Old Soft Drinks,Tab,Crystal Pepsi,Santas Own,Orbitz,OK Soda,Pepsi Blue,Fresca
126,Defunct Toy Lines,Micronauts,SilverHawks,He-Man,Tiger Electronics,G.I. Joe,Zoids,Shogun Warriors
127,Faded Tech Companies,Nortel,Sun Microsystems,Compaq,Netscape,BeBox,Blackberry,WebTV
128,Magic,Spell,Wand,Potion,Charm,Enchantment,Wizard,Sorcerer
129,Knights,Sword,Shield,Armor,Horse,Castle,Quest,Joust
130,Fairies,Wings,Dust,Forest,Tiny,Magic,Flutter,Enchanted
131,Elves,Forest,Bow,Agile,Pointed Ears,Archery,Grace,Immortal
132,Dark Lords,Power,Shadow,Evil,Minions,Dungeon,Curse,Throne
133,Wizardry,Staff,Spellbook,Robe,Incantation,Mystic,Alchemist,Talisman
134,Quests,Journey,Treasure,Map,Battle,Companion,Victory,Challenge
135,Fantasy Races,Elf,Dwarf,Orc,Troll,Hobbit,Giant,Gnome
136,Magical Items,Amulet,Crystal,Scroll,Ring,Pendant,Cloak,Orb
137,Beasts,Lion,Dragon,Wolf,Horse,Bear,Falcon,Serpent
138,Castles,Tower,Moat,Kingdom,Drawbridge,Dungeon,Throne Room,Keep
139,Spells,Fireball,Frost,Healing,Shield,Summon,Invisibility,Teleport
140,Potions,Healing,Mana,Invisibility,Strength,Speed,Poison,Elixir
141,Mermaids,Sea,Ocean,Scale,Tail,Siren,Coral,Trident
142,Magic Creatures,Phoenix,Unicorn,Sprite,Griffin,Troll,Cyclops,Wisp
143,Enchanted Forest,Tree,Fairy,Mushroom,Stream,Elf,Magic,Shadow
144,Sorcery,Spell,Wand,Book,Altar,Rune,Curse,Hex
145,Medieval Weapons,Sword,Bow,Axe,Spear,Dagger,Crossbow,Mace
146,Fantasy Lands,Kingdom,Castle,Village,Mountain,Forest,Swamp,Desert
147,Wizards,Gandalf,Merlin,Mage,Sorcerer,Wizard,Spellcaster,Alchemist
148,Artifacts,Amulet,Chalice,Ring,Crown,Scepter,Scroll,Talisman
149,Creatures,Ogre,Troll,Giant,Dragon,Werewolf,Vampire,Zombie
150,Adventure,Journey,Quest,Map,Companion,Challenge,Treasure
151,Fables,Myth,Moral,Legend,Fairy Tale,Hero,Narrative,Mythology
152,Dark Magic,Curse,Necromancer,Shadow,Vampire,Demon,Hex,Sorcery
153,Magical Schools,Hogwarts,Academy,Class,Magic,Spell,Teacher,Student
154,Fantasy Weapons,Sword,Staff,Bow,Arrow,Axe,Dagger,Mace
155,Elven Kingdoms,Elf,Forest,Archery,Lore,Magic,Agility,Clan
156,Dwarves,Mining,Mountain,Beard,Axe,Forge,Stout,Helmet
157,Goblins,Cave,Trick,Hide,Greedy,Small,Dark,Mischief
158,Dragons,Scale,Fire,Talon,Wing,Legend,Ancient,Fierce
159,Heroes,Brave,Strong,Leader,Quest,Victory,Honor,Courage
160,Magical Creatures,Unicorn,Phoenix,Griffin,Mermaid,Centaur,Hydra,Sprite
161,Dark Forces,Witch,Warlock,Demon,Curse,Shadow,Vampire,Necromancer
162,Star Trek,Enterprise,Klingon,Spock,Vulcan,Phaser,Transporter,Federation,Warp,Captain
163,Doctor Who,Time Lord,TARDIS,Dalek,Sonic Screwdriver,Rose,Companion,Gallifrey,Cyberman,Regeneration
164,Blade Runner,Replicant,Deckard,Rain,Los Angeles,Flying Car,Voight Kampff,Tyrell Corporation,Android
165,Marvel Universe,Spider Man,Iron Man,Thor,Hulk,Avengers,Shield,Wakanda,Asgard,Vibranium
166,Futurama,Planet Express,Fry,Leela,Bender,Zapp Brannigan,Robot,Headplanet,New New York,Professor Farnsworth
167,Alien Franchise,Xenomorph,Ellen Ripley,Nostromo,Facehugger,Chestburster,Alien Queen,Weyland,Yutani,LV-426
168,Cyberpunk,Neon,Matrix,Hacker,Dystopia,Cyberspace,Augmentation,Android,Corporate Control,Virtual Reality
169,Starship Types,Cruiser,Fighter,Battleship,Destroyer,Freighter,Carrier,Explorer,Scout,Corvette
170,Time Travel,Paradox,Timeline,Alternate Reality,Past,Future,Present,Chrononaut,Time Machine,Butterfly Effect
171,Robots,Android,Droid,Cyborg,AI,Automation,Sentient,Processor,Humanoid,Machine
172,Star Wars Characters,Luke Skywalker,Princess Leia,Han Solo,Darth Vader,Yoda,Chewbacca,Emperor Palpatine,C-3PO,R2-D2
173,Famous Sci Fi Authors,Asimov,Clarke,Heinlein,Herbert,Gibson,Bradbury,Simmons,Le Guin,Orwell
174,Alien Species,Klingon,Romulan,Vulcan,Wookiee,Twi'lek,Orc,Cylon,Asari,Predator
175,Post Apocalypse,Radiation,Survivor,Zombie,Mad Max,Ruin,Wasteland,Bunker,Scavenger,Mutant
176,Spacecraft Terms,Hyperdrive,Warp Drive,Impulse Engine,Shuttle,Hangar,Cockpit,Hull,Thruster,Navigation
177,Dystopian Societies,Totalitarian,Censorship,Surveillance,Propaganda,Rebellion,Oppression,Control,Resistance,Regime
178,Sci Fi Weapons,Phaser,Blaster,Laser Rifle,Plasma Gun,Grenade,Sonic Weapon,Bowcaster,Energy Sword,Disruptor
179,Star Wars Factions,Rebellion,Empire,Jedi Order,Sith Order,Clone Army,New Republic,First Order,Resistance,Bounty Hunters
180,Post Human Concepts,Cyborg,Transhuman,AI,Genetic Engineering,Cloning,Mind Upload,Enhancement,Biotech,Nanotech
181,Classic Sci Fi Films,Metropolis,2001 A Space Odyssey,Invasion of The Body Snatchers,Forbidden Planet,Planet of The Apes,The Fly,Logan's Run,The Day The Earth Stood Still,Blade Runner
182,Spaceships War Roles,Fighter,Bomber,Interceptor,Command Ship,Support Vessel,Scout Ship,Transport,Carrier,Corvette
183,Alien Contact,First Contact,Communicate,Probe,Signal,Abduction,Invasion,Diplomacy,Encounter,Species
184,Star Wars Vehicles,X Wing,TIE Fighter,Millennium Falcon,Speeder Bike,Star Destroyer,AT AT Walker,Podracer,Battle Droid,Death Star
185,Sci Fi TV Shows,The Expanse,Black Mirror,Stranger Things,Firefly,Battlestar Galactica,Lost In Space,Westworld,Orphan Black,The 100
186,Famous Robots,Wall-E,R2 D2,C3PO,Hal 9000,Data,Johnny 5,Bender,Optimus Prime,T800
187,Spacesuits,Helmet,Oxygen,Systems,Gloves,Jetpack,Insulation,Visor,Pressure Suit,Glasses
188,Sci Fi Planets,Mars,Venus,Tatooine,Krypton,Arrakis,Trantor,Endor,Naboo,Coruscant
189,Teleportation Terms,Beam Up,Quantum,Phasing,Transporter,Instant,Portal,Matter Stream,Displacement,Dematerial
190,Galactic Empires,Imperium,Federation,Confederacy,Syndicate,Dominion,Alliance,Coalition,Republic,Consortium
191,Alien Invasion,Invasion,Probe,Attack,Occupation,Resistance,Hybrid,Scout Ship,Abduction,Extra Terrestrial
192,Time Travel Paradoxes,Grandfather Paradox,Bootstrap Paradox,Predestined,Alternate Timeline,Time Loop,Chronology,Temporal Anomaly,Causality,Time Slip
193,Sci Fi Energy Sources,Plasma,Fusion,Fission,Dark Matter,Antimatter,Tesla Coil,Zap Energy,Zero Point,Quantum
194,Space Exploration Missions,Apollo,Ares,Mercury,Discovery,Voyager,Hubble,Galileo,Cassini,Curiosity
195,Alien Languages,Klingon,Elvish,Vulcanese,Rodian,Na'vi,Huttese,Minbari,Protoss,Dothraki
196,Computer AI,Sentience,Algorithm,Neural Network,Machine Learning,Data Mining,Logic Circuit,Chatbot,Automation,Deep Learning
197,Space Colonization,Mars Base,Lunar Outpost,Terraforming,Habitat,Supply Ship,Space Elevator,Oxygen Farm,Energy Dome,Hydroponics
198,Virtual Reality,SIM,Avatar,Immersion,Haptic Feedback,Headset,Environment,Data Glove,Sensory,Bio Interface
199,Star Wars Creatures,Wampa,Sarlacc,Rancor,Twi'lek,Nerf Herder,Hutt,Gungan,Ronto,Tauntaun
200,Rock and Roll,Elvis,Chuck Berry,Little Richard,Bill Haley,Johnny Cash,Fats Domino,Buddy Holly,Bo Diddley,Ray Charles
201,Television Shows,I Love Lucy,The Twilight Zone,Gunsmoke,Leave It To Beaver,The Andy Griffith Show,The Honeymooners,The Ed Sullivan Show,Bonanza,The Fugitive
202,Cars,Ford Mustang,Chevrolet Bel Air,Cadillac Eldorado,Plymouth Fury,Volkswagen Beetle,Buick Roadmaster,Dodge Coronet,Chrysler New Yorker,Cadillac Coupe
203,Fashion,Poodle Skirt,Letterman Jacket,Bobby Socks,Cat Eye Glasses,High Waist Pants,Leather Jacket,Silk Scarf,Penny Loafers,Cardigan Sweater
204,Music Icons,Frank Sinatra,Aretha Franklin,Bob Dylan,Miles Davis,Ray Charles,Marvin Gaye,The Supremes,James Brown,Sam Cooke
205,Household Appliances,Microwave,Rice Cooker,Vacuum Cleaner,Washing Machine,Electric Iron,Toaster,Refrigerator,Blender,Coffee Maker
206,Sports,Babe Ruth,Jackie Robinson,Muhammad Ali,Duke Snider,Willie Mays,Mickey Mantle,Lou Gehrig,Ernie Banks,Stan Musial
207,Political Leaders,John F Kennedy,Dwight D Eisenhower,Richard Nixon,Lyndon B Johnson,Nikita Khrushchev,Winston Churchill,Charles de Gaulle,Harold Macmillan,Jawaharlal Nehru
208,Popular Drinks,Coca Cola,Pepsi Cola,Root Beer,Milkshake,Whiskey,Margarita,Moonshine,Bourbon,Bloody Mary
209,Technology,Transistor,Vacuum Tube,Mainframe Computer,Walkie Talkie,Polaroid Camera,Vacuum Tube Radio,Slide Rule,Record Player,Carbon Microphone
210,TV Cartoons,The Flintstones,The Jetsons,Tom and Jerry,Rocky and Bullwinkle,Hanna Barbera,Dexter's Laboratory,Speed Racer,The Smurfs,Popeye
211,Classic Musicals,Gigot,The Sound of Music,Oklahoma!,West Side Story,My Fair Lady,Camelot,An American in Paris,Guys and Dolls,South Pacific
212,1950s Toys,Barbie,Dymaxion Car,Slinky,Mr Potato Head,Hula Hoop,YoYo,Play Dough,View Master,Silly Putty
213,Cold War Symbols,Iron Curtain,Check Point Charlie,Berlin Wall,Red Scare,McCarthyism,Mutually Assured Destruction,Space Race,U2 Spy Plane,Cuban Missile Crisis
214,Classic Cars,Chevrolet Camaro,Ford Thunderbird,Pontiac GTO,Dodge Charger,Cadillac Coupe Deville,Buick Skylark,Oldsmobile Cutlass,Chrysler Imperial,Ford Falcon
215,World Leaders,John F Kennedy,Charles de Gaulle,Winston Churchill,Fidel Castro,Nikita Khrushchev,Jawaharlal Nehru,Konrad Adenauer,Harold Macmillan,Lyndon B Johnson
216,TV Families,The Brady Bunch,The Partridge Family,The Munsters,The Addams Family,Leave It To Beaver,The Flintstones,The Jetsons,The Waltons,My Three Sons
217,Fashion Styles,Mod Style,Rockabilly,Bebop,Rock and Roll,Hippie Style,Greaser Style,Pin Up,French New Wave,Poodle Skirt
218,Inventions,Color TV,Polio Vaccine,Microwave Oven,Transistor Radio,Jet Engine,Synthetic Fibers,Laser,Integrated Circuit,Velcro
219,Popular Dances,The Twist,Rock and Roll,The Jitterbug,Swing,Hip Hop,Charleston,Bop,The Stroll,The Madison
220,Science Fiction,Doctor Who,Star Trek,The Twilight Zone,Forbidden Planet,Flash Gordon,The Day the Earth Stood Still,Metropolis,Invasion of the Body Snatchers,2001 A Space Odyssey
221,Motown Artists,The Supremes,Stevie Wonder,Marvin Gaye,The Temptations,Martha and the Vandellas,Gladys Knight,Smokey Robinson,The Four Tops,Diana Ross
222,Cold War Technology,ICBM,Spy Satellite,Nuclear Submarine,Atomic Bomb,Hydrogen Bomb,Radioactive Fallout,Secret Bunker,ECM Radar,Nuclear Missile
223,Summer Movies,Rebel Without a Cause,The Great Escape,North by Northwest,To Kill a Mockingbird,The Birds,Goldfinger,Lawrence of Arabia,Doctor Zhivago,West Side Story
224,Cold War Espionage,CIA,KGB,MI6,Spy,Double Agent,Defector,Secret Code,Mole,Black Ops
225,Classic Broadway,The Pajama Game,West Side Story,My Fair Lady,Guys and Dolls,The Sound of Music,Oklahoma!,South Pacific,Cabaret,Carousel
226,Space Race Countries,Soviet Union,United States,China,Bulgaria,Romania,East Germany,Hungary,Poland,Ukraine
227,Popular TV Westerns,Gunsmoke,Bonanza,The Rifleman,Have Gun Will Travel,Wagon Train,Rawhide,The Lone Ranger,Cheyenne,Death Valley Days
228,Film Directors,Alfred Hitchcock,Stanley Kubrick,John Ford,Orson Welles,François Truffaut,Federico Fellini,Sidney Lumet,Billy Wilder,Budd Boetticher
229,Iconic 1960s Albums,Sgt Pepper's Lonely Hearts Club Band,Pet Sounds,Highway 61 Revisited,Blonde on Blonde,Are You Experienced,The Velvet Underground,Let It Bleed,The Doors,Abbey Road
230,Typewriters,Remington,Smith Corona,Royal,Underwood,Olivetti,Erasable Ribbon,Carbon Paper,Manual Typewriter,Electric Typewriter
231,Classic Novels,On the Road,To Kill a Mockingbird,Fahrenheit 451,The Catcher in the Rye,One Flew Over the Cuckoo's Nest,Lolita,Invisible Man,Stranger in a Strange Land,Doctor Zhivago
232,Famous 1960s Photographers,Robert Frank,Diane Arbus,Henri Cartier Bresson,Ansel Adams,Lee Friedlander,William Klein,Richard Avedon,Elliott Erwitt,Garrett Bradley
233,Iconic Cars,Volkswagen Beetle,Ford Mustang,Cadillac Eldorado,Dodge Charger,Chevrolet Camaro,Chevrolet Corvette,Pontiac GTO,Ford Thunderbird,Buick Riviera
234,Fast Food Mascots,Ronald McDonald,Colonel Sanders,The Burger King,Tony The Tiger,Chester Cheetah,Jack Box,Pizza Hut Hut,Hooters Owl
235,Corporate Mascots,Geico Gecko,Energizer Bunny,Michelin Man,Smokey Bear,Pillsbury Doughboy,Aflac Duck,Mr. Clean,Mr. Peanut,The Noid,Keebler Elf,Jolly Green Giant
236,Corporate Slogans,Think Different,Impossible Is Nothing,Open Happiness,Have It Your Way,King Of Beers,Just Do It,I'm Lovin' It,Zoom Zoom,Moving Forward
237,American Gangsters,Al Capone,Bugsy Siegel,John Dillinger,Meyer Lansky,Lucky Luciano,Whitey Bulger,Billy The Kid,Bonnie Parker
238,Serial Killers,Ted Bundy,Jeffrey Dahmer,John Wayne Gacy,Richard Ramirez,Edmund Kemper,Aileen Wuornos,Son of Sam,David Berkowitz
239,Notorious Bank Robbers,John Dillinger,Bonnie Parker,Clyde Barrow,Frank Abagnale,George Baby Face Nelson,Herman Lamm
240,Infamous Pirates,Blackbeard,Calico Jack,Anne Bonny,Bartholomew Roberts,Henry Morgan,William Kidd,Edward Teach,Stede Bonnet,Charles Vane
241,Female Criminals,Bonnie Parker,Aileen Wuornos,Brenda Ann Spencer,Myra Hindley,Griselda Blanco,Marilyn Lemak,Ilse Koch,Mary Ann Cotton,Juana Barraza,Elizabeth Bathory
242,Mafia Bosses,Al Capone,Don Vito Genovese,Carlo Gambino,Joseph Bonanno,Tommy Lucchese,Salvatore Maranzano,John Gotti,Charles Luciano,Paul Castellano
243,Historic Outlaws,Jesse James,Billy The Kid,Butch Cassidy,Sundance Kid,Robert Ford,Calamity Jane,Doc Holliday,Wild Bill Hickok,Pat Garrett
244,Espionage Spies,Anna Chapman,Aldrich Ames,Julius Rosenberg,Ethel Rosenberg,Robert Hanssen,Kim Philby,Klaus Fuchs
245,White Collar Criminals,Frank Abagnale,Bernie Madoff,Jordan Belfort,Elizabeth Holmes,Nicholas Leeson,Charles Ponzi,Allen Stanford,Martin Shkreli,Richard Fuld
246,Warfare War Criminals,Adolf Eichmann,Heinrich Himmler,Hermann Göring,Joseph Mengele,Rudolf Hess,Benito Mussolini,Hideki Tojo,Slobodan Milošević,Radovan Karadžić
247,Jack The Ripper Suspects,Montague John Druitt,Michael Ostrog,Aaron Kosminski,John Pizer,Alexander Pedachenko,George Chapman,Francis Tumblety,James Maybrick
248,Notorious Kidnappers,Patty Hearst,Charles Lindbergh,Elizabeth Smart,Jaycee Dugard,Shawn Hornbeck,Mary McElroy,Frank Sinatra Jr.,Barney Clark,Barbara Mackle
249,Famous Fraudsters,Frank Abagnale,Bernie Madoff,Elizabeth Holmes,Charles Ponzi,Allen Stanford,Anna Sorokin,Barry Minkow,Socorro Herrera,Richard Fuld
250,Infamous Arsonists,John Leonard Orr,John Duffey,Edward Leonski,Hanna Greathouse,Jean Harris,Harry Powers,Felix Hall,Charles Starkweather,Albert DeSalvo
251,Assassins,John Wilkes Booth,Lee Harvey Oswald,Gavrilo Princip,James Earl Ray,Mark David Chapman,Charles Guiteau,Sirhan Sirhan
252,Famous Heist Criminals,Bonnie Parker,John Dillinger,D. B. Cooper,Geraldine Hamilton,Albert Spaggiari,Stanley Gibbons,Charles Ponzi,Anna Sorokin
253,Notorious Cybercriminals,Albert Gonzalez,Kevin Mitnick,Adrian Lamo,Kevin Poulsen,Roman Seleznev,Jeanson James Ancheta,Julian Assange
254,Con Men and Scammers,Frank Abagnale,Charles Ponzi,Elizabeth Holmes,Anna Sorokin,Victor Lustig,Gregor MacGregor,Stanford White,Dorothy Parker,Martha Stewart
255,Famous Cult Leaders,Charles Manson,Jim Jones,David Koresh,Marshall Applewhite,Shoko Asahara,Keith Raniere,Wayne Bent
256,Russian Criminals,Sergey Mavrodi,Boris Berezovsky,Grigori Rasputin,Andrei Chikatilo,Alexander Solonik,Igor Girkin,Semion Mogilevich,Oleg Deripaska,Anatoly Onoprienko
257,Irish Criminals,Martin Cahill,John Gilligan,Michael Mick McGurk,Raymond The Texan Elder,James Whitey Bulger,Patrick Meehan,Brendan McFarlane,Christy Kinahan
258,Wild West Outlaws,Jesse James,Billy The Kid,Butch Cassidy,Sundance Kid,Wild Bill Hickok,Doc Holliday,Calamity Jane,Cole Younger,Frank James
259,Infamous Poisons,Arsenic,Cyanide,Strychnine,Thallium,Digitalis,Ricin,Polonium,Mercury,Sarin
260,Mob Hitmen,Richard Kuklinski,Salvatore Gravano,Tommy DeSimone,Albert Anastasia,Frank Nitti,Phil Leonetti,John Gotti,Joseph Massino,Vincent Gigante
261,Women in Crime,Bonnie Parker,Aileen Wuornos,Griselda Blanco,Myra Hindley,Ilse Koch,Martha Beck,Rose West,Brenda Spencer,Elizabeth Báthory
262,International Con Artists,Anna Sorokin,Frank Abagnale,Victor Lustig,Fawziyah Javed,Gregor MacGregor,Eva C.,Fiona Simpson,Anna Chapman,Ewa Paradies
263,Infamous Kidnappings,Lindbergh Baby,Patty Hearst,Elizabeth Smart,Jaycee Dugard,Shawn Hornbeck,Mary McElroy,Frank Sinatra Jr.,Barbara Mackle,Barney Clark
264,Anarchists and Terrorists,Ted Kaczynski,Timothy McVeigh,Josef Klemperer,Brigitte Mohnhaupt,David Koresh,Anders Behring Breivik,Richard Reid,Eric Rudolph
265,Hackers and Crackers,Kevin Mitnick,Adrian Lamo,Albert Gonzalez,Kevin Poulsen,Jonathan James,Julian Assange,Guy Fawkes
266,Political Assassins,Gavrilo Princip,John Wilkes Booth,Lee Harvey Oswald,Mark David Chapman,James Earl Ray,Charles Guiteau,Sirhan Sirhan,Anwar al-Awlaki,Patrice Lumumba
267,Drug Traffickers,Pablo Escobar,El Chapo,Griselda Blanco,Felix Gallardo,José Gonzalo Rodríguez,Gustavo Gaviria,Manuel Noriega,Ismael Zambada
268,Children's Crime Cases,Brenda Ann Spencer,Mary Bell,Linda Carty,Jon Venables,Robert Thompson,Karla Homolka,James Bulger
269,White Collar Fraudsters,Bernie Madoff,Elizabeth Holmes,Frank Abagnale,Charles Ponzi,Allen Stanford,Anna Sorokin,Barry Minkow,Rick Singer,Richard Fuld
270,Crime Families,Genovese Family,Gambino Family,Bonanno Family,Lucchese Family,Colombo Family,Chicago Outfit,Yamaguchi-gumi,The Kray Twins
271,Infiltrators and Double Agents,Klaus Fuchs,Kim Philby,Aldrich Ames,Robert Hanssen,Richard Sorge,Julius Rosenberg,Ethel Rosenberg,Anna Chapman
272,Infamous Female Killers,Aileen Wuornos,Myra Hindley,Ilse Koch,Elizabeth Bathory,Juana Barraza,Brenda Ann Spencer,Martha Beck,Rose West,Belle Gunness
273,Mafia Hitmen,Richard Kuklinski,Salvatore Gravano,Tommy DeSimone,Albert Anastasia,Frank Nitti,Phil Leonetti,John Gotti,Joseph Massino,Vincent Gigante
274,Drug Lords,Pablo Escobar,El Chapo,Griselda Blanco,Felix Gallardo,José Gonzalo Rodríguez,Gustavo Gaviria,Manuel Noriega,Ismael Zambada
276,National Parks,Yosemite,Yellowstone,Grand Canyon,Zion,Glacier,Acadia,Everglades,Rocky Mountain,Sequoia
277,Famous Cities,New York,Chicago,San Francisco,Los Angeles,Miami,Boston,Washington DC,New Orleans,Seattle
278,Iconic Landmarks,Statue of Liberty,Golden Gate Bridge,Mount Rushmore,Space Needle,Ft Sumter,Times Square,Alcatraz Island,Hollywood Sign,Gateway Arch
279,Historic Sites,Independence Hall,Alamo,Gettysburg,Jamestown,Monticello,Colonial Williamsburg,Fort McHenry,Harper's Ferry,Mount Vernon
280,Beach Destinations,Myrtle Beach,Huntington Beach,South Beach,Waikiki,Virginia Beach,Cape Cod,Clearwater Beach,Galveston,Rehoboth Beach
281,Rivers and Lakes,Mississippi River,Colorado River,Lake Tahoe,Great Salt Lake,Lake Michigan,Columbia River,Lake Superior,Lake Erie,Missouri River
282,Museums,Smithsonian,Museum of Modern Art,The Met,Guggenheim,Field Museum,American Museum of Natural History,Smithsonian Air and Space,Getty Center
283,Road Trip Routes,Route 66,Pacific Coast Highway,Blue Ridge Parkway,Garden Route,Great River Road,Overseas Highway,Lincoln Highway,Historic Columbia River Highway
284,Mountain Ranges,Appalachians,Rocky Mountains,Black Hills,Sierra Nevada,Cascade Range,Wasatch Range,Adirondacks,Sandia Mountains,White Mountains
285,Desert Spots,Mojave,Sonoran,Great Basin,Chihuahuan,Death Valley,Gila,Joshua Tree,White Sands,Nevada Desert
286,Culinary Cities,New Orleans,Portland,San Francisco,New York City,Nashville,Chicago,Charleston,Philadelphia,Austin
287,Southern Cities,Atlanta,New Orleans,Charleston,Nashville,Memphis,Miami,Savannah,Little Rock,Baton Rouge
288,Cultural Festivals,Mardi Gras,Burning Man,Sundance Film Festival,Jazz Festival,Carnival,State Fair,Coachella,Outside Lands,Labor Day Parade
289,Famous Museums,Smithsonian,MoMA,The Met,Guggenheim,Walker Art Center,Field Museum,National Gallery,Art Institute of Chicago,Brooklyn Museum
290,Island Destinations,Hawaii,Mackinac Island,Long Island,Key West,Block Island,San Juan Islands,Catalina Island,Martha's Vineyard,Fire Island
291,Winter Attractions,Ski Resorts,Snowboarding,Ice Fishing,Hot Springs,Winter Carnivals,Dog Sledding,Snowmobiling,Ice Climbing,Holiday Markets
292,American Icons,Baseball,Apple Pie,Fourth of July,American Flag,Liberty Bell,Bald Eagle,Mount Rushmore,Hollywood,Thanksgiving
293,Lake Destinations,Lake Tahoe,Lake George,Lake Superior,Lake Michigan,Lake Champlain,Crater Lake,Lake Powell,Lake Okeechobee,Lake Erie
294,Historic Trails,Oregon Trail,Appalachian Trail,Cumberland Road,Mormon Trail,Mesa Verde Trail,Trail of Tears,California Trail,Chisholm Trail,Overland Trail
295,Famous Theaters,Broadway,Hollywood Pantages,Strand Theatre,Radio City Music Hall,Lyric Theatre,Arena Stage,The Fox Theatre,The Wiltern,The Orpheum
296,American Presidents,George Washington,Abraham Lincoln,Franklin Roosevelt,Theodore Roosevelt,John F Kennedy,Thomas Jefferson,Andrew Jackson,Ulysses Grant,James Madison
297,Music Cities,Nashville,Memphis,Austin,New Orleans,Detroit,Seattle,Chicago,New York,Los Angeles
298,Amusement Parks,Disney World,Universal Orlando,Busch Gardens,Six Flags Magic Mountain,Knotts Berry Farm,Dollywood,Cedar Point,Hershey Park,Legoland California
299,Urban Parks,Central Park,Golden Gate Park,Millennium Park,Grant Park,Forest Park,Zilker Park,Lincoln Park,Prospect Park,Piedmont Park
300,Space and Science NASA,Space Center Houston,Kennedy Space Center,Jet Propulsion Laboratory,Smithsonian Air and Space,Pegasus,Explorer,Discovery,Columbia
301,US Capitals,Washington DC,Atlanta,Denver,Austin,Boston,Salem,Sacramento,Olympia,Albany
302,American Writers,Mark Twain,Ernest Hemingway,F Scott Fitzgerald,Harper Lee,Toni Morrison,Maya Angelou,Edgar Allan Poe,Emily Dickinson,John Steinbeck
303,Iconic Foods,Burger,Corn Dog,Apple Pie,Barbecue,Fried Chicken,Clam Chowder,Philly Cheesesteak,Gumbo,Lobster Roll
304,Great Lakes,Lake Superior,Lake Michigan,Lake Huron,Lake Erie,Lake Ontario,Saint Marys River,Buffalo River,Duluth Harbor,Sault Ste Marie
305,Famous Bridges,Golden Gate,Brooklyn,George Washington,Mackinac,Verrazano-Narrows,Seven Mile,Chesapeake Bay
306,Lighthouses,Portland Head,Cape Hatteras,Big Sable Point,Presque Isle,West Quoddy Head,Split Rock Point,Barnegat Light,Point Reyes,Montauk Point
307,American Sports Teams,Yankees,Cowboys,Lakers,Bulls,Patriots,Red Sox,Giants,Warriors,Packers
308,Famous Universities,Harvard,Yale,Stanford,MIT,Princeton,UCLA,Columbia,University of Chicago,Caltech
309,Pioneer Towns,Deadwood,Virginia City,Leadville,Dodge City,Tombstone,Bisbee,Custer,Sundance
310,Hollywood Films,Forrest Gump,The Godfather,Jurassic Park,Star Wars,Rocky,Back to the Future,Titanic,Casablanca
311,Festivals and Events,Comic Con,SXSW,Coachella,Burning Man,Mardi Gras,Sundance Film Festival,Lollapalooza,Labor Day Parade,New Orleans Jazz Festival
312,Internet Technologies,World Wide Web,Hypertext,HTTP,Browser,HTML,Cookies,URL,ISP,Cyberspace
313,Mobile Innovations,Smartphone,Touchscreen,GPS,App,Wi Fi,Bluetooth,4G,5G,MMS
314,Computer Hardware,CPU,RAM,Hard Drive,Graphics Card,Motherboard,Power Supply,Fan,SSD,USB
315,Software Breakthroughs,Operating System,Algorithm,Compiler,Open Source,Cloud Computing,Virtual Machine,Encryption,Patch,API
316,Artificial Intelligence,Neural Network,Machine Learning,Deep Learning,Natural Language Processing,Automation,Data Mining,Chatbot,Algorithm,Bot
317,Renewable Energy,Photovoltaic,Solar Panel,Wind Turbine,Geothermal,Hydropower,Biomass,Fuel Cell,Tidal Energy,Energy Storage
318,Transportation Advances,Electric Vehicle,Autonomous Car,Hyperloop,High Speed Rail,Drone,Navigation System,Fuel Efficiency,Traffic Management,Regenerative Braking
319,Medical Technologies,MRI,CT Scan,Ultrasound,Robotic Surgery,prosthetics,Genetic Engineering,Telemedicine,Biometrics,Artificial Organ
320,Communication Devices,Telephone,Radio,Television,Satellite,Modem,Router,Fax Machine,Walkie Talkie,Pager
321,Data Storage Technologies,Magnetic Tape,Hard Disk Drive,Flash Drive,Optical Disc,Cloud Storage,SD Card,RAM,ROM,Database
322,Semiconductor Developments,Transistor,Integrated Circuit,Microchip,Nanotech,Doping,Silicon Wafer,Lithography,Moores Law,CMOS
323,Computing Paradigms,Mainframe,Personal Computer,Laptop,Tablet,Server,Data Center,Quantum Computer,Distributed Computing,Parallel Processing
324,Space Exploration,Satellite,Rocket,Space Shuttle,Probe,Astronaut,Launch Pad,Space Station,Orbiter,Telemetry
325,Internet Security,Firewall,Antivirus,Malware,Phishing,Encryption,VPN,Biometric,2FA,Ransomware
326,Digital Media,Streaming,Podcasting,Video On Demand,Blog,Online Gaming,Virtual Reality,Augmented Reality,MP3,Cloud Gaming
327,Wearable Technology,Smartwatch,Fitness Tracker,Virtual Glasses,Smart Clothes,Health Monitor,Heart Rate Sensor,Step Counter,Bluetooth Earbuds,Smart Ring
328,Robotics,Automation,Servo Motor,Sensor,Artificial Intelligence,Actuator,Drone,Manipulator,Humanoid Robot,Machine Vision
329,Blockchain,Distributed Ledger,Crypto,Smart Contract,Mining,Hashing,Satoshi,Token,Node,Consensus
330,Wireless Communication,Bluetooth,Wi Fi,NFC,Radio Frequency,Cell Tower,Signal Strength,5G,Satellites,Infrared
331,Display Technologies,LED,OLED,LCD,Plasma,Refresh Rate,Pixel,Resolution,Touchscreen,Backlight
332,Emerging Tech,Holography,Quantum Computing,Brain Computer Interface,Nanobots,3D Holograms,Cryptography,Edge Computing,Smart Dust,Digital Twins
333,Computer Networking,IP Address,Router,Switch,Firewall,Subnet,VPN,MAC Address,Network Protocol,TCP IP
334,E-commerce,Online Shopping,Digital Wallet,Payment Gateway,Shopping Cart,Customer Review,Order Fulfillment,Dropshipping,Subscription Model,Flash Sale
335,Virtual and Augmented Reality,Headset,Motion Tracking,Haptic Feedback,Mixed Reality,3D Modeling,Immersive,Simulated Environment,Field of View,Latency
336,Energy Storage,Battery,Lithium Ion,Capacitor,Fuel Cell,Power Bank,Charge Cycle,Energy Density,Rechargeable,Grid Storage
337,Artificial Intelligence Applications,Chatbot,LLM,Image Recognition,Speech Recognition,Autonomous Vehicle,Facial Recognition,Predictive Analytics,Machine Vision,Expert System
338,Mobile Computing,Laptop,Tablet,Smartphone,Hotspot,Mobile OS,App Store,Bluetooth,Wi Fi,Data Sync
339,Internet of Things,Smart Home,Wearables,Sensors,Connectivity,Automation,Cloud Integration,Network,Data Analytics,Edge Devices
340,Big Data,Data Mining,Analytics,Hadoop,Data Warehouse,Machine Learning,Data Set,Data Lake,Cluster Computing,Streaming Data
341,Digital Photography,DSLR,ISO,Aperture,Shutter Speed,Lens,Pixel,Image Sensor,RAW Format,Editing Software
342,Thermal Technologies,Heat Sink,Thermal Paste,Cooling Fan,Liquid Cooling,Peltier Cooler,Heat Pipe,High Temps,Temperature Sensor,Phase Change Material
343,Software Development,IDE,Debugging,Version Control,Repository,Sprint,Agile,Testing,Deployment,Prototype
344,Electric Power Generation,Turbine,Generator,Transformer,Grid,Alternator,Circuit Breaker,Power Plant,Voltage,Current
345,Automotive Technologies,Internal Combustion Engine,Electric Motor,Catalytic Converter,Autopilot,Hybrid Car,Fuel Injection,ABS,Nitrogen Oxides,Turbocharger
346,Telecommunications,Fiber Optics,Satellite Dish,Microwave Transmission,Cellular Network,Base Station,Router,Modulation,Multiplexing,Signal Booster
347,Human Computer Interaction,Graphical User Interface,Touchscreen,Voice Command,Gesture Recognition,Haptic Feedback,Eye Tracking,Virtual Keyboard,User Experience,Accessible
348,Satellite Systems,GPS,Geostation,Low Earth Orbit,Telemetry,Antenna,Payload,Spacecraft,Ground Station,Orbital Mechanics
349,Cereal Crops,Wheat,Rice,Barley,Oats,Corn,Rye,Sorghum,Millet,Sesame
350,Farming Equipment,Tractor,Plow,Harvester,Seeder,Tiller,Combine,Rake,Fertilizer Spreader,Irrigation System
351,Crop Pests,Aphid,Caterpillar,Weevil,Locust,Mite,Beetle,Nematode,Armyworm,Grasshopper
352,Soil Types,Clay,Sand,Loam,Silt,Peat,Chalky,Gravelly,Saline,Alluvial
353,Fertilizers,Nitrogen,Phosphorus,Potassium,Compost,Manure,Urea,Ammonium,Nitrate,Miracle Gro
354,Plant Diseases,Blight,Mildew,Rust,Root Rot,Wilt,Leaf Spot,Downy Mildew,Canker,Fusarium
355,Orchard Fruits,Apple,Pear,Cherry,Peach,Plum,Apricot,Nectarine,Pomegranate,Mulberry
356,Grasses,Switchgrass,Bermudagrass,Fescue,Ryegrass,Bluegrass,Zoysia,Buffalograss,Timothy,Crabgrass
357,Irrigation Methods,Drip,Flood,Sprinkler,Centrifugal,Surface,Subsurface,Furrow,Basin,Manual
358,Harvesting Tools,Sickle,Scythe,Combine Harvester,Pruning Shears,Reaper,Threshing Machine,Fruit Picker,Lopper,Shears
359,Legumes,Pea,Bean,Lentil,Chickpea,Soybean,Peanut,Alfalfa,Clovers,Black-eyed Pea
360,Farming Techniques,Plowing,Weeding,Sowing,Fertilizing,Harvesting,Irrigating,Pruning,Transplant,Grafting
361,Farm Buildings,Barn,Silo,Greenhouse,Granary,Outhouse,Fence,Stable,Tool Shed,Chicken Coop
362,Organic Farming,Compost,Crop Rotation,Biocontrol,Green Manure,Permaculture,Mulching,No-till,Fallow,Cover Crop
363,Rice Varieties,Basmati,Jasmine,Sushi,Arborio,Black Rice,Red Rice,Wild Rice,Sweet Rice,Parboiled
364,Grain Storage,Bin,Silo,Bag,Pit,Warehouse,Tarp,Cold Storage,Shed,Container
365,Pest Control,Biocontrol,Insecticide,Herbicide,Fungicide,Trap Crop,Predator Release,Repellent,Bait,Trap
366,Farming Weather,Rain,Drought,Frost,Humidity,Temperature,Winds,Sunlight,Storm,Cloud Cover
367,Farm Chemicals,Insecticide,Herbicide,Fungicide,Pesticide,Fertilizer,Detergent,Adjuvant,Soil Amendment,Growth Regulator
368,Horticultural Plants,Rose,Shrub,Orchid,Lilac,Azalea,Bonsai,Marigold,Jasmine,Tulip
369,Animal Byproducts,Leather,Wool,Milk,Manure,Fat,Horn,Feather,Gelatin,Silk
370,Seasonal Crops,Tomato,Corn,Squash,Pumpkin,Cucumber,Watermelon,Melon,Peppers,Beans
371,Wheat Products,Bread,Pasta,Flour,Couscous,Bulgur,Bran,Germ,Cracker,Semolina
372,Farming Roles,Farmer,Harvester,Planter,Technician,Inspector,Surveyor,Manager,Labourer,Consultant
373,Seed Types,Hybrid,Heirloom,Certified,Organic,Open Pollinated,Treated,Untreated,Pelleted,Coated
374,Agri Technology,Drones,Soil Sensor,Automation,AI Monitoring,Genetic Engineering,Remote Sensing,Hydroponics,Vertical Farming,Precision Agriculture
375,Animal Feeds,Hay,Silage,Grain,Bran,Root Crops,Pasture,Supplements,Forage
376,Legume Types,Alfalfa,Bean,Pea,Lentil,Chickpea,Soybean,Clover,Asparagus Pea,Carob
377,Soil Fertility,Nutrient Cycling,Organic Matter,Crop Rotation,Cation Exchange,Soil pH,Nitrogen Fixation,Soil Structure,Humus Formation,Composting
378,Farm Produce Markets,Wholesale,Retail,Farmers Market,Cooperative,Export,Import,Auction
379,Crop Rotation,Cereal,Legume,Root Crop,Fallow,Green Manure,Vegetable,Grassland,Cover Crop,Pulse Crop
380,Farming Tools,Hoe,Fork,Rake,Spade,Secateurs,Wheelbarrow,Shovel,Pruner,Mattock
381,Poultry Types,Broiler,Layer,Duck,Turkey,Quail,Goose,Guinea Fowl,Peacock,Pheasant
382,Cereal Pests,Armyworm,Aphid,Weevil,Locust,Thrips,Wireworm,Corn Borer,Grasshopper,Leafhopper
383,Agricultural Festivals,Harvest Festival,Ploughing Day,Farmers Day,Rain Dance,Mabon,Lughnasadh,Thanksgiving,Eid al Adha
384,Greenhouse Plants,Tomato,Lettuce,Cucumber,Peppers,Orchid,Strawberry,Basil,Spinach,Chili
385,Farming Challenges,Drought,Flood,Soil Erosion,Pest Infestation,Market Fluctuations,Labour Shortage,Climate Change,Weed Growth,Disease Outbreak
386,Church Architecture,Sanctuary,Altar,Nave,Choir,Transept,Apse,Aisle,Vault,Buttress
387,Religious Figures,Priest,Deacon,Bishop,Cardinal,Monk,Nun,Pope,Pastor,Minister
388,Church Services,Mass,Vespers,Communion,Baptism,Confession,Worship,Homily,Prayer,Procession
389,Religious Symbols,Cross,Dove,Chalice,Bible,Candle,Crucifix,Ichthys,Altar Cloth,Stained Glass
390,Church Music,Organ,Chant,Hymn,Psalm,Choir,Bell,Anthem,Liturgy,Carol
391,Church Items,Tabernacle,Pew,Lectern,Pulpit,Candlestick,Ciborium,Missal,Altar Rail,Sanctuary Lamp
392,Christian Holidays,Easter,Christmas,Advent,Lent,Pentecost,Epiphany,Trinity Sunday,Good Friday,Ascension
393,Church Roles,Usher,Sexton,Altar Server,Choirmaster,Cantor,Cleric,Chaplain,Elder,Deaconess
394,Church Buildings,Cathedral,Chapel,Basilica,Abbey,Monastery,Parish,Rectory,Minster,Cloister
395,Sacred Texts,Bible,Gospel,Epistle,Psalter,Vulgate,New Testament,Old Testament,Apocrypha,Lectionary
396,Religious Rituals,Confirming,Anointing,Consecration,Ordination,Exorcism,Procession,Benediction,Veneration,Penance
397,Church Furnishings,Pulpit,Altar Cloth,Chalice,Ciborium,Paten,Thurible,Altar Rail,Ambry,Credence Table
398,Church Festivals,All Saints,Corpus Christi,Transfigured,Ascension Day,Feast Day,Reformation Day,Michaelmas,Candlemas,Lammas
399,Church Actions,Preach,Pray,Baptize,Confess,Offer,Chant,Sing,Fast,Read Scripture
400,Church Attire,Alb,Stole,Cassock,Chasuble,Surplice,Cope,Mitre,Veil,Scapular
401,Church Music Instruments,Organ,Harp,Flute,Lute,Horn,Bell,Trumpet,Violin,Drum
402,Christian Celebrations,Mass,Service,Ceremony,Sacrament,Communion,Baptism,Wedding,Funeral,Confession
403,Spiritual Concepts,Grace,Faith,Salvation,Redemption,Hope,Charity,Sin,Forgiveness
404,Religious Buildings Interiors,Narthex,Sanctuary,Nave,Chancel,Transept,Choir Loft,Font,Pulpit,Ambulatory
405,Church Services Types,Mass,Liturgy,Vespers,Matins,Compline,Worship,Benediction,Procession,Litany
406,Key Church Objects,Altar,Chalice,Paten,Ciborium,Crucifix,Candle Holder,Tabernacle,Bell,Missal
407,Clerical Titles,Deacon,Priest,Bishop,Cardinal,Pope,Monk,Nun,Pastor,Chaplain
408,Sacraments,Baptism,Communion,Confirmation,Marriage,Ordination,Confession,Anointing the Sick,Eucharist,Wafer
409,Church Architecture Elements,Aisle,Nave,Apse,Vault,Transept,Choir,Clerestory,Narthex,Buttress
410,Religious Texts,Scripture,Bible,Gospel,Epistle,Psalter,Lectionary,Testament,Vulgate,Commentary
411,Church Roles and Titles,Priest,Bishop,Deacon,Cardinal,Pope,Monk,Nun,Pastor,Minister
412,Church Ritual Objects,Censer,Chalice,Ciborium,Paten,Thurible,Candle,Cross,Altar Cloth,Processional Cross
413,Church Music Terms,Hymn,Anthem,Psalm,Chant,Organ,Liturgy,Choir,Caroling,Motet
414,Worship Actions,Pray,Sing,Preach,Benedict,Confess,Baptize,Read Scripture,Fast,Offer
415,Church Festivals and Seasons,Advent,Lent,Easter,Christmas,Pentecost,Epiphany,Good Friday,Ascension Day,All Saints Day
416,Religious Attire,Alb,Cassock,Chasuble,Stole,Surplice,Cope,Mitre,Vestments,Veil
417,Church Interior Features,Sanctuary,Nave,Chancel,Choir Loft,Pulpit,Ambry,Font,Narthex,Transept
418,Christian Denominations,Orthodox,Catholic,Protestant,Lutheran,Methodist,Baptist,Anglican,Presbyterian,Evangelical
419,Spiritual Values,Faith,Hope,Charity,Grace,Love,Salvation,Redemption,Forgiveness,Repentance
420,Church Bells and Instruments,Bell,Organ,Drum,Horn,Trumpet,Harp,Flute,Lute,Violin
421,Religious Texts and Books,Bible,Gospel,Epistle,Old Testament,New Testament,Psalter,Vulgate,Lectionary,Apocrypha
422,Church Building Types,Cathedral,Basilica,Chapel,Abbey,Monastery,Parish,Rectory,Minster,Cloister
423,Christian Celebrations and Observances,Mass,Communion,Baptism,Confession,Worship,Fast,Liturgy,Procession,Benediction
424,Classic Cartoon Characters,Mickey Mouse,Donald Duck,Bugs Bunny,Daffy Duck,Popeye,Scooby Doo,Tom,Jerry,Felix
425,90s Kids Shows,Power Rangers,Kenan and Kel,Hey Arnold,Doug,Rugrats,Clarissa Explains It All,Fresh Prince,Goosebumps,The Wild Thornberrys
426,Puppet Shows,Fraggle Rock,The Muppet Show,The Magic Garden,Pinwheel,Mr Rogers Neighborhood,Salty's Lighthouse,Bear in the Big Blue House,Reading Rainbow
427,Educational Kids Series,Reading Rainbow,Schoolhouse Rock,Cyberchase,Blues Clues,Mister Rogers Neighborhood,Magic School Bus,Arthur,Wild Kratts
428,Nickelodeon Favorites,Spongebob Squarepants,Dora the Explorer,Blues Clues,Fairly OddParents,Rugrats,Hey Arnold,Paw Patrol,Avatar Last Airbender,Loud House
429,Animated Disney Shows,Kim Possible,Darkwing Duck,Recess,Lilo and Stitch,Proud Family,Gargoyles,TaleSpin,Gummi Bears,House of Mouse
430,Children’s Sitcoms,Full House,Even Stevens,Drake and Josh,Hannah Montana,Suite Life of Zack and Cody,Amanda Show,Lizzie McGuire
431,Classic Kids Game Shows,Double Dare,Legends of the Hidden Temple,Nick Arcade,Figure It Out,Where in the World Carmen Sandiego,BrainSurge,Fun House,Wild and Crazy Kids
432,Animal Characters,Arthur,Garfield,Snoopy,Pocoyo,Paddington,Bluey,Clifford,Curious George,Peppa Pig
433,Fantasy Children’s Series,Puff the Magic Dragon,Care Bears,Smurfs,My Little Pony,Banana Splits,Fraggle Rock,Captain Planet,He-Man,Thundercats
434,Children’s Science Shows,Beakman's World,Mystery Science Theater,Magic School Bus,Sid the Science Kid,Brain Games,Odd Squad,Peep and the Big Wide World
435,Storybook Inspired,Peter Rabbit,Fairy Tale Theatre,Margaret Wise Brown,Charlottes Web,Curious George,Paddington Bear,Anne of Green Gables,Corduroy,Little Bear
436,Classic Animated Films,Fantasia,Bambi,Cinderella,Peter Pan,Pinocchio,Jungle Book,Alice in Wonderland,Lion King,Lady and the Tramp
437,PBS Kids Shows,Dragonfly TV,Cyberchase,Kratts Creatures,Martha Speaks,Wild Kratts,WordGirl,Arthur,Clifford the Big Red Dog
438,Children’s Holiday Specials,Grinch Stole Christmas,Rudolph the Red Nosed Reindeer,Frosty the Snowman,Charlie Brown Christmas,Snowman,Santa Claus Comin Town,Olive the Other Reindeer,Polar Express
439,Classic Educational Cartoon Series,Schoolhouse Rock,Counting on Frank,Letter People,McGee and Me,Animated Hero Classics,Reading Rainbow,American Tail,Libertys Kids,Magic School Bus
440,Superhero Kids Shows,Teen Titans,Static Shock,Kid Justice,Spectacular Spider-Man,Kim Possible,Generator Rex,Big Hero 6,Pokemon,Power Rangers
441,Adventure Kids Shows,Kid vs Kat,Avatar Last Airbender,Wild Thornberrys,Secret Saturdays,Recess,Gravity Falls,Pirate Islands,American Dragon Jake Long
442,Classic Children’s Book Adaptations,Berenstain Bears,Clifford the Big Red Dog,Franklin,Little Princess,Paddington Bear,Bear Big Blue House,Corduroy,Pippi Longstocking,Magic Tree House
443,Humorous Kids Shows,Courage the Cowardly Dog,Animaniacs,Rocko's Modern Life,Fairly OddParents,Rugrats,Ed Edd n Eddy,Pinky and the Brain,Shaun the Sheep
444,Science Fiction Kids Shows,Jetsons,Futurama,Code Lyoko,Teenage Robot,ReBoot,Inspector Gadget,Ben 10,Galaxy Rangers,Powerpuff Girls
445,Mystery and Detective Shows,Hardy Boys,Nancy Drew,Enid Blyton,Detective Conan,Scooby Doo,Mystery Files Shelby Woo,Famous Five,Paw Patrol
446,Popular Preschool Series,Teletubbies,Baby Einstein,Barney Dinosaur,Dora Explorer,Blues Clues,Peppa Pig,Mickey Mouse Clubhouse,Shimmer and Shine,Paw Patrol
447,Musical Kids Shows,Wiggles,Mister Rogers Neighborhood,Barney and Friends,LazyTown,Hi-5,Kuu Kuu Harajuku,Big Block Singsong
448,Classic British Children's TV,Thomas Tank Engine,Basil Brush,Bagpuss,Danger Mouse,Clangers,Teletubbies,Postman Pat,Fireman Sam,Gordon Gopher
449,Animated Series from the 80s,He-Man,Transformers,Thundercats,GI Joe,Silverhawks,Voltron,Inspector Gadget,Real Ghostbusters,DuckTales
450,Animal Led Shows,Franklin Turtle,Wild Kratts,Bear Big Blue House,Bluey,Postman Pat,Peppa Pig,Curious George,Babar Elephant,Garfield
451,Seasonal and Nature Shows,Jack Frost,Snowman,Animal Mechanicals,Magic School Bus,Wilderness Explorers,Nature Cat,Wabbit Wampage,Martha Speaks,Rescue Bots
452,Fantasy Adventure Series,Smurfs,Magic School Bus,Fraggle Rock,Care Bears,My Little Pony,Dragon Tales,Arthur,Littlest Pet Shop
453,Classic Animated TV Girls,Buffy Vampire Slayer,Jem and the Holograms,X-Men Evolution,Totally Spies,Daria,Proud Family,Kim Possible,Carmen Sandiego,She-Ra
454,Animal Sidekick Characters,Scooby Doo,Blue,Clifford,Garfield,Porky Pig,Fievel,Mushu,Ren,Stimpy
455,Kids Nature and Science,Wild Kratts,Magic School Bus,Octonauts,Mystery Science Theater,Beakman's World,Reading Rainbow,Peep Big Wide World,National Geographic Kids,Dinosaur Train
456,Classic Animated Musical Series,Little Mermaid,Gargoyles,Tinker Bell,Aladdin,Beauty and the Beast,Jungle Cubs,Pocahontas,Lion Guard,Tangled
457,Board and Card Game Adaptations,Clue Animated Series,Monopoly Animated Series,Game of Life,Uno,Twister,Dice World,Minecraft Kid Version,Pokemon Card Game
458,TV Shows with Time Travel,Magic School Bus,Peabody and Sherman,Bill and Teds Excellent Adventures,Doctor Who Kids,Dora Explorer,Back to the Future Animated Series,Peg Cat,Time Warp Trio,Life with Louie
459,Kids Supernatural Series,Courage Cowardly Dog,Goosebumps,Are You Afraid Dark,Danny Phantom,Ghost and Molly McGee,Fairly OddParents,Haunted Hathaways
460,Animated Science Fiction Series,Voltron,Galaxy Rangers,Reboot,Ulysses 31,Futurama,Kid Cosmic,Rush Force,Lilo and Stitch,Jetsons
461,Popular Educational Shows,Reading Rainbow,Blues Clues,Mister Rogers Neighborhood,Magic School Bus,Arthur,Between Lions,Cyberchase,Sesame Street
462,Friends and Families,Loud House,Rugrats,Fairly OddParents,Hey Arnold,Jetsons,Suite Life Zack Cody,Full House,Big Nate
463,Classic Animated Comedies,Animaniacs,Pinky Brain,Ren and Stimpy,Rockos Modern Life,Simpsons,Futurama,Family Guy,Looney Tunes Show,Tiny Toon Adventures
464,Baking Supplies,FLOUR,SUGAR,YEAST,EGGS,BUTTER,BAKING SODA
465,Cooking Utensils,SPATULA,WHISK,LADLE,TONGS,GRATER,SIEVE
466,Beverages,WATER,JUICE,MILK,SODA,TEA,COFFEE
467,Branches of Biology,ZOOLOGY,BOTANY,GENETICS,ECOLOGY,MICROBIOLOGY,ANATOMY
468,The Solar System,MERCURY,VENUS,EARTH,MARS,JUPITER,SATURN
469,Famous Scientists,EINSTEIN,NEWTON,CURIE,GALILEO,DARWIN,TESLA
470,States of Matter,SOLID,LIQUID,GAS,PLASMA,BOSE-EINSTEIN,CONDENSATE
471,Chemical Elements,HYDROGEN,OXYGEN,CARBON,IRON,GOLD,SILVER
472,Famous Composers,BACH,BEETHOVEN,MOZART,CHOPIN,VIVALDI,TCHAIKOVSKY
473,Music Terms,TEMPO,MELODY,HARMONY,RHYTHM,CHORD,VERSE
474,Record Labels,MOTOWN,DEF JAM,ATLANTIC,INTERSCOPE,COLUMBIA,CAPITOL
475,Countries in Asia,CHINA,INDIA,JAPAN,RUSSIA,INDONESIA,THAILAND
476,Famous Rivers,NILE,AMAZON,YANGTZE,MISSISSIPPI,DANUBE,MEKONG
477,Ancient Civilizations,EGYPT,GREECE,ROME,MESOPOTAMIA,INDUS VALLEY,MAYA
478,World Wars,TRENCH WARFARE,BLITZKRIEG,D-DAY,PEARL HARBOR,HOLOCAUST,ATOM BOMB
479,Famous Rulers,CLEOPATRA,JULIUS CAESAR,ALEXANDER,GENGHIS KHAN,ELIZABETH I,NAPOLEON
480,Painters,DA VINCI,VAN GOGH,PICASSO,REMBRANDT,MONET,DALI
481,Whales,blue whale,humpback,orca,sperm whale,beluga,narwhal,gray whale
482,Shells,conch,scallop,oyster,clam,nautilus,cowrie,abalone
483,Coral Reef,clownfish,anemone,coral,sponge,starfish,sea urchin,crab
484,Deep Sea,anglerfish,viperfish,blobfish,gulper eel,isopod,vampire squid,chimera
485,Boats,submarine,yacht,trawler,kayak,canoe,ferry,tugboat
486,Burgers,big mac,whopper,baconator,quarter pounder,slider,cheeseburger,double stack
487,Pizza Chains,dominos,pizza hut,papa johns,little caesars,sbarro,godfathers,unos
488,Fried Chicken,kfc,popeyes,chick-fil-a,churchs,zaxbys,bojangles,raising canes
489,Taco Joints,taco bell,del taco,chipotle,qdoba,moes,baja fresh,taco johns
490,Fast Food Sides,fries,onion rings,nuggets,coleslaw,biscuits,hash browns,apple pie
491,Drinks,coke,pepsi,sprite,fanta,dr pepper,mountain dew,root beer
492,Sci-Fi,star trek,doctor who,x-files,stranger things,mandalorian,firefly,battlestar
493,Streaming Services,netflix,hulu,hbo max,disney+,prime video,peacock,apple tv
494,Olympic Events,sprint,swim,gymnastics,judo,archery,fencing,rowing
495,School Furniture,desk,chair,whiteboard,locker,bookshelf,podium,table,chalkboard
496,School Rooms,cafeteria,library,gymnasium,principal,nurse,lab,classroom,auditorium
497,Art Colors,red,blue,yellow,green,purple,orange,cyan,magenta
498,Sculpture,clay,marble,bronze,chisel,kiln,pottery,statue,carving
499,Digital Art,pixel,vector,layer,hex,rgb,tablet,stylus,cmyk
500,Web Browsers,chrome,firefox,safari,edge,opera,brave,explorer,netscape
501,Domains,.com,.org,.net,.edu,.gov,.io,.co,.uk
502,Internet Terms,wifi,modem,router,server,cloud,link,bandwidth,cache
503,Email,inbox,spam,draft,sent,reply,attach,forward,subject
504,Internet Actions,download,upload,stream,browse,chat,post,click,scroll
505,Shoe Brands,nike,adidas,puma,reebok,vans,converse,jordan,crocs
506,Shoe Types,sneaker,boot,sandal,loafer,heel,flat,slipper,clog
507,Shoe Parts,sole,lace,tongue,heel,toe,eyelet,insole,upper
508,Boots,combat,cowboy,rain,snow,hiking,chelsea,ankle,wellington
509,Heels,stiletto,wedge,kitten,pump,platform,block,cone,spool
510,Shoe Materials,leather,suede,canvas,rubber,mesh,velvet,satin,patent
511,Construction Terms,foundation,insulation,drywall,joist,rafter,cornice,facade,lintel,stucco,mortar
512,Construction Tools,level,trowel,hammer,drill,saw,wrench,pliers,tape measure,screwdriver,chisel
513,Famous Buildings,eiffel tower,colosseum,taj mahal,empire state,burj khalifa,pantheon,parthenon,louvre
514,Forensic Terms,autopsy,ballistics,fingerprint,toxicology,dna,rigor mortis,lividity,luminol
515,Felonies,murder,arson,burglary,robbery,kidnapping,treason,espionage,perjury
516,Civil Penalties,fine,restitution,injunction,damages,seizure,garnishment,eviction,citation
517,Government Structure,legislative,executive,judicial,congress,senate,parliament,cabinet,ministry
518,Leonardo DiCaprio,titanic,inception,revenant,aviator,departed,romeo juliet,wolf wall street,gatsby
519,Tom Cruise,top gun,mission impossible,jerry maguire,rain man,minority report,oblivion,mummy,jack reacher
520,NASCAR,daytona,talladega,pit stop,drafting,checkered flag,pace car,stock car,burnout
521,Famous Pirates,blackbeard,kidd,morgan,drake,bonny,rackham,roberts,bellamy
522,Declaration of Independence,liberty,pursuit,happiness,colonies,king george,jefferson,hancock,adams,revolution
523,Ben Franklin,kite,key,bifocals,almanac,diplomat,printer,lightning rod,stove
524,Mark Twain,huck finn,tom sawyer,mississippi,hannibal,steamboat,connecticut yankee,prince pauper,frog
525,Nicola Tesla,coil,ac current,radio,induction,wardenclyffe,turbine,x-ray,oscillator
526,Nuclear Weapons,fat man,little boy,tsar bomba,trinity,castle bravo,ivy mike,gadget,demon core
527,Doomsday,apocalypse,armageddon,rapture,fallout,extinction,cataclysm,judgment day,end times
528,Batman,joker,robin,alfred,batmobile,gotham,penguin,riddler,two-face
529,Superman,krypton,lois lane,lex luthor,smallville,daily planet,zod,doomsday,clark kent
530,California,los angeles,san francisco,san diego,sacramento,hollywood,yosemite,malibu,napa
531,Japan,tokyo,kyoto,osaka,mt fuji,sushi,anime,samurai,kimono
532,Airports,heathrow,jfk,lax,ohare,dubai,haneda,charles de gaulle,changi
533,Airplanes,boeing 747,airbus a380,cessna,concorde,spitfire,dreamliner,blackbird,spirit
534,Donuts,glazed,jelly,boston cream,sprinkles,old fashioned,cruller,bear claw,long john
535,Pastries,croissant,danish,eclair,tart,turnover,strudel,cannoli,baklava
536,Cookies,chocolate chip,oatmeal,peanut butter,oreo,macaroon,biscotti,shortbread,ginger snap
537,Power Tools,drill,saw,sander,grinder,router,nail gun,jigsaw,lathe,impact driver
538,Fasteners,screw,nail,bolt,nut,washer,anchor,rivet,staple,hinge
539,Plumbing,pipe,wrench,plunger,faucet,drain,washer,valve,snake,trap
540,Hospital Staff,doctor,nurse,surgeon,orderly,medic,receptionist,pharmacist,radiologist
541,Hospital Rooms,emergency,icu,maternity,waiting,surgery,recovery,pharmacy,cafeteria
542,Hospital Equipment,wheelchair,stretcher,iv drip,scalpel,stethoscope,syringe,monitor,ventilator
543,Symptoms,fever,cough,pain,rash,swelling,nausea,dizziness,chills
544,Casino Table Games,poker,blackjack,roulette,craps,baccarat,pai gow,war,bridge
545,Slots,reel,jackpot,payline,bonus,scatter,wild,progressive,coin,lever
546,Casino Slang,whale,pit boss,high roller,comp,dealer,croupier,shill,marker,ante
547,Casino Destinations,vegas,atlantic city,reno,macau,monte carlo,biloxi,tunica,singapore
548,Dairy,milk,cheese,butter,yogurt,cream,eggs,cottage cheese,sour cream
549,Produce,apple,banana,lettuce,carrot,potato,tomato,onion,pepper
550,Bakery,bread,cake,muffin,bag bagel,donut,pie,cookie,croissant
551,Grocery Aisles,frozen,canned,cereal,baking,spices,pet,cleaning,paper
552,Sesame Street,elmo,big bird,cookie monster,oscar,grover,bert,ernie,count,abby,zoe
553,The Beatles,john,paul,george,ringo,let it be,hey jude,yesterday,help
554,Queen,freddie,brian,roger,john,bohemian rhapsody,radio ga ga,under pressure,we will rock you
555,David Bowie,ziggy stardust,heroes,starman,lets dance,space oddity,rebel rebel,changes,fame
556,Michael Jackson,thriller,bad,beat it,billie jean,smooth criminal,black or white,man in the mirror,heal the world
557,The Beach Boys,good vibrations,surfin usa,god only knows,kokomo,i get around,california girls,barbara ann,help me rhonda
558,CCR,proud mary,bad moon rising,fortunate son,have you ever seen the rain,born on the Bayou,down on the corner,green river,travelin band
559,South Park,cartman,kenny,kyle,stan,butters,randy,chef,garrison,mackey,timmy
560,Oscar Winners,titanic,gladiator,crash,parasite,moonlight,chicago,rocky,patton,amadeus,godfather
561,Kubrick,shining,spartacus,lolita,eyes wide shut,full metal jacket,dr strangelove,barry lyndon,the killing
562,Fincher,fight club,seven,zodiac,gone girl,social network,panic room,mank,the game
563,Nolan,inception,tenet,memento,insomnia,prestige,interstellar,dunkirk,oppenheimer,batman begins
564,Nicktoons,rugrats,doug,ren stimpy,spongebob,catdog,hey arnold,rockos modern life,invader zim,danny phantom
565,Candy,snickers,skittles,twix,kitkat,reeses,starburst,milky way,nerds,smarties,hersheys
566,Obsolete Tech,pager,fax machine,floppy disk,vhs,walkman,typewriter,telegram,cassette,rotary phone,beeper
567,Ancient Tech,wheel,plow,loom,sundial,compass,aqueduct,abacus,gunpowder,papyrus,chariot
568,Doctors,surgeon,pediatrist,dentist,cardiologist,neurologist,ER,oncologist,psychiatrist
569,Teachers,professor,tutor,instructor,lecturer,educator,mentor,coach,principal,dean
570,Judge,gavel,robe,bench,verdict,ruling,sentence,bailiff,chambers,order
571,Lawyer,attorney,counsel,defense,prosecutor,paralegal,brief,objection,motion,appeal
572,Olde Timey Slang,balderdash,poppycock,flummox,kerfuffle,shenanigans,bamboozle,codswallop,malarkey,skedaddle
573,Philosophy,ethics,logic,stoicism,metaphysics,plato,socrates,nietzsche,kant,dualism
574,Physics,gravity,inertia,velocity,momentum,relativity,photon,friction,optics,magnetism
575,Quantum Mechanics,quark,photon,entanglement,double slit,boson,neutrino,antimatter,planck,heisenberg
576,Biology,mitosis,genetics,evolution,osmosis,dna,metabolism,ecosystem,parasite,anatomy
577,Chemistry,molecule,isotope,catalyst,polymer,oxidation,titration,electron,proton,covalent
578,Geography,equator,latitude,longitude,hemisphere,archipelago,isthmus,peninsula,plateau,tundra
579,PE Class,dodgeball,kickball,calisthenics,gymnasium,whistle,laps,pushups,rope climb,scrimmage
580,Robin Williams Movies,Aladdin,Jumanji,Flubber,Hook,Popeye,Robots,Patch Adams,Mrs Doubtfire,Good Will Hunting,Dead Poets Society
581,Mel Brooks Movies,Blazing Saddles,Spaceballs,Young Frankenstein,The Producers,Men in Tights,Silent Movie,High Anxiety,History of the World
582,Jim Henson,Kermit,Labyrinth,Dark Crystal,Fraggle Rock,Sesame Street,Muppet Show,Creature Shop,The Storyteller,Puppeteer
583,The Muppets,Kermit,Miss Piggy,Fozzie Bear,Gonzo,Animal,Swedish Chef,Beaker,Dr Bunsen,Statler,Waldorf
584,Alice in Wonderland,Alice,White Rabbit,Cheshire Cat,Mad Hatter,Queen of Hearts,Caterpillar,Dormouse,March Hare,Tweedledee,Tweedledum
585,Types of Makeup,Lipstick,Mascara,Foundation,Eyeliner,Blush,Concealer,Primer,Bronzer,Highlighter,Eyeshadow
586,Cleaning Supplies,Bleach,Ammonia,Windex,Lysol,Detergent,Vinegar,Comet,Degreaser,Soap,Polish
587,Pots and Pans,Skillet,Wok,Saucepan,Dutch Oven,Stockpot,Griddle,Roaster,Frying Pan,Saute Pan,Crepe Pan
588,Hot Sauces,Tabasco,Sriracha,Cholula,Franks,Tapatio,Texas Pete,Valentina,Crystal,Truff,Sambar
589,Periodic Table,Hydrogen,Helium,Oxygen,Carbon,Nitrogen,Gold,Silver,Iron,Copper,Neon
590,Mary Poppins,Mary,Bert,Umbrella,Carpet Bag,Spoonful of Sugar,Chimney Sweep,Penguins,Kite,Mr Banks,Tuppence
591,Greasy Foods,Pizza,Cheeseburger,French Fries,Fried Chicken,Bacon,Onion Rings,Mozzarella Sticks,Corn Dog,Chimichanga,Poutine
592,Daredevils,Evel Knievel,Houdini,David Blaine,Travis Pastrana,Robbie Knievel,Philippe Petit,Nik Wallenda,Felix Baumgartner,Knoxville,Criss Angel
593,Fraudsters,Bernie Madoff,Charles Ponzi,Frank Abagnale,Jordan Belfort,Elizabeth Holmes,Anna Delvey,Billy McFarland,Simon Leviev,Enron,Wirecard
594,1960s TV,Star Trek,Batman,Bewitched,Addams Family,The Munsters,Twilight Zone,The Flintstones,The Jetsons,Gunsmoke,Gilligans Island
595,Billionaires,Elon Musk,Jeff Bezos,Bill Gates,Warren Buffett,Mark Zuckerberg,Larry Ellison,Michael Bloomberg,Oprah Winfrey,Walton,Arnault
596,Hitchcock Films,Psycho,The Birds,Vertigo,Rear Window,North by Northwest,Rope,Rebecca,Dial M for Murder,Notorious,Spellbound
597,Types of Coffee,Espresso,Latte,Cappuccino,Macchiato,Americano,Mocha,Flat White,Cold Brew,Cortado,Affogato
598,Antiquated Transport,Penny Farthing,Steam Engine,Horse Buggy,Chariot,Zeppelin,Stagecoach,Litter,Rickshaw,Steamship,Carriage
599,Hand Wear,Glove,Mitten,Ring,Bracelet,Watch,Knuckle Duster,Puppet,Henna,Fingerprint,Manicure
600,Cigarette Brands,Marlboro,Camel,Newport,Winston,Lucky Strike,Pall Mall,Kool,Benson Hedges,Dunhill,Parliament
601,Will Smith Movies,Men in Black,Independence Day,Fresh Prince,Aladdin,Happyness,I Am Legend,Bad Boys,Hitch,Ali,King Richard
602,Jim Carrey Movies,Ace Ventura,The Mask,Dumb and Dumber,Truman Show,Liar Liar,Grinch,Bruce Almighty,Eternal Sunshine,Sonic,Riddler
603,Simpsons Characters,Homer,Marge,Bart,Lisa,Maggie,Moe,Burns,Flanders,Skinner,Krusty
604,Playboy Centerfolds,Pamela Anderson,Marilyn Monroe,Jenny McCarthy,Anna Nicole Smith,Carmen Electra,Shannon Tweed,Hefner,Bunny,Mansion,Magazine
605,Famous Recluses,Howard Hughes,JD Salinger,Emily Dickinson,Harper Lee,Greta Garbo,Bobby Fischer,Syd Barrett,Pynchon
606,College Football Champs,Alabama,Georgia,LSU,Clemson,Ohio State,Florida State,Auburn,Michigan,Texas,USC
607,NCAA BB Champs,Duke,UNC,Kansas,Kentucky,UConn,Villanova,Baylor,Virginia,Louisville,UCLA
608,Microsoft,Windows,Office,Xbox,Excel,Word,PowerPoint,Bill Gates,Surface,Outlook,Azure
609,Apple,iPhone,iPad,Mac,Steve Jobs,Siri,Watch,AirPods,iTunes,iOS,MacBook
610,IBM,Watson,Mainframe,ThinkPad,Deep Blue,Selectric,Punch Card,Armonk,Big Blue,Typewriter,Server
611,NATO Members,USA,UK,France,Germany,Canada,Italy,Turkey,Spain,Poland,Norway
612,Joseph Stalin,Dictator,Soviet,Communism,Gulag,Five Year Plan,Man of Steel,Georgia,World War II
613,USSR,Soviet Union,Communism,Cold War,Kremlin,Red Army,Sputnik,Cosmonaut,Sickle,Hammer
614,KGB,Spy,Intelligence,Secret Police,Cold War,Putin,Espionage,Surveillance,Lubyanka
615,Famous Explorers,Columbus,Magellan,Marco Polo,Lewis,Clark,Cook,Shackleton,Armstrong,Vespucci,Hudson
616,COLORS,RED,BLUE,GREEN,YELLOW,ORANGE,PURPLE,PINK,BLACK,WHITE,BROWN,GRAY,GOLD,SILVER,BRONZE,COPPER,TEAL,NAVY,LIME,MAROON,CYAN,RUST,JADE,PLUM,VIOLET,INDIGO
617,BUGS,ANT,BEE,FLY,SPIDER,WORM,LADYBUG,BUTTERFLY,MOSQUITO,BEETLE,MOTH,GNAT,FLEA,TICK,WASP,SLUG,MITE,CATERPILLAR,CENTIPEDE,SNAIL,CRICKET
618,CLOTHES,SHIRT,PANTS,SHOE,HAT,SOCK,DRESS,COAT,JACKET,SCARF,GLOVE,VEST,BELT,BOOT,CAP,HOOD,SHORTS,TSHIRT,SANDALS,SWIMSUIT,SUNGLASSES,SWEATER,MITTENS,SKIRT,JEANS,LEGGINGS,SWEATS,ONESIE,BIB,TANK,BLOUSE
619,KITCHEN ITEMS,FORK,SPOON,KNIFE,PLATE,BOWL,CUP,GLASS,PAN,POT,NAPKIN,DISH,MUG,TRAY,STOVE,SINK,FRIDGE,OVEN,WHISK,LADLE,SPATULA,TOASTER,BLENDER,MIXER
620,SCHOOL ITEMS,PENCIL,PEN,PAPER,BOOK,GLUE,RULER,DESK,CHAIR,TEACHER,MAP,QUIZ,TEST,PASS,MARKER,CRAYON,SCISSORS,CHALK,NOTEBOOK,HIGHLIGHTER,BOARD,BACKPACK,LUNCH,BUS,BELL
621,TOYS,BALL,DOLL,BLOCK,CAR,PUZZLE,KITE,YO-YO,ROBOT,TEDDY BEAR,TOP,BIKE,DRUM,GAME,LEGO,LOGS,TILES,BRICKS,SLINKY,ACTION FIGURE,TRAIN
622,SNACKS,CHIPS,COOKIE,CANDY,POPCORN,CAKE,DONUT,ICECREAM,PRETZEL,NUTS,DIP,BAR,PIE,CRACKER,YOGURT
623,FOOD,EGG,TOAST,CEREAL,PANCAKE,WAFFLE,BACON,SAUSAGE,OATMEAL,SANDWICH,SOUP,SALAD,PIZZA,BURGER,HOTDOG,TACO,FRIES,STEAK,PASTA,RICE,MEATLOAF,MEAT,BUN,JAM,HAM
624,NATURE,TREE,FLOWER,GRASS,LEAF,DIRT,ROCK,SAND,WATER,SKY,SUN,MOON,MUD,DUST,STONE,CLAY,BUSH,PATH,MOSS,FERN,RIVER,LAKE,POND,STREAM
625,SPACE,ROCKET,ASTRONAUT,ALIEN,PLANET,STAR,MOON,SUN,DARK,COLD,VOID,MARS,ORBIT,COMET,METEOR,GALAXY
626,PIRATES,SHIP,MAP,GOLD,PARROT,EYEPATCH,HOOK,SWORD,FLAG,SEA,X
627,MUSIC,SONG,DRUM,GUITAR,PIANO,FLUTE,HORN,BELL,SINGER,GONG,BASS,HARP,LUTE,NOTE,TUNE
628,ART,PAINT,DRAW,COLOR,MARKER,CRAYON,PAPER,CLAY,GLUE,INK,WAX,OIL,DYE,TAPE,CANVAS,SKETCH,BRUSH,EASEL,PENCIL
629,SIZES,BIG,SMALL,TALL,SHORT,LONG,WIDE,THIN,FAT,HUGE,TINY,GIANT,LARGE,LITTLE,MINI,MICRO
630,SPEEDS,FAST,SLOW,QUICK,RAPID,SWIFT,TURTLE,SNAIL,CHEETAH,STOP,GO,RACE,DASH,ZOOM,CRAWL,PLOD,DELAY,LAG
631,CAMPING,TENT,FIRE,WOOD,SLEEPING BAG,FLASHLIGHT,S MORES,HIKE,LANTERN,COMPASS,CANTEEN,BACKPACK,BOOTS
632,BEACH,SAND,OCEAN,SHELL,WAVE,TOWEL,UMBRELLA,BUCKET,SPADE,CRAB,GULL,DUNE,KELP,RAFT,FLOAT,SWIM,SUN
633,PARTY,CAKE,BALLOON,GIFT,CANDLE,GAME,FRIENDS,MUSIC,DANCE,CARD,HAT,STREAMER,CONFETTI
634,HALLOWEEN,GHOST,WITCH,PUMPKIN,CANDY,COSTUME,BAT,SPIDER,SKELETON,MONSTER,DARK,SCARE,TRICK
635,PLAYGROUND,SLIDE,SWING,SANDBOX,SEESAW,LADDER,BENCH,BARS,RING,FORT,MERRY GO ROUND,TUNNEL,CLIMB,TAG,SKIP,HIDE,SEEK
636,CIRCUS,CLOWN,LION,TENT,ACROBAT,POPCORN,TICKET,MAGIC,SHOW,RING
637,BIRTHDAY,CAKE,CANDLE,CARD,PARTY,GIFT,AGE,YEAR,BALLOONS,GAMES,FRIENDS,SONG
638,MONEY,COIN,DOLLAR,BANK,PENNY,QUARTER,DIME,CASH
639,MAIL,LETTER,STAMP,BOX,CARD,PACKAGE,MAILMAN,TRUCK
640,LIBRARY,BOOK,READ,QUIET,SHELF,CARD,DESK,STORY,COMPUTER
641,MOVIES,POPCORN,SEAT,SCREEN,TICKET,CANDY,FILM,SHOW,SNACKS,SODA,NACHOS,PRETZEL,SLUSHIE
642,DOCTOR,SHOT,MEDICINE,NURSE,SICK,HEALTH,CHECKUP,BANDAGE,PILL,CHECK,WAIT
643,DENTIST,TEETH,BRUSH,FLOSS,CHAIR,SMILE,CLEAN,OPEN
644,FIRE STATION,TRUCK,HOSE,LADDER,WATER,ALARM,POLE,HELMET
645,POLICE,CAR,BADGE,UNIFORM,HELP,SAFETY,SIREN,LIGHTS
646,PICNIC,BASKET,BLANKET,SANDCH,ANT,PARK,SUN,FOOD,APPLE,GRAPE,JUICE,COOKIE
647,BAKING,FLOUR,SUGAR,EGG,MILK,MIX,BOWL,OVEN,YEAST,BUTTER,SODA
648,READING,BOOK,PAGE,WORD,PICTURE,STORY,LIBRARY,LOOK
649,DIRECTIONS,UP,DOWN,LEFT,RIGHT,IN,OUT,OVER,UNDER,EAST,WEST,BACK,NEAR
650,PLACES,HOME,SCHOOL,STORE,PARK,ZOO,BEACH,FARM,TOWN,CITY,SHOP
651,FLYING THINGS,BIRD,PLANE,KITE,BEE,BUTTERFLY,BAT,BALLOON,FLY,WASP,OWL,DUCK,CLOUD
652,SWIMMERS,FISH,WHALE,DUCK,FROG,TURTLE,DOG,SHARK,SEAL,CRAB
653,WHEELED ITEMS,CAR,BIKE,BUS,TRUCK,SKATE,WAGON,SCOOTER,VAN,CART,TRAIN
654,GROWING THINGS,BABY,PUPPY,KITTEN,FLOWER,TREE,PLANT,HAIR,GRASS,NAIL,SEED
655,SKY OBJECTS,SUN,MOON,STAR,CLOUD,BIRD,PLANE,KITE,RAIN,PLANET,COMET,DARK,SPACE,RAINBOW
656,HOUSE ITEMS,DOOR,WINDOW,WALL,FLOOR,ROOF,LIGHT,ROOM
657,BABY ANIMALS,PUPPY,KITTEN,CHICK,CALF,FOAL,LAMB,CUB,DUCKLING
658,SOFT THINGS,PILLOW,COTTON,FEATHER,CLOUD,FUR,VELVET,SILK,BLANKET,BUNNY,MOSS
659,LOUD THINGS,SIREN,DRUM,THUNDER,SCREAM,TRUMPET,FIREWORK,ALARM,HORN,YELL,BANG,CRASH,BARK
660,STICKY THINGS,GLUE,TAPE,HONEY,SYRUP,GUM,STICKER,JAM,PASTE,SAP
661,HAPPY THINGS,SMILE,LAUGH,HUG,GIFT,FRIEND,PLAY,WIN
662,SAD THINGS,CRY,TEAR,FROWN,HURT,LOSE,SICK,MISS
663,SCARY THINGS,GHOST,MONSTER,DARK,SPIDER,SNAKE,STORM,NIGHTMARE
664,FUNNY THINGS,JOKE,CLOWN,TICKLE,SILLY,GIGGLE,PRANK,LAUGH
665,FRIENDS,PAL,BUDDY,MATE,BESTIE,PEER,CLASSMATE,NEIGHBOR
666,BUILDINGS,HOUSE,APARTMENT,BARN,CASTLE,TOWER,SHED,CABIN,HUT,COOP
667,CAR PARTS,WHEEL,DOOR,SEAT,HORN,LIGHT,TIRE,WINDOW,TRUNK,KEY,HOOD
668,COMPUTER,SCREEN,MOUSE,KEY,PAD,CORD,GAME,WEB,CLICK
669,PHONE,APP,CALL,TEXT,GAME,PIC,CAM,RING,TOUCH
670,ICECREAM FLAVORS,VANILLA,CHOCO,STRAWBERRY,MINT,CHIP,COOKIE,BERRY,OREO,NUTS,FUDGE,FRUIT,SPRINKLES,COFFEE
671,SANDWICH PARTS,BREAD,MEAT,CHEESE,LETTUCE,TOMATO,MAYO,PICKLE
672,SHINY THINGS,SUN,STAR,LAMP,GOLD,GEM,LIGHT,MOON,FIRE,SILVER,MIRROR,GLASS,WATER,EYE,COIN
673,BOUNCY THINGS,BALL,KANGAROO,BUNNY,POGO,RUBBER,EGG,FROG,SPRING,JUMP,HOP
674,MELTING THINGS,ICE,SNOW,CANDLE,BUTTER,CHEESE,WAX,CANDY,CHOCO,FROST
675,MYTHICAL PLACES,AGARTHA,ARCADIA,ASGARD,ATLANTIS,AVALON,AXIS MUNDI,CAMELOT,CIBOLA,COCKAIGNE,DORADO,EDEN,EL DORADO,HELL,HEAVEN,HEL,HYPERBOREA,JOTUNHEIM,LEMURIA,LOTHLORIEN,MEROPIS,MOUNT OLYMPUS,MUSPELHEIM,NIFLHEIM,OLYMPUS,PANDEMONIUM,PURGATORY,SHAMBHALA,SHANGRI LA,SVARTALFHEIM,TARTARUS,TROY,UNDERWORLD,UTOPIA,VALHALLA,VANAHEIM,XANADU,YGGDRASIL,ZION
676,FAST FOOD CHAINS,BURGER KING,WENDY’S,MCDONALD'S,TACO BELL,SUBWAY,KFC,PIZZA HUT,DOMINO'S,CHIPOTLE,ARBYS,DUNKIN,SONIC
677,SEASONS,SPRING,SUMMER,FALL,WINTER,AUTUMN
678,RIGHTS,FREEDOM,JUSTICE,EQUALITY,DIGNITY,PEACE,LAW,CITIZENSHIP
679,EVOLUTION,HOMO,HABILIS,ERECTUS,NEANDERTHAL,SAPIENS,FLORESIENSIS,RUDOLFENSIS,SELECTION,DRIFT,SPECIATION,ADAPTATION,PHYLOGENY,CLADISTICS,HOMOLOGY
680,CULTURAL EXPRESSIONS,MUSIC,DANCE,THEATER,STORY,PAINTING,POETRY,FESTIVAL
681,LIFE STAGES,INFANT,CHILD,TEEN,ADULT,SENIOR,ELDERLY,YOUTH
682,SOCIAL STRUCTURES,FAMILY,COMMUNITY,TRIBE,NATION,STATE,CLUB,UNION
683,EMOTIONS,JOY,GRIEF,ENVY,PRIDE,GUILT,LOVE,SURPRISE
684,HOMINIDS,AUSTRALOPITHECUS,HOMO,HABILIS,ERECTUS,SAPIENS,NEANDERTHAL,DENISOVAN
685,NEEDS,FOOD,WATER,SHELTER,CLOTHING,SLEEP,HEALTH,LOVE
686,BODY SYSTEMS,CIRCULATORY,RESPIRATORY,NERVOUS,DIGESTIVE,MUSCULAR,SKELETAL,ENDOCRINE
687,CULTURES,WESTERN,EASTERN,INDIGENOUS,MEDITERRANEAN,NOMADIC,URBAN,RURAL
688,SOCIAL ROLES,LEADER,FOLLOWER,GUARDIAN,HEALER,TEACHER,WORKER,ARTIST
689,VALUES,HONESTY,RESPECT,RESPONSIBILITY,KINDNESS,PATIENCE,COURAGE,HARMONY
690,COMMUNICATION,LANGUAGE,GESTURE,WRITING,ART,MUSIC,SPEECH,TECHNOLOGY
691,ORIGINS,AFRICA,EVOLUTION,HOMINID,FOSSIL,DNA,ANCESTOR,MIGRATION
692,ACTIVITIES,RUNNING,JUMPING,SWIMMING,CLIMBING,FISHING,HUNTING,GATHERING
693,SOCIETY,FAMILIES,FRIENDSHIP,RELIGION,WORK,LAW,POLITICS,EDUCATION
694,KNOWLEDGE,SCIENCE,HISTORY,PHILOSOPHY,MATHEMATICS,LITERATURE,ART,RELIGION
695,HEALTH,DISEASE,TREATMENT,VACCINATIONS,EXERCISE,DIET,MEDICINE,REST
696,JOURNEY,MIGRATION,SETTLEMENT,EXPLORATION,TRADE,WAR,PEACE,INNOVATION
697,ETHICS,JUSTICE,TRUTH,FREEDOM,EQUALITY,RESPONSIBILITY,COMPASSION,INTEGRITY
698,CREATIVITY,ART,MUSIC,LITERATURE,DANCE,THEATER,DESIGN,ARCHITECTURE
699,CONFLICT,WAR,PEACE,TREATY,DISPUTE,NEGOTIATION,ALLIANCE,MEDIATION
700,TRADITIONAL CLOTHING,KIMONO,SARI,KILT,DUPATTA,CAFTAN,BOUBOU,DIRNDL
701,FOLKTALES,MERMAID,DRAGON,OGRE,FAIRY,TROLL,ELF,GIANT
702,ART TECHNIQUES,OIL,WATERCOLOR,FRESCO,ACRYLIC,ETCHING,PASTEL,MOSAIC
703,DANCES,TANGO,SALSA,BALLET,FLAMENCO,HIP HOP,CHA CHA,FOXTROT
704,MYTHOLOGY,ZEUS,THOR,ANUBIS,HERA,SHIVA,ODIN,ATHENA
705,POTTERY,CLAY,GLAZE,KILN,JARS,VASES,BOWLS,PITCHER
706,WRITING SYSTEMS,LATIN,CYRILLIC,HANZI,DEVANAGARI,ARABIC,RUNES,HEBREW
707,CUISINES,ITALIAN,THAI,MEXICAN,FRENCH,JAPANESE,GREEK,ETHIOPIAN
708,PHILOSOPHIES,STOICISM,EXISTENTIALISM,BUDDHISM,CONFUCIANISM,TAOISM,NIHILISM,UTILITARIANISM
709,THEATRE TYPES,TRAGEDY,COMEDY,OPERA,MUSICAL,PANTOMIME,IMPROV,BALLET
710,TRADITIONAL GAMES,CHESS,GO,CHECKERS,BACKGAMMON,DOMINOES,MAHJONG,BRIDGE
711,POETS,SHAKESPEARE,MAYA ANGELOU,EMILY DICKINSON,ROBERT FROST,RUMI,WHITMAN,SHELLEY
712,PAINTINGS,GUERNICA,STARRY NIGHT,THE SCREAM,MONA LISA,THE NIGHT WATCH,THE KISS,THE PERSISTENCE OF MEMORY
713,PHILANTHROPISTS,GATES,CARNEGIE,ANGELOU,ROCKEFELLER,CHAVEZ,KING,OBAMA
714,SCULPTORS,MICHELANGELO,DONATELLO,BERNINI,RODIN,BRANCUSI,MOORE,CANOVA
715,CEREMONIES,WEDDING,FUNERAL,GRADUATION,BAPTISM,BAR MITZVAH,CORONATION,ANNIVERSARY
716,HAIRSTYLES,BRAIDS,DREADLOCKS,BUN,PIXIE,PONYTAIL,PERM,AFRO
717,COMIC GENRES,MANGA,SUPERHERO,GRAPHIC NOVEL,WEBCOMIC,FANTASY,SCI FI,MYSTERY
718,ARCHITECTURAL LANDMARKS,EIFFEL TOWER,COLOSSEUM,PYRAMIDS,GREAT WALL,TAJ MAHAL,STONEHENGE,SAGRADA FAMILIA
719,CALLIGRAPHY STYLES,ITALIC,GOTHIC,COPPERPLATE,CURSIVE,SUMI,UNCIAL,SPENCERIAN
720,CULTURAL FOODS,BAGUETTE,TAMALE,DOSA,DUMPLING,PAELLA,CURRY,FUFU
721,POETIC FORMS,SONNET,HAIKU,LIMERICK,FREE VERSE,ODE,BALLAD,ACROSTIC
722,FASHION BRANDS,NIKE,ADIDAS,PUMA,REEBOK,UNDER ARMOUR,NEW BALANCE,ASICS
723,FOOD CHAINS,MCDONALD'S,KFC,SUBWAY,BURGER KING,WENDY'S,DUNKIN',TACO BELL
724,BEVERAGE BRANDS,COCA COLA,PEPSI,RED BULL,SPRITE,FANTA,DR PEPPER,MOUNTAIN DEW
725,SMARTPHONES,IPHONE,GALAXY,PIXEL,NOKIA,ONEPLUS,HUAWEI,MOTOROLA
726,SPORTS CARS,FERRARI,LAMBORGHINI,MCLAREN,PORSCHE,ASTON MARTIN,JAGUAR,BUGATTI
727,COSMETICS,L’ORÉAL,MAYBELLINE,ESTEE LAUDER,REVLON,CLINIQUE,COVERGIRL,SEPHORA
728,LUXURY BRANDS,GUCCI,PRADA,CHANEL,CARTIER,VERSACE,BURBERRY,DIOR
729,STREAMING PLATFORMS,NETFLIX,AMAZON PRIME,HULU,DISNEY PLUS,HBO MAX,APPLE TV,PEACOCK
730,HOME APPLIANCES,WHIRLPOOL,GE,KITCHENAID,BOSCH,LG,ELECTROLUX,SAMSUNG
731,OUTDOOR EQUIPMENT,THE NORTH FACE,COLUMBIA,MARMOT,PATAGONIA,REI,ARC'TERYX,EDDIE BAUER
732,AIRLINES,DELTA,EMIRATES,LUFTHANSA,QATAR AIRWAYS,BRITISH AIRWAYS,UNITED AIRLINES,AMERICAN AIRLINES
733,ONLINE SHOPPING,AMAZON,EBAY,ETSY,WALMART,ALIEXPRESS,BEST BUY,TARGET
734,PET FOOD,PEDIGREE,WHISKAS,BLUE BUFFALO,SCIENCE DIET,ROYAL CANIN,IAMS,NUTRO
735,INSURANCE,GEICO,PROGRESSIVE,STATE FARM,ALLSTATE,LIBERTY MUTUAL,METLIFE,AFLAC
736,TECH GADGETS,FITBIT,GOPRO,KINDLE,APPLE WATCH,SONY PLAYSTATION,NINTENDO SWITCH,XIAOMI
737,COFFEE BRANDS,STARBUCKS,DUNKIN',PEET’S COFFEE,CARIBOU,TIM HORTONS,COSTA COFFEE,LAVAZZA
738,BEAUTY PRODUCTS,NEUTROGENA,OLAY,NIVEA,DOVE,CETAPHIL,LAKMÉ,THE BODY SHOP
739,TECH ACCESSORIES,LOGITECH,SONY,ANKER,BEATS,SKULLCANDY,JBL,BOSE
740,HOUSEHOLD CLEANERS,LYSOL,CLOROX,PINE SOL,CASCADE,AJAX,MR. CLEAN,DAWN
741,SNACK BRANDS,LAYS,PRINGLES,CHEETOS,DORITOS,RUFFLES,GOLDFISH,CAMEL
742,TRAVEL GEAR,SAMSONITE,TUMI,AMERICAN TOURISTER,RICARDO,BRIGGS & RILEY,TRAVELPRO,DELSEY
743,HEALTH FOODS,KIND BAR,KASHI,BOB’S RED MILL,CLIF BAR,ORGAIN,BLUE DIAMOND,FAGE
744,AUTOMOTIVE PARTS,BOSCH,BRIDGESTONE,MOBIL 1,CASTROL,GOODYEAR,MICHELIN,PIRELLI
745,DAIRY BRANDS,CHOBANI,YOPLAIT,DANNON,FAGE,MILKLAND,STONYFIELD,HORIZON
746,CHILDREN’S TOYS,LEGO,HASBRO,MATTEL,FISHER PRICE,PLAYMOBIL,NERF,BARBIE
747,STREAMING DEVICES,ROKU,CHROMECAST,FIRE TV,APPLE TV,NVIDIA SHIELD,XIAOMI MI BOX,TIVO
748,FINANCIAL SERVICES,VISA,MASTERCARD,PAYPAL,AMERICAN EXPRESS,DISCOVER,CHASE,CITI
749,KITCHENWARE,PAMPERED CHEF,CUISINART,KEURIG,INSTANT POT,VITAMIX,LODGE,CALPHALON
750,PERFUME,CHANEL,DIOR,TOM FORD,CALVIN KLEIN,GUCCI,YVES SAINT LAURENT,JO MALONE
751,BICYCLE BRANDS,TREK,SPECIALIZED,GIANT,CANNONDALE,BMC,RALEIGH,SCOTT
752,MEN’S GROOMING,OLD SPICE,GILLETTE,NIVEA,BEARDBRAND,SUAVE,AMERICAN CREW,HARRY’S
753,FAST CASUAL,CHIPOTLE,PANDA EXPRESS,SHAKE SHACK,PANERA BREAD,MOE’S,FIVE GUYS,BLAZE
754,HERBIVORES,TRICERATOPS,STEGOSAURUS,ANKYLOSAURUS,BRACHIOSAURUS,EDMONTOSAURUS,PARASAUROLOPHUS,IGUANODON
755,FOSSIL TYPES,BONE,TOOTH,CLAW,TRACK,FEATHER IMPRESSION,SKULL,SHELL
756,PERIODS,TRIASSIC,JURASSIC,CRETACEOUS,PERMIAN,CARBONIFEROUS,DEVONIAN,SILURIAN
757,EXTINCTION CAUSES,ASTEROID,VOLCANOES,CLIMATE CHANGE,SEA LEVEL,PREDATION,DISEASE,COMPETITION
758,BIOME TYPES,JUNGLE,LAKE,DESERT,COAST,TUNDRA,FOREST,SWAMP
759,CLASSIC BANDS,BEATLES,ROLLING STONES,LED ZEPPELIN,QUEEN,PINK FLOYD,THE WHO,AC DC
760,ROCK INSTRUMENTS,GUITAR,DRUMS,BASS,KEYBOARD,MICROPHONE,AMPLIFIER,PEDAL,DRUMSTICKS
761,ROCK GENRES,PUNK,HARD ROCK,GRUNGE,METAL,PROGRESSIVE,ALTERNATIVE,INDIE
762,ROCK LEGENDS,MICK JAGGER,FREDDIE MERCURY,DAVID BOWIE,JIMI HENDRIX,KURT COBAIN,JANIS JOPLIN,BRUCE SPRINGSTEEN,ELVIS
763,ICONIC ALBUMS,SGT PEPPER,DARK SIDE,ABBEY ROAD,BACK IN BLACK,THRILLER,NEVERMIND,RUMOURS,HOTEL CALIFORNIA
764,ROCK VENUES,WEMBLEY,FILLMORE,CBGB,RED ROCKS,MARQUEE,WHISKY A GO GO,ROYAL ALBERT HALL
765,ROCK FESTIVALS,WOODSTOCK,GLASTONBURY,ISLE OF WIGHT,MONTEREY,COACHELLA,LOLLAPALOOZA,BURNING MAN
766,FAMOUS ROCK SONGS,STAIRWAY TO HEAVEN,BOHEMIAN RHAPSODY,SMOKE ON WATER,HOTEL CALIFORNIA,IMAGINE,HIGHWAY TO HELL,LIKE A ROLLING STONE
767,ROCK APPAREL,LEATHER JACKET,DENIM JEANS,BAND T SHIRT,BANDANA,STUDDED BELT,COMBAT BOOTS,SUNGLASSES
768,ROCK BEHAVIORS,HEADBANG,GUITAR SOLO,MOSHING,SCREAMING,STAGE DIVE,ENCORE,JAM SESSION
769,RECORD TYPES,VINYL,LP,EP,SINGLE,COMPILATION,BOX SET,REISSUE
770,ROCK PRODUCERS,GEORGE MARTIN,RICK RUBIN,BRIAN ENO,MICKIE MOST,QUINCY JONES,BOB EZRIN,RICK PARASHAR
771,ROCK MEDIA,MTV,ROLLING STONE,NME,PITCHFORK,GARAGE BAND,SOUNDCLOUD,BILLBOARD
772,ROCK MARKERS,FESTIVAL,TOUR,ALBUM,SINGLE,SETLIST,ENCORE,HEADLINER
773,ROCK TV SHOWS,TOP OF THE POPS,SESSIONS AT WEST 54TH,FAB FOUR ELEVEN,LATER WITH JOOLS,THE OLD GREY WHISTLE TEST,SOUNDSTAGE,BEHIND THE MUSIC
774,ROCK GUITAR TYPES,STRATOCASTER,LES PAUL,TELECASTER,RICKENBACKER,FENDER,JAZZMASTER,SG
775,LEGENDARY CONCERTS,LIVE AID,MONTEREY POP,ISLE OF WIGHT,ALTAMONT,WOODSTOCK,READING FESTIVAL,GLASTONBURY
776,ROCK TECHNIQUES,BENDING,SLIDING,PALM MUTE,VIBRATO,PICKING,STRUMMING,HAMMER ON
777,VOCAL STYLES,SCREAMING,CROONING,RASPING,WHISPERING,SHOUTING,SINGING,GROWLING
778,GUITAR BRANDS,FENDER,GIBSON,IBANEZ,EPIPHONE,PRS,GRETSCH,JACKSON
779,ROCK DRUMMERS,BONHAM,PEART,KEEF,RICHARDS,GROHL,STARR,MOORE,MOON,BAKER,BARKER
780,ROCK BASSISTS,FLEA,ENTWISTLE,PAUL MCCARTNEY,GEDDY LEE,JOHN PAUL JONES,CLIFF BURTON,LEMMY
781,ROCK KEYBOARDISTS,RAY MANZAREK,JON LORD,RICK WAKEMAN,ELTON JOHN,GREGG ALLMAN,KEITH EMERSON,TONY BANKS
782,MUSIC STYLES,BLUES ROCK,PSYCHEDELIC,GARAGE ROCK,FOLK ROCK,SOUTHERN ROCK,GLAM ROCK,HARDCORE,POP,JAZZ,RAP,COUNTRY,BLUES,CLASSICAL,REGGAE,METAL,TECHNO
783,ROCK BAND ROLES,VOCALIST,GUITARIST,BASSIST,DRUMMER,KEYBOARDIST,BACKING VOCALS,PRODUCER
784,ROCK PIONEERS,CHUCK BERRY,ELVIS PRESLEY,BUDDY HOLLY,JERRY LEE LEWIS,LITTLE RICHARD,BO DIDDLEY,BB KING
785,ROCK TERMS,RIFF,BRIDGE,CHORUS,VERSE,HOOK,TEMPO,OUTRO
786,FAMOUS ROCK CITIES,SEATTLE,LONDON,NEW YORK,LOS ANGELES,NASHVILLE,DETROIT,MEMPHIS
787,ROCK REFERENCES,MIC STAND,STAGE LIGHTS,GUITAR PICK,SET LIST,FAN CLUB,BACKSTAGE,SOUNDCHECK
788,POPULAR ROCK DUOS,WHITE STRIPES,THE BLACK KEYS,STEVIE NICKS,JIMMY PAGE,HALL & OATES,SIMON & GARFUNKEL,ROXETTE
789,ROCK ICONS,ELVIS,FREDDIE,COBAIN,MORRISON,JAGGER,YOUNG,PLANT
790,ROCK LYRICS THEMES,LOVE,REBELLION,FREEDOM,HEARTBREAK,WAR,PEACE,PARTYING
791,ROCK STYLES,NEW WAVE,POST PUNK,SYNTH ROCK,GARAGE PUNK,MATH ROCK,SURF ROCK,ROCKABILLY
792,ROCK DRUMMING,BASS drum,SNARE,HI HAT,CYMBALS,TOMS,DOUBLE KICK,BRUSHES
793,ROCK TOURS,BUS,VAN,PLANE,CREW,MERCH,MEET AND GREAT,SOUNDCHECK
794,ROCK MEMORABILIA,POSTERS,RECORDS,GUITAR PICK,SETLIST,BACKSTAGE PASS,AUTOGRAPH,TICKET STUB
795,ROCK RADIO STATIONS,KROQ,BBC RADIO 1,ABSOLUTE CLASSIC,PLANET ROCK,XFM,SIRIUS XM,TRIPLE J
796,ROCK DOCUMENTARIES,SOME KIND OF MONSTER,THE LAST WALTZ,SHINE A LIGHT,GIMME SHELTER,ANVIL,IT MIGHT GET LOUD,MUSCLE SHOALS
797,ROCK BATTLES,GUITAR DUEL,SINGING CONTEST,DANCE OFF,BAND FACE OFF,DRUM BATTLE,SOLO SHOWDOWN,JAM BATTLE
798,FOOTBALL TERMS,QUARTERBACK,TACKLE,TOUCHDOWN,FIELD GOAL,HELMET,END ZONE,INTERCEPTION,OFFSIDE,BLITZ
799,BASKETBALL TERMS,DRIBBLE,FREE THROW,REBOUND,THREE POINTER,TIMEOUT,BLOCK,ALLEY OOP,ASSIST,FOUL
800,BASEBALL TERMS,PITCHER,HOME RUN,STRIKE,BASEBALL GLOVE,INNING,BATTER,DOUBLE PLAY,CURVEBALL,OUTFIELD
801,SOCCER ACTIONS,GOAL,CORNER KICK,PASS,DRIBBLE,HEADER,FOUL,KICKOFF,OFFSIDE,PENALTY KICK
802,NFL TEAMS,PATRIOTS,COWBOYS,PACKERS,GIANTS,SEAHAWKS,STEELERS,BRONCOS,DOLPHINS,BUCCANEERS
803,BASEBALL EQUIPMENT,BAT,GLOVE,BALL,HELMET,UNIFORM,BASE,CATCHER MASK,CLEATS,PLATE
804,SPORTS OFFICIALS,REFEREE,UMPIRE,LINESMAN,JUDGE,FLAGGER,OFFICIAL,STARTER,SCORER,TIMEKEEPER
805,NFL POSITIONS,WIDE RECEIVER,RUNNING BACK,LINEBACKER,TIGHT END,CORNERBACK,FULLBACK,KICKER,PUNTER,SAFETY
806,BASEBALL PLAYS,DOUBLE PLAY,HOME RUN,FOUL BALL,STEAL,STRIKEOUT,DUGOUT,BUNT,WALK,TAG OUT
807,HOCKEY TERMS,PUCK,STICK,GOAL,PENALTY BOX,FACEOFF,SUDDEN DEATH,POWER PLAY,OVERTIME,SLAPSHOT
808,OLYMPICS MEDALS,GOLD,SILVER,BRONZE,PODIUM,VICTORY,CEREMONY,AWARD,CHAMPION,RECORD
809,FOOTBALL PLAYS,HUDDLE,SNAP,BLITZ,SCREEN PASS,TRAP,ZONE,SPIKE,MISDIRECTION,FLEA FLICKER
810,BASKETBALL FOULS,PERSONAL,FOUL,TECHNICAL,FLAGRANT,CHARGE,DOUBLE DRIBBLE,TRAVELING,GOALTENDING,BLOCK
811,CYCLING EVENTS,TOUR DE FRANCE,TIME TRIAL,PELOTON,SPRINT,CLIMB,STAGE,BREAKAWAY,DOMESTIQUE,SLIPSTREAM
812,GYMNASTICS EVENTS,FLOOR,VAULT,UNEVEN BARS,BALANCE BEAM,RINGS,PARALLEL BARS,POMMEL HORSE,DISMOUNT,MOUNT
813,SOCCER TACTICS,OFFSIDE TRAP,PRESSING,COUNTERATTACK,MAN MARKING,ZONAL MARKING,PARKING THE BUS,THROUGH BALL,CROSS,SET PIECE
814,HOCKEY EQUIPMENT,PUCK,STICK,HELMET,SKATES,SHOULDER PADS,MOUTHGUARD,GLOVES,GOAL CAGE,NECK GUARD
815,FOOTBALL OFFENSES,SPREAD,OPTION,WEST COAST,RUN AND SHOOT,NO HUDDLE,WILDCAT,PLAY ACTION,SCREEN PASS,BOOTLEG
816,NFL CHAMPIONSHIPS,SUPER BOWL,CONFERENCE CHAMPIONSHIP,DIVISIONAL PLAYOFF,WILD CARD,PRO BOWL,REGULAR SEASON,PRESEASON,DRAFT,TRAINING CAMP
817,CLASSIC VIDEO GAMES,SEGA SATURN,ATARI JAGUAR,NEO GEO,COLECOVISION,INTELLIVISION,VECTREX,BANDAI
818,DEFUNCT CAR BRANDS,HUMMER,PLYMOUTH,OLDSMOBILE,SATURN,DAEWOO,LEYLAND,TALBOT
819,DISCONTINUED FAST FOOD,CHI CHI'S,BURGER CHEF,FOSTER'S FREEZE,RED BARN,HOWARD JOHNSON'S,SNOW WHITE,PEDLEY
820,OBSOLETE CAMERAS,POLAROID,ARGUS,MINOLTA,OLYMPUS,AGFA,KONICA,SANKYO
821,PAST PHONE BRANDS,NOKIA SIEMENS,BLACKBERRY,PALM,MOTOROLA RAZR,KYOCERA,SANYO,ALCATEL
822,DEAD RETAILERS,BLOCKBUSTER,TOYS R US,BORDERS,RADIO SHACK,FANNY FARMER,LINENS N THINGS,CIRCUIT CITY
823,CLASSIC TOY LINES,MICRONAUTS,SILVERHAWKS,HE-MAN,TIGER ELECTRONICS,G.I. JOE,ZOIDS,SHOGUN WARRIORS
824,OLD BEVERAGE BRANDS,BEVERLY,ORBITZ,CRYSTAL PEPSI,TAB,SANTAS OWN,OK SODA,SQUIRT
825,RETRO COMPUTER BRANDS,COMPAQ,AMIGA,PACKARD BELL,TANDY,OSBORNE,ZENITH,DICK SMITH
826,DISCONTINUED SNACK FOODS,PLANTERS CHEEZ BALLS,BUGLES,ORBIT,PB MAX,TANG,QUISP,CRISPIX
827,NO MORE AIRLINES,PIEDMONT,CONTINENTAL AIRLINES,OZARK,MORRIS AIR,WESTERN AIRLINES,NWA,MIDWAY
828,FORGOTTEN FAST FOOD CHAINS,SBARRO,CHI CHI'S,RED ROBIN,HOT SHOPPES,Dog n suds,Pumpkin Patch,HOWARD JOHNSON'S
829,OBSOLETE TECH DEVICES,BETAMAX,VHS,MINIDISC,ZUNE,NEWTON,WEBTV,WALKMAN
830,DEFUNCT FURNITURE RETAILERS,CIRCUIT CITY,LINENS N THINGS,FURNITURE ROW,DOREL,VALUE CITY,LEVITZ,FASHION BUG
831,DISCONTINUED CAR MODELS,PLYMOUTH VOYAGER,HUMMER H2,SATURN VUE,OLDSMOBILE ALERO,TALBOT TAGORA,DAEWOO LANOS,LEYLAND TERRIER
832,PAST SODA BRANDS,SANTAS OWN,OK SODA,CRYSTAL PEPSI,TAB,PEPSI BLUE,FRESCA,BEVERLY
833,DEAD VIDEO GAME CONSOLES,INTELLIVISION,ATARI JAGUAR,COLECOVISION,VECTREX,SEGA SATURN,NEO GEO,3DO
834,DEFUNCT AIRLINES,TWA,PAN AM,EASTERN,BRANIFF,PEOPLE EXPRESS,HAWKER SIDDELEY,ZOOM AIR
835,CLASSIC ELECTRONICS,BEBOX,POLAROID,ARGUS,MINOLTA,KONICA,AGFA,SANKYO
836,DEFUNCT CAR COMPANIES,OLDSMOBILE,PLYMOUTH,SATURN,LEYLAND,TALBOT,DAEWOO,HUMMER
837,TECH BRANDS NO MORE,NORTEL,SUN MICROSYSTEMS,COMPAQ,NETSCAPE,BEBOX,BLACKBERRY,PALM
838,DISCONTINUED TOY LINES,TIGER ELECTRONICS,MICRONAUTS,SILVERHAWKS,G.I. JOE,HE-MAN,ZOIDS,SHOGUN WARRIORS
839,DEAD RETAIL CHAINS,TOYS R US,BORDERS,RADIO SHACK,LINENS N THINGS,CIRCUIT CITY,FANNY FARMER,VALUE CITY
840,CLASSIC CAMERAS,POLAROID,MINOLTA,ARGUS,OLYMPUS,KONICA,AGFA,SANKYO
841,DISCONTINUED AIRLINES,WESTERN AIRLINES,NWA,PIEDMONT,OZARK,CONTINENTAL AIRLINES,MORRIS AIR,MIDWAY
842,OBSOLETE SOFT DRINKS,SANTAS OWN,OK SODA,CRYSTAL PEPSI,TAB,PEPSI BLUE,FRESCA,BEVERLY
843,FADED VIDEO CONSOLES,SEGA SATURN,3DO,NEO GEO,COLECOVISION,INTELLIVISION,ATARI JAGUAR,VECTREX
844,OLD AIRLINE NAMES,TWA,PAN AM,EASTERN,BRANIFF,PEOPLE EXPRESS,HAWKER SIDDELEY,ZOOM AIR
845,PAST COMPUTER BRANDS,COMPAQ,AMIGA,PACKARD BELL,TANDY,OSBORNE,ZENITH,DICK SMITH
846,NO LONGER SOLD SODAS,TAB,ORBITZ,OK SODA,SANTAS OWN,CRYSTAL PEPSI,FRESCA,PEPSI BLUE
847,OLD FAST FOOD CHAINS,CHI CHI'S,BURGER CHEF,FOSTER'S FREEZE,RED BARN,HOWARD JOHNSON'S,SNOW WHITE,PEDLEY
848,DISCONTINUED BEVERAGES,ORBITZ,TAB,CRYSTAL PEPSI,SANTAS OWN,OK SODA,BEVERLY,FRESCA
849,NOBLE GASES,HELIUM,NEON,ARGON,KRYPTON,XENON,RADON,OGANESSON
850,HALOGENS,FLUORINE,CHLORINE,BROMINE,IODINE,ASTATINE,TENNESSINE
851,ALKALI METALS,LITHIUM,SODIUM,POTASSIUM,RUBIDIUM,CESIUM,FRANCIUM
852,ARM BONES,HUMERUS,RADIUS,ULNA,CLAVICLE,SCAPULA,CARPALS,METACARPALS,PHALANGE
853,LEG BONES,FEMUR,TIBIA,FIBULA,PATELLA,TARSAL,METATARSAL,PHALANGE
854,CRANIAL NERVES,OLFACTORY,OPTIC,VAGUS,FACIAL,TRIGEMINAL,TROCHLEAR,ABDUCENS,VESTIBULOCOCHLEAR,GLOSSOPHARYNGEAL,OCULOMOTOR
855,BRAIN LOBES,FRONTAL,PARIETAL,TEMPORAL,OCCIPITAL,INSULA,LIMBIC
856,CLOUD TYPES,CIRRUS,STRATUS,CUMULUS,NIMBUS,ALTO,CIRROSTRATUS,STRATOCUMULUS,ALTOCUMULUS,ALTOSTRATUS,NIMBOSTRATUS,CIRROCUMULUS
857,GEOLOGICAL ERAS,PALEOZOIC,MESOZOIC,CENOZOIC,PRECAMBRIAN,JURASSIC,TRIASSIC,CRETACEOUS,CAMBRIAN,DEVONIAN,PERMIAN,PALEOCENE,EOCENE,OLIGOCENE,MIOCENE,PLIOCENE,PLEISTOCENE,HOLOCENE
858,WIND TYPES,CHINOOK,MISTRAL,SIROCCO,ZEPHYR,TRADE,MONSOON,GALE,HABOOB,SANTA ANA
859,TAXONOMY RANKS,KINGDOM,PHYLUM,CLASS,ORDER,FAMILY,GENUS,SPECIES,DOMAIN
860,PARTICLES,PROTON,NEUTRON,ELECTRON,QUARK,PHOTON,GLUON,BOSON,MUON,TAU,NEUTRINO,FERMION,LEPTON,PHONON,ANYON,GRAVITON
861,MATH CONSTANTS,PI,EULER,GOLDEN RATIO,INFINITY,IMAGINARY,PRIME,AVOGADRO,PLANCK
862,FALLACIES,STRAWMAN,AD HOMINEM,SLIPPERY SLOPE,RED HERRING,CIRCULAR,FALSE DICHOTOMY,SUNK COST
863,PHILOSOPHERS,PLATO,KANT,NIETZSCHE,SARTRE,HUME,LOCKE,DESCARTES,HEGEL,ZENO,CRITO,PHAEDO,TIMAEUS,SOCRATES,ARISTOTLE,ROUSSEAU,VOLTAIRE,SPINOZA,CAMUS
864,SHAKESPEARE,HAMLET,MACBETH,OTHELLO,TEMPEST,LEAR,ROMEO,JULIET,CORIOLANUS,TITUS ANDRONICUS,DREAM,MUCH ADO,TWELFTH NIGHT,AS YOU LIKE IT,ERRORS,HENRY V,RICHARD III,KING JOHN
865,AUSTEN NOVELS,EMMA,PERSUASION,MANSFIELD,NORTHANGER,PRIDE AND PREJUDICE,SENSE AND SENSIBILITY
866,POETIC METERS,IAMBIC,TROCHAIC,ANAPESTIC,DACTYLIC,SPONDAIC,PYRRHIC
867,LITERARY DEVICES,IRONY,METAPHOR,SIMILE,SATIRE,ALLEGORY,HYPERBOLE,ALLITERATION,PERSONIFICATION,ONOMATOPOEIA,SYMBOLISM,IMAGERY
868,OPERA VOICES,SOPRANO,ALTO,TENOR,BASS,BARITONE,MEZZO,CONTRALTO,COUNTERTENOR
869,TEMPO MARKINGS,LARGO,ADAGIO,ANDANTE,ALLEGRO,PRESTO,VIVACE,MODERATO
870,CHESS OPENINGS,SICILIAN,GAMBIT,RUI LOPEZ,CARO KANN,FRENCH,ENGLISH,SCANDINAVIAN,KINGS INDIAN
871,POKER HANDS,ROYAL FLUSH,FULL HOUSE,STRAIGHT,PAIRS,KICKER,ANTE,FLUSH,THREE OF A KIND
872,TAROT CARDS,FOOL,MAGICIAN,EMPRESS,LOVERS,CHARIOT,HERMIT,TOWER,PRIESTESS,EMPEROR,HIEROPHANT
873,ZODIAC CHINESE,RAT,OX,TIGER,RABBIT,DRAGON,SNAKE,HORSE,GOAT,MONKEY,ROOSTER,DOG,PIG
874,GREEK MUSES,CLIO,THALIA,ERATO,URANIA,CALLIOPE,TERPSICHORE,POLYHYMNIA,MELPOMENE,EUTERPE
875,NORSE WORLDS,ASGARD,MIDGARD,JOTUNHEIM,HELHEIM,VANAHEIM,ALFHEIM,NIFLHEIM,MUSPELHEIM
876,ROMAN GODS,JUPITER,JUNO,MARS,VENUS,MERCURY,NEPTUNE,PLUTO,MINERVA,VULCAN
877,US WARS,REVOLUTION,CIVIL,VIETNAM,KOREA,GULF,IRAQ,AFGHAN,1812
878,BRITISH MONARCHS,HENRY,ELIZABETH,VICTORIA,GEORGE,WILLIAM,CHARLES,ANNE,EDWARD,RICHARD
879,EXPLORERS,COLUMBUS,MAGELLAN,COOK,DRAKE,HUDSON,CARTIER,VESPUCCI,LEWIS,CLARK
880,INVENTORS,TESLA,EDISON,BELL,WRIGHT,FORD,MORSE,WHITNEY,GUTENBERG,DA VINCI
881,NOBEL PRIZES,PEACE,PHYSICS,CHEMISTRY,MEDICINE,LITERATURE,ECONOMICS
882,IVY LEAGUE,HARVARD,YALE,PRINCETON,COLUMBIA,BROWN,DARTMOUTH,CORNELL,PENN
883,SEVEN WONDERS,PYRAMID,GARDENS,ZEUS,TEMPLE,MAUSOLEUM,COLOSSUS,LIGHTHOUSE
884,JUPITER MOONS,IO,EUROPA,GANYMEDE,CALLISTO,AMALTHEA,HIMALIA,ELARA
885,SATURN MOONS,TITAN,ENCELADUS,MIMAS,RHEA,DIONE,IAPETUS,TETHYS
886,DWARF PLANETS,PLUTO,ERIS,HAUMEA,MAKEMAKE,CERES,SEDNA,ORCUS,QUAOAR,GONGGONG,SALACIA
887,PROGRAMMING LANGUAGES,PYTHON,JAVA,RUST,RUBY,COBOL,FORTRAN,LISP,SWIFT,C PLUS PLUS,GO,HASKELL,JAVASCRIPT,CSHARP,KOTLIN,TYPESCRIPT,PHP,PERL,SCALA
888,OPERATING SYSTEMS,LINUX,WINDOWS,MACOS,UNIX,DOS,ANDROID,IOS,BSD,SOLARIS,UBUNTU,FEDORA
889,FILE FORMATS,JPEG,PNG,GIF,PDF,MP3,MP4,ZIP,EXE,HTML,JSON,XML,CSV
890,CRYPTOCURRENCIES,BITCOIN,ETHER,RIPPLE,LITECOIN,DOGE,CARDANO,SOLANA,POLKADOT
891,STOCK MARKET,BULL,BEAR,DIVIDEND,EQUITY,OPTION,SHORT,MARGIN,IPO,NASDAQ,DOW JONES,FTSE,NIKKEI,DAX
892,CORPORATE ROLES,CEO,CFO,CTO,COO,CMO,VP,DIRECTOR,MANAGER,CHAIRMAN
893,LEGAL TERMS,PLAINTIFF,DEFENDANT,TORT,HABEAS,SUBPOENA,PERJURY,LIEN,AFFIDAVIT
894,CRIMES,FELONY,TREASON,ARSON,LARCENY,FRAUD,EMBEZZLE,PERJURY,MURDER,ASSAULT
895,PHOBIAS,ACRO,AGORA,CLAUSTRO,Arachno,HYDRO,PYRO,XENO,TRYPO,AERO
896,DOCTOR SPECIALTY,ONCOLOGY,PODIATRY,UROLOGY,NEUROLOGY,CARDIOLOGY,DERMATOLOGY,PEDIATRICS,SURGERY
897,MEDICAL SCANS,MRI,CT,XRAY,ULTRASOUND,PET,EEG,EKG,BIOPSY
898,VITAMINS,RETINOL,THIAMINE,NIACIN,FOLATE,ASCORBIC,CALCIUM,IRON,BIOTIN,RIBOFLAVIN
899,GEM CUTS,PRINCESS,EMERALD,OVAL,PEAR,RADIANT,CUSHION,MARQUISE,BRILLIANT,ASSCHER
900,FABRIC WEAVES,SATIN,TWILL,PLAIN,BASKET,JACQUARD,VELVET,DENIM,POPLIN
901,KNOTS,BOWLINE,HITCH,SQUARE,SHEET,FIGURE,CLOVE,REEF,WINDSOR,SHEEPSHANK
902,BOAT PARTS,HULL,BOW,STERN,PORT,STARBOARD,KEEL,DECK,MAST,RUDDER
903,AIRCRAFT PARTS,FUSELAGE,WING,RUDDER,AILERON,FLAP,COCKPIT,GEAR,ENGINE
904,CAMERA PARTS,LENS,SENSOR,SHUTTER,APERTURE,ISO,FLASH,FOCUS,VIEWFINDER
905,FONTS,SERIF,SANS,ARIAL,TIMES,HELVETICA,COURIER,VERDANA,COMIC SANS
906,COLOR MODELS,RGB,CMYK,HSV,HEX,PANTONE,HSL,LAB
907,SAUCES,HOLLANDAISE,BECHAMEL,VELOUTE,TOMATO,ESPAGNOLE,PESTO,MARINARA,ALFREDO
908,PASTRY DOUGHS,PHYLLO,PUFF,SHORTCRUST,CHOUX,BRIOCHE,SOURDOUGH,DANISH
909,SUSHI FISH,MAGURO,SAKE,HAMACHI,UNAGI,EBI,TAKO,IKURA,UNI
910,CHEESE TYPES,BLUE,BRIE,GOUDA,CHEDDAR,SWISS,FETA,GOAT,HAVARTI,MOZZARELLA
911,WINE TYPES,MERLOT,CABERNET,PINOT,CHARDONNAY,RIESLING,ROSE,SYRAH,SAUVIGNON
912,BEER TYPES,LAGER,ALE,STOUT,PORTER,PILSNER,IPA,WHEAT,SOUR,BOCK
913,COFFEE BEANS,ARABICA,ROBUSTA,LIBERICA,EXCELSA,KONA,JAVA,COLOMBIAN
914,FLOWER PARTS,PETAL,STAMEN,PISTIL,SEPAL,POLLEN,STEM,ROOT,ANTHER
915,BIOMES,TUNDRA,TAIGA,DESERT,SAVANNA,RAINFOREST,GRASSLAND,CHAPARRAL,STEPPE
916,ROCK TYPES,IGNEOUS,SEDIMENTARY,METAMORPHIC,BASALT,GRANITE,LIMESTONE,SANDSTONE
917,MINERALS,QUARTZ,FELDSPAR,MICA,TALC,GYPSUM,CALCITE,PYRITE,DIAMOND
918,FOSSILS,AMMONITE,TRILOBITE,FERN,AMBER,BONE,TOOTH,TRACK,COPROLITE
919,DINOSAUR PERIODS,TRIASSIC,JURASSIC,CRETACEOUS,MESOZOIC,PALEOGENE
920,DINOSAURS,REX,RAPTOR,TRICERATOPS,STEGO,BRONTO,PTERO,ANKYLO,SPINO
921,DOG GROUPS,HERDING,HOUND,TERRIER,SPORTING,WORKING,TOY,NON-SPORTING
922,HORSE BREEDS,ARABIAN,MUSTANG,CLYDESDALE,THOROUGHBRED,APPALOOSA,QUARTER,FRIESIAN
923,CAT FAMILY,LION,TIGER,LEOPARD,JAGUAR,COUGAR,CHEETAH,LYNX,BOBCAT
924,BEAR SPECIES,POLAR,GRIZZLY,PANDA,BLACK,SUN,SLOTH,SPECTACLED,KODIAK
925,WHALE TYPES,BLUE,HUMPBACK,ORCA,SPERM,BELUGA,NARWHAL,GRAY,RIGHT
926,SHARK TYPES,GREAT WHITE,HAMMERHEAD,TIGER,BULL,MAKO,NURSE,WHALE SHARK
927,SNAKE TYPES,COBRA,PYTHON,BOA,VIPER,ANACONDA,MAMBA,CORAL,RATTLESNAKE
928,MARSUPIALS,KANGAROO,KOALA,WOMBAT,POSSUM,TASMANIAN,WALLABY,SUGAR GLIDER
929,PRIMATES,APE,MONKEY,LEMUR,GORILLA,CHIMP,ORANGUTAN,BABOON,GIBBON
930,RODENTS,MOUSE,RAT,SQUIRREL,BEAVER,HAMSTER,GUINEA,CAPYBARA,PORCUPINE
931,RARE EARTHS,SCANDIUM,YTTRIUM,LANTHANUM,CERIUM,YTTERBIUM,NEODYMIUM,THULIUM,PRASEODYMIUM,PROMETHIUM,SAMARIUM,EUROPIUM,GADOLINIUM,TERBIUM,DYSPROSIUM,HOLMIUM,ERBIUM
932,ACTINIDES,THORIUM,URANIUM,PLUTONIUM,AMERICIUM,CURIUM,BERKELIUM,CALIFORNIUM,NEPTUNIUM
933,METALLOIDS,BORON,SILICON,GERMANIUM,ARSENIC,ANTIMONY,TELLURIUM,POLONIUM
934,NONMETALS,HYDROGEN,CARBON,NITROGEN,OXYGEN,PHOSPHORUS,SULFUR,SELENIUM
935,ISOTOPES,PROTIUM,DEUTERIUM,TRITIUM,CARBON-14,URANIUM-235,LEAD-206,IODINE-131
936,PARTICLES SUBATOMIC,QUARK,LEPTON,BOSON,FERMION,HADRON,BARYON,MESON,GLUON,PHOTON
937,LOGIC GATES,AND,OR,NOT,NAND,NOR,XOR,XNOR,BUFFER
938,NETWORK PROTOCOLS,TCP,UDP,IP,HTTP,FTP,SMTP,DNS,DHCP,SSH
939,ANCIENT CITIES,BABYLON,UR,URUK,THEBES,MEMPHIS,NINEVEH,TYRE,CARTHAGE,TROY
940,ROMAN LEGION,CENTURION,LEGATE,TRIBUNE,COHORT,MANIPLE,EAGLE,SCUTUM,GLADIUS
941,GREEK PHILOSOPHY,STOIC,EPICUREAN,CYNIC,SKEPTIC,PLATONIC,SOPHIT,PERIPATETIC
942,FEUDAL JAPAN,SAMURAI,SHOGUN,DAIMYO,RONIN,NINJA,KATANA,BUSHIDO,SEPPUKU
943,MEDIEVAL GUILDS,MASON,SMITH,WEAVER,BAKER,MERCHANT,APPRENTICE,JOURNEYMAN,MASTER
944,VIKING CULTURE,LONGBOAT,RUNE,SAGA,THANE,JARL,VALHALLA,RAID,SHIELD
945,RENAISSANCE ART,PERSPECTIVE,FRESCO,OIL,CHIAROSCURO,SFUMATO,PORTRAIT,LANDSCAPE
946,ENLIGHTENMENT,REASON,SCIENCE,LIBERTY,PROGRESS,TOLERATION,FRATERNITY,CONSTITUTION
947,INDUSTRIAL REV,STEAM,COAL,FACTORY,RAILROAD,TELEGRAPH,TEXTILE,STEEL,UNION
948,COLD WAR,SPUTNIK,WALL,CRISIS,DETENTE,PROXY,NUCLEAR,IRON CURTAIN,NATO
949,INTERNET HISTORY,ARPANET,EMAIL,WWW,BROWSER,DOTCOM,MODEM,DIALUP,SERVER
950,CODING CONCEPTS,LOOP,VAR,FUNCTION,CLASS,OBJECT,ARRAY,STRING,BOOLEAN
951,CYBERSECURITY,FIREWALL,VPN,ENCRYPTION,PHISHING,MALWARE,VIRUS,HACK,TOKEN
952,AI CONCEPTS,NEURAL,LEARNING,DATA,MODEL,ALGORITHM,BOT,TURNING,GPT
953,CRYPTO TERMS,BLOCKCHAIN,WALLET,MINING,GAS,TOKEN,NFT,DEFI,HODL
954,GAMING GENRES,RPG,FPS,RTS,MOBA,MMO,PLATFORMER,ROGUELIKE,SIM
955,ESPORTS GAMES,LEAGUE,DOTA,CSGO,VALORANT,OVERWATCH,FORTNITE,ROCKET LEAGUE,APEX
956,STREAMING TERMS,SUB,DONO,RAID,CHAT,EMOTE,BITRATE,VOD,OBS
957,ANIME GENRES,SHONEN,SHOJO,ISEKAI,MECHA,SLICE,HORROR,SPORTS,MAGIC
958,MANGA TERMS,PANEL,BUBBLE,TANKOBON,DOUJINSHI,SCANLATION,WEEKLY,SERIES
959,KPOP TERMS,IDOL,BIAS,COMEBACK,DEBUT,FANDOM,LIGHTSTICK,TRAINEE,VISUAL
960,MEME FORMATS,CAT,DOGE,PEPE,WOJAK,DRAKE,DISTRACTED,TWO BUTTONS,CHAD
961,SLANG 2020S,RIZZ,CAP,BET,SUS,CRINGE,BASED,GOAT,SIMP
962,COFFEE WAVE,POUROVER,SINGLE,ORIGIN,ROAST,NOTES,ACIDITY,BODY,AEROPRESS
963,CRAFT BEER,IPA,STOUT,SOUR,PORTER,SAISON,PILSNER,LAGER,HOPPY
964,WINE REGIONS,NAPA,BORDEAUX,TUSCANY,RIOJA,CHAMPAGNE,SONOMA,MENDOZA,RHONE
965,CHEESE REGIONS,PARMA,ROQUEFORT,GOUDA,CHEDDAR,MANCHEGO,GRUYERE,BRIE,CAMEMBERT
966,SPICE BLENDS,CURRY,GARAM,CAJUN,TACO,PUMPKIN,ZAATAR,RAS EL HANOUT,FIVE SPICE
967,TEA CEREMONY,MATCHA,BOWL,WHISK,SCOOP,KETTLE,TATAMI,GUEST,SWEET
968,YOGA LIMBS,YAMA,NIYAMA,ASANA,PRANAYAMA,PRATYAHARA,DHARANA,DHYANA,SAMADHI
969,CHAKRAS,ROOT,SACRAL,SOLAR,HEART,THROAT,THIRD EYE,CROWN
970,TAROT SUITS,CUPS,WANDS,SWORDS,PENTACLES
971,POKER VARIANTS,TEXAS,OMAHA,STUD,DRAW,HORSE,RAZZ,BADUGI
972,BACKGAMMON,PIP,POINT,BAR,BEAR,DOUBLE,CUBE,GAMMON,BACK
973,BILLIARDS,CUE,BALL,POCKET,RACK,BREAK,SPIN,CHALK,TABLE
974,BASEBALL STATS,RBI,ERA,AVG,OPS,HR,WHIP,WAR,OBP
975,BASKETBALL STATS,PPG,RPG,APG,SPG,BPG,PER,FG,FT
976,FOOTBALL POS,QB,RB,WR,TE,OL,DL,LB,CB,S
977,SOCCER POS,GK,CB,FB,CDM,CAM,WINGER,STRIKER,CF
978,HOCKEY POS,CENTER,WING,DEFENSE,GOALIE,ENFORCER,GRINDER,SNIPER
979,OLYMPIC RINGS,BLUE,YELLOW,BLACK,GREEN,RED
980,NOBEL FIELDS,PHYSICS,CHEM,MEDICINE,LIT,PEACE,ECON
981,IVY LEAGUES,BROWN,COLUMBIA,CORNELL,DARTMOUTH,HARVARD,PENN,PRINCETON,YALE
982,SEVEN SEAS,ARCTIC,ATLANTIC,INDIAN,PACIFIC,MEDITERRANEAN,CARIBBEAN,GULF
983,SEVEN SINS,LUST,GLUTTONY,GREED,SLOTH,WRATH,ENVY,PRIDE
984,PLATONIC SOLIDS,TETRAHEDRON,CUBE,OCTAHEDRON,DODECAHEDRON,ICOSAHEDRON
985,TAXONOMY,KINGDOM,PHYLUM,CLASS,ORDER,FAMILY,GENUS,SPECIES
986,ATMOSPHERE,TROPO,STRATO,MESO,THERMO,EXO
987,EARTH LAYERS,CRUST,MANTLE,OUTER CORE,INNER CORE
988,ROCK CYCLE,IGNEOUS,SEDIMENTARY,METAMORPHIC,MAGMA,SEDIMENT
989,WATER CYCLE,EVAPORATION,CONDENSATION,PRECIPITATION,COLLECTION,TRANSPIRATION
990,CELL PHASES,INTERPHASE,PROPHASE,METAPHASE,ANAPHASE,TELOPHASE,CYTOKINESIS
991,DNA BASES,ADENINE,THYMINE,CYTOSINE,GUANINE
992,RNA BASES,ADENINE,URACIL,CYTOSINE,GUANINE
993,BLOOD TYPES,A,B,AB,O,POSITIVE,NEGATIVE
994,TEETH TYPES,INCISOR,CANINE,PREMOLAR,MOLAR
995,TASTE BUDS,SWEET,SOUR,SALTY,BITTER,UMAMI
996,NEWTON LAWS,INERTIA,FORCE,ACTION,REACTION
997,THERMODYNAMICS,ENERGY,ENTROPY,ZERO,THIRD
998,STATES MATTER,SOLID,LIQUID,GAS,PLASMA,CONDENSATE
999,WAVE TYPES,RADIO,MICRO,INFRA,VISIBLE,UV,XRAY,GAMMA
1000,QUARKS,UP,DOWN,CHARM,STRANGE,TOP,BOTTOM
1001,LEPTONS,ELECTRON,MUON,TAU,NEUTRINO
1002,BOSONS,GLUON,PHOTON,HIGGS,Z,W
1003,CONSTANTS,C,G,H,E,PI,PHI
1004,UNITS SI,METER,SECOND,KILO,AMPERE,KELVIN,MOLE,CANDELA
1005,PREFIXES SI,MEGA,GIGA,TERA,MICRO,NANO,PICO,FEMTO
1006,GEOMETRY,POINT,LINE,PLANE,ANGLE,SHAPE,SOLID
1007,TRIANGLES,ACUTE,OBTUSE,RIGHT,EQUILATERAL,ISOSCELES,SCALENE
1008,QUADRILATERALS,SQUARE,RECTANGLE,RHOMBUS,TRAPEZOID,KITE,PARALLELOGRAM
1009,POLYGONS,PENTAGON,HEXAGON,HEPTAGON,OCTAGON,NONAGON,DECAGON
1010,CONIC SECTIONS,CIRCLE,ELLIPSE,PARABOLA,HYPERBOLA
1011,CALCULUS,LIMIT,DERIVATIVE,INTEGRAL,SERIES
1012,STATISTICS,MEAN,MEDIAN,MODE,RANGE,VARIANCE,DEVIATION
1013,PROBABILITY,CHANCE,ODDS,EVENT,OUTCOME,SPACE
1014,LOGIC,TRUE,FALSE,AND,OR,NOT,IF,THEN
1015,SETS,UNION,INTERSECT,SUBSET,EMPTY,NULL
1016,FUNCTIONS,DOMAIN,RANGE,INPUT,OUTPUT,GRAPH
1017,ALGEBRA,VARIABLE,CONSTANT,TERM,FACTOR,ROOT
1018,ARITHMETIC,ADD,SUB,MUL,DIV,MOD
1019,NUMBERS,NATURAL,INTEGER,RATIONAL,REAL,COMPLEX
1020,PRIMES,TWO,THREE,FIVE,SEVEN,ELEVEN,THIRTEEN
1021,FIBONACCI,ONE,TWO,THREE,FIVE,EIGHT,THIRTEEN,TWENTYONE
1022,PI DIGITS,THREE,ONE,FOUR,FIVE,NINE,TWO
1023,E DIGITS,TWO,SEVEN,ONE,EIGHT,TWO,EIGHT
1024,ROMAN NUMERALS,I,V,X,L,C,D,M
1025,GREEK LETTERS,ALPHA,BETA,GAMMA,DELTA,OMEGA,PI,SIGMA
1026,HEBREW LETTERS,ALEPH,BET,GIMEL,DALET,HE,VAV
1027,PHONETIC ALPHABET,ALPHA,BRAVO,CHARLIE,DELTA,ECHO,FOXTROT
1028,MORSE CODE,DOT,DASH,SPACE,SIGNAL
1029,BRAILLE,DOT,CELL,RAISED,TOUCH
1030,SIGN LANGUAGE,HAND,FINGER,FACE,GESTURE
1031,PROGRAMMING,CODE,BUG,LOOP,VAR,API,GIT
1032,DATABASES,SQL,TABLE,ROW,COLUMN,KEY,INDEX
1033,HARDWARE,CPU,RAM,DISK,SCREEN,BOARD,CHIP
1034,SOFTWARE,APP,OS,DRIVER,TOOL,GAME,WEB
1035,FILE TYPES,TXT,DOC,PDF,JPG,MP3,ZIP
1036,WEB DEV,HTML,CSS,JS,REACT,NODE,API
1037,MOBILE,IOS,ANDROID,APP,STORE,TOUCH,GPS
1038,CLOUD,AWS,AZURE,GCP,S3,LAMBDA,EC2
1039,AI,ML,DL,NN,NLP,CV,RL
1040,CRYPTO,BTC,ETH,NFT,DAO,WEB3,WALLET
1041,PRIVACY,DATA,COOKIE,TRACK,VPN,TOR,LOG
1042,TECH LAW,GDPR,CCPA,DMCA,PATENT,COPYRIGHT
1043,STARTUP,SEED,ANGEL,VC,IPO,EXIT,UNICORN
1044,AGILE,SCRUM,SPRINT,KANBAN,EPIC,STORY,STANDUP
1045,DEVOPS,CI,CD,DOCKER,K8S,GIT,PIPELINE
1046,TESTING,UNIT,INTEGRATION,E2E,MOCK,STUB,SPY
1047,ARCTIC PEOPLES,INUIT,YUPIK,SAMI,ALEUT,NENETS,CHUKCHI
1048,GLACIAL FEATURES,MORAINE,ESKER,DRUMLIN,KAME,KETTLE,CIRQUE,ARETE,HORN,FJORD,TARN,CREVASSE,SERAC,OUTWASH
1049,SOIL HORIZONS,O HORIZON,A HORIZON,E HORIZON,B HORIZON,C HORIZON,R HORIZON,TOPSOIL,SUBSOIL,BEDROCK,PARENT MATERIAL,HUMUS,ELUVIATION
1050,ATMOSPHERE LAYERS,TROPOSPHERE,STRATOSPHERE,MESOSPHERE,THERMOSPHERE,EXOSPHERE,IONOSPHERE,MAGNETOSPHERE,OZONE LAYER,KARMAN LINE
1051,OCEAN CURRENTS,GULF STREAM,HUMBOLDT,KUROSHIO,LABRADOR,CANARY,BENGUELA,AGULHAS,CALIFORNIA,OYASHIO,EAST AUSTRALIAN,NORTH ATLANTIC,ANTARCTIC CIRCUMPOLAR
1052,STAR TYPES,RED DWARF,WHITE DWARF,NEUTRON STAR,RED GIANT,SUPERGIANT,PULSAR,QUASAR,BROWN DWARF,MAIN SEQUENCE,PROTOSTAR,BINARY,VARIABLE
1053,GALACTIC SHAPES,SPIRAL,ELLIPTICAL,IRREGULAR,BARRED SPIRAL,LENTICULAR,PECULIAR,RING,DWARF SPHEROIDAL,PROLATE
1054,NEBULAE,ORION,EAGLE,CRAB,RING,HELIX,CAT'S EYE,HORSEHEAD,CARINA,LAGOON,TARANTULA,TRIFID,DUMBBELL,VEIL
1055,QUANTUM PHYSICS,ENTANGLEMENT,SUPERPOSITION,TUNNELING,WAVE FUNCTION,UNCERTAINTY,SPIN,QUBIT,COHERENCE,DECOHERENCE,INTERFERENCE,TELEPORTATION
1056,RELATIVITY,TIME DILATION,GRAVITY,SPACETIME,LIGHT SPEED,EVENT HORIZON,SINGULARITY,FRAME DRAGGING,REDSHIFT,LENSING,EQUIVALENCE
1057,LOGICAL FALLACIES,STRAW MAN,AD HOMINEM,SLIPPERY SLOPE,RED HERRING,CIRCULAR,FALSE DICHOTOMY,SUNK COST,EQUIVOCATION,BANDWAGON,APPEAL TO AUTHORITY,TU QUOQUE,POST HOC
1058,COGNITIVE BIASES,CONFIRMATION,ANCHORING,HALO EFFECT,HINDSIGHT,AVAILABILITY,FRAMING,SUNK COST,DUNNING KRUGER,SELF SERVING,NEGATIVITY,OPTIMISM
1059,SORTING ALGORITHMS,BUBBLE,QUICK,MERGE,HEAP,INSERTION,SELECTION,RADIX,SHELL,BOGO,COCKTAIL,TIMSORT,BUCKET
1060,DESIGN PATTERNS,SINGLETON,FACTORY,OBSERVER,STRATEGY,DECORATOR,ADAPTER,FACADE,PROXY,COMMAND,ITERATOR,BUILDER,PROTOTYPE
1061,HTTP METHODS,GET,POST,PUT,DELETE,PATCH,HEAD,OPTIONS,CONNECT,TRACE
1062,SQL COMMANDS,SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER,JOIN,UNION,GRANT,REVOKE,TRUNCATE,INDEX
1063,NOSQL DATABASES,MONGODB,REDIS,CASSANDRA,COUCHDB,DYNAMODB,HBASE,NEO4J,COSMOS,ELASTICSEARCH,FIREBASE,RAVENDB
1064,CLOUD PROVIDERS,AWS,AZURE,GOOGLE CLOUD,ALIBABA,IBM,ORACLE,DIGITAL OCEAN,HEROKU,VULTR,LINODE,HETZNER,RACKSPACE
1065,CYBER ATTACKS,PHISHING,DDOS,MAN IN MIDDLE,SQL INJECTION,XSS,RANSOMWARE,SPOOFING,BRUTE FORCE,ZERO DAY,ROOTKIT,TROJAN,WORM
1066,CRYPTOGRAPHY,AES,RSA,SHA,MD5,PUBLIC KEY,PRIVATE KEY,HASH,SALT,NONCE,CIPHER,ENCRYPTION,DECRYPTION,BLOCKCHAIN
1067,PROGRAMMING LANGS,PYTHON,JAVASCRIPT,JAVA,C++,RUBY,GO,RUST,SWIFT,KOTLIN,TYPESCRIPT,PHP,PERL,SCALA,HASKELL,LUA
1068,WEB TECHNOLOGIES,HTML,CSS,REACT,ANGULAR,VUE,NODE,DJANGO,FLASK,ASP.NET,LARAVEL,SVELTE,BOOTSTRAP,TAILWIND,WEBPACK
1069,MOBILE OS,ANDROID,IOS,WINDOWS PHONE,BLACKBERRY,SYMBIAN,WEBOS,TIZEN,KAIOS,FIRE OS,HARMONY OS
1070,VERSION CONTROL,GIT,SVN,MERCURIAL,CVS,PERFORCE,BAZAAR,TFS,BITKEEPER,FOSSIL,ARCH
1071,AGILE TERMS,SCRUM,KANBAN,SPRINT,BACKLOG,STANDUP,USER STORY,EPIC,VELOCITY,RETROSPECTIVE,BURNDOWN,SCRUM MASTER
1072,TESTING TYPES,UNIT,INTEGRATION,E2E,REGRESSION,PERFORMANCE,LOAD,STRESS,SECURITY,USABILITY,ACCEPTANCE,SMOKE,SANITY
1073,HARDWARE INTERFACES,USB,HDMI,VGA,DVI,DISPLAYPORT,THUNDERBOLT,ETHERNET,SATA,PCIE,SCSI,SERIAL,PARALLEL
1074,FILE SYSTEMS,NTFS,FAT32,EXT4,APFS,HFS+,EXFAT,ZFS,BTRFS,XFS,REISERFS
1075,IMAGE FORMATS,JPEG,PNG,GIF,SVG,WEBP,TIFF,BMP,RAW,HEIF,ICO,PSD,AI
1076,AUDIO FORMATS,MP3,WAV,AAC,FLAC,OGG,WMA,AIFF,ALAC,MIDI,M4A,OPUS
1077,VIDEO FORMATS,MP4,AVI,MKV,MOV,WMV,FLV,WEBM,MPEG,3GP,TS,M4V
1078,FONT STYLES,SERIF,SANS SERIF,MONOSPACE,CURSIVE,FANTASY,SCRIPT,DISPLAY,HANDWRITING,BLACKLETTER,SLAB SERIF
1079,COLOR SPACES,RGB,CMYK,HSL,HSV,HEX,LAB,YUV,PANTONE,GRAYSCALE,SRGB,ADOBE RGB
1080,COUNTRIES,FRANCE,GERMANY,ITALY,SPAIN,UK,POLAND,GREECE,SWEDEN,NORWAY,IRELAND,BELGIUM,CHINA,JAPAN,INDIA,KOREA,VIETNAM,THAILAND,IRAN,IRAQ,ISRAEL,RUSSIA,PERU,CUBA,MALI,CHAD,FIJI,LAOS,OMAN,EGYPT,NIGERIA,KENYA,SOUTH AFRICA,MOROCCO,ETHIOPIA,GHANA,TANZANIA,BRAZIL,ARGENTINA,CHILE,COLOMBIA,VENEZUELA,ECUADOR,BOLIVIA,NETHERLANDS,AUSTRIA,DENMARK,TURKEY,PORTUGAL,HUNGARY,ROMANIA,ICELAND
1081,PLANETS,MERCURY,VENUS,EARTH,MARS,JUPITER,SATURN,URANUS,NEPTUNE,PLUTO
1082,OCEANS,ATLANTIC,PACIFIC,INDIAN,ARCTIC,SOUTHERN
1083,CAR BRANDS,FORD,TOYOTA,HONDA,CHEVY,BMW,AUDI,TESLA,JEEP,DODGE,NISSAN,KIA,MAZDA,SUBARU,MITSUBISHI,SUZUKI,LEXUS,ACURA,INFINITI,MERCEDES,PORSCHE,VOLKSWAGEN,OPEL,MINI,SMART,CADILLAC,BUICK,LINCOLN,JAGUAR,LAND ROVER,BENTLEY,ROLLS ROYCE,ASTON MARTIN,LOTUS,MCLAREN,FERRARI,LAMBORGHINI,MASERATI,FIAT,ALFA ROMEO,PAGANI,LANCIA,ABARTH
1084,DOG BREEDS,BEAGLE,BULLDOG,POODLE,LABRADOR,PUG,BOXER,HUSKY,COLLIE,CORGI,TERRIER,YORKIE,CHIHUAHUA,SHIH TZU,DACHSHUND,DANE,SHEPHERD,RETRIEVER,MASTIFF,ROTTWEILER,SPORTING,HOUND,WORKING,TOY,HERDING
1085,CAT BREEDS,PERSIAN,SIAMESE,BENGAL,RAGDOLL,SPHYNX,MAINE COON,TABBY,BOMBAY,MANX,BIRMAN,SCOTTISH FOLD,BRITISH SHORTHAIR,ABYSSINIAN,BURMESE
1086,BIRD TYPES,EAGLE,HAWK,OWL,PENGUIN,PARROT,FLAMINGO,SWAN,DUCK,ROBIN,SPARROW,CROW,DOVE,JAY,LARK,WREN,TERN,FINCH,CANARY,FALCON
1087,FISH TYPES,SALMON,TUNA,TROUT,BASS,SHARK,GOLDFISH,CLOWNFISH,CATFISH,COD,PIKE,CARP,SOLE,EEL,SHAD,GUPPY,TETRA,MOLLY,BETTA,ANGEL,DISCUS
1088,GEMSTONES,DIAMOND,RUBY,SAPPHIRE,EMERALD,OPAL,TOPAZ,PEARL,GARNET,JADE,ONYX,AGATE,BERYL,AMBER,CORAL
1089,METALS,GOLD,SILVER,COPPER,IRON,STEEL,LEAD,ZINC,TIN,BRONZE,BRASS,PLATINUM
1090,ELEMENTS,OXYGEN,CARBON,HELIUM,NITROGEN,HYDROGEN,NEON,IRON,GOLD,SILVER,ARGON,XENON,RADON,BORON,IODINE
1091,GRAMMAR,NOUN,VERB,ADJECTIVE,ADVERB,PRONOUN,COMMA,PERIOD,COLON,SUBJECT,PREP,CONJ,PART
1092,MOVIE GENRES,ACTION,COMEDY,DRAMA,HORROR,SCI-FI,ROMANCE,THRILLER,WESTERN,FANTASY
1093,INSTRUMENTS,GUITAR,PIANO,DRUM,VIOLIN,FLUTE,TRUMPET,SAXOPHONE,CELLO,BASS,HARP
1094,SPORTS EQUIPMENT,BAT,BALL,GLOVE,HELMET,NET,CLEATS,RACKET,PUCK,STICK,HOOP
1095,OLYMPIC SPORTS,SWIMMING,RUNNING,GYMNASTICS,SKIING,BOXING,JUDO,FENCING,DIVING,ROWING,SPRINT,ARCHERY
1096,TEAM SPORTS,SOCCER,BASEBALL,FOOTBALL,HOCKEY,RUGBY,CRICKET,VOLLEYBALL,BASKETBALL
1097,FAST FOOD,MCDONALDS,BURGER KING,WENDYS,TACO BELL,KFC,SUBWAY,PIZZA HUT,DOMINOS,FIVE GUYS,SHAKE SHACK,IN N OUT,SONIC,CARLS JR,POPEYES,CHICK FIL A,CHURCHS,ZAXBYS,BOJANGLES,RAISING CANES,DEL TACO,CHIPOTLE,QDOBA,MOES,BAJA FRESH,TACO JOHNS
1098,ICE CREAM,VANILLA,CHOCOLATE,STRAWBERRY,MINT,COFFEE,COOKIE DOUGH,ROCKY ROAD,PISTACHIO
1099,BREAKFAST FOODS,EGGS,BACON,TOAST,PANCAKES,WAFFLES,CEREAL,OATMEAL,BAGEL,DONUT
1100,SOUPS,TOMATO,CHICKEN NOODLE,VEGETABLE,CLAM CHOWDER,MISO,MINESTRONE,PEA
1101,SANDWICHES,BLT,CLUB,RUBEN,GRILLED CHEESE,PBJ,SUB,WRAP,BURGER,PANINI
1102,CHEESES,CHEDDAR,SWISS,MOZZARELLA,BRIE,GOUDA,FETA,PARMESAN,BLUE,AMERICAN,CAMEMBERT,PROVOLONE,RICOTTA,HAVARTI
1103,CANDY BARS,SNICKERS,TWIX,KIT KAT,MILKY WAY,HERSHEYS,REESES,CRUNCH,BUTTERFINGER,ALMOND JOY
1104,JEWELRY,RING,NECKLACE,EARRING,BRACELET,WATCH,BROOCH,PENDANT,ANKLET,CHAIN
1105,FOOTWEAR,SNEAKERS,BOOTS,SANDALS,HEELS,FLATS,SLIPPERS,LOAFERS,CLEATS,CLOGS
1106,HATS,CAP,BEANIE,FEDORA,COWBOY,BERET,VISOR,HELMET,TOP HAT,SOMBRERO
1107,FURNITURE,SOFA,TABLE,CHAIR,BED,DRESSER,DESK,BOOKSHELF,CABINET,STOOL,BENCH,SHELF,CHEST,DRAWER
1108,APPLIANCES,OVEN,FRIDGE,DISHWASHER,MICROWAVE,TOASTER,WASHER,DRYER,BLENDER
1109,TOOLS,HAMMER,SCREWDRIVER,WRENCH,SAW,DRILL,PLIERS,LEVEL,TAPE,NAIL
1110,GARDEN TOOLS,SHOVEL,RAKE,HOE,HOSE,MOWER,PRUNER,TROWEL,GLOVES,POT
1111,OFFICE SUPPLIES,PAPER,PEN,STAPLER,TAPE,CLIP,FOLDER,NOTEBOOK,ENVELOPE,PRINTER
1112,COMPUTERS,KEYBOARD,MOUSE,SCREEN,LAPTOP,MONITOR,WIFI,PRINTER,TABLET,DATA,MIC,WEBCAM,SCANNER
1113,STREAMING APPS,NETFLIX,HULU,DISNEY,AMAZON,HBO,SPOTIFY,APPLE,YOUTUBE,PRIME,PEACOCK,PARAMOUNT
1114,VIDEO GAMES,MARIO,ZELDA,SONIC,MINECRAFT,FORTNITE,TETRIS,PACMAN,CALL OF DUTY,HALO,DOOM,OVERWATCH,VALORANT,DESTINY,BATTLEFIELD,FINAL FANTASY,POKEMON,SKYRIM,WITCHER,FALLOUT,PERSONA,ELDEN RING,MASS EFFECT,FIFA,MADDEN,NBA 2K,WWE,UFC
1115,BOARD GAMES,MONOPOLY,CLUE,RISK,SCRABBLE,CHESS,CHECKERS,LIFE,SORRY,UNO,CATAN,TICKET TO RIDE,PANDEMIC,CARCASSONNE,AZUL,WINGSPAN,CODENAMES,SCYTHE
1116,CARD SUITS,HEARTS,DIAMONDS,CLUBS,SPADES
1117,CHESS PIECES,KING,QUEEN,ROOK,BISHOP,KNIGHT,PAWN
1118,RANKS,GENERAL,COLONEL,MAJOR,CAPTAIN,LIEUTENANT,SERGEANT,CORPORAL,PRIVATE
1119,ROYALTY,KING,QUEEN,PRINCE,PRINCESS,DUKE,DUCHESS,BARON,KNIGHT,EMPEROR
1120,MYTHICAL CREATURES,DRAGON,UNICORN,MERMAID,GRIFFIN,PHOENIX,GIANT,ELF,DWARF
1121,SUPERHEROES,BATMAN,SUPERMAN,SPIDERMAN,IRONMAN,HULK,THOR,WONDER WOMAN,FLASH,CAPTAIN AMERICA,BLACK WIDOW,HAWKEYE,PANTHER,AQUAMAN,CYBORG
1122,VILLAINS,JOKER,THANOS,VOLDEMORT,DARTH VADER,LEX LUTHOR,MAGNETO,BOWSER,PENGUIN,RIDDLER,BANE,CATWOMAN,FREEZE,VENOM,GOBLIN,OCTOPUS,SANDMAN,ELECTRO,MYSTERIO
1123,DISNEY PRINCESSES,CINDERELLA,ARIEL,BELLE,JASMINE,MULAN,TIANA,RAPUNZEL,SNOW WHITE
1124,STAR WARS,JEDI,SITH,YODA,LUKE,LEIA,HAN SOLO,CHEWBACCA,DROID,FORCE,OBIWAN,ANAKIN,WINDU,REY,AHSOKA,VADER,MAUL,SIDIOUS,DOOKU,KYLO REN,SNOKE
1125,BEATLES MEMBERS,JOHN,PAUL,GEORGE,RINGO
1126,US PRESIDENTS,WASHINGTON,LINCOLN,KENNEDY,OBAMA,BUSH,CLINTON,TRUMP,BIDEN,NIXON,ROOSEVELT,JEFFERSON,MADISON,MONROE,JACKSON,GRANT,CLEVELAND,WILSON,COOLIDGE,REAGAN
1127,CURRENCIES,DOLLAR,EURO,POUND,YEN,PESO,RUBLE,RUPEE,YUAN,FRANC
1128,CAPITALS,LONDON,PARIS,BERLIN,ROME,MADRID,MOSCOW,ATHENS,DUBLIN,TOKYO,OSLO,LIMA,DOHA,SUVA,KIEV,BEIJING,SEOUL,BANGKOK,HANOI,JAKARTA,MANILA,DELHI,CAIRO,LAGOS,NAIROBI,CAPE TOWN,JOHANNESBURG,CASABLANCA,ACCRA,DAKAR,TORONTO,VANCOUVER,MONTREAL,CALGARY,OTTAWA,EDMONTON,WINNIPEG,QUEBEC,SYDNEY,MELBOURNE,BRISBANE,PERTH,ADELAIDE,CANBERRA,HOBART,DARWIN
1129,US CITIES,NEW YORK,LOS ANGELES,CHICAGO,HOUSTON,PHOENIX,MIAMI,SEATTLE,BOSTON,PHILADELPHIA,ATLANTA,WASHINGTON,CHARLOTTE,ORLANDO,SAN FRANCISCO,LAS VEGAS,DENVER,PORTLAND,SAN DIEGO
1130,RIVERS,NILE,AMAZON,MISSISSIPPI,YANGTZE,DANUBE,THAMES,RHINE,SEINE,ELBE,URAL,PO,DON,LOIRE
1131,MOUNTAINS,EVEREST,K2,FUJI,DENALI,KILIMANJARO,MATTERHORN,RAINIER,ETNA,HOOD,COOK,ROSA,LOGAN,BLANC
1132,DESERTS,SAHARA,GOBI,MOJAVE,ARABIAN,KALAHARI,ATACAMA,ANTARCTIC,KAROO,THAR,NAMIB,NEGEV,SIMPSON,GIBSON
1133,ISLANDS,HAWAII,ICELAND,IRELAND,CUBA,JAMAICA,FIJI,BALI,TAHITI,JAVA,MAUI,OAHU,GUAM,KAUAI,CEBU
1134,LANGUAGES,ENGLISH,SPANISH,FRENCH,GERMAN,CHINESE,JAPANESE,ARABIC,RUSSIAN
1135,RELIGIONS,CHRISTIANITY,ISLAM,JUDAISM,BUDDHISM,HINDUISM,SIKHISM,TAOISM
1136,HOLIDAYS,CHRISTMAS,HALLOWEEN,EASTER,THANKSGIVING,NEW YEARS,VALENTINES,JULY 4TH,LABOR DAY
1137,ZODIAC SIGNS,ARIES,TAURUS,GEMINI,CANCER,LEO,VIRGO,LIBRA,SCORPIO
1138,TIME UNITS,SECOND,MINUTE,HOUR,DAY,WEEK,MONTH,YEAR,DECADE,CENTURY
1139,MEASUREMENTS,INCH,FOOT,YARD,MILE,METER,LITER,GRAM,POUND,OUNCE
1140,MATH SHAPES,CIRCLE,SQUARE,TRIANGLE,RECTANGLE,OVAL,HEXAGON,OCTAGON,CUBE
1141,SCIENCES,BIOLOGY,CHEMISTRY,PHYSICS,GEOLOGY,ASTRONOMY,BOTANY,ZOOLOGY,SOCIO,PSYCH
1142,ORGANS,HEART,BRAIN,LUNG,LIVER,STOMACH,KIDNEY,SKIN,EYE
1143,SENSES,SIGHT,HEARING,TASTE,SMELL,TOUCH
1144,WEATHER,SUNNY,CLOUDY,RAINY,SNOWY,WINDY,STORMY,FOGGY,HAIL,MIST,SMOG,WIND
1145,DISASTERS,QUAKE,FLOOD,TORNADO,HURRICANE,FIRE,DROUGHT,TSUNAMI
1146,TRANSPORTATION,CAR,BUS,TRAIN,PLANE,BOAT,BIKE,SHIP,SUBWAY,TAXI
1147,AIRPORT ITEMS,PASSPORT,TICKET,LUGGAGE,GATE,PLANE,SECURITY,PILOT
1148,HOTEL ITEMS,BED,KEY,ROOM,LOBBY,POOL,MAID,TOWEL,SOAP
1149,BANK ITEMS,MONEY,VAULT,TELLER,CHECK,ATM,LOAN,SAVINGS,CARD
1150,POST OFFICE,STAMP,MAIL,LETTER,BOX,PACKAGE,ENVELOPE,ZIP CODE
1151,LIBRARY ITEMS,BOOK,SHELF,CARD,QUIET,READ,DESK,COMPUTER
1152,MOVIE THEATER,SCREEN,SEAT,POPCORN,SODA,CANDY,TICKET,FILM,AISLE
1153,RESTAURANT,MENU,WAITER,TABLE,CHEF,ORDER,TIP,BILL,FOOD
1154,GROCERY STORE,CART,AISLE,FOOD,CASHIER,BAG,PRODUCE,DELI,DAIRY
1155,CONSTRUCTION,CRANE,DUMP TRUCK,HARD HAT,CONE,DIGGER,CEMENT,BUILD
1156,FARMING,TRACTOR,BARN,FIELD,CROP,COW,PLOW,HAY,SILO
1157,FISHING,ROD,REEL,BAIT,HOOK,BOAT,NET,LAKE,CATCH
1158,CAMPING GEAR,TENT,BAG,FIRE,FLASHLIGHT,COMPASS,KNIFE,PACK,BOOTS
1159,BEACH ITEMS,SAND,SURF,TOWEL,SUNSCREEN,UMBRELLA,BUCKET,BALL
1160,GARDENING,FLOWER,HOE,SEED,SOIL,WATER,RAKE,WEED,GROW
1161,PAINTING,BRUSH,CANVAS,EASEL,PAINT,COLOR,PALETTE,ARTIST
1162,SEWING,NEEDLE,THREAD,CLOTH,BUTTON,PIN,SCISSORS,STITCH
1163,COOKING,PAN,POT,STOVE,OVEN,MIX,BAKE,FRY,BOIL,CHOP
1164,CLEANING,BROOM,MOP,DUST,VACUUM,SOAP,SPONGE,WIPE,WASH
1165,FEELINGS,HAPPY,SAD,ANGRY,AFRAID,TIRED,EXCITED,BORED,CALM
1166,VIRTUES,KIND,HONEST,BRAVE,LOYAL,FAIR,WISE,PATIENT,STRONG
1167,LAKES,CASPIAN,SUPERIOR,VICTORIA,HURON,MICHIGAN,TANGANYIKA,BAIKAL,BEAR,ERIE,MEAD,CHAD,TAHOE,COMO
1168,SEAS,MEDITERRANEAN,CARIBBEAN,SOUTH CHINA,BERING,MEXICO,OKHOTSK,EAST CHINA,JAPAN,BALTIC,CORAL,BLACK,RED,JAVA,ROSS
1169,STARS,SIRIUS,VEGA,RIGEL,BETELGEUSE,ALTAIR,POLARIS,ANTARES,DENEB,MIRA,POLLUX,CASTOR
1170,MOONS,LUNA,TITAN,EUROPA,IO,PHOBOS,DEIMOS,CHARON,GANYMEDE,CALLISTO,ENCELADUS
1171,TREES,ASH,BEECH,BIRCH,CEDAR,CHERRY,CYPRESS,ELM,FIR,MAPLE,PINE,POPLAR,REDWOOD,SPRUCE,WALNUT,WILLOW,OAK,YEW,GUM
1172,FLOWERS,CAMELLIA,DAISY,IRIS,LAVENDER,LILY,ORCHID,ROSE,SUNFLOWER,TULIP,VIOLET,PANSY,POPPY,ASTER,PEONY
1173,INSECTS,ANT,BEE,BEETLE,BUTTERFLY,FLY,GNAT,MOSQUITO,MOTH,WASP,FLEA,LOUSE,TICK,MITE
1174,FAMOUS PAINTERS,PICASSO,VAN GOGH,MONET,DALI,REMBRANDT,WARHOL,MATISSE,POLLOCK
1175,COMPOSERS,BACH,MOZART,BEETHOVEN,CHOPIN,TCHAIKOVSKY,VIVALDI,HANDEL
1176,LITERARY GENRES,FICTION,MYSTERY,SCI-FI,FANTASY,HORROR,ROMANCE,THRILLER
1177,POETRY TERMS,STANZA,RHYME,METER,VERSE,HAIKU,SONNET,LYRIC,EPIC,ODE
1178,THEATER TERMS,STAGE,CURTAIN,PROP,SCRIPT,CAST,PLAY,ACT,CUE,ROLE
1179,DANCE STYLES,BALLET,TAP,JAZZ,SALSA,TANGO,WALTZ,HULA,POLKA
1180,MUSIC TEMPOS,ALLEGRO,ADAGIO,PRESTO,LARGO,ANDANTE
1181,ARCHITECTURE,ARCH,DOME,SPIRE,COLUMN,VAULT
1182,BRIDGE TYPES,SUSPENSION,ARCH,BEAM,TRUSS,DRAWBRIDGE
1183,ROAD TYPES,HIGHWAY,STREET,AVENUE,LANE,BOULEVARD
1184,KITCHEN HERBS,BASIL,THYME,MINT,DILL,ROSEMARY,CHIVE,CRESS,SORREL,RUE,BALM
1185,BAKING SPICES,CINNAMON,NUTMEG,CLOVE,GINGER,ALLSPICE,SALT,SAGE,CUMIN
1186,CITRUS FRUITS,LEMON,LIME,ORANGE,GRAPEFRUIT,CITRON,POMELO,MANDARIN
1187,BERRIES,STRAWBERRY,BLUEBERRY,RASPBERRY,BLACKBERRY,CRANBERRY,GOOSEBERRY
1188,STONE FRUITS,PEACH,PLUM,APRICOT,CHERRY,NECTARINE,MANGO
1189,TROPICAL FRUITS,MANGO,PINEAPPLE,PAPAYA,KIWI,BANANA
1190,ROOT VEGETABLES,CARROT,POTATO,BEET,TURNIP,RADISH,PARSNIP
1191,LEAFY GREENS,SPINACH,KALE,LETTUCE,ARUGULA,CHARD,COLLARD
1192,CRUSTACEANS,CRAB,LOBSTER,SHRIMP,PRAWN,BARNACLE
1193,MOLLUSKS,SNAIL,CLAM,SQUID,OCTOPUS,OYSTER
1194,ARACHNIDS,SPIDER,SCORPION,TICK,MITE
1195,CONIFERS,PINE,FIR,SPRUCE,CEDAR,REDWOOD
1196,DECIDUOUS TREES,OAK,MAPLE,ELM,BIRCH,ASH
1197,CLOUDS,CIRRUS,STRATUS,CUMULUS,NIMBUS,ALTO
1198,WIND NAMES,ZEPHYR,GALE,MISTRAL,CHINOOK,MONSOON,GUST,DRAFT,BREEZE,SQUALL,TRADE
1199,PRECIPITATION,RAIN,SNOW,SLEET,HAIL,FOG
1200,TECTONIC PLATES,PACIFIC,EURASIAN,AFRICAN,ANTARCTIC
1201,VOLCANO PARTS,CRATER,VENT,MAGMA,LAVA,ASH
1202,OCEAN ZONES,COASTAL,PELAGIC,BENTHIC,ABYSSAL
1203,FOSSIL FUELS,COAL,OIL,GAS,PEAT
1204,ALLOYS,BRONZE,BRASS,STEEL,PEWTER,SOLDER
1205,PATTERNS,PLAID,STRIPE,CHECK,DOT,GRID,TOILE,PAISLEY
1206,TEXTURES,SILK,WOOL,FELT,LINEN,HEMP,JUTE,FUR
1207,SHAPES 3D,CONE,CUBE,PRISM,TORUS,SPHERE,HELIX,SPIRAL
1208,COLORS EXOTIC,CYAN,TEAL,NAVY,AQUA,AZURE,INDIGO,COBALT
1209,TIME PERIODS,SEC,MIN,HOUR,WEEK,YEAR,AGE,ERA
1210,VOLUMES,PINT,QUART,LITER,DRAM,GILL,PECK,BUSHEL
1211,WEIGHTS,GRAM,KILO,TON,POUND,OUNCE,STONE,GRAIN
1212,UNITS,INCH,FOOT,YARD,MILE,ACRE,ROD,FURLONG
1213,SYMBOLS,DASH,DOT,STAR,HASH,PLUS,TILDE,CARET
1214,WRITING,DRAFT,EDIT,COPY,TYPE,PLOT,PRINT,FILE
1215,NUTS,PECAN,ALMOND,CASHEW,WALNUT,HAZEL,PINE,BRAZIL,PISTACHIO
1216,DISNEY PARKS,MAGIC KINGDOM,EPCOT,ANIMAL KINGDOM,HOLLYWOOD STUDIOS,DISNEYLAND,CALIFORNIA ADVENTURE
1217,PIXAR MOVIES,TOY STORY,CARS,UP,SOUL,COCO,WALL-E,INSIDE OUT,RATATOUILLE
1218,THEME PARKS,DISNEY,UNIVERSAL,SIX FLAGS,SEAWORLD,LEGOLAND,BUSCH GARDENS,DOLLYWOOD
1219,ROLLER COASTERS,WOODEN,STEEL,INVERTED,LOOP,DIVE,LAUNCH,SPINNING,HYBRID
1220,ANDROID VERSIONS,CUPCAKE,DONUT,ECLAIR,FROYO,GINGERBREAD,HONEYCOMB,JELLY BEAN,KITKAT
1221,APPLE PRODUCTS,IPHONE,IPAD,MACBOOK,WATCH,AIRPODS,IMAC,APPLE TV,VISION PRO
1222,MESSAGING APPS,WHATSAPP,MESSENGER,TELEGRAM,SIGNAL,WECHAT,LINE,DISCORD,SLACK
1223,TV CHANNELS,NBC,ABC,CBS,FOX,CNN,ESPN,HBO,DISNEY,MTV
1224,GYM EXERCISES,SQUAT,BENCH PRESS,DEADLIFT,LUNGE,CURL,PLANK,PUSHUP,PULLUP
1225,CARDIO MACHINES,TREADMILL,ELLIPTICAL,BIKE,ROWER,STAIRMASTER,CLIMBER,SKI ERG
1226,PASTA SAUCES,MARINARA,ALFREDO,PESTO,VODKA,BOLOGNESE,CARBONARA,PUTTANESCA
1227,FRENCH CHEESES,BRIE,CAMEMBERT,ROQUEFORT,COMTE,GRUYERE,MUNSTER,CHEVRE
1228,BOX OFFICE,AVATAR,TITANIC,AVENGERS,STAR WARS,JURASSIC WORLD,LION KING,SPIDERMAN
1229,DIRECTORS,SPIELBERG,NOLAN,SCORSESE,TARANTINO,CAMERON,HITCHCOCK,KUBRICK,COPPOLA
1230,HARRY POTTER,HARRY,RON,HERMIONE,DRACO,SNAPE,DUMBLEDORE,HAGRID,SIRIUS,MCGONAGALL,FLITWICK,SPROUT
1231,LOTR RACES,HOBBIT,ELF,DWARF,ORC,MAN,WIZARD,ENT,TROLL
1232,STAR WARS DROIDS,R2D2,C3PO,BB8,K2SO,IG88,CHOPPER,BATTLE DROID,PROBE
1233,TENNIS MAJORS,WIMBLEDON,US OPEN,FRENCH OPEN,AUSTRALIAN OPEN
1234,GOLF MAJORS,MASTERS,US OPEN,PGA,THE OPEN
1235,CAR SAFETY,AIRBAG,SEATBELT,ABS,CAMERA,SENSOR,BRAKES,LANE ASSIST
1236,LUXURY CARS,FERRARI,PORSCHE,LAMBORGHINI,BUGATTI,MCLAREN,ASTON MARTIN,ROLLS ROYCE,GUCCI,PRADA,CHANEL,DIOR,VUITTON,HERMES,ROLEX,CARTIER
1237,ELECTRIC CARS,TESLA,RIVIAN,LUCID,POLESTAR,LEAF,BOLT,IONIQ,TAYCAN
1238,COFFEE CHAINS,STARBUCKS,DUNKIN,TIM HORTONS,PEETS,COSTA,CARIBOU,DUTCH BROS,BLUE BOTTLE
1239,DONUT SHOPS,KRISPY KREME,DUNKIN,TIM HORTONS,VOODOO,SHIPLEY,RANDYS
1240,JEANS BRANDS,LEVI,WRANGLER,LEE,DIESEL,GAP,CALVIN KLEIN,GUESS
1241,MAKEUP BRANDS,MAC,SEPHORA,ULTA,FENTY,NYX,MORPHE,CLINIQUE,NARS
1242,ENERGY DRINKS,RED BULL,MONSTER,ROCKSTAR,BANG,CELSIUS,NOS,REIGN
1243,MONOPOLY PIECES,TOP HAT,THIMBLE,BOOT,CAR,DOG,IRON,SHIP,WHEELBARROW
1244,CARD GAMES,POKER,BLACKJACK,WAR,GO FISH,BRIDGE,RUMMY,SOLITAIRE,HEARTS,CANASTA,EUCHRE,CRIBBAGE,PINOCHLE
1245,CASINO GAMES,SLOTS,CRAPS,ROULETTE,BACCARAT,POKER,KENO,BINGO,PAI GOW,FARO
1246,DISNEY PRINCES,CHARMING,ERIC,ALADDIN,PHILLIP,ADAM,NAVEEN,FLYNN
1247,LAS VEGAS HOTELS,BELLAGIO,LUXOR,VENETIAN,WYNN,ARIA,MANDALAY,MIRAGE,EXCALIBUR
1248,CIRQUE SHOWS,O,KA,MYSTERE,LOVE,ALEGRIA,KOOZA,ZUMANITY,BEATLES
1249,NETFLIX ORIGINALS,STRANGER THINGS,CROWN,OZARK,WITCHER,BRIDGERTON,SQUID GAME,NARCOS,DARK
1250,GYM EQUIPMENT,DUMBBELL,BARBELL,KETTLEBELL,TREADMILL,ELLIPTICAL,ROWER,BENCH,BIKE
1251,YOGA STYLES,HATHA,VINYASA,BIKRAM,ASHTANGA,YIN,KUNDALINI,RESTORATIVE
1252,CROSSFIT TERMS,WOD,AMRAP,BOX JUMP,BURPEE,THRUSTER,SNATCH,CLEAN,JERK
1253,GOLD RUSH STATES,CALIFORNIA,ALASKA,NEVADA,COLORADO,DAKOTA,IDAHO,MONTANA
1254,DESERT PLANTS,CACTUS,AGAVE,YUCCA,SAGEBRUSH,JOSHUA TREE,ALOE,MESQUITE,PRICKLY PEAR
1255,RAINFOREST LAYERS,EMERGENT,CANOPY,UNDERSTORY,FLOOR,SOIL,SHRUB
1256,ARCTIC NATIONS,CANADA,RUSSIA,USA,NORWAY,DENMARK,ICELAND,SWEDEN,FINLAND
1257,SPACE SHUTTLES,ATLANTIS,CHALLENGER,COLUMBIA,DISCOVERY,ENDEAVOUR,ENTERPRISE
1258,NASA CENTERS,KENNEDY,JOHNSON,GODDARD,JET PROPULSION,MARSHALL,LANGLEY,AMES,GLENN
1259,ROCKET PARTS,NOSE CONE,FIN,ENGINE,FUSELAGE,PAYLOAD,THRUSTER,TANK,STAGE
1260,US MONUMENTS,LINCOLN,WASHINGTON,JEFFERSON,RUSHMORE,LIBERTY,ARCH,ALAMO,BUNKER HILL
1261,MOUNT RUSHMORE,WASHINGTON,JEFFERSON,LINCOLN,ROOSEVELT
1262,ROOSEVELT FAMILY,TEDDY,FRANKLIN,ELEANOR,ALICE,KERMIT,THEODORE,ELLIOTT
1263,NEW DEAL,WPA,CCC,TVA,SSA,FDIC,SEC,NRA,AAA
1264,GREAT DEPRESSION,CRASH,DUST BOWL,HOOVERVILLE,POVERTY,JOBS,BANK,STOCKS
1265,1930S DECADE,DEPRESSION,SWING,RADIO,TALKIES,PROHIBITION,GANGSTERS,JAZZ
1266,GANGSTER ERA,CAPONE,DILLINGER,NELSON,BONNIE,CLYDE,LUCIANO,BUGSY,GOTTI
1267,PROHIBITION DRINKS,GIN RICKEY,SIDECAR,HIGHBALL,MARY PICKFORD,BEES KNEES,MOONSHINE,SPEAKEASY
1268,SITCOMS,FRIENDS,SEINFELD,OFFICE,PARKS REC,BIG BANG,CHEERS,MASH
1269,DRAMAS,BREAKING BAD,SOPRANOS,WIRE,MAD MEN,SUCCESSION,LOST,THRONES
1270,CARTOONS,SPONGEBOB,SIMPSONS,FAMILY GUY,SOUTH PARK,FUTURAMA,SCOOBY DOO
1271,REALITY TV,SURVIVOR,BIG BROTHER,BACHELOR,VOICE,IDOL,AMAZING RACE
1272,SCI FI SHOWS,TREK,DOCTOR WHO,X FILES,STRANGER THINGS,MANDALORIAN,FIREFLY
1273,TALK SHOWS,TONIGHT,DAILY,ELLEN,OPRAH,LETTERMAN,CONAN,KIMMEL
1274,REVOLUTIONS,FRENCH,AMERICAN,INDUSTRIAL,RUSSIAN,DIGITAL,SCIENTIFIC
1275,EMPIRES,ROMAN,OTTOMAN,BRITISH,MONGOL,AZTEC,MAYAN,PERSIAN
1276,CONSTELLATIONS,ORION,URSA MAJOR,CASSIOPEIA,SCORPIO,LEO,DRACO,PEGASUS
1277,SPACE MISSIONS,APOLLO,GEMINI,VOYAGER,ARTEMIS,SPUTNIK,CURIOSITY
1278,ASTRONAUTS,ARMSTRONG,ALDRIN,GAGARIN,GLENN,RIDE,HADFIELD,KELLY
1279,GALAXIES,MILKY WAY,ANDROMEDA,TRIANGULUM,WHIRLPOOL,SOMBRERO,PINWHEEL
1280,SOCCER TEAMS,REAL MADRID,BARCELONA,MAN UTD,LIVERPOOL,JUVENTUS,BAYERN
1281,NBA TEAMS,LAKERS,BULLS,WARRIORS,CELTICS,HEAT,KNICKS,SPURS
1282,TROPHIES,STANLEY CUP,LOMBARDI,WORLD CUP,GOLD MEDAL,HEISMAN,WIMBLEDON
1283,SPORTS LEGENDS,JORDAN,PELE,BRADY,RUTH,GRETZKY,ALI,PHELPS,WOODS
1284,PERSONNEL,TEACHER,STUDENT,PRINCIPAL,JANITOR,COACH,NURSE,COUNSELOR
1285,ACADEMICS,HOMEWORK,QUIZ,TEST,ESSAY,PROJECT,REPORT,GRADE
1286,RECESS,SWING,SLIDE,TAG,BALL,SANDBOX,JUMP ROPE,HOPSCOTCH
1287,HP SPELLS,LUMOS,NOX,ACCIO,ALOHOMORA,EXPELLIARMUS,STUPEFY,PROTEGO
1288,PIXAR CARS,LIGHTNING,MATER,SALLY,DOC,LUIGI,GUIDO,MACK
1289,TOY STORY TOYS,WOODY,BUZZ,REX,HAMM,SLINKY,JESSIE,BULLSEYE
1290,SPONGEBOB CAST,SPONGEBOB,PATRICK,SQUIDWARD,SANDY,KRABS,PLANKTON
1291,SIMPSONS FAMILY,HOMER,MARGE,BART,Lisa,MAGGIE,GRAMPA
1292,FAMILY GUY,PETER,LOIS,STEWIE,BRIAN,CHRIS,MEG
1293,FRIENDS CAST,ROSS,RACHEL,MONICA,CHANDLER,JOEY,PHOEBE
1294,THE OFFICE CAST,MICHAEL,DWIGHT,JIM,PAM,RYAN,ANDY
1295,GOT HOUSES,STARK,LANNISTER,TARGARYEN,BARATHEON,GREYJOY,TYRELL
1296,HUNGER GAMES,MINING,LUXURY,FISHING,POWER,AGRICULTURE,TRANSPORT
1297,TWILIGHT SAGA,BELLA,EDWARD,JACOB,ALICE,CARLISLE,EMMETT
1298,VAMPIRE DIARIES,ELENA,STEFAN,DAMON,BONNIE,CAROLINE,ALARIC
1299,STRANGER THINGS,MIKE,ELEVEN,DUSTIN,LUCAS,WILL,MAX
1300,BREAKING BAD,WALTER,JESSE,SKYLER,HANK,SAUL,GUS
1301,WALKING DEAD,RICK,DARYL,MICHONNE,CAROL,NEGAN,MAGGIE
1302,GREYS ANATOMY,MEREDITH,DEREK,CRISTINA,ALEX,BAILEY,WEBBER
1303,BIG BANG THEORY,SHELDON,LEONARD,PENNY,RAJ,HOWARD,BERNADETTE
1304,HIMYM,TED,MARSHALL,LILY,BARNEY,ROBIN
1305,MODERN FAMILY,PHIL,CLAIRE,GLORIA,JAY,MITCH,CAM
1306,PARKS AND REC,LESLIE,RON,TOM,APRIL,ANDY,BEN
1307,BROOKLYN 99,JAKE,AMY,TERRY,ROSA,BOYLE,HOLT
1308,SEINFELD,JERRY,GEORGE,ELAINE,KRAMER
1309,GOLDEN GIRLS,DOROTHY,ROSE,BLANCHE,SOPHIA
1310,SEX AND THE CITY,CARRIE,SAMANTHA,CHARLOTTE,MIRANDA
1311,TECH GIANTS,APPLE,GOOGLE,META,AMAZON,MICROSOFT,TESLA,NVIDIA,ORACLE
1312,HOTEL CHAINS,HILTON,MARRIOTT,HYATT,SHERATON,HOLIDAY INN,BEST WESTERN,RADISSON,WYNDHAM
1313,RETAIL STORES,WALMART,TARGET,COSTCO,BEST BUY,IKEA,HOME DEPOT,LOWES,MACS
1314,CHIPS BRANDS,LAYS,DORITOS,PRINGLES,CHEETOS,RUFFLES,FRITOS,TAKIS,SUNCHIPS
1315,CEREAL BRANDS,CHEERIOS,FROSTED FLAKES,FROOT LOOPS,RICE KRISPIES,LUCKY CHARMS,CINNAMON TOAST,CAPN CRUNCH,RAISIN BRAN
1316,BIRD PETS,PARROT,FINCH,CANARY,BUDGIE,COCKATIEL,LOVEBIRD,DOVE,MACAW
1317,FISH PETS,GOLDFISH,BETTA,TETRA,GUPPY,MOLLY,ANGELFISH,CLOWNFISH,OSCAR
1318,RODENT PETS,HAMSTER,GERBIL,MOUSE,RAT,GUINEA PIG,CHINCHILLA,FERRET,HEDGEHOG
1319,REPTILE PETS,SNAKE,LIZARD,TURTLE,GECKO,IGUANA,CHAMELEON,DRAGON,PYTHON
1320,FARM ANIMALS,COW,PIG,SHEEP,GOAT,HORSE,CHICKEN,DUCK,DONKEY
1321,JUNGLE ANIMALS,TIGER,MONKEY,SNAKE,FROG,PARROT,SLOTH,GORILLA,JAGUAR
1322,ARCTIC ANIMALS,BEAR,SEAL,WALRUS,FOX,PENGUIN,WHALE,OWL,HARE
1323,DESERT ANIMALS,CAMEL,SNAKE,LIZARD,SCORPION,FOX,VULTURE,COYOTE,SPIDER
1324,OCEAN ANIMALS,WHALE,SHARK,DOLPHIN,CRAB,SEAL,OCTOPUS,JELLYFISH,TURTLE
1325,RIVER ANIMALS,OTTER,BEAVER,DUCK,FISH,FROG,TURTLE,CRANE,SWAN
1326,FOREST ANIMALS,DEER,BEAR,FOX,SQUIRREL,RABBIT,OWL,MOOSE,RACCOON
1327,MUSIC AWARDS,GRAMMY,MTV VMA,BRIT,BILLBOARD,AMA,CMA,BET,JUNO
1328,FILM AWARDS,OSCAR,GOLDEN GLOBE,BAFTA,SAG,CANNES,SUNDANCE,EMMY,TONY
1329,FASHION DESIGNERS,GUCCI,PRADA,VERSACE,CHANEL,DIOR,ARMANI,LAUREN,HILFIGER
1330,AIRLINES ASIA,SINGAPORE,ANA,JAL,CATHAY,KOREAN,EVA,THAI,QATAR
1331,AIRLINES EUROPE,LUFTHANSA,AIR FRANCE,KLM,BRITISH,RYANAIR,EASYJET,TURKISH,SWISS
1332,TECH HARDWARE,INTEL,AMD,NVIDIA,SAMSUNG,TSMC,QUALCOMM,ASUS,MSI
1333,TECH SOFTWARE,MICROSOFT,ORACLE,ADOBE,SALESFORCE,SAP,INTUIT,VMWARE,AUTODESK
1334,SOCIAL APPS,TIKTOK,INSTAGRAM,SNAPCHAT,FACEBOOK,TWITTER,REDDIT,DISCORD,BE REAL
1335,DATING APPS,TINDER,BUMBLE,HINGE,GRINDR,OKCUPID,MATCH,PLENTY FISH,COFFEE BAGEL
1336,RIDE APPS,UBER,LYFT,GRAB,BOLT,DIDI,GOCURRY,CABIFY,VIA
1337,FOOD APPS,UBER EATS,DOORDASH,GRUBHUB,POSTMATES,DELIVEROO,JUST EAT,ZOMATO,SWIGGY
1338,TV SERIES THRILLER,BREAKING BAD,DEXTER,YOU,MINDHUNTER,HANNIBAL,FARGO,OZARK,HOMELAND
1339,TV SERIES COMEDY,OFFICE,PARKS REC,BROOKLYN 99,SEINFELD,FRIENDS,SCRUBS,COMMUNITY,30 ROCK
1340,VIDEO GAME HEROES,MARIO,LINK,SONIC,MASTER CHIEF,KRATOS,SNAKE,SAMUS,LARA CROFT
1341,PASTA DISHES,LASAGNA,SPAGHETTI,MACARONI CHEESE,FETTUCCINE ALFREDO,CARBONARA,ZITI,RAVIOLI,MANICOTTI,PENNE VODKA
1342,RICE DISHES,FRIED RICE,RISOTTO,PAELLA,JAMBALAYA,BIRYANI,PILAF,SUSHI,RICE PUDDING
1343,EGG DISHES,OMELET,SCRAMBLED,FRIED,POACHED,BENEDICT,DEVILED,QUICHE,FRITTATA
1344,CHICKEN DISHES,NUGGETS,WINGS,PARMESAN,ALFREDO,CURRY,SOUP,SALAD,ROAST,FRIED
1345,BEEF DISHES,STEAK,BURGER,MEATLOAF,ROAST,STEW,TACO,CHILI,WELLINGTON
1346,PORK DISHES,CHOPS,LOIN,RIBS,BACON,HAM,SAUSAGE,PULLED PORK,ROAST
1347,SEAFOOD DISHES,SUSHI,FISH CHIPS,SHRIMP SCAMPI,LOBSTER BISQUE,CRAB CAKES,CLAM CHOWDER,GRILLED SALMON
1348,TOFU DISHES,MAPO TOFU,STIR FRY,MISO SOUP,AGEDASHI,TOFU SCRAMBLE,CURRY
1349,VEGETABLE DISHES,SALAD,STIR FRY,ROASTED VEGGIES,SOUP,STEW,CASSEROLE,GRATIN
1350,SALAD TYPES,CAESAR,GARDEN,GREEK,COBB,CHEF,FRUIT,POTATO,PASTA,TUNA,EGG
1351,CAR RENTALS,ENTERPRISE,HERTZ,AVIS,BUDGET,ALAMO,NATIONAL,DOLLAR,THRIFTY
1352,CRUISE LINES,CARNIVAL,ROYAL CARIBBEAN,DISNEY,NORWEGIAN,PRINCESS,HOLLAND AMERICA,CELEBRITY
1353,DEPARTMENT STORES,MUCYS,KOHLS,JCPENNEY,NORDSTROM,DILLARDS,BLOOMINGDALES,SAKS,SEARS
1354,SUPERMARKETS,KROGER,PUBLIX,SAFEWAY,WHOLE FOODS,ALDI,TRADER JOES,WALMART,COSTCO
1355,PHARMACY CHAINS,CVS,WALGREENS,RITE AID,WALMART,COSTCO,KROGER
1356,BOOKSTORES,BARNES NOBLE,BOOKS A MILLION,POWELLS,STRAND,HALF PRICE BOOKS
1357,PET STORES,PETSMART,PETCO,PET SUPPLIES PLUS,PET SUPERMARKET
1358,TOY STORES,TOYS R US,LEGO STORE,BUILD A BEAR,GAMESTOP,DISNEY STORE
1359,SHOE STORES,FOOT LOCKER,DSW,FAMOUS FOOTWEAR,PAYLESS,VANS,JOURNEYS
1360,JEWELRY STORES,KAY,ZALES,JARED,TIFFANY,PANDORA,CARTIER
1361,ELECTRONICS STORES,BEST BUY,APPLE STORE,MICRO CENTER,GAMESTOP,TARGET,WALMART
1362,HARDWARE STORES,HOME DEPOT,LOWES,ACE,TRUE VALUE,MENARDS,HARBOR FREIGHT
1363,SPORTING GOODS STORES,DICKS,ACADEMY,BASS PRO,CABELAS,REI,BIG 5
1364,FURNITURE STORES,IKEA,ASHLEY,ROOMS TO GO,WAYFAIR,WEST ELM,POTTERY BARN,CRATE BARREL
1365,YOGA POSES,DOWNWARD DOG,CHILD POSE,TREE POSE,WARRIOR,COBRA,LOTUS,PLANK
1366,DANCE MOVES,FLOSS,DAB,MOONWALK,TWIST,MACARENA,ROBOT,WALTZ,TANGO
1367,MUSIC FESTIVALS,COACHELLA,LOLLAPALOOZA,BONNAROO,GLASTONBURY,TOMORROWLAND,AUSTIN CITY LIMITS
1368,MAGAZINE GENRES,FASHION,SPORTS,NEWS,SCIENCE,TECH,COOKING,TRAVEL,HEALTH
1369,NEWSPAPER SECTIONS,HEADLINES,SPORTS,BUSINESS,OPINION,COMICS,CLASSIFIEDS,WEATHER
1370,LIBRARY SECTIONS,FICTION,NONFICTION,REFERENCE,PERIODICALS,CHILDREN,YOUNG ADULT,MEDIA
1371,AIRPORT ZONES,CHECK IN,SECURITY,GATE,BAGGAGE CLAIM,CUSTOMS,DUTY FREE,LOUNGE
1372,THEATER SECTIONS,ORCHESTRA,MEZZANINE,BALCONY,BOX,LOGE,STAGE,PIT
1373,STADIUM ZONES,FIELD,STANDS,DUGOUT,LOCKER ROOM,PRESS BOX,CONCESSION,SUITE
1374,REALITY HOSTS,PROBST,SEACREST,CHEN,HARRISON,BANKS,KLUM,COWELL
1375,LATE NIGHT HOSTS,FALLON,KIMMEL,COLBERT,MYERS,LENO,LETTERMAN,CONAN
1376,TALK SHOW HOSTS,OPRAH,ELLEN,DR PHIL,KELLY,DREW,WENDY,VIEW
1377,GAME SHOW HOSTS,TREBEK,SAJAK,HARVEY,CAREY,BARKER,RAYBURN
1378,FAMOUS CHRISES,EVANS,HEMSWORTH,PRATT,PINE,ROCK,TUCKER
1379,FAMOUS JENNIFERS,ANISTON,LOPEZ,LAWRENCE,GARNER,HUDSON,CONNELLY
1380,FAMOUS TOMS,CRUISE,HANKS,HARDY,HOLLAND,HIDDLESTON,SELLECK
1381,POP DIVAS,MADONNA,BEYONCE,GAGA,TAYLOR,ARIANA,RIHANNA,BRITNEY
1382,RAP LEGENDS,TUPAC,BIGGIE,EMINEM,JAY Z,SNOOP,DRE,NAS
1383,COUNTRY QUEENS,DOLLY,REBA,SHANIA,CARRIE,MIRANDA,TAYLOR,LORETTA
1384,COUNTRY KINGS,WILLIE,GARTH,GEORGE,BLAKE,LUKE,JOHNNY,KENNY
1385,BOY BANDS,NSYNC,BACKSTREET,ONE DIRECTION,BTS,JONAS,BOYZ II MEN
1386,GIRL GROUPS,SPICE GIRLS,DESTINYS CHILD,TLC,BLACKPINK,FIFTH HARMONY
1387,JAMES BOND ACTORS,CONNERY,LAZENBY,MOORE,DALTON,BROSNAN,CRAIG
1388,BATMAN ACTORS,WEST,KEATON,KILMER,CLOONEY,BALE,AFFLECK,PATTINSON
1389,SPIDERMAN ACTORS,MAGUIRE,GARFIELD,HOLLAND,JOHNSON,MOORE
1390,JOKER ACTORS,ROMERO,NICHOLSON,LEDGER,LETO,PHOENIX,HAMILL
1391,SUPERMAN ACTORS,REEVE,CAVILL,ROUTH,HOECHLIN,WELLING
1392,STAR WARS HEROES,LUKE,LEIA,HAN,CHEWIE,REY,FINN,POE
1393,STAR WARS VILLAINS,VADER,SIDIOUS,MAUL,KYLO,GREVIOUS,DOOKU
1394,HARRY POTTER TEACHERS,DUMBLEDORE,MCGONAGALL,SNAPE,HAGRID,FLITWICK,SPROUT
1395,HUNGER GAMES CHARACTERS,KATNISS,PEETA,GALE,HAYMITCH,EFFIE,PRIM
1396,TWILIGHT CHARACTERS,BELLA,EDWARD,JACOB,ALICE,CARLISLE,CHARLIE
1397,LORD RINGS FELLOWSHIP,FRODO,SAM,GANDALF,ARAGORN,LEGOLAS,GIMLI,BOROMIR
1398,AVENGERS ORIGINAL,IRON MAN,CAPTAIN AMERICA,THOR,HULK,WIDOW,HAWKEYE
1399,JUSTICE LEAGUE CORE,BATMAN,SUPERMAN,WONDER WOMAN,FLASH,AQUAMAN,CYBORG
1400,X MEN CORE,WOLVERINE,CYCLOPS,STORM,JEAN GREY,BEAST,ROGUE
1401,STRANGER THINGS KIDS,MIKE,ELEVEN,DUSTIN,LUCAS,WILL,MAX
1402,FRIENDS CHARACTERS,ROSS,RACHEL,MONICA,CHANDLER,JOEY,PHOEBE
1403,OFFICE CHARACTERS,MICHAEL,DWIGHT,JIM,PAM,RYAN,ANDY,KEVIN
1404,PARKS REC CHARACTERS,LESLIE,RON,TOM,APRIL,ANDY,BEN,CHRIS
1405,BROOKLYN 99 CHARACTERS,JAKE,AMY,ROSA,TERRY,CHARLES,HOLT
1406,SEINFELD QUARTET,JERRY,GEORGE,ELAINE,KRAMER
1407,BREAD TYPES,SOURDOUGH,RYE,WHEAT,PUMPERNICKEL,WHITE,BAGUETTE
1408,COFFEE ROASTS,LIGHT,MEDIUM,DARK,ESPRESSO,FRENCH,BLONDE
1409,TEA TYPES,GREEN,BLACK,OOLONG,WHITE,HERBAL,CHAI
1410,WINE RED,MERLOT,CABERNET,PINOT,MALBEC,SYRAH,SHIRAZ
1411,WINE WHITE,CHARDONNAY,RIESLING,MOSCATO,PINOT,SAUVIGNON,BLANC
1412,BEER STYLES,IPA,STOUT,LAGER,PILSNER,PORTER,ALE
1413,SPIRITS,VODKA,GIN,RUM,TEQUILA,WHISKEY,BRANDY
1414,MEAT CUTS BEEF,RIBEYE,SIRLOIN,TBONE,FILET,BRISKET,FLANK
1415,MEAT CUTS PORK,CHOP,LOIN,RIBS,BACON,HAM,SHOULDER
1416,POULTRY,CHICKEN,TURKEY,DUCK,GOOSE,QUAIL,PHEASANT
1417,SHELLFISH,SHRIMP,CRAB,LOBSTER,CLAM,OYSTER,MUSSEL
1418,FISH WHITE,COD,HADDOCK,HALIBUT,TILAPIA,SOLE,FLOUNDER
1419,FISH OILY,SALMON,TUNA,MACKEREL,SARDINE,TROUT,HERRING
1420,HERBS,BASIL,MINT,THYME,PARSLEY,OREGANO,ROSEMARY
1421,SPICES,CUMIN,PAPRIKA,NUTMEG,CINNAMON,TURMERIC,GINGER
1422,BAKING INGREDIENTS,FLOUR,SUGAR,YEAST,SODA,POWDER,VANILLA
1423,PATRIOTIC SONGS,AMERICA THE BEAUTIFUL,GOD BLESS AMERICA,THIS LAND IS YOUR LAND,YANKEE DOODLE,STAR SPANGLED BANNER
1424,SOUP BASES,BROTH,STOCK,CREAM,TOMATO,MISOU,CHOWDER
1425,HBO COMEDIES,CURB,VEEP,SILICON VALLEY,BARRY,INSECURE,ENTOURAGE,GIRLS
1426,HBO DRAMAS,WIRE,SOPRANOS,SUCCESSION,DEADWOOD,EUPHORIA,WATCHMEN,OZ
1427,STAND UP COMEDIANS,CK,CHAPPELLE,BURR,MULANEY,GAFFIGAN,SEGURA,KREISCHER
1428,SNL ALUMNI,FARLEY,SPADE,SANDLER,FERRELL,FEY,POEHLER,HADER,WIIG
1429,NEWS OUTLETS,CNN,FOX,MSNBC,BBC,NPR,REUTERS,AP,AL JAZEERA,AFP,UPI,BLOOMBERG
1430,MAJOR NEWSPAPERS,TIMES,POST,JOURNAL,GUARDIAN,SUN,MIRROR,GLOBE,NY TIMES,WSJ,USA TODAY,LA TIMES,CHICAGO TRIBUNE,DAILY MAIL
1431,COFFEE BREWING,DRIP,POUROVER,PRESS,ESPRESSO,COLD BREW,SIPHON,AEROPRESS
1432,HERDING DOGS,COLLIE,CORGI,SHEPHERD,HEELER,SHEEPDOG,MALINOIS
1433,LONGHAIR CATS,PERSIAN,MAINE COON,RAGDOLL,BIRMAN,HIMALAYAN,SIBERIAN
1434,ASTROLOGY SIGNS,ARIES,TAURUS,GEMINI,CANCER,LEO,VIRGO,LIBRA,SCORPIO
1435,ASTROLOGY PLANETS,MERCURY,VENUS,MARS,JUPITER,SATURN,URANUS,NEPTUNE
1436,PAINKILLERS,ASPIRIN,TYLENOL,ADVIL,MOTRIN,ALEVE,IBUPROFEN
1437,SCI FI TROPES,ALIENS,ROBOTS,LASERS,CLONES,TIME TRAVEL,CYBORGS
1438,PKD ADAPTATIONS,BLADE RUNNER,TOTAL RECALL,MINORITY REPORT,PAYCHECK,SCREAMERS
1439,WESTERN OUTLAWS,BILLY THE KID,JESSE JAMES,BUTCH CASSIDY,SUNDANCE KID,DOC HOLLIDAY
1440,DEADWOOD CHARACTERS,SWEARENGEN,BULLOCK,STAR,TRIXIE,ALMA,JANE,UTTER
1441,EARLY COMPUTERS,COMMODORE,ATARI,APPLE II,AMIGA,TRS 80,ZX SPECTRUM
1442,LINUX DISTROS,UBUNTU,DEBIAN,FEDORA,MINT,ARCH,CENTOS,KALI
1443,ADAM SANDLER FILMS,HAPPY GILMORE,BILLY MADISON,WATERBOY,BIG DADDY,CLICK
1444,HARRISON FORD FILMS,STAR WARS,INDIANA JONES,BLADE RUNNER,FUGITIVE,WITNESS
1445,TINY DOGS,CHIHUAHUA,YORKIE,POMERANIAN,MALTESE,SHIH TZU,PUG
1446,EXOTIC CATS,BENGAL,SAVANNAH,SPHYNX,SCOTTISH FOLD,MUNCHKIN
1447,ASTROLOGY ELEMENTS,FIRE,EARTH,AIR,WATER
1448,COFFEE ROASTS TYPES,BLONDE,MEDIUM,DARK,FRENCH,ITALIAN,ESPRESSO
1449,COMEDIANS,SEINFELD,ROCK,ELLEN,CAREY,SANDER,ROSANNE
1450,MARVEL TEAMS,AVENGERS,X MEN,FANTASTIC FOUR,GUARDIANS,DEFENDERS
1451,DC TEAMS,JUSTICE LEAGUE,TEEN TITANS,SUICIDE SQUAD,WATCHMEN,DOOM PATROL
1452,WINDOWS VERSIONS,XP,VISTA,SEVEN,EIGHT,TEN,ELEVEN,95,98
1453,MACOS VERSIONS,VENTURA,SONOMA,MONTEREY,BIG SUR,CATALINA,MOJAVE
1454,NEWS ANCHORS,COOPER,BLITZER,HOLT,MUIR,MADDOW,HANNITY
1455,COMPLEX EMOTIONS,NOSTALGIA,ENNUI,ANGST,EUPHORIA,SCHADENFREUDE
1456,OTC MEDS,TYLENOL,ADVIL,ASPIRIN,BENADRYL,SUDAFED,MUCINEX
1457,NATIONAL ANTHEMS,STAR SPANGLED BANNER,GOD SAVE KING,MARSEILLAISE,O CANADA
1458,RETRO COMPUTING,PUNCH CARD,FLOPPY DISK,TAPE DRIVE,CRT MONITOR,MODEM
1459,SCI FI SETTINGS,SPACE STATION,STARSHIP,COLONY,DYSTOPIA,CYBERSPACE
1460,PRESTIGE TV,SOPRANOS,WIRE,BREAKING BAD,MAD MEN,CROWN
1461,CULT GROUPS,MANSON FAMILY,HEAVENS GATE,JONESTOWN,NXIVM,SCIENTOLOGY
1462,OUTLAW GANGS,JAMES YOUNGER,WILD BUNCH,DALTONS,RENO GANG
1463,RARE DOGS,AZAWAKH,PULI,KOMONDOR,XOLO,MUDI
1464,RARE CATS,SOKOKE,LAPERM,KORAT,BURMILLA,TOYGER
1465,ASTROLOGY HOUSES,FIRST,FOURTH,SEVENTH,TENTH,TWELFTH
1466,ASTROLOGY ASPECTS,CONJUNCTION,SQUARE,TRINE,OPPOSITION,SEXTILE
1467,COFFEE ORIGINS,ETHIOPIA,COLOMBIA,SUMATRA,JAVA,BRAZIL,KENYA
1468,MARVEL METALS,ADAMANTIUM,VIBRANIUM,URU,CARBONADIUM
1469,DC METALS,NTH METAL,PROMETHIUM,KRYPTONIUM,AMAZONIUM
1470,MICROSOFT CEOS,GATES,BALLMER,NADELLA
1471,APPLE CEOS,JOBS,COOK,SCULLEY,AMELIO,SPINDLER
1472,LINUX KERNELS,MONOLITHIC,MICROKERNEL,HYBRID,EXOKERNEL
1473,PLUTCHIK EMOTIONS,ECSTASY,ADMIRATION,TERROR,AMAZEMENT,GRIEF
1474,MED CLASSES,STATIN,BETA BLOCKER,ACE INHIBITOR,DIURETIC,OPIOID
1475,ANTHEM COMPOSERS,KEY,ROUGET DE LISLE,HAYDN,ALEXANDROV
1476,EARLY TECH,VACUUM TUBE,TRANSISTOR,RELAY,SWITCH,CABLE
1477,SCI FI AUTHORS,DICK,ASIMOV,CLARKE,HEINLEIN,GIBSON
1478,WIRE CHARACTERS,MCNULTY,BUNK,OMAR,STRINGER,AVON,BUBBLES
1479,CULT LEADERS,MANSON,JONES,KORESH,APPLEWHITE,RANIERE
1480,WILD BUNCH,BUTCH,SUNDANCE,KID CURRY,NEWS CARVER
1481,DEADWOOD ACTORS,OLYPHANT,MCSHANE,GUNN,PARKER,HAWKES
1482,PKD NOVELS,UBIK,VALIS,SCANNER DARKLY,MAN IN HIGH CASTLE
1483,SANDLER FRIENDS,ANISTON,BARRYMORE,JAMES,BUSCEMI
1484,FORD CO STARS,HAMILL,FISHER,CONNERY,ALLEN,PFEIFFER
1485,BATMAN ALLIES,ROBIN,NIGHTWING,GORDON,ALFRED,CATWOMAN
1486,SUPERMAN ALLIES,LOIS,JIMMY,PERRY,KARA,KRYPTO
1487,SPIDEY VILLAINS,VULTURE,MYSTERIO,KRAVEN,SCORPION,SHOCKER
1488,IRON MAN SUITS,MARK 1,HULKBUSTER,SILVER CENTURION,STEALTH
1489,DOG GROUPS AKC,SPORTING,HOUND,WORKING,TERRIER,TOY,HERDING
1490,CAT COLORS,CALICO,TORTOISESHELL,TABBY,TUXEDO,SOLID
1491,ZODIAC QUALITIES,CARDINAL,FIXED,MUTABLE
1492,COFFEE PROCESS,WASHED,NATURAL,HONEY,WET HULLED
1493,SATIRE NEWS,ONION,BABYLON BEE,DAILY SHOW,COLBERT
1494,BRITISH COMICS,GERVAIS,BRAND,COOGAN,IDLE,CLEESE
1495,TENNIS LEGENDS,FEDERER,NADAL,DJOKOVIC,SAMPRAS,AGASSI
1496,MARVEL LOCATIONS,WAKANDA,ASGARD,LATVERIA,GENOSHA
1497,DC LOCATIONS,GOTHAM,METROPOLIS,THEMYSCIRA,ATLANTIS
1498,WINDOWS APPS,NOTEPAD,CALCULATOR,PAINT,SNIPPING TOOL
1499,MAC APPS,SAFARI,PAGES,NUMBERS,KEYNOTE,GARAGEBAND
1500,LINUX DESKTOPS,GNOME,KDE,XFCE,MATE,CINNAMON
1501,CABLE NEWS,CNN,MSNBC,FOX NEWS,HLN,CNBC
1502,BASIC EMOTIONS,JOY,SADNESS,ANGER,FEAR,DISGUST
1503,ANTIBIOTICS,PENICILLIN,AMOXICILLIN,CIPRO,DOXYCYCLINE
1504,COMPUTER INPUTS,MOUSE,KEYBOARD,MIC,WEBCAM,SCANNER
1505,50S FASHION,SADDLE SHOES,POODLE SKIRTS,CARDIGAN SWEATERS,CAT EYE GLASSES,SCARF ON HAIR,BOBBY SOCKS,LEATHER JACKET,ROLLED JEANS
1760,BICYCLE PARTS,WHEEL,TIRE,PEDAL,CHAIN,HANDLEBAR,SEAT,BRAKE,GEAR
1761,TRAFFIC SIGNS,STOP,YIELD,SPEED LIMIT,ONE WAY,DO NOT ENTER,NO PARKING,MERGE,CROSSWALK
1762,Air Fryer Staples,Fries,Wings,Broccoli,Salmon,Tofu,Ravioli
2000,Retro Tech,Walkman,Diskette,Pager,Rotary Phone,Betamax,LaserDisc
2001,Arcade Classics,Pac-Man,Galaga,Donkey Kong,Space Invaders,Dig Dug,Asteroids
2002,Vintage Toys,Yo-yo,Slinky,Etch A Sketch,View-Master,Rubik's Cube,Silly Putty
2003,80s Movies,Back to the Future,Ghostbusters,The Breakfast Club,E.T.,The Goonies,Top Gun
2004,Muscle Cars,Mustang,Corvette,Beetle,Charger,Thunderbird,GTO,Camaro,Chevelle
2005,Legendary Rock,Led Zeppelin,Pink Floyd,The Who,Queen,Fleetwood Mac,AC/DC,Deep Purple
2006,90s Cartoons,Rugrats,Doug,Animaniacs,Ren and Stimpy,Tiny Toon Adventures,Hey Arnold
2007,Classic Board Games,Monopoly,Clue,Risk,Scrabble,Stratego,Battleship,Chess
2008,Breakfast Mascots,Tony the Tiger,Toucan Sam,Lucky the Leprechaun,Captain Crunch,Count Chocula
2009,Classic Sitcoms,Seinfeld,Cheers,MASH,I Love Lucy,Friends,The Jeffersons
2010,Early Web,AOL,Netscape,GeoCities,Napster,ICQ,Ask Jeeves,AltaVista
2011,8-Bit Era,NES,Atari 2600,Sega Master System,Intellivision,ColecoVision,Commodore 64
2012,Classic Sodas,Tab,Jolt,Fresca,RC Cola,Moxie,Surge,Crystal Pepsi
2013,Universal Monsters,Dracula,Frankenstein,Wolfman,Mummy,Gill-man,Invisible Man
2014,Wild West Legends,Wyatt Earp,Doc Holliday,Jesse James,Billy the Kid,Wild Bill Hickok,Butch Cassidy
2015,Classic Detectives,Sherlock Holmes,Hercule Poirot,Miss Marple,Sam Spade,Philip Marlowe,Dick Tracy
2016,Vinyl Culture,LP,Turntable,Groove,Stylus,Sleeve,RPM,Crackle
2017,Sci-Fi Novels,Dune,Foundation,1984,Brave New World,Starship Troopers,Fahrenheit 451
2018,Classic Comic Strips,Snoopy,Garfield,Dilbert,Calvin,Hobbes,Popeye,Heathcliff
2019,Golden Age Stars,Humphrey Bogart,Cary Grant,James Stewart,Gregory Peck,Clark Gable,Bette Davis
2020,Old School Candy,Bazooka,Necco Wafers,Charleston Chew,Abba-Zaba,Bit-O-Honey,Candy Cigarettes
2021,Historic Stadiums,Wrigley Field,Fenway Park,Madison Square Garden,Lambeau Field,Old Yankee Stadium
2022,Classic TV Westerns,Gunsmoke,Bonanza,Rawhide,Wagon Train,The Virginian,High Chaparral
2023,Early Portables,Osborne 1,TRS-80 Model 100,PowerBook 100,Newton MessagePad,Game Boy
2024,Horror Villains,Michael Myers,Freddy Krueger,Jason Voorhees,Leatherface,Pinhead,Chucky
2025,Vintage Kitchen,Hand Mixer,Percolator,Pressure Cooker,Seltzer Siphon,Egg Beater,Toaster Oven
2026,Classic Accessories,Pocket Watch,Fedora,Brooch,Cufflinks,Tie Clip,Parasol
2027,Cocktail Classics,Old Fashioned,Martini,Manhattan,Negroni,Sidecar,Gimlet,Daiquiri
2028,Golden Age Animation,Warner Bros,Fleischer,Disney,MGM,UPA,Hanna-Barbera
2029,Superhero Identities,Bruce Wayne,Clark Kent,Peter Parker,Diana Prince,Tony Stark,Steve Rogers
2030,Famous Instruments,Stradivarius,Hammond Organ,Fender Stratocaster,Steinway,Gibson Les Paul
2031,Historic Travel,Ocean Liner,Steam Train,Zeppelin,Stagecoach,Caravan,Rickshaw
2032,Renaissance Masters,Leonardo,Michelangelo,Raphael,Donatello,Titian,Botticelli
2033,Ancient Philosophy,Stoicism,Epicureanism,Platonism,Cynicism,Skepticism
2034,Fairy Tale Magic,Magic Mirror,Glass Slipper,Spinning Wheel,Poison Apple,Golden Goose,Magic Carpet
2035,Opera Greats,Verdi,Wagner,Puccini,Mozart,Rossini,Bizet,Handel
2036,Classic Dance,Charleston,Swing,Waltz,Foxtrot,Tango,Lindy Hop
2037,NASA Milestones,Vostok,Mercury,Gemini,Apollo,Voyager,Skylab,Sputnik
2038,Architectural Gems,Romanesque,Gothic,Baroque,Neoclassical,Art Deco,Bauhaus
2039,Classic Ships,Galleon,Frigate,Clipper,Ironclad,Dreadnought,U-Boat
2040,Timeless Poets,Frost,Keats,Byron,Shelley,Whitman,Dickinson,Poe
2041,Martial Arts,Karate,Kung Fu,Judo,Taekwondo,Aikido,Hapkido,Capoeira
2042,Chess Openings,Sicilian Defense,Ruy Lopez,Queen's Gambit,French Defense,Caro-Kann
2043,Tarot Suits,Wands,Cups,Swords,Pentacles,Major Arcana
2044,Alchemical Terms,Quicksilver,Brimstone,Vitriol,Saltpeter,Philosopher's Stone,Elixir
2045,Natural Wonders,Grand Canyon,Victoria Falls,Mount Everest,Great Barrier Reef,Niagara Falls
2046,Mythology Realms,Olympus,Hades,Asgard,Valhalla,Midgard,Niflheim
2047,Night Sky,Orion,Ursa Major,Cassiopeia,Pleiades,Pegasus,Draco
2048,Stationery Supplies,Fountain Pen,Wax Seal,Parchment,Blotter,Quiver,Inkwell
2049,Retro Gaming Logos,Sega,Nintendo,Atari,Capcom,Konami,Namco,Taito
2171,Cooking Techniques,Sous Vide,Braise,Poach,Saute,Blanch,Sear,Braising,Poaching,Searing,Blanching,Roasting,Grilling
2172,Chef Ranks Kitchen,Executive,Sous,Station,Commis,Pastry,Saucier
2173,Kitchen Safety,Knife,Fire,Sanitize,Cross-con,Temperature,Storage,Sharp Knives,Dry Hands,Fire Extinguisher,Cross-contamination,Internal Temp,Ventilation
2299,Famous Directors,Spielberg,Nolan,Scorsese,Tarantino,Kubrick,Hitchcock
2500,Starts with Z,Zebra,Zoo,Zero,Zone,Zest,Zipper
`;

let cachedData: CSVRow[] | null = null;

const parseCSV = (csv: string): CSVRow[] => {
  const lines = csv.trim().split('\n');
  const rawData: CSVRow[] = [];
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const parts: string[] = [];
    let current = '';
    let inQuote = false;
    
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        if (inQuote && line[j+1] === '"') {
          current += '"';
          j++;
        } else {
          inQuote = !inQuote;
        }
      } else if (char === ',' && !inQuote) {
        parts.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    parts.push(current);

    if (parts.length < 3) continue;

    const id = parts[0].trim();
    const name = parts[1].trim(); 
    
    const words = parts.slice(2)
        .map(w => w.trim())
        .filter(w => w.length > 0);

    if (words.length >= 1) {
      rawData.push({ id, name, words });
    }
  }

  // Merge logic
  const mergedMap = new Map<string, CSVRow>();
  for (const row of rawData) {
      const normalizedName = row.name.toUpperCase();
      if (mergedMap.has(normalizedName)) {
          const existing = mergedMap.get(normalizedName)!;
          // Union of words
          const combinedWords = Array.from(new Set([...existing.words, ...row.words]));
          existing.words = combinedWords;
      } else {
          mergedMap.set(normalizedName, { ...row });
      }
  }

  // Final filtering: Ensure at least 4 unique words
  return Array.from(mergedMap.values()).filter(row => row.words.length >= 4);
};

export const getConsolidatedData = (): CSVRow[] => {
  if (cachedData) return cachedData;
  cachedData = parseCSV(MASTER_CSV_DATA);
  return cachedData;
};

export const getRandomCategories = (count: number, sourceData?: CSVRow[]): CSVRow[] => {
  const data = sourceData || getConsolidatedData();
  if (data.length === 0) return [];

  const shuffled = [...data].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getThemedCategories = (count: number, sourceData?: CSVRow[]): { name: string, categories: CSVRow[] } => {
  const data = sourceData || getConsolidatedData();
  const shuffled = [...data].sort(() => 0.5 - Math.random());
  return { 
    name: "VARIETY PACK", 
    categories: shuffled.slice(0, count) 
  };
};

export const getDailyCategories = (count: number, sourceData?: CSVRow[]): CSVRow[] => {
  const data = sourceData || getConsolidatedData();
  if (data.length === 0) return [];

  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  
  // Custom seeded random function to ensure consistent daily categories
  const seededRandom = (seed: number) => {
    var t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };

  const results: CSVRow[] = [];
  const temp = [...data];
  let s = seed;
  for (let i = 0; i < count && temp.length > 0; i++) {
    const r = seededRandom(s++);
    const idx = Math.floor(r * temp.length);
    results.push(temp.splice(idx, 1)[0]);
  }
  return results;
};

// Added helper to extract random words from a category to fix error in Level2_Filter.tsx
export const getWordsFromCategory = (category: CSVRow, count: number): string[] => {
  return [...category.words].sort(() => 0.5 - Math.random()).slice(0, count);
};

export const parseRawCSV = (csv: string): CSVRow[] => {
    return parseCSV(csv);
};
