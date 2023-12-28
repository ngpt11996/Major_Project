const sampleListings = [
    {
        "title": "Cozy Cabin in the Woods",
        "description": "Escape to nature in this charming cabin surrounded by trees.",
        "image": {
            "url": "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "filename": "cabin.jpg"
        },
        "price": 150,
        "location": "Forest Grove",
        "country": "United States",
        "reviews": [],
        "geometry": {
            "type": "Point",
            "coordinates": [
                -123.135,
                45.523
            ]
        },
        "category": "mountains",
        "owner": "658cc34fde6ae5089fffee3a"
    },
    {
        "title": "City View Penthouse",
        "description": "Luxurious penthouse with a stunning view of the city skyline.",
        "image": {
            "url": "https://images.unsplash.com/photo-1542928658-22251e208ac1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "filename": "penthouse.jpg"
        },
        "price": 300,
        "location": "Downtown Metropolis",
        "country": "United States",
        "reviews": [],
        "geometry": {
            "type": "Point",
            "coordinates": [
                -122.419,
                37.774
            ]
        },
        "category": "iconicCities",
        "owner": "658cc34fde6ae5089fffee3a"
    },
    {
        "title": "Rustic Farmhouse Retreat",
        "description": "Experience the tranquility of a rustic farmhouse surrounded by fields.",
        "image": {
            "url": "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "filename": "farmhouse.jpg"
        },
        "price": 120,
        "location": "Country Meadows",
        "country": "Canada",
        "reviews": [],
        "geometry": {
            "type": "Point",
            "coordinates": [
                -106.346,
                56.13
            ]
        },
        "category": "farms",
        "owner": "658cc34fde6ae5089fffee3a"
    },
    {
        "title": "Ski Chalet Getaway",
        "description": "Hit the slopes with this cozy chalet near the ski resort.",
        "image": {
            "url": "https://images.unsplash.com/photo-1520190282873-afe1285c9a2a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "filename": "ski_chalet.jpg"
        },
        "price": 200,
        "location": "Alpine Valley",
        "country": "Switzerland",
        "reviews": [],
        "geometry": {
            "type": "Point",
            "coordinates": [
                7.87,
                46.818
            ]
        },
        "category": "mountains",
        "owner": "658cc34fde6ae5089fffee3a"
    },
    {
        "title": "Beachfront Villa",
        "description": "Relax in style with this luxurious beachfront villa with panoramic ocean views.",
        "image": {
            "url": "https://images.unsplash.com/photo-1613152184920-bc1c4ab7fd1d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "filename": "beach_villa.jpg"
        },
        "price": 500,
        "location": "Tropical Paradise",
        "country": "Maldives",
        "reviews": [],
        "geometry": {
            "type": "Point",
            "coordinates": [
                73.502,
                3.202
            ]
        },
        "category": "amazingPools",
        "owner": "658cd6bffce363622cbc6e12"
    },
    {
        "title": "Historic Castle Retreat",
        "description": "Step back in time with a stay in this charming medieval castle.",
        "image": {
            "url": "https://images.unsplash.com/photo-1509889551393-72ebc60d3ad6?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "filename": "castle.jpg"
        },
        "price": 350,
        "location": "Countryside Kingdom",
        "country": "United Kingdom",
        "reviews": [],
        "geometry": {
            "type": "Point",
            "coordinates": [
                -0.128,
                51.507
            ]
        },
        "category": "castles",
        "owner": "658cd6bffce363622cbc6e12"
    },
    {
        "title": "Mountain Retreat Cabin",
        "description": "Escape to the mountains in this charming cabin with panoramic views.",
        "image": {
            "url": "https://plus.unsplash.com/premium_photo-1661916077489-7dc4be254a50?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "filename": "mountain_cabin.jpg"
        },
        "price": 180,
        "location": "Rocky Peaks",
        "country": "United States",
        "reviews": [],
        "geometry": {
            "type": "Point",
            "coordinates": [
                -106.633,
                39.55
            ]
        },
        "category": "mountains",
        "owner": "658cd6bffce363622cbc6e12"
    },
    {
        "title": "Desert Oasis Getaway",
        "description": "Experience the tranquility of the desert in this luxurious oasis.",
        "image": {
            "url": "https://images.unsplash.com/photo-1531922271975-7b853db6d518?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "filename": "desert_oasis.jpg"
        },
        "price": 250,
        "location": "Sahara Dunes",
        "country": "Morocco",
        "reviews": [],
        "geometry": {
            "type": "Point",
            "coordinates": [
                -7.984,
                23.416
            ]
        },
        "category": "trending",
        "owner": "658cd6bffce363622cbc6e12"
    },
    {
        "title": "Cozy Cottage by the Lake",
        "description": "A charming cottage with a stunning view of the lake.",
        "image": {
            "url": "https://images.unsplash.com/photo-1697299261580-876d107bf090?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "filename": "cottage.jpg"
        },
        "price": 120,
        "location": "Lakeside Haven",
        "country": "Canada",
        "reviews": [],
        "geometry": {
            "type": "Point",
            "coordinates": [
                -106.828,
                56.13
            ]
        },
        "category": "iconicCities",
        "owner": "658cd6bffce363622cbc6e12"
    },
    {
        "title": "Modern Loft in the City",
        "description": "Experience city living in this stylish and modern loft.",
        "image": {
            "url": "https://images.unsplash.com/photo-1459535653751-d571815e906b?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "filename": "loft.jpg"
        },
        "price": 180,
        "location": "Downtown Metropolis",
        "country": "United States",
        "reviews": [],
        "geometry": {
            "type": "Point",
            "coordinates": [
                -122.419,
                37.774
            ]
        },
        "category": "rooms",
        "owner": "658cd6bffce363622cbc6e12"
    },
    {
        "title": "Sunny Beach House",
        "description": "Relax by the beach in this sunny and spacious beach house.",
        "image": {
            "url": "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "filename": "beach_house.jpg"
        },
        "price": 220,
        "location": "Sunny Shores",
        "country": "Australia",
        "reviews": [],
        "geometry": {
            "type": "Point",
            "coordinates": [
                151.209,
                -33.868
            ]
        },
        "category": "amazingPools",
        "owner": "658cd6bffce363622cbc6e12"
    },
    {
        "title": "Rustic Cabin Retreat",
        "description": "Experience the charm of a rustic cabin surrounded by nature.",
        "image": {
            "url": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "filename": "rustic_cabin.jpg"
        },
        "price": 150,
        "location": "Woodland Haven",
        "country": "United States",
        "reviews": [],
        "geometry": {
            "type": "Point",
            "coordinates": [
                -118.243,
                34.052
            ]
        },
        "category": "trending",
        "owner": "658cd6bffce363622cbc6e12"
    },
    {
        "title": "Downtown Penthouse",
        "description": "Live in luxury with this penthouse in the heart of the city.",
        "image": {
            "url": "https://plus.unsplash.com/premium_photo-1661913412680-c274b6fea096?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "filename": "penthouse2.jpg"
        },
        "price": 300,
        "location": "City Center",
        "country": "Canada",
        "reviews": [],
        "geometry": {
            "type": "Point",
            "coordinates": [
                -123.121,
                49.282
            ]
        },
        "category": "iconicCities",
        "owner": "658cc34fde6ae5089fffee3a"
    },
    {
        "title": "Hillside Villa",
        "description": "Enjoy breathtaking views from this hillside villa overlooking the valley.",
        "image": {
            "url": "https://images.unsplash.com/photo-1559060538-01c384567b47?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "filename": "hillside_villa.jpg"
        },
        "price": 250,
        "location": "Valley View",
        "country": "Italy",
        "reviews": [],
        "geometry": {
            "type": "Point",
            "coordinates": [
                12.496,
                41.902
            ]
        },
        "category": "rooms",
        "owner": "658cc34fde6ae5089fffee3a"
    },
    {
        "title": "Arctic Igloo Adventure",
        "description": "Experience the magic of the Arctic in a cozy igloo.",
        "image": {
          "url": "https://plus.unsplash.com/premium_photo-1661883184822-5fb3e235367d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "filename": "arctic_igloo.jpg"
        },
        "price": 200,
        "location": "Frozen Tundra",
        "country": "Canada",
        "reviews": [],
        "geometry": {
          "type": "Point",
          "coordinates": [-97.743, 64.825]
        },
        "category": "arctic",
        "owner": "658cc34fde6ae5089fffee3a"
      },
      {
        "title": "Camping under the Northern Lights",
        "description": "Pitch your tent and witness the beauty of the Northern Lights.",
        "image": {
          "url": "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "filename": "northern_lights_camping.jpg"
        },
        "price": 100,
        "location": "Wilderness Campsite",
        "country": "Norway",
        "reviews": [],
        "geometry": {
          "type": "Point",
          "coordinates": [8.468, 60.472]
        },
        "category": "camping",
        "owner": "658cc34fde6ae5089fffee3a"
      }
];
  
module.exports = { data: sampleListings };