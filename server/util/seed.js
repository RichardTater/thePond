const { sequelize } = require("./database");
const { Product } = require("../models/products");

let starterProducts = [
  {
    id: 1,
    name: "Classic Ducky",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0604/4801/products/Classic_1_clipped_rev_1_540x.jpeg?v=1505807388",
    price: 5.50,
    description: `This classic rubber duck is perfect for any occasion: a pool-side party, a children's birthday, or even the famous duck racing. Feel free to order this rubber duck in bulk or individually. 

        Measurements: 3 1/2" x 3" x 3 1/4"
        
        Our ducks are lead free and phthalate free. They contain a round floating weight at the bottom, so our ducks always float right side up in the water.
        
        Age 3 and above. Please use with supervision for children under the age of 3.`,
  },
  {
    id: 2,
    name: "Pirate Ducky",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0604/4801/products/Pirate_1_b0a169e0-feba-450d-b81b-f3db5703c7d4_540x.jpeg?v=1514697320",
    price: 5.50,
    description: `Arr.. Bring this Rubber Pirate Duck into your tub or pool and watch it fend off enemy attacks! Order some to add to your pirate crew, or a bunch for your themed parties. Our Pirate Rubber Duck Collection are great for Duck Race Festivals or any kind of racing event. Get yours today!

        Measurements: 2 7/8" x 3 1/8" x 3"
        
        Our ducks are lead free and phthalate free. They contain a round floating weight at the bottom, so our ducks always float right side up in the water.
        
        Age 3 and above. Please use with supervision for children under the age of 3.`,
  },
  {
    id: 3,
    name: "Skipper Ducky",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0604/4801/products/IMG_2330_clipped_rev_1-min_540x.jpeg?v=1505808336",
    price: 5.50,
    description: `"ARGGGGGH!" This Pirate Duck will add a touch of fun to any home or party. Its small dotted eyes make it extra adorable and fun. Our Pirate Rubber Duck Collection are great for Duck Race Festivals or any kind of racing event. Get yours today!

        Measurements: 3" x 3 1/8" x 3"
        
        Our ducks are lead free and phthalate free. They contain a round floating weight at the bottom, so our ducks always float right side up in the water.
        
        Age 3 and above. Please use with supervision for children under the age of 3.`,
  },
  {
    id: 4,
    name: "Sailor Ducky",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0604/4801/products/Sailor_1_540x.jpeg?v=1505606552",
    price: 5.50,
    description: `The Rubber Sailor Duck is meant for the waters. Decorate your pool party, cruise, or boat ride with this duck! Let the Rubber Sailor Duck accompany you on your next sea adventure!

        Measurements: 3 3/8" x 3" x 3 1/4"
        
        Our ducks are lead free and phthalate free. They contain a round floating weight at the bottom, so our ducks always float right side up in the water.
        
        Age 3 and above. Please use with supervision for children under the age of 3.`,
  },
  {
    id: 5,
    name: "Solider Ducky",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0604/4801/products/soldier_1-min_540x.png?v=1506036430",
    price: 5.50,
    description: `Pride yourself for being an honorable veteran or active military personnel. Inspire your children to serve the country.  The rubber soldier duck is a perfect inspiration and a representation of your selfless service to your country. Order your own today!

        Measurements: 3 1/4" x 3 1/8" x 3 1/4"
        
        Our ducks are lead free and phthalate free. They contain a round floating weight at the bottom, so our ducks always float right side up in the water.
        
        Age 3 and above. Please use with supervision for children under the age of 3.`,
  },
  {
    id: 6,
    name: "Ghost Ducky",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0604/4801/products/Ghost_1-min_540x.jpg?v=1505112167",
    price: 5.50,
    description: `"Boo!" says the Rubber Ghost Duck. Use Rubber Ghost Duck as decoration for parties or add it to those Trick-Or-Treat goodie bags.This spooky rubber duck is a great way to make halloween more fun! 

        Measurements: 3" x 2 3/4" x 3 1/2"
        
        Our rubber ducks are lead free and phthalate free. They contain a round floating weight at the bottom, so our ducks always float right side up in the water.
        
        Age 3 and above. Please use with supervision for children under the age of 3.`,
  },
  {
    id: 7,
    name: "Patriotic Ducky",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0604/4801/products/IMG_2288_clipped_rev_1-min_540x.jpeg?v=1505807149",
    price: 5.50,
    description: `Patriotic Rubber Duck is perfect for parties on Independence Day or any celebrations. Show your red, white, and blue spirit with this rubber ducky in your pool or tub.

        Measurements: 3 1/2" x 3 3/4" x 3 1/2"
        
        Our rubber ducks are lead free and phthalate free. They contain a round floating weight at the bottom, so our ducks always float right side up in the water.
        
        Age 3 and above. Please use with supervision for children under the age of 3.`,
  },
  {
    id: 8,
    name: "Skateboarder Ducky",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0604/4801/products/Photo_Aug_16_1_17_29_PM_burned-min_540x.jpg?v=1505111809",
    price: 5.50,
    description: `Are you enjoying the freedom from cruising around town on your skateboards? Well so does the Rubber Skateboard Duck! This duck is a perfect gift for boys birthdays or celebrations! Order yours today!

        Measurements: 3 1/8" x 3 3/8" x 3 1/4"
        
        Our ducks are lead free and phthalate free. They contain a round floating weight at the bottom, so our ducks always float right side up in the water.
        
        Age 3 and above. Please use with supervision for children under the age of 3.`,
  },
  {
    id: 9,
    name: "Biker",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0604/4801/products/Biker_4_540x.JPG?v=1505112869",
    price: 5.50,
    description: `Do you enjoy riding motorbikes in style? The Rubber Biker Duck surely is ready to hit the road in style with a helmet and motor jacket. This rubber duck is perfect for gifting and promoting events

        Measurements: 3 3/8" x 3 1/4" x 3 5/8"
        
        Our rubber ducks are lead free and phthalate free. They contain a round floating weight at the bottom, so our ducks always float right side up in the water.
        
        Age 3 and above. Please use with supervision for children under the age of 3.`,
  },
  {
    id: 10,
    name: "Tennis Ducky",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0604/4801/products/IMG_2488_clipped_rev_1-min_540x.jpeg?v=1506022692",
    price: 5.50,
    description: `Tennis is a very fun and active sport! Motivate your teammates and children to do well by giving them the Rubber Tennis Duck! Use it as an encouragement, a congratulation, or for fun!

        Measurements: 3 1/2" x 3 1/4" x 3 1/4"
        
        Our rubber ducks are lead free and phthalate free. They contain a round floating weight at the bottom, so our ducks always float right side up in the water.
        
        Age 3 and above. Please use with supervision for children under the age of 3.`,
  },
  {
    id: 11,
    name: "Construction Ducky",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0604/4801/products/IMG_2215_clipped_rev_1-min_1080x.jpeg?v=1505720516",
    price: 5.50,
    description: `Want to build a city of your own? The Rubber Construction Duck is perfect for you! These little rubber duckies will assist you in your big or small construction projects.

        Measurements: 3 1/2" x 3 1/2" x 3 5/8"
        
        Our rubber ducks are lead free and phthalate free. They contain a round floating weight at the bottom, so our ducks always float right side up in the water.
        
        Age 3 and above. Please use with supervision for children under the age of 3.`,
  },
  {
    id: 12,
    name: "Sleepy Ducky",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0604/4801/products/IMG_2211_clipped_rev_1-min_540x.jpeg?v=1505720441",
    price: 5.50,
    description: `With a comfy pillow, nice pajamas and a teddy, the Rubber Sleepy Duck is ready for bedtime and enter his adventurous dreams! Order the Rubber Sleepy Duck today for slumber parties or a gift for your child!

        Measurements: 3 3/8" x 3 1/8" x 3 3/8"
        
        Our ducks are lead free and phthalate free. They contain a round floating weight at the bottom, so our ducks always float right side up in the water.
        
        Age 3 and above. Please use with supervision for children under the age of 3.`,
  },
  {
    id: 13,
    name: "Nurse Ducky",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0604/4801/products/IMG_2223_clipped_rev_1-min.jpeg?v=1505720652",
    price: 5.50,
    description: `Want to amp up the cuteness in your hospital environment? The Rubber Nursing Duck is perfect for nursing staff, incoming nurses, nursing students or other caring staff in a clinical setting. Create a fun hospital environment and give your patients and staff a smile with the Rubber Nursing Duck today!

        Measurement: 3 1/2" x 3 1/4" x 3 1/2"
        
        Our rubber ducks are lead free and phthalate free. They contain a round floating weight at the bottom, so our rubbers ducks always float right side up in the water.
        
        Age 3 and above. Please use with supervision for children under the age of 3.`,
  },
  {
    id: 14,
    name: "Fireman Ducky",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0604/4801/products/CIMG0253_1cc2de25-bd5e-4030-abf9-86a4d36b0e17_540x.JPG?v=1505112051",
    price: 5.50,
    description: `Are you a firefighter yourself? or you want to inspire your children to be one? The Rubber Fireman Duck is perfect for you! This rubber ducky is ready to spring into action with his hose by his side!

        Measurements: 3 1/2" x 3 1/4" x 3 1/2"
        
        Our rubber ducks are lead free and phthalate free. They contain a round floating weight at the bottom, so our ducks always float right side up in the water.
        
        Age 3 and above. Please use with supervision for children under the age of 3.`,
  },
  {
    id: 15,
    name: "Movie Ducky",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0604/4801/products/IMG_2243_clipped_rev_1-min_540x.jpeg?v=1505806579",
    price: 5.50,
    description: `Do you like watching movies and shows? The Rubber Movie Duck can be a good company for you. Add the Rubber Movie Duck to your entertainment room, bedroom, or pool for an extra pop of fun!

        Measurements: 3 1/4" x 3" x 3"
        
        Our rubber ducks are lead free and phthalate free. Our rubber ducks are specially engineered so that they always float right side up in the water.
        
        Age 3 and above. Please use with supervision for children under the age of 3.`,
  },
  {
    id: 16,
    name: "Doctor Ducky",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0604/4801/products/IMG_2255_clipped_rev_1-min_540x.jpeg?v=1505806695",
    price: 5.5,
    description: `Let the Rubber Doctor Duck accompany you through your sickness. It will help make it go away. This rubber ducky is perfect as gifts for the sick, decorations at clinics and hospitals, or gifts to aspiring and current doctors.

        Measurements: 3 1/2" x 3 1/2" x 3 3/8"
        
        Our rubber ducks are lead free and phthalate free. They contain a round floating weight at the bottom, so our ducks always float right side up in the water.
        
        Age 3 and above. Please use with supervision for children under the age of 3.`,
  },
  {
    id: 17,
    name: "Football Ducky",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0604/4801/products/Photo_Dec_05__7_50_54_PM_clipped_rev_1_540x.jpeg?v=1512532949",
    price: 5.50,
    description: `Are you into football? Does your child hope to become a football star? This is the perfect rubber duck to motivate your child, or simply for them to have fun with :) Perfect for sports occasions or children's parties!

        Measurements: 3 1/4" x 3 1/4" x 3"
        
        Our ducks are lead free and phthalate free. They contain a round floating weight at the bottom, so our ducks always float right side up in the water.
        
        Age 3 and above. Please use with supervision for children under the age of 3.`,
  },
  {
    id: 18,
    name: "Soccer Ducky",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0604/4801/products/Soccer_updated_1_540x.jpg?v=1536909228",
    price: 5.50,
    description: `Do you enjoy watching World Cup or FIFA? Are you a soccer fan or player yourself! The Rubber Soccer Duck is perfect for the soccer season. Order one for yourself, or a bunch to celebrate your team! 

        Measurements: 3 3/8" x 3 3/8" x 3 5/8"
        
        Our ducks are lead free and phthalate free. They contain a round floating weight at the bottom, so our ducks always float right side up in the water.
        
        Age 3 and above. Please use with supervision for children under the age of 3.`,
  },
  {
    id: 19,
    name: "Basketball Ducky",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0604/4801/products/IMG_2776_clipped_rev_1_540x.jpeg?v=1514696321",
    price: 5.50,
    description: `Whether you love basketball as a sport or as a fan,  the Rubber Basketball Duck will be perfect for you. Order this rubber ducky for yourself, a dozen for the team, or even hundreds for the whole school. 

        We offer special pricing for any duck quantity over 50 (mix and match welcome), feel free to contact us at info@duckycity.com to learn about the special offer.
        
        Measurements: 3 1/2" x 3 3/4" x 3 1/2"
        
        Our rubber ducks are lead free and phthalate free. They contain a round floating weight at the bottom, so our ducks always float right side up in the water.
        
        Age 3 and above. Please use with supervision for children under the age of 3.`,
  },
  {
    id: 20,
    name: "Snorkel Ducky",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0604/4801/products/Snorkel_1_720x.jpeg?v=1514697045",
    price: 5.50,
    description: `Do you enjoy snorkeling in the pool or the ocean? Do you like discovering colorful fishes, sea turtles, and treasure? Then let the Rubber Snorkeling Duck accompany you in your adventures in the ocean or your swimming pool! Order yours today!

        Measurements: 3 3/8" x 2 3/4" x 3"
        
        Our ducks are lead free and phthalate free. They contain a round floating weight at the bottom, so our ducks always float right side up in the water.
        
        Age 3 and above. Please use with supervision for children under the age of 3.`,
  },
  {
    id: 21,
    name: "Chef Ducky",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0604/4801/products/Chef_1_540x.jpeg?v=1505454042",
    price: 5.50,
    description: `Do you enjoy cooking? Do you want to open your own restaurant someday? The Rubber Chef Duck is perfect to restaurant promotions or a gift for an aspiring/ current chefs. 

        Measurements: 3" x 3 1/4" x 3 3/8"
        
        Our rubber ducks are lead free and phthalate free. They contain a round floating weight at the bottom, so our ducks always float right side up in the water.
        
        Age 3 and above. Please use with supervision for children under the age of 3.`,
  },
  {
    id: 22,
    name: "Gym",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0604/4801/products/IMG_2188_clipped_rev_2_540x.jpeg?v=1505720183",
    price: 5.50,
    description: `Enjoy a good workout with this Rubber Gym Duck. Let this rubber ducky be your motivation in training. Order one now for yourself and your gym buddies!

        Measurements: 3" x 3 5/8" x 3"
        
        Our ducks are lead free and phthalate free. They contain a round floating weight at the bottom, so our ducks always float right side up in the water.
        
        Age 3 and above. Please use with supervision for children under the age of 3.`,
  },
  {
    id: 23,
    name: "Rocker Ducky",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0604/4801/products/rock_1-min_clipped_rev_1-min_460x.jpeg?v=1506022216",
    price: 5.50,
    description: `Do you enjoy Rock Music? Do you have a favorite band? Bring this Rock n' Roll Duck with you to all the concerts and music festivals and give it to your favorite band as support! 

        Measurements: 3" x 3 1/4" x 3" 
        
        Our rubber ducks are lead free and phthalate free. They contain a round floating weight at the bottom, so our ducks always float right side up in the water.
        
        Age 3 and above. Please use with supervision for children under the age of 3.`,
  },
  {
    id: 24,
    name: "Baseball Ducky",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0604/4801/products/baseball_1_modified_540x.jpg?v=1505346044",
    price: 5.50,
    description: `If you love the sport of Baseball, then you will love our Rubber Baseball Duck! Get your team into spirit by celebrating with this rubber duck today!

        Measurements: 3 1/2" x 3 3/4" x 3 1/2"
        
        Our rubber ducks are lead free and phthalate free. They contain a round floating weight at the bottom, so our ducks always float right side up in the water.
        
        Age 3 and above. Please use with supervision for children under the age of 3.`,
  },
  {
    id: 25,
    name: "Police Ducky",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0604/4801/products/police_1-min_clipped_rev_1_1_900x.jpeg?v=1514696446",
    price: 5.50,
    description: `Are you a cop yourself? Does your child want to be a hero? Inspire your child to regulate peace and order with this Rubber Police Duck! The Rubber Police Ducks are great for gifts to families with a law enforcement officer or events!

        Measurements: 3" x 3 3/8" x 3 1/2"
        
        Our ducks are lead free and phthalate free. They contain a round floating weight at the bottom, so our ducks always float right side up in the water.
        
        Age 3 and above. Please use with supervision for children under the age of 3.`,
  },
];

const seed = async () => {
  await Product.bulkCreate(starterProducts);
  console.log("Database Seeded ;D");
};

module.exports = seed;
