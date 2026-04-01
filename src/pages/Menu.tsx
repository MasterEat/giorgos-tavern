import React, { useState } from 'react';
import SEO from '../components/SEO';
import { MENU_CATEGORIES, MENU_ITEMS, TAVERN_INFO } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { Search, UtensilsCrossed } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = MENU_ITEMS.filter(item => 
    (activeCategory === 'all' || item.category === activeCategory) &&
    (item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="pt-20 min-h-screen bg-brand-offwhite">
      <SEO title="Το Μενού μας" description="Ανακαλύψτε τις αυθεντικές ελληνικές γεύσεις της Ταβέρνας Ο Γιώργος. Ορεκτικά, σαλάτες, ψητά στα κάρβουνα και μαγειρευτά." />

      {/* Hero Section */}
      <section className="relative py-24 bg-brand-olive text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/menu-hero/1920/1080" 
            alt="Menu Hero" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container-custom relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-beige font-bold uppercase tracking-widest text-sm">Γεύσεις & Παράδοση</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mt-4">Το Μενού μας</h1>
            <p className="text-brand-beige/80 text-xl max-w-2xl mx-auto mt-6 italic">
              "Αυθεντικές συνταγές, φρέσκα υλικά και μεράκι σε κάθε πιάτο."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Navigation & Filter */}
      <section className="sticky top-20 z-40 bg-white shadow-sm border-b border-gray-100 py-4">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar w-full md:w-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                activeCategory === 'all' ? 'bg-brand-burgundy text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Όλα
            </button>
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat.id ? 'bg-brand-burgundy text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Αναζήτηση πιάτου..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive/20 focus:border-brand-olive transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-brand-olive font-bold text-sm shadow-md">
                        €{item.price}
                      </div>
                    </div>
                    <div className="p-8 space-y-4">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="text-xl font-serif font-bold text-brand-dark group-hover:text-brand-burgundy transition-colors">{item.name}</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed min-h-[40px]">
                        {item.description}
                      </p>
                      <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                          {MENU_CATEGORIES.find(c => c.id === item.category)?.title}
                        </span>
                        <UtensilsCrossed size={16} className="text-brand-olive opacity-20" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-20 space-y-6">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400">
                <Search size={40} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-bold text-brand-dark">Δεν βρέθηκαν πιάτα</h3>
                <p className="text-gray-500">Δοκιμάστε μια διαφορετική αναζήτηση ή κατηγορία.</p>
              </div>
              <button 
                onClick={() => {setSearchTerm(''); setActiveCategory('all');}}
                className="text-brand-burgundy font-bold hover:underline"
              >
                Επαναφορά φίλτρων
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Menu Footer Info */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="bg-brand-dark rounded-3xl p-12 text-center space-y-8 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-olive" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Θέλετε κάτι εκτός καταλόγου;</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto italic">
              "Ρωτήστε μας για τα πιάτα ημέρας και τα φρέσκα υλικά που παραλάβαμε σήμερα το πρωί."
            </p>
            <div className="pt-4">
              <a 
                href={`tel:${TAVERN_INFO.phone}`}
                className="inline-flex items-center gap-3 px-10 py-4 bg-brand-olive text-white rounded-full font-bold hover:bg-brand-olive/90 transition-all shadow-lg"
              >
                Καλέστε μας για πληροφορίες
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
