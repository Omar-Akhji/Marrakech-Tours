export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "souk-survival-tips",
    title: "10 Souk Survival Tips for First-Time Marrakech Travelers",
    date: "June 25, 2026",
    author: "Omar Bennani",
    readTime: "5 min read",
    category: "Guides",
    image: "https://assets.codepen.io/3685267/timed-cards-3.jpg",
    excerpt:
      "Marrakech's historic souks are a dream for shoppers, but they can be overwhelming. Learn how to navigate the narrow alleys, haggle like a local, and identify real spices.",
    content: `
      <p class="lead">Marrakech's historic souks are a dream for shoppers, but they can be overwhelming. Learn how to navigate the narrow alleys, haggle like a local, and identify real spices.</p>
      
      <h2>1. Know Your Way, or Accept the Maze</h2>
      <p>The Medina is designed like a labyrinth. Getting lost isn't a mistake; it's part of the itinerary. Download offline maps like Google Maps or Maps.me beforehand, but don't hesitate to enjoy the random alleys you find.</p>
      
      <h2>2. The Art of Haggling (Derb Negotiation)</h2>
      <p>Bargaining is a social custom. Start by offering 40-50% of the vendor's initial price, then negotiate slowly upwards. Always smile, keep it light, and be ready to walk away if the price doesn't suit you.</p>
      
      <h2>3. Stay Polite but Assertive</h2>
      <p>You will be invited into shops constantly. A polite "La, Shukran" (No, thank you) with a smile and a hand over your heart is respected and will keep vendors from following you.</p>

      <h2>4. Bring Cash (Dirhams)</h2>
      <p>Credit cards are rarely accepted inside the small souk stalls. Carry small denomination banknotes (10, 20, 50 Dirhams) for easy transactions and tips.</p>
    `,
  },
  {
    slug: "sahara-desert-camping",
    title: "Sleeping in the Sahara: What to Expect in a Desert Camp",
    date: "June 18, 2026",
    author: "Yasmine Mansouri",
    readTime: "7 min read",
    category: "Adventure",
    image: "https://assets.codepen.io/3685267/timed-cards-6.jpg",
    excerpt:
      "A trek into the dunes of Erg Chebbi is an essential Moroccan experience. Here is everything you need to know about luxury camps, desert weather, camel riding, and starry nights.",
    content: `
      <p class="lead">A trek into the dunes of Erg Chebbi is an essential Moroccan experience. Here is everything you need to know about luxury camps, desert weather, camel riding, and starry nights.</p>
      
      <h2>1. Erg Chebbi vs Erg Chigaga</h2>
      <p>Erg Chebbi (near Merzouga) features towering, easily accessible orange dunes with excellent camp facilities. Erg Chigaga is more remote and wild, requiring a 4x4 ride to reach deep desert isolation.</p>
      
      <h2>2. The Desert Camp Setup</h2>
      <p>Modern luxury camps feature private bathrooms, running hot water, and king-size beds inside heavy canvas tents. Traditional camps offer simpler shared setups, offering a rustic experience under the stars.</p>
      
      <h2>3. Temperatures Fluctuations</h2>
      <p>The desert gets surprisingly cold at night. Even in hot summer months, temperatures drop rapidly once the sun goes down. Pack warm layers, socks, and a fleece jacket for campfire storytelling.</p>
    `,
  },
  {
    slug: "chefchaouen-photography-guide",
    title: "Exploring the Blue Pearl: A Chefchaouen Photography Guide",
    date: "June 12, 2026",
    author: "Karim Alaoui",
    readTime: "4 min read",
    category: "Photography",
    image: "https://assets.codepen.io/3685267/timed-cards-2.jpg",
    excerpt:
      "Chefchaouen is a photographer's paradise. We share the exact coordinates of the most iconic blue staircases, best sunrise views, and tips for photographing locals respectfully.",
    content: `
      <p class="lead">Chefchaouen is a photographer's paradise. We share the exact coordinates of the most iconic blue staircases, best sunrise views, and tips for photographing locals respectfully.</p>
      
      <h2>1. Catch the Golden Hour</h2>
      <p>The best lighting inside the blue alleys occurs in the early morning (7:00 AM - 9:00 AM) before the sun gets too harsh. The alleys are also completely empty at this hour, allowing clean landscape shots.</p>
      
      <h2>2. Respecting Locals</h2>
      <p>Always ask permission before taking photos of local shopkeepers or children. A simple "S'il vous plaît?" or "Moulana?" with a camera gesture goes a long way. Many will happily agree or politely decline.</p>
      
      <h2>3. Iconic Blue Alleys</h2>
      <p>While the whole Medina is blue, Calle Sidi Buchuka and El Asri are famous for their steps lined with colored flower pots. Wander off the main shopping streets to discover hidden arches.</p>
    `,
  },
  {
    slug: "moroccan-mint-tea-etiquette",
    title: "Moroccan Mint Tea Etiquette: More Than Just a Drink",
    date: "June 05, 2026",
    author: "Fatima Zahra",
    readTime: "3 min read",
    category: "Culture",
    image: "https://assets.codepen.io/3685267/timed-cards-1.jpg",
    excerpt:
      "Known as 'Berber Whiskey', Moroccan mint tea is a symbol of hospitality. Discover the history behind the brew, the pouring technique, and how to accept tea gracefully.",
    content: `
      <p class="lead">Known as 'Berber Whiskey', Moroccan mint tea is a symbol of hospitality. Discover the history behind the brew, the pouring technique, and how to accept tea gracefully.</p>
      
      <h2>1. The Sign of Hospitality</h2>
      <p>If you enter a shop, home, or riad, you will be offered hot tea. Refusing it is considered impolite. Always accept at least one glass to honor your host's hospitality.</p>
      
      <h2>2. The High Pour</h2>
      <p>Tea is poured from a height of up to a meter. This is not just for show; the high pour aerates the hot tea, creating a beautiful foam (regga) at the top of the glass, and cools it down to drinking temperature.</p>
      
      <h2>3. Sweetness & Mint</h2>
      <p>Moroccan tea is traditionally brewed with green gunpowder tea leaves, large chunks of sugar, and fresh spearmint leaves. It is served hot and sweet, ideal for hydration under the sun.</p>
    `,
  },
];
