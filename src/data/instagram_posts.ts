export interface InstagramPost {
  id: string;
  shortcode: string;
  type: 'reel' | 'foto' | 'carrossel';
  image: string;
  caption: string;
  location: string;
  likes: string;
  comments: string;
  url: string;
  embedUrl: string;
}

export const instagramRealPosts: InstagramPost[] = [
  {
    id: 'ig-1',
    shortcode: 'DczY02LRIWy',
    type: 'reel',
    image: '/instagram/cover_1.jpg',
    caption: '“Se algo te faz se sentir vivo. Aumente a dose.” A essência do Surf Livre na água quente da Bahia.',
    location: 'Olivença, Ilhéus - BA',
    likes: '1.2k',
    comments: '48',
    url: 'https://www.instagram.com/p/DczY02LRIWy/',
    embedUrl: 'https://www.instagram.com/p/DczY02LRIWy/embed/captioned/'
  },
  {
    id: 'ig-2',
    shortcode: 'Dcrm5KaRexa',
    type: 'reel',
    image: '/instagram/cover_2.jpg',
    caption: 'Aldenei Aquino botando pra baixo na bancada de Olivença com a lycra oficial Surf Livre.',
    location: 'Praia do Backdoor, Olivença',
    likes: '890',
    comments: '34',
    url: 'https://www.instagram.com/p/Dcrm5KaRexa/',
    embedUrl: 'https://www.instagram.com/p/Dcrm5KaRexa/embed/captioned/'
  },
  {
    id: 'ig-3',
    shortcode: 'Day_VRUkRE2',
    type: 'carrossel',
    image: '/instagram/cover_3.jpg',
    caption: 'Sessão diária da galera local. O surf como conexão, estilo de vida e liberdade.',
    location: 'Prainha de Olivença',
    likes: '720',
    comments: '29',
    url: 'https://www.instagram.com/p/Day_VRUkRE2qvlV8nBBQL8Lx9YPYIRWRUo0zDY0/?img_index=2',
    embedUrl: 'https://www.instagram.com/p/Day_VRUkRE2/embed/captioned/'
  },
  {
    id: 'ig-4',
    shortcode: 'DQ2OAALEWvo',
    type: 'reel',
    image: '/instagram/cover_4.jpg',
    caption: '“Quando pego o melhor tubo da minha vida!” A sensação indescritível de sair limpo da caverna.',
    location: 'Olivença, Bahia',
    likes: '1.4k',
    comments: '62',
    url: 'https://www.instagram.com/p/DQ2OAALEWvo/',
    embedUrl: 'https://www.instagram.com/p/DQ2OAALEWvo/embed/captioned/'
  },
  {
    id: 'ig-5',
    shortcode: 'DaZDoEokcOK',
    type: 'foto',
    image: '/instagram/cover_5.jpg',
    caption: 'Ataque vertical na junção com o atleta @davimasques rasgando e jogando leque d’água.',
    location: 'Backdoor & Prainha',
    likes: '960',
    comments: '41',
    url: 'https://www.instagram.com/p/DaZDoEokcOK/?img_index=1',
    embedUrl: 'https://www.instagram.com/p/DaZDoEokcOK/embed/captioned/'
  },
  {
    id: 'ig-6',
    shortcode: 'DaTDGtsxktw',
    type: 'reel',
    image: '/instagram/cover_6.jpg',
    caption: '“O meu maior problema é que eu queria estar todos os dias exatamente assim: no mar.”',
    location: 'Costa do Cacau, Ilhéus',
    likes: '1.8k',
    comments: '85',
    url: 'https://www.instagram.com/p/DaTDGtsxktw/',
    embedUrl: 'https://www.instagram.com/p/DaTDGtsxktw/embed/captioned/'
  }
];
