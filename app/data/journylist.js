export const journylist = {
    DharmasthalaToGokarna: {
      routes: [
        {
          routeID: 1,
          origin: "Dharmasthala",
          destination: "Gokarna",
          distance: "250-270 kilometers",
          duration: "6-7 hours"
        }
      ],
      transportationModes: [
        {
          modeID: 1,
          mode: "Car",
          description: "Driving is the most convenient option, allowing flexibility of stops along the way.",
          examplePhoto: "car.jpg"
        },
        {
          modeID: 2,
          mode: "Bus",
          description: "Regular bus services available, offering an affordable option for travelers.",
          examplePhoto: "bus.jpg"
        },
        {
          modeID: 3,
          mode: "Train",
          description: "No direct train route. Take a train from Mangalore to Gokarna Road Railway Station and proceed to Gokarna by road.",
          examplePhoto: "train.jpg"
        },
        {
          modeID: 4,
          mode: "Air",
          description: "Nearest airport: Mangalore International Airport. Hire a taxi or use public transportation to reach Gokarna.",
          examplePhoto: "airplane.jpg"
        }
      ],
      highlights: [
        {
          highlightID: 1,
          name: "Murudeshwar",
          description: "Famous for Murudeshwar Temple with a towering Lord Shiva statue and scenic beach.",
          examplePhoto: "murudeshwar.jpg",
          nearbyPlaces: ["Murudeshwar Beach"],
          destinationPlaces: [
            {
              placeName: "Murudeshwar Temple",
              description: "The temple complex houses a towering Lord Shiva statue overlooking the Arabian Sea."
            },
            {
              placeName: "Murudeshwar Beach",
              description: "A serene beach with golden sands, ideal for relaxation and water sports."
            }
          ]
        },
        {
          highlightID: 2,
          name: "Udupi",
          description: "Explore Sri Krishna Temple, indulge in Udupi cuisine, and relax at Malpe Beach.",
          examplePhoto: "udupi.jpg",
          nearbyPlaces: ["Malpe Beach"],
          destinationPlaces: [
            {
              placeName: "Sri Krishna Temple",
              description: "One of the holiest sites for Vaishnavites, dedicated to Lord Krishna."
            },
            {
              placeName: "Malpe Beach",
              description: "A picturesque beach known for its golden sands and clear blue waters."
            }
          ]
        },
        {
          highlightID: 3,
          name: "Karwar",
          description: "Enjoy serene beaches like Karwar Beach and Devbagh Beach, plus attractions like Kurumgad Island and Sadashivgad Hill Fort.",
          examplePhoto: "karwar.jpg",
          nearbyPlaces: ["Karwar Beach", "Devbagh Beach", "Kurumgad Island", "Sadashivgad Hill Fort"],
          destinationPlaces: [
            {
              placeName: "Karwar Beach",
              description: "A tranquil beach surrounded by palm trees, perfect for swimming and sunbathing."
            },
            {
              placeName: "Devbagh Beach",
              description: "An idyllic beach offering breathtaking sunset views and water sports activities."
            },
            {
              placeName: "Kurumgad Island",
              description: "A small, uninhabited island known for its pristine beaches and coral reefs, accessible by boat."
            },
            {
              placeName: "Sadashivgad Hill Fort",
              description: "An ancient hill fort offering panoramic views of the Arabian Sea and the surrounding landscape."
            }
          ]
        },
        {
          highlightID: 4,
          name: "Gokarna",
          description: "A pilgrimage town known for its beautiful beaches and ancient temples.",
          examplePhoto: "gokarna.jpg",
          nearbyPlaces: ["Om Beach", "Kudle Beach", "Gokarna Beach", "Mahabaleshwar Temple"],
          destinationPlaces: [
            {
              placeName: "Om Beach",
              description: "Named for its distinctive shape resembling the sacred Hindu symbol 'Om'. Popular for beach activities and sunset views."
            },
            {
              placeName: "Kudle Beach",
              description: "A scenic beach surrounded by hills, offering a tranquil atmosphere and opportunities for swimming and relaxation."
            },
            {
              placeName: "Gokarna Beach",
              description: "A pristine beach known for its golden sands and clear blue waters, popular among both tourists and pilgrims."
            },
            {
              placeName: "Mahabaleshwar Temple",
              description: "An ancient temple dedicated to Lord Shiva, housing the 'Atmalinga'. A major pilgrimage site for Hindus."
            }
          ]
        }
      ],
      tips: [
        {
          tipID: 1,
          tip: "Plan Ahead",
          description: "Plan your itinerary, book accommodations, and arrange transportation in advance."
        },
        {
          tipID: 2,
          tip: "Check Weather",
          description: "Be mindful of weather conditions, especially during the monsoon season."
        },
        {
          tipID: 3,
          tip: "Local Cuisine",
          description: "Don't miss out on trying local delicacies and seafood dishes along the way."
        },
        {
          tipID: 4,
          tip: "Safety",
          description: "Drive safely, follow traffic rules, and stay informed about road conditions."
        }
      ]
    },
  
    BengaluruToHampi: {
        routes: [
          {
            routeID: 2,
            origin: "Bengaluru",
            destination: "Hampi",
            distance: "330-350 kilometers",
            duration: "6-8 hours"
          }
        ],
        transportationModes: [
          {
            modeID: 1,
            mode: "Car",
            description: "Driving is the most convenient option, allowing flexibility of stops along the way.",
            examplePhoto: "car.jpg"
          },
          {
            modeID: 2,
            mode: "Bus",
            description: "Regular bus services available, offering an affordable option for travelers.",
            examplePhoto: "bus.jpg"
          },
          {
            modeID: 3,
            mode: "Train",
            description: "No direct train route. Nearest railway station: Hospet Junction. From there, take a bus or taxi to Hampi.",
            examplePhoto: "train.jpg"
          },
          {
            modeID: 4,
            mode: "Air",
            description: "The nearest airport is Hubli Airport. From there, you can hire a taxi or use public transportation to reach Hampi.",
            examplePhoto: "airplane.jpg"
          }
        ],
        highlights: [
          {
            highlightID: 1,
            name: "Hampi Ruins",
            description: "Explore the UNESCO World Heritage Site of Hampi, known for its ancient ruins and temples.",
            examplePhoto: "hampi.jpg",
            nearbyPlaces: ["Vittala Temple", "Virupaksha Temple", "Hemakuta Hill"],
            destinationPlaces: [
              {
                placeName: "Vittala Temple",
                description: "Famous for its iconic stone chariot and musical pillars, showcasing exceptional craftsmanship."
              },
              {
                placeName: "Virupaksha Temple",
                description: "One of the oldest functioning temples in India, dedicated to Lord Shiva."
              },
              {
                placeName: "Hemakuta Hill",
                description: "Offers panoramic views of the Hampi ruins and is a popular spot for sunrise and sunset."
              }
            ]
          },
          {
            highlightID: 2,
            name: "Tungabhadra River",
            description: "Take a coracle ride on the Tungabhadra River and admire the scenic beauty of Hampi from the water.",
            examplePhoto: "tungabhadra.jpg",
            nearbyPlaces: [],
            destinationPlaces: []
          },
          {
            highlightID: 3,
            name: "Anegundi",
            description: "Explore the historic village of Anegundi, believed to be the ancestral kingdom of Lord Hanuman.",
            examplePhoto: "anegundi.jpg",
            nearbyPlaces: ["Anjanadri Hill", "Pampa Sarovar"],
            destinationPlaces: [
              {
                placeName: "Anjanadri Hill",
                description: "According to Hindu mythology, it is the birthplace of Lord Hanuman. Visitors can climb up to the temple for panoramic views."
              },
              {
                placeName: "Pampa Sarovar",
                description: "A sacred lake where devotees take a holy dip before visiting nearby temples."
              }
            ]
          }
        ],
        tips: [
          {
            tipID: 1,
            tip: "Plan Your Visit",
            description: "Research and plan your itinerary in advance to make the most of your trip to Hampi."
          },
          {
            tipID: 2,
            tip: "Stay Hydrated",
            description: "Carry plenty of water, especially if you plan to explore the ruins on foot."
          },
          {
            tipID: 3,
            tip: "Respect the Heritage",
            description: "Follow all rules and regulations while visiting heritage sites to preserve their integrity."
          }
        ]
      },      
      HubliToDharmasthala: {
        routes: [
          {
            routeID: 3,
            origin: "Hubli",
            destination: "Dharmasthala",
            distance: "350-370 kilometers",
            duration: "7-8 hours"
          }
        ],
        transportationModes: [
          {
            modeID: 1,
            mode: "Car",
            description: "Driving is the most convenient option, allowing flexibility of stops along the way.",
            examplePhoto: "car.jpg"
          },
          {
            modeID: 2,
            mode: "Bus",
            description: "Regular bus services available, offering an affordable option for travelers.",
            examplePhoto: "bus.jpg"
          },
          {
            modeID: 3,
            mode: "Train",
            description: "No direct train route. Nearest railway station: Mangalore Junction. From there, take a bus or taxi to Dharmasthala.",
            examplePhoto: "train.jpg"
          }
        ],
        highlights: [
          {
            highlightID: 1,
            name: "Kukke Subramanya Temple",
            description: "A famous Hindu temple dedicated to Lord Subramanya, known for its religious significance and architectural beauty.",
            examplePhoto: "kukke.jpg",
            nearbyPlaces: ["Kumaradhara River", "Biladwara Cave"],
            destinationPlaces: [
              {
                placeName: "Kukke Subramanya Temple",
                description: "One of the most important pilgrimage destinations in Karnataka, attracting devotees from all over the country."
              },
              {
                placeName: "Kumaradhara River",
                description: "A sacred river believed to have medicinal properties, where devotees take a holy dip."
              },
              {
                placeName: "Biladwara Cave",
                description: "A cave temple dedicated to Lord Subramanya, located on the banks of the Kumaradhara River."
              }
            ]
          },
          {
            highlightID: 2,
            name: "Belur and Halebidu Temples",
            description: "Visit the ancient Hoysala temples of Belur and Halebidu, known for their exquisite architecture and intricate carvings.",
            examplePhoto: "belur_halebidu.jpg",
            nearbyPlaces: [],
            destinationPlaces: [
              {
                placeName: "Chennakeshava Temple, Belur",
                description: "Dedicated to Lord Vishnu, this temple is renowned for its stunning architecture and intricate sculptures."
              },
              {
                placeName: "Hoysaleswara Temple, Halebidu",
                description: "Built in the 12th century, this temple is famous for its detailed carvings depicting Hindu mythology."
              }
            ]
          },
          {
            highlightID: 3,
            name: "Dharmasthala Manjunatha Temple",
            description: "Visit the famous Dharmasthala Manjunatha Temple, dedicated to Lord Shiva, and participate in the daily rituals.",
            examplePhoto: "dharmasthala.jpg",
            nearbyPlaces: [],
            destinationPlaces: [
              {
                placeName: "Dharmasthala Manjunatha Temple",
                description: "A major pilgrimage center, known for its inclusive practices and charitable activities."
              }
            ]
          }
        ],
        tips: [
          {
            tipID: 1,
            tip: "Plan Ahead",
            description: "Plan your itinerary, book accommodations, and arrange transportation in advance."
          },
          {
            tipID: 2,
            tip: "Respect Religious Customs",
            description: "When visiting temples, dress modestly and follow the customs and traditions observed by the locals."
          },
          {
            tipID: 3,
            tip: "Carry Sufficient Cash",
            description: "Some remote areas may have limited access to ATMs, so it's advisable to carry enough cash for your journey."
          }
        ]
      }

  };
  