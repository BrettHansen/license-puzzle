
const start = () => {
    const plates = platesData.map((section) => ({
        name: section.name,
        plates: section.front.map((frontRow, rowIndex) => (
            frontRow.map((frontPlate, columnIndex) => ({ front: frontPlate, back: section.back?.[rowIndex]?.[frontRow.length - columnIndex - 1] }))
        ))
    }));

    const container = document.createElement("div");
    container.className = "grid-container";

    let currentlySelected = undefined;

    const trigger = (section, row, column) => {
        try {
            if (row < 0 || row > plates[section].plates.length - 1) {
                return;
            }

            if (column < 0) {
                section = section - 1;
                column = plates[section].plates[row].length - 1;
            } else if (column > plates[section].plates[row].length - 1) {
                section = section + 1;
                column = 0;
            }

            if (!currentlySelected) {
                // if nothing currently selected, select triggered
                select(section, row, column);
                currentlySelected = { section, row, column };
            } else if (currentlySelected.section === section && currentlySelected.row === row && currentlySelected.column === column) {
                // if trigger on currently selected, then unselect triggered
                deselect(section, row, column)
                currentlySelected = undefined;
            } else {
                // if trigger on different, unselect selected and select trigger
                select(section, row, column);
                deselect(currentlySelected.section, currentlySelected.row, currentlySelected.column);
                currentlySelected = { section, row, column };
            }
        } catch {}
    };

    const getPlate = (section, row, column) => {
        const sections = document.body.querySelectorAll(".plate-grid");
        const rows = sections[section].querySelectorAll(".plate-row");
        return rows[row].querySelectorAll(".plate-pair")[column];
    };

    const select = (section, row, column) => {
        getPlate(section, row, column).classList.add("selected");
        getPlate(section, row, column).scrollIntoView({ block: "nearest" });
    };

    const deselect = (section, row, column) => {
        getPlate(section, row, column).classList.remove("selected");
    };
    
    plates.forEach((section, sectionIndex) => {
        const sectionLabelContainter = document.createElement("div");
        sectionLabelContainter.className = "section-label-container";
    
        const sectionLabel = document.createElement("p");
        sectionLabel.innerHTML = section.name;

        sectionLabelContainter.appendChild(sectionLabel);
        
        const sectionPlateGrid = document.createElement("div");
        sectionPlateGrid.className = "plate-grid";

        sectionPlateGrid.appendChild(sectionLabelContainter);

        section.plates.forEach((row, rowIndex) => {
            const rowContainer = document.createElement("div");

            rowContainer.className = "plate-row";
            
            row.forEach((plate, columnIndex) => {
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

                plateContainer.addEventListener("click", () => {
                    trigger(sectionIndex, rowIndex, columnIndex);
                });
            });

            sectionPlateGrid.appendChild(rowContainer);
        });

        container.appendChild(sectionPlateGrid);
    });

    document.onkeydown = (event) => {
        switch (event.key) {
            case "ArrowLeft":
                event.preventDefault();
                currentlySelected && trigger(currentlySelected.section, currentlySelected.row, currentlySelected.column - 1);
                break;
            case "ArrowRight":
                event.preventDefault();
                currentlySelected && trigger(currentlySelected.section, currentlySelected.row, currentlySelected.column + 1);
                break;
            case "ArrowUp":
                event.preventDefault();
                currentlySelected && trigger(currentlySelected.section, currentlySelected.row - 1, currentlySelected.column);
                break;
            case "ArrowDown":
                event.preventDefault();
                currentlySelected && trigger(currentlySelected.section, currentlySelected.row + 1, currentlySelected.column);
                break;
        }
    };

    document.body.appendChild(container);
};

const platesData = [
    { // section 1
        "name": "A",
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
        "name": "B",
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
        "name": "C",
        "front": [
            ["OBELISK", "PACHIST", "QINDARS", "RACQUET", "SAGUARO", "TABLEAU", "UKULELE"],
            ["OBLONGS", "PACIFIC", "QIVIUTS", "RADIATE", "SALIENT", "TAFFETA", "UMBERED"],
            ["OBLIQUE", "PADLOCK", "QUAFFED", "RAVIOLI", "SAPLING", "TAKEOUT", "UMPTEEN"],
            ["OBVIATE", "PAGEBOY", "QUAHOGS", "RAGTIME", "SATYRIC", "TAMBURA", "———————"],
            ["OCARINA", "PAINTER", "QUAICHS", "READING", "SAVANNA", "———————", "———————"],
            ["OCEANIC", "PAISLEY", "QUALIFY", "REFRACT", "———————", "———————", "UNEARTH"],
            ["OCTAVES", "PALMIER", "QUAMASH", "———————", "———————", "TEKTITE", "UNIFIED"],
            ["OCTOPUS", "PANOPLY", "———————", "———————", "SCARLET", "TENDRIL", "UNMOVED"],
        ],
        "back": [
            [],
            [],
            [],
            [],
            [],
            [],
            ["MPASHNT", "KARBEAR", "ERACIZM", "HAD2HAV", "TRUSTF8", "DRMCHSR", "CLMBHI2"],
            ["MEROME", "RSKIBUS", "BLUHARE", "LETITRD", "CMAREGO", "ITCNBON", "MPECABL"],
        ]
    },
    { // section 4
        "name": "D",
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
            [],
            [],
            [],
            [],
            [],
            [],
            ["2DEMALL", "OPN2DIF", "2BNJOYD", "MMMHMMM", "GWIZZ", "BAKPAKR", "BLKMJIC"],
            ["ESTM8ER", "VRRROOM", "CGRPRYD", "BURNNLV", "ITSADEL", "BRGRGRL", "SUBLIME"],
        ]
    },
    { // section 5
        "name": "E",
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
            [],
            [],
            [],
            [],
            [],
            [],
            ["LV2WHYN", "EXEXEC", "FXITFST", "IPUSH2", "LIFSGR8", "DRGNFLZ", "HAMSRUS"],
            ["MMAZING", "IMPDQ2", "9ELEVEN", "BRITALY", "2QTP2T", "1N10SE", "NOSPOON"],
            ["FRSHWTR", "GUIDUCK", "GETSUM", "HUHWHAT", "NVRFRGT", "IBCRUZN", "AUTOBOX"],
            ["BLKDMND", "HAPPYHR", "W8LIFT", "SOBRGAL", "STRGAZR", "NVMYBUG", "GRNRNRG"],
            ["CMPLSV", "CREATV", "ZMYDUST", "XTRMSKR", "MSLCAR", "GLFADKT", "BMWPOWR"],
            ["EBAYQN", "WA2FAST", "PCBWTHU", "PUFNSTF", "VANITY", "SLVRWLF", "ARUKIND"],
            ["HONDINI", "C2IT", "HIPTRIP", "TXN4EVR", "2L82W8", "GOANYWR", "RDYNABL"],
            ["CESTWA", "MINT2B", "10SNUT", "CAM2BLV", "RVRSONG", "DMBYALL", "LIBERTE"],
            ["ULTAMTM", "REALMCY", "O2BNLUV", "ZFOR2", "S8NHOT", "ITEEOFF", "LIVTFLY"],
            ["JUST4FN", "NMLTLKR", "IMINMY", "DIGJAZZ", "2WISE4U", "FR8TRN", "MTNTOPN"],
            ["HNTNRIG", "IWNTSUN", "OFVDRZN", "IHRDEWE", "SH8KSPR", "YGOHOME", "SCBAGRL"],
            ["DOADEAL", "FORTUN8", "WRECKEM", "GTADANZ", "PEACE4U", "———————", "SALMN8R"],
            ["XLER8", "NUBREED", "CARTOON", "HAUDI2U", "NOCANT", "PEZHEAD", "DSTYRD"],
            ["MEEDI8R", "———————", "BAKNAXN", "COW54", "AKN2FSH", "ELCTRC", "———————"],
            ["ASCENTS", "FRGTABT", "JUSTRGT", "ART4ALL", "WIFSMAD", "JOYSDRV", "BLONDGE"],
            ["BEING", "SHARKB8", "CRPDIEM", "SO1L1ST", "DBLHELX", "IDRPETS", "FOTOGRF"],
            ["BBBBOBB", "ILRESQU", "ODDYSKI", "JAGA2D", "ARTTCHR", "FFFFFUN", "SNOMISR"],
            ["NMBS2K", "XSDNID", "SWALLOW", "BFIRST", "LICENSE", "DRCRASH", "TALEEHO"],
            [],
            [],
        ]
    },
    { // section 6
        "name": "F",
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
            [],
            [],
            [],
            [],
            [],
            [],
            ["PORSCHE", "4LORAX", "CHARGIT", "SRDNPTY", "MATHLVR", "LST1MDE", "MNDCRYM"],
            ["BZZNBYU", "IM4WNTR", "MYTQUIN", "HIFIBR", "BEDDING", "MYPLTOY", "WTRFRNT"],
            ["3MSKTRS", "OLDRYZR", "OSTRICH", "THNKFSH", "FARCIDE", "FNEFARM", "LVN4FN"],
            ["COUPLET", "MYWDSTK", "ABTRFLY", "2NDHOM", "PAWTY", "IXLR8TT", "MYZEN"],
            ["GD4NTHN", "ESC8POD", "RDRUNNR", "SEQRITY", "DOORMAT", "PRRFECT", "NDABAG"],
            ["COUGR", "ANBYOND", "CZECHM8", "RD2MATO", "ROAMN", "2SPOILD", "MNYMTRS"],
            ["CHKNLPS", "VETITBE", "N2BNL8", "PAPASTK", "SPCEMTN", "HI2UFME", "GRR8FUL"],
            ["TAXMAM", "UBTCHA", "GNFSHNG", "HOTENUF", "ONAWHIM", "DNTBGME", "MADBNKR"],
            ["OFF2GLF", "EN4CER", "PIGBENZ", "ONOIML8", "DAWGFNZ", "SPLORIN", "PA55ION"],
            ["PDYTAT", "MBZMBZ", "DLIGHT2", "SCHNELL", "CARYME", "LV2CAMP", "HRMJSTY"],
            ["FORSHO", "IMWHOIM", "LAV8RZ", "XSTNSHL", "OBSESHN", "HVNBND", "HION4WD"],
            ["DBLSHOT", "HUMDNGR", "———————", "Y2KFE", "DZRTFN", "BUGDYLN", "HVNSENT"],
            ["———————", "HMMMMMR", "MPULSE", "LEPURR", "———————", "ETAL8", "KEROUAC"],
            ["BYTEME", "NMITABL", "BBYBMR", "BRNGMON", "CME2SEL", "EARS4U", "RNNLATE"],
            ["GITIUP", "———————", "NRGSAVR", "RHAULER", "FEWLY", "3VOM", "CARED4"],
            ["UNBRDLD", "ILBBAK", "HMATLST", "MY15MIN", "LGWAYHM", "———————", "ACPTNCE"],
            ["SOGR8FL", "LETRUCK", "PRKPLCE", "———————", "AUTOBAN", "GOODNRG", "DOICARE"],
            ["LOSTTAG", "HVNFNOW", "VEHICLE", "GLDNEGG", "HRDWORK", "GENERIC", "DIZDREM"],
            [],
            [],
        ]
    },
    { // section 7
        "name": "G",
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
            [],
            [],
            [],
            [],
            [],
            [],
            ["SLUGB8", "IFORGET", "LV2SKI2", "OILBANK", "SOLRPWR", "ESCKEY", "SHOP2XS"],
            ["K9TOY42", "MCMLXX", "INSTYLE", "ZYAL8R", "SUPRB", "SKIDRO", "LEXCESS"],
        ]
    },
    { // section 8
        "name": "H",
        "front": [
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
            ["WATRFWL", "———————", "———————"],
            ["TBIRDFN", "———————", "———————"],
            ["KIDZNME", "———————", "———————"],
            ["CAYMNS", "———————", "———————"],
            ["PIR8TE", "———————", "———————"],
            ["B4NEED", "———————", "———————"],
            ["KARMMMA", "———————", "———————"],
            ["IDRVSLO", "———————", "———————"],
            ["BOOTFUL", "———————", "———————"],
            ["———————", "———————", "———————"],
            ["XRAYBOB", "———————", "———————"],
            ["ZZZOOM", "———————", "———————"],
            ["RU4FUN", "———————", "———————"],
            ["RAYN4ST", "———————", "———————"],
            ["———————", "———————", "———————"],
            [],
            [],
        ]
    }
];

start();
