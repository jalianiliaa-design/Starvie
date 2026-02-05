
import { AppProduct } from './types';

export const INITIAL_PRODUCTS: AppProduct[] = [
  {
    id: 'spotify',
    name: 'Spotify',
    category: 'Music',
    image: 'https://picsum.photos/seed/spotify/400/400',
    options: [
      {
        label: 'Indplan',
        prices: [
          { duration: '1 bulan', price: 25000 },
          { duration: '2 bulan', price: 30000 },
          { duration: '3 bulan', price: 40000 },
        ]
      },
      {
        label: 'Famplan',
        prices: [
          { duration: '1 bulan', price: 20000 },
          { duration: '2 bulan', price: 35000 },
        ]
      }
    ]
  },
  {
    id: 'netflix',
    name: 'Netflix',
    category: 'Streaming',
    image: 'https://picsum.photos/seed/netflix/400/400',
    options: [
      {
        label: 'Share Profile 1 Device',
        prices: [
          { duration: '1 hari', price: 3000 },
          { duration: '7 hari', price: 20000 },
          { duration: '14 hari', price: 25000 },
          { duration: '1 bulan', price: 30000 },
        ]
      },
      {
        label: 'Private Profile 1 Device',
        prices: [
          { duration: '1 hari', price: 5000 },
          { duration: '1 bulan', price: 40000 },
          { duration: '2 bulan', price: 65000 },
          { duration: '3 bulan', price: 85000 },
        ]
      },
      {
        label: 'Private Profile Max 3 Device',
        prices: [
          { duration: '1 bulan', price: 50000 },
          { duration: '2 bulan', price: 75000 },
        ]
      }
    ]
  },
  {
    id: 'canva',
    name: 'Canva',
    category: 'Design',
    image: 'https://picsum.photos/seed/canva/400/400',
    options: [
      {
        label: 'Edu Member Akun',
        prices: [
          { duration: '1 bulan', price: 7000 },
          { duration: '1 tahun', price: 50000 },
        ]
      },
      {
        label: 'Pro Join Link',
        prices: [
          { duration: '1 bulan', price: 5000 },
          { duration: '3 bulan', price: 10000 },
          { duration: '1 tahun', price: 40000 },
        ]
      }
    ]
  },
  {
    id: 'capcut',
    name: 'CapCut',
    category: 'Editor',
    image: 'https://picsum.photos/seed/capcut/400/400',
    options: [
      {
        label: 'Sharing Akun',
        prices: [
          { duration: '1 bulan 3u', price: 15000 },
          { duration: '1 bulan 5u', price: 10000 },
        ]
      },
      {
        label: 'Private Akun',
        prices: [
          { duration: '7 hari', price: 5000 },
          { duration: '14 hari', price: 10000 },
          { duration: '21 hari', price: 15000 },
          { duration: '35 hari', price: 25000 },
        ]
      }
    ]
  },
  {
    id: 'viu',
    name: 'VIU+',
    category: 'Streaming',
    image: 'https://picsum.photos/seed/viu/400/400',
    options: [
      {
        label: 'Sharing Akun',
        prices: [
          { duration: '1 bulan', price: 10000 },
        ]
      },
      {
        label: 'Private Akun',
        prices: [
          { duration: '1 bulan', price: 15000 },
          { duration: '3 bulan', price: 20000 },
          { duration: '6 bulan', price: 25000 },
          { duration: '1 tahun', price: 35000 },
        ]
      }
    ]
  },
  {
    id: 'prime_video',
    name: 'Prime Video',
    category: 'Streaming',
    image: 'https://picsum.photos/seed/prime/400/400',
    options: [
      {
        label: 'Private',
        prices: [{ duration: '1 bulan', price: 25000 }]
      },
      {
        label: 'Sharing',
        prices: [{ duration: '1 bulan', price: 15000 }]
      }
    ]
  },
  {
    id: 'hbomax',
    name: 'HBO Max',
    category: 'Streaming',
    image: 'https://picsum.photos/seed/hbo/400/400',
    options: [
      {
        label: 'Sharing',
        prices: [{ duration: '1 bulan', price: 25000 }]
      }
    ]
  },
  {
    id: 'visionplus',
    name: 'Vision+',
    category: 'Streaming',
    image: 'https://picsum.photos/seed/vision/400/400',
    options: [
      {
        label: 'Private',
        prices: [{ duration: '1 bulan', price: 25000 }]
      },
      {
        label: 'Sharing',
        prices: [{ duration: '1 bulan', price: 10000 }]
      }
    ]
  },
  {
    id: 'vidio',
    name: 'Vidio Platinum',
    category: 'Streaming',
    image: 'https://picsum.photos/seed/vidio/400/400',
    options: [
      {
        label: 'All Device',
        prices: [
          { duration: 'Sharing 1bln', price: 25000 },
          { duration: 'Private 1bln', price: 45000 },
        ]
      },
      {
        label: 'Mobile Only',
        prices: [
          { duration: 'Sharing 1bln', price: 22000 },
          { duration: 'Private 1bln', price: 35000 },
        ]
      }
    ]
  },
  {
    id: 'moviebox',
    name: 'MovieBox',
    category: 'Streaming',
    image: 'https://picsum.photos/seed/moviebox/400/400',
    options: [
      {
        label: 'Sharing Account',
        prices: [
          { duration: '1 bulan', price: 10000 },
          { duration: '1 tahun', price: 25000 },
        ]
      }
    ]
  },
  {
    id: 'loklok',
    name: 'LokLok',
    category: 'Streaming',
    image: 'https://picsum.photos/seed/loklok/400/400',
    options: [
      {
        label: 'Sharing Account',
        prices: [
          { duration: '1 bulan', price: 20000 },
        ]
      }
    ]
  },
  {
    id: 'education_bundle',
    name: 'Wibuku / Brainly / Fizzo',
    category: 'Education',
    image: 'https://picsum.photos/seed/edu/400/400',
    options: [
      {
        label: 'Subscription',
        prices: [
          { duration: 'Wibuku 1 bln', price: 10000 },
          { duration: 'Brainly 1 thn', price: 25000 },
          { duration: 'Fizzo 1 bln', price: 10000 },
        ]
      }
    ]
  },
  {
    id: 'picsart',
    name: 'PicsArt',
    category: 'Editor',
    image: 'https://picsum.photos/seed/picsart/400/400',
    options: [
      {
        label: 'Sharing Akun',
        prices: [
          { duration: '1 bulan', price: 9000 },
          { duration: '3 bulan', price: 13000 },
        ]
      },
      {
        label: 'Private Akun',
        prices: [
          { duration: '1 bulan', price: 16000 },
          { duration: '3 bulan', price: 17000 },
        ]
      }
    ]
  },
  {
    id: 'alight_motion',
    name: 'Alight Motion',
    category: 'Editor',
    image: 'https://picsum.photos/seed/alight/400/400',
    options: [
      {
        label: 'Subscription',
        prices: [
          { duration: 'Sharing 1 bln', price: 10000 },
          { duration: 'Private 1 tahun', price: 15000 },
        ]
      }
    ]
  },
  {
    id: 'iqiyi',
    name: 'IQIYI',
    category: 'Streaming',
    image: 'https://picsum.photos/seed/iqiyi/400/400',
    options: [
      {
        label: 'Sharing',
        prices: [
          { duration: '1 bln', price: 11000 },
          { duration: '1 thn', price: 30000 },
          { duration: '[PO] 1 bln', price: 10000 },
        ]
      }
    ]
  },
  {
    id: 'bs_station',
    name: 'BS Station',
    category: 'Streaming',
    image: 'https://picsum.photos/seed/bs/400/400',
    options: [
      {
        label: 'Sharing',
        prices: [
          { duration: '1 bln', price: 9000 },
          { duration: '3 bln', price: 13000 },
          { duration: '1 thn', price: 35000 },
        ]
      }
    ]
  },
  {
    id: 'wetv',
    name: 'WETV',
    category: 'Streaming',
    image: 'https://picsum.photos/seed/wetv/400/400',
    options: [
      {
        label: 'Sharing',
        prices: [
          { duration: '1 bln', price: 10000 },
          { duration: '3 bln', price: 15000 },
          { duration: '1 thn', price: 40000 },
        ]
      },
      {
        label: 'Private',
        prices: [
          { duration: '1 bln', price: 28000 },
          { duration: '3 bln', price: 65000 },
        ]
      }
    ]
  },
  {
    id: 'disney_plus',
    name: 'Disney+',
    category: 'Streaming',
    image: 'https://picsum.photos/seed/disney/400/400',
    options: [
      {
        label: 'Sharing',
        prices: [
          { duration: '3 user', price: 50000 },
          { duration: '4 user', price: 48000 },
          { duration: '5 user', price: 40000 },
          { duration: '6 user', price: 35000 },
          { duration: '7 user', price: 30000 },
        ]
      }
    ]
  },
  {
    id: 'meitu',
    name: 'Meitu',
    category: 'Editor',
    image: 'https://picsum.photos/seed/meitu/400/400',
    options: [
      {
        label: 'Subscription',
        prices: [
          { duration: 'Sharing 1 bln', price: 21000 },
          { duration: 'Private 1 bln', price: 36000 },
        ]
      }
    ]
  },
  {
    id: 'apple_music',
    name: 'Apple Music',
    category: 'Music',
    image: 'https://picsum.photos/seed/applemusic/400/400',
    options: [
      {
        label: 'Sharing',
        prices: [
          { duration: '1 bln', price: 15000 },
          { duration: '2 bln', price: 20000 },
          { duration: '3 bln', price: 25000 },
        ]
      }
    ]
  },
  {
    id: 'wattpad',
    name: 'Wattpad',
    category: 'Books',
    image: 'https://picsum.photos/seed/wattpad/400/400',
    options: [
      {
        label: 'Subscription',
        prices: [
          { duration: 'Sharing 1 bln', price: 8000 },
          { duration: 'Private 1 bln', price: 25000 },
          { duration: 'Premium+ 1 bln', price: 39000 },
        ]
      }
    ]
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    category: 'Tools',
    image: 'https://picsum.photos/seed/grammarly/400/400',
    options: [
      {
        label: 'Sharing',
        prices: [
          { duration: '1 bln', price: 10000 },
          { duration: '3 bln', price: 13000 },
          { duration: '6 bln', price: 23000 },
          { duration: '1 thn', price: 40000 },
        ]
      }
    ]
  },
  {
    id: 'remini',
    name: 'Remini',
    category: 'Editor',
    image: 'https://picsum.photos/seed/remini/400/400',
    options: [
      {
        label: 'Sharing',
        prices: [
          { duration: '1 bln', price: 8000 },
          { duration: '3 bln', price: 10000 },
          { duration: '6 bln', price: 15000 },
          { duration: '1 thn', price: 25000 },
        ]
      }
    ]
  },
  {
    id: 'zoom',
    name: 'Zoom',
    category: 'Tools',
    image: 'https://picsum.photos/seed/zoom/400/400',
    options: [
      {
        label: 'PO',
        prices: [
          { duration: '14 hari', price: 5000 },
        ]
      }
    ]
  },
  {
    id: 'youtube',
    name: 'YouTube',
    category: 'Streaming',
    image: 'https://picsum.photos/seed/youtube/400/400',
    options: [
      {
        label: 'Premium',
        prices: [
          { duration: 'Head 1bln', price: 20000 },
          { duration: 'Indplan 1bln', price: 15000 },
        ]
      }
    ]
  }
];

export const INITIAL_CONFIG = {
  storeName: 'Starvie.liy',
  whatsapp: '6283872367322',
  instagram: '@starvie.liy',
  telegram: 'starvieliy',
  timezone: 'WITA',
  profilePic: 'https://picsum.photos/200',
  bannerPic: 'https://picsum.photos/1200/400?grayscale',
  visitorCount: 1250,
};
