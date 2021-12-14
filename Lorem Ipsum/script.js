//lorem text
const text = [
    "I'm baby cloud bread before they sold out selvage flexitarian, gluten-free direct trade iceland hell of XOXO pitchfork kogi fixie cray banh mi. Kombucha mustache four dollar toast you probably haven't heard of them heirloom deep v taxidermy fanny pack hell of jean shorts trust fund. Bitters PBR&B ugh beard tote bag cronut. Fam gluten-free yuccie, lyft affogato umami prism venmo freegan wolf selvage chartreuse pop-up. Single-origin coffee swag tote bag neutra adaptogen beard, leggings copper mug gastropub pork belly keytar. Trust fund pop-up asymmetrical, paleo vice activated charcoal small batch kinfolk banjo gentrify. Hexagon kogi actually man braid cred 8-bit quinoa meggings messenger bag cronut meh pickled crucifix humblebrag salvia.",
    "Cardigan crucifix fingerstache af, hashtag +1 locavore. Wolf gastropub thundercats, cloud bread crucifix post-ironic intelligentsia disrupt pork belly. Direct trade next level post-ironic try-hard succulents. Gentrify unicorn DIY meditation jean shorts pinterest blog hashtag 8-bit actually la croix twee raw denim tousled. Chartreuse flexitarian keffiyeh, thundercats salvia hashtag cliche.",
    "Air plant selvage fashion axe migas normcore kinfolk beard, crucifix deep v waistcoat you probably haven't heard of them bespoke actually. Vape sustainable ugh sartorial quinoa small batch bushwick brooklyn. Street art chartreuse sriracha asymmetrical, sartorial art party williamsburg shoreditch green juice pug biodiesel. IPhone VHS glossier dreamcatcher. Fixie waistcoat cornhole salvia blog green juice pabst polaroid photo booth twee meditation. Four loko kitsch occupy lomo jean shorts chambray. Gluten-free hoodie gastropub activated charcoal keffiyeh tousled pabst photo booth tattooed.",
    "Salvia keytar craft beer, 3 wolf moon vape poutine freegan farm-to-table kale chips shabby chic shaman meggings. Gluten-free prism subway tile banh mi kickstarter pug lo-fi, 3 wolf moon semiotics tote bag actually vexillologist portland kogi blue bottle. Poutine sartorial pug shoreditch man bun flannel. Poke hella meh, seitan drinking vinegar chartreuse heirloom keytar biodiesel tofu shabby chic schlitz thundercats knausgaard.",
    "Marfa offal occupy kinfolk, lomo pug fashion axe. Marfa la croix VHS, kombucha art party XOXO glossier flexitarian. Stumptown bitters post-ironic selvage air plant meditation lumbersexual irony intelligentsia fanny pack plaid locavore street art wayfarers. Etsy post-ironic intelligentsia dreamcatcher farm-to-table cronut butcher adaptogen affogato viral. Seitan austin kale chips kogi +1 keffiyeh green juice.",
    "Cloud bread gastropub schlitz tilde affogato palo santo raclette 3 wolf moon scenester. Schlitz scenester selvage drinking vinegar meditation edison bulb +1 fashion axe disrupt bushwick street art chicharrones live-edge poke. +1 butcher skateboard try-hard fixie iPhone yr. Poke selvage retro readymade taiyaki coloring book. Cardigan austin fixie occupy. Small batch artisan mustache flannel, asymmetrical tattooed PBR&B wolf coloring book copper mug kickstarter. Umami vape art party selfies taiyaki authentic squid, af farm-to-table cred irony enamel pin.",
    "Chambray kombucha DIY, waistcoat pop-up mustache heirloom cornhole ramps mixtape jean shorts. Sriracha jianbing semiotics bitters. Tumeric YOLO meh irony, kickstarter shabby chic pabst viral cliche ethical locavore heirloom forage craft beer. Semiotics godard echo park ugh umami kogi fanny pack vaporware vinyl af. Swag vaporware godard, gochujang hexagon pork belly tacos yr plaid.",
    "Cronut tacos edison bulb tattooed pour-over paleo banjo selfies cold-pressed yuccie tbh mustache. Irony thundercats 90's, stumptown semiotics mumblecore XOXO small batch whatever artisan. Forage tofu cray humblebrag. Cloud bread chambray dreamcatcher squid hella roof party austin franzen chillwave literally artisan bitters brooklyn. Truffaut iceland beard, poutine man braid craft beer man bun lumbersexual wayfarers four loko. Ramps swag truffaut bespoke single-origin coffee intelligentsia iceland next level cray shoreditch.",
    "Fixie four dollar toast enamel pin shabby chic banjo franzen. Chartreuse +1 meditation farm-to-table chicharrones. Banh mi sustainable kale chips kombucha poke mumblecore microdosing church-key la croix hella. Crucifix man bun banjo tacos pop-up. Portland activated charcoal fam polaroid direct trade cray tumeric hashtag art party hella XOXO leggings.",
    "Chartreuse scenester air plant marfa lumbersexual letterpress seitan taxidermy ennui vinyl jean shorts vexillologist adaptogen. Locavore meggings knausgaard organic cronut lo-fi drinking vinegar 8-bit. Single-origin coffee celiac pug glossier, activated charcoal austin trust fund. Selvage gochujang shabby chic af wayfarers, you probably haven't heard of them succulents wolf franzen. Beard gentrify freegan, snackwave seitan hammock cronut heirloom shaman dreamcatcher disrupt kinfolk gastropub bitters kickstarter."
]

const form = document.querySelector('.lorem-form');
const amount = document.getElementById('amount')
const result = document.querySelector('.lorem-text');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random()*text.length);
    //empty, -1, >9
    if(isNaN(value) || value <= 0 || value > 9){
        result.innerHTML = `<p class="result">${text[random]}</p>`;
    } else {
        let tempText = text.slice(0, value);
        tempText = tempText.map(function(paragraph){
            return `<p class="result">${paragraph}</p>`;
        }).join("");
        result.innerHTML = tempText;
    }

});