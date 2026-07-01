export interface Destination {
  title: string;
  region: string;
  image: string;
  desc: string;
  highlights: string[];
}

export const destinations: Destination[] = [
  {
    title: "Marrakech Medina",
    region: "Central Morocco",
    image: "https://assets.codepen.io/3685267/timed-cards-3.jpg",
    desc: "The historic red heart of Morocco. Lose yourself in the maze of spice-scented souks, witness the electric energy of Jemaa el-Fnaa square at dusk, and explore centuries-old Bahia Palace and secret riads.",
    highlights: ["Jemaa el-Fnaa", "Bahia Palace", "Koutoubia Mosque"],
  },
  {
    title: "Sahara Desert - Merzouga",
    region: "Eastern Morocco",
    image: "https://assets.codepen.io/3685267/timed-cards-6.jpg",
    desc: "A land of massive, shifting Erg Chebbi dunes. Travel by camel caravan into the horizon, climb giant sand dunes for a breath-taking Sahara sunset, and sleep in nomadic luxury tents under a clear, unpolluted sky.",
    highlights: ["Erg Chebbi Dunes", "Camel Caravan", "Berber Camping"],
  },
  {
    title: "Chefchaouen",
    region: "Rif Mountains",
    image: "https://assets.codepen.io/3685267/timed-cards-2.jpg",
    desc: "The peaceful blue-washed city of northern Morocco. Built into the foothills of the Rif Mountains, this town offers calm plazas, gorgeous photography trails, and a unique blend of Spanish-Moorish heritage.",
    highlights: ["Blue Medina", "Rif Mountain Trails", "Outa el-Hammam"],
  },
  {
    title: "Essaouira Coastline",
    region: "Atlantic Coast",
    image: "https://assets.codepen.io/3685267/timed-cards-5.jpg",
    desc: "A charming, windy coastal town where 18th-century sea walls defend a whitewashed Medina. Renowned for fresh grilled seafood, dynamic kitesurfing points, art galleries, and relaxed coastal cafes.",
    highlights: ["Sqala de la Ville", "Fishing Port", "Mogador Island"],
  },
  {
    title: "High Atlas Mountains",
    region: "Atlas Range",
    image: "https://assets.codepen.io/3685267/timed-cards-1.jpg",
    desc: "Morocco's towering mountain range, featuring snow-capped peaks and terraced valleys. Walk rugged trails through ancient Berber farming settlements and experience world-renowned mountain hospitality.",
    highlights: ["Toubkal Peak", "Imlil Valley", "Berber Villages"],
  },
];
