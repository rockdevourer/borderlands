/*

As of 09/09/2019

vault type: cid = 5261
diamond type: cid = 5262
email type: cid = 5264
creator code: cid = 5263
boost type: 5721

After login, navigate to https://2kgames.crowdtwist.com/widgets/t/code-redemption/9902/#2

*/



const apibase = 'https://2kgames.crowdtwist.com/code-redemption-campaign/redeem?cid=';

async function httppost(codeinfo) {
var response = await fetch(apibase + codeinfo.cid, {
     method: 'POST',
     body: JSON.stringify({
         code: codeinfo.code
     }),
     headers: {
         'Content-type' : 'application/json'
     }
})

console.log(response);
return null;
}
const vaultcid = 5261;
const emailcid = 5264;
const creatorcid = 5263;
const boostcid = 5721;


const EMAILS = [
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
    "ITSHERE"
]


async function main() {
	EMAILS.forEach(async function(email) {
		var type = {
		code : email,
		cid : emailcid
		};
		//console.log(type);
		httppost(type);
		//test = await console.log(email);
	})
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
