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
var book1_type = "paperback";

var book2_title = "The Art of Racing in the Rain";
var book2_author = "Garth Stein";
var book2_price = "€29.99";
var book2_type = "hardcover";

var book3_title = "American Gods";
var book3_author = "Neil Gaiman";
var book3_price = "€9.99";
var book3_type = "paperback";

var book4_title = "Deadhouse Gates";
var book4_author = "Steven Erikson";
var book4_price = "€25.50";
var book4_type = "paperback";

var book5_title = "Musicophilia: Tales of Music and the Brain";
var book5_author = "Oliver Sacks";
var book5_price = "€20.99";
var book5_type = "paperback";

// initialise program (aka commander) 
program
  .version('1.0.1')
  .option('-a, --author [string]', 'Search for author', '...') 
  .option('-t, --title [string]', 'Search for title', '...')
  .parse(process.argv);

// match value of input to "author" argument
// unfortunately I was unable to succesfully implement backticks n and r
switch(program.author)
{
	case book1_author:
		// input match book1
		console.log( );
		console.log('The', book1_type, 'book', book1_title, 'by', book1_author, 'costs', book1_price),
		console.log( );
		console.log('Title:', book1_title);
		console.log('Author:', book1_author);
		console.log('Price:', book1_price);
		console.log('Kind:', book1_type);
		console.log( );
		break;
	case book2_author:
		// input match book2
		console.log( );
		console.log('The', book2_type, 'book', book2_title, 'by', book2_author, 'costs', book2_price),
		console.log( );
		console.log('Title:', book2_title);
		console.log('Author:', book2_author);
		console.log('Price:', book2_price);
		console.log('Kind:', book2_type);
		console.log( );
		break;
	case book3_author:
		// input match book3
		console.log( );
		console.log('The', book3_type, 'book', book3_title, 'by', book3_author, 'costs', book3_price),
		console.log( );
		console.log('Title:', book3_title);
		console.log('Author', book3_author),
		console.log('Price', book3_price),
		console.log('Kind', book3_type),
		console.log( );
		break;
	case book4_author:
		// input match book4
		console.log( );
		console.log('The', book4_type, 'book', book4_title, 'by', book4_author, 'costs', book4_price),
		console.log( );
		console.log('Title:', book4_title);
		console.log('Author:', book4_author);
		console.log('Price:', book4_price);
		console.log('Kind:', book4_type);
		console.log( );
		break;
	case book5_author:
		// input match book5
		console.log( );
		console.log('The', book5_type, 'book', book5_title, 'by', book5_author, 'costs', book5_price),
		console.log( );
		console.log('Title:', book5_title);
		console.log('Author:', book5_author);
		console.log('Price:', book5_price);
		console.log('Kind:', book5_type);
		console.log( );
		break;
}

// match value of input to "title" argument
switch(program.title)
{
	case book1_title: 
		// input match book1
		console.log( );
		console.log('The', book1_type, 'book', book1_title, 'by', book1_author, 'costs', book1_price),
		console.log( );
		console.log('Title:', book1_title);
		console.log('Author:', book1_author);
		console.log('Price:', book1_price);
		console.log('Kind:', book1_type);
		console.log( );
		break;
	case book2_title:
		// input match book2
		console.log( );
		console.log('The', book2_type, 'book', book2_title, 'by', book2_author, 'costs', book2_price),
		console.log( );
		console.log('Title:', book2_title);
		console.log('Author:', book2_author);
		console.log('Price:', book2_price);
		console.log('Kind:', book2_type);
		console.log( );
		break;
	case book3_title:
		// input match book3
		console.log( );
		console.log('The', book3_type, 'book', book3_title, 'by', book3_author, 'costs', book3_price),
		console.log( );
		console.log('Title:', book3_title);
		console.log('Author:', book3_author);
		console.log('Price:', book3_price);
		console.log('Kind:', book3_type);
		console.log( );
		break;
	case book4_title:
		// input match book4
		console.log( );
		console.log('The', book4_type, 'book', book4_title, 'by', book4_author, 'costs', book4_price),
		console.log( );
		console.log('Title:', book4_title);
		console.log('Author:', book4_author);
		console.log('Price:', book4_price);
		console.log('Kind:', book4_type);
		console.log( );
		break;
	case book5_title:
		// input match book5
		console.log( );
		console.log('The', book5_type, 'book', book5_title, 'by', book5_author, 'costs', book5_price),
		console.log( );
		console.log('Title:', book5_title);
		console.log(book5_author);
		console.log('Price:', book5_price);
		console.log('Kind:', book5_type);
		console.log( );
		break;
}