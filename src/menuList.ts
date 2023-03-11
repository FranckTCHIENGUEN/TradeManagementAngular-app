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
    routerLink : 'command',
    icon : 'newspaper',
    submenu: [
        {
          id: '2.1',
          routerLink: 'save-commande',
          label: 'Nouvelle commande',
          icon: 'assets/image/icon/iconCODEBARRE_128x128.png',
        },
      {
          id: '2.1',
          routerLink: 'list-commande',
          label: 'Liste commande',
          icon: 'assets/image/icon/iconCODEBARRE_128x128.png',
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
          routerLink: 'save-commande-fournisseur',
          label: 'Nouvelle commande',
          icon: 'assets/image/icon/iconCODEBARRE_128x128.png',
        },
      {
          id: '2.1',
          routerLink: 'list-commande-fournisseur',
          label: 'Liste commande',
          icon: 'assets/image/icon/iconCODEBARRE_128x128.png',
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
        icon: 'assets/image/icon/iconCODEBARRE_128x128.png',
      },
      {
        id: '2.1',
        routerLink: 'list-vente',
        label: 'Liste Vente',
        icon: 'assets/image/icon/iconCODEBARRE_128x128.png',
      },
    ]
  },
  {
    id:'2',
    label : 'Depense',
    routerLink : 'depense',
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
    icon : 'bar-chart'
  },

  // {
  //   id:'2',
  //   routerLink : 'code-barre',
  //   label : 'code barre',
  //   icon : 'assets/image/icon/iconCODEBARRE_128x128.png',
  //   submenu: [
  //     {
  //       id: '2.1',
  //       routerLink: 'code-barre-inventaire',
  //       label: 'code barre inventaire',
  //       icon: 'assets/image/icon/iconCODEBARRE_128x128.png',
  //     },
  //   ]
  // },
];
