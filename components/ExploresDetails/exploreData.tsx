import { Explore } from "@/types/explore";

function parseDescriptionToSections(htmlDescription: string): {title: string; content: string}[] {
  // Split by h1 headings
  const sections = htmlDescription.split(/<h1 className="text-2xl">|<\/h1>/);
  
  // Remove empty elements
  const filteredSections = sections.filter(section => section.trim().length > 0);
  
  // Pair titles with content
  const result = [];
  for (let i = 0; i < filteredSections.length; i += 2) {
    if (filteredSections[i + 1]) {
      result.push({
        title: filteredSections[i].trim(),
        content: filteredSections[i + 1].trim()
      });
    }
  }
  
  return result;
}


const exploreData: Explore[] = [
  {
    id: 1,
    path: "explorer/1",
    images: [
      "/images/explorer/1/sitestouristiques1-1.jpg",
      "/images/explorer/1/sitestouristiques1-2.jpg",
      "/images/explorer/1/sitestouristiques1-3.jpg",
      "/images/explorer/1/sitestouristiques1-4.jpg",
      "/images/explorer/1/sitestouristiques1-5.jpg",
      "/images/explorer/1/sitestouristiques1-6.jpg",
    ],
    name: "Roches peintes de Tafraout",
    resume_description: "Un site artistique unique où des roches naturelles ont été transformées en une œuvre d'art monumentale par l'artiste Jean Vérame, créant un paysage psychédélique au cœur de l'Anti-Atlas.",
    category: "culture",
    description: parseDescriptionToSections( `
              <h1 className="text-2xl">
              1. Les Roches Peintes – Une Merveille de Land Art dans l'Anti-Atlas Marocain
              </h1>

              Les Roches Peintes, également connues sous le nom de "Les Roches Bleues", constituent un site touristique singulier, niché au cœur des majestueuses montagnes de l'Anti-Atlas au Maroc. Situées à quelques kilomètres au sud du village d'Agrd Oudad, près de la ville de Tafraout, ces formations rocheuses transformées offrent un spectacle visuel saisissant. L'installation artistique à ciel ouvert déploie une "explosion de couleurs" au milieu d'un paysage désertique aride, créant un contraste visuellement captivant qui attire les regards. Ce lieu emblématique est devenu, au fil des décennies, le trait le plus célèbre du paysage granitique de Tafraout, témoignant d'un esprit créatif audacieux.   

              Ce site représente une fusion remarquable entre la grandeur de la nature et l'audace de l'intervention artistique humaine. Il est reconnu comme une œuvre significative de "Land Art", où l'immense environnement naturel sert de toile à une entreprise artistique monumentale. La magnificence des formations de granit rose, naturellement sculptées par des millénaires d'érosion, est ainsi rencontrée par une transformation audacieuse et délibérée, invitant à une profonde réflexion sur la relation entre l'art et la nature. La particularité de ce site réside dans la juxtaposition d'un paysage géologique ancien, façonné par des processus naturels sur des millions d'années, avec une forme d'art relativement moderne. La région de Tafraout est en effet caractérisée par ses formations de granit rose uniques et abrite même des sites d'art rupestre préhistorique. L'œuvre de Land Art de Jean Vérame, créée au 20e siècle, s'inscrit donc dans un continuum d'interactions humaines avec ce paysage, ajoutant une couche de sens qui dépasse la simple appréciation esthétique. Elle invite les visiteurs à considérer la longue histoire de la présence humaine et de l'expression artistique dans cet environnement aride.   
              <h1 className="text-2xl">
              2. La Vision de l'Artiste : Jean Vérame et la Naissance d'une Toile Désertique
              </h1>
              L'esprit visionnaire derrière Les Roches Peintes est Jean Vérame, un plasticien belge et artiste de Land Art, né en 1936. En 1984, Vérame a entrepris ce projet ambitieux, transformant le paysage granitique en un musée à ciel ouvert. Son travail s'inscrit dans une philosophie plus large de "Nomadic Art" ou "Land Art", où les environnements naturels deviennent la toile de l'artiste, souvent à une échelle monumentale.   
              F
              L'ampleur de cette entreprise était colossale, nécessitant 18 tonnes de peinture et environ trois mois de travail pour être achevée. Il est notable que Vérame a bénéficié de l'aide du service d'incendie de Tafraout, ce qui souligne un certain degré de soutien logistique local pour cette intervention artistique de grande envergure. L'artiste a méticuleusement peint des grottes, des fissures et des rochers individuels, faisant preuve de précision et de passion pour insuffler de la couleur et de la vie au paysage.   

              Les Roches Peintes de Tafraout ne sont pas une œuvre isolée dans la carrière de Vérame. Il a commencé à peindre des pierres dès 1975 dans les Cévennes, en France, et a réalisé des projets similaires dans d'autres paysages désertiques à travers le monde. Parmi ses autres réalisations notables figurent des projets dans le massif du Tibesti au Tchad (1989), le désert d'Atacama au Chili (2017), la Corse et le Sinaï en Égypte, démontrant une vision artistique cohérente appliquée à divers environnements mondiaux. Ces entreprises monumentales nécessitent souvent des années de préparation et des mois de réalisation, utilisant, lorsque cela est possible, des techniques locales et des pigments spécifiques pour chaque pays traversé.   

              Cependant, la notion d'art "nomade" associée à l'œuvre de Vérame à Tafraout présente une certaine ambiguïté. Bien que le terme puisse faire référence au déplacement de l'artiste entre différents sites, la quantité de peinture utilisée (18 tonnes) et la nécessité de repeindre les roches au fil du temps  soulèvent des questions sur l'impact environnemental à long terme de telles interventions. Des discussions académiques critiquent l'installation d'œuvres d'art dans des environnements naturels, s'interrogeant sur la marchandisation de la nature. Bien que Vérame ait utilisé des "techniques locales et des pigments" , le volume de peinture et la nécessité de restaurations périodiques interrogent l'empreinte écologique réelle de ces œuvres. Cette tension entre l'expression artistique revendiquée comme "nomade" et la réalité de son impact matériel et durable sur le paysage crée un récit stimulant pour les visiteurs. Elle invite à une réflexion plus large sur le tourisme durable et l'éthique de la modification des paysages naturels, ajoutant ainsi une profondeur intellectuelle à la description du site.   
              <h1 className="text-2xl">
              3. Une Symphonie de Pierre et de Couleur : Le Spectacle Visuel des Roches Peintes de Tafraout
              </h1>
              Le cadre des Roches Peintes est la magnifique chaîne de montagnes de l'Anti-Atlas, caractérisée par son paysage unique de "granit rose". Cet immense plateau de granit de couleur rose s'étend au sud de Tafraout, formant des reliefs et des collines distincts qui contrastent avec le cadre montagneux environnant. Au cours de millénaires de vent et d'érosion, la roche de la région a été sculptée en d'énormes blocs et formations géologiques aux formes inhabituelles, créant un "paysage d'un autre monde". Parmi les formations naturelles notables à proximité figurent le "Chapeau de Napoléon" à Agrd Oudad et la "Tête du Lion" (Djebel Lekst), toutes deux sculptées naturellement.   

              À l'origine, l'œuvre de Vérame se distinguait par des couleurs vives, le rouge et le bleu, appliquées sur les blocs de granit. Cependant, au fil des décennies, l'intense ensoleillement du désert et les processus d'érosion naturels ont fait pâlir ces couleurs, les transformant en des nuances plus douces, souvent décrites comme des teintes "layettes" (couleurs de bébé). Malgré cette décoloration, des efforts récents de repeinture ont redonné une "vibrance étonnante" aux couleurs, signe d'un entretien continu pour préserver l'œuvre d'art en tant qu'attraction touristique.   

              L'effet visuel de ces gigantesques roches de granit peintes est souvent qualifié de "psychédélique", "surréaliste" et "déroutant", créant un paysage que certains comparent à Mars ou à un décor de film western. La "palette multicolore" et l'échelle de l'entreprise sont impressionnantes, rendant la scène "attrayante" et laissant une impression durable. Lorsque les rayons du soleil dansent sur les surfaces colorées, les rochers semblent prendre vie, générant des "ombres et des reflets hypnotiques" qui enrichissent l'expérience visuelle dynamique.   

              Il est important de noter que l'œuvre d'art n'est pas statique ; elle évolue constamment. La décoloration initiale des couleurs vives et leur transformation en teintes pastel, suivie par des efforts de repeinture récents qui ont restauré leur éclat, illustrent une interaction continue entre l'art, son environnement naturel et les interventions humaines visant à sa préservation. Ce cycle de dégradation et de restauration fait partie intégrante de l'histoire des Roches Peintes. Il met en lumière les défis inhérents à la permanence du Land Art et la volonté de maintenir son existence continue en tant que point d'intérêt touristique. Cette évolution dynamique peut être perçue comme un élément à part entière de l'œuvre, ajoutant une profondeur narrative à l'expérience du visiteur et soulignant l'effort humain continu pour maintenir un dialogue artistique avec la nature.   
              <h1 className="text-2xl">
              4. Échos Culturels et Impressions des Visiteurs : L'Impact Durable des Roches Peintes
              </h1>
              Les Roches Peintes sont largement reconnues comme un "témoignage de l'esprit créatif que l'on peut trouver au cœur du Maroc". Elles offrent un exemple unique de la manière dont la créativité humaine peut interagir avec l'immensité de la nature, attirant des visiteurs des quatre coins du monde.   

              L'œuvre est connue pour susciter des réactions fortes et souvent polarisées ; "on aime ou on déteste". Certains visiteurs la considèrent comme des "graffitis laids, gratuits et inutiles", remettant en question la nécessité d'une telle intervention dans un paysage naturellement magnifique. Inversement, beaucoup trouvent une beauté particulière en s'approchant, appréciant de se promener parmi les rochers, et reconnaissent que la scène "a fait sourire et a certainement laissé une impression", la décrivant comme "inoubliable". Le débat lui-même fait partie de l'attrait de l'art, car il "génère des opinions différentes et ne plaît pas à tout le monde", remplissant ainsi un objectif fondamental de l'art.   

              Tafraout est profondément enracinée dans l'héritage et la culture amazighes (berbères), étant reconnue comme le "cœur de la culture amazighe". La présence des Roches Peintes, bien qu'étant une addition artistique moderne, fait désormais partie intégrante de l'expérience globale du visiteur, qui inclut l'exploration des maisons amazighes traditionnelles, de l'artisanat local et la compréhension de leur mode de vie. Le site, aux côtés d'autres formations naturelles comme le "Chapeau de Napoléon", est un géomorphosite nommé dans le contexte local, ce qui indique son intégration dans l'identité régionale.   

              Malgré les controverses initiales et l'érosion naturelle, les roches ont été "repeintes assez récemment", ce qui témoigne d'un engagement clair envers leur préservation. Cette restauration démontre la manière dont "l'autorité locale valorise sa qualité artistique et son potentiel touristique", reconnaissant son rôle dans l'attraction des visiteurs et la contribution à l'économie de la région. La popularité du site auprès des visiteurs, même sans monétisation directe par des billetteries, souligne sa valeur intrinsèque en tant qu'attraction. Le fait que l'œuvre soit activement entretenue, malgré les débats esthétiques qu'elle suscite, met en évidence une dimension économique fondamentale. La capacité du site à attirer des visiteurs se traduit par des bénéfices économiques, même indirects, ce qui motive les efforts de maintenance et de conservation. Cela transforme le site d'une simple curiosité artistique en un élément vital de l'infrastructure touristique de Tafraout, illustrant une approche pragmatique de la gestion des actifs culturels.   
              <h1 className="text-2xl">
              5. Planifier Votre Voyage : Découvrir Les Roches Peintes et au-delà
              </h1>
              Pour les visiteurs souhaitant explorer Les Roches Peintes, le site est situé à environ 8 km au sud de Tafraout, en direction d'Aguerd Oudad, puis en suivant les indications vers Tiznit sur une piste carrossable d'environ 1 km. Le site est "facilement accessible" en voiture, à vélo ou même à pied (randonnée), offrant diverses façons de l'explorer. La période optimale pour visiter est de février à mars, lorsque le temps est agréablement printanier et que les amandiers sont en fleurs, transformant le paysage avec leurs teintes roses et blanches. Le climat reste généralement doux tout au long de l'année, bien que les températures estivales puissent être élevées. Le site invite également les visiteurs à camper et à passer la nuit au milieu de ces impressionnants mastodontes multicolores, offrant une expérience nocturne unique.   

              Les Roches Peintes servent de point de départ pour une exploration plus vaste de la région de Tafraout, riche en attractions naturelles et culturelles :

              Formations naturelles : Explorez d'autres formations granitiques emblématiques comme le "Chapeau de Napoléon" (à Agrd Oudad) et la "Tête du Lion" (Djebel Lekst), naturellement sculptées.   
              Immersion culturelle : Visitez la Maison du Granit pour découvrir l'artisanat traditionnel du peuple Amazigh. Promenez-vous dans les charmants villages traditionnels, avec leurs maisons souvent construites à même d'énormes rochers, et imprégnez-vous de l'authentique hospitalité amazighe. Le souk du mercredi offre un aperçu vibrant de la vie locale. Découvrez les produits locaux renommés de Tafraout, tels que l'huile d'argan, les babouches en cuir traditionnelles, diverses variétés de miel (dont le miel de caroube) et les produits à base d'amandes.   
              Aventures en plein air : Les Gorges d'Aït Mansour, situées à environ 30 km au sud de Tafraout, offrent une beauté naturelle époustouflante, propice à la conduite ou à des randonnées de plusieurs jours (à éviter en juillet/août). Le paysage granitique remarquable attire les randonneurs et les grimpeurs du monde entier. La région abrite également d'anciens sites d'art rupestre préhistorique, offrant un aperçu de son passé lointain.   
              Les Roches Peintes ne sont pas une attraction isolée, mais un point d'entrée essentiel pour découvrir une région aux multiples facettes. La richesse des informations disponibles sur Tafraout – de ses caractéristiques géologiques uniques à sa culture amazighe vibrante, en passant par ses produits locaux et ses nombreuses activités de plein air – indique que le site des Roches Peintes agit comme un catalyseur pour une exploration régionale plus approfondie. Cette approche permet aux visiteurs de prolonger leur séjour et de s'immerger pleinement dans l'environnement naturel et culturel de Tafraout, maximisant ainsi l'engagement touristique et offrant une expérience de voyage plus complète.
    `),
    rating: 4.5
  },
  {
    id: 2,
    path: "explorer/2",
    images: [
      "/images/explorer/2/sitestouristiques2-1.jpeg",
      "/images/explorer/2/sitestouristiques2-2.webp",
    ],
    name: "La Tête du Lion",
    resume_description: "Formation rocheuse naturelle étonnante qui ressemble à une tête de lion, sculptée par l'érosion naturelle dans les montagnes de l'Anti-Atlas.",
    category: "nature",
    description:parseDescriptionToSections( `<h1 className="text-2xl">
La Tête du Lion
</h1>
      L'une des attractions phares de la ville de Tafraout est sans doute la Tête du Lion, une formation naturelle remarquable située dans le terrain accidenté du Jbel Lkest, la montagne qui domine la vallée d'Ammeln. Cette silhouette emblématique capture l'essence d'une tête de lion, parfaitement gravée dans l'immense paroi rocheuse par les forces de la nature.
<h1 className="text-2xl">
L'Art Naturel de la Tête du Lion
</h1>
La Tête du Lion est plus qu'une simple caractéristique géologique ; c'est un chef-d'œuvre d'art naturel, où le jeu de la lumière du jour et les contours du rocher créent une représentation vivante d'une visage de lion. Le succès de cette sculpture naturelle réside dans l'interaction dynamique entre lumière et ombre, qui, à certains moments de la journée, donne vie au visage du lion avec une clarté saisissante.
<h1 className="text-2xl">
Observer la Tête du Lion
</h1>
La scène magique de la Tête du Lion est mieux observée depuis un tronçon spécifique de la route qui part du carrefour menant à Agadir, montant vers Tizi Mlil. Ce point de vue offre une vue claire de la formation, permettant aux observateurs d'apprécier les détails intricats de ses caractéristiques. Le début de l'après-midi est le moment idéal pour visiter, car le soleil projette des ombres qui définissent les yeux et la bouche du lion, améliorant l'effet global de la silhouette.
<h1 className="text-2xl">
Destination Incontournable
</h1>
Pour les voyageurs de passage à Tafraout, s'arrêter pour admirer la Tête du Lion est incontournable. La formation sert de repère naturel qui incarne la beauté géologique unique de la région. Les visiteurs sont souvent frappés par l'ampleur et les détails précis que la nature a sculptés, ce qui en fait un sujet de fascination et d'admiration.
<h1 className="text-2xl">
L'Importance Géologique de la Tête du Lion
</h1>
La Tête du Lion n'est pas seulement un spectacle visuel, mais aussi un point d'intérêt géologique. Elle témoigne des pouvoirs érosifs de la nature, qui ont façonné la roche au fil des millénaires pour créer cette formation frappante. Les géologues et les amateurs de nature sont attirés par ce site pour étudier et s'émerveiller des processus complexes qui ont conduit à sa création.`),
    rating: 4.2
  },
  {
    id: 3,
    path: "explorer/3",
    images: [
      "/images/explorer/3/sitestouristiques3-1.jpg",
      "/images/explorer/3/sitestouristiques3-2.jpg",
      "/images/explorer/3/sitestouristiques3-3.jpg",
      "/images/explorer/3/sitestouristiques3-4.jpg",
      "/images/explorer/3/sitestouristiques3-5.jpg",
      "/images/explorer/3/sitestouristiques3-6.jpg",
      "/images/explorer/3/sitestouristiques3-7.jpg",
      "/images/explorer/3/sitestouristiques3-8.jpg",
    ],
    name: "Gorges d'Ait Mansour – Tafraoute",
    resume_description: "Une oasis spectaculaire au cœur de l'Anti-Atlas, où des falaises imposantes encadrent une vallée verdoyante peuplée de palmiers et de villages berbères traditionnels.",
    category: "nature",
    description: parseDescriptionToSections(`<h1 className="text-2xl">
Gorges d'Aït Mansour – Tafraoute : Une Oasis de Sérénité au Cœur de l'Anti-Atlas
</h1>
Nichées au cœur de l'Anti-Atlas marocain, à quelques kilomètres de la charmante ville de Tafraoute, les Gorges d'Aït Mansour sont une véritable merveille naturelle et un havre de paix. Ce site époustouflant offre un contraste saisissant entre les imposantes falaises rocheuses et une oasis verdoyante, sculptée par une rivière serpentant à travers la vallée.
<h1 className="text-2xl">
Un Paysage Grandiose et Apaisant
</h1>
Dès votre arrivée, vous serez captivé par la grandeur des lieux. Les parois rocheuses, aux teintes allant de l'ocre au rouge profond, s'élèvent majestueusement, créant un canyon impressionnant. Au fond de ces gorges, un palmier dattier dense et luxuriant déploie ses frondaisons, abritant de petits villages berbères traditionnels où le temps semble s'être arrêté. L'air y est pur et le silence, seulement interrompu par le murmure de l'eau et le chant des oiseaux, invite à la contemplation.
<h1 className="text-2xl">
Une Immersion Culturelle et Naturelle
</h1>
Les Gorges d'Aït Mansour sont une invitation à l'aventure et à la découverte. Vous pourrez vous promener le long de la rivière, explorer les sentiers sinueux qui mènent à des panoramas à couper le souffle, ou simplement vous détendre à l'ombre des palmiers. C'est également une occasion unique d'observer la vie locale des habitants, de découvrir leurs traditions et peut-être même de partager un thé à la menthe.

Pour les amoureux de la nature, la faune et la flore des gorges sont d'une grande richesse. Vous y trouverez une variété de plantes endémiques et, avec un peu de chance, vous pourrez apercevoir des oiseaux rares ou d'autres animaux sauvages qui habitent ce sanctuaire.`),
    rating: 4.7
  },
  {
    id: 4,
    path: "explorer/4",
    images: [
      "/images/explorer/4/sitestouristiques4-1.webp",
    ],
    name: "LA MAISON TRADITIONNELLE D'OUMESNAT",
    resume_description: "Un village berbère traditionnel perché sur une colline rocheuse, offrant un exemple remarquable d'architecture vernaculaire adaptée à l'environnement montagneux.",
    category: "culture",
    description: parseDescriptionToSections(`<h1 className="text-2xl">
Les Maisons Traditionnelles d'Oumesnat : Un Voyage dans le Temps au Cœur de l'Anti-Atlas
</h1>
Perché sur une colline rocheuse à proximité de Tafraoute, le village d'Oumesnat est un véritable musée à ciel ouvert de l'architecture berbère traditionnelle. Ce village, dont les habitations sont admirablement intégrées au paysage, offre un aperçu fascinant de la vie et des techniques de construction ancestrales de la région.
<h1 className="text-2xl">
Architecture et Matériaux : Harmonie avec la Nature
</h1>
Les maisons d'Oumesnat sont l'incarnation parfaite d'une architecture vernaculaire, c'est-à-dire construite avec les ressources locales et adaptée à l'environnement. Elles sont majoritairement bâties en pierres sèches locales, souvent assemblées sans mortier, ou avec un liant minimal à base de terre. Cette technique confère aux bâtiments une robustesse remarquable et une isolation naturelle, protégeant du froid en hiver et de la chaleur en été.

Les murs épais et les petites ouvertures sont caractéristiques, limitant l'exposition au soleil intense et conservant la fraîcheur à l'intérieur. Les toits sont généralement plats, construits avec des poutres de bois de palmier ou d'arganier, recouvertes de branchages, de terre et de pierres, servant parfois de terrasses ou de lieux de séchage.

Organisation Spatiale : Fonctionnalité et Convivialité
L'agencement des maisons d'Oumesnat est dicté par la fonctionnalité et la vie communautaire. Elles sont souvent de petite taille, regroupées en grappes et adossées les unes aux autres, créant ainsi des ruelles étroites et sinueuses qui offrent une ombre bienvenue. L'intérieur est simple, mais ingénieux, optimisant l'espace disponible.

On y trouve généralement plusieurs pièces :
La cuisine : Souvent équipée d'un foyer traditionnel.
Les chambres : Simples, parfois avec des alcôves ou des plateformes surélevées pour dormir.
Les espaces de vie : Des pièces communes où la famille se rassemble, souvent décorées de tapis et de coussins berbères.
Les greniers (Agadir) : Parfois intégrés à la maison ou situés à proximité, ces structures fortifiées servaient à stocker les provisions et les objets de valeur, reflétant l'importance de la sécurité et de la conservation dans la vie traditionnelle.
<h1 className="text-2xl">
Un Témoignage du Passé et du Présent
</h1>
Aujourd'hui, certaines de ces maisons sont toujours habitées, perpétuant un mode de vie ancestral, tandis que d'autres ont été restaurées, parfois transformées en gîtes ou en musées pour accueillir les visiteurs désireux de découvrir ce patrimoine unique.

Visiter Oumesnat, c'est bien plus qu'une simple balade architecturale. C'est une immersion dans l'histoire, une rencontre avec l'ingéniosité humaine et un témoignage vivant de la capacité des hommes à bâtir en harmonie avec leur environnement. C'est l'occasion de comprendre comment, au fil des siècles, les communautés berbères ont su créer des habitations qui répondent parfaitement à leurs besoins, tout en étant magnifiquement intégrées dans le paysage accidenté de l'Anti-Atlas.`),
    rating: 4.0
  },
  {
    id: 5,
    path: "explorer/5",
    images: [
      "/images/explorer/5/sitestouristiques5-1.webp",
      "/images/explorer/5/sitestouristiques5-2.webp",
    ],
    name: "Chapeau de Napoléon",
    resume_description: "Formation rocheuse emblématique ressemblant au célèbre bicorne de Napoléon, offrant un paysage spectaculaire et des opportunités de randonnée.",
    category: "nature",
    description:parseDescriptionToSections( `Juste à côté de Tafraout, à seulement 3 kilomètres au sud de ce beau village marocain, se trouve un endroit magnifique et mystérieux appelé Agguerd-Oudad. Le site vous attirera et vous permettra d'explorer les secrets qu'il renferme. Néanmoins, ce lieu moins connu, orné de roches monumentales, offre un excellent terrain de jeu pour les personnes qui aiment la randonnée ou le cyclisme dans une vaste région. Ici, vous pouvez voir la beauté naturelle qui vous entoure, avec un célèbre repère, le "Chapeau de Napoléon", en première ligne.
<h1 className="text-2xl">
Gardien d'Agguerd-Oudad : La Majestueuse Couronne de Napoléon
</h1>
Laissez libre cours à votre imagination et imaginez une colline rocheuse courbée comme le légendaire chapeau de Napoléon se dressant fièrement au-dessus de la ville, surveillant les maisons tranquilles d'Agguerd-Oudad, le minaret et les palmiers qui se balancent. Ce miracle géographique que tout le monde appelle "Le Chapeau de Napoléon" représente ici l'attrait naturel unique de la région et sa signification culturelle.
<h1 className="text-2xl">
Un Repère d'Importance
</h1>
Un voyage à Agguerd-Oudad n'est jamais complet sans avoir le privilège de contempler le majestueux "Chapeau de Napoléon", qui non seulement captive l'imagination mais aussi donne au repère sa place méritée dans l'histoire de la région. En regardant cette énorme formation rocheuse, il ne fait aucun doute que vous vous retrouverez dans une dimension où l'art de la nature n'a pas de fin.
<h1 className="text-2xl">
Exploration et Découverte
</h1>
Célèbre pour son "Chapeau de Napoléon", la plupart des touristes affluent à Agguerd-Oudad juste pour admirer le paysage à couper le souffle. Partez pour une promenade tranquille à travers le village, où vous découvrirez des structures berbères charmantes et des habitants sympathiques. Trouvez des sentiers abandonnés qui serpentent autour d'anciennes formations montagneuses et découvrez l'élixir de la beauté éternelle du village et des montagnes sauvages de l'Anti-Atlas.
<h1 className="text-2xl">
Aventures en Attente
</h1>
Les amoureux de plein air trouveront de nombreuses activités à faire dans ce camp, car il propose toutes sortes d'activités. Chaussés de chaussures de randonnée, parcourez les sentiers rocailleux, en admirant le paysage campagnard tout en avançant. Un cycliste peut parcourir des endroits pittoresques lors de balades tranquilles autour de la ville, découvrant de beaux sites et la nature à chaque tournant. Que vous cherchiez le calme intérieur et le silence ou que vous vous lanciez dans des aventures, vous pouvez être sûr que ce petit village vous offrira une excellente opportunité de concevoir votre aventure selon votre esprit d'exploration.
<h1 className="text-2xl">
Rencontres Culturelles
</h1>
Agguerd-Oudad n'est pas seulement une destination pittoresque ; c'est un endroit où vous pouvez vous immerger dans une riche tapisserie culturelle tissée de traditions fascinantes et de locaux amicaux. Ici, vous aurez l'occasion de vous connecter avec les habitants chaleureux désireux de partager leur patrimoine et leurs histoires captivantes. L'un des moments forts de votre visite serait d'explorer la place du marché animée du village, où les couleurs vives et les discussions animées remplissent l'air, vous offrant un aperçu des rythmes quotidiens de la vie. Faites plaisir à vos sens en savourant les délicieuses saveurs de la cuisine traditionnelle berbère, qui reflète des siècles d'artisanat culinaire transmis de génération en génération.`),
    rating: 4.3
  },
  {
    id: 6,
    path: "explorer/6",
    images: [
      "/images/explorer/6/sitestouristiques6-1.webp",
      "/images/explorer/6/sitestouristiques6-2.webp",
      "/images/explorer/6/sitestouristiques6-3.webp",
    ],
    name: "Vallée d'Ammeln",
    resume_description: "Une vallée encadrée par des montagnes roses de l'Anti-Atlas, combinant paysages spectaculaires et riche patrimoine culturel amazigh.",
    category: "nature",
    description:parseDescriptionToSections( `Au cœur des majestueuses montagnes roses de l'Anti-Atlas, perchée à une altitude de 1000 mètres, la vallée d'Ammeln est encerclée par des chaînes de montagnes imposantes s'élevant jusqu'à 2500 mètres, faisant partie intégrante de la chaîne de l'Anti-Atlas. La vallée d'Ammeln détient une beauté naturelle et une culture riche, offrant de véritables expériences qui combinent des paysages, des constructions traditionnelles et d'anciennes traditions.
<h1 className="text-2xl">
Paysages à couper le souffle
</h1>
Les paysages rocheux et verdoyants de la vallée d'Ammeln, avec ses falaises roses flamboyantes, sont impressionnants. Ce long sillon vert, qui s'étend jusqu'au pied du Jbel El Kest, offre des panoramas sublimes à chaque tournant.
<h1 className="text-2xl">
Un héritage culturel ancestral
</h1>
Habitée par la tribu locale des Ammeln, cette région vibre au rythme des coutumes et traditions séculaires. La vie traditionnelle des habitants locaux, basée sur l'agriculture et la préservation de leur culture, est présente dans chaque recoin de la vallée.
<h1 className="text-2xl">
Une invitation à explorer
</h1>
Facilement accessible depuis la ville de Tafraout, la vallée d'Ammeln est un havre de paix où vous pouvez recharger vos énergies et renouer avec la nature. Les sentiers sinueux et ombragés bordés de champs et de jardins encouragent des promenades agréables, et les interactions avec les locaux amicaux, principalement des femmes souriantes, enrichissent l'aventure.
<h1 className="text-2xl">
Trésors naturels à découvrir
</h1>
La vallée d'Ammeln n'est pas seulement culturellement diverse, c'est aussi une mine d'or écologique, abritant de nombreuses plantes et animaux. Les différentes espèces d'arbres et d'arbustes, tels que l'arganier, l'amandier, l'olivier et le palmier, témoignent de cette diversité.
<h1 className="text-2xl">
Une destination de randonnée incontournable
</h1>
La vallée d'Ammeln offre aux visiteurs la chance de se lancer dans une aventure le long de ses sentiers pittoresques. De plus, chaque randonneur y trouve son bonheur. Le lieu propose des promenades simples et des treks difficiles. Les randonneurs débutants comme les professionnels y trouvent leur terrain de jeu. Que vous recherchiez des balades relaxantes ou des expéditions exigeantes, tout est disponible.`),
    rating: 4.4
  },
  {
    id: 7,
    path: "explorer/7",
    images: [
      "/images/explorer/7/sitestouristiques7-1.jpg",
      "/images/explorer/7/sitestouristiques7-2.jpg",
      "/images/explorer/7/sitestouristiques7-3.jpg",
    ],
    name: "Festival Tifawin",
    resume_description: "Festival culturel annuel célébrant la richesse de la culture amazighe à travers des expressions artistiques variées et promouvant le développement local.",
    category: "culture",
    description:parseDescriptionToSections( `<h1 className="text-2xl">
Exploration et Découverte
</h1>
      Le Festival Tifawin (signifiant « Lumières » en amazighe) est un événement culturel annuel majeur qui se déroule à Tafraout et dans la commune d'Ammelne, dans la province de Tiznit, au Maroc. Depuis sa création en 2006, il célèbre la richesse de la culture amazighe et vise à promouvoir le développement local en mettant en valeur les arts et traditions du monde rural.Le Festival Tifawin a pour ambition de :
Valoriser la culture amazighe à travers des expressions artistiques variées.
Encourager le développement local en soutenant les initiatives économiques et culturelles de la région.
Renforcer l'identité communautaire en impliquant les habitants locaux et la diaspora dans l'organisation et la participation au festival.`),
    rating: 4.1
  },
  {
    id: 8,
    path: "explorer/8",
    images: [
      "/images/explorer/8/sitestouristiques8-1.jpg",
      "/images/explorer/8/sitestouristiques8-2.jpg",
      "/images/explorer/8/sitestouristiques8-3.jpg",
    ],
    name: "Festival des Amandiers",
    resume_description: "Célébration annuelle de la floraison des amandiers, mettant en valeur le patrimoine local et l'importance économique de cette culture dans la région.",
    category: "culture",
    description:parseDescriptionToSections( `<h1 className="text-2xl">
Exploration et Découverte
</h1>
      Le Festival des Amandiers de Tafraout, également appelé Moussem des Amandiers, est une célébration annuelle emblématique qui se tient dans la ville de Tafraout, nichée au cœur de l'Anti-Atlas marocain. Cet événement, organisé depuis 2010 par l'Association Louz Tafraout, vise à promouvoir et valoriser le patrimoine local, en mettant particulièrement en lumière la culture de l'amandier, essentielle à l'économie de la région .

Le festival se déroule généralement entre février et mars, en fonction de la floraison des amandiers. Par exemple, la 12ème édition s'est tenue du 10 au 13 avril 2025, sous le thème "Terre d’amandier, terroir d’avenir" .`),
    rating: 4.6
  },
  {
    id: 9,
    path: "explorer/9",
    images: [
      "/images/explorer/9/sitestouristiques9-1.jpg",
      "/images/explorer/9/sitestouristiques9-2.jpg",
      "/images/explorer/9/sitestouristiques9-3.jpg",
    ],
    name: "Performances Ahwash",
    resume_description: "Art traditionnel amazigh alliant danse, musique et poésie, symbolisant l'unité communautaire et transmettant les valeurs culturelles à travers les générations.",
    category: "culture",
    description:parseDescriptionToSections( `
      <h1 className="text-2xl">
Exploration et Découverte
</h1>
      Les performances traditionnelles d'Ahwash font partie intégrante des festivals de Tafraoute. L'Ahwash est un art séculaire, profondément enraciné dans les communautés Amazigh. C'est une expression vibrante du patrimoine collectif et de la cohésion sociale , où hommes et femmes participent à des performances synchronisées, symbolisant l'unité et les expériences partagées. L'Ahwash est un moyen puissant de préserver les récits et les valeurs à travers des mouvements rythmiques et des mélodies émouvantes. La description de l'Ahwash comme un art séculaire profondément enraciné dans les communautés Amazigh et symbolisant l'unité et les expériences partagées  met en évidence le rôle crucial des rituels communautaires et des arts du spectacle dans le maintien de la cohésion sociale et de l'identité culturelle. Ce n'est pas un simple divertissement ; c'est un mécanisme vital pour la transmission intergénérationnelle des valeurs et des récits, renforçant les liens communautaires dans un monde en constante modernisation. Ces performances sont des manifestations vivantes du patrimoine, essentielles à la survie et à la vitalité de la culture Amazigh.`),
    rating: 4.8
  }
];

export default exploreData;


