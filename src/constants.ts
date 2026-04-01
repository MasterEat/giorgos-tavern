export const TAVERN_INFO = {
  name: "Ταβέρνα Ο Γιώργος",
  founded: "1990",
  tagline: "Αυθεντική Ελληνική Φιλοξενία από το 1990",
  address: "Κεντρική Πλατεία, Χωριό, Ελλάδα",
  phone: "+30 210 1234567",
  email: "info@taverna-giorgos.gr",
  hours: [
    { day: "Δευτέρα - Παρασκευή", time: "12:00 - 00:00" },
    { day: "Σάββατο - Κυριακή", time: "11:00 - 01:00" },
  ],
  socials: {
    facebook: "#",
    instagram: "#",
    tripadvisor: "#",
  }
};

export const MENU_CATEGORIES = [
  { id: 'orektika', title: 'Ορεκτικά' },
  { id: 'salates', title: 'Σαλάτες' },
  { id: 'kreatika', title: 'Κρεατικά & Σχάρας' },
  { id: 'mageirefta', title: 'Μαγειρευτά' },
  { id: 'thalassina', title: 'Θαλασσινά' },
  { id: 'epidorpia', title: 'Επιδόρπια' },
  { id: 'pota', title: 'Ποτά & Κρασιά' },
];

export const MENU_ITEMS = [
  {
    id: 1,
    category: 'orektika',
    name: 'Τζατζίκι Χειροποίητο',
    description: 'Με στραγγιστό γιαούρτι, φρέσκο αγγούρι και σκόρδο.',
    price: '4.50',
    image: 'https://picsum.photos/seed/tzatziki/400/300'
  },
  {
    id: 2,
    category: 'orektika',
    name: 'Φέτα Ψητή',
    description: 'Με ντομάτα, πιπεριά και μπούκοβο σε αλουμινόχαρτο.',
    price: '6.00',
    image: 'https://picsum.photos/seed/feta/400/300'
  },
  {
    id: 3,
    category: 'salates',
    name: 'Χωριάτικη Σαλάτα',
    description: 'Ντομάτα, αγγούρι, κρεμμύδι, ελιές, φέτα και παρθένο ελαιόλαδο.',
    price: '8.50',
    image: 'https://picsum.photos/seed/greek-salad/400/300'
  },
  {
    id: 4,
    category: 'kreatika',
    name: 'Παϊδάκια Αρνίσια',
    description: 'Το κιλό, ψημένα στα κάρβουνα με αλάτι και ρίγανη.',
    price: '32.00',
    image: 'https://picsum.photos/seed/lamb-chops/400/300'
  },
  {
    id: 5,
    category: 'mageirefta',
    name: 'Μουσακάς Παραδοσιακός',
    description: 'Με φρέσκο μοσχαρίσιο κιμά, μελιτζάνες και πλούσια μπεσαμέλ.',
    price: '12.00',
    image: 'https://picsum.photos/seed/moussaka/400/300'
  },
  {
    id: 6,
    category: 'thalassina',
    name: 'Χταπόδι Ψητό',
    description: 'Στα κάρβουνα με λαδολέμονο και ρίγανη.',
    price: '14.50',
    image: 'https://picsum.photos/seed/octopus/400/300'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Γιάννης Π.",
    text: "Η καλύτερη ταβέρνα της περιοχής. Τα παϊδάκια είναι απλά κορυφαία και η εξυπηρέτηση πάντα με χαμόγελο.",
    rating: 5
  },
  {
    id: 2,
    name: "Μαρία Κ.",
    text: "Αυθεντικές γεύσεις που μου θυμίζουν το φαγητό της γιαγιάς μου. Ο χώρος είναι πολύ ζεστός και φιλόξενος.",
    rating: 5
  },
  {
    id: 3,
    name: "Νίκος Α.",
    text: "Σταθερή αξία εδώ και χρόνια. Πάντα φρέσκα υλικά και πολύ καλές τιμές.",
    rating: 5
  }
];

export const GALLERY_IMAGES = [
  { url: 'https://picsum.photos/seed/tavern1/800/600', alt: 'Εσωτερικός χώρος ταβέρνας' },
  { url: 'https://picsum.photos/seed/food1/800/600', alt: 'Παραδοσιακά πιάτα' },
  { url: 'https://picsum.photos/seed/tavern2/800/600', alt: 'Η αυλή μας το καλοκαίρι' },
  { url: 'https://picsum.photos/seed/food2/800/600', alt: 'Ψητά στα κάρβουνα' },
  { url: 'https://picsum.photos/seed/tavern3/800/600', alt: 'Η ομάδα μας' },
  { url: 'https://picsum.photos/seed/food3/800/600', alt: 'Φρέσκες σαλάτες' },
];
