import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-champion-select',
  templateUrl: './champion-select.component.html',
  styleUrls: ['./champion-select.component.scss']
})
export class ChampionSelectComponent implements OnInit {

  champions: any = [
    {name: 'Ahri', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/ahri-classic.png', selectable: true, coverPicture: 'https://cdn1.dotesports.com/wp-content/uploads/sites/3/2020/07/25201017/Ahri_0.jpg'},
    {name: 'Aatrox', role: 'top', picture: 'https://www.mobafire.com/images/avatars/aatrox-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox  _0.jpg'},
    {name: 'Akali', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/akali-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg'},
    {name: 'Alistar', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/alistar-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg'},
    {name: 'Amumu', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/amumu-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg'},
    {name: 'Anivia', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/anivia-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg'},
    {name: 'Annie', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/annie-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg'},
    {name: 'Aphelios', role: 'adc', picture: 'https://www.mobafire.com/images/avatars/aphelios-classic.png', selectable: true, coverPicture: 'https://universe-meeps.leagueoflegends.com/v1/assets/images/aphelios-splash.jpg'},
    {name: 'Ashe', role: 'adc', picture: 'https://www.mobafire.com/images/avatars/ashe-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg'},
    {name: 'Aurelion Sol', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/aurelion-sol-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg'},
    {name: 'Azir', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/azir-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg'},
    {name: 'Bard', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/bard-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg'},
    {name: 'Blitzcrank', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/blitzcrank-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg'},
    {name: 'Brand', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/brand-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_2.jpg'},
    {name: 'Braum', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/braum-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg'},
    {name: 'Caitlyn', role: 'adc', picture: 'https://www.mobafire.com/images/avatars/caitlyn-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg'},
    {name: 'Camille', role: 'top', picture: 'https://www.mobafire.com/images/avatars/camille-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_0.jpg'},
    {name: 'Cassiopeia', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/cassiopeia-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg'},
    {name: "Cho'Gatch", role: 'top', picture: 'https://www.mobafire.com/images/avatars/chogath-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_0.jpg'},
    {name: 'Corki', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/corki-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg'},
    {name: 'Darius', role: 'top', picture: 'https://www.mobafire.com/images/avatars/darius-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg'},
    {name: 'Diana', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/diana-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_0.jpg'},
    {name: 'Dr.Mundo', role: 'top', picture: 'https://www.mobafire.com/images/avatars/dr-mundo-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg'},
    {name: 'Draven', role: 'adc', picture: 'https://www.mobafire.com/images/avatars/draven-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg'},
    {name: 'Ekko', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/ekko-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg'},
    {name: 'Elise', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/elise-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_0.jpg'},
    {name: 'Evelynn', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/evelynn-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg'},
    {name: 'Ezreal', role: 'adc', picture: 'https://www.mobafire.com/images/avatars/ezreal-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg'},
    {name: 'Fiddlesticks', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/fiddlesticks-classic.png', selectable: true, coverPicture: 'https://i.ytimg.com/vi/sNKbKrNQRr0/maxresdefault.jpg'},
    {name: 'Fiora', role: 'top', picture: 'https://www.mobafire.com/images/avatars/fiora-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg'},
    {name: 'Fizz', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/fizz-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fizz_0.jpg'},
    {name: 'Galio', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/galio-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Galio_0.jpg'},
    {name: 'Gangplank', role: 'top', picture: 'https://www.mobafire.com/images/avatars/gangplank-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gangplank_0.jpg'},
    {name: 'Garen', role: 'top', picture: 'https://www.mobafire.com/images/avatars/garen-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg'},
    {name: 'Gnar', role: 'top', picture: 'https://www.mobafire.com/images/avatars/gnar-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gnar_0.jpg'},
    {name: 'Gragas', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/gragas-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gragas_0.jpg'},
    {name: 'Graves', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/graves-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Graves_0.jpg'},
    {name: 'Hecarim', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/hecarim-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Hecarim_0.jpg'},
    {name: 'Heimerdinger', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/heimerdinger-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Heimerdinger_0.jpg'},
    {name: 'Illaoi', role: 'top', picture: 'https://www.mobafire.com/images/avatars/illaoi-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Illaoi_0.jpg'},
    {name: 'Irelia', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/irelia-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg'},
    {name: 'Ivern', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/ivern-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ivern_0.jpg'},
    {name: 'Janna', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/janna-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Janna_0.jpg'},
    {name: 'Jarvan IV', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/jarvan-iv-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/JarvanIV_0.jpg'},
    {name: 'Jax', role: 'top', picture: 'https://www.mobafire.com/images/avatars/jax-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_0.jpg'},
    {name: 'Jayce', role: 'top', picture: 'https://www.mobafire.com/images/avatars/jayce-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jayce_0.jpg'},
    {name: 'Jhin', role: 'adc', picture: 'https://www.mobafire.com/images/avatars/jhin-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg'},
    {name: 'Jinx', role: 'adc', picture: 'https://www.mobafire.com/images/avatars/jinx-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg'},
    {name: "Kai'Sa", role: 'adc', picture: 'https://www.mobafire.com/images/avatars/kaisa-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg'},
    {name: 'Kalista', role: 'adc', picture: 'https://www.mobafire.com/images/avatars/kalista-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kalista_0.jpg'},
    {name: 'Karma', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/karma-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karma_0.jpg'},
    {name: 'Karthus', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/karthus-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karthus_0.jpg'},
    {name: 'Kassadin', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/kassadin-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kassadin_0.jpg'},
    {name: 'Katarina', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/katarina-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg'},
    {name: 'Kayle', role: 'top', picture: 'https://www.mobafire.com/images/avatars/kayle-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayle_3.jpg'},
    {name: 'Kayn', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/kayn-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayn_0.jpg'},
    {name: 'Kennen', role: 'top', picture: 'https://www.mobafire.com/images/avatars/kennen-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_0.jpg'},
    {name: "Kha'Zix", role: 'jg', picture: 'https://www.mobafire.com/images/avatars/khazix-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Khazix_0.jpg'},
    {name: 'Kindred', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/kindred-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kindred_0.jpg'},
    {name: 'Kled', role: 'top', picture: 'https://www.mobafire.com/images/avatars/kled-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kled_0.jpg'},
    {name: "Kog'Maw", role: 'adc', picture: 'https://www.mobafire.com/images/avatars/kogmaw-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KogMaw_0.jpg'},
    {name: 'LeBlanc', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/leblanc-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leblanc_0.jpg'},
    {name: 'Lee Sin', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/lee-sin-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg'},
    {name: 'Leona', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/leona-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leona_0.jpg'},
    {name: 'Lillia', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/lillia-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lillia_0.jpg'},
    {name: 'Lissandra', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/lissandra-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lissandra_0.jpg'},
    {name: 'Lucian', role: 'adc', picture: 'https://www.mobafire.com/images/avatars/lucian-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucian_0.jpg'},
    {name: 'Lulu', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/lulu-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lulu_0.jpg'},
    {name: 'Lux', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/lux-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg'},
    {name: 'Malphite', role: 'top', picture: 'https://www.mobafire.com/images/avatars/malphite-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg'},
    {name: 'Malzahar', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/malzahar-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malzahar_0.jpg'},
    {name: 'Maokai', role: 'top', picture: 'https://www.mobafire.com/images/avatars/maokai-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg'},
    {name: 'Master Yi', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/master-yi-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_0.jpg'},
    {name: 'Miss Fortune', role: 'adc', picture: 'https://www.mobafire.com/images/avatars/miss-fortune-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg'},
    {name: 'Mordekaiser', role: 'top', picture: 'https://www.mobafire.com/images/avatars/mordekaiser-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Mordekaiser_0.jpg'},
    {name: 'Morgana', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/morgana-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_3.jpg'},
    {name: 'Nami', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/nami-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_0.jpg'},
    {name: 'Nasus', role: 'top', picture: 'https://www.mobafire.com/images/avatars/nasus-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg'},
    {name: 'Nautilus', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/nautilus-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nautilus_0.jpg'},
    {name: 'Neeko', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/neeko-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Neeko_0.jpg'},
    {name: 'Nidalee', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/nidalee-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nidalee_0.jpg'},
    {name: 'Nocturne', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/nocturne-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nocturne_0.jpg'},
    {name: 'Nunu & Willump', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/nunu-amp-willump-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nunu_0.jpg'},
    {name: 'Olaf', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/olaf-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Olaf_0.jpg'},
    {name: 'Orianna', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/orianna-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_0.jpg'},
    {name: 'Ornn', role: 'top', picture: 'https://www.mobafire.com/images/avatars/ornn-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ornn_0.jpg'},
    {name: 'Pantheon', role: 'top', picture: 'https://www.mobafire.com/images/avatars/pantheon-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pantheon_0.jpg'},
    {name: 'Poppy', role: 'top', picture: 'https://www.mobafire.com/images/avatars/poppy-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_0.jpg'},
    {name: 'Pyke', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/pyke-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg'},
    {name: 'Qiyana', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/qiyana-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Qiyana_0.jpg'},
    {name: 'Quinn', role: 'top', picture: 'https://www.mobafire.com/images/avatars/quinn-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Quinn_0.jpg'},
    {name: 'Rakan', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/rakan-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rakan_0.jpg'},
    {name: 'Rammus', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/rammus-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rammus_0.jpg'},
    {name: "Rek'Sai", role: 'jg', picture: 'https://www.mobafire.com/images/avatars/reksai-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/RekSai_0.jpg'},
    {name: 'Rell', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/rell-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rell_0.jpg'},
    {name: 'Renekton', role: 'top', picture: 'https://www.mobafire.com/images/avatars/renekton-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renekton_0.jpg'},
    {name: 'Rengar', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/rengar-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rengar_0.jpg'},
    {name: 'Riven', role: 'top', picture: 'https://www.mobafire.com/images/avatars/riven-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_0.jpg'},
    {name: 'Rumble', role: 'top', picture: 'https://www.mobafire.com/images/avatars/rumble-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rumble_0.jpg'},
    {name: 'Ryze', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/ryze-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ryze_0.jpg'},
    {name: 'Samira', role: 'adc', picture: 'https://www.mobafire.com/images/avatars/samira-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Samira_0.jpg'},
    {name: 'Sejuani', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/sejuani-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sejuani_0.jpg'},
    {name: 'Senna', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/senna-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Senna_0.jpg'},
    {name: 'Seraphine', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/seraphine-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_0.jpg'},
    {name: 'Sett', role: 'top', picture: 'https://www.mobafire.com/images/avatars/sett-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg'},
    {name: 'Shaco', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/shaco-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_0.jpg'},
    {name: 'Shen', role: 'top', picture: 'https://www.mobafire.com/images/avatars/shen-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shen_0.jpg'},
    {name: 'Shyvana', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/shyvana-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shyvana_0.jpg'},
    {name: 'Singed', role: 'top', picture: 'https://www.mobafire.com/images/avatars/singed-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Singed_0.jpg'},
    {name: 'Sion', role: 'top', picture: 'https://www.mobafire.com/images/avatars/sion-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sion_0.jpg'},
    {name: 'Sivir', role: 'adc', picture: 'https://www.mobafire.com/images/avatars/sivir-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sivir_0.jpg'},
    {name: 'Skarner', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/skarner-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Skarner_0.jpg'},
    {name: 'Sona', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/sona-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_0.jpg'},
    {name: 'Soraka', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/soraka-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Soraka_0.jpg'},
    {name: 'Swain', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/swain-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Swain_0.jpg'},
    {name: 'Sylas', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/sylas-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sylas_0.jpg'},
    {name: 'Syndra', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/syndra-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg'},
    {name: 'Tahm Kench', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/tahm-kench-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TahmKench_0.jpg'},
    {name: 'Taliyah', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/taliyah-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taliyah_0.jpg'},
    {name: 'Talon', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/talon-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Talon_0.jpg'},
    {name: 'Taric', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/taric-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_0.jpg'},
    {name: 'Teemo', role: 'top', picture: 'https://www.mobafire.com/images/avatars/teemo-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg'},
    {name: 'Thresh', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/thresh-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg'},
    {name: 'Tristana', role: 'adc', picture: 'https://www.mobafire.com/images/avatars/tristana-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tristana_0.jpg'},
    {name: 'Trundle', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/trundle-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Trundle_0.jpg'},
    {name: 'Tryndamere', role: 'top', picture: 'https://www.mobafire.com/images/avatars/tryndamere-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tryndamere_0.jpg'},
    {name: 'Twisted Fate', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/twisted-fate-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TwistedFate_0.jpg'},
    {name: 'Twitch', role: 'adc', picture: 'https://www.mobafire.com/images/avatars/twitch-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Twitch_0.jpg'},
    {name: 'Udyr', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/udyr-classic.png', selectable: true, coverPicture: 'https://pbs.twimg.com/media/ERFKIbnW4AIXZLf.jpg'},
    {name: 'Urgot', role: 'top', picture: 'https://www.mobafire.com/images/avatars/urgot-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Urgot_0.jpg'},
    {name: 'Varus', role: 'adc', picture: 'https://www.mobafire.com/images/avatars/varus-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Varus_0.jpg'},
    {name: 'Vayne', role: 'adc', picture: 'https://www.mobafire.com/images/avatars/vayne-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_0.jpg'},
    {name: 'Veigar', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/veigar-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Veigar_0.jpg'},
    {name: "Vel'Koz", role: 'sup', picture: 'https://www.mobafire.com/images/avatars/velkoz-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Velkoz_0.jpg'},
    {name: 'Vi', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/vi-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vi_0.jpg'},
    {name: 'Viego', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/viego-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viego_0.jpg'},
    {name: 'Viktor', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/viktor-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viktor_0.jpg'},
    {name: 'Vladimir', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/vladimir-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vladimir_0.jpg'},
    {name: 'Volibear', role: 'top', picture: 'https://www.mobafire.com/images/avatars/volibear-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Volibear_0.jpg'},
    {name: 'Warwick', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/warwick-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Warwick_0.jpg'},
    {name: 'Wukong', role: 'top', picture: 'https://www.mobafire.com/images/avatars/wukong-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg'},
    {name: 'Xayah', role: 'adc', picture: 'https://www.mobafire.com/images/avatars/xayah-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xayah_0.jpg'},
    {name: 'Xerath', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/xerath-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xerath_0.jpg'},
    {name: 'Xin Zhao', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/xin-zhao-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/XinZhao_0.jpg'},
    {name: 'Yasuo', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/yasuo-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg'},
    {name: 'Yone', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/yone-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_0.jpg'},
    {name: 'Yorick', role: 'top', picture: 'https://www.mobafire.com/images/avatars/yorick-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yorick_0.jpg'},
    {name: 'Yuumi', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/yuumi-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yuumi_0.jpg'},
    {name: 'Zac', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/zac-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zac_0.jpg'},
    {name: 'Zed', role:'mid', picture: 'https://www.mobafire.com/images/avatars/zed-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg'},
    {name: 'Ziggs', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/ziggs-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ziggs_0.jpg'},
    {name: 'Zilean', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/zilean-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zilean_0.jpg'},
    {name: 'Zoe', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/zoe-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zoe_0.jpg'},
    {name: 'Zyra', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/zyra-classic.png', selectable: true, coverPicture: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_0.jpg'}
  ]

  declarePeriod: boolean = false
  banPeriod: boolean = false
  banReviewPeriod: boolean = false
  pickPeriod: boolean = false
  loadOutPeriod: boolean = false

  filter: string = 'mid'

  timerActive: boolean = false
  timerNumber: number = 15

  currentChampionSelected: any = null
  currentChampionSelectedIndex: number = null
  currentChampionBanSelected: any = null
  currentChampionBanSelectedIndex: number = null

  playerPick: boolean = false
  allyPicks: any = []
  enemyPicks: any = []

  playerBan: any = null
  allyBans: any = []
  enemyBans: any = []

  championsAvaliables: any = []


  constructor(private router: Router) {

  }

  ngOnInit(): void {

    setTimeout( () => {

      document.getElementById('player1').classList.remove('ally-team-champs-intro-animation')

      setTimeout( () => {

        document.getElementById('player2').classList.remove('ally-team-champs-intro-animation')

        setTimeout( () => {

          document.getElementById('player3').classList.remove('ally-team-champs-intro-animation')
          document.getElementById('assigned').style.opacity = '1' 

          setTimeout( () => {
  
            document.getElementById('player4').classList.remove('ally-team-champs-intro-animation')

            setTimeout( () => {
    
              document.getElementById('player5').classList.remove('ally-team-champs-intro-animation')

              setTimeout( () => {

                this.initDeclarePeriod()

                setTimeout( () => {

                  this.timerActive = false

                  document.getElementById('allyBarWrapper').classList.remove('blue-bar')
                  document.getElementById('enemyBarWrapper').classList.remove('blue-bar')
                  document.getElementById('allyBar').classList.remove('bar-fifteen-seconds')
                  document.getElementById('enemyBar').classList.remove('bar-fifteen-seconds')
                  document.getElementById('allyBarWrapper').classList.add('red-bar')
                  document.getElementById('enemyBarWrapper').classList.add('red-bar')

                  setTimeout( () => {
  
                    this.initBanPeriod()

                    setTimeout( () => {

                      if(this.timerActive == true) {

                        this.timerActive = false  

                      }

                      if(this.playerBan == null) {

                        this.router.navigateByUrl('/client/play/lobby')

                      }

                    }, 31000)
  
                  }, 100)

                }, 15000)

              },1000 )
    
            },700 )
  
          },800 )

        },500 )

      },700 )

    }, 1700 )

  }



  initDeclarePeriod() {

    this.declarePeriod = true

    document.getElementById('assigned').style.opacity = '0' 
    document.getElementById('overlayBackground').style.opacity = '.6' 
    document.getElementById('mainContent').style.opacity = '1' 
    document.getElementById('mainContent').style.zIndex = '1' 
    document.getElementById('player1').classList.add('ally-team-champs-border')
    document.getElementById('player2').classList.add('ally-team-champs-border')
    document.getElementById('player3').classList.add('ally-team-champs-border')
    document.getElementById('player4').classList.add('ally-team-champs-border')
    document.getElementById('player5').classList.add('ally-team-champs-border')

    document.getElementById('allyBarWrapper').classList.add('blue-bar')
    document.getElementById('enemyBarWrapper').classList.add('blue-bar')
    document.getElementById('allyBar').classList.add('bar-fifteen-seconds')
    document.getElementById('enemyBar').classList.add('bar-fifteen-seconds')

    this.timerActive = true
    this.initTimer()

  }



  initBanPeriod() {

    this.declarePeriod = false
    this.banPeriod = true

    document.getElementById('overlayBackground').classList.add('overlay-background-ban')
    document.getElementById('allyBar').classList.add('bar-thirty-seconds')
    document.getElementById('enemyBar').classList.add('bar-thirty-seconds')
    document.getElementById('enemyTeamChamps').classList.add('enemy-team-champs-visible')

    this.timerNumber = 30
    this.timerActive = true
    this.initTimer()

  }



  initBanReviewPeriod() {

    document.getElementById('allyBarWrapper').style.opacity = '0'
    document.getElementById('enemyBarWrapper').style.opacity = '0'
    document.getElementById('allyBar').classList.remove('bar-thirty-seconds')
    this.banPeriod = false
    this.banReviewPeriod = true
    this.timerActive = false
    this.timerNumber = 30

    do {

      let randomChampion = this.champions[Math.floor(Math.random() * this.champions.length)]

      this.allyBans.push(randomChampion)

    } while( this.allyBans.length < 4 )

    console.log('Bans alidados:', this.allyBans)

    do {

      let randomChampion = this.champions[Math.floor(Math.random() * this.champions.length)]

      this.enemyBans.push(randomChampion)

    } while( this.enemyBans.length < 5 )

    setTimeout( () => {

      for(let ban of this.enemyBans) {
  
        this.champions[this.champions.indexOf(ban)].selectable = false
  
      }

      for(let ban of this.allyBans) {
  
        this.champions[this.champions.indexOf(ban)].selectable = false
  
      }

      this.championsAvaliables = this.champions.filter(champion => champion.selectable == true)

      do {

        let randomChampion = this.championsAvaliables[Math.floor(Math.random() * this.championsAvaliables.length)]
  
        this.enemyPicks.push(randomChampion)
  
      } while( this.enemyPicks.length < 5 )

      do {

        let randomChampion = this.championsAvaliables[Math.floor(Math.random() * this.championsAvaliables.length)]
  
        this.allyPicks.push(randomChampion)
  
      } while( this.allyPicks.length < 4 )

      console.log('Picks Aliados', this.allyPicks)

    },2000 )

    setTimeout( () => {

      document.getElementById('overlayBackground').classList.remove('overlay-background-ban')
      document.getElementById('bans').style.opacity = '0'
      document.getElementById('bans').style.zIndex = '-2'
      document.getElementById('chamiponList').style.opacity = '1'
      document.getElementById('chamiponList').style.zIndex = '2'

      this.initPickPeriod()

    }, 7000 )


  }



  initPickPeriod() {

    document.getElementById('allyBarWrapper').classList.remove('red-bar')
    document.getElementById('allyBarWrapper').classList.add('blue-bar')
    document.getElementById('allyBarWrapper').style.opacity = '1'
    document.getElementById('allyBar').classList.add('bar-thirty-seconds')
    this.banReviewPeriod = false
    this.pickPeriod = true
    this.timerNumber = 30
    this.timerActive = true

    setTimeout(()=> { 

      if(this.playerPick == false) {
        
        this.router.navigateByUrl('/client/play/lobby')

      }

     }, 30000)

  }



  initLoadOutPeriod() {

    this.loadOutPeriod = true
    document.getElementById('allyBar').classList.add('bar-thirty-seconds')
    document.getElementById('allyBar').style.width = '100%'
    document.getElementById('enemyBarWrapper').classList.add('blue-bar')
    document.getElementById('enemyBar').classList.add('bar-thirty-seconds')
    document.getElementById('enemyBar').style.width = '100%'

    console.log(this.allyPicks)

    localStorage.setItem('playerPick', JSON.stringify(this.currentChampionSelected))
    localStorage.setItem('allyTeam', JSON.stringify(this.allyPicks))
    localStorage.setItem('enemyTeam', JSON.stringify(this.enemyPicks))

    setTimeout(()=> { 

      this.router.navigateByUrl('/client/game/loading')

     }, 30000)

  }



  initTimer() {

    setTimeout( () => {

      this.timerNumber = this.timerNumber - 1

      if(this.timerNumber > 0) {

        this.initTimer()

      }

    }, 1000)


  }



  pickEnemyChampions() {

    do {

      let randomChampion = this.champions[Math.floor(Math.random() * this.champions.length)]

      this.enemyBans.push(randomChampion)

    } while( this.enemyPicks.length < 5 )

    setTimeout( () => {

      for(let ban of this.enemyBans) {
  
        this.champions[this.champions.indexOf(ban)].selectable = false
  
    }

    }, 2000)

  }



  selectChampion(champion, index) {

    if(this.champions[index].selectable == true) {

      if(this.declarePeriod || this.pickPeriod) {

        this.currentChampionSelected = champion
        this.currentChampionSelectedIndex = index

      } else if(this.banPeriod) {

        this.currentChampionBanSelected = champion
        this.currentChampionBanSelectedIndex = index

      }

    }

  }



  banChampion() {

    if(this.currentChampionBanSelected !== null) {
    
      document.getElementById('chamiponList').style.opacity = '0'
      document.getElementById('chamiponList').style.zIndex = '-1'

      this.playerBan = this.currentChampionBanSelected
      this.champions[this.currentChampionBanSelectedIndex].selectable = false

      console.log(this.champions[this.currentChampionBanSelectedIndex])

      this.initBanReviewPeriod()

    }

  }



  pickChampion() {

    console.log(this.enemyBans)

    if(this.currentChampionSelected !== null) {

      this.playerPick = true
      this.pickPeriod = false
      this.timerActive = false
      this.timerNumber = 30
      document.getElementById('chamiponList').style.opacity = '0'
      document.getElementById('chamiponList').style.zIndex = '-2'
      document.getElementById('allyBar').classList.remove('bar-thirty-seconds')
      document.getElementById('enemyBar').classList.remove('bar-thirty-seconds')
      document.getElementById('enemyBarWrapper').classList.remove('red-bar')

      setTimeout(()=>{

        this.initLoadOutPeriod()

      },1)

    }

  }



  changeFilter(filter) {

    if(this.filter == filter) {

      this.filter = 'all'

    } else {

      this.filter = filter

    }

  }

}
