var authorName = document.getElementById("authorName");
var quoteContent = document.getElementById("quoteContent");

var Quotes = [
    { author: '-- Oscar Wilde', 
        quote: '“Be yourself; everyone else is already taken.”'
    },

    {author : '-- Frank Zappa', 
     quote : '“So many books, so little time.”'
    },

    {author : '-- Marcus Tullius Cicero', 
     quote : '“A room without books is like a body without a soul.”'
    },

    {author : '-- Dr. Seuss', 
     quote : '“You know you re in love when you cant fall asleep because reality is finally better than your dreams.”'
    },

    {author : '--Mae West', 
     quote : '“You only live once, but if you do it right, once is enough.”'
    },

    {author : '-- Elbert Hubbard', 
     quote : '“Be the change that you wish to see in the world.”'
    },
];

function newQuote(){
    var random = Number.parseInt(Math.random() * Quotes.length + 1);
    quoteContent.innerHTML = Quotes[random].quote;
    authorName.innerHTML = Quotes[random].author;
}
