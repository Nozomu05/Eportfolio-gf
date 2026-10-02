import type { Translations } from './en'

export const fr: Translations = {
  nav: {
    about: 'À propos',
    skills: 'Compétences',
    experience: 'Expérience',
    education: 'Formation',
    projects: 'Projets',
    achievements: 'Distinctions',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Bonjour, je suis',
    name: 'Shayana Kali Eno Struzik',
    title: 'Future Responsable RH | Marketing digital & communication interculturelle',
    subtitle:
      "Étudiante en Bachelor of Business à RMIT University Vietnam, passionnée par l'accompagnement des personnes, la culture et la création de contenus porteurs de sens pour les marques avec lesquelles je travaille.",
    cta_projects: 'Voir mes projets',
    cta_contact: 'Me contacter',
    scroll: 'défiler',
  },
  about: {
    kicker: 'À propos',
    title: 'À propos de moi',
    subtitle: "Construire des stratégies centrées sur l'humain, à la croisée des RH, de la culture et du marketing digital.",
    p1: "Actuellement en Bachelor of Business (spécialisation Global Business, mineure Management and Change) à RMIT University Vietnam, je construis les bases d'une carrière de Responsable RH en Europe. Mes cours de Gestion internationale des ressources humaines, de Management interculturel et de Développement digital des affaires ont façonné ma façon de penser les personnes, la culture et les organisations.",
    p2: "Je m'épanouis dans les environnements multiculturels — en tant que ressortissante française vivant et étudiant à Hô-Chi-Minh-Ville, j'ai appris à communiquer au-delà des barrières linguistiques et culturelles, que ce soit en organisant des événements pour mon club étudiant, en créant du contenu pour une entreprise de biotechnologie en pleine croissance, ou en conseillant un client réel sur son expansion internationale. J'aime aider les autres à donner le meilleur d'eux-mêmes, et j'allie cela à ma passion pour le marketing digital et la création de contenu.",
    languages_title: 'Langues parlées',
    languages: [
      { lang: 'Français', level: 'Langue maternelle' },
      { lang: 'Anglais', level: 'C1' },
      { lang: 'Chinois', level: 'A2' },
    ],
    stats: [
      { value: '2026', label: 'Diplôme prévu' },
      { value: '3', label: 'Expériences de leadership et professionnelles' },
      { value: '3', label: 'Langues parlées' },
      { value: '2', label: "Pays où j'ai vécu" },
    ],
  },
  skills: {
    kicker: 'Compétences',
    title: 'Compétences',
    subtitle: "Les capacités que j'apporte à une équipe.",
    categories: {
      people: {
        label: 'Relationnel & leadership',
        items: ['Écoute active', 'Prise de décision', "Agilité d'apprentissage", 'Gestion des conflits', "Leadership & travail d'équipe", 'Communication interculturelle'],
      },
      marketing: {
        label: 'Marketing digital & contenu',
        items: ['Gestion des réseaux sociaux', 'Création & édition de contenu', 'Analyse de campagnes (SEMrush)', 'Storytelling de marque'],
      },
      business: {
        label: 'Entreprise & stratégie',
        items: ["Stratégie d'entrée sur le marché", 'Management interculturel', 'Communication avec les parties prenantes', 'Conception de présentations'],
      },
      tools: {
        label: 'Outils & logiciels',
        items: ['Canva', 'Microsoft Excel', 'Microsoft PowerPoint', 'Microsoft Word', 'SEMrush'],
      },
    },
  },
  experience: {
    kicker: 'Expérience',
    title: 'Expérience',
    subtitle: "Là où j'ai mis en pratique une approche centrée sur l'humain.",
    present: 'Actuel',
    items: [
      {
        role: 'Stagiaire en gestion des réseaux sociaux',
        badge: '',
        company: 'CHEK Genomics',
        location: 'Hô-Chi-Minh-Ville, Vietnam',
        period: 'Juin 2026 – Sept. 2026',
        current: true,
        bullets: [
          "Gérer les comptes de réseaux sociaux de CHEK Genomics sur l'ensemble des plateformes",
          "Planifier, créer et éditer du contenu reflétant la voix de l'entreprise et son audience",
          "Suivre l'engagement afin d'affiner la stratégie de contenu",
        ],
        reflection:
          "Ce stage m'a appris comment fonctionne réellement le monde professionnel et les standards qu'il attend de vous — j'ai affiné mes compétences en édition de contenu tout en apprenant à respecter les lignes directrices et les délais d'une marque.",
      },
      {
        role: 'Membre de la section Média',
        badge: '',
        company: 'RMIT IC Club',
        location: 'Hô-Chi-Minh-Ville, Vietnam',
        period: '2025',
        current: false,
        bullets: [
          "Organisé la session de cohésion de mi-semestre du club, de la conception à la réalisation",
          'Conçu le jeu brise-glace principal ainsi que plusieurs activités complémentaires',
        ],
        reflection:
          "Faire partie du club m'a montré ce que signifie se voir confier une réelle responsabilité, et comment organiser un événement dont tout le club se souviendrait.",
      },
      {
        role: "Membre de l'équipe, Stratégie d'internationalisation",
        badge: 'Finaliste',
        company: 'RMIT Global Business Course — Projet client',
        location: 'Hô-Chi-Minh-Ville, Vietnam',
        period: 'Semestre B, 2024',
        current: false,
        bullets: [
          "Co-développé un plan d'internationalisation pour l'expansion de BOO JSC vers de nouveaux marchés",
          "Coordonné l'organisation des tâches et le calendrier de l'équipe",
          "Pris en charge la conception des diapositives pour les présentations en classe comme devant le client",
        ],
        reflection:
          "Atteindre la finale était déjà une réussite en soi, et revoir rapidement notre présentation suite aux retours de notre professeure m'a appris à bien travailler sous pression.",
      },
    ],
  },
  education: {
    kicker: 'Formation',
    title: 'Formation',
    subtitle: 'Parcours académique.',
    items: [
      {
        degree: 'Bachelor of Business — Spécialisation Global Business, mineure Management and Change',
        school: 'RMIT University Vietnam, Saigon South',
        location: 'Hô-Chi-Minh-Ville, Vietnam',
        period: '2023 – 2026',
        detail:
          "Cours pertinents : Gestion internationale des ressources humaines, Management interculturel, Développement digital des affaires, Perspectives intégrées sur les problématiques d'entreprise",
      },
      {
        degree: 'Baccalauréat français — Spécialités LLCE (Anglais) & Mathématiques',
        school: 'Lycée Français International Marguerite Duras',
        location: 'Hô-Chi-Minh-Ville, Vietnam',
        period: '2022 – 2023',
        detail: "Programme national français avec spécialisation en Langues, Littératures et Civilisations Étrangères (anglais) et Mathématiques — également membre actif du Club Art de l'établissement",
      },
    ],
  },
  projects: {
    kicker: 'Projets',
    title: 'Projets & réalisations sélectionnés',
    subtitle: 'Un regard plus approfondi sur le travail derrière mon expérience.',
    skills_label: 'Compétences démontrées',
    items: [
      {
        title: "Stratégie d'internationalisation pour BOO",
        badge: 'Finaliste',
        description:
          "Dans le cadre d'une équipe de 4 personnes au sein du projet client du Global Business Course de RMIT, j'ai contribué à l'élaboration d'un plan complet d'internationalisation pour la future expansion de BOO JSC à l'étranger. Au-delà de la stratégie elle-même, j'ai coordonné l'organisation des tâches et le calendrier de l'équipe, et conçu chaque diapositive utilisée lors de nos présentations en classe comme devant le client. Notre travail a été désigné finaliste par le PDG de BOO et la coordinatrice du cours.",
        skills: ["Stratégie d'entrée sur le marché", 'Présentation client', 'Coordination de projet', 'Conception de diapositives'],
      },
      {
        title: 'Réseaux sociaux & contenu — CHEK Genomics',
        badge: 'Stage en cours',
        description:
          "En tant que stagiaire en gestion des réseaux sociaux, je gère les comptes de réseaux sociaux de CHEK Genomics et crée le contenu qui les anime — de la planification des publications à l'édition des visuels finaux — tout en apprenant à identifier ce qui résonne auprès de leur audience.",
        skills: ['Gestion des réseaux sociaux', 'Création de contenu', 'Analyse de campagnes (SEMrush)', 'Voix de marque'],
      },
      {
        title: 'RMIT IC Club — Session de cohésion de mi-semestre',
        badge: "Direction d'événement",
        description:
          "J'ai organisé la session de cohésion de mi-semestre du club, en concevant le jeu brise-glace principal ainsi que plusieurs activités complémentaires pour rapprocher les membres.",
        skills: ["Organisation d'événements", 'Conception de jeux', "Leadership d'équipe"],
      },
    ],
  },
  achievements: {
    kicker: 'Distinctions',
    title: 'Distinctions',
    subtitle: 'Reconnaissances obtenues en chemin.',
    item: {
      title: 'Finaliste — Projet client du Global Business Course',
      issuer: 'RMIT University Vietnam, en partenariat avec BOO JSC',
      date: 'Semestre B, 2024',
      description:
        "Décerné à notre équipe pour le plan d'internationalisation élaboré pour BOO, avec un certificat signé par le PDG de BOO, M. Do Viet Anh, et la coordinatrice du cours, Dr Bich Le.",
      image_alt: "Certificat de reconnaissance — Finaliste du projet client du Global Business Course de RMIT pour BOO, Semestre B 2024",
    },
  },
  contact: {
    kicker: 'Contact',
    title: 'Restons en contact',
    subtitle: 'Ouverte aux stages, opportunités de début de carrière et collaborations en RH et marketing digital.',
    email_label: 'E-mail',
    linkedin_label: 'LinkedIn',
    phone_label: 'Téléphone',
    location_label: 'Localisation',
    copy_success: 'Copié !',
  },
  footer: {
    built_with: 'Développé avec React & TypeScript',
    rights: 'Tous droits réservés.',
  },
}
