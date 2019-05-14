dataSetVersion = "2019-05-11"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Maji de Watashi ni Koishinasai!", key: "maji" },
      { name: "Maji de Watashi ni Koishinasai! S", key: "majiS" },
      { name: "Maji de Watashi ni Koishinasai! A-1", key: "majiA1" },
      { name: "Maji de Watashi ni Koishinasai! A-2", key: "majiA2" },
      { name: "Maji de Watashi ni Koishinasai! A-3", key: "majiA3" },
      { name: "Maji de Watashi ni Koishinasai! A-4", key: "majiA4" },
      { name: "Maji de Watashi ni Koishinasai! A-5", key: "majiA5" },
/*       { name: "Perfect Cherry Blossom", tooltip: "07 - Youyoumu", key: "PCB" },
      { name: "Immaterial and Missing Power", tooltip: "07.5 - Suimusou", key: "IaMP" },
      { name: "Imperishable Night", tooltip: "08 - Eiyashou", key: "IN" },
      { name: "Phantasmagoria of Flower View", tooltip: "09 - Kaeidzuka", key: "PoFV" },
      { name: "Shoot the Bullet", tooltip: "09.5 - Bunkachou", key: "StB" },
      { name: "Mountain of Faith", tooltip: "10 - Fuujinroku", key: "MoF" },
      { name: "Scarlet Weather Rhapsody", tooltip: "10.5 - Hisouten", key: "SWR" },
      { name: "Subterranean Animism", tooltip: "11 - Chireiden", key: "SA" },
      { name: "Undefined Fantastic Object", tooltip: "12 - Seirensen", key: "UFO" },
      { name: "Touhou Hisoutensoku", tooltip: "12.3 - Hisoutensoku", key: "soku" },
      { name: "Double Spoiler", tooltip: "12.5 - Bunkachou", key: "DS" },
      { name: "Great Fairy Wars", tooltip: "12.8 - Daisensou", key: "GFW" },
      { name: "Ten Desires", tooltip: "13 - Shinreibyou", key: "TD" },
      { name: "Hopeless Masquerade", tooltip: "13.5 - Shinkirou", key: "HM" },
      { name: "Double Dealing Character", tooltip: "14 - Kishinjou", key: "DDC" },
      { name: "Impossible Spell Card", tooltip: "14.3 - Amanojaku", key: "ISC" },
      { name: "Urban Legend in Limbo", tooltip: "14.5 - Shinpiroku", key: "ULiL" },
      { name: "Legacy of Lunatic Kingdom", tooltip: "15 - Kanjuden", key: "LoLK" },
      { name: "Antinomy of Common Flowers", tooltip: "15.5 - Hyouibana", key: "AoCF" },
      { name: "Hidden Star in Four Seasons", tooltip: "16 - Tenkuushou", key: "HSiFS" } */
    ]
  },
/*   {
    name: "Filter by Stage Enemy Appearances",
    key: "stage",
    tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
    checked: false,
    sub: [ { name: "Stage 1", key: "st1" }, { name: "Stage 2", key: "st2" }, { name: "Stage 3", key: "st3" }, { name: "Stage 4", key: "st4" }, { name: "Stage 5/Penultimate", tooltip: "Stage 4 in 5-stage games, and Stage 8 in 9-stage games.", key: "st5" }, { name: "Stage 6/Final", key: "st6" }, { name: "Stage EX/Phantasm", key: "ex" }
    ]
  }, */
  {
    name: "Remove Non-Girls",
    key: "notgirl",
	checked: false,
    tooltip: "Check this to remove all non-female characters."
  },
  {
    name: "Remove Non-Boys",
    key: "notboy",
	checked: false,
    tooltip: "Check this to remove all non-male characters."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Touma Aoi",
    img: "EqnEilg.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notgirl: true
    }
  },
  {
    name: "Momoyo Kawakami",
    img: "aUfXQMV.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Kazuko Kawakami",
    img: "8nMpDHr.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Miyako Shiina",
    img: "La0b4ag.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Yukie Mayuzumi",
    img: "O5UB4c2.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Christiane Friedrich",
    img: "tyuHvaT.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Mayo Amakasu",
    img: "T1QBypi.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Chika Ogasawara",
    img: "j35tl50.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Umeko Kojima",
    img: "jsfelB1.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Shouichi Kazama",
    img: "4Jtqtd3.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notgirl: true
    }
  },
  {
    name: "Gakuto Shimazu",
    img: "yYo2w6n.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notgirl: true
    }
  },
  {
    name: "Takuya Morooka",
    img: "qkrYoLG.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notgirl: true
    }
  },
  {
    name: "Tadakatsu Minamoto",
    img: "XeOrYb5.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notgirl: true
    }
  },
  {
    name: "Ikurou Fukumoto",
    img: "zmZwVnQ.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notgirl: true
    }
  },
  {
    name: "Suguru Oogushi",
    img: "BIo5l2R.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notgirl: true
    }
  },
  {
    name: "Mitsuru Kumagai",
    img: "Ma5WjCg.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4" ],
	  notgirl: true
    }
  },
  {
    name: "Kyojin Usami",
    img: "vhtOTZx.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notgirl: true
    }
  },
  {
    name: "Frank Friedrich",
    img: "q8dlMFk.png",
    opts: {
      series: [ "maji", "majiS", "majiA2", "majiA5" ],
      notgirl: true
    }
  },
  {
    name: "Hideo Kuki",
    img: "wofQWtP.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notgirl: true
    }
  },
  {
    name: "Azumi Oshitari",
    img: "NxcpXmv.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Jun Inoue",
    img: "aeaAQ0w.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notgirl: true
    }
  },
  {
    name: "Koyuki Sakakibara",
    img: "CToQvYL.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Cookie",
    img: "wdIbXLB.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA5" ],
	  notgirl: true
    }
  },
  {
    name: "Tesshin Kawakami",
    img: "zh9VdZZ.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notgirl: true
    }
  },
  {
    name: "Reiko Shimazu",
    img: "2qzlEl8.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Ami Itagaki",
    img: "UVwJ89l.png",
    opts: {
      series: [ "maji", "majiS", "majiA2", "majiA3" ],
	  notboy: true
    }
  },
  {
    name: "Tatsuko Itagaki",
    img: "CBu33aL.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3" ],
	  notboy: true
    }
  },
  {
    name: "Ryuuhei Itagaki",
    img: "8SZrTJx.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notgirl: true
    }
  },
  {
    name: "Angel Itagaki",
    img: "xTYvvAl.png",
    opts: {
      series: [ "maji", "majiS", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Margit Eberbach",
    img: "Rvl3S9b.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Cookie 2",
    img: "bkCqNxQ.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4" ],
	  notgirl: true
    }
  },
  {
    name: "Kuroko Haguro",
    img: "1MHXNjo.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Manager",
    img: "5Krtgip.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA5" ],
	  notgirl: true
    }
  },
  {
    name: "Shihandai Lu",
    img: "Q4njFKJ.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notgirl: true
    }
  },
  {
    name: "Kokoro Fushikawa",
    img: "NDNIHNZ.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Maro Ayanokouji",
    img: "bwwwgWT.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA3", "majiA4" ],
	  notgirl: true
    }
  },
  {
    name: "Souri",
    img: "6DmQH0k.png",
    opts: {
      series: [ "maji", "majiS", "majiA2" ],
	  notgirl: true
    }
  },
  {
    name: "Ageha Kuki",
    img: "hl58ZNn.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Cookie 3",
    img: "fHYRXVZ.png",
    opts: {
      series: [ "maji", "majiS", "majiA2" ],
	  notgirl: true
    }
  },
  {
    name: "Iyo Oowada",
    img: "9WGGHlS.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2" ],
	  notboy: true
    }
  },
  {
    name: "Kyoubu Shakadou",
    img: "UQWTaQW.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2" ],
	  notgirl: true
    }
  },
  {
    name: "Kosugi Musashi",
    img: "1kznmf8.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Yumiko Yaba",
    img: "Ko2OeDE.png",
    opts: {
      series: [ "maji", "majiS", "majiA1", "majiA2", "majiA3", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Kojuurou Takeda",
    img: "Jtl6AVI.png",
    opts: {
      series: [ "majiS", "majiA1", "majiA2", "majiA3", "majiA5" ],
      notgirl: true
    }
  },
  {
    name: "Colonel",
    img: "ELfBURr.png",
    opts: {
      series: [ "majiS", "majiA2", "majiA3", "majiA5" ],
      notgirl: true
    }
  },
  {
    name: "Cookie 4",
    img: "kMzCivV.png",
    opts: {
      series: [ "majiS", "majiA2" ],
	  notboy: true
    }
  },
  {
    name: "Tsubame Matsunaga",
    img: "Z1yQnic.png",
    opts: {
      series: [ "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Monshiro Kuki",
    img: "Ase2Szo.png",
    opts: {
      series: [ "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Hume Hellsing",
    img: "qxVBfxG.png",
    opts: {
      series: [ "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notgirl: true
    }
  },
  {
    name: "Claudio Nero",
    img: "Yngjqck.png",
    opts: {
      series: [ "majiS", "majiA1", "majiA2", "majiA3" ],
	  notgirl: true
    }
  },
  {
    name: "Hisanobu Matsunaga",
    img: "L2mS4mi.png",
    opts: {
      series: [ "majiS", "majiA3" ],
	  notgirl: true
    }
  },
  {
    name: "Stacy Connor",
    img: "NFLQrwo.png",
    opts: {
      series: [ "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Jinchu Lee",
    img: "2KoyJpe.png",
    opts: {
      series: [ "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Daimaro Ayanokouji",
    img: "KXxb3gF.png",
    opts: {
      series: [ "majiS", "majiA1", "majiA2", "majiA3" ],
	  notgirl: true
    }
  },
  {
    name: "Gail Caracal",
    img: "3bxkP9O.png",
    opts: {
      series: [ "majiS", "majiA1", "majiA2" ],
	  notgirl: true
    }
  },
  {
    name: "Gates Caracal",
    img: "BayKn5h.png",
    opts: {
      series: [ "majiS", "majiA2", "majiA5" ],
	  notgirl: true
    }
  },
  {
    name: "Hikoichi Kyougoku",
    img: "DKRNCIx.png",
    opts: {
      series: [ "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notgirl: true
    }
  },
  {
    name: "Chong Lin",
    img: "uEbWXUg.png",
    opts: {
      series: [ "majiS", "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Jin Shi",
    img: "Lt3UQyY.png",
    opts: {
      series: [ "majiS", "majiA4" ],
	  notboy: true
    }
  },
  {
    name: "Zhi Yang",
    img: "CnYcteA.png",
    opts: {
      series: [ "majiS", "majiA3", "majiA4" ],
	  notboy: true
    }
  },
  {
    name: "Yoshitsune Minamoto",
    img: "GyA8Vvn.png",
    opts: {
      series: [ "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Benkei Musashibou",
    img: "ovsOONf.png",
    opts: {
      series: [ "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Yoichi Nasuno",
    img: "oa2B2wC.png",
    opts: {
      series: [ "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notgirl: true
    }
  },
  {
    name: "Seiso Hazakura",
    img: "duq8XZ9.png",
    opts: {
      series: [ "majiS", "majiA1", "majiA2", "majiA3", "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Koi Kiriyama",
    img: "0OCuxkA.png",
    opts: {
      series: [ "majiS", "majiA1", "majiA2", "majiA3" ],
	  notgirl: true
    }
  },
  {
    name: "Marple",
    img: "2TVeyTw.png",
    opts: {
      series: [ "majiS", "majiA1", "majiA2", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Tsubone Kuki",
    img: "g7TyUGo.png",
    opts: {
      series: [ "majiS", "majiA2", "majiA3" ],
	  notboy: true
    }
  },
  {
    name: "Sayaka Mayuzumi",
    img: "pnmMxcv.png",
    opts: {
      series: [ "majiS", "majiA1", "majiA2" ],
	  notboy: true
    }
  },
  {
    name: "Kagekiyo Naoe",
    img: "b6Y0uOG.png",
    opts: {
      series: [ "majiS", "majiA2", "majiA3", "majiA5" ],
	  notgirl: true
    }
  },
  {
    name: "Saki Naoe",
    img: "yVIjEBp.png",
    opts: {
      series: [ "majiS", "majiA1", "majiA2", "majiA3", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Takae Tachibana",
    img: "1txNEop.png",
    opts: {
      series: [ "majiS", "majiA3", "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Torako Michelle Nanjou",
    img: "Z8TXvmJ.png",
    opts: {
      series: [ "majiS", "majiA3", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Saburou Ishida",
    img: "yROCORl.png",
    opts: {
      series: [ "majiS", "majiA4" ],
	  notgirl: true
    }
  },
  {
    name: "Ukon Shima",
    img: "UNKlGoQ.png",
    opts: {
      series: [ "majiS", "majiA4" ],
	  notgirl: true
    }
  },
  {
    name: "Homura Ootomo",
    img: "OJVF6F0.png",
    opts: {
      series: [ "majiS", "majiA1", "majiA4" ],
	  notboy: true
    }
  },
  {
    name: "Muneo Chousokabe",
    img: "gl1vkvQ.png",
    opts: {
      series: [ "majiS", "majiA3", "majiA4" ],
	  notgirl: true
    }
  },
  {
    name: "Motochika Mouri",
    img: "mQM1E3B.png",
    opts: {
      series: [ "majiS", "majiA2", "majiA3", "majiA4" ],
	  notgirl: true
    }
  },
  {
    name: "Haru Amago",
    img: "cZtcUML.png",
    opts: {
      series: [ "majiS", "majiA4" ],
	  notgirl: true
    }
  },
  {
    name: "Issuke Hachiya",
    img: "6MOJMAw.png",
    opts: {
      series: [ "majiS", "majiA1", "majiA4" ],
	  notgirl: true
    }
  },
  {
    name: "Hidemi Ukita",
    img: "GLrGMi4.png",
    opts: {
      series: [ "majiS", "majiA1", "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Yoshitsugu Oomura",
    img: "imTjp8f.png",
    opts: {
      series: [ "majiS", "majiA2", "majiA4" ],
	  notgirl: true
    }
  },
  {
    name: "Takamasa Ryuuzouji",
    img: "ywzs6DA.png",
    opts: {
      series: [ "majiS", "majiA3", "majiA4" ],
	  notgirl: true
    }
  },
  {
    name: "Tadashi Nabeshima",
    img: "hUGjON0.png",
    opts: {
      series: [ "majiS", "majiA1", "majiA4" ],
	  notgirl: true
    }
  },
  {
    name: "Taisei Mayuzumi",
    img: "DRTmpX4.png",
    opts: {
      series: [ "majiA1", "majiA2" ],
	  notgirl: true
    }
  },
  {
    name: "Bunta Musashi",
    img: "MDsNlOn.png",
    opts: {
      series: [ "majiA1" ],
	  notgirl: true
    }
  },
  {
    name: "Uonuma",
    img: "7oCCh5b.png",
    opts: {
      series: [ "majiA1", "majiA2", "majiA3" ],
	  notgirl: true
    }
  },
  {
    name: "Chourou Fuuma",
    img: "svpdzDv.png",
    opts: {
      series: [ "majiA1" ],
	  notgirl: true
    }
  },
  {
    name: "Cookie 4IS",
    img: "1sLymSb.png",
    opts: {
      series: [ "majiA2" ],
	  notboy: true
    }
  },
  {
    name: "Mikado Kuki",
    img: "VEaxoN0.png",
    opts: {
      series: [ "majiA2", "majiA3", "majiA5" ],
	  notgirl: true
    }
  },
  {
    name: "Kaikei Tsugaru",
    img: "RHOSf1L.png",
    opts: {
      series: [ "majiA2" ],
	  notgirl: true
    }
  },
  {
    name: "Zozma Belfegor",
    img: "H6GTypl.png",
    opts: {
      series: [ "majiA2", "majiA3", "majiA5" ],
	  notgirl: true
    }
  },
  {
    name: "Mukade",
    img: "d7igrrN.png",
    opts: {
      series: [ "majiA3" ],
	  notgirl: true
    }
  },
  {
    name: "Sheila Colombo",
    img: "MgrW7AL.png",
    opts: {
      series: [ "majiA3", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Misago Matsunaga",
    img: "6TV9rGY.png",
    opts: {
      series: [ "majiA3" ],
	  notboy: true
    }
  },
  {
    name: "Che Dominguez",
    img: "JSIh573.png",
    opts: {
      series: [ "majiA3", "majiA5" ],
	  notgirl: true
    }
  },
  {
    name: "Sheng Gongsun",
    img: "bNRz3gu.png",
    opts: {
      series: [ "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Song Wu",
    img: "aigULF7.png",
    opts: {
      series: [ "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Wengong Shi",
    img: "VwT48GN.png",
    opts: {
      series: [ "majiA4", "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Yuusai Mogami",
    img: "upDZWBd.png",
    opts: {
      series: [ "majiA5" ],
	  notgirl: true
    }
  },
  { 
    name: "Siegrun Kohlschreiber",
    img: "uszhDIT.png", 
    opts: {
      series: [ "majiA5" ],
	  notboy: true
    } 
  },
  {
    name: "Thelma Muller",
    img: "Aa4FQ3v.png",
    opts: {
      series: [ "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Aki Mogami",
    img: "xFmfcHw.png",
    opts: {
      series: [ "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Kojima Rohrbach",
    img: "LbJ54DV.png",
    opts: {
      series: [ "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Fine Bergmann",
    img: "Vc7Gx1A.png",
    opts: {
      series: [ "majiA5" ],
	  notboy: true
    }
  },
  {
    name: "Lisa Brinker",
    img: "mnZtOoK.png",
    opts: {
      series: [ "majiA5" ],
	  notboy: true
    }
  }
];
