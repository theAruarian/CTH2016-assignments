/*
    file:   books.js
    desc:   script with hardcoded database of books selected from ABC
    author: D. Grouwe (10554548)
    date:   07/11/16
*/

// import 'commander' (https://www.npmjs.com/package/commander)
var program = require('commander');

// database of books
var book1_title = "Grain de La Voix. Entretiens (1962-1980)(Le)";
var book1_author = "Roland Barthes";
var book1_price = "€39.99";
var book1_type = "Trade Paperback";

var book2_title = "The Art of Racing in the Rain";
var book2_author = "Garth Stein";
var book2_price = "€29.99";
var book2_type = "Hardcover";

var book3_title = "American Gods";
var book3_author = "Neil Gaiman";
var book3_price = "€9.99";
var book3_type = "Paperback";

var book4_title = "Deadhouse Gates";
var book4_author = "Steven Erikson";
var book4_price = "€25.50";
var book4_type = "Trade Paperback";

var book5_title = "Musicophilia: Tales of Music and the Brain";
var book5_author = "Oliver Sacks";
var book5_price = "€20.99";
var book5_type = "Paperback";

// initialise program (aka commander) 
program
  .version('1.0.1')
  .option('-a, --author [string]', 'Search for author')
  .parse(process.argv);

// match value of input to "author" argument
switch(program.author)
{
	case book1_author
		// input match book1
		
		console.log(book1_author);
		console.log(book1_price);
		console.log(book1_type);
		break;
	case book2_author
		// input match book2
		console.log(book2_title);
		console.log(book2_author);
		console.log(book2_price);
		console.log(book2_type);
		break;
	case book3_author
		// input match book3
		console.log(book3_title);
		console.log(book3_author);
		console.log(book3_price);
		console.log(book3_type);
		break;
	case book4_author
		// input match book4
		console.log(book4_title);
		console.log(book4_author);
		console.log(book4_price);
		console.log(book4_type);
		break;
	case book5_author
		// input match book5
		console.log(book5_title);
		console.log(book5_author);
		console.log(book5_price);
		console.log(book5_type);
		break;
	default:
		// incase input author is not in database
		console.log('Author not found');
		break;
}