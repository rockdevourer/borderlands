/*

WIP not ready for use! Lots of old/recycled variables, code not finished

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
var USERNAME = 'SOMEUSER';
var PASSWORD = 'SOMEPASSWORD';

var apibase = 'https://api.2k.com/borderlands/code';

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

var BL2XBOX = [
    "CT533-XZZ65-Z9FX9-CRT3J-S9X65",
    "5TWBT-Z9HRK-9HRXZ-W6BTB-CZH39",
    "KTCJJ-CJBSK-SS6XH-C6TJB-F6BFB",
    "C3CT3-TB39C-9S6FS-WRT3B-SS9R3"
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
	await tryGetLatestCodes();
	gatherpoints();
}

async function login() {
	var response = await fetch('https://api.2k.com/borderlands/users/authenticate', {
		method: 'POST',
		mode: 'cors',
		headers: {
		'Content-type' : 'application/json',
		'Origin' : 'https://borderlands.com'
		},
		body: JSON.stringify({
         username : USERNAME,
		 password : PASSWORD
     })
	})
	console.log(response.headers.get('x-session-set')); // This is key, this is required in order to move to the next step; without this, you're unable to authenticate your account to submit/redeem codes
}

async function test() {
	await login();
	var response = await fetch(apibase + '/CT533-XZZ65-Z9FX9-CRT3J-S9X65/info', {
     method: 'GET',
	 mode: 'cors',
     headers: {
        'Content-type' : 'application/json',
		'Origin' : 'https://borderlands.com',
		'Referer' : 'https://borderlands.com/en-US/vip'
     }
});
	console.log(await response.json());
	console.log(response)
}

//main();
test();
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


/* MISC Golden Keys Notes:

Order of events:

Checks the key if it's valid

https://api.2k.com/borderlands/code/5T5B3-CWJSK-KRTJT-TTJJT-9HW63/info
'fetch("https://api.2k.com/borderlands/code/5T5B3-CWJSK-KRTJT-TTJJT-9HW63/info", {"credentials":"omit","headers":{"accept":"application/json, text/plain, ...","sec-fetch-mode":"cors","x-session":"supersecret.supersecret.supersecret-supersecret"},"referrer":"https://borderlands.com/en-US/vip-codes/","referrerPolicy":"no-referrer-when-downgrade","body":null,"method":"GET","mode":"cors"});'

{"entitlement_offer_codes":[{"code":"5T5B3-CWJSK-KRTJT-TTJJT-9HW63","max_redeemable":2000000,"amount_redeemed":1152284,"start_date":null,"end_date":null,"offer_title_text":"Borderlands 2 Golden Key","offer_description_text":"You have unlocked a Borderlands 2 Golden Key! You can use your Golden Key on the mysterious loot chest located in Sanctuary to receive a rare powerful item!","offer_service":"steam","offer_title":"willow2","offer_id":2,"is_active":true}]}

Golden Key Redeem Steam:
Request URL: https://api.2k.com/borderlands/code/5T5B3-CWJSK-KRTJT-TTJJT-9HW63/redeem/steam
fetch("https://api.2k.com/borderlands/code/5T5B3-CWJSK-KRTJT-TTJJT-9HW63/redeem/xboxlive", {"credentials":"omit","headers":{"accept":"application/json, text/plain, ...","sec-fetch-mode":"cors","x-session":"supersecret.supersecret.supersecret-supersecret"},"referrer":"https://borderlands.com/en-US/vip-codes/","referrerPolicy":"no-referrer-when-downgrade","body":null,"method":"POST","mode":"cors"});

Response:
{"message":"REDEMPTION_QUEUED","job_id":"UNIQUE-JOB-ID","min_wait_milliseconds":750,"max_wait_milliseconds":1000,"max_retry_attempts":5}


Checks status of the job:
https://api.2k.com/borderlands/code/5T5B3-CWJSK-KRTJT-TTJJT-9HW63/job/UNIQUE-JOB-ID
{"success":true}
fetch("https://api.2k.com/borderlands/code/5T5B3-CWJSK-KRTJT-TTJJT-9HW63/job/UNIQUE-JOB-ID", {"credentials":"omit","headers":{"accept":"application/json, text/plain, ...","sec-fetch-mode":"cors","x-session":"supersecret.supersecret.supersecret-supersecret"},"referrer":"https://borderlands.com/en-US/vip-codes/","referrerPolicy":"no-referrer-when-downgrade","body":null,"method":"GET","mode":"cors"});
d
*/
