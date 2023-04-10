const quotes = [
        "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
        "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston S. Churchill",
        "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it. - Steve Jobs",
        "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better. - Jim Rohn",
        "Positive anything is better than negative nothing. - Elbert Hubbard"
      ];
      
      function generateQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
      }
      
      document.getElementById("quote").innerHTML = generateQuote();