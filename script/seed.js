'use strict'

const db = require('../server/db')
const {User, Track} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstName: 'Cody',
      lasName: 'Pug',
      email: 'cody@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Murphy',
      lastName: 'Dog',
      email: 'murphy@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Nora',
      lastName: 'Lashner',
      email: 'nora@email.com',
      password: 'lee'
    }),
    User.create({
      firstName: 'Max',
      lastName: 'Sharky',
      email: 'max@email.com',
      password: 'shark'
    }),
    User.create({
      firstName: 'Jon',
      lastName: 'Wesner',
      email: 'jon@email.com',
      password: 'yummy'
    }),
    User.create({
      firstName: 'Lucas',
      lastName: 'Van Houten',
      email: 'lucas@email.com',
      password: 'vybes'
    })
  ])

  const tracks = await Promise.all([
    Track.create({
      trackName: 'SoSick KH VERSION',
      trackURL: 'https://soundcloud.com/four-tet/sosick-kh-version',
      isFavorite: false,
      isArchived: false,
      userId: 3
    }),
    Track.create({
      trackName: 'Lee Burridge Robot Heart Burning Man 2019',
      trackURL:
        'https://soundcloud.com/robot-heart/lee_burridge_robot_heart_burning_man_2019',
      isFavorite: false,
      isArchived: false,
      userId: 5
    }),
    Track.create({
      trackName: 'Township Rebellion Burning Man 2019',
      trackURL:
        'https://soundcloud.com/township-rebellion/township-rebellion-burning-man-2019',
      isFavorite: false,
      isArchived: false,
      userId: 4
    }),
    Track.create({
      trackName: 'Dixon - in our wilderness',
      trackURL: 'https://soundcloud.com/dixon/in-our-wilderness',
      isFavorite: false,
      isArchived: false,
      userId: 3
    }),
    Track.create({
      trackName: 'Carlita Maxa Burning Man 2019',
      trackURL:
        'https://soundcloud.com/maxaxaman/carlita-maxa-burning-man-2019',
      isFavorite: false,
      isArchived: false,
      userId: 3
    }),
    Track.create({
      trackName:
        'The Goldcast 029 (Jul 17, 2020) Live @ Envision Festival 2020',
      trackURL:
        'https://soundcloud.com/goldcap/the-goldcast-029-jul-17-2020-live-envision-festival-2020',
      isFavorite: false,
      isArchived: false,
      userId: 3
    }),
    Track.create({
      trackName: 'HOW TO FUNK IN TWO MINUTES',
      trackURL: 'https://www.youtube.com/watch?v=3vBwRfQbXkg',
      isFavorite: false,
      isArchived: false,
      userId: 3
    }),
    Track.create({
      trackName: 'RÜFÜS DU SOL - Live from Joshua Tree',
      trackURL: 'https://www.youtube.com/watch?v=Zy4KtD98S2c',
      isFavorite: false,
      isArchived: false,
      userId: 3
    }),
    Track.create({
      trackName: 'The Martinez Brothers - Live from NYC (Defected WWWorldwide)',
      trackURL: 'https://www.youtube.com/watch?v=pCVuW4slrHg',
      isFavorite: false,
      isArchived: false,
      userId: 3
    }),
    Track.create({
      trackName: 'Goose - Peach Fest 2019 (Full Set)',
      trackURL: 'https://www.youtube.com/watch?v=hVfDTXbG-po',
      isFavorite: false,
      isArchived: false,
      userId: 3
    }),
    Track.create({
      trackName: 'Monolink (live) - Mayan Warrior - Burning Man 2018',
      trackURL: 'https://www.youtube.com/watch?v=IvwS6BYjHG0',
      isFavorite: false,
      isArchived: false,
      userId: 3
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${tracks.length} tracks`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
