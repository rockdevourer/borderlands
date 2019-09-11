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
    "FIGHT4SANCTUARY",
    "LOOTLOOTLOOT",
    "JOYPUKE",
    "BL3REVEAL",
    "BL3WELCOME",
    "BL3ATE3",
    "2KLOVE",
    "HEYSUGAR",
    "SOHAPPYTOGETHER",
    "CLAPTASTIC",
    "MYMAIN",
    "ONTHEHUNT",
    "POWERUPEMAIL",
    "DASHERZ",
    "LESSTHANTHREE",
    "FRESHBOOTY",
    "BUILDURSQUAD",
    "OVERCLOCKED",
    "FORTNITEXMAYHEM",
    "ABCEASYAS123",
    "DUCTTAPEMOD",
    "MADSKILLZ",
    "ITSHERE",
    "JABBER",
    "UNBLINKINGEYE",
    "ALMOSTTHERE"
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
    "GREGORONKH",
    "BONJWA-BL3LAUNCH",
    "LARALOFT-BL3LAUNCH",
    "PIETSMIET-BL3LAUNCH",
    "EARLYACCESS",
    "DOKTORFROID-BL3LAUNCH"

]

var VAULTS = [
    "Dreamlandvip",
    "1CODE",
    "1ronbear",
    "3DJUEGOSVIP",
    "5piderantcenturio",
    "AIRLEMAGVIP",
    "ALLYOURGAMESVIP",
    "BL3FREVENTVIP",
    "BL3MUSEUMCOSPLAY",
    "Bolvip",
    "BOLVIP",
    "BONERFART",
    "Borderlands3vip",
    "BORDERLANDSCOSPLAYE3",
    "BORDERLENS",
    "BRINGMEABUCKET",
    "Childrenofthevault",
    "CHILDRENOFTHEVAULT",
    "CRUMPOCALYPSE",
    "D1G1KLON",
    "DREAMLANDVIP",
    "Ehrenmann",
    "FACEBOOKVIP",
    "GAMEMANIAVIP",
    "GAMESPOTVIP",
    "GAMEVIP",
    "GODSDONTNEGOTIATE",
    "HALVERHAHN",
    "IGNVIP",
    "ILOVEBAGUETTE",
    "INTERTOYSVIP",
    "JABBERKUMP3L",
    "JOYPUKE",
    "JVMVIP",
    "LETSMAKESOMEMAYHEM",
    "LOADINGBAR",
    "LOOTSPLOSION",
    "LOWCOSTCOSPLAYE3",
    "MAYHEM",
    "MAYHEMPRIDE",
    "MEDIAMARKTVIP",
    "MUSHYSNUGGLEBITES",
    "NEDGAMEVIP",
    "OOPS",
    "PAXSCAVENGER",
    "Ph4senschlag",
    "Phasenkl4mmerung",
    "Phasenproj3ktion",
    "PLAYERONEVIP",
    "PWR2PLYRS",
    "RA1LGUN",
    "SEVENDAYS",
    "SHACKNEWSVIP",
    "Skagbait",
    "SMARTOYSVIP",
    "Sntnl",
    "THESEPRETZELSSUCK",
    "TINKABOUTIT",
    "TWITCHVIP",
    "TWOWEEKS",
    "VIP-ANOTHERPAXPUN",
    "VIP-BOXCONCEPT",
    "VIP-CALYPSO",
    "VIP-CHARCONCEPT",
    "VIP-COV",
    "VIP-DEATHANDPAXES",
    "VIP-EATINGPAX",
    "VIP-ENVART",
    "VIP-GIFTSHOP",
    "VIP-GUNWALL",
    "VIP-KEEPINGITPAX",
    "VIP-LOOTPAX",
    "VIP-MOXXI",
    "vip-paxagainstthewall",
    "VIP-PAXALAX",
    "VIP-PAXATTACK",
    "VIP-PAXATYA",
    "VIP-PAXINIT",
    "VIP-PAXSCAVENGER",
    "VIP-PAXTASTIC",
    "VIP-PHOTOBOOTH",
    "VIP-REDCHEST",
    "VIP-SMACKTHATPAX",
    "VIP-SUPERPAX",
    "VIP-TAKEITTOTHEPAX",
    "WACHSK4G",
    "WEGOTUBOO",
    "WHATCHUWANT",
    "WUBWUBWUB",
    "YOURGAMEZONEVIP"
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


async function main() {
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
