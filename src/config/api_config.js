export const API_KEY = '6fc1c6073b6158d7fcc05774728210d6'
export const BASE_URL = "https://api.themoviedb.org/3/"
export const MOVIES_URL = BASE_URL + `movie/{CATEGORY}?api_key=${API_KEY}`
export const TV_SHOWS_URL = BASE_URL + `tv/{CATEGORY}?api_key=${API_KEY}`
export const POSTER_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300/"
export const SEARCH_URL = BASE_URL + `search/{CATEGORY}?api_key=${API_KEY}&language=en-US&query={SEARCH_TEXT}&page=1&include_adult=false`

// export const MOVIES = [
//          {
//            popularity: 439.564,
//            vote_count: 4901,
//            video: false,
//            poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
//            id: 475557,
//            adult: false,
//            backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
//            original_language: "en",
//            original_title: "Joker",
//            genre_ids: [80, 18, 53],
//            title: "Joker",
//            vote_average: 8.5,
//            overview:
//              "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
//            release_date: "2019-10-04"
//          },
//          {
//            popularity: 326.936,
//            vote_count: 349,
//            video: false,
//            poster_path: "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
//            id: 290859,
//            adult: false,
//            backdrop_path: "/a6cDxdwaQIFjSkXf7uskg78ZyTq.jpg",
//            original_language: "en",
//            original_title: "Terminator: Dark Fate",
//            genre_ids: [28, 878],
//            title: "Terminator: Dark Fate",
//            vote_average: 6.6,
//            overview:
//              "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
//            release_date: "2019-11-01"
//          },
//          {
//            popularity: 186.869,
//            vote_count: 702,
//            video: false,
//            poster_path: "/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg",
//            id: 420809,
//            adult: false,
//            backdrop_path: "/skvI4rYFrKXS73BJxWGH54Omlvv.jpg",
//            original_language: "en",
//            original_title: "Maleficent: Mistress of Evil",
//            genre_ids: [12, 14, 10751],
//            title: "Maleficent: Mistress of Evil",
//            vote_average: 7.2,
//            overview:
//              "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
//            release_date: "2019-10-18"
//          },
//          {
//            popularity: 135.321,
//            vote_count: 72,
//            video: false,
//            poster_path: "/4E2lyUGLEr3yH4q6kJxPkQUhX7n.jpg",
//            id: 568012,
//            adult: false,
//            backdrop_path: "/iGnCzXEx0cFlUbpyAMeHwHWhPhx.jpg",
//            original_language: "ja",
//            original_title: "ワンピーススタンピード",
//            genre_ids: [28, 12, 16],
//            title: "One Piece: Stampede",
//            vote_average: 7.5,
//            overview:
//              "One Piece: Stampede is a stand-alone film that celebrates the anime's 20th Anniversary and takes place outside the canon of the \"One Piece\" TV series. Monkey D. Luffy and his Straw Hat pirate crew are invited to a massive Pirate Festival that brings many of the most iconic characters from throughout the franchise to participate in competition with the Straw Hats to find Roger's treasure. It also pits the Straw Hats against a new enemy named Bullet, a former member of Roger's crew.",
//            release_date: "2019-10-24"
//          },
//          {
//            popularity: 97.18,
//            vote_count: 328,
//            video: false,
//            poster_path: "/tximyCXMEnWIIyOy9STkOduUprG.jpg",
//            id: 521777,
//            adult: false,
//            backdrop_path: "/zIZv4pPJRg3YTnWWuotwXnYu1fM.jpg",
//            original_language: "en",
//            original_title: "Good Boys",
//            genre_ids: [35],
//            title: "Good Boys",
//            vote_average: 6.6,
//            overview:
//              "A group of young boys on the cusp of becoming teenagers embark on an epic quest to fix their broken drone before their parents get home.",
//            release_date: "2019-08-16"
//          },
//          {
//            popularity: 111.413,
//            vote_count: 161,
//            video: false,
//            poster_path: "/p69QzIBbN06aTYqRRiCOY1emNBh.jpg",
//            id: 501170,
//            adult: false,
//            backdrop_path: "/1nm0sk8UUx9jHCTHuMKe2jkt4Pn.jpg",
//            original_language: "en",
//            original_title: "Doctor Sleep",
//            genre_ids: [27],
//            title: "Doctor Sleep",
//            vote_average: 6.9,
//            overview:
//              'A traumatized, alcoholic Dan Torrance meets Abra, a kid who also has the ability to "shine." He tries to protect her from the True Knot, a cult whose goal is to feed off people like them in order to remain immortal.',
//            release_date: "2019-11-08"
//          },
//          {
//            popularity: 78.038,
//            vote_count: 282,
//            video: false,
//            poster_path: "/pIcV8XXIIvJCbtPoxF9qHMKdRr2.jpg",
//            id: 338967,
//            adult: false,
//            backdrop_path: "/jCCdt0e8Xe9ttvevD4S3TSMNdH.jpg",
//            original_language: "en",
//            original_title: "Zombieland: Double Tap",
//            genre_ids: [28, 35, 27],
//            title: "Zombieland: Double Tap",
//            vote_average: 7.4,
//            overview:
//              "Columbus, Tallahassee, Wichita, and Little Rock move to the American heartland as they face off against evolved zombies, fellow survivors, and the growing pains of the snarky makeshift family.",
//            release_date: "2019-10-18"
//          },
//          {
//            popularity: 86.634,
//            vote_count: 1309,
//            video: false,
//            poster_path: "/ePXuKdXZuJx8hHMNr2yM4jY2L7Z.jpg",
//            id: 559969,
//            adult: false,
//            backdrop_path: "/ijiE9WoGSwSzM16zTxvUneJ8RXc.jpg",
//            original_language: "en",
//            original_title: "El Camino: A Breaking Bad Movie",
//            genre_ids: [80, 18, 53],
//            title: "El Camino: A Breaking Bad Movie",
//            vote_average: 7.1,
//            overview:
//              "In the wake of his dramatic escape from captivity, Jesse Pinkman must come to terms with his past in order to forge some kind of future.",
//            release_date: "2019-10-11"
//          },
//          {
//            popularity: 97.537,
//            vote_count: 164,
//            video: false,
//            poster_path: "/g4z7mDmJmx23vsVg6XNWcnXb6gc.jpg",
//            id: 480105,
//            adult: false,
//            backdrop_path: "/3uG3aOhEzFCjcQulsJQiAzLSrw8.jpg",
//            original_language: "en",
//            original_title: "47 Meters Down: Uncaged",
//            genre_ids: [12, 27, 53],
//            title: "47 Meters Down: Uncaged",
//            vote_average: 5.1,
//            overview:
//              "A group of backpackers diving in a ruined underwater city discover that they have stumbled into the territory of the ocean's deadliest shark species.",
//            release_date: "2019-08-16"
//          },
//          {
//            popularity: 77.57,
//            vote_count: 482,
//            video: false,
//            poster_path: "/uTALxjQU8e1lhmNjP9nnJ3t2pRU.jpg",
//            id: 453405,
//            adult: false,
//            backdrop_path: "/c3F4P2oauA7IQmy4hM0OmRt2W7d.jpg",
//            original_language: "en",
//            original_title: "Gemini Man",
//            genre_ids: [28, 53],
//            title: "Gemini Man",
//            vote_average: 5.7,
//            overview:
//              "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
//            release_date: "2019-10-11"
//          },
//          {
//            popularity: 101.352,
//            vote_count: 278,
//            video: false,
//            poster_path: "/8u0QBGUbZcBW59VEAdmeFl9g98N.jpg",
//            id: 504949,
//            adult: false,
//            backdrop_path: "/r0AWsZ9dBvC2No3kND9nxv3iRbb.jpg",
//            original_language: "en",
//            original_title: "The King",
//            genre_ids: [18, 36, 10752],
//            title: "The King",
//            vote_average: 7.4,
//            overview:
//              "England, 15th century. Hal, a capricious prince who lives among the populace far from court, is forced by circumstances to reluctantly accept the throne and become Henry V.",
//            release_date: "2019-10-11"
//          },
//          {
//            popularity: 65.706,
//            vote_count: 540,
//            video: false,
//            poster_path: "/q5298SICFzqMcKtQoBktk8p6FH.jpg",
//            id: 417384,
//            adult: false,
//            backdrop_path: "/qBI3Spq93lNxGzecdGpbwV5lOvU.jpg",
//            original_language: "en",
//            original_title: "Scary Stories to Tell in the Dark",
//            genre_ids: [27, 53],
//            title: "Scary Stories to Tell in the Dark",
//            vote_average: 6.3,
//            overview:
//              "Mill Valley, Pennsylvania, Halloween night, 1968. After playing a joke on a school bully, Sarah and her friends decide to sneak into a supposedly haunted house that once belonged to the powerful Bellows family, unleashing dark forces that they will be unable to control.",
//            release_date: "2019-08-09"
//          },
//          {
//            popularity: 67.088,
//            vote_count: 3128,
//            video: false,
//            poster_path: "/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
//            id: 458156,
//            adult: false,
//            backdrop_path: "/stemLQMLDrlpfIlZ5OjllOPT8QX.jpg",
//            original_language: "en",
//            original_title: "John Wick: Chapter 3 - Parabellum",
//            genre_ids: [28, 80, 53],
//            title: "John Wick: Chapter 3 - Parabellum",
//            vote_average: 7.1,
//            overview:
//              "Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.",
//            release_date: "2019-05-17"
//          },
//          {
//            popularity: 70.145,
//            vote_count: 1867,
//            video: false,
//            poster_path: "/zfE0R94v1E8cuKAerbskfD3VfUt.jpg",
//            id: 474350,
//            adult: false,
//            backdrop_path: "/8moTOzunF7p40oR5XhlDvJckOSW.jpg",
//            original_language: "en",
//            original_title: "It Chapter Two",
//            genre_ids: [27],
//            title: "It Chapter Two",
//            vote_average: 6.9,
//            overview:
//              "27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
//            release_date: "2019-09-06"
//          },
//          {
//            popularity: 51.831,
//            vote_count: 154,
//            video: false,
//            poster_path: "/uaXNjRkDdjfxfVuKHo25wkA6CiA.jpg",
//            id: 481084,
//            adult: false,
//            backdrop_path: "/ur4NTeFGZmQ6Hz5uEkAMgPI3WRg.jpg",
//            original_language: "en",
//            original_title: "The Addams Family",
//            genre_ids: [16, 35, 14, 10751],
//            title: "The Addams Family",
//            vote_average: 5.9,
//            overview:
//              "The Addams family's lives begin to unravel when they face-off against a treacherous, greedy crafty reality-TV host while also preparing for their extended family to arrive for a major celebration.",
//            release_date: "2019-10-11"
//          },
//          {
//            popularity: 52.059,
//            vote_count: 0,
//            video: false,
//            poster_path: "/zHQFqG0e5p9Fwhv5v6XIP9fLtYk.jpg",
//            id: 330457,
//            adult: false,
//            backdrop_path: "/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg",
//            original_language: "en",
//            original_title: "Frozen II",
//            genre_ids: [12, 16, 35, 14, 10402, 10751],
//            title: "Frozen II",
//            vote_average: 0,
//            overview:
//              "Elsa, Anna, Kristoff and Olaf are going far in the forest to know the truth about an ancient mystery of their kingdom.",
//            release_date: "2019-11-22"
//          },
//          {
//            popularity: 57.801,
//            vote_count: 2,
//            video: false,
//            poster_path: "/xL1yNzwGSXfassYpt13hXADpz6R.jpg",
//            id: 522162,
//            adult: false,
//            backdrop_path: "/1ZSjrBUHP2jm1QlQEyLGufL289q.jpg",
//            original_language: "en",
//            original_title: "Midway",
//            genre_ids: [28, 18, 36, 10752],
//            title: "Midway",
//            vote_average: 5,
//            overview:
//              "The story of the soldiers and aviators who helped turn the tide of the Second World War during the iconic Battle of Midway in June 1942.",
//            release_date: "2019-11-08"
//          },
//          {
//            popularity: 51.245,
//            vote_count: 2521,
//            video: false,
//            poster_path: "/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
//            id: 466272,
//            adult: false,
//            backdrop_path: "/kKTPv9LKKs5L3oO1y5FNObxAPWI.jpg",
//            original_language: "en",
//            original_title: "Once Upon a Time... in Hollywood",
//            genre_ids: [35, 18],
//            title: "Once Upon a Time... in Hollywood",
//            vote_average: 7.6,
//            overview:
//              "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
//            release_date: "2019-07-26"
//          },
//          {
//            popularity: 44.772,
//            vote_count: 255,
//            video: false,
//            poster_path: "/ebe8hJRCwdflNQbUjRrfmqtUiNi.jpg",
//            id: 454640,
//            adult: false,
//            backdrop_path: "/k7sE3loFwuU2mqf7FbZBeE3rjBa.jpg",
//            original_language: "en",
//            original_title: "The Angry Birds Movie 2",
//            genre_ids: [12, 16, 35, 10751],
//            title: "The Angry Birds Movie 2",
//            vote_average: 6.4,
//            overview:
//              "Red, Chuck, Bomb and the rest of their feathered friends are surprised when a green pig suggests that they put aside their differences and unite to fight a common threat. Aggressive birds from an island covered in ice are planning to use an elaborate weapon to destroy the fowl and swine.",
//            release_date: "2019-08-14"
//          },
//          {
//            popularity: 50.574,
//            vote_count: 77,
//            video: false,
//            poster_path: "/eXH2w0Ylh706Rwj6CHFm1FKRBXG.jpg",
//            id: 398978,
//            adult: false,
//            backdrop_path: "/aZ1ZqJ4uO1RK5gU5jRsO4qG7rJo.jpg",
//            original_language: "en",
//            original_title: "The Irishman",
//            genre_ids: [80, 18],
//            title: "The Irishman",
//            vote_average: 8.8,
//            overview:
//              'World War II veteran and mob hitman Frank "The Irishman" Sheeran recalls his possible involvement with the slaying of union leader Jimmy Hoffa.',
//            release_date: "2019-11-01"
//          }
//        ]