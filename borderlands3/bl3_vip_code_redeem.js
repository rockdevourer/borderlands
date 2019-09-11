/*

As of 09/09/2019

vault type: cid = 5261
diamond type: cid = 5262
email type: cid = 5264
creator code: cid = 5263
boost type: 5721

After login, navigate to
https://2kgames.crowdtwist.com/ -- This is a blank page, as there is no landing page
https://2kgames.crowdtwist.com/widgets/t/code-redemption/9902/#2 -- This is one of the components of the redemption page, if you'd rather see that



*/

var badcodes = [];
var pointsredeemed = [];
var points = 0;
var temppoints;
var totalpointsredeemed = 0;
var emailpointsredeemed = 0;
var creatorpointsredeemed = 0;
var vaultpointsredeemed = 0;
var emailpoints;
var creatorpoints;
var vaultpoints;

var apibase = 'https://2kgames.crowdtwist.com/code-redemption-campaign/redeem?cid=';

async function httppost(codeinfo) {
var response = await fetch(apibase + codeinfo.cid, {
     method: 'POST',
	 mode: 'cors',
     body: JSON.stringify({
         code: codeinfo.code
     }),
     headers: {
         'Content-type' : 'application/json'
     }
})

let result = await response.json();

if (result.points) {
	pointsredeemed.push(result.points);
	temppoints = result.points;
	return temppoints;
} else {
	badcodes.push(codeinfo.code);
	return null;
}


return null;
}
var vaultcid = 5261;
var emailcid = 5264;
var creatorcid = 5263;
var boostcid = 5721;


var EMAILS = [
    "BL3REVEAL",
    "BL3WELCOME",
    "LOOTLOOTLOOT",
    "FIGHT4SANCTUARY",
    "BL3ATE3",
    "2kLove",
    "HEYSUGAR",
    "SOHAPPYTOGETHER",
    "CLAPTASTIC",
    "MYMAIN",
    "ONTHEHUNT",
    "FRESHBOOTY",
    "POWERUPEMAIL",
    "Dasherz",
    "LESSTHANTHREE",
    "BUILDURSQUAD",
    "OVERCLOCKED",
    "FORTNITEXMAYHEM",
    "ABCEASYAS123",
    "DUCTTAPEMOD",
    "MADSKILLZ",
    "ITSHERE",
	"JABBER",
	"Unblinkingeye"
]

var CREATORS = [
    "PROFESSORBROMANVIP",
    "KINGGOTHALIONVIP",
    "PietSmietVIP",
    "JoltzDude139VIP",
    "JvtvVIP",
    "AdmiralbahrooVIP",
    "Ki11erSixVIP",
    "MitsuShowVIP",
    "TessachkaVIP",
    "LaraLoftVIP",
    "MitsuShowE3",
    "TessachkaE3",
    "EdEMonsterE3",
    "Joltzdude139E3",
    "Ki11ersixE3",
    "KingGothalionE3",
    "ProfessorBromanE3",
    "AdmiralBahrooE3",
    "dammit2hellE3",
    "NAYSYE3",
    "LUCKYBONEZE3",
    "GRIMMBONEZE3",
    "CohhVIP",
    "Cure4Kids",
    "GREGORONKH"
]

var VAULTS = [
    "WUBWUBWUB",
    "JOYPUKE",
    "LOADINGBAR",
    "IGNVIP",
    "Borderlands3vip",
    "TWITCHVIP",
    "GAMESPOTVIP",
    "FACEBOOKVIP",
    "SHACKNEWSVIP",
    "GAMEVIP",
    "WEGOTUBOO",
    "LOWCOSTCOSPLAYE3",
    "BORDERLANDSCOSPLAYE3",
    "ILOVEBAGUETTE",
    "BL3FREVENTVIP",
    "WHATCHUWANT",
    "MUSHYSNUGGLEBITES",
    "OOPS",
    "BORDERLENS",
    "Skagbait",
    "VIP-GUNWALL",
    "VIP-GIFTSHOP",
    "VIP-REDCHEST",
    "VIP-COV",
    "VIP-MOXXI",
    "VIP-ENVART",
    "VIP-CALYPSO",
    "VIP-CHARCONCEPT",
    "VIP-BOXCONCEPT",
    "VIP-PHOTOBOOTH",
    "BL3MUSEUMCOSPLAY",
    "3DJUEGOSVIP",
    "HALVERHAHN",
    "BRINGMEABUCKET",
    "MAYHEMPRIDE",
    "PWR2PLYRS",
    "THESEPRETZELSSUCK",
    "TINKABOUTIT",
    "LOOTSPLOSION",
    "BONERFART",
    "LETSMAKESOMEMAYHEM",
    "MAYHEM",
    "CRUMPOCALYPSE",
    "Childrenofthevault",
    "WACHSK4G",
    "JABBERKUMP3L",
    "D1G1KLON",
    "RA1LGUN",
    "5piderantcenturio",
    "Phasenkl4mmerung",
    "1ronbear",
    "Sntnl",
    "Phasenproj3ktion",
    "Ph4senschlag",
    "1CODE",
    "GODSDONTNEGOTIATE",
    "Ehrenmann",
    "TWOWEEKS",
    "VIP-PAXINIT",
    "VIP-PAXALAX",
    "VIP-SUPERPAX",
    "VIP-EATINGPAX",
    "JVMVIP",
    "VIP-LOOTPAX",
    "VIP-PAXSCAVENGER",
    "PAXSCAVENGER",
    "VIP-PAXATYA",
    "VIP-PAXATTACK",
    "VIP-TAKEITTOTHEPAX",
    "VIP-PAXTASTIC",
    "SMARTOYSVIP",
    "MEDIAMARKTVIP",
    "Bolvip",
    "GAMEMANIAVIP",
    "ALLYOURGAMESVIP",
    "NEDGAMEVIP",
    "YOURGAMEZONEVIP",
    "VIP-DEATHANDPAXES",
    "VIP-SMACKTHATPAX",
    "VIP-KEEPINGITPAX",
    "INTERTOYSVIP",
    "PLAYERONEVIP",
    "VIP-ANOTHERPAXPUN",
    "vip-paxagainstthewall",
    "SEVENDAYS",
    "AIRLEMAGVIP",
	"Dreamlandvip"
]


async function emailmap() {
	emailpoints = await Promise.all(EMAILS.map(async function(email) {
		var type = {
			code : email,
			cid : emailcid
		};
		temppoints = await httppost(type);
		emailpointsredeemed = emailpointsredeemed + temppoints;
		return emailpointsredeemed;
}))};

async function creatorsmap() {
	creatorspoints = await Promise.all(CREATORS.map(async function(creator) {
	var type = {
		code : creator,
		cid : creatorcid
	};
	temppoints = await httppost(type);
	creatorpointsredeemed = creatorpointsredeemed + temppoints;
	return creatorpointsredeemed;
}))};

async function vaultmap() {
	vaultpoints = await Promise.all(VAULTS.map(async function(vault) {
	var type = {
		code : vault,
		cid : vaultcid
	};
	temppoints = await httppost(type);
	vaultpointsredeemed = vaultpointsredeemed + temppoints;
	return vaultpointsredeemed;
}))}

async function gatherpoints() {
	var [totalemailpoints, totalcreatorpoints, totalvaultpoints] = await Promise.all([emailmap(), creatorsmap(), vaultmap()]);
	var totalpoints = emailpointsredeemed + creatorpointsredeemed + vaultpointsredeemed;
	console.log("Total Points: ", totalpoints);
	alert("Total Points Redeemed: " + totalpoints)
}

// try and get the latest codes that are defined in the Borderlands discord spreadsheet
// the hard-coded codes will not be overriden
async function tryGetLatestCodes() {
    const url = "https://sheets.googleapis.com/v4/spreadsheets/1QfwdILwVv19sKeveaBzZwhQLEOzmFwnOmMZsWLKwgg8/values/A5%3AB1000?valueRenderOption=FORMATTED_VALUE&key=AIzaSyCcDGjg03zH4omQvn8yV1ciUlh0nAXj1qs";

    let codes = [];

    try {
        ({ values: codes } = await (await fetch(url)).json());
    } catch (e) {
        return;
    }

    if (codes == null) {
        return;
    }

    codes.forEach(element => {
        if (element == null || element.length !== 2) {
            return;
        }

        const code = element[0];
        const type = element[1];
        if (code == null || type == null) {
            return;
        }

        const typeNormalized = type.toLowerCase();

        if (typeNormalized === "vault") {
            VAULTS = appendCodeToArray(VAULTS, code);
        } else if (typeNormalized === "email") {
            EMAILS = appendCodeToArray(EMAILS, code);
        } else if (typeNormalized === "creator") {
            CREATORS = appendCodeToArray(CREATORS, code);
        }
    });
}

function appendCodeToArray(array, code) {
    if (array == null || array.length === 0 || code == null) {
        return;
    }

    const codeIndex = array.findIndex(existingCode => existingCode.toLowerCase() === code.toLowerCase());
    if (codeIndex === -1) {
        array.push(code);
    }

    return array;
}

async function main() {
	await tryGetLatestCodes();
	gatherpoints();
}

main();

/*

await fetch('https://2kgames.crowdtwist.com/code-redemption-campaign/redeem?cid=5263', {
     method: 'POST',
     body: JSON.stringify({
         code: "GREGORONKH"
     }),
     headers: {
         'Content-type' : 'application/json'
     }
})

*/
