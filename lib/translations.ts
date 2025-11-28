export type Language = 'pl' | 'en'

export const translations = {
  pl: {
    // Header
    nav: {
      home: 'Strona główna',
      products: 'Produkty',
      categories: 'Kategorie',
      about: 'O nas',
    },
    // Hero Section
    hero: {
      badge: 'Premium Meble',
      title: 'Przekształć Swoją',
      titleHighlight: 'Przestrzeń',
      description: 'Odkryj naszą kolekcję mebli premium, które dodadzą Twojemu domowi stylu, komfortu i elegancji.',
      shopCollection: 'Zobacz Kolekcję',
      exploreCategories: 'Przeglądaj Kategorie',
    },
    // Features
    features: {
      freeShipping: {
        title: 'Darmowa Dostawa',
        description: 'Darmowa dostawa przy zamówieniach powyżej 500 zł',
      },
      quality: {
        title: 'Gwarancja Jakości',
        description: 'Premiumowe materiały i rzemiosło',
      },
      support: {
        title: 'Wsparcie 24/7',
        description: 'Ekspercka obsługa klienta zawsze dostępna',
      },
    },
    // Products
    products: {
      featured: 'Wyróżnione',
      handpicked: 'Starannie Wybrane',
      favorites: 'Ulubione',
      description: 'Odkryj nasze najpopularniejsze produkty, wybrane ze względu na jakość i design',
      viewAll: 'Zobacz Wszystkie Produkty',
      allProducts: 'Wszystkie Produkty',
      pageDescription: 'Odkryj naszą pełną kolekcję mebli',
      searchPlaceholder: 'Szukaj produktów...',
      noProductsFound: 'Nie znaleziono produktów',
      noProductsDescription: 'Spróbuj dostosować kryteria wyszukiwania lub filtrowania',
      showing: 'Wyświetlanie',
      of: 'z',
      products: 'produktów',
      viewDetails: 'Zobacz Szczegóły',
    },
    // Categories
    categories: {
      title: 'Przeglądaj według',
      titleHighlight: 'Kategorii',
      description: 'Znajdź dokładnie to, czego szukasz w naszych kolekcjach',
      sofas: 'Sofy',
      tables: 'Stoły',
      chairs: 'Krzesła',
      bedroom: 'Sypialnia',
    },
    // CTA
    cta: {
      title: 'Gotowy na Przekształcenie',
      titleHighlight: 'Swojego Domu?',
      description: 'Zacznij przeglądać naszą kolekcję już dziś i znajdź idealne meble do swojego domu.',
      startShopping: 'Zacznij Zakupy',
    },
    // Footer
    footer: {
      description: 'Meble Idea - Twój sklep meblowy w Łomży. Nowoczesne, stylowe meble do Twojego domu.',
      quickLinks: 'Szybkie Linki',
      customerService: 'Obsługa Klienta',
      newsletter: 'Newsletter',
      newsletterDescription: 'Zapisz się, aby otrzymywać specjalne oferty i aktualizacje o nowościach.',
      subscribe: 'Zapisz się',
      allProducts: 'Wszystkie Produkty',
      shippingInfo: 'Informacje o Dostawie',
      returns: 'Zwroty',
      warranty: 'Gwarancja',
      faq: 'FAQ',
      contact: 'Kontakt',
      rights: 'Wszelkie prawa zastrzeżone',
    },
    // About
    about: {
      title: 'O nas',
      subtitle: 'Meble Idea - Twój sklep meblowy w Łomży',
      description: 'Jesteśmy lokalnym sklepem meblowym z pasją do pięknych wnętrz. Od lat pomagamy klientom w Łomży i okolicach znaleźć idealne meble do ich domów.',
      location: {
        title: 'Lokalizacja',
        address: 'ul. Pileckiego 2',
        city: '18-400 Łomża',
        description: 'Odwiedź nas w naszym sklepie stacjonarnym w centrum Łomży.',
      },
      mission: {
        title: 'Nasza Misja',
        description: 'Naszym celem jest dostarczanie mebli wysokiej jakości, które łączą funkcjonalność z elegancją. Wierzymy, że każdy dom zasługuje na piękne, trwałe meble, które będą służyć przez lata.',
      },
      values: {
        title: 'Nasze Wartości',
        quality: {
          title: 'Jakość',
          description: 'Oferujemy tylko najlepsze produkty od sprawdzonych producentów.',
        },
        service: {
          title: 'Obsługa Klienta',
          description: 'Zawsze jesteśmy gotowi pomóc w wyborze idealnych mebli dla Twojego domu.',
        },
        community: {
          title: 'Społeczność',
          description: 'Jesteśmy dumni z bycia częścią lokalnej społeczności Łomży.',
        },
      },
      visitUs: 'Odwiedź Nas',
      contactUs: 'Skontaktuj Się',
    },
    // Categories
    categoriesPage: {
      title: 'Kategorie',
      subtitle: 'Przeglądaj nasze kolekcje',
      description: 'Znajdź idealne meble do każdego pokoju w Twoim domu.',
      viewProducts: 'Zobacz Produkty',
      productsCount: 'produktów',
    },
    // Common
    common: {
      add: 'Dodaj',
      addToCart: 'Dodaj do koszyka',
      outOfStock: 'Wyprzedane',
      sale: 'Wyprzedaż',
      reviews: 'opinie',
      all: 'Wszystkie',
      features: 'Cechy:',
      quantity: 'Ilość',
      total: 'Razem:',
      productNotFound: 'Produkt Nie Znaleziony',
      productNotFoundDesc: 'Produkt, którego szukasz, nie istnieje.',
      backToProducts: 'Powrót do Produktów',
    },
    // Cart
    cart: {
      title: 'Koszyk',
      empty: 'Twój koszyk jest pusty',
      emptyDesc: 'Wygląda na to, że nie dodałeś jeszcze nic do koszyka.',
      continueShopping: 'Kontynuuj Zakupy',
      clearCart: 'Wyczyść Koszyk',
      orderSummary: 'Podsumowanie Zamówienia',
      subtotal: 'Suma częściowa',
      shipping: 'Dostawa',
      free: 'Darmowa',
      each: 'sztuka',
      proceedToCheckout: 'Przejdź do Kasy',
      addMoreForFreeShipping: 'Dodaj ${amount} więcej za darmową dostawę!',
      pageNotFound: 'Strona Nie Znaleziona',
      pageNotFoundDesc: 'Strona, której szukasz, nie istnieje.',
      goHome: 'Strona Główna',
    },
    // Contact
    contact: {
      title: 'Kontakt',
      description: 'Skontaktuj się z nami - chętnie odpowiemy na Twoje pytania',
      infoTitle: 'Informacje Kontaktowe',
      address: {
        title: 'Adres',
        street: 'ul. Pileckiego 2',
        city: '18-400 Łomża',
      },
      phone: {
        title: 'Telefon',
        number: '+48 86 123 45 67',
      },
      email: {
        title: 'Email',
        address: 'kontakt@mebleidea.pl',
      },
      hours: {
        title: 'Godziny Otwarcia',
        weekdays: 'Pon-Pt: 9:00 - 18:00',
        weekend: 'Sob: 9:00 - 15:00',
      },
      formTitle: 'Wyślij Wiadomość',
      form: {
        name: 'Imię i Nazwisko',
        email: 'Email',
        phone: 'Telefon',
        subject: 'Temat',
        selectSubject: 'Wybierz temat',
        message: 'Wiadomość',
        submit: 'Wyślij',
        options: {
          question: 'Pytanie',
          order: 'Zamówienie',
          complaint: 'Reklamacja',
          other: 'Inne',
        },
      },
    },
    // Customer Service
    customerService: {
      title: 'Obsługa Klienta',
      description: 'Jesteśmy tutaj, aby Ci pomóc',
      phone: {
        title: 'Telefon',
        description: 'Zadzwoń do nas',
        number: '+48 86 123 45 67',
      },
      email: {
        title: 'Email',
        description: 'Napisz do nas',
        address: 'obsługa@mebleidea.pl',
      },
      help: {
        title: 'Potrzebujesz Pomocy?',
        description: 'Skontaktuj się z nami, a chętnie odpowiemy na wszystkie Twoje pytania',
        button: 'Skontaktuj Się',
      },
    },
    // Shipping
    shipping: {
      title: 'Informacje o Dostawie',
      description: 'Wszystko, co musisz wiedzieć o dostawie',
      free: {
        title: 'Darmowa Dostawa',
        description: 'Darmowa dostawa przy zamówieniach powyżej 500 zł w Łomży i okolicach (do 30 km)',
      },
      delivery: {
        title: 'Czas Dostawy',
        description: 'Szacowany czas dostawy:',
        local: 'Łomża i okolice (do 30 km): 1-2 dni robocze',
        regional: '',
        national: '',
      },
      areas: {
        title: 'Obszary Dostawy',
        description: 'Dostarczamy meble tylko w Łomży i okolicach (w promieniu do 30 km od sklepu). W przypadku większych mebli oferujemy również usługę montażu. Dla klientów spoza tego obszaru możliwy jest odbiór osobisty w sklepie.',
      },
      packaging: {
        title: 'Opakowanie',
        description: 'Wszystkie produkty są starannie zapakowane, aby zapewnić bezpieczną dostawę. W przypadku uszkodzenia podczas transportu, skontaktuj się z nami natychmiast.',
      },
    },
    // Returns
    returns: {
      title: 'Zwroty',
      description: 'Polityka zwrotów i reklamacji',
      policy: {
        title: 'Polityka Zwrotów',
        description: 'Możesz zwrócić produkt w ciągu 14 dni od otrzymania, jeśli:',
        condition1: 'Produkt jest w oryginalnym stanie',
        condition2: 'Zachowano oryginalne opakowanie',
        condition3: 'Produkt nie był używany',
      },
      period: {
        title: 'Okres Zwrotu',
        description: 'Masz 14 dni na zwrot produktu od momentu jego otrzymania. Zwrot jest bezpłatny.',
      },
      process: {
        title: 'Proces Zwrotu',
        step1: 'Skontaktuj się z nami telefonicznie lub mailowo',
        step2: 'Otrzymasz instrukcje zwrotu i etykietę zwrotną',
        step3: 'Zapakuj produkt w oryginalne opakowanie',
        step4: 'Wyślij produkt do nas lub przynieś do sklepu',
      },
      refund: {
        title: 'Zwrot Pieniędzy',
        description: 'Zwrot pieniędzy zostanie przetworzony w ciągu 5-7 dni roboczych od otrzymania zwróconego produktu.',
      },
    },
    // Warranty
    warranty: {
      title: 'Gwarancja',
      description: 'Informacje o gwarancji na nasze produkty',
      coverage: {
        title: 'Zakres Gwarancji',
        description: 'Wszystkie nasze meble objęte są gwarancją producenta:',
        item1: 'Gwarancja na wady materiałowe',
        item2: 'Gwarancja na wady produkcyjne',
        item3: 'Gwarancja na uszkodzenia mechaniczne w normalnym użytkowaniu',
      },
      period: {
        title: 'Okres Gwarancji',
        description: 'Standardowa gwarancja wynosi 2 lata od daty zakupu. Niektóre produkty premium mają przedłużoną gwarancję do 5 lat.',
      },
      covered: {
        title: 'Co Jest Objęte Gwarancją',
        item1: 'Wady materiałowe i produkcyjne',
        item2: 'Uszkodzenia wynikające z normalnego użytkowania',
        item3: 'Problemy z mechanizmami (np. szuflady, drzwi)',
        item4: 'Wady lakieru i wykończenia',
      },
      notCovered: {
        title: 'Co Nie Jest Objęte Gwarancją',
        item1: 'Uszkodzenia spowodowane niewłaściwym użytkowaniem',
        item2: 'Uszkodzenia spowodowane wypadkami',
        item3: 'Naturalne zużycie materiałów',
      },
    },
    // FAQ
    faq: {
      title: 'Często Zadawane Pytania',
      description: 'Znajdź odpowiedzi na najczęściej zadawane pytania',
      questions: [
        {
          question: 'Jak mogę złożyć zamówienie?',
          answer: 'Możesz złożyć zamówienie przez naszą stronę internetową, telefonicznie lub osobiście w naszym sklepie przy ul. Pileckiego 2 w Łomży.',
        },
        {
          question: 'Czy oferujecie darmową dostawę?',
          answer: 'Tak, oferujemy darmową dostawę przy zamówieniach powyżej 500 zł w Łomży i okolicach (do 30 km).',
        },
        {
          question: 'Jak długo trwa dostawa?',
          answer: 'Dostawa dostępna jest tylko w Łomży i okolicach (do 30 km). Czas dostawy to 1-2 dni robocze. Dla klientów spoza tego obszaru możliwy jest odbiór osobisty w sklepie.',
        },
        {
          question: 'Czy mogę zwrócić produkt?',
          answer: 'Tak, masz 14 dni na zwrot produktu od momentu jego otrzymania, jeśli jest w oryginalnym stanie i opakowaniu.',
        },
        {
          question: 'Jakie formy płatności akceptujecie?',
          answer: 'Akceptujemy płatności gotówką, kartą płatniczą oraz przelewem bankowym.',
        },
        {
          question: 'Czy oferujecie montaż mebli?',
          answer: 'Tak, oferujemy usługę montażu mebli. Szczegóły można uzgodnić podczas składania zamówienia.',
        },
        {
          question: 'Jakie jest pokrycie gwarancją?',
          answer: 'Wszystkie nasze meble objęte są standardową gwarancją 2-letnią. Niektóre produkty premium mają przedłużoną gwarancję do 5 lat.',
        },
        {
          question: 'Czy mogę zobaczyć meble przed zakupem?',
          answer: 'Tak, zapraszamy do naszego sklepu stacjonarnego w Łomży przy ul. Pileckiego 2, gdzie możesz zobaczyć i wypróbować meble przed zakupem.',
        },
      ],
    },
  },
  en: {
    // Header
    nav: {
      home: 'Home',
      products: 'Products',
      categories: 'Categories',
      about: 'About',
    },
    // Hero Section
    hero: {
      badge: 'Premium Quality Furniture',
      title: 'Transform Your',
      titleHighlight: 'Living Space',
      description: 'Discover our curated collection of premium furniture designed to elevate your home with style, comfort, and elegance.',
      shopCollection: 'Shop Collection',
      exploreCategories: 'Explore Categories',
    },
    // Features
    features: {
      freeShipping: {
        title: 'Free Shipping',
        description: 'Free delivery on orders over $500',
      },
      quality: {
        title: 'Quality Guarantee',
        description: 'Premium materials and craftsmanship',
      },
      support: {
        title: '24/7 Support',
        description: 'Expert customer service always available',
      },
    },
    // Products
    products: {
      featured: 'Featured',
      handpicked: 'Handpicked',
      favorites: 'Favorites',
      description: 'Discover our most popular pieces, carefully selected for their quality and design',
      viewAll: 'View All Products',
      allProducts: 'All Products',
      pageDescription: 'Discover our complete furniture collection',
      searchPlaceholder: 'Search products...',
      noProductsFound: 'No products found',
      noProductsDescription: 'Try adjusting your search or filter criteria',
      showing: 'Showing',
      of: 'of',
      products: 'products',
      viewDetails: 'View Details',
    },
    // Categories
    categories: {
      title: 'Shop by',
      titleHighlight: 'Category',
      description: "Find exactly what you're looking for in our organized collections",
      sofas: 'Sofas',
      tables: 'Tables',
      chairs: 'Chairs',
      bedroom: 'Bedroom',
    },
    // CTA
    cta: {
      title: 'Ready to Transform',
      titleHighlight: 'Your Home?',
      description: 'Start shopping our collection today and discover the perfect pieces for your space.',
      startShopping: 'Start Shopping',
    },
    // Footer
    footer: {
      description: 'Meble Idea - Your furniture store in Łomża. Modern, stylish furniture that transforms your living spaces.',
      quickLinks: 'Quick Links',
      customerService: 'Customer Service',
      newsletter: 'Newsletter',
      newsletterDescription: 'Subscribe to get special offers and updates on new arrivals.',
      subscribe: 'Subscribe',
      allProducts: 'All Products',
      shippingInfo: 'Shipping Info',
      returns: 'Returns',
      warranty: 'Warranty',
      faq: 'FAQ',
      contact: 'Contact',
      rights: 'All rights reserved',
    },
    // About
    about: {
      title: 'About Us',
      subtitle: 'Meble Idea - Your Furniture Store in Łomża',
      description: 'We are a local furniture store with a passion for creating beautiful living spaces. For years, we have been helping customers in Łomża and the surrounding area find the perfect furniture for their homes.',
      location: {
        title: 'Location',
        address: 'ul. Pileckiego 2',
        city: '18-400 Łomża',
        description: 'Visit us at our brick-and-mortar store in the center of Łomża.',
      },
      mission: {
        title: 'Our Mission',
        description: 'Our goal is to provide high-quality furniture that combines functionality with elegance. We believe that every home deserves beautiful, durable furniture that will serve for years.',
      },
      values: {
        title: 'Our Values',
        quality: {
          title: 'Quality',
          description: 'We offer only the best products from trusted manufacturers.',
        },
        service: {
          title: 'Customer Service',
          description: 'We are always ready to help you choose the perfect furniture for your home.',
        },
        community: {
          title: 'Community',
          description: 'We are proud to be part of the local Łomża community.',
        },
      },
      visitUs: 'Visit Us',
      contactUs: 'Contact Us',
    },
    // Categories
    categoriesPage: {
      title: 'Categories',
      subtitle: 'Browse Our Collections',
      description: 'Find the perfect furniture for every room in your home.',
      viewProducts: 'View Products',
      productsCount: 'products',
    },
    // Common
    common: {
      add: 'Add',
      addToCart: 'Add to Cart',
      outOfStock: 'Out of Stock',
      sale: 'Sale',
      reviews: 'reviews',
      all: 'All',
      features: 'Features:',
      quantity: 'Quantity',
      total: 'Total:',
      productNotFound: 'Product Not Found',
      productNotFoundDesc: "The product you're looking for doesn't exist.",
      backToProducts: 'Back to Products',
    },
    // Cart
    cart: {
      title: 'Shopping Cart',
      empty: 'Your cart is empty',
      emptyDesc: "Looks like you haven't added anything to your cart yet.",
      continueShopping: 'Continue Shopping',
      clearCart: 'Clear Cart',
      orderSummary: 'Order Summary',
      subtotal: 'Subtotal',
      shipping: 'Shipping',
      free: 'Free',
      each: 'each',
      proceedToCheckout: 'Proceed to Checkout',
      addMoreForFreeShipping: 'Add ${amount} more for free shipping!',
      pageNotFound: 'Page Not Found',
      pageNotFoundDesc: "The page you're looking for doesn't exist.",
      goHome: 'Go Home',
    },
    // Contact
    contact: {
      title: 'Contact',
      description: 'Get in touch with us - we\'re happy to answer your questions',
      infoTitle: 'Contact Information',
      address: {
        title: 'Address',
        street: 'ul. Pileckiego 2',
        city: '18-400 Łomża',
      },
      phone: {
        title: 'Phone',
        number: '+48 86 123 45 67',
      },
      email: {
        title: 'Email',
        address: 'contact@mebleidea.pl',
      },
      hours: {
        title: 'Opening Hours',
        weekdays: 'Mon-Fri: 9:00 AM - 6:00 PM',
        weekend: 'Sat: 9:00 AM - 3:00 PM',
      },
      formTitle: 'Send Message',
      form: {
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        subject: 'Subject',
        selectSubject: 'Select subject',
        message: 'Message',
        submit: 'Send',
        options: {
          question: 'Question',
          order: 'Order',
          complaint: 'Complaint',
          other: 'Other',
        },
      },
    },
    // Customer Service
    customerService: {
      title: 'Customer Service',
      description: 'We are here to help you',
      phone: {
        title: 'Phone',
        description: 'Call us',
        number: '+48 86 123 45 67',
      },
      email: {
        title: 'Email',
        description: 'Email us',
        address: 'service@mebleidea.pl',
      },
      help: {
        title: 'Need Help?',
        description: 'Contact us and we\'ll be happy to answer all your questions',
        button: 'Contact Us',
      },
    },
    // Shipping
    shipping: {
      title: 'Shipping Information',
      description: 'Everything you need to know about shipping',
      free: {
        title: 'Free Shipping',
        description: 'Free shipping on orders over 500 PLN in Łomża and surrounding area (within 30 km)',
      },
      delivery: {
        title: 'Delivery Time',
        description: 'Estimated delivery time:',
        local: 'Łomża and surrounding area (within 30 km): 1-2 business days',
        regional: '',
        national: '',
      },
      areas: {
        title: 'Delivery Areas',
        description: 'We deliver furniture only in Łomża and surrounding area (within 30 km radius from the store). For larger furniture, we also offer assembly service. For customers outside this area, pickup at the store is available.',
      },
      packaging: {
        title: 'Packaging',
        description: 'All products are carefully packaged to ensure safe delivery. In case of damage during transport, contact us immediately.',
      },
    },
    // Returns
    returns: {
      title: 'Returns',
      description: 'Return and refund policy',
      policy: {
        title: 'Return Policy',
        description: 'You can return a product within 14 days of receipt if:',
        condition1: 'The product is in original condition',
        condition2: 'Original packaging is preserved',
        condition3: 'The product has not been used',
      },
      period: {
        title: 'Return Period',
        description: 'You have 14 days to return the product from the moment you receive it. Returns are free.',
      },
      process: {
        title: 'Return Process',
        step1: 'Contact us by phone or email',
        step2: 'You will receive return instructions and a return label',
        step3: 'Pack the product in original packaging',
        step4: 'Send the product to us or bring it to the store',
      },
      refund: {
        title: 'Refund',
        description: 'Refund will be processed within 5-7 business days of receiving the returned product.',
      },
    },
    // Warranty
    warranty: {
      title: 'Warranty',
      description: 'Information about warranty on our products',
      coverage: {
        title: 'Warranty Coverage',
        description: 'All our furniture is covered by manufacturer warranty:',
        item1: 'Warranty for material defects',
        item2: 'Warranty for manufacturing defects',
        item3: 'Warranty for mechanical damage in normal use',
      },
      period: {
        title: 'Warranty Period',
        description: 'Standard warranty is 2 years from the date of purchase. Some premium products have extended warranty up to 5 years.',
      },
      covered: {
        title: 'What Is Covered',
        item1: 'Material and manufacturing defects',
        item2: 'Damage resulting from normal use',
        item3: 'Problems with mechanisms (e.g., drawers, doors)',
        item4: 'Varnish and finish defects',
      },
      notCovered: {
        title: 'What Is Not Covered',
        item1: 'Damage caused by improper use',
        item2: 'Damage caused by accidents',
        item3: 'Natural wear of materials',
      },
    },
    // FAQ
    faq: {
      title: 'Frequently Asked Questions',
      description: 'Find answers to the most frequently asked questions',
      questions: [
        {
          question: 'How can I place an order?',
          answer: 'You can place an order through our website, by phone, or in person at our store at ul. Pileckiego 2 in Łomża.',
        },
        {
          question: 'Do you offer free shipping?',
          answer: 'Yes, we offer free shipping on orders over 500 PLN in Łomża and surrounding area (within 30 km).',
        },
        {
          question: 'How long does delivery take?',
          answer: 'Delivery is available only in Łomża and surrounding area (within 30 km). Delivery time is 1-2 business days. For customers outside this area, pickup at the store is available.',
        },
        {
          question: 'Can I return a product?',
          answer: 'Yes, you have 14 days to return the product from the moment you receive it, if it\'s in original condition and packaging.',
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept cash, credit card, and bank transfer payments.',
        },
        {
          question: 'Do you offer furniture assembly?',
          answer: 'Yes, we offer furniture assembly service. Details can be arranged when placing an order.',
        },
        {
          question: 'What is the warranty coverage?',
          answer: 'All our furniture is covered by a standard 2-year warranty. Some premium products have extended warranty up to 5 years.',
        },
        {
          question: 'Can I see the furniture before buying?',
          answer: 'Yes, we invite you to our brick-and-mortar store in Łomża at ul. Pileckiego 2, where you can see and try the furniture before purchase.',
        },
      ],
    },
  },
} as const

export const defaultLanguage: Language = 'pl'

export function getTranslation(lang: Language = defaultLanguage) {
  return translations[lang]
}

