const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Relax in this cozy cottage by the beach. Enjoy ocean views and fresh air.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=60",
    price: 120,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Apartment in City Center",
    description:
      "Stay in the heart of the city with modern amenities and great views.",
    image:
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=800&q=60",
    price: 90,
    location: "New York",
    country: "United States",
  },
  {
    title: "Rustic Mountain Cabin",
    description:
      "A peaceful retreat in the mountains with hiking trails nearby.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=60",
    price: 150,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Luxury Villa with Private Pool",
    description:
      "Enjoy a luxurious stay with a private pool and stunning views.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=60",
    price: 500,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Charming Studio Flat",
    description:
      "Perfect for solo travelers or couples. Close to public transport.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=60",
    price: 70,
    location: "Paris",
    country: "France",
  },
  {
    title: "Spacious Country House",
    description:
      "Escape to the countryside in this spacious house surrounded by nature.",
    image:
      "https://images.unsplash.com/photo-1600585153856-6232b69a1b1f?w=800&q=60",
    price: 200,
    location: "Tuscany",
    country: "Italy",
  },
  {
    title: "Beach House Getaway",
    description:
      "A beautiful beach house with sea views, perfect for family vacations.",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=800&q=60",
    price: 300,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Downtown Loft",
    description:
      "Trendy loft in the downtown area, close to nightlife and restaurants.",
    image:
      "https://images.unsplash.com/photo-1527030280862-64139fba04ca?w=800&q=60",
    price: 110,
    location: "Berlin",
    country: "Germany",
  },
  {
    title: "Ski Resort Condo",
    description:
      "Condo located right next to the ski slopes, with hot tub access.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=60",
    price: 180,
    location: "Whistler",
    country: "Canada",
  },
  {
    title: "Historic Castle Room",
    description:
      "Stay in a room within a historic castle, with guided tours included.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=60",
    price: 250,
    location: "Edinburgh",
    country: "Scotland",
  },
  {
    title: "Tropical Bungalow",
    description:
      "Relax in a tropical bungalow surrounded by palm trees and beaches.",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=60",
    price: 220,
    location: "Honolulu",
    country: "United States",
  },
  {
    title: "Igloo Experience",
    description:
      "Experience the Arctic in a cozy glass igloo under the northern lights.",
    image:
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d1?w=800&q=60",
    price: 400,
    location: "Lapland",
    country: "Finland",
  },
  {
    title: "Desert Camp",
    description:
      "Stay in a luxury tent in the desert and enjoy starry night skies.",
    image:
      "https://images.unsplash.com/photo-1524492449090-1a065f3a1f2a?w=800&q=60",
    price: 180,
    location: "Sahara",
    country: "Morocco",
  },
  {
    title: "Houseboat Stay",
    description:
      "Enjoy the backwaters from the comfort of a traditional houseboat.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=60",
    price: 140,
    location: "Kerala",
    country: "India",
  },
  {
    title: "Treehouse Adventure",
    description:
      "Stay high up in a treehouse and reconnect with nature.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=60",
    price: 160,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Japanese Ryokan",
    description:
      "Traditional Japanese inn with tatami mats and hot springs.",
    image:
      "https://images.unsplash.com/photo-1544986581-efac024faf62?w=800&q=60",
    price: 300,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Greek Island Villa",
    description:
      "Whitewashed villa with stunning views of the Aegean Sea.",
    image:
      "https://images.unsplash.com/photo-1505738455-1f52b8b90329?w=800&q=60",
    price: 350,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Rainforest Lodge",
    description:
      "Eco-friendly lodge in the heart of the Amazon rainforest.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=60",
    price: 270,
    location: "Amazon",
    country: "Brazil",
  },
  {
    title: "Countryside Cottage",
    description:
      "A peaceful retreat in the English countryside.",
    image:
      "https://images.unsplash.com/photo-1600585154254-2e4b48a0f9b3?w=800&q=60",
    price: 130,
    location: "Cotswolds",
    country: "England",
  },
  {
    title: "Modern Lake House",
    description:
      "Beautiful lake house with modern design and kayaking facilities.",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=60",
    price: 280,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Alpine Chalet",
    description:
      "Cozy chalet in the Alps with ski-in/ski-out access and mountain views.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=60",
    price: 500,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Seaside Villa",
    description:
      "Luxury villa with private beach access and ocean views.",
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=800&q=60",
    price: 750,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Safari Tent",
    description:
      "Tent accommodation in the African savannah for a true safari experience.",
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&q=60",
    price: 400,
    location: "Maasai Mara",
    country: "Kenya",
  },
  {
    title: "Floating Villa",
    description:
      "Overwater villa with direct access to turquoise waters.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=60",
    price: 1200,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Countryside Farmhouse",
    description:
      "Charming farmhouse surrounded by fields and mountains.",
    image:
      "https://images.unsplash.com/photo-1560185127-6a6d9e1c9ed5?w=800&q=60",
    price: 200,
    location: "Tuscany",
    country: "Italy",
  },
  {
    title: "Urban Penthouse",
    description:
      "Stylish penthouse in the heart of the city with skyline views.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=60",
    price: 900,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Lodge",
    description:
      "Lodge in the mountains with panoramic views and hiking trails nearby.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=60",
    price: 450,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Desert Villa",
    description:
      "Luxury villa in the desert with pool and sunset views.",
    image:
      "https://images.unsplash.com/photo-1549187774-b4e9a3e1d04f?w=800&q=60",
    price: 600,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Historic Mansion",
    description:
      "Stay in a historic mansion with elegant architecture and gardens.",
    image:
      "https://images.unsplash.com/photo-1522098543979-ffc7f79f9aa3?w=800&q=60",
    price: 1000,
    location: "Paris",
    country: "France",
  },
  {
    title: "Jungle Retreat",
    description:
      "Eco-lodge in the jungle surrounded by wildlife and nature trails.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=60",
    price: 350,
    location: "Costa Rica",
    country: "Costa Rica",
  },


];

module.exports = { data: sampleListings };