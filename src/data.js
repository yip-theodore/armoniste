export const data = [
  // {
  //   page: 0,
  //   category: 'Menu',
  //   menu: [
  //     {
  //       category: 'About',
  //       page: 1
  //     },
  //     {
  //       category: 'Traditional Wines',
  //       page: 2
  //     },
  //     {
  //       category: 'Herbal Wines',
  //       page: 4
  //     },
  //     {
  //       category: 'Contact',
  //       page: 8
  //     }
  //   ]
  // },
  // {
  //   page: 0,
  //   loading: true
  // },
  {
    page: 1,
    category: 'About',
    title: ['Organic', 'French', 'Wines'],
    description: [
      'A collection of Organic and Natural products selected for their high quality, their authentic flavour, their beneficial effects, and their uniqueness.',
      'Inspired by passionate producers, all handmade products specifically picked for you are the fruit of the work of French artisans, proud of the quality of their products.',
      'Armoniste Team is a bunch of people, passionate about life, and devoted to sharing the belief that every moment we have is a gift to be enjoyed.'
    ],
    background: 'background_about.mp4'
  },
  {
    page: 2,
    category: 'Traditional Wines',
    title: ['Cotes du', 'Rhone', 'Red', 'Wine'],
    name: 'Côtes du Rhône Red wine - 2007',
    description: ['The fine expression of black & red fruits, with a note of vanilla, gives this wine a very pleasant character that, while ageing, will put emphasis in aromas of spice and of smoke.'],
    award: {
      type: 'Quality award',
      name: 'Independent Wine Makers Contest 2009'
    },
    color: '#993366',
    image: 'bottle_cotes_du_rhone_red_wine.png',
    background: 'background_cotes_du_rhone_red_wine.jpg',
    info: {
      grapes: '100% old Syrah vines of 42 years',
      alcohol: '13.5%',
      serving: '16-18°C',
      pairing: 'Poultry, animal game, mushrooms or truffles',
      certificates: [
        'label_Vignerons Indépendants.svg',
        'label_Qualité France.svg',
        'label_Agriculture biologique.svg',
        'label_Appellation d\'origine contrôlée.svg'
      ]
    }
  },
  {
    page: 3,
    category: 'Traditional Wines',
    title: ['Cotes du', 'Rhone', 'White', 'Wine'],
    name: 'Côtes du Rhône White wine - 2008',
    description: ['Dry white wine, with delicate and complex aromas of exotic fruits.'],
    color: '#99CC33',
    image: 'bottle_cotes_du_rhone_white_wine.png',
    background: 'background_cotes_du_rhone_white_wine.jpg',
    info: {
      grapes: [
        '40% Clairette',
        '30% Marsanne',
        '30% Roussanne'
      ],
      alcohol: '12.5%',
      serving: '12°C',
      pairing: 'Fish, shellfish, delicatessen, salad and goat cheese',
      certificates: [
        'label_Vignerons Indépendants.svg',
        'label_Qualité France.svg',
        'label_Agriculture biologique.svg',
        'label_Appellation d\'origine contrôlée.svg'
      ]
    }
  },
  {
    page: 4,
    category: 'Herbal Wines',
    title: ['Flaveur', 'Sauge', 'Sclaree'],
    name: 'Flaveur Sauge sclarée',
    description: ['The unique encounter of the musky tones of Clary Sage (快樂鼠尾草) and the character of Sauvignon.'],
    color: '#006699',
    image: 'bottle_flaveur_sauge_sclaree.png',
    background: 'background_flaveur_sauge_sclaree.jpg',
    info: {
      virtues: [
        'Promote longevity',
        'Enhance cerebral circulation and memory'
      ],
      alcohol: '12.5%',
      serving: '8°C',
      pairing: 'Aperitifs, fruit salad or ice-cream',
      certificates: [
        'label_Ecocert.svg'
      ]
    }
  },
  {
    page: 5,
    category: 'Herbal Wines',
    title: ['Flaveur', 'Basilic', 'Grand', 'Vert'],
    name: 'Flaveur Basilic Grand vert',
    description: ['The blending of the fragrance of Green Basil (羅勒) and the vividness of Colombard and Sauvignon.'],
    color: '#99CC33',
    image: 'bottle_flaveur_basilic_grand_vert.png',
    background: 'background_flaveur_basilic_grand_vert.jpg',
    info: {
      virtues: [
        'Helpful for digestion',
        'Reducing toxins in body',
        'Releasing stress'
      ],
      alcohol: '12%',
      serving: '8°C',
      pairing: 'Aperitifs, after-dinner, sweet and sour dishes',
      certificates: [
        'label_Ecocert.svg'
      ]
    }
  },
  {
    page: 6,
    category: 'Herbal Wines',
    title: ['Flaveur', 'Basilic', 'Sacre'],
    name: 'Flaveur Basilic Sacré',
    description: ['The unexpected alliance of Holy Basil (聖羅勒) and the very delicate bouquet of Cabernet Franc and Cabernet Sauvignon.'],
    color: '#CC3333',
    image: 'bottle_flaveur_basilic_sacre.png',
    background: 'background_flaveur_basilic_sacre.jpg',
    info: {
      virtues: [
        'Promote longevity',
        'Enhance cerebral circulation and memory',
        'Feeling of well being'
      ],
      alcohol: '12%',
      serving: '15°C',
      pairing: 'Aperitifs, spicy dishes, braised beef or chocolate cake',
      certificates: [
        'label_Ecocert.svg'
      ]
    }
  },
  {
    page: 7,
    category: 'Herbal Wines',
    title: ['Flaveur', 'Lavande'],
    name: 'Flaveur Lavande',
    description: ['The harmony of the incomparable perfume of Lavender (薰衣草) and the freshness of Gamay.'],
    color: '#660066',
    image: 'bottle_flaveur_lavande.png',
    background: 'background_flaveur_lavande.jpg',
    info: {
      virtues: [
        'Promote longevity',
        'Enhance cerebral circulation and memory',
        'Exhilarating (feeling of well being)'
      ],
      alcohol: '12%',
      serving: '12°C',
      pairing: 'Aperitifs, desserts',
      certificates: [
        'label_Ecocert.svg'
      ]
    }
  },
  {
    page: 8,
    category: 'Contact',
    background: 'contact.jpg',
    contact: [
      {
        title: 'Office',
        content: [
          '71 rue Saint Dominique, 75007',
          'Paris, FRANCE',
          '(+33) 6 2013 8166',
          'info@adgroup-ie.com'
        ]
      },
      {
        title: 'Distributor',
        content: [
          '100 Tai Wo Village,', 
          'Tai Po, N.T. HONG KONG'
        ]
      }
    ]
  }
]
