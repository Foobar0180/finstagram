// eslint-disable prettier/prettier
// eslint-disable no-plusplus
// eslint-disable-next-line import/prefer-default-export
export function seedDatabase(firebase) {
  const users = [
    {
      biography: 'Clarity is king!',
      id: '1',
      fig_id: '5c356b22-f8d9-4063-9c37-d946996bdc78',
      followers_count: 0,
      follows_count: 0,
      media_count: 0,
      media: [],
      name: 'david_r',
      profile_picture_url: '',
      stories: [],
      tags: [],
      timestamp: '2022-07-26T13:41:28+0000',
      username: 'David Ritchie',
      website: 'https://www.goodcodebadcode.dev/'
    },
    {
      biography: 'Voor al jouw bakinspiratie, recepten en meer!⁣⁣',
      id: '2',
      fig_id: 'f9201edf-87aa-4b55-bf70-cc25fd15d0c5',
      followers_count: 0,
      follows_count: 0,
      media_count: 0,
      media: [],
      name: 'Annemieke de Gelder',
      profile_picture_url: '/images/profiles/delaatstekruimel.jpg',
      stories: [],
      tags: [],
      timestamp: '2021-11-13T23:11:57+0000',
      username: 'delaatstekruimel',
      website: 'https://www.delaatstekruimel.nl/'
    },
    {
      biography: '',
      id: '3',
      fig_id: '129d56aa-b206-435b-8084-5a3e25c7c3ce',
      followers_count: 0,
      follows_count: 0,
      media_count: 0,
      media: [],
      name: '',
      profile_picture_url: '/images/profiles/jane94.jpg',
      stories: [],
      tags: [],
      timestamp: '2022-04-01T14:29:08+0000',
      username: 'jane94',
      website: ''
    },
    {
      biography: 'Illustrator, Sculptor, and Animator from Germany.',
      id: '4',
      fig_id: '77c1e9ed-cf7d-4702-84a8-787513ef2945',
      followers_count: 0,
      follows_count: 0,
      media_count: 0,
      media: [],
      name: 'Michael Hartmann',
      profile_picture_url: '',
      stories: [],
      tags: [],
      timestamp: '2021-10-28T11:47:41+0000',
      username: 'michael_h_artist',
      website: 'https://linktr.ee/Michael_H_Art'
    },
    {
      biography: 'Mountains | Wild Camping | Hiker | Trail Runner',
      id: '5',
      fig_id: 'd26715a0-ac92-421e-8d67-9bf0082b4f31',
      followers_count: 0,
      follows_count: 0,
      media_count: 0,
      media: [],
      name: '',
      profile_picture_url: '/images/profiles/raphaeldejong.png',
      stories: [],
      tags: [],
      timestamp: '2022-05-11T12:50:11+0000',
      username: 'raphaeldejong',
      website: 'https://www.instagram.com/raphaeldejong/'
    },
    {
      biography: 'Photographer from Cape Town, South Africa',
      id: '6',
      fig_id: '68f1250c-f3e1-4be2-8e3a-661a76871fa0',
      followers: 3,
      follower_ids: ['1', '3', '4'],
      follows: 2,
      follow_ids: ['2', '4'],
      media_count: 6,
      media: [],
      name: 'Sarah Mabote',
      profile_picture_url: '/images/profiles/wanderwithsarah.jpg',
      stories: [],
      tags: [],
      timestamp: '2022-07-04T13:31:26+0000',
      username: 'wanderwithsarah',
      website: 'https://blog.wanderwithsarah.co.za/'
    }
  ];

  // eslint-disable-next-line prefer-const, no-plusplus
  for (let u = 0; u < users.length; u++) {
    firebase.firestore().collection('users').add(users[u]);
  }

  const posts = [
    {
      caption:
        "There's a unique beach in South Africa called Boulders Beach, the home to these native penguins.",
      children: [],
      comment_count: 2,
      comments: [
        {
          from: {
            id: 3,
            username: 'jane94'
          },
          id: '1',
          is_hidden: false,
          fig_id: '486e384f-dbd0-4c41-ad32-da31b7d2f8f6',
          like_count: 1,
          likes: ['6'],
          parent_id: 0,
          replies: [],
          message: '@wanderwithsarah Dream !!! X',
          timestamp: '2022-05-22T15:54:28+0000',
          username: 'jane94'
        },
        {
          from: {
            id: 5,
            username: 'raphaeldejong'
          },
          id: '2',
          is_hidden: false,
          fig_id: '571ff5af-3033-436e-b643-e28493d5d19e',
          like_count: 0,
          likes: [],
          parent_id: 0,
          replies: [
            {
              from: {
                id: 6,
                username: 'wanderwithsarah'
              },
              id: '3',
              is_hidden: false,
              fig_id: 'fd766998-a5c8-4a48-9886-058ddb188174',
              like_count: 1,
              likes: ['5'],
              parent_id: 2,
              replies: [],
              message:
                "@raphaeldejong Summer is prime time to visit Boulders, and its when you'll see the most penguin action. However, you can see the penguins throughout the year. Between September and October the birds spend much time feeding out at sea, so there are fewer penguins on the beach.",
              timestamp: '2022-05-25T19:31:22+0000',
              username: 'wanderwithsarah'
            }
          ],
          message: '@wanderwithsarah What time of year is best to visit?',
          timestamp: '2022-05-25T19:26:41+0000',
          username: 'raphaeldejong'
        }
      ],
      id: '1',
      media_url: '/images/users/wanderwithsarah/1.jpg',
      fig_id: '1f7c87c9-16c4-4419-b83f-9e48705efc08',
      is_comment_enabled: true,
      is_shared_to_feed: true,
      like_count: 3,
      likes: ['1', '5', '3'],
      location_latitude: '-34.19804835',
      location_longitude: '18.4523524939288',
      media_product_type: 'FEED',
      media_type: 'IMAGE',
      user_id: '6',
      permalink: 'https://www.finstagram.com/p/Bth1zrHjRTh/',
      short_code: 'Bth1zrHjRTh',
      thumbnail_url: '',
      timestamp: '2022-05-22T15:50:16+0000',
      view_count: 241,
      username: 'wanderwithsarah'
    },
    {
      caption:
        "I don't know about you, but nothing beats a glass of wine when you can feel a chill in the air!",
      children: [],
      comment_count: 0,
      comments: [],
      id: '2',
      media_url: '/images/users/wanderwithsarah/2.jpg',
      fig_id: '37b4ff98-d46e-4419-a1f9-c2667cc3430a',
      is_comment_enabled: true,
      is_shared_to_feed: true,
      like_count: 0,
      likes: [],
      location_latitude: '-33.9034917',
      location_longitude: '18.4205119375881',
      media_product_type: 'FEED',
      media_type: 'IMAGE',
      user_id: '6',
      permalink: 'https://www.finstagram.com/p/CfBd_PUurdT/',
      short_code: 'CfBd_PUurdT',
      thumbnail_url: '',
      timestamp: '2022-05-22T15:50:16+0000',
      view_count: 87,
      username: 'wanderwithsarah'
    },
    {
      caption:
        'The Book Lounge in the heart of Cape Town. Passionate staff, great coffee and fantastic books in such a great location.',
      children: [],
      comment_count: 0,
      comments: [],
      id: '3',
      media_url: '/images/users/wanderwithsarah/3.jpg',
      fig_id: 'e9c94456-f016-4783-90c5-61525a0d4f52',
      is_comment_enabled: false,
      is_shared_to_feed: true,
      like_count: 1,
      likes: ['3'],
      location_latitude: '-33.929306',
      location_longitude: '18.421688',
      media_product_type: 'FEED',
      media_type: 'IMAGE',
      user_id: '6',
      permalink: 'https://www.finstagram.com/p/CgefDZJOyhr/',
      short_code: 'CgefDZJOyhr',
      thumbnail_url: '',
      timestamp: '2022-07-27T14:32:19+0000',
      view_count: 192,
      username: 'wanderwithsarah'
    },
    {
      caption:
        'The ultimate hybrid camera. The Canon EOS R6 records superb video at up to 4K 60fps and Full HD 120fps, all with Dual Pixel CMOS AF.',
      children: [],
      comment_count: 0,
      comments: [],
      id: '4',
      media_url: '/images/users/wanderwithsarah/4.jpg',
      fig_id: 'ab99d221-504a-4ff5-abbf-1f7616c6600b',
      is_comment_enabled: true,
      is_shared_to_feed: false,
      like_count: 0,
      likes: [],
      location_latitude: '-34.270836',
      location_longitude: '18.459778',
      media_product_type: 'FEED',
      media_type: 'IMAGE',
      user_id: '6',
      permalink: 'https://www.finstagram.com/p/Cgc4VL4FGHS/',
      short_code: 'Cgc4VL4FGHS',
      thumbnail_url: '',
      timestamp: '2022-07-27T19:14:34+0000',
      view_count: 0,
      username: 'wanderwithsarah'
    },
    {
      caption:
        'On the way to the Mojo Market this morning, old school styles. Come join us if you are in the neighborhood.',
      children: [],
      comment_count: 1,
      comments: [
        {
          from: {
            id: 4,
            username: 'michael_h_artist'
          },
          id: '1',
          is_hidden: false,
          fig_id: 'b39e78eb-bc13-45e7-880f-c6e4f3f74e97',
          like_count: 1,
          likes: ['6'],
          parent_id: 0,
          replies: [],
          message: '@wanderwithsarah awesome place',
          timestamp: '2022-05-22T15:54:28+0000',
          username: 'michael_h_artist'
        }
      ],
      id: '5',
      media_url: '/images/users/wanderwithsarah/5.jpg',
      fig_id: 'e3057f62-4088-49a0-aea1-fede63ecd74b',
      is_comment_enabled: true,
      is_shared_to_feed: true,
      like_count: 2,
      likes: ['3', '4'],
      location_latitude: '-33.9191903',
      location_longitude: '18.3858266',
      media_product_type: 'FEED',
      media_type: 'IMAGE',
      user_id: '6',
      permalink: 'https://www.finstagram.com/p/CgacXcmu6eV/',
      short_code: 'CgacXcmu6eV',
      thumbnail_url: '',
      timestamp: '2022-07-29T07:31:11+0000',
      view_count: 16,
      username: 'wanderwithsarah'
    }
  ];

  firebase.firestore().collection('posts').add(posts);
}
