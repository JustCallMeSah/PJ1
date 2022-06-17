// create arrays for year
const yearsArray = ["", "2019", "2020", "2021"]

// add the year selection to the combo listing
var x = document.getElementById("optYear");

// using a for loop
for (let i = 0; i < yearsArray.length; i++) {
    // create a new option
    var option = document.createElement("option");
    // set the option text
    option.text = yearsArray[i];
    // add the option to display
    x.add(option, x[i]);
}

// the movie array is used to provide elements for each of the movies to the java script code as follows for each fo the movie data row
//
// Year - the first element in the movie row is used to filter the movies only for the year the user asks to see
// Movie Name - this is used to set the text of the anchor link that launches a new tab showing the movies iMDB content
// Movie iMDb link - the hyperlink address for the movies imDb content
// Movie Poster - the hyperlink location poster jpeg for the movie
// Movie Summary - a brief description of the story line for the movie
//
let moviesArray = [

    ["2019", "Avengers: Endgame", "https://www.imdb.com/title/tt4154796/", "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg", "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."],
    ["2019", "The Lion King", "https://www.imdb.com/title/tt6105098/?ref_=nv_sr_srsg_6", "https://m.media-amazon.com/images/M/MV5BNGQ4ZjhjOGEtMWY4Ny00OThjLWI0MWEtMDA3NzU2ZGE0OWZlXkEyXkFqcGdeQXVyMzQ4MDAzOTE@._V1_.jpg", "Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny on the plains of Africa. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother -- and former heir to the throne -- has plans of his own. The battle for Pride Rock is soon ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. Now, with help from a curious pair of newfound friends, Simba must figure out how to grow up and take back what is rightfully his."],
    ["2019", "Frozen 2", "https://www.imdb.com/title/tt4520988/?ref_=nv_sr_srsg_3", "https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_FMjpg_UX1000_.jpg", "Elsa the Snow Queen has an extraordinary gift -- the power to create ice and snow. But no matter how happy she is to be surrounded by the people of Arendelle, Elsa finds herself strangely unsettled. After hearing a mysterious voice call out to her, Elsa travels to the enchanted forests and dark seas beyond her kingdom -- an adventure that soon turns into a journey of self-discovery."],

    ["2020", "Bad Boys For Life", "https://www.imdb.com/title/tt1502397/?ref_=nv_sr_srsg_0", "https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg", "The wife and son of a Mexican drug lord embark on a vengeful quest to kill all those involved in his trial and imprisonment -- including Miami Detective Mike Lowrey. When Mike gets wounded, he teams up with partner Marcus Burnett and AMMO -- a special tactical squad -- to bring the culprits to justice. But the old-school, wisecracking cops must soon learn to get along with their new elite counterparts if they are to take down the vicious cartel that threatens their lives."],
    ["2020", "1917", "https://www.imdb.com/title/tt8579674/?ref_=nv_sr_srsg_0", "https://m.media-amazon.com/images/M/MV5BYzYzZWRkMjgtZWUzOC00ZTQ5LWIxMGUtMDlhNWI0OTNiZjYxXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg", "During World War I, two British soldiers -- Lance Cpl. Schofield and Lance Cpl. Blake -- receive seemingly impossible orders. In a race against time, they must cross over into enemy territory to deliver a message that could potentially save 1,600 of their fellow comrades -- including Blake's own brother."],
    ["2020", "Sonic the Hedgehog", "https://www.imdb.com/title/tt3794354/?ref_=nv_sr_srsg_3", "https://m.media-amazon.com/images/M/MV5BMDk5Yzc4NzMtODUwOS00NTdhLTg2MjEtZTkzZjc0ZWE2MzAwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_FMjpg_UX1000_.jpg", "The world needed a hero -- it got a hedgehog. Powered with incredible speed, Sonic embraces his new home on Earth -- until he accidentally knocks out the power grid, sparking the attention of uncool evil genius Dr. Robotnik. Now, it's supervillain vs. supersonic in an all-out race across the globe to stop Robotnik from using Sonic's unique power to achieve world domination."],

    ["2021", "Spiderman: No Way Home", "https://www.imdb.com/title/tt10872600/?ref_=nv_sr_srsg_0", "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_UY1200_CR90,0,630,1200_AL_.jpg", "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."],
    ["2021", "Shang-Chi and the Legend of the Ten Rings", "https://www.imdb.com/title/tt9376612/?ref_=nv_sr_srsg_0", "https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", "Martial-arts master Shang-Chi confronts the past he thought he left behind when he's drawn into the web of the mysterious Ten Rings organization."],
    ["2021", "Venom: Let There Be Carnage", "https://www.imdb.com/title/tt7097896/?ref_=nv_sr_srsg_0", "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/venom-let-there-be-carnage_gcwyi8ws_480x.progressive.jpg?v=1635184650", "Eddie Brock is still struggling to coexist with the shape-shifting extraterrestrial Venom. When deranged serial killer Cletus Kasady also becomes host to an alien symbiote, Brock and Venom must put aside their differences to stop his reign of terror."]

]

// get the DOM object for the option selector and set its onchange handler
document.getElementById("optYear").onchange = function() {funcShowMovieListing()};

function funcShowMovieListing() {

    // locate the year selector
    var idOptYear = document.getElementById("optYear");
 
    // extract the selected year
    var selectedYear = idOptYear.options[idOptYear.selectedIndex].text;

    // add the year selection to the combo listing
    var tblMovies = document.getElementById("idListMovies");

    // clear any of the movies rows if present - this is not working
    while(tblMovies.rows.length-1) {
        // row zero is the header, therefore only delete rows 1 onwards
        tblMovies.deleteRow(1);
      }
    
    // using a for loop
    for (let j = 0; j < moviesArray.length; j++) 
    {
        if (selectedYear == moviesArray[j][0])
        {
            // create a new row
            var tr = document.createElement('tr');

            // create the td elements for image, name, and summary
            var tdImage = document.createElement('td');
            var tdName = document.createElement('td');
            var tdSummary = document.createElement('td');

            // set the fixed column width
            tdImage.style.tableLayout = "fixed";
            tdImage.style.maxWidth = "200px";
        
            tdName.style.tableLayout = "fixed";
            tdName.style.width = "200px";
            tdName.style.alignmentBaseline = "top";
            
            tdSummary.style.tableLayout = "fixed";
            tdSummary.style.width = "350px";


            // create the image element for the poster
            var imgPoster = document.createElement("IMG");
            
            // set the image source for the poster
            imgPoster.src = moviesArray[j][3];
            // set the image width to be fixed to 200 pixels so that the columns align properly
            imgPoster.style.width = "200px";

            // create the movie name anchor tag
            var linkName = document.createElement('a');
             // set the movie name and 
             linkName.text = moviesArray[j][1];
            // and the link to its imdb location
            linkName.href = moviesArray[j][2];
            // when clicked open the target in a new tab 
            linkName.target = "_blank";

            // set the movie summary
            var txtSummary = document.createTextNode(moviesArray[j][4]);


            // append the poster, name, and summary to each of the columns
            tdImage.append(imgPoster);
            tdName.append(linkName);
            tdSummary.append(txtSummary);

            // append the individual column cells to the movie list row
            tr.appendChild(tdImage);
            tr.appendChild(tdName);
            tr.appendChild(tdSummary);
            
            // append the movie listing to the movies table
            tblMovies.appendChild(tr);
        }
    }
  }
