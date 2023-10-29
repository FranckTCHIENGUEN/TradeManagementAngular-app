export const menuList = [
  {
    role:[],
    label : 'Dashboard',
    routerLink : 'dashbord',
    icon : 'home'
  },

  {
    role:['COM_CLIENT: CRÉER_MODIFIER', 'COM_CLIENT: SUPPRIMER','COM_CLIENT: LIRE', 'COM_CLIENT: FILTRER'],
    label : 'Commandes Clients',
    routerLink : 'command-client',
    icon : 'newspaper',
    submenu: [
        {
          role:['COM_CLIENT: CRÉER_MODIFIER'],
          routerLink: 'save-commande',
          label: 'Nouvelle commande',
          icon: 'newspaper',
        },
      {
        role:['COM_CLIENT: CRÉER_MODIFIER', 'COM_CLIENT: SUPPRIMER','COM_CLIENT: LIRE', 'COM_CLIENT: FILTRER'],
          routerLink: 'list-commande',
          label: 'Liste commande',
          icon: 'newspaper',
        },
      ]
  },

  {
    role:['COM_FOURNISSEUR: CRÉER_MODIFIER', 'COM_FOURNISSEUR: SUPPRIMER','COM_FOURNISSEUR: LIRE', 'COM_FOURNISSEUR: FILTRER'],
    label : 'Commandes Fournisseurs',
    routerLink : 'command-fournisseur',
    icon : 'newspaper',
    submenu: [
        {
          role:['COM_FOURNISSEUR: CRÉER_MODIFIER'],
          routerLink: 'enregistrer',
          label: 'Nouvelle commande',
          icon: 'newspaper',
        },
      {
        role:['COM_FOURNISSEUR: CRÉER_MODIFIER', 'COM_FOURNISSEUR: SUPPRIMER','COM_FOURNISSEUR: LIRE', 'COM_FOURNISSEUR: FILTRER'],
          routerLink: 'detail',
          label: 'Liste commande',
          icon: 'newspaper',
        },
      ]
  },
  {
    role:['VENTE: CRÉER_MODIFIER', 'VENTE: SUPPRIMER','VENTE: LIRE', 'VENTE: FILTRER'],
    label : 'Ventes',
    routerLink : 'vente',
    icon : 'shopping_cart',
    submenu: [
      {
        role:['VENTE: CRÉER_MODIFIER'],
        routerLink: 'save-vente',
        label: 'Nouvelle Vente',
        icon: 'shopping_cart',
      },
      {
        role:['VENTE: CRÉER_MODIFIER', 'VENTE: SUPPRIMER','VENTE: LIRE', 'VENTE: FILTRER'],
        routerLink: 'list-vente',
        label: 'Liste Vente',
        icon: 'shopping_cart',
      },
    ]
  },
  {
    role:['DEPENSE: CRÉER_MODIFIER', 'DEPENSE: SUPPRIMER','DEPENSE: LIRE', 'DEPENSE: FILTRER'],
    label : 'Depenses',
    routerLink : 'achats',
    icon : 'receipt'
  },
  {
    role:['PRODUIT: CRÉER_MODIFIER', 'PRODUIT: SUPPRIMER','PRODUIT: LIRE', 'PRODUIT: FILTRER'],
    label : 'Produits',
    routerLink : 'produit',
    icon : 'qr_code_2'
  },
  {
    role:['CLIENT: CRÉER_MODIFIER', 'CLIENT: SUPPRIMER','CLIENT: LIRE', 'CLIENT: FILTRER'],
    label : 'Clients',
    routerLink : 'client',
    icon : 'person'
  },
  {
    role:['FOURNISSEUR: CRÉER_MODIFIER', 'FOURNISSEUR: SUPPRIMER','FOURNISSEUR: LIRE', 'FOURNISSEUR: FILTRER'],
    label : 'Fournisseurs',
    routerLink : 'fournisseur',
    icon : 'people'
  },
  {
    role:['SERVICE: CRÉER_MODIFIER', 'SERVICE: SUPPRIMER','SERVICE: LIRE', 'SERVICE: FILTRER'],
    label : 'Services',
    routerLink : 'service',
    icon : 'linked_services'
  },

  {
    role:['STAT: LIRE_ETAT_FINANCIER'],
    label : 'Statistiques',
    routerLink : 'statistique',
    icon : 'bar_chart',
    submenu: [
      {
        role:['STAT: LIRE_ETAT_FINANCIER'],
        routerLink: 'etat-financier',
        label: 'Etat finanacier',
        icon: 'bar_chart',
      },
      // {
      //   role:['COM_CLIENT: CRÉER_MODIFIER', 'COM_CLIENT: SUPPRIMER','COM_CLIENT: LIRE', 'COM_CLIENT: FILTRER'],
      //   routerLink: 'stat-ca',
      //   label: 'CA',
      //   icon: '',
      // },
      // {
      //   role:['COM_CLIENT: CRÉER_MODIFIER', 'COM_CLIENT: SUPPRIMER','COM_CLIENT: LIRE', 'COM_CLIENT: FILTRER'],
      //   routerLink: 'stat-sale',
      //   label: 'Vente',
      //   icon: '',
      // },
      // {
      //   role:['COM_CLIENT: CRÉER_MODIFIER', 'COM_CLIENT: SUPPRIMER','COM_CLIENT: LIRE', 'COM_CLIENT: FILTRER'],
      //   routerLink: 'stat-achat',
      //   label: 'Achat',
      //   icon: '',
      // },
      // {
      //   role:['COM_CLIENT: CRÉER_MODIFIER', 'COM_CLIENT: SUPPRIMER','COM_CLIENT: LIRE', 'COM_CLIENT: FILTRER'],
      //   routerLink: 'stat-benefice',
      //   label: 'Benefice',
      //   icon: '',
      // },
    ]
  },
  {
    role:['COMPTA: LIRE_TOUT_LES_BILAN_JOURNALIER', 'COMPTA: LIRE_UTILISATEUR_BILAN_JOURNALIER', 'COMPTA: LIRE_MON_BILAN_JOURNALIER', 'COMPTA: LIRE_BILAN_PERIODIQUE'],
    label : 'Comptabilité',
    routerLink : 'compta',
    icon : 'money',
    submenu: [
      {
        role:['COMPTA: LIRE_TOUT_LES_BILAN_JOURNALIER', 'COMPTA: LIRE_UTILISATEUR_BILAN_JOURNALIER', 'COMPTA: LIRE_MON_BILAN_JOURNALIER',],
        routerLink: 'bilan-journalier',
        label: 'Bilan journalier',
        icon: 'money',
      },
      {
        role:['COMPTA: LIRE_TOUT_LES_BILAN_JOURNALIER', 'COMPTA: LIRE_UTILISATEUR_BILAN_JOURNALIER', 'COMPTA: LIRE_BILAN_PERIODIQUE'],
        routerLink: 'bilan-period',
        label: 'Bilan periodique',
        icon: 'money',
      },
    ]
  },
  {
    role:['UTILISATEUR: CRÉER_MODIFIER','UTILISATEUR: FILTRER','ROLE: LIRE','UTILISATEUR: REMOVE_ROLE',
      'UTILISATEUR: LIRE', 'UTILISATEUR: CHANGER_ETAT','UTILISATEUR: ADD_ROLE','UTILISATEUR: RESET_PASS'],
    label : 'Management',
    routerLink : 'gest-entreprise',
    icon : 'manage_accounts',
    submenu: [
      {
        role:['UTILISATEUR: CRÉER_MODIFIER','UTILISATEUR: FILTRER','UTILISATEUR: REMOVE_ROLE',
          'UTILISATEUR: LIRE', 'UTILISATEUR: CHANGER_ETAT','UTILISATEUR: ADD_ROLE','UTILISATEUR: RESET_PASS'],
        routerLink: 'users',
        label: 'Utilisateurs',
        icon: 'manage_accounts',
      },
      {
        role:['ROLE: CRÉER_MODIFIER','ROLE: LIRE'],
        routerLink: 'roles',
        label: 'Roles',
        icon: 'manage_accounts',
      },
    ]
  },

  // {
  //   id:'2',
  //   routerLink : 'code-barre',
  //   label : 'code barre',
  //   icon : '',
  //   submenu: [
  //     {
  //       id: '2.1',
  //       routerLink: 'code-barre-inventaire',
  //       label: 'code barre inventaire',
  //       icon: '',
  //     },
  //   ]
  // },
];
