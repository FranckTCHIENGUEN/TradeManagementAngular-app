export const menuList = [
  {
    id:'1',
    label : 'Dashboard',
    routerLink : 'dashbord',
    icon : 'home'
  },

  {
    id:'2',
    label : 'Commandes Clients',
    routerLink : 'command-client',
    icon : 'newspaper',
    submenu: [
        {
          id: '2.1',
          routerLink: 'save-commande',
          label: 'Nouvelle commande',
          icon: '',
        },
      {
          id: '2.1',
          routerLink: 'list-commande',
          label: 'Liste commande',
          icon: '',
        },
      ]
  },

  {
    id:'2',
    label : 'Commandes Fournisseurs',
    routerLink : 'command-fournisseur',
    icon : 'newspaper',
    submenu: [
        {
          id: '2.1',
          routerLink: 'enregistrer',
          label: 'Nouvelle commande',
          icon: '',
        },
      {
          id: '2.1',
          routerLink: 'detail',
          label: 'Liste commande',
          icon: '',
        },
      ]
  },
  {
    id:'2',
    label : 'Ventes',
    routerLink : 'vente',
    icon : 'cart',
    submenu: [
      {
        id: '2.1',
        routerLink: 'save-vente',
        label: 'Nouvelle Vente',
        icon: '',
      },
      {
        id: '2.1',
        routerLink: 'list-vente',
        label: 'Liste Vente',
        icon: '',
      },
    ]
  },
  {
    id:'2',
    label : 'Achats',
    routerLink : 'achats',
    icon : 'receipt'
  },
  {
    id:'2',
    label : 'Produits',
    routerLink : 'produit',
    icon : 'barcode'
  },
  {
    id:'2',
    label : 'Clients',
    routerLink : 'client',
    icon : 'people'
  },
  {
    id:'2',
    label : 'Fournisseurs',
    routerLink : 'fournisseur',
    icon : 'people'
  },
  {
    id:'2',
    label : 'Services',
    routerLink : 'service',
    icon : 'server'
  },

  {
    id:'2',
    label : 'Statistiques',
    routerLink : 'statistique',
    icon : 'bar-chart',
    submenu: [
      {
        id: '2.1',
        routerLink: 'etat-financier',
        label: 'Etat finanacier',
        icon: '',
      },
      {
        id: '2.1',
        routerLink: 'stat-ca',
        label: 'CA',
        icon: '',
      },
      {
        id: '2.1',
        routerLink: 'stat-sale',
        label: 'Vente',
        icon: '',
      },
      {
        id: '2.1',
        routerLink: 'stat-achat',
        label: 'Achat',
        icon: '',
      },
      {
        id: '2.1',
        routerLink: 'stat-benefice',
        label: 'Benefice',
        icon: '',
      },
    ]
  },
  {
    id:'2',
    label : 'Comptabilité',
    routerLink : 'compta',
    icon : 'bar-chart',
    submenu: [
      {
        id: '2.1',
        routerLink: 'bilan-journalier',
        label: 'Bilan journalier',
        icon: '',
      },
      {
        id: '2.1',
        routerLink: 'bilan-period',
        label: 'Bilan periodique',
        icon: '',
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
