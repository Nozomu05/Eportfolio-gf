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
    name: 'Shayana Struzik',
    title: 'Future Responsable RH | Marketing Digital & Communication Interculturelle',
    subtitle:
      "Étudiante en Bachelor of Business à RMIT University Vietnam, passionnée par les gens, les cultures et la création de contenus qui ont du sens pour les marques avec lesquelles je travaille.",
    cta_projects: 'Voir mes réalisations',
    cta_contact: 'Me contacter',
    scroll: 'défiler',
  },
  about: {
    title: 'À propos de moi',
    subtitle: "Construire des stratégies centrées sur l'humain, à la croisée des RH, de la culture et du marketing digital.",
    p1: "Actuellement en Bachelor of Business (majeure Global Business, mineure Management and Change) à RMIT University Vietnam, je pose les bases d'une carrière de Responsable RH en Europe. Mes cours de Gestion Internationale des Ressources Humaines, de Management Interculturel et de Développement Digital des Affaires ont façonné ma vision des personnes, des cultures et des organisations.",
    p2: "Je m'épanouis dans les environnements multiculturels — en tant que Française vivant et étudiant à Hô-Chi-Minh-Ville, j'ai appris à communiquer au-delà des barrières de langue et de culture, que ce soit en organisant des événements pour mon club étudiant, en créant du contenu pour une entreprise de biotechnologie en pleine croissance, ou en conseillant un vrai client sur son expansion internationale. J'aime aider les autres à donner le meilleur d'eux-mêmes, et j'allie cela à ma passion pour le marketing digital et la création de contenu.",
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
      { value: '2', label: "Pays que j'appelle chez moi" },
    ],
  },
  skills: {
    title: 'Compétences',
    subtitle: "Ce que j'apporte à une équipe.",
    categories: {
      people: {
        label: 'Relationnel & Leadership',
        items: ['Écoute active', 'Prise de décision', "Agilité d'apprentissage", 'Gestion des conflits', "Leadership & travail d'équipe", 'Communication interculturelle'],
      },
      marketing: {
        label: 'Marketing digital & contenu',
        items: ['Gestion des réseaux sociaux', 'Création & montage de contenu', 'Analyse de campagnes (SEMrush)', 'Storytelling de marque'],
      },
      business: {
        label: 'Stratégie & business',
        items: ["Stratégie d'entrée sur un marché", 'Management interculturel', 'Communication avec les parties prenantes', 'Conception de présentations'],
      },
      tools: {
        label: 'Outils & logiciels',
        items: ['Canva', 'Microsoft Excel', 'Microsoft PowerPoint', 'Microsoft Word', 'SEMrush'],
      },
    },
  },
  experience: {
    title: 'Expérience',
    subtitle: "Là où j'ai mis en pratique une approche centrée sur l'humain.",
    present: 'Actuel',
    items: [
      {
        role: 'Stagiaire — Gestion des Réseaux Sociaux',
        company: 'CHEK Genomics',
        location: 'Hô-Chi-Minh-Ville, Vietnam',
        period: 'Juin 2026 – Sept. 2026',
        current: true,
        bullets: [
          'Gestion des comptes de réseaux sociaux de CHEK Genomics sur plusieurs plateformes',
          "Planification, création et montage de contenus reflétant la voix et l'audience de l'entreprise",
          "Suivi de l'engagement pour affiner la stratégie de contenu",
        ],
        reflection:
          "Ce stage m'a appris comment fonctionne réellement le monde professionnel et les exigences qu'il implique — j'ai perfectionné mes compétences en montage de contenu tout en apprenant à respecter la charte et les délais d'une marque.",
      },
      {
        role: 'Membre — Section Média',
        company: 'RMIT IC Club',
        location: 'Hô-Chi-Minh-Ville, Vietnam',
        period: '2025',
        current: false,
        bullets: [
          'Organisation de la soirée de cohésion de mi-semestre, de la conception à la réalisation',
          'Création du jeu principal et de plusieurs activités complémentaires',
        ],
        reflection:
          "Faire partie de ce club m'a montré ce que signifie recevoir de vraies responsabilités, et comment organiser un événement dont tout le club se souviendrait.",
      },
      {
        role: "Membre de l'équipe — Stratégie d'internationalisation",
        company: 'RMIT Global Business Course — Projet client',
        location: 'Hô-Chi-Minh-Ville, Vietnam',
        period: 'Semestre B, 2024',
        current: false,
        bullets: [
          "Co-développement d'un plan d'internationalisation pour l'expansion de BOO JSC sur de nouveaux marchés",
          "Coordination de l'organisation des tâches et du calendrier de l'équipe",
          'Responsable de la conception des diapositives pour les présentations en classe et devant le client',
        ],
        reflection:
          "Être sélectionnée en finale était déjà une réussite, et revoir notre présentation rapidement selon les retours de notre professeure m'a appris à travailler efficacement sous pression.",
      },
    ],
  },
  education: {
    title: 'Formation',
    subtitle: 'Parcours académique.',
    items: [
      {
        degree: 'Bachelor of Business — Majeure Global Business, Mineure Management and Change',
        school: 'RMIT University Vietnam, Saigon South',
        location: 'Hô-Chi-Minh-Ville, Vietnam',
        period: '2023 – 2026',
        detail:
          "Cours pertinents : Gestion Internationale des Ressources Humaines, Management Interculturel, Développement Digital des Affaires, Perspectives Intégrées sur les Problématiques d'Affaires",
      },
      {
        degree: 'Baccalauréat français — Spécialités LLCE & Mathématiques, Option Art',
        school: 'Lycée Français International Marguerite Duras',
        location: 'Hô-Chi-Minh-Ville, Vietnam',
        period: '2022 – 2023',
        detail: 'Cursus national français avec une spécialisation en Littérature, Langues & Civilisations Étrangères, et Mathématiques',
      },
    ],
  },
  projects: {
    title: 'Projets & réalisations sélectionnés',
    subtitle: 'Un regard plus approfondi sur le travail derrière mon expérience.',
    skills_label: 'Compétences démontrées',
    items: [
      {
        title: "Stratégie d'internationalisation pour BOO",
        badge: 'Finaliste',
        description:
          "Au sein d'une équipe de 4 personnes dans le cadre du Projet Client du Global Business Course de RMIT, j'ai contribué à construire un plan complet d'internationalisation pour l'expansion future de BOO JSC. Au-delà de la stratégie elle-même, j'ai coordonné l'organisation des tâches et le calendrier de l'équipe, et conçu l'ensemble des diapositives utilisées pour les présentations en classe et devant le client. Notre travail a été sélectionné comme finaliste par le PDG de BOO et la coordinatrice du cours.",
        skills: ["Stratégie d'entrée sur un marché", 'Présentation client', 'Coordination de projet', 'Conception de diapositives'],
      },
      {
        title: 'Réseaux sociaux & contenu — CHEK Genomics',
        badge: 'Stage en cours',
        description:
          "En tant que Stagiaire en Gestion des Réseaux Sociaux, je gère les comptes de réseaux sociaux de CHEK Genomics et je crée le contenu associé — de la planification des publications au montage final des visuels — tout en apprenant à identifier ce qui touche leur audience.",
        skills: ['Gestion des réseaux sociaux', 'Création de contenu', 'Analyse de campagnes (SEMrush)', 'Voix de marque'],
      },
      {
        title: 'RMIT IC Club — Soirée de cohésion de mi-semestre',
        badge: "Leadership d'événement",
        description:
          "J'ai organisé la soirée de cohésion de mi-semestre de la Section Média pour tout le club, en concevant le jeu principal ainsi que plusieurs activités complémentaires pour rassembler les membres.",
        skills: ["Organisation d'événements", 'Conception de jeux', "Leadership d'équipe"],
      },
    ],
  },
  achievements: {
    title: 'Distinctions',
    subtitle: 'Une reconnaissance sur mon parcours.',
    item: {
      title: 'Finaliste — Projet Client du Global Business Course',
      issuer: 'RMIT University Vietnam, en partenariat avec BOO JSC',
      date: 'Semestre B, 2024',
      description:
        "Décerné à notre équipe pour le plan d'internationalisation conçu pour BOO, présenté au PDG de l'entreprise, M. Do Viet Anh, et à la coordinatrice du cours, Dr Bich Le.",
      image_alt: "Certificat de reconnaissance — Finaliste du Projet Client du Global Business Course de RMIT pour BOO, Semestre B 2024",
    },
  },
  contact: {
    title: 'Discutons',
    subtitle: 'Ouverte aux stages, opportunités de début de carrière et collaborations en RH et marketing digital.',
    email_label: 'Email',
    linkedin_label: 'LinkedIn',
    location_label: 'Localisation',
    copy_success: 'Copié !',
  },
  footer: {
    built_with: 'Réalisé avec React & TypeScript',
    rights: 'Tous droits réservés.',
  },
}
