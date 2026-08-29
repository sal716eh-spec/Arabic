/* Unit content for the Sentences drills — shared with the mixed session. */
const DATA=[
{
  n:"01",ar:"التَّحِيَّةُ وَالتَّعارُفُ",en:"Greetings & introductions",src:"book",
  dialogue:[
    ["خ","السَّلامُ عَلَيْكُمْ.","Peace be upon you."],
    ["ع","وَعَلَيْكُمُ السَّلامُ. كَيْفَ حالُكَ؟","And upon you. How are you?"],
    ["خ","بِخَيْرٍ، الْحَمْدُ لِلَّهِ. ما اسْمُكَ؟","Fine, praise God. What's your name?"],
    ["ع","اسْمِي عُمَرُ. وَما اسْمُكَ أَنْتَ؟","My name is Umar. And what's yours?"],
    ["خ","اسْمِي خالِدٌ. أَهْلًا وَسَهْلًا.","My name is Khalid. Welcome."],
    ["ع","ما جِنْسِيَّتُكَ يا خالِدُ؟","What's your nationality, Khalid?"],
    ["خ","أَنا باكِسْتانِيٌّ. وَأَنْتَ، مِنْ أَيْنَ أَنْتَ؟","I'm Pakistani. And you, where are you from?"],
    ["ع","أَنا مِنْ مِصْرَ. هَلْ أَنْتَ طالِبٌ؟","I'm from Egypt. Are you a student?"],
    ["خ","لا، أَنا مُهَنْدِسٌ. وَهَذِهِ أُخْتِي، هِيَ طَبِيبَةٌ.","No, I'm an engineer. And this is my sister — she's a doctor."],
    ["ع","أَهْلًا وَسَهْلًا. مَعَ السَّلامَةِ.","Welcome. Goodbye."]
  ],
  ladders:[
    {steps:["أَنا خالِدٌ","وَأَنا باكِسْتانِيٌّ","وَأَنا مُهَنْدِسٌ","، وَهَذا صَدِيقِي","وَهُوَ مُدَرِّسٌ"],
     en:"I'm Khalid → and I'm Pakistani → and I'm an engineer → and this is my friend → and he's a teacher."},
    {steps:["هَذِهِ أُخْتِي","هِيَ طالِبَةٌ","فِي الْجامِعَةِ","، وَهَذِهِ صَدِيقَتُها","وَهِيَ طَبِيبَةٌ"],
     en:"This is my sister → she's a student → at the university → and this is her friend → and she's a doctor."},
    {steps:["أَنا طالِبٌ","فِي الْجامِعَةِ","وَصَدِيقِي مُهَنْدِسٌ","، وَأُخْتِي طَبِيبَةٌ","وَأَخِي مُدَرِّسٌ"],
     en:"I'm a student → at the university → and my friend is an engineer → and my sister is a doctor → and my brother is a teacher."},
    {steps:["ما اسْمُكَ","وَما جِنْسِيَّتُكَ","وَمِنْ أَيْنَ أَنْتَ","، وَهَلْ أَنْتَ طالِبٌ","أَمْ مُدَرِّسٌ؟"],
     en:"What's your name → and your nationality → and where are you from → and are you a student → or a teacher?"}
  ],
  subs:[
    {tpl:["أَنا ",["طالِبٌ","مُدَرِّسٌ","مُهَنْدِسٌ","طَبِيبٌ"]," ."],en:"I am a ___ . All four jobs come straight from unit 1."},
    {tpl:["هَذِهِ ",["صَدِيقَتِي","أُخْتِي","طالِبَةٌ","طَبِيبَةٌ"]," ."],en:"This is ___ . Feminine throughout — هَذِهِ, and the ة on every word."},
    {tpl:["ما ",["اسْمُكَ","جِنْسِيَّتُكَ","اسْمُها","جِنْسِيَّتُهُ"]," ؟"],en:"What is ___ ? Swap the possessive ending and the whole question changes person."},
    {tpl:[["أَنا","هُوَ","هِيَ","صَدِيقِي"]," مِنْ ",["مِصْرَ","باكِسْتانَ","بِرِيطانْيا","تُرْكِيا"]," ."],en:"___ is from ___ . Sixteen sentences; the country never changes shape after مِنْ here because these are all diptotes."}
  ],
  transforms:[
    {task:["حَوِّلْ إِلَى الْمُؤَنَّثِ","Change to feminine"],src:"هَذا طالِبٌ.",ans:"هَذِهِ طالِبَةٌ."},
    {task:["حَوِّلْ إِلَى الْمُخاطَبَةِ","Address a woman"],src:"ما اسْمُكَ؟",ans:"ما اسْمُكِ؟"},
    {task:["اجْعَلْها سُؤالًا بِـ (هَلْ)","Make it a yes/no question"],src:"أَنْتَ مُهَنْدِسٌ.",ans:"هَلْ أَنْتَ مُهَنْدِسٌ؟"},
    {task:["اسْأَلْ عَنِ الْجِنْسِيَّةِ","Ask about nationality"],src:"أَنا باكِسْتانِيٌّ.",ans:"ما جِنْسِيَّتُكَ؟"},
    {task:["حَوِّلْ إِلَى (هُوَ)","Change to 'he'"],src:"أَنا مُدَرِّسٌ.",ans:"هُوَ مُدَرِّسٌ."},
    {task:["أَجِبْ بِالنَّفْيِ","Answer in the negative"],src:"هَلْ أَنْتَ طالِبٌ؟",ans:"لا، أَنا مُدَرِّسٌ."}
  ],
  builds:[
    {parts:["السَّلامُ عَلَيْكُمْ","، كَيْفَ","حالُكَ","يا صَدِيقِي؟"],en:"Peace be upon you — how are you, my friend?"},
    {parts:["أَنا بِخَيْرٍ","، الْحَمْدُ لِلَّهِ","، وَما","اسْمُكَ أَنْتَ؟"],en:"I'm fine, praise God — and what's your name?"},
    {parts:["هَذِهِ أُخْتِي","، وَهِيَ","طالِبَةٌ","فِي الْجامِعَةِ"],en:"This is my sister, and she's a student at the university."},
    {parts:["ما جِنْسِيَّتُكَ؟","أَنا","باكِسْتانِيٌّ","وَصَدِيقِي مِصْرِيٌّ"],en:"What's your nationality? I'm Pakistani and my friend is Egyptian."},
    {parts:["هَلْ أَنْتَ","مُهَنْدِسٌ","أَمْ","مُدَرِّسٌ؟"],en:"Are you an engineer or a teacher?"}
  ],
  prompts:[
    ["عَرِّفْ بِنَفْسِكَ فِي ثَلاثِ جُمَلٍ.","Introduce yourself in three sentences.",
     "السَّلامُ عَلَيْكُمْ، اسْمِي جُونُ. أَنا مِنْ بِرِيطانْيا. أَنا مُهَنْدِسٌ، وَأَدْرُسُ اللُّغَةَ الْعَرَبِيَّةَ.",
     "Peace be upon you, my name is John. I'm from Britain. I'm an engineer, and I study Arabic."],
    ["اسْأَلْنِي أَرْبَعَةَ أَسْئِلَةٍ عَنْ نَفْسِي.","Ask me four questions about myself.",
     "ما اسْمُكَ؟ ما جِنْسِيَّتُكَ؟ مِنْ أَيْنَ أَنْتَ؟ هَلْ أَنْتَ طالِبٌ؟",
     "What's your name? What's your nationality? Where are you from? Are you a student?"],
    ["عَرِّفْ بِصَدِيقٍ لَكَ.","Introduce a friend of yours.",
     "هَذا صَدِيقِي عُمَرُ. هُوَ مِنْ مِصْرَ، وَهُوَ مُدَرِّسٌ فِي الْمَدْرَسَةِ.",
     "This is my friend Umar. He's from Egypt, and he's a teacher at the school."],
    ["كَيْفَ تُحَيِّي شَخْصًا وَكَيْفَ تُوَدِّعُهُ؟","How do you greet someone and how do you say goodbye?",
     "أَقُولُ: السَّلامُ عَلَيْكُمْ، كَيْفَ حالُكَ؟ وَعِنْدَ الْوَداعِ أَقُولُ: مَعَ السَّلامَةِ.",
     "I say: peace be upon you, how are you? And when leaving: goodbye."],
    ["تَكَلَّمْ عَنْ أُخْتِكَ أَوْ أَخِيكَ فِي جُمْلَتَيْنِ.","Say two sentences about your brother or sister.",
     "هَذِهِ أُخْتِي، هِيَ طَبِيبَةٌ. وَهَذا أَخِي، هُوَ طالِبٌ فِي الْجامِعَةِ.",
     "This is my sister, she's a doctor. And this is my brother, he's a student at the university."]
  ]
},
{
  n:"02",ar:"الأُسْرَةُ",en:"The family",src:"book",
  dialogue:[
    ["خ","مَنْ هَذا فِي الصُّورَةِ؟","Who's this in the photo?"],
    ["ع","هَذا وَالِدِي، وَهَذِهِ وَالِدَتِي.","This is my father, and this is my mother."],
    ["خ","ما شاءَ اللهُ! وَمَنْ هَذا؟","Mashallah! And who's this?"],
    ["ع","هَذا جَدِّي، وَهَذِهِ جَدَّتِي، وَهَذا عَمِّي.","This is my grandfather, this is my grandmother, and this is my uncle."],
    ["خ","أُسْرَتُكَ كَبِيرَةٌ، ما شاءَ اللهُ.","Your family is big, mashallah."],
    ["ع","نَعَمْ، فِيها تِسْعَةُ أَوْلادٍ.","Yes, there are nine children in it."],
    ["خ","اللهُ أَكْبَرُ... هَذا أَذانُ الْفَجْرِ.","Allahu akbar… that's the call to Fajr prayer."],
    ["ع","هَيَّا بِنا إِلى الْمَسْجِدِ.","Let's go to the mosque."],
    ["خ","أَتَوَضَّأُ أَوَّلًا، ثُمَّ نَذْهَبُ.","I'll do wudu first, then we'll go."],
    ["ع","وَبَعْدَ الصَّلاةِ نَقْرَأُ الْقُرْآنَ فِي الْمُصَلَّى.","And after the prayer we'll read Qur'an in the prayer room."]
  ],
  ladders:[
    {steps:["هَذِهِ صُورَةُ أُسْرَتِي","فِيها وَالِدِي وَوالِدَتِي","وَجَدِّي وَجَدَّتِي","، وَفِيها عَمِّي","وَعَمَّتِي أَيْضًا"],
     en:"This is a photo of my family → with my father and mother in it → and my grandfather and grandmother → and my uncle → and my aunt too."},
    {steps:["سَمِعْتُ الأَذانَ","أَذانَ الْفَجْرِ","، ثُمَّ تَوَضَّأْتُ","، ثُمَّ ذَهَبْتُ إِلى الْمَسْجِدِ","وَصَلَّيْتُ مَعَ وَالِدِي"],
     en:"I heard the adhan → the Fajr adhan → then I did wudu → then I went to the mosque → and prayed with my father."},
    {steps:["أُسْرَتِي كَبِيرَةٌ","فِيها تِسْعَةُ أَوْلادٍ","وَكُلُّهُمْ طُلَّابٌ","، وَوالِدَتِي مُعَلِّمَةٌ","وَوالِدِي مُهَنْدِسٌ"],
     en:"My family is big → there are nine children → and they're all students → and my mother is a teacher → and my father is an engineer."},
    {steps:["بَعْدَ الصَّلاةِ","أَقْرَأُ الْقُرْآنَ","فِي الْمُصَلَّى","، ثُمَّ أَرْجِعُ إِلى الْبَيْتِ","مَعَ جَدِّي"],
     en:"After the prayer → I read Qur'an → in the prayer room → then I go back home → with my grandfather."}
  ],
  subs:[
    {tpl:["هَذا ",["وَالِدِي","جَدِّي","عَمِّي","ابْنِي"]," ."],en:"This is my ___ . Masculine family members."},
    {tpl:["هَذِهِ ",["وَالِدَتِي","جَدَّتِي","عَمَّتِي","ابْنَتِي"]," ."],en:"This is my ___ . The feminine partners of the four above — drill them as pairs."},
    {tpl:["فِي أُسْرَتِي ",["سَبْعَةُ أَوْلادٍ","ثَمانِيَةُ أَوْلادٍ","تِسْعَةُ أَوْلادٍ","عَشَرَةُ أَوْلادٍ"]," ."],en:"In my family there are ___ children. Numbers 7–10 from this unit."},
    {tpl:[["وَالِدِي","جَدِّي","عَمِّي","ابْنِي"]," يُصَلِّي فِي ",["الْمَسْجِدِ","الْمُصَلَّى","الْبَيْتِ","الْجامِعَةِ"]," ."],en:"___ prays at ___ . Sixteen combinations."}
  ],
  transforms:[
    {task:["حَوِّلْ إِلَى الْمُؤَنَّثِ","Change to feminine"],src:"هَذا وَالِدِي.",ans:"هَذِهِ وَالِدَتِي."},
    {task:["حَوِّلْ إِلَى (هُوَ)","Change to 'he'"],src:"أَتَوَضَّأُ ثُمَّ أُصَلِّي.",ans:"يَتَوَضَّأُ ثُمَّ يُصَلِّي."},
    {task:["اسْأَلْ عَنِ الشَّخْصِ","Ask who it is"],src:"هَذا جَدِّي.",ans:"مَنْ هَذا؟"},
    {task:["اسْأَلْ عَنِ الْمَكانِ","Ask where"],src:"أُصَلِّي فِي الْمَسْجِدِ.",ans:"أَيْنَ تُصَلِّي؟"},
    {task:["حَوِّلْ إِلَى الْماضِي","Change to the past"],src:"أَقْرَأُ الْقُرْآنَ بَعْدَ الْفَجْرِ.",ans:"قَرَأْتُ الْقُرْآنَ بَعْدَ الْفَجْرِ."},
    {task:["اِرْبِطْ بِـ (ثُمَّ)","Join them with 'then'"],src:"أَتَوَضَّأُ. أَذْهَبُ إِلى الْمَسْجِدِ.",ans:"أَتَوَضَّأُ، ثُمَّ أَذْهَبُ إِلى الْمَسْجِدِ."}
  ],
  builds:[
    {parts:["هَذِهِ","صُورَةُ أُسْرَتِي","، وَهَذا","وَالِدِي"],en:"This is a photo of my family, and this is my father."},
    {parts:["سَمِعْتُ","أَذانَ الْفَجْرِ","، ثُمَّ","تَوَضَّأْتُ"],en:"I heard the Fajr adhan, then I did wudu."},
    {parts:["هَيَّا بِنا","إِلى الْمَسْجِدِ","، الصَّلاةُ","بَعْدَ قَلِيلٍ"],en:"Let's go to the mosque — the prayer is in a moment."},
    {parts:["فِي أُسْرَتِي","تِسْعَةُ أَوْلادٍ","، وَكُلُّهُمْ","طُلَّابٌ"],en:"In my family there are nine children, and they're all students."},
    {parts:["أَقْرَأُ الْقُرْآنَ","فِي الْمُصَلَّى","بَعْدَ","صَلاةِ الْفَجْرِ"],en:"I read Qur'an in the prayer room after the Fajr prayer."}
  ],
  prompts:[
    ["صِفْ أُسْرَتَكَ فِي أَرْبَعِ جُمَلٍ.","Describe your family in four sentences.",
     "أُسْرَتِي صَغِيرَةٌ. هَذا وَالِدِي وَهَذِهِ وَالِدَتِي. عِنْدِي أَخٌ وَأُخْتٌ. جَدِّي يَسْكُنُ مَعَنا.",
     "My family is small. This is my father and this is my mother. I have a brother and a sister. My grandfather lives with us."],
    ["تَكَلَّمْ عَنْ صُورَةِ أُسْرَتِكَ.","Talk about a photo of your family.",
     "فِي هَذِهِ الصُّورَةِ وَالِدِي وَوالِدَتِي، وَجَدِّي وَجَدَّتِي، وَعَمِّي وَعَمَّتِي. ما شاءَ اللهُ.",
     "In this photo are my father and mother, my grandfather and grandmother, and my uncle and aunt. Mashallah."],
    ["ماذا تَفْعَلُ بَعْدَ أَذانِ الْفَجْرِ؟","What do you do after the Fajr adhan?",
     "أَسْتَيْقِظُ، ثُمَّ أَتَوَضَّأُ، ثُمَّ أَذْهَبُ إِلى الْمَسْجِدِ وَأُصَلِّي، ثُمَّ أَقْرَأُ الْقُرْآنَ.",
     "I wake up, do wudu, go to the mosque and pray, then read Qur'an."],
    ["مَنْ يَسْكُنُ مَعَكَ فِي الْبَيْتِ؟","Who lives with you at home?",
     "يَسْكُنُ مَعِي وَالِدِي وَوالِدَتِي وَأَخِي. جَدَّتِي تَسْكُنُ قَرِيبًا مِنَّا.",
     "My father, mother and brother live with me. My grandmother lives near us."],
    ["ما مِهْنَةُ وَالِدِكَ وَوالِدَتِكَ؟","What do your parents do?",
     "وَالِدِي مُهَنْدِسٌ، وَوالِدَتِي مُعَلِّمَةٌ فِي مَدْرَسَةٍ قَرِيبَةٍ.",
     "My father is an engineer, and my mother is a teacher at a nearby school."]
  ]
},
{
  n:"03",ar:"السَّكَنُ",en:"Housing",src:"book",
  dialogue:[
    ["خ","أَيْنَ تَسْكُنُ؟","Where do you live?"],
    ["ع","أَسْكُنُ فِي شَقَّةٍ فِي حَيِّ الْجامِعَةِ.","I live in a flat in the university district."],
    ["خ","فِي أَيِّ دَوْرٍ؟","On which floor?"],
    ["ع","فِي الدَّوْرِ الْخامِسِ، الشَّقَّةُ رَقْمُ خَمْسَةٍ.","On the fifth floor, flat number five."],
    ["خ","كَمْ غُرْفَةً فِيها؟","How many rooms does it have?"],
    ["ع","فِيها خَمْسُ غُرَفٍ، مِنْها غُرْفَةُ نَوْمٍ وَغُرْفَةُ جُلُوسٍ.","It has five rooms, including a bedroom and a sitting room."],
    ["خ","وَماذا فِي غُرْفَةِ النَّوْمِ؟","And what's in the bedroom?"],
    ["ع","فِيها سَرِيرٌ وَسِتارَةٌ وَمِرْآةٌ وَسَجَّادَةٌ.","There's a bed, a curtain, a mirror and a rug."],
    ["خ","هَلْ أَنْتَ الْمُؤَجِّرُ؟","Are you the landlord?"],
    ["ع","لا، أَنا الْمُسْتَأْجِرُ. تَفَضَّلْ، ادْخُلْ مِنْ فَضْلِكَ.","No, I'm the tenant. Please, come in."]
  ],
  ladders:[
    {steps:["أَسْكُنُ فِي شَقَّةٍ","فِي الدَّوْرِ الْخامِسِ","فِي حَيِّ الْجامِعَةِ","، وَفِيها خَمْسُ غُرَفٍ","وَهِيَ جَمِيلَةٌ"],
     en:"I live in a flat → on the fifth floor → in the university district → and it has five rooms → and it's lovely."},
    {steps:["فِي غُرْفَةِ النَّوْمِ","سَرِيرٌ","وَسِتارَةٌ وَمِرْآةٌ","، وَفِيها سَجَّادَةٌ","جَمِيلَةٌ جِدًّا"],
     en:"In the bedroom → a bed → and a curtain and a mirror → and there's a rug in it → a very beautiful one."},
    {steps:["أَنا الْمُسْتَأْجِرُ","وَهَذا الْمُؤَجِّرُ","وَهَذِهِ شَقَّتُهُ","، وَدَخَلْتُها","يَوْمَ الْخَمِيسِ"],
     en:"I'm the tenant → and this is the landlord → and this is his flat → and I moved in → on Thursday."},
    {steps:["فِي الشَّقَّةِ","ثَلَّاجَةٌ وَفُرْنٌ","وَسَخَّانٌ","، وَفِي غُرْفَةِ الْجُلُوسِ","تِلْفازٌ لِلْمُشاهَدَةِ"],
     en:"In the flat → a fridge and an oven → and a water heater → and in the sitting room → a television to watch."}
  ],
  subs:[
    {tpl:["أَسْكُنُ فِي ",["شَقَّةٍ","بَيْتٍ","غُرْفَةٍ","الدَّوْرِ الْخامِسِ"]," ."],en:"I live in ___ ."},
    {tpl:["فِي الْغُرْفَةِ ",["سَرِيرٌ","سِتارَةٌ","مِرْآةٌ","سَجَّادَةٌ"]," ."],en:"In the room there's ___ . Note the word order — the preposition phrase comes first."},
    {tpl:["أَذْهَبُ يَوْمَ ",["السَّبْتِ","الثَّلاثاءِ","الْخَمِيسِ","الْجُمُعَةِ"]," ."],en:"I go on ___ . The four weekday names taught in this unit."},
    {tpl:["الشَّقَّةُ فِي الدَّوْرِ ",["الأَوَّلِ","الثَّانِي","الثَّالِثِ","الْخامِسِ"]," ، وَرَقْمُها ",["واحِدٌ","ثَلاثَةٌ","خَمْسَةٌ"]," ."],en:"The flat is on the ___ floor, and its number is ___ . Ordinals in one slot, cardinals in the other."}
  ],
  transforms:[
    {task:["اسْأَلْ عَنِ الْمَكانِ","Ask where"],src:"أَسْكُنُ فِي حَيِّ الْجامِعَةِ.",ans:"أَيْنَ تَسْكُنُ؟"},
    {task:["اسْأَلْ عَنِ الْعَدَدِ","Ask how many"],src:"فِي الشَّقَّةِ خَمْسُ غُرَفٍ.",ans:"كَمْ غُرْفَةً فِي الشَّقَّةِ؟"},
    {task:["حَوِّلْ إِلَى (هُوَ)","Change to 'he'"],src:"أَسْكُنُ فِي بَيْتٍ كَبِيرٍ.",ans:"يَسْكُنُ فِي بَيْتٍ كَبِيرٍ."},
    {task:["أَجِبْ بِالنَّفْيِ","Answer in the negative"],src:"هَلْ أَنْتَ الْمُؤَجِّرُ؟",ans:"لا، أَنا الْمُسْتَأْجِرُ."},
    {task:["حَوِّلْ إِلَى الْماضِي","Change to the past"],src:"أَدْخُلُ الشَّقَّةَ.",ans:"دَخَلْتُ الشَّقَّةَ."},
    {task:["اسْأَلْ عَنِ الدَّوْرِ","Ask which floor"],src:"الشَّقَّةُ فِي الدَّوْرِ الْخامِسِ.",ans:"فِي أَيِّ دَوْرٍ الشَّقَّةُ؟"}
  ],
  builds:[
    {parts:["أَسْكُنُ","فِي شَقَّةٍ","فِي الدَّوْرِ","الْخامِسِ"],en:"I live in a flat on the fifth floor."},
    {parts:["فِي غُرْفَةِ النَّوْمِ","سَرِيرٌ","وَسِتارَةٌ","وَمِرْآةٌ"],en:"In the bedroom there's a bed, a curtain and a mirror."},
    {parts:["تَفَضَّلْ","، ادْخُلْ","مِنْ فَضْلِكَ","، الشَّقَّةُ جَمِيلَةٌ"],en:"Please, come in — the flat is lovely."},
    {parts:["كَمْ غُرْفَةً","فِي شَقَّتِكَ؟","فِيها","خَمْسُ غُرَفٍ"],en:"How many rooms are in your flat? It has five rooms."},
    {parts:["أَنا الْمُسْتَأْجِرُ","، وَهَذا","الْمُؤَجِّرُ","، وَهُوَ صَدِيقِي"],en:"I'm the tenant, and this is the landlord, and he's my friend."}
  ],
  prompts:[
    ["صِفْ شَقَّتَكَ أَوْ بَيْتَكَ.","Describe your flat or house.",
     "أَسْكُنُ فِي بَيْتٍ فِي حَيٍّ هادِئٍ. فِيهِ خَمْسُ غُرَفٍ: غُرْفَتا نَوْمٍ، وَغُرْفَةُ جُلُوسٍ، وَحَمَّامانِ.",
     "I live in a house in a quiet district. It has five rooms: two bedrooms, a sitting room and two bathrooms."],
    ["ماذا فِي غُرْفَةِ نَوْمِكَ؟","What's in your bedroom?",
     "فِي غُرْفَةِ نَوْمِي سَرِيرٌ وَسَجَّادَةٌ وَمِرْآةٌ، وَعَلَى النَّافِذَةِ سِتارَةٌ زَرْقاءُ.",
     "In my bedroom there's a bed, a rug and a mirror, and a blue curtain on the window."],
    ["أَنْتَ مُسْتَأْجِرٌ جَدِيدٌ. اسْأَلِ الْمُؤَجِّرَ ثَلاثَةَ أَسْئِلَةٍ.","You're a new tenant. Ask the landlord three questions.",
     "كَمْ غُرْفَةً فِي الشَّقَّةِ؟ فِي أَيِّ دَوْرٍ هِيَ؟ هَلْ فِيها ثَلَّاجَةٌ وَفُرْنٌ؟",
     "How many rooms are in the flat? Which floor is it on? Does it have a fridge and an oven?"],
    ["أَيُّ غُرْفَةٍ تُفَضِّلُ فِي بَيْتِكَ؟ وَلِماذا؟","Which room do you prefer, and why?",
     "أُفَضِّلُ غُرْفَةَ الْجُلُوسِ، لِأَنَّها كَبِيرَةٌ وَجَمِيلَةٌ، وَفِيها التِّلْفازُ.",
     "I prefer the sitting room, because it's big and lovely, and the television is there."],
    ["ماذا تَفْعَلُ فِي أَيَّامِ الأُسْبُوعِ؟","What do you do on the days of the week?",
     "يَوْمَ السَّبْتِ أَذْهَبُ إِلى الْعَمَلِ، وَيَوْمَ الْخَمِيسِ أَبْقى فِي الْبَيْتِ، وَيَوْمَ الْجُمُعَةِ أَذْهَبُ إِلى الْمَسْجِدِ.",
     "On Saturday I go to work, on Thursday I stay at home, and on Friday I go to the mosque."]
  ]
},
{
  n:"04",ar:"الحَياةُ اليَوْمِيَّةُ",en:"Daily life",src:"book",
  dialogue:[
    ["خ","مَتى تَسْتَيْقِظُ؟","When do you wake up?"],
    ["ع","أَسْتَيْقِظُ مُبَكِّرًا، فِي السَّاعَةِ السَّابِعَةِ صَباحًا.","I wake up early, at seven in the morning."],
    ["خ","وَماذا تَفْعَلُ بَعْدَ ذَلِكَ؟","And what do you do after that?"],
    ["ع","أُصَلِّي، ثُمَّ أَقْرَأُ الصَّحِيفَةَ.","I pray, then I read the newspaper."],
    ["خ","وَكَيْفَ تَذْهَبُ إِلى الْعَمَلِ؟","And how do you get to work?"],
    ["ع","أَذْهَبُ بِالْحافِلَةِ أَوْ بِالسَّيَّارَةِ.","I go by bus or by car."],
    ["خ","وَفِي يَوْمِ الْعُطْلَةِ؟","And on your day off?"],
    ["ع","أَغْسِلُ الْمَلابِسَ، وَأَكْنُسُ الْبَيْتَ، وَأَغْسِلُ الأَطْباقَ.","I wash the clothes, sweep the house and wash the dishes."],
    ["خ","وَبَعْدَ ذَلِكَ؟","And after that?"],
    ["ع","أُشاهِدُ التِّلْفازَ، ثُمَّ أَنامُ مُتَأَخِّرًا.","I watch television, then I go to sleep late."]
  ],
  ladders:[
    {steps:["أَسْتَيْقِظُ مُبَكِّرًا","فِي السَّاعَةِ السَّابِعَةِ","ثُمَّ أُصَلِّي","، ثُمَّ أَقْرَأُ الصَّحِيفَةَ","وَأَذْهَبُ إِلى الْعَمَلِ"],
     en:"I wake up early → at seven o'clock → then I pray → then I read the newspaper → and go to work."},
    {steps:["أَذْهَبُ إِلى الْمَدْرَسَةِ","بِالْحافِلَةِ","كُلَّ يَوْمِ عَمَلٍ","، وَأَرْجِعُ مُتَأَخِّرًا","وَأَنامُ مُبَكِّرًا"],
     en:"I go to school → by bus → every working day → and I come back late → and sleep early."},
    {steps:["فِي يَوْمِ الْعُطْلَةِ","أَغْسِلُ الْمَلابِسَ","وَأَكْوِي الْقُمْصانَ","، ثُمَّ أَكْنُسُ الْبَيْتَ","وَأَغْسِلُ الأَطْباقَ"],
     en:"On my day off → I wash the clothes → and iron the shirts → then I sweep the house → and wash the dishes."},
    {steps:["بَعْدَ الصَّلاةِ","أُشاهِدُ التِّلْفازَ","قَلِيلًا","، ثُمَّ أَقْرَأُ كِتابًا","وَأَنامُ"],
     en:"After the prayer → I watch television → a little → then I read a book → and sleep."}
  ],
  subs:[
    {tpl:["أَسْتَيْقِظُ ",["مُبَكِّرًا","مُتَأَخِّرًا","فِي السَّاعَةِ السَّابِعَةِ","فِي الصَّباحِ"]," ."],en:"I wake up ___ ."},
    {tpl:["فِي يَوْمِ الْعُطْلَةِ ",["أَغْسِلُ الْمَلابِسَ","أَكْنُسُ الْبَيْتَ","أَكْوِي الْمَلابِسَ","أُشاهِدُ التِّلْفازَ"]," ."],en:"On my day off I ___ . Four household verbs from this unit."},
    {tpl:["أَقْرَأُ ",["الصَّحِيفَةَ","الْقُرْآنَ","كِتابًا","كِتابًا كَبِيرًا"]," ."],en:"I read ___ ."},
    {tpl:["أَذْهَبُ إِلى ",["الْمَدْرَسَةِ","الْجامِعَةِ","الْمَسْجِدِ","الْعَمَلِ"]," بِـ",["الْحافِلَةِ","السَّيَّارَةِ"]," ."],en:"I go to ___ by ___ . The بِـ of instrument."}
  ],
  transforms:[
    {task:["اسْأَلْ عَنِ الْوَقْتِ","Ask when"],src:"أَسْتَيْقِظُ فِي السَّاعَةِ السَّابِعَةِ.",ans:"مَتى تَسْتَيْقِظُ؟"},
    {task:["حَوِّلْ إِلَى الْماضِي","Change to the past"],src:"أَغْسِلُ الْمَلابِسَ وَأَكْنُسُ الْبَيْتَ.",ans:"غَسَلْتُ الْمَلابِسَ وَكَنَسْتُ الْبَيْتَ."},
    {task:["حَوِّلْ إِلَى (هِيَ)","Change to 'she'"],src:"يَسْتَيْقِظُ مُبَكِّرًا.",ans:"تَسْتَيْقِظُ مُبَكِّرًا."},
    {task:["انْفِ الْجُمْلَةَ","Negate it"],src:"أُشاهِدُ التِّلْفازَ.",ans:"لا أُشاهِدُ التِّلْفازَ."},
    {task:["اِرْبِطْ بِـ (ثُمَّ)","Join them with 'then'"],src:"أُصَلِّي. أَقْرَأُ الصَّحِيفَةَ.",ans:"أُصَلِّي، ثُمَّ أَقْرَأُ الصَّحِيفَةَ."},
    {task:["حَوِّلْ إِلَى (نَحْنُ)","Change to 'we'"],src:"أَذْهَبُ بِالْحافِلَةِ.",ans:"نَذْهَبُ بِالْحافِلَةِ."}
  ],
  builds:[
    {parts:["أَسْتَيْقِظُ","مُبَكِّرًا","فِي السَّاعَةِ","السَّابِعَةِ"],en:"I wake up early at seven o'clock."},
    {parts:["أَذْهَبُ","إِلى الْمَدْرَسَةِ","بِالْحافِلَةِ","كُلَّ يَوْمٍ"],en:"I go to school by bus every day."},
    {parts:["فِي يَوْمِ الْعُطْلَةِ","أَغْسِلُ الْمَلابِسَ","، ثُمَّ","أَكْنُسُ الْبَيْتَ"],en:"On my day off I wash the clothes, then sweep the house."},
    {parts:["أُشاهِدُ التِّلْفازَ","بَعْدَ الصَّلاةِ","، ثُمَّ","أَنامُ"],en:"I watch television after the prayer, then I sleep."},
    {parts:["ماذا","تَفْعَلُ","فِي يَوْمِ","الْعُطْلَةِ؟"],en:"What do you do on your day off?"}
  ],
  prompts:[
    ["صِفْ يَوْمَكَ مِنَ الصَّباحِ إِلى اللَّيْلِ.","Describe your day from morning to night.",
     "أَسْتَيْقِظُ مُبَكِّرًا وَأُصَلِّي، ثُمَّ أَقْرَأُ الصَّحِيفَةَ وَأَذْهَبُ إِلى الْعَمَلِ بِالْحافِلَةِ. أَرْجِعُ مُتَأَخِّرًا، وَأُشاهِدُ التِّلْفازَ، ثُمَّ أَنامُ.",
     "I wake up early and pray, then read the newspaper and go to work by bus. I come back late, watch television, then sleep."],
    ["ماذا تَفْعَلُ فِي يَوْمِ الْعُطْلَةِ؟","What do you do on your day off?",
     "فِي يَوْمِ الْعُطْلَةِ أَسْتَيْقِظُ مُتَأَخِّرًا، وَأَغْسِلُ الْمَلابِسَ وَالأَطْباقَ، ثُمَّ أَكْنُسُ الْبَيْتَ.",
     "On my day off I wake up late, wash the clothes and dishes, then sweep the house."],
    ["ما الْفَرْقُ بَيْنَ يَوْمِ الْعَمَلِ وَيَوْمِ الْعُطْلَةِ عِنْدَكَ؟","What's the difference between a working day and a day off for you?",
     "فِي يَوْمِ الْعَمَلِ أَسْتَيْقِظُ مُبَكِّرًا وَأَذْهَبُ بِالسَّيَّارَةِ، وَفِي يَوْمِ الْعُطْلَةِ أَبْقى فِي الْبَيْتِ.",
     "On a working day I wake up early and go by car; on my day off I stay at home."],
    ["مَتى تَنامُ؟ وَلِماذا؟","When do you sleep, and why?",
     "أَنامُ مُتَأَخِّرًا، لِأَنِّي أُشاهِدُ التِّلْفازَ وَأَقْرَأُ كِتابًا بَعْدَ الْعَشاءِ.",
     "I sleep late, because I watch television and read a book after dinner."],
    ["كَيْفَ تَذْهَبُ إِلى عَمَلِكَ؟","How do you get to work?",
     "أَذْهَبُ بِالْحافِلَةِ عادَةً، وَأَحْيانًا بِالسَّيَّارَةِ إِذا كانَ الْوَقْتُ مُتَأَخِّرًا.",
     "I usually go by bus, and sometimes by car if it's late."]
  ]
},
{
  n:"05",ar:"الطَّعامُ وَالشَّرابُ",en:"Food & drink",src:"book",
  dialogue:[
    ["خ","أَنا جَوْعانُ. ماذا نَأْكُلُ؟","I'm hungry. What shall we eat?"],
    ["ع","عِنْدَنا أَرُزٌّ وَدَجاجٌ وَسَلَطَةٌ.","We have rice, chicken and salad."],
    ["خ","وَهَلْ عِنْدَنا سَمَكٌ؟","And do we have fish?"],
    ["ع","لا، لَكِنْ عِنْدَنا لَحْمٌ وَخُبْزٌ.","No, but we have meat and bread."],
    ["خ","وَماذا تُفَضِّلُ لِلْفُطُورِ؟","And what do you prefer for breakfast?"],
    ["ع","أُفَضِّلُ الشَّايَ بِالْحَلِيبِ وَالتَّمْرَ.","I prefer tea with milk, and dates."],
    ["خ","وَلِلْعَشاءِ؟","And for dinner?"],
    ["ع","أَشْرَبُ الْماءَ، وَآكُلُ قَلِيلًا.","I drink water and eat a little."],
    ["خ","لِماذا؟","Why?"],
    ["ع","لِأَنَّ وَزْنِي كَثِيرٌ، وَلا أُرِيدُ أَنْ أَكُونَ سَمِينًا.","Because my weight is high, and I don't want to be overweight."]
  ],
  ladders:[
    {steps:["أَنا جَوْعانُ","وَأُرِيدُ الْغَداءَ","أَرُزًّا وَدَجاجًا","، ثُمَّ فاكِهَةً","وَشايًا بِالْحَلِيبِ"],
     en:"I'm hungry → and I want lunch → rice and chicken → then fruit → and tea with milk."},
    {steps:["جَلَسْنا إِلى الْمائِدَةِ","مَعَ الضُّيُوفِ","وَأَكَلْنا السَّمَكَ وَالسَّلَطَةَ","، ثُمَّ شَرِبْنا الْقَهْوَةَ","وَأَكَلْنا الْعِنَبَ"],
     en:"We sat at the table → with the guests → and ate fish and salad → then we drank coffee → and ate grapes."},
    {steps:["أُفَضِّلُ الْفُطُورَ","عَلَى الْعَشاءِ","لِأَنَّ وَزْنِي كَثِيرٌ","، وَآكُلُ قَلِيلًا","فِي اللَّيْلِ"],
     en:"I prefer breakfast → to dinner → because my weight is high → and I eat little → at night."},
    {steps:["طَلَبْتُ فِي الْمَطْعَمِ","وَجْبَةً واحِدَةً","سَمَكًا وَأَرُزًّا","، وَشَرِبْتُ الْماءَ","ثُمَّ شَكَرْتُ الْمُضِيفَةَ"],
     en:"I ordered at the restaurant → one meal → fish and rice → and drank water → then thanked the waitress."}
  ],
  subs:[
    {tpl:["أَنا ",["جَوْعانُ","سَمِينٌ","نَحِيفٌ","بِخَيْرٍ"]," ."],en:"I am ___ ."},
    {tpl:["آكُلُ ",["الأَرُزَّ","الدَّجاجَ","السَّمَكَ","اللَّحْمَ"]," ."],en:"I eat ___ . All four take the accusative after the verb."},
    {tpl:["أَشْرَبُ ",["الشَّايَ","الْقَهْوَةَ","الْحَلِيبَ","الْماءَ"]," ."],en:"I drink ___ ."},
    {tpl:["أُفَضِّلُ ",["الشَّايَ","السَّمَكَ","الأَرُزَّ","الْفاكِهَةَ"]," عَلَى ",["الْقَهْوَةِ","اللَّحْمِ","الْخُبْزِ","التَّمْرِ"]," ."],en:"I prefer ___ to ___ . Accusative on the left of عَلَى, genitive on the right — that contrast is the whole drill."}
  ],
  transforms:[
    {task:["حَوِّلْ إِلَى الْماضِي","Change to the past"],src:"آكُلُ الْغَداءَ فِي الْمَطْعَمِ.",ans:"أَكَلْتُ الْغَداءَ فِي الْمَطْعَمِ."},
    {task:["انْفِ الْجُمْلَةَ","Negate it"],src:"أَشْرَبُ الْقَهْوَةَ.",ans:"لا أَشْرَبُ الْقَهْوَةَ."},
    {task:["اسْأَلْ عَنِ السَّبَبِ","Ask why"],src:"لا آكُلُ كَثِيرًا لِأَنَّ وَزْنِي كَثِيرٌ.",ans:"لِماذا لا تَأْكُلُ كَثِيرًا؟"},
    {task:["حَوِّلْ إِلَى (نَحْنُ)","Change to 'we'"],src:"أَجْلِسُ إِلى الْمائِدَةِ.",ans:"نَجْلِسُ إِلى الْمائِدَةِ."},
    {task:["اسْأَلْ عَنِ الْمُفَضَّلِ","Ask what they prefer"],src:"أُفَضِّلُ الشَّايَ.",ans:"ماذا تُفَضِّلُ؟"},
    {task:["اِرْبِطْ بِـ (لِأَنَّ)","Join them with 'because'"],src:"آكُلُ قَلِيلًا. وَزْنِي كَثِيرٌ.",ans:"آكُلُ قَلِيلًا لِأَنَّ وَزْنِي كَثِيرٌ."}
  ],
  builds:[
    {parts:["أَنا جَوْعانُ","، ماذا","نَأْكُلُ","الْيَوْمَ؟"],en:"I'm hungry — what shall we eat today?"},
    {parts:["أُفَضِّلُ","الشَّايَ","بِالْحَلِيبِ","عَلَى الْقَهْوَةِ"],en:"I prefer tea with milk to coffee."},
    {parts:["جَلَسْنا","إِلى الْمائِدَةِ","مَعَ","الضُّيُوفِ"],en:"We sat at the table with the guests."},
    {parts:["طَلَبْتُ","وَجْبَةً واحِدَةً","فِي","الْمَطْعَمِ"],en:"I ordered one meal at the restaurant."},
    {parts:["آكُلُ قَلِيلًا","لِأَنَّ","وَزْنِي","كَثِيرٌ"],en:"I eat little because my weight is high."}
  ],
  prompts:[
    ["ماذا تَأْكُلُ فِي الْفُطُورِ وَالْغَداءِ وَالْعَشاءِ؟","What do you eat for breakfast, lunch and dinner?",
     "فِي الْفُطُورِ آكُلُ الْخُبْزَ وَأَشْرَبُ الشَّايَ. فِي الْغَداءِ آكُلُ الأَرُزَّ وَالدَّجاجَ. وَفِي الْعَشاءِ آكُلُ قَلِيلًا.",
     "For breakfast I eat bread and drink tea. For lunch I eat rice and chicken. For dinner I eat a little."],
    ["أَنْتَ فِي مَطْعَمٍ. اطْلُبْ وَجْبَةً.","You're in a restaurant. Order a meal.",
     "مِنْ فَضْلِكَ، أُرِيدُ سَمَكًا وَأَرُزًّا وَسَلَطَةً، وَماءً. شُكْرًا.",
     "Please, I'd like fish, rice, salad and water. Thank you."],
    ["ماذا تُفَضِّلُ: الشَّايَ أَمِ الْقَهْوَةَ؟ وَلِماذا؟","Which do you prefer, tea or coffee, and why?",
     "أُفَضِّلُ الشَّايَ عَلَى الْقَهْوَةِ، لِأَنَّ الْقَهْوَةَ كَثِيرَةُ التَّأْثِيرِ، وَأَشْرَبُ الشَّايَ بِالْحَلِيبِ.",
     "I prefer tea to coffee, because coffee is too strong, and I drink tea with milk."],
    ["تَكَلَّمْ عَنْ وَجْبَةٍ مَعَ الضُّيُوفِ.","Talk about a meal with guests.",
     "جاءَ الضُّيُوفُ فِي الْمَساءِ، وَجَلَسْنا إِلى الْمائِدَةِ. أَكَلْنا اللَّحْمَ وَالأَرُزَّ، ثُمَّ شَرِبْنا الْقَهْوَةَ وَأَكَلْنا التَّمْرَ.",
     "The guests came in the evening and we sat at the table. We ate meat and rice, then drank coffee and ate dates."],
    ["هَلْ تُفَكِّرُ فِي وَزْنِكَ عِنْدَما تَأْكُلُ؟","Do you think about your weight when you eat?",
     "نَعَمْ، آكُلُ قَلِيلًا فِي اللَّيْلِ، وَأُفَضِّلُ الْفاكِهَةَ وَالسَّلَطَةَ عَلَى اللَّحْمِ.",
     "Yes, I eat little at night, and I prefer fruit and salad to meat."]
  ]
},
{
  n:"06",ar:"الصَّلاةُ",en:"Prayer",src:"book",
  dialogue:[
    ["خ","إِلى أَيْنَ أَنْتَ ذاهِبٌ؟","Where are you going?"],
    ["ع","أَنا ذاهِبٌ إِلى الْمَسْجِدِ لِصَلاةِ الظُّهْرِ.","I'm going to the mosque for the Dhuhr prayer."],
    ["خ","هَلِ الْمَسْجِدُ قَرِيبٌ؟","Is the mosque near?"],
    ["ع","نَعَمْ، هُوَ بِجانِبِ الْبَيْتِ.","Yes, it's next to the house."],
    ["خ","وَمَتى تُصَلِّي الْفَجْرَ؟","And when do you pray Fajr?"],
    ["ع","أَضَعُ الْمُنَبِّهَ فِي اللَّيْلِ، ثُمَّ أَسْتَيْقِظُ وَأُصَلِّي.","I set the alarm at night, then I wake up and pray."],
    ["خ","فِكْرَةٌ طَيِّبَةٌ! أَنا كَسْلانُ فِي الصَّباحِ.","Good idea! I'm lazy in the morning."],
    ["ع","هَلْ صَلَّيْتَ فِي الْمَسْجِدِ الْحَرامِ؟","Have you prayed in the Sacred Mosque?"],
    ["خ","نَعَمْ، ذَهَبْتُ إِلى مَكَّةَ بِالطَّائِرَةِ، ثُمَّ إِلى الْمَدِينَةِ.","Yes, I went to Mecca by plane, then to Medina."],
    ["ع","جَزاكَ اللهُ خَيْرًا. إِنْ شاءَ اللهُ أَذْهَبُ أَنا أَيْضًا.","May God reward you. God willing I'll go too."]
  ],
  ladders:[
    {steps:["أَنا ذاهِبٌ","إِلى الْمَسْجِدِ","لِصَلاةِ الظُّهْرِ","، وَهُوَ قَرِيبٌ","بِجانِبِ الْبَيْتِ"],
     en:"I'm going → to the mosque → for the Dhuhr prayer → and it's near → next to the house."},
    {steps:["أَضَعُ الْمُنَبِّهَ","فِي اللَّيْلِ","لِأَنِّي كَسْلانُ","، ثُمَّ أَسْتَيْقِظُ","وَأُصَلِّي الْفَجْرَ"],
     en:"I set the alarm → at night → because I'm lazy → then I wake up → and pray Fajr."},
    {steps:["الصَّلَواتُ خَمْسٌ","الْفَجْرُ وَالظُّهْرُ","وَالْعَصْرُ وَالْمَغْرِبُ","، وَالْعِشاءُ","فِي اللَّيْلِ"],
     en:"The prayers are five → Fajr and Dhuhr → and Asr and Maghrib → and Isha → at night."},
    {steps:["ذَهَبْتُ إِلى مَكَّةَ","بِالطَّائِرَةِ","وَصَلَّيْتُ فِي الْمَسْجِدِ الْحَرامِ","، ثُمَّ ذَهَبْتُ إِلى الْمَدِينَةِ","وَصَلَّيْتُ فِي الْمَسْجِدِ النَّبَوِيِّ"],
     en:"I went to Mecca → by plane → and prayed in the Sacred Mosque → then I went to Medina → and prayed in the Prophet's Mosque."}
  ],
  subs:[
    {tpl:["أُصَلِّي ",["الْفَجْرَ","الظُّهْرَ","الْعَصْرَ","الْمَغْرِبَ"]," ."],en:"I pray ___ . Four of the five daily prayers — add الْعِشاءَ yourself."},
    {tpl:["الْمَسْجِدُ ",["قَرِيبٌ","بَعِيدٌ","بِجانِبِ الْبَيْتِ","بِجانِبِ الْمَدْرَسَةِ"]," ."],en:"The mosque is ___ ."},
    {tpl:["أَنا ذاهِبٌ إِلى ",["الْمَسْجِدِ","مَكَّةَ","الْمَدِينَةِ","الْعَمَلِ"]," ."],en:"I'm going to ___ . Note مَكَّةَ takes no kasra — it's a diptote."},
    {tpl:["صَلَّيْتُ ",["الْفَجْرَ","الظُّهْرَ","الْمَغْرِبَ","الْعِشاءَ"]," فِي ",["الْمَسْجِدِ","الْبَيْتِ","الْمَسْجِدِ الْحَرامِ","الْمَسْجِدِ النَّبَوِيِّ"]," ."],en:"I prayed ___ in ___ . Sixteen sentences."}
  ],
  transforms:[
    {task:["اسْأَلْ عَنِ الْوِجْهَةِ","Ask where they're going"],src:"أَنا ذاهِبٌ إِلى الْمَسْجِدِ.",ans:"إِلى أَيْنَ أَنْتَ ذاهِبٌ؟"},
    {task:["حَوِّلْ إِلَى الْماضِي","Change to the past"],src:"أُصَلِّي الظُّهْرَ فِي الْمَسْجِدِ.",ans:"صَلَّيْتُ الظُّهْرَ فِي الْمَسْجِدِ."},
    {task:["حَوِّلْ إِلَى (هِيَ)","Change to 'she'"],src:"هُوَ ذاهِبٌ إِلى الْمَسْجِدِ.",ans:"هِيَ ذاهِبَةٌ إِلى الْمَسْجِدِ."},
    {task:["اِرْبِطْ بِـ (لِأَنَّ)","Join them with 'because'"],src:"أَضَعُ الْمُنَبِّهَ. أَنا كَسْلانُ.",ans:"أَضَعُ الْمُنَبِّهَ لِأَنِّي كَسْلانُ."},
    {task:["اسْأَلْ عَنِ الْمَكانِ","Ask where"],src:"صَلَّيْتُ فِي الْمَسْجِدِ الْحَرامِ.",ans:"أَيْنَ صَلَّيْتَ؟"},
    {task:["حَوِّلْ إِلَى (نَحْنُ)","Change to 'we'"],src:"أَسْمَعُ الأَذانَ ثُمَّ أَذْهَبُ.",ans:"نَسْمَعُ الأَذانَ ثُمَّ نَذْهَبُ."}
  ],
  builds:[
    {parts:["أَنا ذاهِبٌ","إِلى الْمَسْجِدِ","لِصَلاةِ","الظُّهْرِ"],en:"I'm going to the mosque for the Dhuhr prayer."},
    {parts:["أَضَعُ الْمُنَبِّهَ","فِي اللَّيْلِ","لِأَنِّي","كَسْلانُ"],en:"I set the alarm at night because I'm lazy."},
    {parts:["الْمَسْجِدُ قَرِيبٌ","، وَهُوَ","بِجانِبِ","الْبَيْتِ"],en:"The mosque is near — it's next to the house."},
    {parts:["ذَهَبْتُ إِلى مَكَّةَ","بِالطَّائِرَةِ","، وَصَلَّيْتُ","فِي الْمَسْجِدِ الْحَرامِ"],en:"I went to Mecca by plane and prayed in the Sacred Mosque."},
    {parts:["جَزاكَ اللهُ خَيْرًا","، هَذِهِ","فِكْرَةٌ","طَيِّبَةٌ"],en:"May God reward you — that's a good idea."}
  ],
  prompts:[
    ["ما الصَّلَواتُ الْخَمْسُ؟ اذْكُرْها بِالتَّرْتِيبِ.","What are the five prayers? Name them in order.",
     "الْفَجْرُ، ثُمَّ الظُّهْرُ، ثُمَّ الْعَصْرُ، ثُمَّ الْمَغْرِبُ، ثُمَّ الْعِشاءُ.",
     "Fajr, then Dhuhr, then Asr, then Maghrib, then Isha."],
    ["أَيْنَ تُصَلِّي عادَةً؟ وَلِماذا؟","Where do you usually pray, and why?",
     "أُصَلِّي فِي الْمَسْجِدِ لِأَنَّهُ قَرِيبٌ، بِجانِبِ الْبَيْتِ. وَأَحْيانًا أُصَلِّي فِي الْبَيْتِ.",
     "I pray at the mosque because it's near, next to the house. Sometimes I pray at home."],
    ["كَيْفَ تَسْتَيْقِظُ لِصَلاةِ الْفَجْرِ؟","How do you wake up for the Fajr prayer?",
     "أَضَعُ الْمُنَبِّهَ فِي اللَّيْلِ قَبْلَ النَّوْمِ، لِأَنِّي كَسْلانُ فِي الصَّباحِ.",
     "I set the alarm at night before sleeping, because I'm lazy in the morning."],
    ["تَكَلَّمْ عَنْ زِيارَةٍ إِلى مَكَّةَ أَوِ الْمَدِينَةِ.","Talk about a visit to Mecca or Medina.",
     "ذَهَبْتُ إِلى مَكَّةَ بِالطَّائِرَةِ، وَصَلَّيْتُ فِي الْمَسْجِدِ الْحَرامِ. ثُمَّ ذَهَبْتُ إِلى الْمَدِينَةِ وَصَلَّيْتُ فِي الْمَسْجِدِ النَّبَوِيِّ.",
     "I went to Mecca by plane and prayed in the Sacred Mosque. Then I went to Medina and prayed in the Prophet's Mosque."],
    ["ادْعُ صَدِيقَكَ إِلى الصَّلاةِ مَعَكَ.","Invite your friend to pray with you.",
     "هَيَّا بِنا إِلى الْمَسْجِدِ، الصَّلاةُ بَعْدَ قَلِيلٍ. الْمَسْجِدُ قَرِيبٌ، إِنْ شاءَ اللهُ نَصِلُ مُبَكِّرًا.",
     "Let's go to the mosque, the prayer is soon. The mosque is near — God willing we'll arrive early."]
  ]
},
{
  n:"07",ar:"الدِّراسَةُ",en:"Study",src:"book",
  dialogue:[
    ["خ","ماذا تَدْرُسُ فِي الْجامِعَةِ؟","What do you study at university?"],
    ["ع","أَدْرُسُ اللُّغَةَ الْعَرَبِيَّةَ فِي كُلِّيَّةِ التَّرْبِيَةِ.","I study Arabic at the College of Education."],
    ["خ","وَما مَوادُّكَ الدِّراسِيَّةُ؟","And what are your subjects?"],
    ["ع","اللُّغَةُ الْعَرَبِيَّةُ، وَالتَّارِيخُ، وَالْعُلُومُ، وَالثَّقافَةُ الإِسْلامِيَّةُ.","Arabic, history, science and Islamic culture."],
    ["خ","كَمْ حِصَّةً فِي الْيَوْمِ الدِّراسِيِّ؟","How many periods are there in a school day?"],
    ["ع","أَرْبَعُ حِصَصٍ. وَهَذا جَدْوَلِي الدِّراسِيُّ.","Four periods. And this is my timetable."],
    ["خ","مَتى يَبْدَأُ الْيَوْمُ الدِّراسِيُّ؟","When does the school day start?"],
    ["ع","يَبْدَأُ فِي السَّاعَةِ السَّابِعَةِ، وَيَنْتَهِي فِي الظُّهْرِ.","It starts at seven and finishes at noon."],
    ["خ","وَأَيْنَ تَدْرُسُ بَعْدَ الْحِصَصِ؟","And where do you study after the periods?"],
    ["ع","أَذْهَبُ إِلى الْمَكْتَبَةِ أَوِ الْمُخْتَبَرِ، وَأَكْتُبُ عَلَى الْحاسُوبِ.","I go to the library or the lab, and write on the computer."]
  ],
  ladders:[
    {steps:["أَدْرُسُ اللُّغَةَ الْعَرَبِيَّةَ","فِي كُلِّيَّةِ التَّرْبِيَةِ","مُنْذُ سَنَةٍ","، وَعِنْدِي أَرْبَعُ حِصَصٍ","فِي الْيَوْمِ الدِّراسِيِّ"],
     en:"I study Arabic → at the College of Education → for a year → and I have four periods → in the school day."},
    {steps:["يَبْدَأُ الْيَوْمُ الدِّراسِيُّ","فِي السَّاعَةِ السَّابِعَةِ","وَيَنْتَهِي فِي الظُّهْرِ","، ثُمَّ أَذْهَبُ إِلى الْمَكْتَبَةِ","وَأَكْتُبُ عَلَى الْحاسُوبِ"],
     en:"The school day starts → at seven → and finishes at noon → then I go to the library → and write on the computer."},
    {steps:["مَوادِّي الدِّراسِيَّةُ","اللُّغَةُ الْعَرَبِيَّةُ وَالتَّارِيخُ","وَالْعُلُومُ","، وَالثَّقافَةُ الإِسْلامِيَّةُ","وَالرِّياضِيّاتُ"],
     en:"My subjects are → Arabic and history → and science → and Islamic culture → and mathematics."},
    {steps:["بَعْدَ الاخْتِبارِ","تَبْدَأُ الْعُطْلَةُ","وَهِيَ ثَلاثَةُ أَشْهُرٍ","، وَأَدْرُسُ فِيها","اللُّغَةَ الْعَرَبِيَّةَ أَيْضًا"],
     en:"After the exam → the holiday starts → and it's three months → and during it I study → Arabic as well."}
  ],
  subs:[
    {tpl:["أَدْرُسُ ",["اللُّغَةَ الْعَرَبِيَّةَ","التَّارِيخَ","الْعُلُومَ","الثَّقافَةَ الإِسْلامِيَّةَ"]," ."],en:"I study ___ ."},
    {tpl:["أَدْرُسُ فِي ",["كُلِّيَّةِ التَّرْبِيَةِ","كُلِّيَّةِ الطِّبِّ","الْمَدْرَسَةِ","الْمَكْتَبَةِ"]," ."],en:"I study at ___ ."},
    {tpl:["الْيَوْمُ الدِّراسِيُّ ",["يَبْدَأُ مُبَكِّرًا","يَنْتَهِي فِي الظُّهْرِ","فِيهِ أَرْبَعُ حِصَصٍ","طَوِيلٌ جِدًّا"]," ."],en:"The school day ___ . Three verb phrases and one adjective — all valid predicates."},
    {tpl:["أَذْهَبُ إِلى ",["الْمَكْتَبَةِ","الْمُخْتَبَرِ","الصَّفِّ","الْكُلِّيَّةِ"]," لِأَدْرُسَ ",["اللُّغَةَ الْعَرَبِيَّةَ","الْعُلُومَ","التَّارِيخَ"]," ."],en:"I go to ___ to study ___ . Note أَدْرُسَ takes a fatḥa after لِـ — that's the subjunctive."}
  ],
  transforms:[
    {task:["اسْأَلْ عَنِ الْمادَّةِ","Ask what they study"],src:"أَدْرُسُ اللُّغَةَ الْعَرَبِيَّةَ.",ans:"ماذا تَدْرُسُ؟"},
    {task:["اسْأَلْ عَنِ الْعَدَدِ","Ask how many"],src:"عِنْدِي أَرْبَعُ حِصَصٍ.",ans:"كَمْ حِصَّةً عِنْدَكَ؟"},
    {task:["حَوِّلْ إِلَى الْماضِي","Change to the past"],src:"أَكْتُبُ عَلَى الْحاسُوبِ.",ans:"كَتَبْتُ عَلَى الْحاسُوبِ."},
    {task:["حَوِّلْ إِلَى (هُمْ)","Change to 'they'"],src:"أَدْرُسُ فِي الْمَكْتَبَةِ.",ans:"يَدْرُسُونَ فِي الْمَكْتَبَةِ."},
    {task:["اسْأَلْ عَنِ الْوَقْتِ","Ask when"],src:"يَبْدَأُ الْيَوْمُ الدِّراسِيُّ فِي السَّابِعَةِ.",ans:"مَتى يَبْدَأُ الْيَوْمُ الدِّراسِيُّ؟"},
    {task:["اِرْبِطْ بِـ (ثُمَّ)","Join them with 'then'"],src:"يَنْتَهِي الْيَوْمُ الدِّراسِيُّ. أَذْهَبُ إِلى الْمَكْتَبَةِ.",ans:"يَنْتَهِي الْيَوْمُ الدِّراسِيُّ، ثُمَّ أَذْهَبُ إِلى الْمَكْتَبَةِ."}
  ],
  builds:[
    {parts:["أَدْرُسُ","اللُّغَةَ الْعَرَبِيَّةَ","فِي كُلِّيَّةِ","التَّرْبِيَةِ"],en:"I study Arabic at the College of Education."},
    {parts:["يَبْدَأُ الْيَوْمُ الدِّراسِيُّ","فِي السَّابِعَةِ","، وَيَنْتَهِي","فِي الظُّهْرِ"],en:"The school day starts at seven and finishes at noon."},
    {parts:["عِنْدِي","أَرْبَعُ حِصَصٍ","فِي الْيَوْمِ","الدِّراسِيِّ"],en:"I have four periods in the school day."},
    {parts:["أَذْهَبُ إِلى الْمَكْتَبَةِ","بَعْدَ الْحِصَصِ","، وَأَكْتُبُ","عَلَى الْحاسُوبِ"],en:"I go to the library after the periods and write on the computer."},
    {parts:["بَعْدَ الاخْتِبارِ","تَبْدَأُ","الْعُطْلَةُ","، وَهِيَ ثَلاثَةُ أَشْهُرٍ"],en:"After the exam the holiday starts, and it's three months."}
  ],
  prompts:[
    ["ماذا تَدْرُسُ؟ وَأَيْنَ؟","What do you study, and where?",
     "أَدْرُسُ اللُّغَةَ الْعَرَبِيَّةَ مَعَ مُعَلِّمٍ، وَأَدْرُسُ فِي الْبَيْتِ وَفِي الْمَكْتَبَةِ.",
     "I study Arabic with a teacher, and I study at home and in the library."],
    ["صِفْ جَدْوَلَكَ الدِّراسِيَّ.","Describe your timetable.",
     "يَبْدَأُ يَوْمِي فِي السَّاعَةِ السَّابِعَةِ. عِنْدِي أَرْبَعُ حِصَصٍ، ثُمَّ أَذْهَبُ إِلى الْمَكْتَبَةِ.",
     "My day starts at seven. I have four periods, then I go to the library."],
    ["ما أَصْعَبُ مادَّةٍ دَرَسْتَها؟ وَلِماذا؟","What's the hardest subject you've studied, and why?",
     "أَصْعَبُ مادَّةٍ هِيَ الرِّياضِيّاتُ، لِأَنَّها تَحْتاجُ إِلى وَقْتٍ كَثِيرٍ.",
     "The hardest subject is mathematics, because it needs a lot of time."],
    ["ماذا تَفْعَلُ فِي الْعُطْلَةِ بَعْدَ الاخْتِبارِ؟","What do you do in the holiday after the exam?",
     "بَعْدَ الاخْتِبارِ تَبْدَأُ الْعُطْلَةُ، وَهِيَ ثَلاثَةُ أَشْهُرٍ. أَقْرَأُ كَثِيرًا وَأَدْرُسُ الْعَرَبِيَّةَ أَيْضًا.",
     "After the exam the holiday starts, three months. I read a lot and study Arabic too."],
    ["أَيْنَ تُفَضِّلُ الدِّراسَةَ: فِي الْمَكْتَبَةِ أَمْ فِي الْبَيْتِ؟","Where do you prefer to study: the library or at home?",
     "أُفَضِّلُ الْمَكْتَبَةَ، لِأَنَّها هادِئَةٌ، وَفِيها كُتُبٌ كَثِيرَةٌ وَحاسُوبٌ.",
     "I prefer the library, because it's quiet and has many books and a computer."]
  ]
},
{
  n:"08",ar:"العَمَلُ",en:"Work",src:"book",
  dialogue:[
    ["خ","ما مِهْنَتُكَ؟","What's your profession?"],
    ["ع","أَنا مُعَلِّمٌ، أُدَرِّسُ فِي الْمَرْحَلَةِ الابْتِدائِيَّةِ.","I'm a teacher; I teach at primary level."],
    ["خ","ما شاءَ اللهُ! هَلْ تُحِبُّ عَمَلَكَ؟","Mashallah! Do you like your work?"],
    ["ع","نَعَمْ، أُحِبُّ الأَطْفالَ كَثِيرًا.","Yes, I love children very much."],
    ["خ","كَمْ ساعَةً تَعْمَلُ فِي الْيَوْمِ؟","How many hours do you work a day?"],
    ["ع","سِتَّ ساعاتٍ، وَأَرْجِعُ فِي السَّاعَةِ الْحادِيَةَ عَشْرَةَ.","Six hours, and I get back at eleven o'clock."],
    ["خ","وَما مِهْنَةُ أَخِيكَ؟","And what does your brother do?"],
    ["ع","أَخِي طَبِيبٌ، يَعْمَلُ فِي الْمُسْتَشْفى.","My brother is a doctor; he works at the hospital."],
    ["خ","وَأُخْتُكَ؟","And your sister?"],
    ["ع","أُخْتِي مُمَرِّضَةٌ، دَرَسَتْ فِي كُلِّيَّةِ التَّمْرِيضِ.","My sister is a nurse; she studied at the College of Nursing."]
  ],
  ladders:[
    {steps:["أَنا مُعَلِّمٌ","أُدَرِّسُ الأَطْفالَ","فِي الْمَرْحَلَةِ الابْتِدائِيَّةِ","، وَأُحِبُّ عَمَلِي","كَثِيرًا"],
     en:"I'm a teacher → I teach children → at primary level → and I love my work → very much."},
    {steps:["أَخِي طَبِيبٌ","يَعْمَلُ فِي الْمُسْتَشْفى","سِتَّ ساعاتٍ","، وَدَرَسَ الطِّبَّ","فِي كُلِّيَّةِ الطِّبِّ"],
     en:"My brother is a doctor → he works at the hospital → six hours → and he studied medicine → at the College of Medicine."},
    {steps:["أُخْتِي دَرَسَتْ","فِي كُلِّيَّةِ الصَّيْدَلَةِ","وَهِيَ الآنَ صَيْدَلِيَّةٌ","، وَتَعْمَلُ فِي الْمُسْتَشْفى","مَعَ أَخِي"],
     en:"My sister studied → at the College of Pharmacy → and she's now a pharmacist → and works at the hospital → with my brother."},
    {steps:["صَدِيقِي طَيَّارٌ","دَرَسَ فِي كُلِّيَّةِ الطَّيَرانِ","، وَهُوَ يُحِبُّ مِهْنَتَهُ","لِأَنَّهُ يُسافِرُ كَثِيرًا","وَيَرى بِلادًا جَدِيدَةً"],
     en:"My friend is a pilot → he studied at the College of Aviation → and he loves his profession → because he travels a lot → and sees new countries."}
  ],
  subs:[
    {tpl:["أَنا ",["مُعَلِّمٌ","طَبِيبٌ","مُهَنْدِسٌ","طَيَّارٌ"]," ."],en:"I'm a ___ ."},
    {tpl:["أَعْمَلُ فِي ",["الْمَدْرَسَةِ","الْمُسْتَشْفى","الشَّرِكَةِ","الْجامِعَةِ"]," ."],en:"I work at ___ . Note الْمُسْتَشْفى never changes its ending — it's a maqṣūr noun."},
    {tpl:["دَرَسْتُ فِي ",["كُلِّيَّةِ التَّرْبِيَةِ","كُلِّيَّةِ الطِّبِّ","كُلِّيَّةِ الْهَنْدَسَةِ","كُلِّيَّةِ الصَّيْدَلَةِ"]," ."],en:"I studied at ___ . Every one is an iḍāfa: كُلِّيَّة plus a genitive."},
    {tpl:[["أَخِي","صَدِيقِي","وَالِدِي","عَمِّي"]," يَعْمَلُ فِي ",["الْمُسْتَشْفى","الشَّرِكَةِ","الْمَدْرَسَةِ","الْجامِعَةِ"]," ."],en:"___ works at ___ . Sixteen sentences."}
  ],
  transforms:[
    {task:["اسْأَلْ عَنِ الْمِهْنَةِ","Ask about the profession"],src:"أَنا مُهَنْدِسٌ.",ans:"ما مِهْنَتُكَ؟"},
    {task:["حَوِّلْ إِلَى الْمُؤَنَّثِ","Change to feminine"],src:"أَخِي مُمَرِّضٌ فِي الْمُسْتَشْفى.",ans:"أُخْتِي مُمَرِّضَةٌ فِي الْمُسْتَشْفى."},
    {task:["حَوِّلْ إِلَى الْماضِي","Change to the past"],src:"أَدْرُسُ فِي كُلِّيَّةِ الطِّبِّ.",ans:"دَرَسْتُ فِي كُلِّيَّةِ الطِّبِّ."},
    {task:["اسْأَلْ عَنِ الْعَدَدِ","Ask how many"],src:"أَعْمَلُ سِتَّ ساعاتٍ.",ans:"كَمْ ساعَةً تَعْمَلُ؟"},
    {task:["اِرْبِطْ بِـ (لِأَنَّ)","Join them with 'because'"],src:"أُحِبُّ عَمَلِي. أُحِبُّ الأَطْفالَ.",ans:"أُحِبُّ عَمَلِي لِأَنِّي أُحِبُّ الأَطْفالَ."},
    {task:["حَوِّلْ إِلَى (هُمْ)","Change to 'they'"],src:"يَعْمَلُ فِي الشَّرِكَةِ.",ans:"يَعْمَلُونَ فِي الشَّرِكَةِ."}
  ],
  builds:[
    {parts:["أَنا مُعَلِّمٌ","، وَأُدَرِّسُ","فِي الْمَرْحَلَةِ","الابْتِدائِيَّةِ"],en:"I'm a teacher, and I teach at primary level."},
    {parts:["أَخِي طَبِيبٌ","، يَعْمَلُ","فِي","الْمُسْتَشْفى"],en:"My brother is a doctor; he works at the hospital."},
    {parts:["دَرَسَتْ أُخْتِي","فِي كُلِّيَّةِ","التَّمْرِيضِ","، وَهِيَ الآنَ مُمَرِّضَةٌ"],en:"My sister studied at the College of Nursing, and she's now a nurse."},
    {parts:["أُحِبُّ عَمَلِي","لِأَنِّي","أُحِبُّ","الأَطْفالَ"],en:"I love my work because I love children."},
    {parts:["كَمْ ساعَةً","تَعْمَلُ","فِي","الْيَوْمِ؟"],en:"How many hours do you work a day?"}
  ],
  prompts:[
    ["ما مِهْنَتُكَ؟ وَأَيْنَ تَعْمَلُ؟","What's your profession, and where do you work?",
     "أَنا مُهَنْدِسٌ، وَأَعْمَلُ فِي شَرِكَةٍ صَغِيرَةٍ. أَعْمَلُ ثَمانِيَ ساعاتٍ فِي الْيَوْمِ.",
     "I'm an engineer, and I work at a small company. I work eight hours a day."],
    ["تَكَلَّمْ عَنْ مِهَنِ أُسْرَتِكَ.","Talk about your family's professions.",
     "وَالِدِي مُهَنْدِسٌ، وَوالِدَتِي مُعَلِّمَةٌ. أَخِي طَبِيبٌ فِي الْمُسْتَشْفى، وَأُخْتِي صَيْدَلِيَّةٌ.",
     "My father is an engineer and my mother is a teacher. My brother is a doctor at the hospital, and my sister is a pharmacist."],
    ["هَلْ تُحِبُّ عَمَلَكَ؟ وَلِماذا؟","Do you like your work, and why?",
     "نَعَمْ، أُحِبُّ عَمَلِي لِأَنَّهُ مُفِيدٌ، وَأَعْمَلُ مَعَ أَصْدِقاءَ طَيِّبِينَ.",
     "Yes, I like my work because it's useful, and I work with good friends."],
    ["أَيَّ مِهْنَةٍ تُرِيدُ لأَوْلادِكَ؟ وَلِماذا؟","What profession would you want for your children, and why?",
     "أُرِيدُ لَهُمْ مِهْنَةَ الطِّبِّ أَوِ الْهَنْدَسَةِ، لِأَنَّهُما مِهْنَتانِ مُفِيدَتانِ لِلنَّاسِ.",
     "I'd want medicine or engineering for them, because they're both useful professions for people."],
    ["ما الْكُلِّيَّةُ الَّتِي دَرَسْتَ فِيها؟ وَماذا دَرَسْتَ؟","Which college did you study at, and what did you study?",
     "دَرَسْتُ فِي كُلِّيَّةِ الْهَنْدَسَةِ. دَرَسْتُ الرِّياضِيّاتِ وَالْعُلُومَ أَرْبَعَ سَنَواتٍ.",
     "I studied at the College of Engineering. I studied mathematics and science for four years."]
  ]
}
,
{
  n:"09",ar:"التَّسَوُّقُ",en:"Shopping",src:"book",
  dialogue:[
    ["ب","السَّلامُ عَلَيْكُمْ، أَيَّ خِدْمَةٍ؟","Peace be upon you — how can I help?"],
    ["م","وَعَلَيْكُمُ السَّلامُ. لَوْ سَمَحْتَ، أَيْنَ قِسْمُ الْقُمْصانِ؟","And upon you. Excuse me, where's the shirt section?"],
    ["ب","هُنا، أَمامَكَ. أَيَّ لَوْنٍ تُرِيدُ؟","Here, in front of you. Which colour do you want?"],
    ["م","أُرِيدُ قَمِيصًا أَبْيَضَ، وَثَوْبًا أَزْرَقَ.","I want a white shirt and a blue thobe."],
    ["ب","هَذا قَمِيصٌ جَمِيلٌ جِدًّا.","This is a very nice shirt."],
    ["م","بِكَمْ هَذا الْقَمِيصُ؟","How much is this shirt?"],
    ["ب","بِخَمْسِينَ رِيالًا.","Fifty riyals."],
    ["م","وَالثَّوْبُ؟","And the thobe?"],
    ["ب","بِثَمانِينَ رِيالًا. الْمَطْلُوبُ مِائَةٌ وَثَلاثُونَ رِيالًا.","Eighty riyals. That comes to a hundred and thirty."],
    ["م","تَفَضَّلْ. شُكْرًا لَكَ.","Here you are. Thank you."]
  ],
  ladders:[
    {steps:["أُرِيدُ قَمِيصًا","أَبْيَضَ","مِنْ قِسْمِ الْقُمْصانِ","، وَثَوْبًا أَزْرَقَ","لَوْ سَمَحْتَ"],
     en:"I want a shirt → white → from the shirt section → and a blue thobe → please."},
    {steps:["ذَهَبْتُ إِلَى السُّوقِ","فِي الصَّباحِ","وَاشْتَرَيْتُ طَماطِمَ وَخِيارًا","، ثُمَّ اشْتَرَيْتُ طَبَقَ بَيْضٍ","وَعُلْبَةَ مِلْحٍ"],
     en:"I went to the market → in the morning → and bought tomatoes and cucumber → then I bought a tray of eggs → and a packet of salt."},
    {steps:["هَذا مُعْجَمٌ","عَرَبِيٌّ","وَثَمَنُهُ خَمْسُونَ رِيالًا","، لَكِنَّهُ مُفِيدٌ جِدًّا","لِأَنِّي أَدْرُسُ الْعَرَبِيَّةَ"],
     en:"This is a dictionary → Arabic → and its price is fifty riyals → but it's very useful → because I study Arabic."},
    {steps:["أُرِيدُ دَفْتَرًا","وَكِتابَ قِراءَةٍ","وَكِتابَ قَواعِدَ","، وَكُلُّها فِي هَذا الْقِسْمِ","أَمامَ الْبابِ"],
     en:"I want a notebook → and a reading book → and a grammar book → and they're all in this section → in front of the door."}
  ],
  subs:[
    {tpl:["أُرِيدُ ",["قَمِيصًا أَبْيَضَ","ثَوْبًا أَزْرَقَ","مُعْجَمًا عَرَبِيًّا","دَفْتَرًا"]," ."],en:"I want ___ . Everything after أُرِيدُ is accusative — listen for the -an."},
    {tpl:["بِكَمْ ",["هَذا الْقَمِيصُ","هَذا الثَّوْبُ","هَذا الْمُعْجَمُ","طَبَقُ الْبَيْضِ"]," ؟"],en:"How much is ___ ? The single most useful question in this unit."},
    {tpl:["الثَّوْبُ ",["أَحْمَرُ","أَخْضَرُ","أَصْفَرُ","أَسْوَدُ"]," ."],en:"The thobe is ___ . These colours are diptotes — no tanwin, ever."},
    {tpl:["اشْتَرَيْتُ ",["قَمِيصًا","مُعْجَمًا","ثَوْبًا","دَفْتَرًا"]," بِـ",["ثَلاثِينَ","خَمْسِينَ","ثَمانِينَ"]," رِيالًا ."],en:"I bought ___ for ___ riyals. Twelve sentences; say every one."}
  ],
  transforms:[
    {task:["حَوِّلْ إِلَى الْمُؤَنَّثِ","Change to feminine"],src:"هَذا ثَوْبٌ أَحْمَرُ.",ans:"هَذِهِ سَيَّارَةٌ حَمْراءُ."},
    {task:["اسْأَلْ عَنِ الثَّمَنِ","Ask the price"],src:"الْقَمِيصُ بِخَمْسِينَ رِيالًا.",ans:"بِكَمِ الْقَمِيصُ؟"},
    {task:["حَوِّلْ إِلَى الْماضِي","Change to the past"],src:"أَشْتَرِي قَمِيصًا جَدِيدًا.",ans:"اشْتَرَيْتُ قَمِيصًا جَدِيدًا."},
    {task:["حَوِّلْ إِلَى الْجَمْعِ","Change to the plural"],src:"أُرِيدُ قَمِيصًا.",ans:"أُرِيدُ قُمْصانًا."},
    {task:["انْفِ الْجُمْلَةَ","Negate it"],src:"هَذا الْمُعْجَمُ غالٍ.",ans:"هَذا الْمُعْجَمُ لَيْسَ غالِيًا."},
    {task:["اِرْبِطْ بِـ (لِأَنَّ)","Join them with 'because'"],src:"ما اشْتَرَيْتُ الثَّوْبَ. الثَّوْبُ غالٍ.",ans:"ما اشْتَرَيْتُ الثَّوْبَ لِأَنَّهُ غالٍ."}
  ],
  builds:[
    {parts:["أُرِيدُ","قَمِيصًا أَبْيَضَ","وَثَوْبًا أَزْرَقَ","، لَوْ سَمَحْتَ"],en:"I want a white shirt and a blue thobe, please."},
    {parts:["ذَهَبْتُ إِلَى السُّوقِ","وَاشْتَرَيْتُ","طَماطِمَ","وَبَصَلًا","وَخِيارًا"],en:"I went to the market and bought tomatoes, onions and cucumber."},
    {parts:["لَوْ سَمَحْتَ","، بِكَمْ","هَذا الْمُعْجَمُ","الْعَرَبِيُّ؟"],en:"Excuse me, how much is this Arabic dictionary?"},
    {parts:["الْمَطْلُوبُ","مِائَةٌ وَثَلاثُونَ","رِيالًا","، تَفَضَّلْ"],en:"That comes to a hundred and thirty riyals — here you are."},
    {parts:["اشْتَرَيْتُ","دَفْتَرًا","وَكِتابَ قَواعِدَ","مِنْ قِسْمِ الْكُتُبِ"],en:"I bought a notebook and a grammar book from the book section."}
  ],
  prompts:[
    ["أَنْتَ فِي السُّوقِ وَتُرِيدُ قَمِيصًا. ماذا تَقُولُ لِلْبائِعِ؟","You're at the market and want a shirt. What do you say to the seller?",
     "لَوْ سَمَحْتَ، أَيْنَ قِسْمُ الْقُمْصانِ؟ أُرِيدُ قَمِيصًا أَبْيَضَ. بِكَمْ هَذا؟",
     "Excuse me, where's the shirt section? I want a white shirt. How much is this one?"],
    ["ماذا اشْتَرَيْتَ فِي آخِرِ مَرَّةٍ ذَهَبْتَ فِيها إِلَى السُّوقِ؟","What did you buy the last time you went to the market?",
     "اشْتَرَيْتُ طَماطِمَ وَبَصَلًا وَخِيارًا، وَطَبَقَ بَيْضٍ. دَفَعْتُ ثَلاثِينَ رِيالًا تَقْرِيبًا.",
     "I bought tomatoes, onions, cucumber and a tray of eggs. I paid about thirty riyals."],
    ["صِفْ خَمْسَةَ أَشْياءَ فِي بَيْتِكَ بِأَلْوانِها.","Describe five things in your house with their colours.",
     "الْبابُ أَبْيَضُ، وَالسَّيَّارَةُ حَمْراءُ، وَالْمِظَلَّةُ سَوْداءُ، وَالدَّفْتَرُ أَزْرَقُ، وَالْقَمِيصُ أَخْضَرُ.",
     "The door is white, the car is red, the umbrella is black, the notebook is blue, and the shirt is green."],
    ["هَلْ تُحِبُّ التَّسَوُّقَ؟ وَلِماذا؟","Do you like shopping, and why?",
     "لا أُحِبُّ التَّسَوُّقَ كَثِيرًا، لِأَنَّ فِي السُّوقِ ازْدِحامًا، لَكِنِّي أُحِبُّ قِسْمَ الْكُتُبِ.",
     "I don't like shopping much, because the market is crowded, but I like the book section."],
    ["اسْأَلْ عَنْ أَثْمانِ ثَلاثَةِ أَشْياءَ.","Ask the price of three things.",
     "بِكَمْ هَذا الثَّوْبُ؟ بِكَمْ هَذا الْمُعْجَمُ؟ بِكَمْ طَبَقُ الْبَيْضِ؟",
     "How much is this thobe? How much is this dictionary? How much is a tray of eggs?"]
  ]
},
{
  n:"10",ar:"الجَوُّ",en:"The weather",src:"book",
  dialogue:[
    ["خ","كَيْفَ الْجَوُّ الْيَوْمَ؟","How's the weather today?"],
    ["ج","الْجَوُّ بارِدٌ جِدًّا، وَتُمْطِرُ فِي الْخارِجِ.","It's very cold, and it's raining outside."],
    ["خ","كَمْ دَرَجَةُ الْحَرارَةِ؟","What's the temperature?"],
    ["ج","خَمْسُ دَرَجاتٍ فَوْقَ الصِّفْرِ.","Five degrees above zero."],
    ["خ","وَكَيْفَ كانَ الْجَوُّ أَمْسِ؟","And how was the weather yesterday?"],
    ["ج","كانَ أَبْرَدَ، تَحْتَ الصِّفْرِ.","It was colder — below zero."],
    ["خ","أَيُّ فَصْلٍ تُحِبُّ؟","Which season do you like?"],
    ["ج","أُحِبُّ فَصْلَ الرَّبِيعِ، لِأَنَّ الْجَوَّ فِيهِ مُعْتَدِلٌ.","I like spring, because the weather is mild then."],
    ["خ","وَأَنا أُحِبُّ الصَّيْفَ، وَأَقْضِي عُطْلَةَ الأُسْبُوعِ عَلَى الشَّاطِئِ.","I like summer, and I spend the weekend at the beach."],
    ["ج","بارَكَ اللهُ فِيكَ! نَذْهَبُ مَعًا غَدًا.","Bless you! Let's go together tomorrow."]
  ],
  ladders:[
    {steps:["الْجَوُّ بارِدٌ","الْيَوْمَ","وَتُمْطِرُ فِي الْخارِجِ","، لِذَلِكَ أَخَذْتُ الْمِظَلَّةَ","وَبَقِيتُ فِي الْبَيْتِ"],
     en:"The weather is cold → today → and it's raining outside → so I took the umbrella → and stayed at home."},
    {steps:["فِي فَصْلِ الصَّيْفِ","الْجَوُّ حارٌّ","وَدَرَجَةُ الْحَرارَةِ عالِيَةٌ","، لِذَلِكَ نَذْهَبُ إِلَى الشَّاطِئِ","كُلَّ عُطْلَةِ أُسْبُوعٍ"],
     en:"In summer → the weather is hot → and the temperature is high → so we go to the beach → every weekend."},
    {steps:["أَقْضِي عُطْلَةَ الأُسْبُوعِ","خارِجَ الْمَدِينَةِ","فِي خَيْمَةٍ","مَعَ أَصْدِقائِي","، وَنَرْجِعُ لَيْلَةَ الأَحَدِ"],
     en:"I spend the weekend → outside the city → in a tent → with my friends → and we come back on Sunday night."},
    {steps:["كانَ الْجَوُّ أَمْسِ","بارِدًا جِدًّا","تَحْتَ الصِّفْرِ","، لَكِنَّهُ الْيَوْمَ","دافِئٌ وَمُعْتَدِلٌ"],
     en:"The weather yesterday was → very cold → below zero → but today it's → warm and mild."}
  ],
  subs:[
    {tpl:["الْجَوُّ الْيَوْمَ ",["حارٌّ","بارِدٌ","دافِئٌ","مُعْتَدِلٌ"]," ."],en:"The weather today is ___ ."},
    {tpl:["أُحِبُّ فَصْلَ ",["الرَّبِيعِ","الصَّيْفِ","الْخَرِيفِ","الشِّتاءِ"]," ."],en:"I like the season of ___ . Note it's an iḍāfa — فَصْل then the season in the genitive."},
    {tpl:["دَرَجَةُ الْحَرارَةِ ",["خَمْسٌ فَوْقَ الصِّفْرِ","تَحْتَ الصِّفْرِ","ثَلاثُونَ دَرَجَةً","صِفْرٌ"]," ."],en:"The temperature is ___ ."},
    {tpl:["فِي ",["الصَّيْفِ","الشِّتاءِ","الرَّبِيعِ","الْخَرِيفِ"]," الْجَوُّ ",["حارٌّ","بارِدٌ","مُعْتَدِلٌ","دافِئٌ"]," ."],en:"In ___ the weather is ___ . Sixteen sentences — run the whole grid."}
  ],
  transforms:[
    {task:["حَوِّلْ إِلَى الْماضِي","Change to the past"],src:"الْجَوُّ بارِدٌ.",ans:"كانَ الْجَوُّ بارِدًا."},
    {task:["انْفِ الْجُمْلَةَ","Negate it"],src:"الْجَوُّ حارٌّ الْيَوْمَ.",ans:"الْجَوُّ لَيْسَ حارًّا الْيَوْمَ."},
    {task:["اسْأَلْ عَنِ الْجَوِّ","Ask about the weather"],src:"الْجَوُّ مُعْتَدِلٌ الْيَوْمَ.",ans:"كَيْفَ الْجَوُّ الْيَوْمَ؟"},
    {task:["حَوِّلْ إِلَى الْمُسْتَقْبَلِ","Change to the future"],src:"أَقْضِي الْعُطْلَةَ عَلَى الشَّاطِئِ.",ans:"غَدًا سَأَقْضِي الْعُطْلَةَ عَلَى الشَّاطِئِ."},
    {task:["اِرْبِطْ بِـ (لِذَلِكَ)","Join them with 'so'"],src:"تُمْطِرُ فِي الْخارِجِ. أَخَذْتُ الْمِظَلَّةَ.",ans:"تُمْطِرُ فِي الْخارِجِ، لِذَلِكَ أَخَذْتُ الْمِظَلَّةَ."},
    {task:["اِرْبِطْ بِـ (لِأَنَّ)","Join them with 'because'"],src:"أُحِبُّ الرَّبِيعَ. الْجَوُّ فِيهِ مُعْتَدِلٌ.",ans:"أُحِبُّ الرَّبِيعَ لِأَنَّ الْجَوَّ فِيهِ مُعْتَدِلٌ."}
  ],
  builds:[
    {parts:["الْجَوُّ الْيَوْمَ","بارِدٌ جِدًّا","، وَدَرَجَةُ الْحَرارَةِ","تَحْتَ الصِّفْرِ"],en:"The weather today is very cold, and the temperature is below zero."},
    {parts:["تُمْطِرُ فِي الْخارِجِ","، لِذَلِكَ","أَخَذْتُ","الْمِظَلَّةَ مَعِي"],en:"It's raining outside, so I took the umbrella with me."},
    {parts:["أَقْضِي","عُطْلَةَ الأُسْبُوعِ","عَلَى الشَّاطِئِ","مَعَ أُسْرَتِي"],en:"I spend the weekend at the beach with my family."},
    {parts:["فِي فَصْلِ الشِّتاءِ","الْجَوُّ بارِدٌ","، وَفِي فَصْلِ الصَّيْفِ","الْجَوُّ حارٌّ"],en:"In winter the weather is cold, and in summer the weather is hot."},
    {parts:["بَقِينا","فِي الْخَيْمَةِ","خارِجَ الْمَدِينَةِ","لَيْلَةً واحِدَةً"],en:"We stayed in the tent outside the city for one night."}
  ],
  prompts:[
    ["كَيْفَ الْجَوُّ الْيَوْمَ فِي مَدِينَتِكَ؟","How's the weather today in your city?",
     "الْجَوُّ الْيَوْمَ بارِدٌ وَمُمْطِرٌ، وَدَرَجَةُ الْحَرارَةِ ثَمانِ دَرَجاتٍ فَوْقَ الصِّفْرِ.",
     "The weather today is cold and rainy, and the temperature is eight degrees above zero."],
    ["أَيُّ فَصْلٍ تُحِبُّ أَكْثَرَ؟ وَلِماذا؟","Which season do you like most, and why?",
     "أُحِبُّ فَصْلَ الرَّبِيعِ، لِأَنَّ الْجَوَّ فِيهِ مُعْتَدِلٌ، وَلا هُوَ حارٌّ وَلا بارِدٌ.",
     "I like spring, because the weather is mild — neither hot nor cold."],
    ["صِفِ الْجَوَّ فِي بَلَدِكَ فِي الْفُصُولِ الأَرْبَعَةِ.","Describe the weather in your country in the four seasons.",
     "فِي الشِّتاءِ الْجَوُّ بارِدٌ وَتُمْطِرُ كَثِيرًا. فِي الرَّبِيعِ مُعْتَدِلٌ، وَفِي الصَّيْفِ دافِئٌ، وَفِي الْخَرِيفِ بارِدٌ قَلِيلًا.",
     "In winter it's cold and rains a lot. In spring it's mild, in summer warm, and in autumn a little cold."],
    ["ماذا تَفْعَلُ عِنْدَما يَكُونُ الْجَوُّ بارِدًا؟","What do you do when the weather is cold?",
     "عِنْدَما يَكُونُ الْجَوُّ بارِدًا أَبْقى فِي الْبَيْتِ، وَأَشْرَبُ الشَّايَ، وَأَقْرَأُ كِتابًا.",
     "When the weather is cold I stay at home, drink tea and read a book."],
    ["أَيْنَ تَقْضِي عُطْلَةَ الأُسْبُوعِ عادَةً؟","Where do you usually spend the weekend?",
     "أَقْضِي عُطْلَةَ الأُسْبُوعِ فِي الْبَيْتِ عادَةً، وَأَحْيانًا أَذْهَبُ خارِجَ الْمَدِينَةِ مَعَ أَصْدِقائِي.",
     "I usually spend the weekend at home, and sometimes I go outside the city with my friends."]
  ]
},
{
  n:"11",ar:"النَّاسُ وَالأَماكِنُ",en:"People & places",src:"book",
  dialogue:[
    ["خ","مِنْ أَيْنَ أَنْتَ يا صَدِيقِي؟","Where are you from, my friend?"],
    ["ج","أَنا مِنْ قَرْيَةٍ صَغِيرَةٍ قَرِيبَةٍ مِنَ الْبَحْرِ.","I'm from a small village near the sea."],
    ["خ","وَمُنْذُ مَتَى تَسْكُنُ فِي هَذِهِ الْمَدِينَةِ؟","And how long have you lived in this city?"],
    ["ج","انْتَقَلْتُ إِلَيْها قَبْلَ ثَلاثِ سَنَواتٍ تَقْرِيبًا.","I moved here about three years ago."],
    ["خ","ما رَأْيُكَ فِي الْمَدِينَةِ؟","What do you think of the city?"],
    ["ج","فِيها شَرِكاتٌ كَثِيرَةٌ وَأَسْواقٌ كَبِيرَةٌ، لَكِنَّ فِيها ازْدِحامًا وَضَوْضاءَ.","It has many companies and big markets, but there's crowding and noise."],
    ["خ","وَالْهَواءُ؟","And the air?"],
    ["ج","فِي الْهَواءِ تَلَوُّثٌ، وَهَذِهِ مُشْكِلَةٌ كَبِيرَةٌ.","There's pollution in the air, and that's a big problem."],
    ["خ","هَلْ تُرِيدُ الرُّجُوعَ إِلَى الْقَرْيَةِ؟","Do you want to go back to the village?"],
    ["ج","الْقَرْيَةُ هادِئَةٌ وَجَمِيلَةٌ، لَكِنَّ عَمَلِي هُنا.","The village is quiet and beautiful, but my work is here."]
  ],
  ladders:[
    {steps:["انْتَقَلْتُ إِلَى هَذِهِ الْمَدِينَةِ","قَبْلَ ثَلاثِ سَنَواتٍ","لِأَنَّ عَمَلِي فِيها","، وَأَنا سَعِيدٌ هُنا","لَكِنِّي أُحِبُّ الْقَرْيَةَ أَكْثَرَ"],
     en:"I moved to this city → three years ago → because my work is here → and I'm happy here → but I like the village more."},
    {steps:["الْمَدِينَةُ كَبِيرَةٌ","وَفِيها أَسْواقٌ وَشَرِكاتٌ","، لَكِنَّ فِيها ازْدِحامًا","وَضَوْضاءَ","وَتَلَوُّثًا فِي الْهَواءِ"],
     en:"The city is big → and has markets and companies → but there's crowding → and noise → and pollution in the air."},
    {steps:["زُرْتُ صَدِيقِي","فِي قَرْيَتِهِ","بِالْقِطارِ","، وَاسْتَغْرَقَتِ الرِّحْلَةُ","ساعَتَيْنِ تَقْرِيبًا"],
     en:"I visited my friend → in his village → by train → and the journey took → about two hours."},
    {steps:["الْقَرْيَةُ هادِئَةٌ","وَهَواؤُها نَظِيفٌ","، وَلَيْسَ فِيها ازْدِحامٌ","، لِذَلِكَ أَزُورُها","كُلَّ عُطْلَةٍ"],
     en:"The village is quiet → and its air is clean → and there's no crowding → so I visit it → every holiday."}
  ],
  subs:[
    {tpl:["أَسْكُنُ فِي ",["مَدِينَةٍ كَبِيرَةٍ","قَرْيَةٍ هادِئَةٍ","بَلَدٍ بَعِيدٍ","مَدِينَةٍ قَرِيبَةٍ مِنَ الْبَحْرِ"]," ."],en:"I live in ___ ."},
    {tpl:["الْمَدِينَةُ ",["هادِئَةٌ","كَبِيرَةٌ","فِيها ازْدِحامٌ","فِيها ضَوْضاءُ"]," ."],en:"The city is ___ . The last two swap an adjective for a whole clause — both are legal after the noun."},
    {tpl:["السَّيَّارَةُ ",["بَيْضاءُ","حَمْراءُ","زَرْقاءُ","سَوْداءُ"]," ."],en:"The car is ___ . Feminine colours: the fuʿlāʾ pattern, and no tanwin."},
    {tpl:["زُرْتُ ",["الْقَرْيَةَ","الْمَدِينَةَ","بَلَدًا جَدِيدًا","صَدِيقِي"]," بِـ",["الْقِطارِ","السَّيَّارَةِ","الْحافِلَةِ"]," ."],en:"I visited ___ by ___ ."}
  ],
  transforms:[
    {task:["حَوِّلْ إِلَى الْمُؤَنَّثِ","Change to feminine"],src:"الْقَمِيصُ أَزْرَقُ.",ans:"السَّيَّارَةُ زَرْقاءُ."},
    {task:["انْفِ بِـ (لَيْسَ)","Negate with 'laysa'"],src:"فِي الْقَرْيَةِ ازْدِحامٌ.",ans:"لَيْسَ فِي الْقَرْيَةِ ازْدِحامٌ."},
    {task:["اسْأَلْ عَنِ الرَّأْيِ","Ask for an opinion"],src:"الْمَدِينَةُ جَمِيلَةٌ.",ans:"ما رَأْيُكَ فِي الْمَدِينَةِ؟"},
    {task:["حَوِّلْ إِلَى الْماضِي","Change to the past"],src:"أَزُورُ صَدِيقِي فِي الْقَرْيَةِ.",ans:"زُرْتُ صَدِيقِي فِي الْقَرْيَةِ."},
    {task:["اِرْبِطْ بِـ (لَكِنَّ)","Join them with 'but'"],src:"الْمَدِينَةُ كَبِيرَةٌ. فِيها ضَوْضاءُ.",ans:"الْمَدِينَةُ كَبِيرَةٌ، لَكِنَّ فِيها ضَوْضاءَ."},
    {task:["اسْأَلْ عَنِ الْمُدَّةِ","Ask how long it took"],src:"اسْتَغْرَقَتِ الرِّحْلَةُ ساعَتَيْنِ.",ans:"كَمِ اسْتَغْرَقَتِ الرِّحْلَةُ؟"}
  ],
  builds:[
    {parts:["انْتَقَلْتُ","إِلَى هَذِهِ الْمَدِينَةِ","قَبْلَ ثَلاثِ سَنَواتٍ","تَقْرِيبًا"],en:"I moved to this city about three years ago."},
    {parts:["فِي الْمَدِينَةِ","ازْدِحامٌ وَضَوْضاءُ","، لَكِنَّ الْقَرْيَةَ","هادِئَةٌ"],en:"In the city there's crowding and noise, but the village is quiet."},
    {parts:["زُرْتُ","صَدِيقِي","بِالْقِطارِ","، وَاسْتَغْرَقَتِ الرِّحْلَةُ","ساعَتَيْنِ"],en:"I visited my friend by train, and the journey took two hours."},
    {parts:["ما رَأْيُكَ","فِي هَذِهِ","الْمَدِينَةِ","يا أُسْتاذُ؟"],en:"What do you think of this city, teacher?"},
    {parts:["الْهَواءُ فِي الْقَرْيَةِ","نَظِيفٌ","، وَلَيْسَ فِيهِ","تَلَوُّثٌ"],en:"The air in the village is clean, and there's no pollution in it."}
  ],
  prompts:[
    ["صِفِ الْمَدِينَةَ الَّتِي تَسْكُنُ فِيها.","Describe the city you live in.",
     "أَسْكُنُ فِي مَدِينَةٍ مُتَوَسِّطَةٍ، فِيها أَسْواقٌ وَشَرِكاتٌ كَثِيرَةٌ. الْهَواءُ فِيها لَيْسَ نَظِيفًا، وَفِيها ازْدِحامٌ فِي الصَّباحِ.",
     "I live in a medium-sized city with many markets and companies. The air isn't clean, and there's crowding in the morning."],
    ["ما رَأْيُكَ: الْحَياةُ فِي الْمَدِينَةِ أَمْ فِي الْقَرْيَةِ؟","Which do you prefer: life in the city or the village?",
     "الْحَياةُ فِي الْمَدِينَةِ أَسْهَلُ، لِأَنَّ فِيها شَرِكاتٍ وَأَسْواقًا، لَكِنَّ الْقَرْيَةَ أَهْدَأُ وَهَواءَها أَنْظَفُ.",
     "Life in the city is easier, because it has companies and markets, but the village is quieter and its air is cleaner."],
    ["تَكَلَّمْ عَنْ رِحْلَةٍ قُمْتَ بِها.","Talk about a journey you made.",
     "سافَرْتُ إِلَى مَدِينَةٍ قَرِيبَةٍ بِالْقِطارِ. اسْتَغْرَقَتِ الرِّحْلَةُ ساعَتَيْنِ تَقْرِيبًا، وَكانَتْ جَمِيلَةً.",
     "I travelled to a nearby city by train. The journey took about two hours, and it was lovely."],
    ["ما أَكْبَرُ مُشْكِلَةٍ فِي مَدِينَتِكَ؟","What's the biggest problem in your city?",
     "أَكْبَرُ مُشْكِلَةٍ هِيَ الازْدِحامُ، وَبَعْدَهُ تَلَوُّثُ الْهَواءِ وَالضَّوْضاءُ.",
     "The biggest problem is the crowding, and after that air pollution and noise."],
    ["صِفْ بَلَدَكَ لِصَدِيقٍ ما زارَهُ.","Describe your country to a friend who hasn't visited it.",
     "بَلَدِي فِيهِ مُدُنٌ كَبِيرَةٌ وَقُرًى هادِئَةٌ. الْجَوُّ فِيهِ بارِدٌ وَمُمْطِرٌ، وَالنَّاسُ هادِئُونَ.",
     "My country has big cities and quiet villages. The weather is cold and rainy, and the people are calm."]
  ]
},
{
  n:"12",ar:"الهِوايَاتُ",en:"Hobbies",src:"book",
  dialogue:[
    ["خ","ما هِوايَتُكَ يا أَحْمَدُ؟","What's your hobby, Ahmad?"],
    ["ج","هِوايَتِي الْقِراءَةُ. وَأَنْتَ؟","My hobby is reading. And you?"],
    ["خ","أَنا أَهْوى جَمْعَ الطَّوابِعِ وَالسِّباحَةَ.","I'm into stamp collecting and swimming."],
    ["ج","كَمْ ساعَةً تَقْرَأُ فِي الْيَوْمِ؟","How many hours do you read a day?"],
    ["خ","أَقْرَأُ ساعَتَيْنِ تَقْرِيبًا.","I read about two hours."],
    ["ج","وَماذا تَقْرَأُ؟","And what do you read?"],
    ["خ","أَقْرَأُ كُتُبًا إِسْلامِيَّةً وَمَجَلَّاتٍ عِلْمِيَّةً وَالصُّحُفَ الْعَرَبِيَّةَ.","I read Islamic books, scientific magazines and the Arabic newspapers."],
    ["ج","هَلْ لَدَيْكَ مَكْتَبَةٌ فِي الْبَيْتِ؟","Do you have a library at home?"],
    ["خ","نَعَمْ، لَدَيَّ مَكْتَبَةٌ كَبِيرَةٌ فِيها كُتُبٌ كَثِيرَةٌ.","Yes, I have a big one with a lot of books in it."],
    ["ج","هَذا مُفِيدٌ جِدًّا. وَأَنا أُحِبُّ الْخَطَّ الْعَرَبِيَّ أَيْضًا.","That's very useful. I like Arabic calligraphy too."]
  ],
  ladders:[
    {steps:["هِوايَتِي الْقِراءَةُ","مُنْذُ سَنَواتٍ","وَأَقْرَأُ ساعَتَيْنِ","كُلَّ يَوْمٍ","، لِأَنَّ الْقِراءَةَ مُفِيدَةٌ"],
     en:"My hobby is reading → for years → and I read two hours → every day → because reading is useful."},
    {steps:["أَهْوى جَمْعَ الطَّوابِعِ","وَعِنْدِي طَوابِعُ كَثِيرَةٌ","مِنْ بِلادٍ بَعِيدَةٍ","، وَأَخَذْتُها","مِنْ أَصْدِقاءِ الْمُراسَلَةِ"],
     en:"I collect stamps → and I have many stamps → from far-off countries → and I got them → from pen-friends."},
    {steps:["زُرْتُ الْمَعْرِضَ","يَوْمَ الْجُمُعَةِ","وَدَخَلْتُ جَناحَ الْخَطِّ الْعَرَبِيِّ","، ثُمَّ جَناحَ الْكُتُبِ","وَاشْتَرَيْتُ مَجَلَّةً عِلْمِيَّةً"],
     en:"I visited the exhibition → on Friday → and went into the calligraphy hall → then the book hall → and bought a science magazine."},
    {steps:["لَدَيَّ مَكْتَبَةٌ","فِي الْبَيْتِ","فِيها كُتُبٌ إِسْلامِيَّةٌ وَعِلْمِيَّةٌ","، وَأَقْرَأُ فِيها","كُلَّ مَساءٍ"],
     en:"I have a library → at home → with Islamic and scientific books → and I read in it → every evening."}
  ],
  subs:[
    {tpl:["هِوايَتِي ",["الْقِراءَةُ","السِّباحَةُ","جَمْعُ الطَّوابِعِ","الْخَطُّ الْعَرَبِيُّ"]," ."],en:"My hobby is ___ . Both sides of this sentence are nominative — no verb in it at all."},
    {tpl:["أَقْرَأُ ",["كُتُبًا إِسْلامِيَّةً","مَجَلَّاتٍ عِلْمِيَّةً","الصُّحُفَ الْعَرَبِيَّةَ","كِتابًا قَصِيرًا"]," ."],en:"I read ___ . Watch مَجَلَّاتٍ — sound feminine plurals take kasra, not fatḥa, in the accusative."},
    {tpl:["أَهْوى ",["الرِّياضَةَ","السَّفَرَ","الْخِياطَةَ","الْفُرُوسِيَّةَ"]," ."],en:"I'm keen on ___ ."},
    {tpl:["أَقْضِي ",["ساعَةً","ساعَتَيْنِ","ثَلاثَ ساعاتٍ"]," فِي ",["الْقِراءَةِ","السِّباحَةِ","الْمَكْتَبَةِ","الْمَعْرِضِ"]," ."],en:"I spend ___ in ___ . Twelve sentences."}
  ],
  transforms:[
    {task:["اسْأَلْ عَنِ الْهِوايَةِ","Ask about the hobby"],src:"هِوايَتِي السِّباحَةُ.",ans:"ما هِوايَتُكَ؟"},
    {task:["اسْأَلْ عَنِ الْعَدَدِ","Ask how many"],src:"أَقْرَأُ ساعَتَيْنِ فِي الْيَوْمِ.",ans:"كَمْ ساعَةً تَقْرَأُ فِي الْيَوْمِ؟"},
    {task:["حَوِّلْ إِلَى (أَنْتِ)","Change to feminine 'you'"],src:"ماذا تَقْرَأُ يا أَحْمَدُ؟",ans:"ماذا تَقْرَئِينَ يا زَيْنَبُ؟"},
    {task:["حَوِّلْ إِلَى الْماضِي","Change to the past"],src:"أَزُورُ الْمَعْرِضَ كُلَّ سَنَةٍ.",ans:"زُرْتُ الْمَعْرِضَ."},
    {task:["اِرْبِطْ بِـ (لِأَنَّ)","Join them with 'because'"],src:"أُحِبُّ الْقِراءَةَ. الْقِراءَةُ مُفِيدَةٌ.",ans:"أُحِبُّ الْقِراءَةَ لِأَنَّها مُفِيدَةٌ."},
    {task:["انْفِ الْجُمْلَةَ","Negate it"],src:"لَدَيَّ مَكْتَبَةٌ كَبِيرَةٌ.",ans:"لَيْسَ لَدَيَّ مَكْتَبَةٌ كَبِيرَةٌ."}
  ],
  builds:[
    {parts:["هِوايَتِي","الْقِراءَةُ","، وَأَقْرَأُ","ساعَتَيْنِ كُلَّ يَوْمٍ"],en:"My hobby is reading, and I read two hours every day."},
    {parts:["أَهْوى","جَمْعَ الطَّوابِعِ","مُنْذُ","كُنْتُ صَغِيرًا"],en:"I've collected stamps since I was small."},
    {parts:["لَدَيَّ مَكْتَبَةٌ","فِي الْبَيْتِ","فِيها","كُتُبٌ كَثِيرَةٌ"],en:"I have a library at home with many books in it."},
    {parts:["زُرْتُ الْمَعْرِضَ","وَدَخَلْتُ","جَناحَ","الْخَطِّ الْعَرَبِيِّ"],en:"I visited the exhibition and went into the Arabic calligraphy hall."},
    {parts:["أَقْرَأُ","الصُّحُفَ الْعَرَبِيَّةَ","لِأَنَّها","مُفِيدَةٌ لِلُغَتِي"],en:"I read the Arabic newspapers because they're useful for my language."}
  ],
  prompts:[
    ["ما هِوايَتُكَ؟ وَمُنْذُ مَتَى؟","What's your hobby, and since when?",
     "هِوايَتِي الْقِراءَةُ مُنْذُ سَنَواتٍ طَوِيلَةٍ، وَأَهْوى السَّفَرَ أَيْضًا.",
     "My hobby has been reading for many years, and I'm keen on travel too."],
    ["كَمْ ساعَةً تَقْرَأُ فِي الأُسْبُوعِ؟ وَماذا تَقْرَأُ؟","How many hours do you read a week, and what?",
     "أَقْرَأُ خَمْسَ ساعاتٍ تَقْرِيبًا فِي الأُسْبُوعِ. أَقْرَأُ كُتُبًا إِسْلامِيَّةً وَمَجَلَّاتٍ عِلْمِيَّةً.",
     "I read about five hours a week. I read Islamic books and scientific magazines."],
    ["تَكَلَّمْ عَنْ مَعْرِضٍ زُرْتَهُ.","Talk about an exhibition you visited.",
     "زُرْتُ مَعْرِضَ الْكِتابِ فِي الرَّبِيعِ. دَخَلْتُ جَناحَ الْكُتُبِ الْعِلْمِيَّةِ، وَاشْتَرَيْتُ مُعْجَمًا عَرَبِيًّا.",
     "I visited the book fair in spring. I went into the science hall and bought an Arabic dictionary."],
    ["ما هِوايَةٌ تُرِيدُ أَنْ تَتَعَلَّمَها؟ وَلِماذا؟","What hobby would you like to learn, and why?",
     "أُرِيدُ أَنْ أَتَعَلَّمَ الْخَطَّ الْعَرَبِيَّ، لِأَنَّهُ جَمِيلٌ وَمُفِيدٌ لِلُغَتِي.",
     "I'd like to learn Arabic calligraphy, because it's beautiful and useful for my language."],
    ["ما رَأْيُكَ فِي الرِّياضَةِ؟","What do you think about sport?",
     "الرِّياضَةُ مُفِيدَةٌ جِدًّا لِلصِّحَّةِ. أَنا أُحِبُّ السِّباحَةَ وَكُرَةَ الْقَدَمِ، لَكِنِّي لا أُمارِسُها كَثِيرًا.",
     "Sport is very good for your health. I like swimming and football, but I don't do them much."]
  ]
}
];

const EXTRA={
"01":{
 grammar:[
  {t:"الجملة الاسمية",ar:"أَنا مُهَنْدِسٌ.",en:"No verb 'to be'. Both halves are marfūʿ — subject and predicate simply sit side by side."},
  {t:"هَذا / هَذِهِ",ar:"هَذا طالِبٌ · هَذِهِ طالِبَةٌ.",en:"The demonstrative agrees in gender with what follows."},
  {t:"النِّسْبَة",ar:"باكِسْتانِيٌّ · باكِسْتانِيَّةٌ",en:"Add ـِيّ to a country to make a nationality; add ة for the feminine."},
  {t:"أدوات الاستفهام",ar:"ما · مَنْ · هَلْ · مِنْ أَيْنَ",en:"ما asks about things, مَنْ about people, هَلْ makes a yes/no question."}
 ],
 cloze:[
  {q:"___ أُخْتِي، وَهِيَ طَبِيبَةٌ.",o:["هَذا","هَذِهِ","ذَلِكَ","هُوَ"],a:1,w:"أُخْت is feminine, so the demonstrative must be هَذِهِ."},
  {q:"صَدِيقَتِي باكِسْتانِ___ .",o:["ـيٌّ","ـيَّةٌ","ـيُّونَ","ـيَّاتٌ"],a:1,w:"A single female → the feminine singular nisba ending."},
  {q:"___ اسْمُكَ؟",o:["ما","مَنْ","هَلْ","أَيْنَ"],a:0,w:"ما is used for things, including names — مَنْ would ask 'who'."},
  {q:"___ أَنْتَ طالِبٌ؟",o:["ما","مَنْ","هَلْ","كَيْفَ"],a:2,w:"هَلْ turns a statement into a yes/no question."},
  {q:"أَنا مُهَنْدِسٌ ___ صَدِيقِي مُدَرِّسٌ.",o:["وَ","لِأَنَّ","لَكِنَّ","ثُمَّ"],a:0,w:"Two parallel facts, no contrast or cause — plain وَ."},
  {q:"كَيْفَ ___ يا أُخْتِي؟",o:["حالُكَ","حالُكِ","حالُهُ","حالُنا"],a:1,w:"Addressing a woman takes the ـكِ ending."}
 ],
 fix:[
  {bad:"هَذا أُخْتِي.",good:"هَذِهِ أُخْتِي.",w:"Feminine noun needs هَذِهِ."},
  {bad:"أَنا مُهَنْدِسًا.",good:"أَنا مُهَنْدِسٌ.",w:"The predicate of a nominal sentence is marfūʿ, not manṣūb."},
  {bad:"هَلْ أَنْتَ طالِبَةٌ يا خالِدُ؟",good:"هَلْ أَنْتَ طالِبٌ يا خالِدُ؟",w:"Khalid is male — drop the ة."},
  {bad:"أَنا مِنْ مِصْرٍ.",good:"أَنا مِنْ مِصْرَ.",w:"مِصْر is a diptote: fatḥa instead of kasra, and never any tanwin."},
  {bad:"ما اسْمُكِ يا عُمَرُ؟",good:"ما اسْمُكَ يا عُمَرُ؟",w:"Umar is male, so the pronoun ending is ـكَ."}
 ]},
"02":{
 grammar:[
  {t:"الإضافة",ar:"صُورَةُ أُسْرَتِي",en:"Two nouns joined: the first takes no ال and no tanwin; the second is genitive."},
  {t:"الضمائر المتصلة",ar:"وَالِدِي · وَالِدُكَ · وَالِدُهُ",en:"Possession is a suffix on the noun, not a separate word."},
  {t:"المضارع: أنا / هو",ar:"أَتَوَضَّأُ · يَتَوَضَّأُ",en:"The prefix carries the person: أ for 'I', يـ for 'he', تـ for 'she' or 'you'."},
  {t:"العدد ٣–١٠",ar:"تِسْعَةُ أَوْلادٍ",en:"The counted noun comes after, in the plural and genitive."}
 ],
 cloze:[
  {q:"هَذِهِ صُورَةُ ___ .",o:["أُسْرَتِي","أُسْرَةٌ","الأُسْرَةُ","أُسْرَةً"],a:0,w:"The second half of an iḍāfa; the pronoun suffix makes it definite."},
  {q:"وَالِدِي يُصَلِّي فِي ___ .",o:["الْمَسْجِدُ","الْمَسْجِدِ","الْمَسْجِدَ","مَسْجِدًا"],a:1,w:"Anything after فِي is genitive."},
  {q:"أَتَوَضَّأُ ___ أَذْهَبُ إِلى الْمَسْجِدِ.",o:["وَ","ثُمَّ","لِأَنَّ","لَكِنَّ"],a:1,w:"Sequence in time — ثُمَّ marks 'and then'."},
  {q:"فِي أُسْرَتِي تِسْعَةُ ___ .",o:["أَوْلادٍ","وَلَدٍ","أَوْلادٌ","الأَوْلادِ"],a:0,w:"After 3–10: plural, genitive, indefinite."},
  {q:"___ هَذا؟ — هَذا جَدِّي.",o:["ما","مَنْ","أَيْنَ","كَيْفَ"],a:1,w:"مَنْ asks about people."},
  {q:"هُوَ ___ الْقُرْآنَ بَعْدَ الْفَجْرِ.",o:["أَقْرَأُ","يَقْرَأُ","تَقْرَأُ","نَقْرَأُ"],a:1,w:"هُوَ takes the يـ prefix."}
 ],
 fix:[
  {bad:"هَذِهِ صُورَةُ الأُسْرَتِي.",good:"هَذِهِ صُورَةُ أُسْرَتِي.",w:"A noun with a possessive suffix is already definite — no ال."},
  {bad:"أَنا يَتَوَضَّأُ.",good:"أَنا أَتَوَضَّأُ.",w:"'I' takes the أ prefix."},
  {bad:"فِي أُسْرَتِي تِسْعَةُ أَوْلادٌ.",good:"فِي أُسْرَتِي تِسْعَةُ أَوْلادٍ.",w:"Counted noun after 3–10 is genitive."},
  {bad:"أُصَلِّي فِي الْمَسْجِدُ.",good:"أُصَلِّي فِي الْمَسْجِدِ.",w:"فِي always takes the genitive."},
  {bad:"هَذِهِ جَدِّي.",good:"هَذا جَدِّي.",w:"جَدّ is masculine."}
 ]},
"03":{
 grammar:[
  {t:"خبر مقدّم",ar:"فِي الْغُرْفَةِ سَرِيرٌ.",en:"'There is' sentences put the place first and the thing second, marfūʿ."},
  {t:"العدد ٣–١٠ ومعدوده",ar:"خَمْسُ غُرَفٍ",en:"With a feminine noun the number drops its ة — reverse agreement."},
  {t:"كَمْ + تمييز",ar:"كَمْ غُرْفَةً؟",en:"After كَمْ the noun is singular and manṣūb, never plural."},
  {t:"الترتيب",ar:"الدَّوْرُ الْخامِسُ",en:"Ordinals follow the noun and match it in definiteness and case."}
 ],
 cloze:[
  {q:"كَمْ ___ فِي الشَّقَّةِ؟",o:["غُرْفَةً","غُرَفٍ","غُرْفَةٌ","الْغُرْفَةِ"],a:0,w:"كَمْ takes a singular accusative — the commonest slip at this level."},
  {q:"فِي الشَّقَّةِ خَمْسُ ___ .",o:["غُرَفٍ","غُرْفَةً","غُرْفاتٌ","الْغُرَفِ"],a:0,w:"After 3–10: plural and genitive."},
  {q:"أَسْكُنُ فِي الدَّوْرِ ___ .",o:["الْخامِسُ","الْخامِسِ","خامِسٍ","الْخامِسَ"],a:1,w:"The adjective copies the noun's case — genitive after فِي."},
  {q:"___ الْغُرْفَةِ سَرِيرٌ وَمِرْآةٌ.",o:["فِي","عَلى","إِلى","مِنْ"],a:0,w:"Containment — فِي."},
  {q:"الشَّقَّةُ ___ .",o:["جَمِيلٌ","جَمِيلَةٌ","جَمِيلَةً","جَمِيلاتٌ"],a:1,w:"شَقَّة is feminine, and the predicate is marfūʿ."},
  {q:"___ دَوْرٍ شَقَّتُكَ؟",o:["فِي أَيِّ","فِي أَيَّ","أَيُّ","كَمْ"],a:0,w:"أَيّ is genitive after فِي, and the noun after it is genitive too."}
 ],
 fix:[
  {bad:"كَمْ غُرَفٍ فِي الشَّقَّةِ؟",good:"كَمْ غُرْفَةً فِي الشَّقَّةِ؟",w:"After كَمْ: singular, accusative."},
  {bad:"فِي الشَّقَّةِ خَمْسُ غُرْفَةً.",good:"فِي الشَّقَّةِ خَمْسُ غُرَفٍ.",w:"After 3–10: plural, genitive."},
  {bad:"أَسْكُنُ فِي الدَّوْرِ الْخامِسُ.",good:"أَسْكُنُ فِي الدَّوْرِ الْخامِسِ.",w:"The adjective must match the genitive noun."},
  {bad:"الشَّقَّةُ جَمِيلٌ.",good:"الشَّقَّةُ جَمِيلَةٌ.",w:"Feminine noun, feminine adjective."},
  {bad:"أَنا مُسْتَأْجِرُ.",good:"أَنا مُسْتَأْجِرٌ.",w:"Indefinite and marfūʿ — it needs the tanwin."}
 ]},
"04":{
 grammar:[
  {t:"المضارع للعادة",ar:"أَسْتَيْقِظُ مُبَكِّرًا.",en:"The present tense covers habits: 'I wake up', 'I usually wake up'."},
  {t:"الحال / الظرف",ar:"مُبَكِّرًا · مُتَأَخِّرًا",en:"These adverbs are manṣūb — they always end in -an."},
  {t:"باء الاستعانة",ar:"بِالْحافِلَةِ",en:"بِـ marks the means of transport, and takes the genitive."},
  {t:"النفي بـ لا",ar:"لا أُشاهِدُ التِّلْفازَ.",en:"لا negates the present tense; ما is for the past."}
 ],
 cloze:[
  {q:"أَسْتَيْقِظُ ___ .",o:["مُبَكِّرٌ","مُبَكِّرًا","مُبَكِّرٍ","الْمُبَكِّرُ"],a:1,w:"Adverbs of manner are manṣūb."},
  {q:"أَذْهَبُ ___ الْحافِلَةِ.",o:["بِ","فِي","عَلى","مِنْ"],a:0,w:"بِـ for the means; فِي would mean physically inside it."},
  {q:"أَمْسِ ___ الْمَلابِسَ.",o:["أَغْسِلُ","غَسَلْتُ","تَغْسِلُ","يَغْسِلُ"],a:1,w:"أَمْسِ forces the past tense."},
  {q:"___ أُشاهِدُ التِّلْفازَ.",o:["لا","ما","لَيْسَ","لَمْ"],a:0,w:"لا negates a present-tense verb."},
  {q:"أُصَلِّي ___ أَقْرَأُ الصَّحِيفَةَ.",o:["لِأَنَّ","ثُمَّ","لَكِنَّ","لِذَلِكَ"],a:1,w:"One action after another."},
  {q:"هِيَ ___ مُبَكِّرًا.",o:["أَسْتَيْقِظُ","يَسْتَيْقِظُ","تَسْتَيْقِظُ","نَسْتَيْقِظُ"],a:2,w:"هِيَ takes the تـ prefix — same as 'you' masculine, which trips people up."}
 ],
 fix:[
  {bad:"أَسْتَيْقِظُ مُبَكِّرٌ.",good:"أَسْتَيْقِظُ مُبَكِّرًا.",w:"Adverb — manṣūb."},
  {bad:"أَمْسِ أَذْهَبُ إِلى الْعَمَلِ.",good:"أَمْسِ ذَهَبْتُ إِلى الْعَمَلِ.",w:"أَمْسِ needs the past tense."},
  {bad:"أَذْهَبُ فِي الْحافِلَةِ.",good:"أَذْهَبُ بِالْحافِلَةِ.",w:"Means of transport takes بِـ."},
  {bad:"ما أُشاهِدُ التِّلْفازَ.",good:"لا أُشاهِدُ التِّلْفازَ.",w:"ما negates the past; لا the present."},
  {bad:"هِيَ يَسْتَيْقِظُ مُبَكِّرًا.",good:"هِيَ تَسْتَيْقِظُ مُبَكِّرًا.",w:"Feminine subject takes تـ."}
 ]},
"05":{
 grammar:[
  {t:"المفعول به",ar:"آكُلُ الأَرُزَّ.",en:"The object of a verb is manṣūb — fatḥa, or -an if indefinite."},
  {t:"فَضَّلَ ... عَلى ...",ar:"أُفَضِّلُ الشَّايَ عَلى الْقَهْوَةِ.",en:"Accusative before عَلى, genitive after it."},
  {t:"لِأَنَّ",ar:"لِأَنَّ وَزْنِي كَثِيرٌ",en:"لِأَنَّ needs a noun after it, and that noun is manṣūb; the predicate stays marfūʿ."},
  {t:"جَوْعانُ",ar:"أَنا جَوْعانُ.",en:"The فَعْلان pattern is a diptote — no tanwin."}
 ],
 cloze:[
  {q:"آكُلُ ___ .",o:["الأَرُزُّ","الأَرُزَّ","الأَرُزِّ","أَرُزٌّ"],a:1,w:"Direct object — manṣūb."},
  {q:"أُفَضِّلُ الشَّايَ ___ الْقَهْوَةِ.",o:["مِنْ","عَلى","عَنْ","فِي"],a:1,w:"Arabic prefers X over Y with عَلى, not مِنْ."},
  {q:"آكُلُ قَلِيلًا ___ وَزْنِي كَثِيرٌ.",o:["لِأَنَّ","لِأَنِّي","لَكِنَّ","ثُمَّ"],a:0,w:"A full noun clause follows, so لِأَنَّ; لِأَنِّي already contains 'I'."},
  {q:"أَنا ___ ، أُرِيدُ الْغَداءَ.",o:["جَوْعانٌ","جَوْعانُ","جَوْعانًا","الْجَوْعانُ"],a:1,w:"فَعْلان is a diptote — ḍamma with no tanwin."},
  {q:"___ تُفَضِّلُ، الشَّايَ أَمِ الْقَهْوَةَ؟",o:["ما","ماذا","مَنْ","كَيْفَ"],a:1,w:"ماذا asks 'what' before a verb."},
  {q:"جَلَسْنا إِلى ___ مَعَ الضُّيُوفِ.",o:["الْمائِدَةُ","الْمائِدَةِ","الْمائِدَةَ","مائِدَةً"],a:1,w:"Genitive after إِلى."}
 ],
 fix:[
  {bad:"آكُلُ الأَرُزُّ.",good:"آكُلُ الأَرُزَّ.",w:"Object of a verb is manṣūb."},
  {bad:"أُفَضِّلُ الشَّايَ مِنَ الْقَهْوَةِ.",good:"أُفَضِّلُ الشَّايَ عَلى الْقَهْوَةِ.",w:"فَضَّلَ pairs with عَلى."},
  {bad:"لِأَنَّ وَزْنِي كَثِيرًا.",good:"لِأَنَّ وَزْنِي كَثِيرٌ.",w:"لِأَنَّ makes its subject manṣūb, but the predicate stays marfūʿ."},
  {bad:"أَنا جَوْعانٌ.",good:"أَنا جَوْعانُ.",w:"Diptote — no tanwin."},
  {bad:"أَكَلْتُ فِي مَطْعَمُ.",good:"أَكَلْتُ فِي مَطْعَمٍ.",w:"Indefinite and genitive after فِي."}
 ]},
"06":{
 grammar:[
  {t:"اسم الفاعل",ar:"ذاهِبٌ · ذاهِبَةٌ",en:"'Going' is an adjective here, not a verb, and agrees with the speaker's gender."},
  {t:"لام التعليل",ar:"لِصَلاةِ الظُّهْرِ",en:"لِـ means 'for the purpose of', and takes the genitive."},
  {t:"الممنوع من الصرف",ar:"إِلى مَكَّةَ",en:"Place names like مَكَّة take a fatḥa where you'd expect a kasra, and never tanwin."},
  {t:"ظروف المكان",ar:"بِجانِبِ الْبَيْتِ",en:"Compound prepositions end in a genitive noun."}
 ],
 cloze:[
  {q:"أَنا ___ إِلى الْمَسْجِدِ.",o:["ذاهِبٌ","ذاهِبَةٌ","يَذْهَبُ","ذَهَبَ"],a:0,w:"A male speaker uses the masculine active participle."},
  {q:"الْمَسْجِدُ ___ الْبَيْتِ.",o:["بِجانِبِ","بِجانِبُ","بِجانِبَ","جانِبٌ"],a:0,w:"بِـ makes جانِب genitive; الْبَيْتِ is genitive as the second term."},
  {q:"ذَهَبْتُ إِلى ___ بِالطَّائِرَةِ.",o:["مَكَّةٍ","مَكَّةَ","مَكَّةِ","الْمَكَّةِ"],a:1,w:"Diptote: fatḥa, no tanwin, no ال."},
  {q:"أَضَعُ الْمُنَبِّهَ ___ كَسْلانُ.",o:["لِأَنَّ","لِأَنِّي","لَكِنَّ","لِذَلِكَ"],a:1,w:"The reason concerns 'me', so the pronoun attaches: لِأَنِّي."},
  {q:"___ أَيْنَ أَنْتَ ذاهِبٌ؟",o:["مِنْ","إِلى","فِي","عَنْ"],a:1,w:"Destination — إِلى أَيْنَ."},
  {q:"هِيَ ___ إِلى الْمَسْجِدِ.",o:["ذاهِبٌ","ذاهِبَةٌ","ذاهِبُونَ","ذاهِبِينَ"],a:1,w:"Feminine singular."}
 ],
 fix:[
  {bad:"خالِدٌ ذاهِبَةٌ إِلى الْمَسْجِدِ.",good:"خالِدٌ ذاهِبٌ إِلى الْمَسْجِدِ.",w:"Khalid is male."},
  {bad:"ذَهَبْتُ إِلى مَكَّةٍ.",good:"ذَهَبْتُ إِلى مَكَّةَ.",w:"Diptote — fatḥa, no tanwin."},
  {bad:"الْمَسْجِدُ بِجانِبُ الْبَيْتِ.",good:"الْمَسْجِدُ بِجانِبِ الْبَيْتِ.",w:"After بِـ the noun is genitive."},
  {bad:"أَضَعُ الْمُنَبِّهَ لِأَنَّ كَسْلانُ.",good:"أَضَعُ الْمُنَبِّهَ لِأَنِّي كَسْلانُ.",w:"لِأَنَّ needs a subject — here the attached pronoun ـِي."},
  {bad:"صَلَّيْتُ الظُّهْرُ.",good:"صَلَّيْتُ الظُّهْرَ.",w:"Object of the verb — manṣūb."}
 ]},
"07":{
 grammar:[
  {t:"لام التعليل + المنصوب",ar:"أَذْهَبُ لِأَدْرُسَ",en:"After لِـ the verb takes a fatḥa — the subjunctive. This is the 'in order to' construction."},
  {t:"كَمْ + تمييز",ar:"كَمْ حِصَّةً؟",en:"Singular and manṣūb after كَمْ, however many you mean."},
  {t:"الإضافة",ar:"كُلِّيَّةُ التَّرْبِيَةِ",en:"'College of Education' — the second noun is genitive and carries the definiteness."},
  {t:"جمع المذكر السالم",ar:"يَدْرُسُونَ",en:"Plural masculine verbs end in ـُونَ in the present."}
 ],
 cloze:[
  {q:"أَذْهَبُ إِلى الْمَكْتَبَةِ لِ___ .",o:["أَدْرُسُ","أَدْرُسَ","أَدْرُسِ","دَرَسْتُ"],a:1,w:"لِـ of purpose puts the verb in the subjunctive — fatḥa."},
  {q:"كَمْ ___ عِنْدَكَ الْيَوْمَ؟",o:["حِصَصٍ","حِصَّةً","حِصَّةٌ","الْحِصَّةِ"],a:1,w:"كَمْ takes singular accusative."},
  {q:"أَدْرُسُ فِي كُلِّيَّةِ ___ .",o:["التَّرْبِيَةُ","التَّرْبِيَةِ","التَّرْبِيَةَ","تَرْبِيَةً"],a:1,w:"Second term of an iḍāfa — genitive."},
  {q:"الطُّلَّابُ ___ فِي الْمَكْتَبَةِ.",o:["يَدْرُسُ","يَدْرُسُونَ","تَدْرُسُ","أَدْرُسُ"],a:1,w:"A plural subject before the verb takes the full plural ending."},
  {q:"يَبْدَأُ الْيَوْمُ الدِّراسِيُّ ___ يَنْتَهِي فِي الظُّهْرِ.",o:["لِأَنَّ","ثُمَّ","لَكِنَّ","لِذَلِكَ"],a:1,w:"Simple sequence."},
  {q:"___ تَدْرُسُ؟ — أَدْرُسُ التَّارِيخَ.",o:["ما","ماذا","مَنْ","أَيْنَ"],a:1,w:"ماذا before a verb; ما before a noun."}
 ],
 fix:[
  {bad:"أَذْهَبُ إِلى الْمَكْتَبَةِ لِأَدْرُسُ.",good:"أَذْهَبُ إِلى الْمَكْتَبَةِ لِأَدْرُسَ.",w:"Subjunctive after لِـ."},
  {bad:"كَمْ حِصَصٍ عِنْدَكَ؟",good:"كَمْ حِصَّةً عِنْدَكَ؟",w:"Singular accusative after كَمْ."},
  {bad:"أَدْرُسُ فِي كُلِّيَّةُ الطِّبِّ.",good:"أَدْرُسُ فِي كُلِّيَّةِ الطِّبِّ.",w:"كُلِّيَّة is genitive after فِي even though it heads the iḍāfa."},
  {bad:"الطُّلَّابُ يَدْرُسُ فِي الْمُخْتَبَرِ.",good:"الطُّلَّابُ يَدْرُسُونَ فِي الْمُخْتَبَرِ.",w:"Plural subject first → plural verb."},
  {bad:"دَرَسْتُ اللُّغَةُ الْعَرَبِيَّةُ.",good:"دَرَسْتُ اللُّغَةَ الْعَرَبِيَّةَ.",w:"Object and its adjective both manṣūb."}
 ]},
"08":{
 grammar:[
  {t:"دَرَسَ / دَرَّسَ",ar:"أَدْرُسُ = I study · أُدَرِّسُ = I teach",en:"Doubling the middle letter turns 'do' into 'make someone do'."},
  {t:"الاسم المقصور",ar:"فِي الْمُسْتَشْفى",en:"Nouns ending in ى never change their ending, whatever the case."},
  {t:"تأنيث المهن",ar:"مُمَرِّض · مُمَرِّضَة",en:"Most job names form the feminine by adding ة."},
  {t:"كَمْ ساعَةً",ar:"كَمْ ساعَةً تَعْمَلُ؟",en:"Same rule as always after كَمْ: singular, manṣūb."}
 ],
 cloze:[
  {q:"أَنا مُعَلِّمٌ، ___ الأَطْفالَ.",o:["أَدْرُسُ","أُدَرِّسُ","دَرَسْتُ","يُدَرِّسُ"],a:1,w:"A teacher teaches — أُدَرِّسُ, not أَدْرُسُ."},
  {q:"أَخِي يَعْمَلُ فِي ___ .",o:["الشَّرِكَةُ","الشَّرِكَةِ","الشَّرِكَةَ","شَرِكَةً"],a:1,w:"Genitive after فِي."},
  {q:"كَمْ ___ تَعْمَلُ فِي الْيَوْمِ؟",o:["ساعاتٍ","ساعَةً","ساعَةٌ","السَّاعَةِ"],a:1,w:"Singular accusative after كَمْ."},
  {q:"أُخْتِي ___ فِي الْمُسْتَشْفى.",o:["مُمَرِّضٌ","مُمَرِّضَةٌ","مُمَرِّضُونَ","مُمَرِّضاتٌ"],a:1,w:"One woman — feminine singular."},
  {q:"أُحِبُّ عَمَلِي ___ أُحِبُّ الأَطْفالَ.",o:["لِأَنَّ","لِأَنِّي","لَكِنَّ","ثُمَّ"],a:1,w:"The clause has no separate noun subject, so the pronoun attaches."},
  {q:"دَرَسَتْ فِي كُلِّيَّةِ ___ .",o:["الصَّيْدَلَةُ","الصَّيْدَلَةِ","الصَّيْدَلَةَ","صَيْدَلَةً"],a:1,w:"Second term of the iḍāfa."}
 ],
 fix:[
  {bad:"أَنا مُعَلِّمٌ، أَدْرُسُ الأَطْفالَ.",good:"أَنا مُعَلِّمٌ، أُدَرِّسُ الأَطْفالَ.",w:"دَرَسَ is to study; دَرَّسَ is to teach."},
  {bad:"كَمْ ساعاتٍ تَعْمَلُ؟",good:"كَمْ ساعَةً تَعْمَلُ؟",w:"Singular accusative after كَمْ."},
  {bad:"أُخْتِي مُمَرِّضٌ.",good:"أُخْتِي مُمَرِّضَةٌ.",w:"Feminine subject, feminine predicate."},
  {bad:"أُحِبُّ عَمَلِي لِأَنَّ أُحِبُّ الأَطْفالَ.",good:"أُحِبُّ عَمَلِي لِأَنِّي أُحِبُّ الأَطْفالَ.",w:"لِأَنَّ cannot sit directly before a verb."},
  {bad:"أَخِي طَبِيبًا.",good:"أَخِي طَبِيبٌ.",w:"Predicate of a nominal sentence is marfūʿ."}
 ]},
"09":{
 grammar:[
  {t:"بِكَمْ؟",ar:"بِكَمْ هَذا الْقَمِيصُ؟",en:"Prices use بِكَمْ, not كَمْ on its own."},
  {t:"أُرِيدُ + منصوب",ar:"أُرِيدُ قَمِيصًا أَبْيَضَ.",en:"The thing wanted is the object, so it and its adjective are manṣūb."},
  {t:"ألوان ممنوعة من الصرف",ar:"أَبْيَضُ · أَزْرَقَ",en:"The أَفْعَل colour pattern never takes tanwin — fatḥa in the accusative."},
  {t:"تمييز العدد",ar:"خَمْسِينَ رِيالًا",en:"After 11–99 the counted noun is singular and manṣūb."}
 ],
 cloze:[
  {q:"___ هَذا الْقَمِيصُ؟",o:["كَمْ","بِكَمْ","ما","أَيْنَ"],a:1,w:"Asking a price always uses بِكَمْ."},
  {q:"أُرِيدُ قَمِيصًا ___ .",o:["أَبْيَضُ","أَبْيَضَ","أَبْيَضٍ","الأَبْيَضُ"],a:1,w:"Accusative adjective, but a diptote — fatḥa with no tanwin."},
  {q:"اشْتَرَيْتُهُ بِخَمْسِينَ ___ .",o:["رِيالٌ","رِيالًا","رِيالٍ","الرِّيالِ"],a:1,w:"Singular accusative after 11–99."},
  {q:"السَّيَّارَةُ ___ .",o:["أَحْمَرُ","حَمْراءُ","حَمْراءَ","أَحْمَرَ"],a:1,w:"Feminine of أَفْعَل colours is فَعْلاء, and here it's marfūʿ."},
  {q:"ما اشْتَرَيْتُ الثَّوْبَ ___ غالٍ.",o:["لِأَنَّهُ","لِأَنَّ","لَكِنَّ","ثُمَّ"],a:0,w:"The subject of the reason is 'it' — attached to لِأَنَّ."},
  {q:"أَيْنَ ___ الْقُمْصانِ؟",o:["قِسْمٌ","قِسْمُ","الْقِسْمُ","قِسْمًا"],a:1,w:"First term of an iḍāfa: no ال and no tanwin."}
 ],
 fix:[
  {bad:"كَمْ هَذا الْقَمِيصُ؟",good:"بِكَمْ هَذا الْقَمِيصُ؟",w:"Prices take بِكَمْ."},
  {bad:"أُرِيدُ قَمِيصًا أَبْيَضٍ.",good:"أُرِيدُ قَمِيصًا أَبْيَضَ.",w:"Colour diptote: fatḥa, no tanwin."},
  {bad:"اشْتَرَيْتُهُ بِخَمْسِينَ رِيالٍ.",good:"اشْتَرَيْتُهُ بِخَمْسِينَ رِيالًا.",w:"Singular accusative after 11–99."},
  {bad:"السَّيَّارَةُ أَحْمَرُ.",good:"السَّيَّارَةُ حَمْراءُ.",w:"Feminine noun takes the فَعْلاء colour."},
  {bad:"اشْتَرَيْتُ ثَوْبًا أَزْرَقًا.",good:"اشْتَرَيْتُ ثَوْبًا أَزْرَقَ.",w:"Diptote — the noun takes tanwin but the colour doesn't."}
 ]},
"10":{
 grammar:[
  {t:"كانَ + خبر منصوب",ar:"كانَ الْجَوُّ بارِدًا.",en:"كانَ leaves the subject marfūʿ but makes the predicate manṣūb."},
  {t:"لَيْسَ",ar:"الْجَوُّ لَيْسَ حارًّا.",en:"لَيْسَ behaves exactly like كانَ — predicate manṣūb."},
  {t:"لِذَلِكَ",ar:"تُمْطِرُ، لِذَلِكَ أَخَذْتُ الْمِظَلَّةَ.",en:"لِذَلِكَ introduces a result; لِأَنَّ introduces a cause. Don't swap them."},
  {t:"فَصْل + الفصل",ar:"فَصْلُ الرَّبِيعِ",en:"An iḍāfa: 'the season of spring'."}
 ],
 cloze:[
  {q:"كانَ الْجَوُّ ___ أَمْسِ.",o:["بارِدٌ","بارِدًا","بارِدٍ","الْبارِدُ"],a:1,w:"كانَ makes its predicate manṣūb."},
  {q:"الْجَوُّ لَيْسَ ___ الْيَوْمَ.",o:["حارٌّ","حارًّا","حارٍّ","الْحارُّ"],a:1,w:"لَيْسَ works like كانَ."},
  {q:"تُمْطِرُ فِي الْخارِجِ، ___ أَخَذْتُ الْمِظَلَّةَ.",o:["لِأَنَّ","لِذَلِكَ","لَكِنَّ","ثُمَّ"],a:1,w:"The umbrella is the result of the rain, not its cause."},
  {q:"أُحِبُّ فَصْلَ ___ .",o:["الرَّبِيعُ","الرَّبِيعِ","الرَّبِيعَ","رَبِيعًا"],a:1,w:"Second term of the iḍāfa."},
  {q:"___ الْجَوُّ الْيَوْمَ؟",o:["ما","كَيْفَ","مَتى","أَيْنَ"],a:1,w:"Weather is asked with كَيْفَ, not ما."},
  {q:"دَرَجَةُ الْحَرارَةِ خَمْسٌ ___ الصِّفْرِ.",o:["فَوْقَ","فَوْقُ","عَلى","فِي"],a:0,w:"فَوْقَ is a fixed accusative adverb, followed by a genitive."}
 ],
 fix:[
  {bad:"كانَ الْجَوُّ بارِدٌ.",good:"كانَ الْجَوُّ بارِدًا.",w:"Predicate of كانَ is manṣūb."},
  {bad:"الْجَوُّ لَيْسَ حارٌّ.",good:"الْجَوُّ لَيْسَ حارًّا.",w:"Same rule as كانَ."},
  {bad:"أُحِبُّ فَصْلُ الصَّيْفِ.",good:"أُحِبُّ فَصْلَ الصَّيْفِ.",w:"Object of the verb — manṣūb, even though it heads an iḍāfa."},
  {bad:"تُمْطِرُ، لِأَنَّ أَخَذْتُ الْمِظَلَّةَ.",good:"تُمْطِرُ، لِذَلِكَ أَخَذْتُ الْمِظَلَّةَ.",w:"Cause and result the wrong way round."},
  {bad:"ما الْجَوُّ الْيَوْمَ؟",good:"كَيْفَ الْجَوُّ الْيَوْمَ؟",w:"Idiom: the weather is 'how', not 'what'."}
 ]},
"11":{
 grammar:[
  {t:"لَكِنَّ + اسم منصوب",ar:"لَكِنَّ فِيها ضَوْضاءَ",en:"لَكِنَّ with shadda takes a noun and makes it manṣūb; لَكِنْ without shadda doesn't."},
  {t:"نفي الوجود",ar:"لَيْسَ فِي الْقَرْيَةِ ازْدِحامٌ.",en:"To say 'there isn't', use لَيْسَ, not لا."},
  {t:"الألوان المؤنثة",ar:"بَيْضاءُ · زَرْقاءُ",en:"The فَعْلاء pattern is a diptote — never any tanwin."},
  {t:"المثنى في النصب والجر",ar:"ساعَتَيْنِ",en:"Duals end in ـانِ when marfūʿ and ـَيْنِ otherwise."}
 ],
 cloze:[
  {q:"الْمَدِينَةُ كَبِيرَةٌ، ___ فِيها ضَوْضاءَ.",o:["لَكِنْ","لَكِنَّ","لِأَنَّ","ثُمَّ"],a:1,w:"A noun follows, so the doubled form لَكِنَّ."},
  {q:"___ فِي الْقَرْيَةِ ازْدِحامٌ.",o:["لا","ما","لَيْسَ","لَمْ"],a:2,w:"لَيْسَ negates existence."},
  {q:"السَّيَّارَةُ ___ .",o:["أَزْرَقُ","زَرْقاءُ","زَرْقاءَ","أَزْرَقَ"],a:1,w:"Feminine colour, marfūʿ."},
  {q:"ما ___ فِي هَذِهِ الْمَدِينَةِ؟",o:["رَأْيُكَ","رَأْيَكَ","رَأْيِكَ","الرَّأْيُ"],a:0,w:"Predicate after ما — marfūʿ."},
  {q:"انْتَقَلْتُ إِلى الْمَدِينَةِ ___ ثَلاثِ سَنَواتٍ.",o:["قَبْلَ","بَعْدَ","مُنْذُ","عِنْدَ"],a:0,w:"'Three years ago' — قَبْلَ."},
  {q:"اسْتَغْرَقَتِ الرِّحْلَةُ ___ .",o:["ساعَتانِ","ساعَتَيْنِ","ساعَتَيْ","السَّاعَتانِ"],a:1,w:"Object of the verb, so the dual takes ـَيْنِ."}
 ],
 fix:[
  {bad:"لَيْسَ فِي الْقَرْيَةِ ازْدِحامًا.",good:"لَيْسَ فِي الْقَرْيَةِ ازْدِحامٌ.",w:"Here ازْدِحام is the delayed subject of لَيْسَ — marfūʿ."},
  {bad:"لا فِي الْقَرْيَةِ ازْدِحامٌ.",good:"لَيْسَ فِي الْقَرْيَةِ ازْدِحامٌ.",w:"لا cannot negate a nominal sentence like this."},
  {bad:"السَّيَّارَةُ أَزْرَقُ.",good:"السَّيَّارَةُ زَرْقاءُ.",w:"Feminine colour pattern."},
  {bad:"اسْتَغْرَقَتِ الرِّحْلَةُ ساعَتانِ.",good:"اسْتَغْرَقَتِ الرِّحْلَةُ ساعَتَيْنِ.",w:"Accusative dual."},
  {bad:"ما رَأْيَكَ فِي الْمَدِينَةِ؟",good:"ما رَأْيُكَ فِي الْمَدِينَةِ؟",w:"Predicate — marfūʿ."}
 ]},
"12":{
 grammar:[
  {t:"الجملة الاسمية",ar:"هِوايَتِي الْقِراءَةُ.",en:"Both halves marfūʿ; no verb needed."},
  {t:"جمع المؤنث السالم",ar:"أَقْرَأُ مَجَلَّاتٍ",en:"Sound feminine plurals take a kasra in the accusative, never a fatḥa."},
  {t:"لِأَنَّها",ar:"لِأَنَّها مُفِيدَةٌ",en:"When the reason refers back to something already mentioned, attach the pronoun to لِأَنَّ."},
  {t:"أَهْوى",ar:"أَهْوى جَمْعَ الطَّوابِعِ",en:"A defective verb — the final ى doesn't change in the present."}
 ],
 cloze:[
  {q:"هِوايَتِي ___ .",o:["الْقِراءَةُ","الْقِراءَةَ","الْقِراءَةِ","قِراءَةً"],a:0,w:"Predicate of a nominal sentence — marfūʿ."},
  {q:"أَقْرَأُ ___ عِلْمِيَّةً.",o:["مَجَلَّاتٌ","مَجَلَّاتٍ","مَجَلَّاتًا","الْمَجَلَّاتُ"],a:1,w:"Sound feminine plural: kasra in the accusative. This one catches people for years."},
  {q:"كَمْ ___ تَقْرَأُ فِي الْيَوْمِ؟",o:["ساعاتٍ","ساعَةً","ساعَةٌ","السَّاعَةَ"],a:1,w:"Singular accusative after كَمْ."},
  {q:"أُحِبُّ الْقِراءَةَ ___ مُفِيدَةٌ.",o:["لِأَنَّ","لِأَنَّها","لَكِنَّ","ثُمَّ"],a:1,w:"The subject is 'it' (reading), so the pronoun attaches."},
  {q:"___ لَدَيَّ مَكْتَبَةٌ كَبِيرَةٌ.",o:["لا","ما","لَيْسَ","لَمْ"],a:2,w:"Negating possession uses لَيْسَ."},
  {q:"زُرْتُ ___ الْخَطِّ الْعَرَبِيِّ.",o:["جَناحٌ","جَناحَ","جَناحِ","الْجَناحُ"],a:1,w:"Object of the verb and head of an iḍāfa: manṣūb, no ال, no tanwin."}
 ],
 fix:[
  {bad:"هِوايَتِي الْقِراءَةَ.",good:"هِوايَتِي الْقِراءَةُ.",w:"Predicate — marfūʿ."},
  {bad:"أَقْرَأُ مَجَلَّاتًا عِلْمِيَّةً.",good:"أَقْرَأُ مَجَلَّاتٍ عِلْمِيَّةً.",w:"Sound feminine plural takes kasra in the accusative."},
  {bad:"كَمْ ساعاتٍ تَقْرَأُ؟",good:"كَمْ ساعَةً تَقْرَأُ؟",w:"Singular accusative after كَمْ."},
  {bad:"أُحِبُّ الْقِراءَةَ لِأَنَّ مُفِيدَةٌ.",good:"أُحِبُّ الْقِراءَةَ لِأَنَّها مُفِيدَةٌ.",w:"لِأَنَّ needs a subject."},
  {bad:"لا لَدَيَّ مَكْتَبَةٌ.",good:"لَيْسَ لَدَيَّ مَكْتَبَةٌ.",w:"Possession is negated with لَيْسَ."}
 ]}
};
