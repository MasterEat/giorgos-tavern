import React, { useState } from 'react';
import SEO from '../components/SEO';
import { TAVERN_INFO } from '../constants';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="pt-20 min-h-screen bg-brand-offwhite">
      <SEO title="Επικοινωνία & Κρατήσεις" description="Επικοινωνήστε με την Ταβέρνα Ο Γιώργος για κρατήσεις και πληροφορίες. Βρείτε μας στο χάρτη και δείτε το ωράριο λειτουργίας μας." />

      {/* Hero Section */}
      <section className="relative py-24 bg-brand-olive text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/contact-hero/1920/1080" 
            alt="Contact Hero" 
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
            <span className="text-brand-beige font-bold uppercase tracking-widest text-sm">Επικοινωνία</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mt-4">Επικοινωνία & Κρατήσεις</h1>
            <p className="text-brand-beige/80 text-xl max-w-2xl mx-auto mt-6 italic">
              "Σας περιμένουμε να σας φιλοξενήσουμε στην ταβέρνα μας."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-brand-dark">Στοιχεία Επικοινωνίας</h2>
                <p className="text-gray-500 leading-relaxed">
                  Είμαστε στη διάθεσή σας για οποιαδήποτε πληροφορία ή κράτηση. Προτιμήστε την τηλεφωνική επικοινωνία για άμεση εξυπηρέτηση.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-5 items-start">
                  <div className="shrink-0 w-12 h-12 bg-brand-olive/10 rounded-2xl flex items-center justify-center text-brand-olive shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-brand-dark uppercase tracking-widest text-xs">Τηλέφωνο</h4>
                    <a href={`tel:${TAVERN_INFO.phone}`} className="text-xl font-serif font-bold text-brand-burgundy hover:underline">
                      {TAVERN_INFO.phone}
                    </a>
                    <p className="text-xs text-gray-400">Προτείνεται για κρατήσεις</p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="shrink-0 w-12 h-12 bg-brand-olive/10 rounded-2xl flex items-center justify-center text-brand-olive shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-brand-dark uppercase tracking-widest text-xs">Email</h4>
                    <a href={`mailto:${TAVERN_INFO.email}`} className="text-lg font-serif font-bold text-brand-dark hover:text-brand-burgundy transition-colors">
                      {TAVERN_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="shrink-0 w-12 h-12 bg-brand-olive/10 rounded-2xl flex items-center justify-center text-brand-olive shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-brand-dark uppercase tracking-widest text-xs">Διεύθυνση</h4>
                    <p className="text-lg font-serif font-bold text-brand-dark">
                      {TAVERN_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="shrink-0 w-12 h-12 bg-brand-olive/10 rounded-2xl flex items-center justify-center text-brand-olive shadow-sm">
                    <Clock size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-brand-dark uppercase tracking-widest text-xs">Ωράριο</h4>
                    {TAVERN_INFO.hours.map((h, i) => (
                      <div key={i} className="text-sm text-gray-600">
                        <span className="font-bold text-brand-dark">{h.day}:</span> {h.time}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-brand-burgundy" />
                
                {formState === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20 space-y-6"
                  >
                    <div className="w-20 h-20 bg-brand-olive/10 rounded-full flex items-center justify-center mx-auto text-brand-olive">
                      <CheckCircle2 size={48} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-serif font-bold text-brand-dark">Το μήνυμα εστάλη!</h3>
                      <p className="text-gray-500 max-w-sm mx-auto">Σας ευχαριστούμε για την επικοινωνία. Θα σας απαντήσουμε το συντομότερο δυνατό.</p>
                    </div>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="text-brand-burgundy font-bold hover:underline"
                    >
                      Αποστολή νέου μηνύματος
                    </button>
                  </motion.div>
                ) : (
                  <div className="space-y-10">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-serif font-bold text-brand-dark">Στείλτε μας ένα μήνυμα</h3>
                      <p className="text-gray-500">Συμπληρώστε την παρακάτω φόρμα και θα επικοινωνήσουμε μαζί σας.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Ονοματεπώνυμο</label>
                        <input 
                          required
                          type="text" 
                          placeholder="π.χ. Ιωάννης Παπαδόπουλος"
                          className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-olive/20 focus:border-brand-olive transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email</label>
                        <input 
                          required
                          type="email" 
                          placeholder="π.χ. info@example.com"
                          className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-olive/20 focus:border-brand-olive transition-all"
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Θέμα</label>
                        <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-olive/20 focus:border-brand-olive transition-all appearance-none cursor-pointer">
                          <option>Κράτηση Τραπεζιού</option>
                          <option>Ερώτηση για το Μενού</option>
                          <option>Εκδήλωση / Γιορτή</option>
                          <option>Άλλο</option>
                        </select>
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Μήνυμα</label>
                        <textarea 
                          required
                          rows={5}
                          placeholder="Πώς μπορούμε να σας βοηθήσουμε;"
                          className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-olive/20 focus:border-brand-olive transition-all resize-none"
                        ></textarea>
                      </div>
                      <div className="md:col-span-2 pt-4">
                        <button 
                          disabled={formState === 'submitting'}
                          type="submit"
                          className="w-full py-5 bg-brand-olive text-white rounded-2xl font-bold text-lg hover:bg-brand-olive/90 transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {formState === 'submitting' ? (
                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <>
                              <Send size={20} />
                              Αποστολή Μηνύματος
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="h-[500px] bg-gray-100 rounded-3xl overflow-hidden relative shadow-inner border border-gray-200">
            {/* Map Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 flex-col gap-4 z-10">
              <div className="w-20 h-20 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-brand-olive shadow-xl">
                <MapPin size={40} />
              </div>
              <p className="font-serif text-2xl font-bold text-brand-dark">Βρείτε μας στο χάρτη</p>
              <p className="text-sm max-w-xs text-center">Κεντρική Πλατεία, Χωριό, Ελλάδα</p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="mt-4 px-8 py-3 bg-white text-brand-dark rounded-full font-bold shadow-lg hover:bg-brand-beige transition-all"
              >
                Άνοιγμα στους Χάρτες
              </a>
            </div>
            <img 
              src="https://picsum.photos/seed/map-full/1600/800?grayscale" 
              alt="Map Background" 
              className="w-full h-full object-cover opacity-40"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
