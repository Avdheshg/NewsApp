const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// using express
const app = express();

// using css
app.use(express.static("public"));
// using body parser
app.use(bodyParser.urlencoded({extended: true}));
// using EJS
app.set('view engine', 'ejs');

// ======= Global array
const tabNews = [];  

// Defining objects for each tabName
const news = {
    tabName: "news",
    title: "The Canadian city to visit this winter",
    newsText: `D
    During the pandemic, Toronto endured some of the longest and strictest restaurant lockdowns of any city of the world – counting more than 360 days when residents were unable to sit down at an indoor eatery.
    
    But as Canada's largest city has now reached an 85% vaccination rate among those 12 and older, its vibrant dining scene and walkable waterfront is bouncing back, welcoming back locals and fully vaccinated travellers as of August.
    
    "The city is almost back to normal, if you are vaccinated and willing to wear a mask," said Toronto resident Felipe Vernaza, who runs the blog Your Coffee & Tea Essentials.
    
    Why should I go now?
    
    The reopening of indoor dining makes a winter visit to the city much more pleasant for vaccinated travellers – through patio dining is still open as well. Even though the city may be cold, winter can also be a gorgeous and less crowded time of year to visit, say residents.
    
    "Don't just visit in the warmer months," advised Toronto resident Farida Talaat. "Winter snow can be beautiful in Canada!"`
}
const sports = {
    tabName: "sports",
    title: "The Ashes: Why Cameron Green's bowling at the Gabba thrilled Australia and should worry England",
    newsText:`Cricketers just shy of two metres tall tend to do that.

    As Australia knocked over England at the Gabba in the first Ashes Test this week, Green stood out with the ball: arriving at the crease in a full gallop, blond hair flying, sending down the Kookaburra ball at pace, creating movement, extracting bounce commensurate with his frame.
    
    In the first innings, he took out England's Ollie Pope when he was well set, hurried on a hook shot that was top-edged down to a catcher on the boundary.
    
    In the second innings, he removed England's most important player in Joe Root, with that extra bounce playing a major part in drawing an edge behind. Green then finished off his match by removing Chris Woakes.
    
    For the year or so before this season, though, most of the attention has not been on Green's bowling.
    
    "There was a lot of chat a couple of years ago that he was one of the next best quicks, a really hard worker," said his captain Pat Cummins after the Brisbane Test. "Then he started churning out hundreds."
    
    After two seasons for Western Australia operating as a bowler and batting at number eight or nine, Green made four centuries in his third season. He followed up in 2020-21 with 197 and 251 for Western Australia, before making a hundred against India for Australia A.
    
    Next thing he was into the Test team at number six. Green is such a talent that no-one can decide where they should look.
    
    His first Test summer didn't let him bowl with freedom. He sent down holding overs and didn't take a wicket across four Tests.`
}
const worklife = {
    tabName: "worklife",
    title: "How companies around the world are shifting the way they work",
    newsText: `The pandemic has triggered seismic shifts in how we work, causing many companies to transition from an office-centric culture to more flexible ways of working. This shift is largely still in the experimental phase, as businesses try to conceive of and test effective post-pandemic working models for their operations and staff.
    
    Of course, no one knows what the ‘right’ answer is. What works for one company may not work for another; business needs will vary depending on sector, size and structure. Many organisations, however, are doing their best to make working more flexible – as well as less burnout-prone, thanks to recent conversations about mental health, work-life balance and burnout.
    
    Some companies are going fully remote, while others are opting for different visions hybrid work environments. Here’s what four companies in four different countries are choosing to do.
    
    Chargebee: Switching to fully remote
    
    Before the pandemic, Chargebee, an India-founded subscription-management company, used to have offices in San Francisco, Amsterdam and Chennai. Today, it’s gone fully remote with a completely decentralised work structure that allows employees to live and work where they want.
    
    Chargebee had been moving toward an asynchronous working model before the pandemic, anyway – meaning the focus wasn’t on everyone working the same hours, but on having teammates overlap a few hours to facilitate communication. But “like every other company during the pandemic, we had to adapt to the realities of the world and shift to a fully distributed model faster and more completely than we had originally planned”, says founder and CEO Krish Subramanian.`
}
const travel = {
    tabName: "travel",
    title: "The hermit of Socotra Island",
    newsText: `Standing on a rocky outcrop on the north-western tip of the Yemeni island of Socotra, the only signs of life that I could see were shoals of fish undulating beneath me in the turquoise water. To the west, the horizon shimmered pink over the ocean, a phenomenon caused by the dusty Arabian atmosphere. From the east rising towards the north, jagged granite peaks framing 80m-high sand dunes fell away into the shallows.

    In the far distance, I noticed a tiny figure in the surf. I asked my guide and island expert Matteo Zanella who it was. "That is Ellai and this is his home. I will take you to meet him tomorrow." I looked around perplexed. Aside from our makeshift camp, I saw no evidence that anyone else had ever lived here.`
}
const future = {
    tabName: "future",
    title: "The tomatoes at the forefront of a food revolution",
    newsText: `At first glance, it looked like any other plant that can be found growing in the corners of offices or on the windowsills of university laboratories. But this particular tomato plant, grown in 2018 at the University of Minnesota, was different. The bushy tangle of elongated leaves and small red fruits were characteristic of a wild species of tomato plant native to Peru and Ecuador called Solanum pimpinellifolium, also known as the red currant tomato. A closer inspection, however, made the plant's uniqueness more apparent.

    This particular plant was more compact, with fewer branches but more fruits than the wild tomato. Its fruits were also a little darker than was usual, a sign of increased lycopene – an antioxidant linked to a lower risk of cancer and heart disease. It had, in fact, been designed that way.
    
    The plant was created by geneticist Tomas Cermak and his colleagues with the use of Crispr gene editing, a Nobel Prize-winning technology which works like a "cut and paste" tool for genetic material. The technique is now revolutionising agriculture and helping create crops for the future.
    
    Cermak himself is on a mission to find a perfect tomato, one that would be easy to cultivate, nutritious and tasty, yet more adaptable to a changing climate. "The ideal plant would be resistant to all forms of stress — heat, cold, salt and drought, as well as to pests," he says.
    
    Climate change spells trouble for many crops, and tomatoes are no exception. Tomatoes don't like heat, growing best between 18C (64F) and 25C (77F). Cross either side of that threshold and things start going downhill: pollen doesn't form properly, the flowers don't form into berries in the way they should. Once the mercury goes over 35C (95F), yields begin to collapse. A 2020 study showed that by mid-21st Century up to 66% of land in California historically used for growing tomatoes may no longer have temperatures appropriate for the crop. Other modelling studies suggest that by 2050 large swaths of land in Brazil, sub-Saharan Africa, India and Indonesia will also no longer have optimal climate for cultivation of tomatoes.`
}
const culture = {
    tabName: "culture",
    title: "The Matrix and the sci-fi stories that predicted life in 2021",
    newsText: `The dystopian movement known as cyberpunk is bigger than ever. But as the genre's greatest film franchise returns, is truth stranger than fiction, asks Sam Davies.
    W
    When was the peak of human civilisation? 1999, according to Agent Smith, the villainous computer program in The Matrix (1999). In the sci-fi series' iconic first film, humans have been enslaved by artificial intelligence 200 years in the future, and what they believe to be the real world is in fact a simulation. Agent Smith explains that the virtual reality – the titular Matrix – they have been tasked with upholding has been modelled on the end of the 20th Century for this reason. After that, it was all downhill for our species, apparently.

    Looking back now, you could argue that Smith had a point. Economies were booming. 9/11 hadn't happened yet. Pandemics were a distant memory.
    
    It was certainly a peak of cinema: 1999 saw Hollywood films – as superficially varied as Fight Club, Office Space, Being John Malkovich and yes, The Matrix – prod at society's brittle facade, making us question our world, our reality, our very existence. The Matrix was so influential it convinced some fans that its central premise was real. In this year's documentary A Glitch in the Matrix, director Rodney Ascher interviews a whole cast of people who believe that very thing, that we are in fact in the Matrix. The Wachowski sisters' film was also a definitive work of cyberpunk, the noirish subgenre of science fiction where futuristic technologies combine with bleak, dystopian societies.

    It is adored to this day, as evidenced by the mania surrounding the release of a new Matrix instalment – The Matrix Resurrections – later this month, with fans even seeming to have forgotten the two dreary sequels that came before it (both released in 2003). As per its title, the fourth film in the series promises to bring three of its most beloved characters back from the dead, with romantically-inclined hackers Neo (Keanu Reeves) and Trinity (Carrie-Anne Moss) having both seemingly died in the third film, while the bespectacled revolutionary Morpheus (Laurence Fishburne) was killed in the canonical narrative of the video-game series The Matrix Online.`
}
const more = {
    tabName: "more",
    title: "The world's most misunderstood novel",
    newsText: `The Great Gatsby is synonymous with parties, glitz and glamour – but this is just one of many misunderstandings about the book that began from its first publication.
    F
    Few characters in literature or indeed life embody an era quite so tenaciously as Jay Gatsby does the Jazz Age. Almost a century after he was written into being, F Scott Fitzgerald's doomed romantic has become shorthand for decadent flappers, champagne fountains and never-ending parties. Cut loose by pop culture from the text into which he was born, his name adorns everything from condominiums to hair wax and a limited-edition cologne (it contains notes of vetiver, pink pepper and Sicilian lime). It's now possible to lounge on a Gatsby sofa, check in at the Gatsby hotel, even chow down on a Gatsby sandwich – essentially a supersize, souped-up chip butty.
    
    More like this:
    
    -       The link between Gatsby and the Kardashians
    
    -       The most joyful books ever written
    
    -       Why funny books are also the most serious
    
    Incongruous though that last item sounds, naming anything after the man formerly known as James Gatz seems more than a touch problematic. After all, flamboyant host is just one part of his complicated identity. He's also a bootlegger, up to his neck in criminal enterprise, not to mention a delusional stalker whose showmanship comes to seem downright tacky. If he embodies the potential of the American Dream, then he also illustrates its limitations: here is a man, let's not forget, whose end is destined to be as pointless as it is violent.
    
    Of all the reviews, even the most enthusiastic, not one had the slightest idea what the book was about – F Scott Fitzgerald
    Misunderstanding has been a part of The Great Gatsby's story from the very start. Grumbling to his friend Edmund Wilson shortly after publication in 1925, Fitzgerald declared that "of all the reviews, even the most enthusiastic, not one had the slightest idea what the book was about." Fellow writers like Edith Wharton admired it plenty, but as the critic Maureen Corrigan relates in her book So We Read On: How The Great Gatsby Came to Be and Why It Endures, popular reviewers read it as crime fiction, and were decidedly underwhelmed by it at that. Fitzgerald's Latest A Dud, ran a headline in the New York World. The novel achieved only so-so sales, and by the time of the author's death in 1940, copies of a very modest second print run had long since been remaindered.`
}
 
// adding to the array
tabNews.push(news, sports, worklife, travel, future, culture, more);

 

// =====   Home route     =======
app.get("/", function(req, res) {
    res.render("home", {tabNewsHTML: tabNews}); 
}); 
  
 

// ========   Routre parameters      ==========
   
// for each nav buttons
app.get("/news/:navBtn", function(req, res) {
    console.log("Nav button clicked: " + req.params.navBtn); 
    const navBtnName = req.params.navBtn; 

    const newsArr = [];
    tabNews.forEach(function(item) {
        if (item.tabName === navBtnName) {
            console.log("Match found");
            newsArr.push(item);
        }
    });
    res.render("navBtn", {newsArrHTML: newsArr});
});
   
// for Each news
app.get("/:newsTitle", function(req, res) {
    console.log(req.params.newsTitle);
    const titleEntered = req.params.newsTitle;

    tabNews.forEach(function(item) {
        if (item.title === titleEntered) {
            console.log("Match found");
            res.render("tabNews", {item});
        }
    });
}); 


app.listen(3000, function() {
    console.log("Server is running on port 3000");
});






















































