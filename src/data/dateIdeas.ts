import type { Text } from '@/i18n';

/**
 * Date ideas: the hand of cards on the homepage and the page at /date-ideas.
 * For dates and friend dates alike. The page lists every idea in one numbered list, split
 * into these groups in this order. A group's `id` is its address on the page (/date-ideas#lets-play).
 * Any text can be { en: '…', es: '…' } once you have the Spanish version.
 */
export type DateIdeaGroup = { id: string; title: Text; ideas: Text[] };

export const dateIdeasText = {
  title: 'Date ideas' as Text,
  /** Homepage section */
  intro: 'Nothing to do this weekend? Pick a card.' as Text,
  deal: 'Deal again' as Text,
  button: 'See all the ideas' as Text,
  /** The page at /date-ideas */
  accent: '(and friend dates)' as Text,
  lead: "For dates, friend dates, and anyone who's bored on a Saturday." as Text,
  pick: 'Pick one for me' as Text,
  /**
   * The window that opens when someone clicks an idea: a message they can send to me.
   * {idea} is replaced by the idea, exactly as it's written below.
   */
  invite: {
    title: 'Send Val an invite' as Text,
    message: "Hey Val, are you free this weekend? I'm thinking: {idea}." as Text,
    send: 'Send' as Text,
    instagram: 'Send on insta' as Text,
    /** Shown under the buttons */
    note: "It's that easy bro" as Text,
    close: 'Close' as Text,
  },
};

export const dateIdeaGroups: DateIdeaGroup[] = [
  {
    id: 'lets-play',
    title: 'Let’s play',
    ideas: [
      'Karaoke (private room, no mercy)',
      'Arcade with a fixed budget of tokens',
      'Bowling',
      'Mini golf',
      'Board game café',
      'Escape room',
      'Pub quiz or trivia night',
      'Go-karts',
      'Axe throwing',
      'Billiards and a drink',
      'Laser tag',
      'Play tennis, loser buys lunch',
    ],
  },
  {
    id: 'make-something',
    title: 'Make something',
    ideas: [
      'Pottery class',
      'Paint and sip night',
      'Cook a three-course dinner from a country neither of you has been to',
      'Bake something ridiculous',
      'Make fresh pasta from scratch',
      'Build a LEGO set together',
      'Learn a TikTok dance and actually film it',
      'Make friendship bracelets',
      'Start a 1000-piece puzzle',
      'Knit or crochet night',
      'Write and illustrate a tiny zine',
    ],
  },
  {
    id: 'eat-and-drink',
    title: 'Eat & drink',
    ideas: [
      'Food crawl: one dish from each place on a street',
      'Blind taste test (chips, chocolate, or wine)',
      'Try the cuisine neither of you has ever had',
      'Fancy brunch',
      'Picnic in the park',
      'Farmers market, then cook what you bought',
      'Dessert-only dinner',
      'Wine, beer or coffee tasting',
      'Taco crawl',
      'Afternoon tea',
      'Late-night diner run',
    ],
  },
  {
    id: 'go-somewhere',
    title: 'Go somewhere',
    ideas: [
      'Be a tourist in your own city',
      'Day trip to a town you’ve never been to',
      'Sunrise hike with coffee in a thermos',
      'Museum, then rank the art',
      'Botanical garden',
      'Aquarium or zoo',
      'Thrift shopping with a $20 challenge',
      'Rent bikes and get a little lost',
      'Kayak or paddleboard',
      'Ride a train to the end of the line',
      'Visit every bookstore in one neighborhood',
      'Flea market treasure hunt',
    ],
  },
  {
    id: 'watch-and-listen',
    title: 'Watch & listen',
    ideas: [
      'Outdoor movie',
      'Comedy show',
      'Local live music',
      'Watch a sports game at a bar and pick a team you know nothing about',
      'A play or a musical',
      'Silent disco',
      'Drive-in movie',
      'Poetry reading or open mic',
      'Ballet or the symphony, dressed up',
    ],
  },
  {
    id: 'stay-in',
    title: 'Stay in',
    ideas: [
      'Movie marathon with a theme',
      'Make each other a playlist',
      'Spa night with face masks',
      'PowerPoint night: everyone presents something niche',
      'Build a blanket fort',
      'Video games',
      'Cook-off with a mystery ingredient',
      'Read in the same room, then swap books',
      'Karaoke in the living room',
      'Start a two-person book club',
      'Make the fanciest cocktails you can find',
    ],
  },
  {
    id: 'after-dark',
    title: 'After dark',
    ideas: [
      'Stargazing',
      'Rooftop bar',
      'Night market',
      'Late-night swim',
      'Ghost tour',
      'Roller skating',
      'Ice skating',
      'Salsa or swing dancing class',
      'Drive with no destination and a good playlist',
    ],
  },
];
