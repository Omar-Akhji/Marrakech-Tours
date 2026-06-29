export interface TourItem {
  id: string;
  title: string;
  duration: string;
  price: string;
  difficulty: string;
  rating: string;
  image: string;
  desc: string;
  tags: string[];
  itinerary: { day: string; title: string; desc: string }[];
  inclusions: string[];
  exclusions: string[];
}

export const tours: TourItem[] = [
  {
    id: "sahara-desert",
    title: "Sahara Desert Merzouga Dunes",
    duration: "3 Days / 2 Nights",
    price: "$120",
    difficulty: "Medium",
    rating: "4.9 (428 reviews)",
    image: "https://assets.codepen.io/3685267/timed-cards-3.jpg",
    desc: "Cross the High Atlas Mountains via the Tizi n'Tichka pass, explore the iconic Ait Benhaddou Kasbah, and ride camels into the golden dunes of Erg Chebbi for an unforgettable night in a luxury desert camp.",
    tags: ["Desert", "Adventure", "Camping"],
    itinerary: [
      {
        day: "Day 1",
        title: "Marrakech to Dades Valley",
        desc: "Depart Marrakech and cross the Atlas Mountains via Tizi n'Tichka. Tour Ait Benhaddou Kasbah, a UNESCO site, before driving past Ouarzazate to spend the night in Dades Gorges.",
      },
      {
        day: "Day 2",
        title: "Dades Valley to Merzouga Dunes",
        desc: "Explore Todra Gorges, then travel to Erfoud and Merzouga. Mount your camel for a sunset trek across the Erg Chebbi dunes to a traditional nomad desert camp.",
      },
      {
        day: "Day 3",
        title: "Merzouga Dunes to Marrakech",
        desc: "Watch the sunrise over the dunes, ride camels back to Merzouga, and drive back to Marrakech, passing through the beautiful Draa Valley and High Atlas range.",
      },
    ],
    inclusions: [
      "AC Minibus/4x4 transport with professional driver",
      "Camel ride in Erg Chebbi desert dunes",
      "1 Night accommodation in Dades Gorges hotel (Private Room)",
      "1 Night in a traditional luxury desert camp (Private Tent)",
      "Dinner and breakfast at both accommodations",
    ],
    exclusions: [
      "Lunches and beverages",
      "Local guides inside Kasbahs (optional)",
      "Personal items and tips",
    ],
  },
  {
    id: "essaouira-coast",
    title: "Essaouira Atlantic Coast Day Trip",
    duration: "1 Day",
    price: "$45",
    difficulty: "Easy",
    rating: "4.8 (196 reviews)",
    image: "https://assets.codepen.io/3685267/timed-cards-5.jpg",
    desc: "Escape the Marrakech bustle to the windy coastal town of Essaouira. Stroll along the 18th-century Portuguese sea ramparts, explore the blue-and-white Medina, and dine on fresh grilled seafood by the harbor.",
    tags: ["Coastal", "Culture", "Seafood"],
    itinerary: [
      {
        day: "08:00 AM",
        title: "Departure & Argan Cooperative",
        desc: "Set off westward from Marrakech. Enjoy a brief stop at an authentic local women's Argan oil cooperative to learn about the production of cosmetic and culinary argan oil.",
      },
      {
        day: "11:30 AM",
        title: "Port and Medina Exploration",
        desc: "Arrive in Essaouira and visit the historic port, sea ramparts (Scala), and the atmospheric lanes of the Medina. Browse local art shops and Thuya woodcraft workshops.",
      },
      {
        day: "01:00 PM",
        title: "Seafood Lunch & Beach Walk",
        desc: "Savor freshly caught and grilled fish at the open-air harbor stalls. Spend the afternoon walking along the sandy beach, watching windsurfers, or relaxing at a seaside cafe.",
      },
    ],
    inclusions: [
      "Roundtrip transport from Marrakech in AC vehicle",
      "Professional English-speaking driver",
      "Argan oil cooperative visit",
      "Free time to explore Essaouira at your own pace",
    ],
    exclusions: [
      "Lunch and drinks",
      "Local city guide (optional, around €10-15)",
      "Personal expenses",
    ],
  },
  {
    id: "atlas-valleys",
    title: "Atlas Mountains & Ourika Valley",
    duration: "1 Day",
    price: "$55",
    difficulty: "Medium",
    rating: "4.9 (312 reviews)",
    image: "https://assets.codepen.io/3685267/timed-cards-1.jpg",
    desc: "Hike through the beautiful Ourika Valley, past cascading waterfalls and traditional mud-brick Berber villages. Enjoy a home-cooked lunch with a local Berber family overlooking Mount Toubkal.",
    tags: ["Mountains", "Berber Culture", "Hiking"],
    itinerary: [
      {
        day: "09:00 AM",
        title: "Drive to Setti Fatma Valley",
        desc: "Depart Marrakech towards the lush foothills of the High Atlas. Walk along the river banks and admire the olive groves and clay houses built into the valley cliffs.",
      },
      {
        day: "11:00 AM",
        title: "Trek to the Seven Waterfalls",
        desc: "Guided hike up the rocky trails of Setti Fatma to discover the famous waterfalls. Enjoy stunning mountain vistas and refreshing pools along the route.",
      },
      {
        day: "01:30 PM",
        title: "Traditional Lunch in a Berber House",
        desc: "Visit a Berber family home, share traditional mint tea, and eat an authentic tagine freshly prepared on charcoal. Return to Marrakech in the late afternoon.",
      },
    ],
    inclusions: [
      "Roundtrip transport from Marrakech",
      "Professional local mountain guide for the trek",
      "Authentic lunch inside a Berber family home",
      "Traditional mint tea service",
    ],
    exclusions: [
      "Soft drinks and bottled water",
      "Tips for the local guide and driver",
      "Mule rides (if required)",
    ],
  },
  {
    id: "ouzoud-falls",
    title: "Ouzoud Waterfalls Day Trip",
    duration: "1 Day",
    price: "$35",
    difficulty: "Easy",
    rating: "4.7 (244 reviews)",
    image: "https://assets.codepen.io/3685267/timed-cards-2.jpg",
    desc: "Marvel at the spectacular 110-meter Ouzoud Waterfalls, the highest in North Africa. Walk down the shaded olive paths, ride a local raft, and meet the wild Barbary macaque monkeys that inhabit the valley cliffs.",
    tags: ["Nature", "Waterfalls", "Wildlife"],
    itinerary: [
      {
        day: "08:30 AM",
        title: "Drive through Tadla Plains",
        desc: "Travel northeast from Marrakech through olive orchards and rural valleys towards the Grand Atlas village of Tanaghmeilt.",
      },
      {
        day: "11:00 AM",
        title: "Hike and Barbary Macaque Meeting",
        desc: "Walk down the stone paths under olive trees to the foot of the waterfalls. Encounter wild but friendly Barbary macaque monkeys along the way.",
      },
      {
        day: "01:00 PM",
        title: "Raft Ride and River Lunch",
        desc: "Cross the pool on a small hand-pulled raft to get right next to the thundering sprays. Dine on tagine at a shaded river-view restaurant.",
      },
    ],
    inclusions: [
      "AC shared minibus transport from Marrakech",
      "English-speaking driver and helper",
      "Free time to walk and swim in the pools",
    ],
    exclusions: [
      "Lunch and beverages",
      "Local guide (optional, around €5)",
      "Raft ride ticket (optional, around €2)",
    ],
  },
];
