import {Injectable} from '@angular/core';
import {Album} from './albums/album';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  albums: Album[] = [
    {
      name: `Kids See Ghosts`,
      year: 2018,
      artist: 'Kanye West',
      cover: `https://upload.wikimedia.org/wikipedia/en/1/18/Kids_See_Ghost_Cover.jpg`
    },
    {
      name: `Ye`,
      year: 2018,
      artist: 'Kanye West',
      cover: `https://upload.wikimedia.org/wikipedia/en/7/74/Ye_album_cover.jpg`
    },
    {
      name: `More Life`,
      year: 2017,
      artist: 'Drake',
      cover: `https://upload.wikimedia.org/wikipedia/en/7/70/Drake_-_More_Life_cover.jpg`
    },
    {
      name: `Views`,
      year: 2016,
      artist: 'Drake',
      cover: `https://upload.wikimedia.org/wikipedia/en/a/af/Drake_-_Views_cover.jpg`
    },
    {
      name: `Super Slimey`,
      year: 2017,
      artist: 'Future',
      cover: `https://upload.wikimedia.org/wikipedia/en/1/1e/Super_Slimey_cover.jpg`
    },
    {
      name: `HNDRXX`,
      year: 2017,
      artist: 'Future',
      cover: `https://upload.wikimedia.org/wikipedia/en/8/83/HNDRXX_cover.jpg`
    },
    {
      name: `The Beautiful & Damned`,
      year: 2017,
      artist: 'G-Eazy',
      cover: `https://upload.wikimedia.org/wikipedia/en/3/31/G-Eazy_-_The_Beautiful_%26_Damned.png`
    },
    {
      name: `When It's Dark Out`,
      year: 2015,
      artist: 'G-Eazy',
      cover: `https://upload.wikimedia.org/wikipedia/en/d/d7/G-Eazy_When_Its_Dark_Out.jpg`
    },
    {
      name: `Culture II`,
      year: 2018,
      artist: 'Migos',
      cover: `https://upload.wikimedia.org/wikipedia/en/9/9b/Culture_II.png`
    },
    {
      name: `Culture`,
      year: 2017,
      artist: 'Migos',
      cover: `https://upload.wikimedia.org/wikipedia/en/1/10/MigosCulture.jpg`
    },
    {
      name: `Beerbongs & Bentleys`,
      year: 2018,
      artist: 'Post Malone',
      cover: `https://upload.wikimedia.org/wikipedia/en/c/c1/Beerbongs_%26_Bentleys_by_Post_Malone.png`
    },
    {
      name: `Stoney`,
      year: 2016,
      artist: 'Post Malone',
      cover: `https://upload.wikimedia.org/wikipedia/en/7/72/Stoneyalbum.jpg`
    },
    {
      name: `Konnichiwa`,
      year: 2016,
      artist: 'Skepta',
      cover: `https://upload.wikimedia.org/wikipedia/en/0/08/Konnichiwa_by_Skepta_cover.jpg`
    },
    {
      name: `DAYTONA`,
      year: 2018,
      artist: 'Pusha T',
      cover: `https://upload.wikimedia.org/wikipedia/en/5/5e/Daytona_by_Pusha_T.jpg`
    },
    {
      name: `Sounds From The Other Side`,
      year: 2017,
      artist: 'WizKid',
      cover: `https://upload.wikimedia.org/wikipedia/en/d/d2/Soundsfromtheotherside.png`
    },
    {
      name: `Omo Baba Olowo (O.B.O) - The Genesis`,
      year: 2016,
      artist: 'DaVido',
      cover: `https://upload.wikimedia.org/wikipedia/en/3/3a/Omo_Baba_Olowo_cover.jpg`
    },
    {
      name: `Common Sense`,
      year: 2017,
      artist: 'J Hus',
      cover: `https://upload.wikimedia.org/wikipedia/en/0/07/Common_Sense_%E2%80%93_J_Hus.jpg`
    },
    {
      name: `7 Days`,
      year: 2017,
      artist: 'Krept & Konan',
      cover: `https://upload.wikimedia.org/wikipedia/en/2/2a/7_Days_cover.jpg`
    },
    {
      name: `7 Nights`,
      year: 2017,
      artist: 'Krept & Konan',
      cover: `https://upload.wikimedia.org/wikipedia/en/5/5e/7_Nights_cover.jpg`
    },
    {
      name: `Vroom`,
      year: 2018,
      artist: 'Yxng Bane',
      cover: `https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F90fb060bc49c34d8dc6d1ebeae9df41b.600x600x1.jpg`
    },
    {
      name: `Answerphone (feat. Yxng Bane)`,
      year: 2018,
      artist: 'Yxng Bane',
      cover: `https://upload.wikimedia.org/wikipedia/en/8/8b/Answerphone.jpg`
    },
    {
      name: `Corner (feat. Maleek Berry)`,
      year: 2018,
      artist: 'Yxng Bane',
      cover: `https://t2.genius.com/unsafe/220x222/https%3A%2F%2Fimages.genius.com%2Fb24532593407037061edb57e1cc8530b.596x600x1.jpg`
    },
    {
      name: `Rihanna`,
      year: 2017,
      artist: 'Yxng Bane',
      cover: `https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Ff1ce80d933e43391a1841b44a1f8e2d2.640x640x1.jpg`
    },
    {
      name: `Fine Wine`,
      year: 2016,
      artist: 'Yxng Bane',
      cover: `https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F45c8457212e120336e33c4d360b4b4a4.640x640x1.jpg`
    },
    {
      name: `Sex Like Me`,
      year: 2018,
      artist: 'Loud Luxury',
      cover: `https://images.genius.com/99b03c4b76ab3c59e8fdd711100d6e50.1000x1000x1.jpg`
    },
    {
      name: `Body`,
      year: 2017,
      artist: 'Loud Luxury',
      cover: `https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F355a6e7315a7a3a97dda16955bceae6b.860x860x1.jpg`
    },
    {
      name: `Fill Me In`,
      year: 2017,
      artist: 'Loud Luxury',
      cover: `https://images.genius.com/3596c273c72d8bd5a9b52acd75519675.342x341x1.png`
    },
    {
      name: `Listen`,
      year: 2014,
      artist: 'David Guetta',
      cover: `https://upload.wikimedia.org/wikipedia/en/3/3a/DG_Listen.png`
    },
    {
      name: `Million Dollar Mug Shot`,
      year: 2017,
      artist: 'Rehab',
      cover: `https://is3-ssl.mzstatic.com/image/thumb/Music111/v4/e4/7b/4b/e47b4b2b-bb34-5612-f2bc-082ec2df31a7/661869003030_cover.jpg/268x0w.jpg`
    },
    {
      name: `I Am Free`,
      year: 2018,
      artist: 'Cosmo & Creature',
      cover: `https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F1c6b54ef17e52f8e77c0e3f0c3422102.1000x1000x1.png`
    },
    {
      name: `Children`,
      year: 2017,
      artist: 'Cosmo & Creature',
      cover: `https://images.genius.com/8d670fd6bf4ef65cb7bb44376dd76642.1000x1000x1.png`
    },
    {
      name: `Antidote`,
      year: 2017,
      artist: 'Cosmo & Creature',
      cover: `https://images.genius.com/600ce39c4b1d72f26f7aae0bb83024f9.1000x1000x1.jpg`
    },
    {
      name: `Young`,
      year: 2016,
      artist: 'Cosmo & Creature',
      cover: `https://images.genius.com/bb0099e826c8c450c751ca94b90cb646.1000x1000x1.jpg`
    },
    {
      name: `Next Season`,
      year: 2018,
      artist: 'Felix Cartal',
      cover: ``
    },
    {
      name: `Tokyo Nights`,
      year: 2018,
      artist: 'Digital Farm Animals',
      cover: `https://images.genius.com/596dcb96bd13b19994a410725e897845.1000x1000x1.png`
    },
    {
      name: `Say My Name`,
      year: 2018,
      artist: 'Digital Farm Animals',
      cover: `https://images.genius.com/91a9d1982555b7967913d189c277f332.1000x1000x1.png`
    },
    {
      name: `All Falls Down`,
      year: 2017,
      artist: 'Digital Farm Animals',
      cover: `https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Fdc1c965917b3b1cb820008cfc217ae9e.1000x1000x1.jpg`
    },
    {
      name: `Arms Around Me`,
      year: 2017,
      artist: 'Digital Farm Animals',
      cover: `https://images.genius.com/60e91f7ee4a02667e0372cd987dcb65f.1000x1000x1.png`
    },
    {
      name: `Millionaire (feat. Nelly)`,
      year: 2016,
      artist: 'Digital Farm Animals',
      cover: `https://upload.wikimedia.org/wikipedia/en/4/4a/Millionaire_%28featuring_Nelly%29_%28Official_Single_Cover%29_by_Cash_Cash_and_Digital_Farm_Animals.png`
    },
    {
      name: `Wanna Know`,
      year: 2016,
      artist: 'Digital Farm Animals',
      cover: `https://images.rapgenius.com/cabefeb3cae1128d1dc8adff8727dbce.1000x1000x1.jpg`
    },
    {
      name: `True`,
      year: 2015,
      artist: 'Digital Farm Animals',
      cover: `https://images.genius.com/5c36c507eafdeb3e44e154085a81e696.1000x1000x1.jpg`
    },
    {
      name: `Didn't Know`,
      year: 2015,
      artist: 'Digital Farm Animals',
      cover: `https://i1.sndcdn.com/artworks-000106271017-wkiqtu-t500x500.jpg`
    },
    {
      name: `Time Alone (feat. The Griswolds)`,
      year: 2018,
      artist: 'Prince Fox',
      cover: `https://t2.genius.com/unsafe/221x221/https%3A%2F%2Fimages.genius.com%2F8da70acffd0aca8822e74ee90aa17ad3.800x800x1.jpg`
    },
    {
      name: `Open Invite`,
      year: 2018,
      artist: 'Prince Fox',
      cover: `https://dancingastronaut.com/wp-content/uploads/2018/02/PrinceFox-OpenInvite.jpg`
    },
    {
      name: `Positive (feat. WRENN)`,
      year: 2017,
      artist: 'Prince Fox',
      cover: `https://s.mxmcdn.net/images-storage/albums4/0/0/6/9/5/5/38559600_800_800.jpg`
    },
    {
      name: `Just Call (feat. Bella Thorne)`,
      year: 2017,
      artist: 'Prince Fox',
      cover: `https://images.genius.com/23128ece50f9651d1d80610c774011e2.1000x1000x1.jpg`
    },
  ];

  constructor() {
  }

  getAlbums(): Observable<Album[]> {
    return of(this.albums);
  }
}
