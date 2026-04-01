import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Star, CheckCircle2, MapPin } from 'lucide-react';
import { TAVERN_INFO, MENU_ITEMS, TESTIMONIALS, GALLERY_IMAGES } from '../constants';
import SEO from '../components/SEO';
import { motion } from 'motion/react';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <SEO />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/tavern-hero/1920/1080" 
            alt="Tavern Atmosphere" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="container-custom relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="inline-block px-4 py-1.5 bg-brand-olive/80 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Από το 1990
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight tracking-tighter">
              Αυθεντικές Γεύσεις <br />
              <span className="text-brand-beige italic">της Ελλάδας</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium">
              Παραδοσιακή ελληνική κουζίνα, σπιτικές συνταγές και ζεστή φιλοξενία στην καρδιά του χωριού μας.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link 
              to="/menu" 
              className="w-full sm:w-auto px-8 py-4 bg-brand-burgundy hover:bg-brand-burgundy/90 text-white rounded-full font-bold transition-all flex items-center justify-center gap-2 shadow-xl"
            >
              Δείτε το Μενού
              <ArrowRight size={18} />
            </Link>
            <a 
              href={`tel:${TAVERN_INFO.phone}`}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-bold transition-all flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Κάντε Κράτηση
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Trust/Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/tavern-story/800/1000" 
                alt="Our Story" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-olive p-8 rounded-2xl shadow-xl hidden md:block max-w-[240px]">
              <p className="text-white font-serif text-xl italic leading-snug">
                "Το φαγητό είναι αγάπη, παράδοση και οικογένεια."
              </p>
              <p className="text-white/60 text-sm mt-4 font-bold uppercase tracking-widest">
                - Γιώργος, Ιδιοκτήτης
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-brand-burgundy font-bold uppercase tracking-widest text-sm">Η Ιστορία μας</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark leading-tight">
                Μια οικογενειακή παράδοση <br /> που κρατάει από το 1990
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Ξεκινήσαμε το 1990 με ένα όραμα: να προσφέρουμε το πιο αγνό και νόστιμο φαγητό στους φίλους και τους γείτονές μας. Σήμερα, 30+ χρόνια μετά, η φιλοσοφία μας παραμένει η ίδια.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Χρησιμοποιούμε μόνο φρέσκα, τοπικά υλικά και ακολουθούμε πιστά τις παραδοσιακές συνταγές που πέρασαν από γενιά σε γενιά. Στην ταβέρνα μας, κάθε επισκέπτης είναι μέλος της οικογένειάς μας.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <span className="text-3xl font-serif font-bold text-brand-olive">30+</span>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Χρόνια Εμπειρίας</p>
              </div>
              <div className="space-y-2">
                <span className="text-3xl font-serif font-bold text-brand-olive">100%</span>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Αγνά Υλικά</p>
              </div>
            </div>
            <div className="pt-6">
              <Link to="/about" className="text-brand-burgundy font-bold flex items-center gap-2 hover:gap-4 transition-all group">
                Μάθετε περισσότερα για εμάς
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="section-padding bg-brand-beige/30">
        <div className="container-custom space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-brand-burgundy font-bold uppercase tracking-widest text-sm">Προτάσεις μας</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">Οι Σπεσιαλιτέ μας</h2>
            <p className="text-gray-600 text-lg">
              Ανακαλύψτε μερικά από τα πιο αγαπημένα πιάτα των θαμώνων μας, φτιαγμένα με μεράκι και τα καλύτερα υλικά της ελληνικής γης.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MENU_ITEMS.slice(0, 3).map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-xl font-serif font-bold text-brand-dark">{item.name}</h3>
                    <span className="text-brand-olive font-bold text-lg">€{item.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="pt-4 border-t border-gray-50">
                    <Link to="/menu" className="text-sm font-bold text-brand-burgundy hover:underline">Δείτε το μενού</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/menu" 
              className="inline-flex items-center gap-2 px-10 py-4 bg-brand-olive text-white rounded-full font-bold hover:bg-brand-olive/90 transition-all shadow-lg"
            >
              Όλος ο Κατάλογος
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-brand-beige font-bold uppercase tracking-widest text-sm">Γιατί εμάς</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                Η αυθεντική εμπειρία <br /> μιας ελληνικής ταβέρνας
              </h2>
            </div>

            <div className="space-y-8">
              {[
                { title: 'Παραδοσιακές Συνταγές', desc: 'Συνταγές που έχουν δοκιμαστεί στο χρόνο και παραμένουν αναλλοίωτες.' },
                { title: 'Φρέσκα Τοπικά Υλικά', desc: 'Προμηθευόμαστε τα υλικά μας καθημερινά από τοπικούς παραγωγούς.' },
                { title: 'Ζεστή Φιλοξενία', desc: 'Σας υποδεχόμαστε πάντα με χαμόγελο και διάθεση να σας εξυπηρετήσουμε.' },
                { title: 'Αυθεντική Ατμόσφαιρα', desc: 'Ένας χώρος που αποπνέει ζεστασιά, παράδοση και οικειότητα.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-brand-olive/20 rounded-xl flex items-center justify-center text-brand-olive">
                    <CheckCircle2 size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-serif font-bold text-brand-beige">{item.title}</h4>
                    <p className="text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-8 border-white/5">
              <img 
                src="https://picsum.photos/seed/tavern-vibe/1000/1000" 
                alt="Tavern Vibe" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-burgundy rounded-full flex items-center justify-center text-center p-4 shadow-2xl rotate-12">
              <p className="font-serif text-white text-lg font-bold leading-tight">
                Από το <br /> 1990
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="text-brand-burgundy font-bold uppercase tracking-widest text-sm">Φωτογραφίες</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">Στιγμές από την Ταβέρνα μας</h2>
            </div>
            <Link to="/gallery" className="px-8 py-3 border-2 border-brand-olive text-brand-olive rounded-full font-bold hover:bg-brand-olive hover:text-white transition-all">
              Δείτε όλη τη Γκαλερί
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_IMAGES.slice(0, 4).map((img, idx) => (
              <div key={idx} className={`relative overflow-hidden rounded-xl group ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold text-sm uppercase tracking-widest">Προβολή</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-brand-beige/20">
        <div className="container-custom space-y-16">
          <div className="text-center space-y-4">
            <span className="text-brand-burgundy font-bold uppercase tracking-widest text-sm">Κριτικές</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">Τι λένε οι φίλοι μας</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 space-y-6 relative">
                <div className="flex text-brand-olive">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{t.text}"</p>
                <div className="pt-4 border-t border-gray-50">
                  <p className="font-bold text-brand-dark">{t.name}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Επισκέπτης</p>
                </div>
                <Star className="absolute top-10 right-10 text-brand-beige/20 w-12 h-12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA Block */}
      <section className="py-24 bg-brand-burgundy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://picsum.photos/seed/pattern/1000/1000" 
            alt="Pattern" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container-custom relative z-10 text-center space-y-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white max-w-4xl mx-auto leading-tight">
            Σας περιμένουμε για μια αυθεντική γευστική εμπειρία
          </h2>
          <p className="text-brand-beige/80 text-xl max-w-2xl mx-auto">
            Κάντε την κράτησή σας τηλεφωνικά και απολαύστε τις καλύτερες γεύσεις της Ελλάδας σε ένα ζεστό περιβάλλον.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={`tel:${TAVERN_INFO.phone}`}
              className="px-12 py-5 bg-white text-brand-burgundy rounded-full font-bold text-xl hover:bg-brand-beige transition-all shadow-2xl flex items-center gap-3"
            >
              <Phone size={24} />
              {TAVERN_INFO.phone}
            </a>
            <Link 
              to="/contact" 
              className="px-12 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-xl hover:bg-white/10 transition-all"
            >
              Βρείτε μας στο χάρτη
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview / Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-brand-dark">Πού θα μας βρείτε</h2>
              <p className="text-gray-500">Επισκεφθείτε μας στην καρδιά του χωριού για ένα γεύμα που θα σας μείνει αξέχαστο.</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-brand-beige rounded-full flex items-center justify-center text-brand-olive">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Διεύθυνση</h4>
                  <p className="text-gray-600 text-sm">{TAVERN_INFO.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-brand-beige rounded-full flex items-center justify-center text-brand-olive">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Τηλέφωνο</h4>
                  <p className="text-gray-600 text-sm">{TAVERN_INFO.phone}</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-brand-olive/5 rounded-2xl border border-brand-olive/10">
              <h4 className="font-bold text-brand-olive mb-2">Ωράριο σήμερα</h4>
              <p className="text-sm text-gray-600">12:00 - 00:00 (Ανοιχτά)</p>
            </div>
          </div>

          <div className="lg:col-span-2 h-[400px] bg-gray-100 rounded-2xl overflow-hidden relative shadow-inner">
            {/* Map Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 flex-col gap-4">
              <MapPin size={48} className="text-brand-olive opacity-20" />
              <p className="font-medium">Google Maps Placeholder</p>
              <p className="text-xs max-w-xs text-center">Εδώ θα εμφανίζεται ο χάρτης με την ακριβή τοποθεσία της ταβέρνας μας.</p>
            </div>
            <img 
              src="https://picsum.photos/seed/map/1200/800?grayscale" 
              alt="Map Placeholder" 
              className="w-full h-full object-cover opacity-30"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
