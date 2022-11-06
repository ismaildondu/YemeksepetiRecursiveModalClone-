const foodOptions = [
  {
    id: 1,
    title: "Orta Boy Pizzalar Hamur Seçimi",
    isRequired: true,
    options: [
      {
        id: 1,
        title: "İnce Hamur",
        price: 0,
      },
      {
        id: 2,
        title: "İncecik Hamur",
        price: 1,
      },
      {
        id: 3,
        title: "Klasik Hamur",
        price: 6,
      },
      {
        id: 4,
        title: "Sarmısaklı Kenar",
        price: 22,
      },
      {
        id: 5,
        title: "Sucuklu Kenar",
        price: 22,
      },
      {
        id: 6,
        title: "Kaşarlı Kenar",
        price: 22,
      },
      {
        id: 7,
        title: "Kaşarlı Sucuklu Kenar",
        price: 25,
      },
      {
        id: 8,
        title: "Kaşarlı Sarmısaklı Kenar",
        price: 25,
      },
    ],
  },
  {
    id: 2,
    title: "İçecek Seçimi",
    isRequired: true,
    options: [
      {
        id: 1,
        title: "Kola",
        price: 12,
      },
      {
        id: 2,
        title: "Fanta",
        price: 12,
      },
      {
        id: 3,
        title: "Lipton Ice Tea",
        price: 0,
        subOptions: [
          {
            id: 3,
            title: "Lipton Ice Tea Seçimi",
            isRequired: true,
            options: [
              {
                id: 1,
                title: "Şeftali",
                price: 12,
              },
              {
                id: 2,
                title: "Limon",
                price: 12,
              },
              {
                id: 3,
                title: "Çilek",
                price: 12,
              },
              {
                id: 4,
                title: "Diğer",
                price: 0,
                subOptions: [
                  {
                    id: 4,
                    title: "Diğer İçecek Seçimi",
                    isRequired: true,
                    options: [
                      {
                        id: 1,
                        title: "Özel Seri Lipton Ice Tea",
                        price: 59,
                      },
                      {
                        id: 2,
                        title: "Lipton Ice Tea 1.5 lt",
                        price: 29,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        title: "Ayran",
        price: 12,
      },
    ],
  },
];

export default foodOptions;
