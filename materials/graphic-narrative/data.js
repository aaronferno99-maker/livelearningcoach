/* =====================================================================
   NEITHAL NARRATIVES · Graphic narrative content
   Edit this file to change text, words, quizzes or add new episodes.
   ---------------------------------------------------------------------
   WORDS:  key: { w: shown word, pos, m: meaning, ex: example sentence,
                  f: other forms to highlight in the panel text,
                  ta: Tamil (optional), coastal: true for sea/coastal terms }
   PANELS: { t: text on the panel, s: speaker (optional),
             scene: true when the panel has no words (description only),
             k: list of WORD keys taught on this panel }
   ===================================================================== */

window.SERIES = {
  title: "The Varipuliyan",
  kicker: "Neithal Narratives",
  genre: "Coastal · Sea story",
  credit: "Graphic adaptation by Maria Kaisar Aaron R",
  sourceCredit: "",            // e.g. "Adapted from <novel>, by <author>"
  blurb: "Three fishermen on a kattumaram off Manapad. A night of empty nets. Then a giant varipuliyan rises out of the dark sea, and its mate will not leave its side.",
  howTo: [
    ["Read down", "Scroll down through the panels, like a webtoon on your phone."],
    ["Tap the words", "Underlined words open a word card with the meaning, an example and the sound."],
    ["Listen", "Press 🔊 on any panel, or turn on Auto-read to hear the whole episode."],
    ["Save words", "Press ★ on a word card to keep it in your Word bank for revision."],
    ["Check yourself", "Each episode ends with a short quiz and one speaking or writing task."]
  ]
};

window.WORDS = {
  /* ---------- coastal & Tamil terms ---------- */
  kattumaram: {w:"kattumaram", pos:"noun", coastal:true, ta:"கட்டுமரம்", m:"a traditional fishing craft made of logs tied together with rope", ex:"A kattumaram carrying three men swayed in the rolling waters.", f:["kattumarams"]},
  maram: {w:"maram", pos:"noun", coastal:true, ta:"மரம்", m:"short for kattumaram: the log raft the fishermen sail on", ex:"The varipuliyan darted alongside the maram."},
  varipuliyan: {w:"varipuliyan", pos:"noun", coastal:true, m:"the fishermen's name for a very large, spotted shark", ex:"There it was, a varipuliyan, rolling its dark, rounded eyes."},
  mundasu: {w:"mundasu", pos:"noun", coastal:true, ta:"முண்டாசு", m:"a cloth tied around the head like a turban", ex:"Old man Gothra wore a mundasu around his head."},
  vadaikondal: {w:"vadai kondal", pos:"noun", coastal:true, ta:"வாடைக் கொண்டல்", m:"a seasonal wind that the fishermen know by name; here it blows towards the south-west", ex:"A gentle vadai kondal blew across the sea."},
  kanji: {w:"kanji", pos:"noun", coastal:true, ta:"கஞ்சி", m:"thin rice porridge", ex:"Drink this kanji. You are weak and weary."},
  thirukkai: {w:"thirukkai", pos:"noun", coastal:true, ta:"திருக்கை", m:"a stingray: a flat fish with a long tail", ex:"I've seen people eat thirukkai intestines."},
  yaanaithirukkai: {w:"yaanai thirukkai", pos:"noun", coastal:true, ta:"யானைத் திருக்கை", m:"the whiptail stingray (literally 'elephant stingray')", ex:"They saw a school of yaanai thirukkai swim up for air."},
  sambai: {w:"sambai", pos:"noun", coastal:true, m:"dried, salted fish meat sold by the fishermen", ex:"A good price for the fins, oil and sambai!"},
  melinji: {w:"melinji", pos:"noun", coastal:true, m:"a trader or middleman who buys the catch on the shore", ex:"The petty officer and the melinji will be at the shore."},
  aruval: {w:"aruval", pos:"noun", coastal:true, ta:"அருவாள்", m:"a long, curved cutting knife; a machete", ex:"He cut the fins off with an aruval."},
  kuzhambu: {w:"kuzhambu", pos:"noun", coastal:true, ta:"குழம்பு", m:"a spicy, thick curry, here made with fish", ex:"The neighbours will make kuzhambu with the round slices."},
  varikkal: {w:"varikkal", pos:"noun", coastal:true, m:"a wooden peg or post on the boat that ropes are tied to", ex:"They tied the rope tightly to the varikkal."},
  pettyofficer: {w:"petty officer", pos:"noun", m:"a local official of low rank", ex:"Give the oil to the petty officer.", f:["petty officers"]},
  lighthouse: {w:"lighthouse", pos:"noun", coastal:true, m:"a tower with a strong light that guides ships at night", ex:"A flash of light came from the Manapad lighthouse."},
  plankton: {w:"plankton", pos:"noun", coastal:true, m:"very small plants and animals that float in the sea", ex:"Glowing plankton swam up to the surface."},
  fin: {w:"fin", pos:"noun", coastal:true, m:"a thin, flat part of a fish's body that it uses to swim and steer", ex:"The fins on its sides and back were a pale green.", f:["fins"]},
  dorsalfin: {w:"dorsal fin", pos:"noun", coastal:true, m:"the fin on the back of a fish or shark", ex:"Its tall dorsal fin cut through the water."},
  pectoralfin: {w:"pectoral fin", pos:"noun", coastal:true, m:"one of the two fins on the sides of a fish, just behind the head", ex:"The shark spread its pectoral fins wide."},
  school: {w:"school (of fish)", pos:"noun", coastal:true, m:"a large group of fish swimming together", ex:"They saw a school of stingrays swim up for air."},
  shoal: {w:"shoal", pos:"noun", coastal:true, m:"a large group of fish (another word for a school of fish)", ex:"A shoal of sardines flashed silver below the boat."},
  reef: {w:"reef", pos:"noun", coastal:true, m:"a line of rock or coral just under the surface of the sea", ex:"Colourful fish live around the reef."},
  noose: {w:"noose", pos:"noun", coastal:true, m:"a loop of rope that tightens when it is pulled", ex:"Gothra slipped the noose around its tail.", f:["nooses"]},
  knot: {w:"knot", pos:"noun", m:"a fastening made by tying a rope", ex:"He tightened the knot.", f:["knots"]},
  bowline: {w:"bowline", pos:"noun", coastal:true, m:"a strong loop knot that does not slip, used by sailors", ex:"Tie a bowline so the rope will hold."},
  dawn: {w:"dawn", pos:"noun", m:"the time when daylight begins", ex:"Soon it was dawn."},
  dusk: {w:"dusk", pos:"noun", m:"the time just after sunset, before it is fully dark", ex:"Dusk had set in."},
  horizon: {w:"horizon", pos:"noun", m:"the line far away where the sea or land seems to meet the sky", ex:"The sun was sinking below the horizon."},
  shore: {w:"shore", pos:"noun", coastal:true, m:"the land along the edge of the sea", ex:"They could see torches lining the seashore.", f:["seashore","ashore"]},
  torch: {w:"torch", pos:"noun", m:"a burning stick carried to give light", ex:"Torches lined the seashore.", f:["torches"]},
  blacksmith: {w:"blacksmith", pos:"noun", m:"a person who makes and repairs things made of iron", ex:"Send word for the blacksmith with an iron saw."},
  entrails: {w:"entrails", pos:"noun", m:"the inside parts of an animal's body, such as the intestines", ex:"Deliver the entrails to Thupasi."},
  intestines: {w:"intestines", pos:"noun", m:"the long tubes in the body that carry food from the stomach", ex:"Can we eat its intestines?"},
  turmeric: {w:"turmeric", pos:"noun", ta:"மஞ்சள்", m:"a yellow spice, often rubbed on fish to keep it fresh", ex:"Rub it with salt and turmeric."},
  mate: {w:"mate", pos:"noun", m:"one of a pair of animals that live and breed together; a partner", ex:"The mate still follows."},
  pair: {w:"pair", pos:"noun", m:"two of the same kind that belong together", ex:"The varipuliyan always roams the sea in pairs.", f:["pairs"]},
  twosome: {w:"twosome", pos:"noun", m:"a group of two; a pair", ex:"The sharks moved as a twosome."},
  jaw: {w:"jaw", pos:"noun", m:"the bones of the mouth that hold the teeth", ex:"The hook was stuck in its jaw.", f:["jaws"]},
  belly: {w:"belly", pos:"noun", m:"the stomach, or the underside of an animal's body", ex:"Tie it by the tail and the belly."},
  demand: {w:"demand", pos:"noun", m:"a strong wish by many people to buy something", ex:"Shark fins were in high demand in Colombo."},
  livelihood: {w:"livelihood", pos:"noun", m:"the way a person earns the money they need to live", ex:"The sea is the fishermen's livelihood."},
  sin: {w:"sin", pos:"noun", m:"an act that is morally very wrong", ex:"It's a great sin to tear a couple apart."},
  affection: {w:"affection", pos:"noun", m:"a feeling of love and care", ex:"What great affection! The mate still follows."},
  bond: {w:"bond", pos:"noun", m:"a strong feeling that joins two people or animals", ex:"There was a deep bond between the two sharks."},
  instinct: {w:"instinct", pos:"noun", m:"a natural way of behaving that is not learned", ex:"Only instinct made the shark fight on."},
  resistance: {w:"resistance", pos:"noun", m:"a force that fights against something", ex:"The varipuliyan drew close with little resistance."},
  strength: {w:"strength", pos:"noun", m:"physical power", ex:"It thrashed with all its strength."},
  excitement: {w:"excitement", pos:"noun", m:"a strong feeling of being eager and happy", ex:"Bosco leapt up in excitement."},
  expanse: {w:"expanse", pos:"noun", m:"a wide, open area of sea, land or sky", ex:"Great expanses of water lay all around.", f:["expanses"]},
  runaround: {w:"runaround", pos:"noun", m:"(give someone the runaround) to keep someone busy with a long, tiring chase or struggle", ex:"Who knows how much longer it will give us the runaround?"},
  /* ---------- verbs ---------- */
  pitch: {w:"pitch", pos:"verb", m:"(of a boat) to move up and down with the waves", ex:"The kattumaram pitched and swayed.", f:["pitched","pitching"]},
  sway: {w:"sway", pos:"verb", m:"to move slowly from side to side", ex:"The boat swayed in the rolling waters.", f:["swayed","swaying"]},
  survey: {w:"survey", pos:"verb", m:"to look carefully at the whole of something", ex:"Old Gothra surveyed the scene.", f:["surveyed"]},
  ripple: {w:"ripple", pos:"verb", m:"to move in small, gentle waves", ex:"The wind-kissed waters rippled.", f:["rippled","rippling"]},
  swirl: {w:"swirl", pos:"verb", m:"to move round and round quickly", ex:"The water rippled and swirled.", f:["swirled","swirling"]},
  bob: {w:"bob", pos:"verb", m:"to move up and down on water", ex:"Seagulls were bobbing up and down.", f:["bobbing","bobbed"]},
  creep: {w:"creep", pos:"verb", m:"to move slowly and quietly", ex:"The night crept over the sea.", f:["crept","creeping"]},
  glint: {w:"glint", pos:"verb", m:"to shine with small, quick flashes of light", ex:"Light came glinting across the sea.", f:["glinting","glinted"]},
  cast: {w:"cast", pos:"verb", m:"to throw a net or fishing line into the water", ex:"They had cast the net five times."},
  grip: {w:"grip", pos:"verb", m:"to hold something tightly", ex:"Soosaiyar gripped the upper half of the net.", f:["gripped"]},
  seize: {w:"seize", pos:"verb", m:"to take hold of something quickly and firmly", ex:"Siluvai seized the lower end.", f:["seized"]},
  heave: {w:"heave", pos:"verb", m:"to lift or pull something heavy with great effort", ex:"Together they heaved it onto the kattumaram.", f:["heaved"]},
  haul: {w:"haul", pos:"verb", m:"to pull something heavy, slowly", ex:"Watch out when you haul the net in."},
  leap: {w:"leap", pos:"verb", m:"to jump suddenly and high", ex:"Bosco leapt up in excitement.", f:["leapt","leaped","leaping"]},
  roll: {w:"roll", pos:"verb", m:"(of eyes) to move round", ex:"The shark was rolling its dark, rounded eyes.", f:["rolling","rolled"]},
  roam: {w:"roam", pos:"verb", m:"to move around freely over a large area", ex:"The varipuliyan always roams the sea in pairs.", f:["roams","roamed"]},
  caution: {w:"caution", pos:"verb", m:"to warn someone to be careful", ex:"'Keep your leg out of the water,' Thomanthirai cautioned.", f:["cautioned"]},
  thrash: {w:"thrash", pos:"verb", m:"to move about wildly and violently", ex:"The varipuliyan thrashed with all its strength.", f:["thrashed","thrashing"]},
  dart: {w:"dart", pos:"verb", m:"to move suddenly and quickly", ex:"It darted furiously alongside the maram.", f:["darted"]},
  refuse: {w:"refuse", pos:"verb", m:"to say firmly that you will not do something", ex:"He refused to return without the fish.", f:["refused"]},
  strain: {w:"strain", pos:"verb", m:"to use a lot of effort", ex:"The men strained at the rope.", f:["strained"]},
  reelin: {w:"reel in", pos:"phrasal verb", m:"to pull in a fish or rope slowly, bit by bit", ex:"Reel it in slowly.", f:["reel it in"]},
  follow: {w:"follow", pos:"verb", m:"to go or come after someone or something", ex:"The black shape is still following us!", f:["follows","following","followed"]},
  slip: {w:"slip", pos:"verb", m:"to put something somewhere quickly and gently", ex:"Gothra slipped the noose around its tail.", f:["slipped"]},
  tighten: {w:"tighten", pos:"verb", m:"to make something firmer or tighter", ex:"He tightened the knot.", f:["tightened"]},
  secure: {w:"secure", pos:"verb", m:"to fasten something firmly so it cannot move", ex:"They secured the shark to the maram.", f:["securing","secured"]},
  capture: {w:"capture", pos:"verb", m:"to catch and hold a person or animal", ex:"They had captured it alive.", f:["captured"]},
  tow: {w:"tow", pos:"verb", m:"to pull a boat or object behind with a rope", ex:"The maram towed the shark ashore.", f:["towing","towed"]},
  slacken: {w:"slacken", pos:"verb", m:"to make a rope looser", ex:"Don't let the rope slacken."},
  extract: {w:"extract", pos:"verb", m:"to take something out, often with effort", ex:"How are we going to extract the hook?", f:["extracting"]},
  gut: {w:"gut", pos:"verb", m:"to cut open a fish and remove the inside parts", ex:"Once we reach shore, gut the fish."},
  brood: {w:"brood", pos:"verb", m:"to keep thinking about something that makes you sad or worried", ex:"Gothra sat brooding over the two sharks."},
  fetch: {w:"fetch", pos:"verb", m:"(of goods) to be sold for a certain price", ex:"This varipuliyan fetches a high price.", f:["fetches"]},
  slice: {w:"slice", pos:"verb", m:"to cut into thin, flat pieces", ex:"Cut the stomach portion into round slices.", f:["slices"]},
  carve: {w:"carve", pos:"verb", m:"to cut meat or fish carefully into pieces", ex:"He carved the fish on a wooden block."},
  slit: {w:"slit", pos:"verb", m:"to make a long, narrow cut", ex:"Slit the fish from tail to head."},
  dry: {w:"dry", pos:"verb", m:"to remove the water from something, here by hanging it in the sun", ex:"Hang it to dry after rubbing with salt."},
  belch: {w:"belch", pos:"verb", m:"to send out a lot of smoke", ex:"The ship belched black smoke."},
  fry: {w:"fry", pos:"verb", m:"to cook food in hot oil", ex:"They fried the fish for dinner."},
  sendfor: {w:"send for", pos:"phrasal verb", m:"to ask someone to come to you", ex:"Send for Irutti and the blacksmith after dusk.", f:["send word for","send word"]},
  propup: {w:"prop up", pos:"phrasal verb", m:"to support something so it stays up", ex:"They propped up his injured leg."},
  deliver: {w:"deliver", pos:"verb", m:"to take something to a person or place", ex:"Deliver the entrails to Thupasi."},
  makeout: {w:"make out", pos:"phrasal verb", m:"to manage to see something that is not clear", ex:"They could make out the faint glimmer of torches."},
  tearapart: {w:"tear apart", pos:"phrasal verb", m:"to separate people or animals who belong together", ex:"It's a great sin to tear a couple apart.", f:["tear a couple apart"]},
  /* ---------- adjectives & adverbs ---------- */
  crimson: {w:"crimson", pos:"adjective", m:"deep red", ex:"The sky was flushed crimson."},
  languorously: {w:"languorously", pos:"adverb", m:"in a slow, relaxed, lazy way", ex:"The sea stretched languorously."},
  placid: {w:"placid", pos:"adjective", m:"calm and peaceful", ex:"The sea lay placid."},
  unruffled: {w:"unruffled", pos:"adjective", m:"smooth and calm, not disturbed", ex:"The water was placid and unruffled."},
  shimmering: {w:"shimmering", pos:"adjective", m:"shining with a soft, moving light", ex:"Close up, the sea appeared a shimmering green."},
  uniform: {w:"uniform", pos:"adjective", m:"the same all over; not changing", ex:"The sea became a uniform mass of blackish blue."},
  luminescent: {w:"luminescent", pos:"adjective", m:"giving out a soft light", ex:"Luminescent plankton swam to the surface."},
  phosphorescent: {w:"phosphorescent", pos:"adjective", m:"glowing in the dark", ex:"The sea glowed with phosphorescent flecks."},
  fleck: {w:"fleck", pos:"noun", m:"a very small spot or mark", ex:"The sea glowed with tiny flecks of light.", f:["flecks"]},
  speckled: {w:"speckled", pos:"adjective", m:"covered with many small spots", ex:"Its upper body was speckled with white dots."},
  rough: {w:"rough", pos:"adjective", m:"not smooth to touch", ex:"Its skin was rough."},
  triangular: {w:"triangular", pos:"adjective", m:"shaped like a triangle, with three corners", ex:"Its head was flat and triangular."},
  serrated: {w:"serrated", pos:"adjective", m:"having a sharp edge with many small points, like a saw", ex:"It had serrated teeth like a saw."},
  pale: {w:"pale", pos:"adjective", m:"light in colour; not bright", ex:"The fins were a pale green."},
  furiously: {w:"furiously", pos:"adverb", m:"in a wild, angry and forceful way", ex:"It darted furiously alongside the maram."},
  nervous: {w:"nervous", pos:"adjective", m:"worried and a little afraid", ex:"Gothra grew nervous."},
  savagely: {w:"savagely", pos:"adverb", m:"in a wild and violent way", ex:"Just look at it pulling so savagely!"},
  trapped: {w:"trapped", pos:"adjective", m:"caught and unable to escape", ex:"It thinks it's trapped."},
  closely: {w:"closely", pos:"adverb", m:"very near", ex:"There's another one under it, following closely."},
  dejected: {w:"dejected", pos:"adjective", m:"sad and without hope", ex:"The female followed, dejected."},
  alive: {w:"alive", pos:"adjective", m:"living; not dead", ex:"We must take it alive."},
  motionless: {w:"motionless", pos:"adjective", m:"not moving at all", ex:"The varipuliyan lay motionless."},
  drained: {w:"drained", pos:"adjective", m:"completely tired, with no energy left", ex:"After the fight, the men were drained."},
  weary: {w:"weary", pos:"adjective", m:"very tired", ex:"You are weak and weary."},
  distended: {w:"distended", pos:"adjective", m:"swollen and stretched out, here by the wind", ex:"Its sail was distended with the wind."},
  steadily: {w:"steadily", pos:"adverb", m:"in a smooth, regular way, without stopping", ex:"The maram ran steadily."},
  glimmer: {w:"glimmer", pos:"noun", m:"a faint, soft light", ex:"They saw the faint glimmer of torches."},
  faint: {w:"faint", pos:"adjective", m:"weak; hard to see or hear", ex:"They could make out the faint glimmer of torches."},
  mottled: {w:"mottled", pos:"adjective", m:"covered with patches of different colours", ex:"The stingrays had mottled backs."},
  buried: {w:"buried", pos:"adjective", m:"stuck deep inside something", ex:"The hook was buried in his leg."}
};

/* ---------- episodes ---------- */
window.EPISODES = [
{
  id:1, title:"Moonlit Nets on the Kattumaram", skill:"Reading", date:"Wednesday, 17 July 1985",
  focus:"Descriptive language: how a writer paints the sea with words.",
  panels:[
    {t:"Wednesday, 17 July 1985. Water. Wherever you looked, any direction you turned, water. Great expanses of water.", k:["expanse"]},
    {t:"Gathering his rays, the sun was sinking below the horizon. Far away, under a sky flushed crimson, the sea stretched languorously. It lay placid, unruffled. As a gentle vadai kondal, the seasonal wind bound south-west, blew, a kattumaram carrying three men pitched and swayed in the rolling waters. Old man Gothra, who wore a mundasu around his head, surveyed the scene.", k:["horizon","crimson","languorously","placid","unruffled","vadaikondal","kattumaram","pitch","sway","mundasu","survey"]},
    {t:"Not a single other kattumaram was within sight. The wind-kissed waters rippled and swirled. Seagulls were riding the surge and fall, bobbing up and down. He was lost in the beauty of it all.", k:["ripple","swirl","bob","kattumaram"]},
    {t:"Close up, the sea appeared a shimmering green, while far away it was a dark blue. With every passing moment, as the night crept over it, the sea was turning into a uniform mass of blackish blue.", k:["shimmering","creep","uniform"]},
    {t:"Towards the east, a flash of light from the Manapad lighthouse came glinting across the sea.", k:["lighthouse","glint"]},
    {t:"They had cast the net five times now and not caught a single fish. This was the sixth time they were lowering and raising the net.", k:["cast"]},
    {t:"As it was the night of the new moon, luminescent plankton and sea creatures that swam to the surface appeared brighter than ever, and the sea glowed here and there with phosphorescent flecks.", k:["luminescent","plankton","phosphorescent","fleck"]},
    {t:"Soosaiyar gripped the upper half of the net while Siluvai seized the lower end, and together they heaved it onto the centre of the kattumaram.", k:["grip","seize","heave"]},
    {s:"Gothra", t:"Watch out when you haul the net in. There may be sea snakes.", k:["haul"]}
  ],
  quiz:[
    {q:"The sea \"lay placid, unruffled\". What was the sea like?", o:["Rough and stormy","Calm and smooth","Dark and frightening","Full of fish"], a:1, e:"Placid means calm, and unruffled means not disturbed: the sea was calm and smooth."},
    {q:"What is a kattumaram?", o:["A fishing net","A seasonal wind","A traditional craft made of logs tied together","A lighthouse"], a:2, e:"A kattumaram is a log raft tied with rope; the three men are fishing from one."},
    {q:"Why did the sea glow \"here and there\"?", o:["The lighthouse shone on it","It was a full moon","Luminescent plankton and sea creatures rose to the surface","The men lit torches"], a:2, e:"It was a new-moon night, so glowing plankton looked brighter than ever."},
    {q:"How many times had they cast the net before this one?", o:["Once","Three times","Five times","Six times"], a:2, e:"They had cast it five times and caught nothing; this was the sixth time."},
    {q:"Choose the word that means 'to lift something heavy with great effort'.", o:["seize","heave","glint","sway"], a:1, e:"Together they heaved the net onto the kattumaram."}
  ],
  task:{type:"write", title:"Paint the sea", prompt:"Look out at a sea, river, lake or sky you know. Write 4–5 sentences describing it at sunset. Use at least three words from this episode (for example: horizon, crimson, shimmering, placid, ripple)."}
},
{
  id:2, title:"The Varipuliyan", skill:"Vocabulary",
  focus:"Describing an animal: colour, shape, texture and movement.",
  panels:[
    {t:"Suddenly, Bosco leapt up in excitement.", s2:"Gothra, look! Down… over there!", k:["leap","excitement"]},
    {t:"There it was: a varipuliyan, rolling its dark, rounded eyes.", k:["varipuliyan","roll","jaw"]},
    {t:"The shark's upper body was a deep green, speckled with white dots. Its skin was rough and its head was flat and triangular.", k:["speckled","rough","triangular"]},
    {t:"Its mouth was wide open, with serrated teeth like a saw. The long fin on its tail and the fins on its sides and back were a pale green.", k:["serrated","fin","pale"]},
    {t:"\"You're to be careful from now on, Gothra. The varipuliyan always roams the sea in pairs,\" said Thomanthirai.", k:["roam","pair"]},
    {t:"\"What now?\" \"Don't put your leg anywhere in the water, not even by mistake,\" Thomanthirai cautioned.", k:["caution"]},
    {t:"The varipuliyan thrashed and darted furiously alongside the maram.", k:["thrash","dart","furiously","maram"]},
    {t:"Gothra grew nervous. Thomanthirai, weak and bleeding, still refused to return without the fish.", s2:"We cannot go back without the fish!", k:["nervous","refuse"]}
  ],
  quiz:[
    {q:"Which description matches the varipuliyan's skin?", o:["Smooth and shiny","Rough","Soft and furry","Scaly and yellow"], a:1, e:"\"Its skin was rough.\""},
    {q:"\"Serrated teeth like a saw\" means the teeth…", o:["were very small","had many sharp points along the edge","were missing","were flat and blunt"], a:1, e:"Serrated means having a sharp, saw-like edge."},
    {q:"Why does Thomanthirai tell Gothra to be careful?", o:["The maram is sinking","The varipuliyan always roams in pairs","A storm is coming","The net is torn"], a:1, e:"He warns that the varipuliyan always roams the sea in pairs, so another may be near."},
    {q:"What is the opposite of 'refused'?", o:["agreed","shouted","darted","cautioned"], a:0, e:"To refuse is to say no; to agree is to say yes."},
    {q:"Which word describes the shark's head?", o:["round","triangular","speckled","pale"], a:1, e:"\"Its head was flat and triangular.\""}
  ],
  task:{type:"write", title:"Describe a sea creature", prompt:"Choose a fish or sea animal you have seen in your area or at the market. Describe it in 5 sentences: its colour, shape, skin, size and how it moves. Use at least three describing words from this episode."}
},
{
  id:3, title:"Moonlit Battle", skill:"Listening",
  focus:"Listen for action verbs: thrash, leap, strain, reel in.",
  panels:[
    {t:"The varipuliyan swam, leapt, and thrashed with all its strength.", k:["leap","thrash","strength"]},
    {t:"Just look at it pulling so savagely!", k:["savagely","strain"]},
    {t:"It thinks it's trapped and keeps trying to break free.", k:["trapped","instinct"]},
    {t:"There's another one under it, following closely.", k:["mate","closely","follow"]},
    {t:"They must be a pair. Now that her mate is caught, the female follows him sadly…", k:["pair","mate","affection","dejected"]},
    {t:"Who knows how much longer it will give us the runaround?", k:["runaround"]},
    {t:"Reel it in slowly. Tie it well, by the tail and the belly. We must take it alive.", k:["reelin","belly","alive","noose","secure"]},
    {t:"At last, the varipuliyan drew close to the maram, with little resistance.", k:["resistance","maram"]},
    {t:"Gothra slipped the noose around its tail and tightened the knot.", k:["slip","noose","tighten","knot"]},
    {t:"The varipuliyan lay motionless, its eyes half-closed. They had caught it alive.", k:["motionless","capture","alive"]}
  ],
  quiz:[
    {q:"Listen to panel 3 (🔊). Why does the shark keep fighting?", o:["It is hungry","It thinks it is trapped","It wants to attack the men","It is looking for food"], a:1, e:"\"It thinks it's trapped and keeps trying to break free.\""},
    {q:"What did the men notice under the hooked shark?", o:["A sea snake","A school of fish","Another shark following closely","A broken net"], a:2, e:"\"There's another one under it, following closely\": its mate."},
    {q:"How did the men want to take the shark?", o:["Dead","Alive","Cut into pieces","Only the fins"], a:1, e:"\"We must take it alive.\""},
    {q:"\"With little resistance\" means the shark…", o:["fought very hard","hardly fought back","swam away","jumped high"], a:1, e:"Resistance is a force fighting back; 'little resistance' means it hardly fought."},
    {q:"What did Gothra slip around the tail?", o:["A hook","A noose","A net","An aruval"], a:1, e:"\"Gothra slipped the noose around its tail and tightened the knot.\""}
  ],
  task:{type:"speak", title:"Say it with feeling", prompt:"Listen to the line, then record yourself saying it. Try to sound like a tired fisherman giving careful orders.", line:"Reel it in slowly. Tie it well, by the tail and the belly. We must take it alive."}
},
{
  id:4, title:"A Bond of Affection", skill:"Speaking",
  focus:"Feelings and values: affection, sin, livelihood.",
  panels:[
    {scene:true, t:"The men lash the giant varipuliyan to the side of the maram with ropes and a noose, so that it cannot slip away.", k:["noose","varikkal","slacken","secure"]},
    {t:"About fourteen feet long!", k:["dorsalfin","pectoralfin","drained"]},
    {t:"Look! The black shape is still following us!", k:["tow","follow"]},
    {t:"What great affection! The mate still follows…", k:["affection","bond","mate"]},
    {t:"It's a great sin to tear a couple apart.", k:["sin","tearapart","livelihood","brood"]},
    {t:"A good way off, they saw a school of yaanai thirukkai (whiptail stingrays) swim up for air.", k:["school","yaanaithirukkai","mottled","shoal","reef"]},
    {t:"How are we going to extract the hook?", s2:"We must send word for the blacksmith with an iron saw.", k:["extract","sendfor","blacksmith"]},
    {t:"Drink this kanji. You are weak and weary.", k:["kanji","weary"]},
    {t:"Once we reach shore, gut the fish, extract the oil, and give it to the petty officer.", k:["gut","extract","pettyofficer","shore"]},
    {t:"Soon it was dawn. The maram ran steadily, its sail distended with the wind.", k:["dawn","distended","steadily"]}
  ],
  quiz:[
    {q:"How long was the varipuliyan?", o:["About four feet","About fourteen feet","About forty feet","About one metre"], a:1, e:"\"About fourteen feet long!\""},
    {q:"Who was 'the black shape' following the maram?", o:["Another boat","The shark's mate","A school of stingrays","A sea snake"], a:1, e:"The mate kept following the captured shark."},
    {q:"Why does the fisherman feel it is 'a great sin'?", o:["They caught too many fish","They separated a couple that loved each other","They went to sea on a holy day","They lost the net"], a:1, e:"\"It's a great sin to tear a couple apart.\""},
    {q:"What is kanji?", o:["Fish curry","Thin rice porridge","Dried fish","A rope"], a:1, e:"Kanji is thin rice porridge, given to the weak, injured man."},
    {q:"Who will they ask to take out the hook?", o:["The petty officer","The melinji","The blacksmith","A doctor"], a:2, e:"\"We must send word for the blacksmith with an iron saw.\""}
  ],
  task:{type:"speak", title:"Your opinion in one minute", prompt:"Speak for about one minute: Was it right to catch the varipuliyan when its mate was following? Give one reason for the fishermen (livelihood) and one reason against (the bond between the pair). Use the words affection, livelihood and sin.", line:"It's a great sin to tear a couple apart."}
},
{
  id:5, title:"From Sea to Shore", skill:"Writing",
  focus:"Sequencing a process: first, then, after that, finally.",
  panels:[
    {t:"The petty officer and the melinji will be at the shore.", s2:"For the fins, no doubt!", k:["pettyofficer","melinji","fin","aruval"]},
    {t:"Cut the stomach portion into round slices for the neighbours.", k:["slice","carve","kuzhambu"]},
    {t:"Cut the rest from tail to head and hang it to dry after rubbing with salt and turmeric.", k:["slit","dry","turmeric"]},
    {t:"This varipuliyan fetches a high price. Miranda Pillai's men will take it tonight.", k:["fetch","sambai"]},
    {t:"See that ship? In Colombo, they pay any price for this stuff.", k:["demand","belch"]},
    {t:"Can we eat its intestines? Will it be tasty?", s2:"I've seen people eat thirukkai intestines, but never this one!", k:["intestines","thirukkai","fry"]},
    {t:"How will we remove the hook in your leg?", s2:"Take me home at once. Send for Irutti and the blacksmith after dusk.", k:["buried","propup","sendfor","blacksmith","dusk"]},
    {t:"We must remove the hook, cut the fish, give the oil to the petty officer, and deliver the entrails to Thupasi.", k:["entrails","deliver","pettyofficer"]},
    {t:"Soon it was dawn. The maram ran steadily, its sail distended with the wind.", k:["dawn","maram","distended","steadily"]},
    {t:"Dusk had set in. Far away, they could make out the faint glimmer of torches lining the seashore.", k:["dusk","makeout","faint","glimmer","torch","shore"]}
  ],
  quiz:[
    {q:"What will the neighbours get?", o:["The fins","Round slices from the stomach portion","The oil","The entrails"], a:1, e:"\"Cut the stomach portion into round slices for the neighbours.\""},
    {q:"How is the rest of the fish preserved?", o:["Fried in oil","Rubbed with salt and turmeric, then dried","Kept in ice","Cooked in kuzhambu"], a:1, e:"It is rubbed with salt and turmeric and hung to dry."},
    {q:"\"This varipuliyan fetches a high price.\" Here 'fetches' means…", o:["brings back","is sold for","swims towards","throws"], a:1, e:"Goods 'fetch' a price when they are sold for that amount."},
    {q:"Where do people 'pay any price' for shark products?", o:["Manapad","Chennai","Colombo","Madurai"], a:2, e:"\"In Colombo, they pay any price for this stuff.\""},
    {q:"What could they see at dusk on the shore?", o:["The lighthouse","The faint glimmer of torches","A big ship","The petty officer"], a:1, e:"They could make out the faint glimmer of torches lining the seashore."}
  ],
  task:{type:"write", title:"From catch to market", prompt:"Write a paragraph (6–8 sentences) explaining what the fishermen do with the varipuliyan after they reach the shore. Use sequence words: First, Then, After that, Next, Finally. Use at least four words from this episode."}
},
{
  id:6, title:"The Whole Story in Ten Panels", skill:"Review",
  focus:"Retell the full story and revise the key sea words.",
  panels:[
    {t:"Gothra, look! Over there!", k:["varipuliyan"]},
    {t:"The hooked fish thrashed and leapt furiously.", k:["thrash","leap","furiously"]},
    {t:"Pull! Hold it tight!", k:["strain","reelin"]},
    {t:"Look! Another one is following it closely.", k:["twosome","follow","closely"]},
    {t:"We must take it alive. Tie the tail and the belly carefully.", k:["bowline","secure","alive"]},
    {scene:true, t:"The varipuliyan lies tied to the maram, held fast by ropes and a noose.", k:["maram","noose"]},
    {t:"Drink this kanji. You are too weak.", k:["kanji","weary"]},
    {t:"It's a great sin to tear a couple apart…", k:["affection","brood","sin"]},
    {t:"A good price for the fins, oil, and sambai!", k:["sambai","fetch"]},
    {t:"Dusk has set. Let's go ashore and call the blacksmith.", k:["blacksmith","torch","dusk"]}
  ],
  quiz:[
    {q:"What happens FIRST in the story?", o:["They tie the shark to the maram","They see the varipuliyan","They reach the shore at dusk","The old man drinks kanji"], a:1, e:"The story begins with the sighting: \"Gothra, look! Over there!\""},
    {q:"'Twosome' means…", o:["a pair","a fishing net","a rope","a storm"], a:0, e:"A twosome is a group of two: the shark and its mate."},
    {q:"Which word means 'to keep thinking sadly about something'?", o:["brood","bob","belch","bowline"], a:0, e:"The old man broods over the two sharks he separated."},
    {q:"What do the men plan to sell?", o:["Only the eyes","The fins, oil and sambai","The maram","The net"], a:1, e:"\"A good price for the fins, oil, and sambai!\""},
    {q:"Why do they need the blacksmith?", o:["To repair the maram","To sharpen the aruval","To remove the hook from a fisherman's leg","To make a new anchor"], a:2, e:"The hook is buried in a fisherman's leg, so they call the blacksmith to cut it out."}
  ],
  order:["They see the varipuliyan in the water.","The hooked fish thrashes and leaps.","They notice its mate following closely.","They tie the tail and belly and take it alive.","The old man feels it is a sin to separate the pair.","At dusk they head ashore to call the blacksmith."],
  task:{type:"write", title:"Retell the story", prompt:"Retell the whole story in 8–10 sentences as if you were Gothra, speaking to your grandchildren. Begin: 'It was a new-moon night in 1985…'. Use at least six sea words from your Word bank."}
}
];

/* image sizes (auto-generated) */
window.PANEL_DIMS = {"ep1-01":[968,692],"ep1-02":[1100,368],"ep1-03":[1082,496],"ep1-04":[1010,496],"ep1-05":[934,496],"ep1-06":[796,796],"ep1-07":[724,796],"ep1-08":[668,796],"ep1-09":[828,796],"ep2-01":[752,952],"ep2-02":[760,952],"ep2-03":[754,952],"ep2-04":[740,952],"ep2-05":[746,1042],"ep2-06":[754,1042],"ep2-07":[734,1042],"ep2-08":[774,1042],"ep3-01":[600,948],"ep3-02":[610,948],"ep3-03":[594,948],"ep3-04":[596,948],"ep3-05":[610,948],"ep3-06":[612,1038],"ep3-07":[588,1038],"ep3-08":[598,1038],"ep3-09":[622,1038],"ep3-10":[578,1038],"ep4-01":[618,956],"ep4-02":[600,956],"ep4-03":[616,956],"ep4-04":[610,956],"ep4-05":[576,956],"ep4-06":[620,1028],"ep4-07":[612,1028],"ep4-08":[604,1028],"ep4-09":[588,1028],"ep4-10":[594,1028],"ep5-01":[618,1002],"ep5-02":[604,1002],"ep5-03":[598,1002],"ep5-04":[594,1002],"ep5-05":[604,1002],"ep5-06":[610,1004],"ep5-07":[604,1004],"ep5-08":[612,1004],"ep5-09":[590,1004],"ep5-10":[600,1004],"ep6-01":[664,886],"ep6-02":[654,886],"ep6-03":[646,886],"ep6-04":[656,886],"ep6-05":[652,886],"ep6-06":[666,938],"ep6-07":[630,938],"ep6-08":[630,938],"ep6-09":[652,938],"ep6-10":[690,938]};
