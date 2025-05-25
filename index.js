
const start = () => {
    const plates = platesData.map((section) => (
        section.front.map((frontRow, rowIndex) => (
            frontRow.map((frontPlate, columnIndex) => ({ front: frontPlate, back: section.back?.[rowIndex]?.[frontRow.length - columnIndex - 1] }))
        ))
    ));

    const container = document.createElement("div");
    container.className = "grid-container";
    
    plates.forEach((section) => {
        const sectionPlateGrid = document.createElement("div");
        sectionPlateGrid.className = "plate-grid";

        section.forEach((row) => {
            const rowContainer = document.createElement("div");

            rowContainer.className = "plate-row";
            
            row.forEach((plate) => {
                const plateContainer = document.createElement("div");
                const frontPlateText = document.createElement("p");
                const backPlateText = document.createElement("p");

                plateContainer.className = "plate-pair";
                frontPlateText.className = "plate";
                backPlateText.className = "plate";

                frontPlateText.innerHTML = plate.front ?? "———————";
                backPlateText.innerHTML = plate.back ?? "———————";

                plateContainer.appendChild(frontPlateText);
                plateContainer.appendChild(backPlateText);
                rowContainer.appendChild(plateContainer);
            });

            sectionPlateGrid.appendChild(rowContainer);
        });

        container.appendChild(sectionPlateGrid);
    });


    document.body.appendChild(container);
};

const platesData = [
    { // section 1
        "front": [
            ["ABALONE", "BALANCE", "CACOMBA", "DABBLER", "EARMARK", "FACETED", "GABBART"],
            ["ABILITY", "BALMILY", "CADENZA", "DAISIES", "EARTHEN", "FACTUAL", "GABIONS"],
            ["ACEROLA", "BAOBABS", "CAJOLED", "DANCING", "ECHELON", "FACULTY", "GADWALL"],
            ["ACROBAT", "BAWBEES", "CALYPSO", "DARESAY", "ECHOING", "FAIRWAY", "GALAXES"],
            ["ACTUARY", "BEELINE", "CAMPHOR", "DARKEST", "ECLIPSE", "FALLACY", "GALLEON"],
            ["ADAGIOS", "BEIGNET", "CANASTA", "DAUPHIN", "ECOLOGY", "FANTASY", "GALLERY"],
            ["ADMIRER", "BEJEWEL", "CANNOLI", "DAYLILY", "ECONOMY", "GALUMPH", "FALLOUT"],
            ["ADVICES", "BEQUEST", "CAPRICE", "DAZZLES", "ECOTONE", "FARMING", "GAMBITS"]
        ],
        "back": [
            [],
            [],
            [],
            [],
            [],
            [],
            ["BIGMTHR", "OH2FISH", "2NFINIT", "PICASSO", "HANGNON", "CHCLATR", "STOP4U"],
            ["RBBROKY", "SDEUCE", "CYIWORK", "ARUREDI", "OFFHEGO", "PPLHRT", "HIBRID" ]
        ]
    },
    { // section 2
        "front": [
            ["HABITAT", "ICEBERG", "JABBERS", "KACHINA", "LABORER", "MACABRE", "NAGGNIG"],
            ["HACKERS", "ICELESS", "JABIRUS", "KALIMBA", "LACONIC", "MACHINE", "NAIVETE"],
            ["HADDOCK", "ICONISH", "JACANAS", "KARAOKE", "LACQUER", "MACULAR", "NARCISM"],
            ["HAFNIUM", "IDIOTIC", "JACINTH", "KARROOS", "LACTOSE", "MADCAPS", "NASCENT"],
            ["HAGFISH", "IDYLLIC", "JACKDAW", "KASHMIR", "LAMBAST", "MADRONA", "NATIONS"],
            ["HALALAH", "IGNEOUS", "JACKLEG", "KATYDID", "LAMPOON", "MADZOON", "NATIVES"],
            ["HALIBUT", "IGNITER", "JACKPOT", "KEELSON", "LANDING", "MALAISE", "NATRIUM"],
            ["HALOGEN", "IGNOBLY", "JACOBIN", "KEEPING", "LANTERN", "MAMMOTH", "NAYSAYS"],
            ["HAMMAMS", "IGNORED", "JACUZZI", "KEISTER", "LANYARD", "MANATEE", "NEAREST"],
            ["HANDSET", "ILLEGAL", "JADEDLY", "KENNING", "LARCENY", "MANCALA", "NEATNIK"],
            ["HARPIST", "ILLOGIC", "JADEITE", "KENOSIS", "LARKISH", "MANHOLE", "———————"],
            ["HARMONY", "ILLUMED", "JAGGERY", "KEROGEN", "LASAGNE", "———————", "———————"],
            ["HARNESS", "ILLUVIA", "JAGGIES", "KERNELS", "———————", "———————", "NEEDILY"],
            ["HARRIED", "IMAGERY", "JAGUARY", "———————", "———————", "MARIMBA", "NEMESIS"],
            ["HATBAND", "IMAGINE", "———————", "———————", "LAWLESS", "MARMOTS", "NEOLITH"],
            ["HAUGHTY", "———————", "———————", "KETCHUP", "LAZULIS", "MARQUIS", "NERVOUS"],
            ["———————", "———————", "JAMMING", "KEYHOLE", "LEAPING", "MARTIAN", "NESTLED"],
            ["———————", "IMBRUED", "JANGLED", "KEYNOTE", "LEGIBLE", "MARTINI", "NETSUKE"],
            ["———————", "IMMENSE", "JANITOR", "KIDDIES", "LEOPARD", "MASSEUR", "NETTLES"],
            ["HAYWIRE", "———————", "JARLDOM", "———————", "LETTUCE", "MASTIFF", "———————"],
            ["———————", "IMITATE", "JASMINE", "KIDNEYS", "LIBERAL", "MATINEE", "NEURONS"],
            ["HEALTHY", "REMOVED", "———————", "KILLJOY", "———————", "MAUDLIN", "NEWBORN"],
            ["———————", "IMPASTO", "JAVELIN", "KILOBIT", "LICENSE", "MAYPOPS", "———————"],
            ["HEATHEN", "IMPEACH", "JAWBONE", "KINDEST", "LIFTOFF", "MEDICAL", "NICOISE"],
            ["HEAVENS", "IMPEARK", "JAYWALK", "KINDLED", "LIMINAL", "MEGATON", "NINEPIN"],
            ["HECKLER", "IMPEDED", "JAZZILY", "KINETIC", "LIMITED", "MEMENTO", "NIOBOUS"],
        ],
        "back": [
            [],
            [],
            [],
            [],
            [],
            [],
            ["TYM4TEE", "WHTEVR", "BRN2PLA", "DRL2FSH", "MGCCRPT", "CMPASHN", "BIODZZL"],
            ["COOPING", "LAITDWN", "STRDUST", "NOBDAYZ", "MIT8", "SCARRGO", "IMEEDE8"],
            ["OUTATIM", "N8ENRGY", "ILUVDUX", "YLOWSTN", "MMREMKR", "NOMAMEN", "PERCHED"],
            ["OPTIMST", "RBYZPR", "NESTING", "BOOKLDY", "4EGO", "SAYLAV", "SOLM8"],
            ["FNS2L2R", "PAINTIT", "HEYJUDE", "FSTFNCR", "NGINEER", "TXTURES", "BARRACK"],
            ["IM1RU12", "WEE3SKI", "2SCMPNY", "HAV2FLY", "CODE99", "AUTOTTO", "PEAHENS"],
            ["NOTUCHI", "CYCLST", "PEDSRGN", "CUDLBUG", "JUSTB", "EMBRDER", "ZPD2DAH"],
            ["BORN2L8", "ANIM8R", "HUGZ2U", "GOTWHOA", "HPYPNTS", "TKT2RYD", "KICNBAC"],
            ["SYNRG", "DGWGN", "PAWPOWR", "NOS4AH2", "2LBOX", "SELEBR8", "RITEOFF"],
            ["1LORIDE", "RULE62", "CRYSMGT", "COEXIST", "FSHRMAN", "HCKYNUT", "LKYDUCK"],
            ["NOT4SLE", "GFT4PET", "LV2TRVL", "GYDEEUP", "FLIPHSH", "FRNDMKR", "BIONRG"],
            ["XTINKT", "KLGRPHR", "VERTYGO", "GET2IT", "UBRGEEK", "ELJEEPO", "DRMFLDR"],
            ["W84ME", "TOADN8R", "LOV2SHP", "JSTBLEV", "KPFGHTN", "DONTSMK", "———————"],
            ["———————", "HPNME", "DLCHVTA", "———————", "SRADVSR", "———————", "CZ2DAY"],
            ["GREYMTR", "EVOLUTN", "TOGOB4", "RNDRPS", "NVRFLOW", "SAYBYBY", "———————"],
            ["BWYSE", "SRENDR", "———————", "GROOOVY", "———————", "XLNTJOB", "66TOAD"],
            ["———————", "PPADPLS", "TRLRUNR", "ATIDUDE", "MAGICKL", "NOTNUF", "———————"],
            ["LICENSE", "BECAUSE", "CTHESUN", "NRDPOWR", "MUSBLUV", "GGO4IT", "DOORMAT"],
            [],
            [],
        ]
    },
    { // section 3
        "front": [
            ["OBELISK", "PACHIST", "QINDARS", "RACQUET", "SAGUARO", "TABLEAU", "UKULELE"],
            ["OBLONGS", "PACIFIC", "QIVIUTS", "RADIATE", "SALIENT", "TAFFETA", "UMBERED"],
            ["OBLIQUE", "PADLOCK", "QUAFFED", "RAVIOLI", "SAPLING", "TAKEOUT", "UMPTEEN"],
            ["OBVIATE", "PAGEBOY", "QUAHOGS", "RAGTIME", "SATYRIC", "TAMBURA", "———————"],
            ["OCARINE", "PAINTER", "QUAICHS", "READING", "SAVANNA", "———————", "———————"],
            ["OCEANIC", "PAISLEY", "QUALIFY", "REFRACT", "———————", "———————", "UNEARTH"],
            ["OCTAVES", "PALMIER", "QUAMASH", "———————", "———————", "TEKTITE", "UNIFIED"],
            ["OCTOPUS", "PANOPLY", "———————", "———————", "SCARLET", "TENDRIL", "UNMOVED"],
        ],
        "back": [

        ]
    },
    { // section 4
        "front": [
            ["VACUOUS", "WAFFLES", "———————", "———————", "ZACATON", "AEOLIAN", "BESIEGE"],
            ["VALIANT", "———————", "———————", "YACKING", "ZAGGING", "AEROBIC", "BIDDING"],
            ["———————", "———————", "XANTHIN", "YANKING", "ZAIKAIS", "AFFABLE", "BICYCLE"],
            ["———————", "WARMEST", "XENOPUS", "YANTRAS", "ZANDERS", "AFTMOST", "BIFIDLY"],
            ["VAULTED", "WARPATH", "XERARCH", "YARDAGE", "ZANIEST", "AGENDAS", "BIONICS"],
            ["VEHICLE", "WAVICLE", "XEROSES", "YARDARM", "ZAPPING", "AGILITY", "BITMAPS"],
            ["VERANDA", "WAXWING", "XEROSIS", "YARDMAN", "ZEALOTS", "AIRWAVE", "BIZARRE"],
            ["VERBOSE", "WEAVERS", "XEROTIC", "YARROWS", "ZEALOUS", "ALAMODE", "BLATANT"],
        ],
        "back": [

        ]
    },
    { // section 5
        "front": [
            ["CARAVAN", "DEBACLE", "EDIFICE", "FASHION", "GARBAGE", "HEDGING", "IMPINGE"],
            ["CAROTIN", "DECAGON", "EFFACED", "FAUVIST", "GARBLED", "HEINOUS", "IMPLANT"],
            ["CASABAS", "DECIBEL", "EGALITE", "FEDORAS", "GARLAND", "HEIRESS", "IMPLIED"],
            ["CATALPA", "DECLARE", "EICOLON", "FEIGNED", "GARNETS", "HELICAL", "IMPOSED"],
            ["CAVALLA", "DECREED", "ELAPSED", "FELINES", "GASTRAL", "HELLION", "IMPOUND"],
            ["CELADON", "DEFAMED", "ELASTIC", "FENAGLE", "GAUCHOS", "HELPFUL", "IMPREGN"],
            ["CENSURE", "DELLIES", "ELECTRO", "FERRIES", "GEEKDOM", "HEMLOCK", "IMPRESS"],
            ["CENTAUR", "DEPOSED", "ELEGANT", "FERVENT", "GEISHAS", "HENPECK", "IMPULSE"],
            ["CENTURY", "DESPITE", "ELEMENT", "FESTOON", "GENOMES", "HERBAGE", "INCHING"],
            ["CERAMIC", "DESTINY", "ELEVATE", "FIANCEE", "GEODUCK", "HEROICS", "INCISED"],
            ["CERTIFY", "DEVOTED", "ELITISM", "FIBROUS", "GESTURE", "HERSELF", "INCISOR"],
            ["CEVICHE", "DEXTRAL", "ELLIPSE", "FIESTAS", "GETAWAY", "HEXAGON", "INCITED"],
            ["CHAPEAU", "DHURRIE", "ELUSORY", "FIGMENT", "GEWGAWS", "HICCUPS", "INCLINE"],
            ["CHARITY", "DIALECT", "EMBARGO", "FILBERT", "GHOSTLY", "HILARIA", "INDICES"],
            ["CHEERIO", "DIABOLO", "EMBASSY", "FINDING", "GIGGLES", "HIMSELF", "INDICTS"],
            ["CHEWIER", "DIAMOND", "EMBLAZE", "FINICKY", "GINGKOS", "HIPSTER", "INDIGOS"],
            ["CHIFFON", "DICTATE", "EMERALD", "FIREFLY", "GLACIER", "HISTORY", "———————"],
            ["CHINOOK", "———————", "EMOTION", "FIXABLE", "GLEAMED", "———————", "———————"],
            ["CHROMED", "DIGNIFY", "EMPATHY", "FIXTURE", "———————", "———————", "INERTIA"],
            ["———————", "DINGIES", "EMPEROR", "———————", "———————", "———————", "INFIGHT"],
            ["CIRCUIT", "DIORAMA", "———————", "———————", "GLORIES", "HOLDING", "INVOICE"],
            ["CISTERN", "———————", "———————", "FLAPPER", "GLOWING", "HOLYDAY", "INHERIT"],
            ["———————", "———————", "ENDPLAY", "FLEURON", "GLUCOSE", "HOMERIC", "INKBLOT"],
            ["———————", "DISPLAY", "ENFORCE", "FLOTSAM", "GLYPHIC", "HOMINID", "INKWOOD"],
            ["CITRONS", "DISTILL", "ENGORGE", "FLUMMOX", "GNARRED", "HONESTY", "INNINGS"],
            ["CLAMOUR", "DIVINER", "ENTHUSE", "FLUVIAL", "GNOSTIC", "HONORED", "INSTEAD"],
        ],
        "back": [

        ]
    },
    { // section 6
        "front": [
            ["JEALOUS", "KINGDOM", "LIONESS", "MERCURY", "NIRVANA", "ODALISK", "PARADOX"],
            ["JEEPERS", "KINGLET", "LINEAGE", "MESSAGE", "NITPICK", "ODDBALL", "PARKING"],
            ["JEERING", "KINGPIN", "LINOCUT", "METRICS", "NOCTURN", "ODYSSEY", "PARTITA"],
            ["JELLIED", "KINSHIP", "LIQUEUR", "MICROBE", "NOMADIC", "OFFCAST", "PASTIME"],
            ["JEOPARD", "KISSING", "LIQUIFY", "MIDLIFE", "NONNEWS", "OFFENSE", "PATRIOT"],
            ["JESSANT", "KITCHEN", "LIRIOPE", "MIDNOON", "NONSKID", "OLDSTER", "PEACOCK"],
            ["JESTERS", "KITSCHY", "LITHIUM", "MILIEUX", "NOSEGAY", "OMNIBUS", "PEEPERS"],
            ["JETBEAD", "KLEZMER", "LIXIVIA", "MINDSET", "NOSTRIL", "OOLOGIC", "PENSION"],
            ["JETFOIL", "KNAVISH", "LOATHES", "MISFIRE", "NOTABLE", "OPACITY", "PERGOLA"],
            ["JETSONS", "KNEECAP", "LOBSTER", "MISTAKE", "NOTEPAD", "OPERATE", "———————"],
            ["JEWELED", "KNUCKLE", "LOCKJAW", "MISTBOW", "NOTICED", "———————", "———————"],
            ["JEZEBEL", "KNIGHTS", "LODGING", "MODULAR", "———————", "———————", "PIXODES"],
            ["JIGSAWS", "KNOCKER", "LOGICAL", "———————", "———————", "OPPOSED", "PLINKED"],
            ["JILLION", "KNOTTER", "———————", "———————", "NOVELLA", "ORANGEY", "PLOSION"],
            ["JINGALL", "———————", "———————", "MORPHOS", "NOVELTY", "ORBITAL", "PLUMBUM"],
            ["———————", "———————", "LOVEBUG", "MOTIVES", "NOWHERE", "ORCHARD", "POETICS"],
            ["———————", "KOKANEE", "LOVERLY", "MOTMOTS", "NOXIOUS", "OREGANO", "POLYGON"],
            ["JOINTED", "KOKESHI", "LOWBROW", "MOVIOLA", "———————", "ORIGAMI", "POWWOWS"],
            ["JOINTLY", "KOMATIK", "———————", "MUKTUKS", "NUANCES", "ORDINAL", "———————"],
            ["JOLLILY", "KOMFOOR", "LOZENGE", "MUMMIFY", "NUCLEUS", "OSSICLE", "PRETEND"],
            ["JOLTIER", "KOTOWED", "LULLABY", "MUSETTE", "NUDISTS", "———————", "PRETZEL"],
            ["JONQUIL", "———————", "LUNATIC", "MUSICAL", "NULLIFY", "OUTBARK", "PRIVATE"],
            ["JOSHING", "KRULLER", "LUNETTE", "———————", "NUMERIC", "OUTFALL", "PROVERB"],
            ["JOSTLES", "KRYPTON", "LUSTFUL", "MYOLOGY", "NUMBING", "OUTPOST", "PUBLISH"],
            ["JOUKING", "KUMQUAT", "LUTISTS", "MYSTERY", "NURSERY", "OUTRAGE", "PURPOSE"],
            ["JOURNAL", "KWEDINI", "LYRICAL", "MYSTIFY", "NUTCASE", "OXIDIZE", "PYRAMID"],
        ],
        "back": [

        ]
    },
    { // section 7
        "front": [
            ["QUARTER", "REPTILE", "SCRUNCH", "TERRAIN", "UNNERVE", "VERDURE", "WEATHER"],
            ["QUASHED", "RHODIUM", "SEAWEED", "THEOREM", "UPSTOOD", "VIBRATO", "———————"],
            ["QUEUING", "RHYMING", "SKYLARK", "THISTLY", "UPSWING", "———————", "———————"],
            ["QUICKEN", "RIDDLES", "SMITTEN", "TIMPANI", "———————", "———————", "WHISTLE"],
            ["QUIETED", "RIVALRY", "SOLARIA", "———————", "———————", "VIOLETS", "WILLOWY"],
            ["QUIVERS", "RIVULET", "———————", "———————", "UTENSIL", "VISIBLE", "WONDERS"],
            ["QUIXOTE", "———————", "———————", "TUATARA", "UTTERER", "VIVIDLY", "WORSHIP"],
            ["———————", "———————", "SWIZZLE", "TWIDDLE", "UTOPIAN", "VOYAGER", "WRITHED"],
        ],
        "back": [

        ]
    },
    { // section 8
        "front": [
            ["———————", "———————", "———————"],
            ["———————", "———————", "———————"],
            ["———————", "———————", "———————"],
            ["———————", "———————", "———————"],
            ["———————", "———————", "———————"],
            ["———————", "———————", "———————"],
            ["———————", "———————", "———————"],
            ["———————", "———————", "———————"],
            ["———————", "———————", "———————"],
            ["XYLIDIN", "YEAREND", "ZENITHS"],
            ["XYLITOL", "YEARNED", "ZEOLITE"],
            ["XYLOSES", "YEASTED", "ZEPHYRS"],
            ["XYSTERS", "YELLING", "ZEPPOLE"],
            ["XANTHAN", "YELLOWY", "ZESTFUL"],
            ["XENOPUS", "YESHIVA", "ZILLION"],
            ["XERARCH", "YESSING", "ZINCITE"],
            ["XEROSIS", "YIELDED", "ZINGIER"],
            ["XEROTIC", "YIPPIES", "ZIPLOCK"],
            ["XEROXED", "YIRRING", "———————"],
            ["XERUSES", "YODELER", "ZOOLOGY"],
            ["XIPHOID", "YOGURTS", "ZOOMING"],
            ["XYLENES", "YOUNGER", "ZOMBIFY"],
            ["XYLIDIN", "YOWLING", "ZONULAS"],
            ["XYLITOL", "YUKKING", "———————"],
            ["XYLOSES", "———————", "———————"],
            ["———————", "———————", "ZYZZYVA"],
        ],
        "back": [

        ]
    }
];

start();
