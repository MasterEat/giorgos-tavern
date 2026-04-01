import React from 'react';
import SEO from '../components/SEO';
import { TAVERN_INFO } from '../constants';
import { motion } from 'motion/react';
import { Heart, Users, Utensils, History } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      <SEO title="Η Ταβέρνα μας" description="Η ιστορία της Ταβέρνας Ο Γιώργος από το 1990. Μια οικογενειακή παράδοση στην ελληνική κουζίνα." />

      {/* Hero Section */}
      <section className="relative py-32 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://picsum.photos/seed/about-hero/1920/1080" 
            alt="About Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container-custom relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-beige font-bold uppercase tracking-widest text-sm">Η Ιστορία μας</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mt-4">Η Ταβέρνα μας</h1>
            <p className="text-brand-beige/80 text-xl max-w-2xl mx-auto mt-6 italic">
              "Μια οικογενειακή παράδοση που κρατάει από το 1990."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-serif font-bold text-brand-dark leading-tight">
                Πώς ξεκίνησαν όλα...
              </h2>
              <div className="w-20 h-1 bg-brand-olive rounded-full" />
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Το 1990, ο Γιώργος και η οικογένειά του αποφάσισαν να ανοίξουν μια μικρή ταβέρνα στο χωριό. Με αγάπη για το καλό φαγητό και μεράκι για τη φιλοξενία, ξεκίνησαν να σερβίρουν παραδοσιακές συνταγές που είχαν μάθει από τους γονείς τους.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Με το πέρασμα των χρόνων, η ταβέρνα έγινε σημείο αναφοράς για την περιοχή. Οι φίλοι μας αυξήθηκαν, αλλά η ποιότητά μας παρέμεινε αναλλοίωτη. Σήμερα, συνεχίζουμε με την ίδια όρεξη, προσφέροντας γεύσεις που θυμίζουν σπίτι.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              <div className="flex gap-4 items-start">
                <div className="shrink-0 w-12 h-12 bg-brand-olive/10 rounded-xl flex items-center justify-center text-brand-olive">
                  <History size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">30+ Χρόνια</h4>
                  <p className="text-sm text-gray-500">Συνεχούς λειτουργίας και προσφοράς.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="shrink-0 w-12 h-12 bg-brand-olive/10 rounded-xl flex items-center justify-center text-brand-olive">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Οικογένεια</h4>
                  <p className="text-sm text-gray-500">Μια επιχείρηση που στηρίζεται στην αγάπη μας.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/family-tavern/800/1000" 
                alt="Family Tradition" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-beige rounded-2xl p-6 shadow-2xl hidden md:flex flex-col justify-center items-center text-center border-4 border-white">
              <span className="text-4xl font-serif font-bold text-brand-olive">1990</span>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-burgundy mt-2">Έτος Ίδρυσης</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-brand-beige/20">
        <div className="container-custom space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-brand-dark">Οι Αξίες μας</h2>
            <p className="text-gray-600 text-lg">
              Στην Ταβέρνα Ο Γιώργος, πιστεύουμε ότι το καλό φαγητό είναι κάτι παραπάνω από ένα γεύμα. Είναι μια εμπειρία που μοιράζεσαι με αγαπημένα πρόσωπα.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: <Utensils size={32} />, 
                title: 'Ποιότητα Υλικών', 
                desc: 'Επιλέγουμε μόνο τα καλύτερα υλικά από τοπικούς παραγωγούς. Το ελαιόλαδο, τα κρέατα και τα λαχανικά μας είναι πάντα φρέσκα.' 
              },
              { 
                icon: <Heart size={32} />, 
                title: 'Μεράκι & Αγάπη', 
                desc: 'Κάθε πιάτο που βγαίνει από την κουζίνα μας είναι φτιαγμένο με αγάπη και προσοχή στη λεπτομέρεια, όπως ακριβώς θα το φτιάχναμε στο σπίτι μας.' 
              },
              { 
                icon: <Users size={32} />, 
                title: 'Φιλοξενία', 
                desc: 'Για εμάς, η φιλοξενία είναι ιερή. Θέλουμε κάθε επισκέπτης να νιώθει άνετα, οικεία και ευπρόσδεκτος από την πρώτη στιγμή.' 
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center space-y-6 hover:shadow-md transition-all">
                <div className="mx-auto w-16 h-16 bg-brand-olive/10 rounded-full flex items-center justify-center text-brand-olive">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-dark">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Atmosphere Section */}
      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                <img src="https://picsum.photos/seed/team1/600/600" alt="Team 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                <img src="https://picsum.photos/seed/team2/600/800" alt="Team 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                <img src="https://picsum.photos/seed/team3/600/800" alt="Team 3" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                <img src="https://picsum.photos/seed/team4/600/600" alt="Team 4" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-serif font-bold text-brand-dark leading-tight">
                Η Ομάδα μας & η Ατμόσφαιρα
              </h2>
              <div className="w-20 h-1 bg-brand-olive rounded-full" />
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Η ομάδα μας αποτελείται από ανθρώπους που μοιράζονται το ίδιο πάθος για την ελληνική κουζίνα. Από την κουζίνα μέχρι το σέρβις, όλοι εργαζόμαστε για να σας προσφέρουμε την καλύτερη δυνατή εμπειρία.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Ο χώρος μας είναι σχεδιασμένος για να σας προσφέρει ηρεμία και χαλάρωση. Είτε επιλέξετε τον εσωτερικό μας χώρο με το τζάκι το χειμώνα, είτε την καταπράσινη αυλή μας το καλοκαίρι, η ατμόσφαιρα θα σας αποζημιώσει.
            </p>
            <div className="pt-6">
              <div className="p-8 bg-brand-dark rounded-2xl text-white space-y-4 shadow-2xl">
                <h4 className="text-xl font-serif font-bold text-brand-beige italic">"Σας περιμένουμε να γίνετε μέρος της ιστορίας μας."</h4>
                <p className="text-white/60 text-sm">- Η Οικογένεια της Ταβέρνας Ο Γιώργος</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
