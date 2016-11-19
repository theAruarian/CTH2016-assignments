/*
	file: 	howler.js
	desc: 	simple script designed to randomly generate an absurdly hateful/mocking letter.
	author: dgrouwe
	date: 	18/11/16
*/

// required modules
var chance = require('chance').Chance();

var wrap = require('word-wrap');

/* hardcoded database, words collected randomly off the internet. Unfortunately less oddly vulgar words were found than I initially hoped.
*/
// arrays for header and signature
const first = ['VILE', 'HORRID', 'GORMLESS', 'DEPRAVED', 'INANE', 'BARMY', 'NUMPTY'];

const second = ['GIT', 'PLONKER', 'PILLOCK', 'BUGGER', 'TWIT', 'BERK', 'CUCK', 'BELLEND', 'BLIGHTER', 'FOP'];

const penultimate = ['ETERNALLY', 'FOREVER', 'STAUNCHLY', 'TENACIOUSLY', 'EXPLICITLY', 'MOCKINGLY', 'VIGOROUSLY', 'TERRIBLY', 'DEFIANTLY', 'INTENTIONALLY', 'RIGOROUSLY', 'UNABASHEDLY', 'FEROCIOUSLY'];

const last = ['FUMING', 'DESPISING', 'OBJECTING', 'SCHEMING', 'PLOTTING', 'DEFIANT', 'VORACIOUS'];

//arrays for the body of the message
const adjectives = ['UNSIGHTLY', 'DASTARDLY','TERRIBLE', 'APPALlING', 'HIDEOUS', 'ALOOF', 'VULGAR', 'CANTANKEROUS', 'LISTLESS', 'OFFENDING', 'COWARDLY', 'VAPID', 'POMPOUS', 'GOADY', 'POCK FACED', 'HAGARDLY', 'BUMBLING', 'INSIPID', 'CORPULENT', 'WIDIFUL'];

const nouns = ['BUFFOON', 'MOOK', 'LARK', 'VAGRANT', 'EXCREMENT', 'FUSTILUG', 'PRATT', 'GAMMERSTANG', 'ARSE', 'DUPE', 'DINGUS', 'NAG', 'MISER', 'TWIT', 'BERK', 'PLEBIAN', 'CHARADE'];

const adverbs = ['HORRENDOUSLY', 'LAUGHABLY', 'DAINTILY',  'AWKWARDLY', 'FOPPISHLY', 'ONERABLY', 'OBTUSELY', 'VULGARLY', 'INSIPIDLY', 'INDOLENTLY'];

const verbs = ['ASTOUNDS', 'BELITTLES', 'BEWILDERS', 'CONFOUNDS', 'HECKLES', 'BOILS', 'FRUSTRATES', 'NAGS', 'EMBARRASSES', 'SICKENS', 'NAUSEATES', 'DISGUSTS', 'GRIPES'];

/* word selection functions used
**/
function choice(array) {
	var index = chance.natural({'min': 0, 'max': array.length - 1}); 
	return array[index];
}

function maybe(array) {
	if( chance.bool() ) {
		return choice(array) + ' ';
	} else {
		return '';
	}
}

// Adds grammatically correct comma between words, if multiple random adjectives/adverbs in sequence
function maybemulti(array) {
	if(chance.bool()) {
		return choice(array) + ', ';
	} else {
		return '';
	}
}

/* sentence generation
**/
function header() {
	return '   TO THAT ' + choice(first) + ' ' + choice(second) + ',';
}

function long() {
	return "YOU'RE " + choice(adjectives) + '. YOU' + ' ' + maybemulti(adjectives) + choice(adjectives) + ' ' + choice(nouns) + '. '
	+ 'YOUR ' + choice(nouns) + ' ' + maybe(adverbs) + choice(verbs) + " ME AND IT'S " + choice(adjectives) + ', '
	+ 'YOU' + ' ' + maybemulti(adjectives) + maybemulti(adjectives) + choice(adjectives) + ' ' + choice(nouns) + '. ';
}

function short() {
	return  'THAT ' + maybe(adverbs) + choice(adjectives) + ' ' + choice(nouns) + ' YOU CALL A ' + choice(nouns) + ' '
	+  maybe(penultimate) + ' ' + choice(verbs) + ', ' + 'YOU' + ' ' + maybemulti(adjectives) + maybemulti(adjectives) 
	+ choice(adjectives) + ' ' + choice(nouns) + '. '; 
}

function closing() {
	return choice(penultimate) + ' ' + choice(last) + ',' + '\r' + "N.d.P.";
}

/* printing the actual note
**/
console.log('\n\n\n\n'); 

var text = '';

// loop generating 5 sentences
for(var i = 0; i < 2; i++) {
		text += long(), + short();
}

console.log(header(), '\n\n',
	wrap(text, {'width': 60, 'indent': '       '}),  '\n\n',
	wrap(closing(), {'width': 60, 'indent': '						'}),
	'\n\n\n\n');	

