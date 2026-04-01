import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from 'lucide-react';
import { TAVERN_INFO } from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white/90 pt-20 pb-10">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Section */}
        <div className="space-y-6">
          <Link to="/" className="flex flex-col">
            <span className="font-serif text-3xl font-bold text-white tracking-tighter">
              {TAVERN_INFO.name}
            </span>
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-brand-beige/60">
              Από το 1990
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-white/60 max-w-xs italic">
            “Από το 1990, η Ταβέρνα Ο Γιώργος προσφέρει αυθεντικές ελληνικές γεύσεις, ζεστή φιλοξενία και μια παραδοσιακή εμπειρία φαγητού που μένει αξέχαστη.”
          </p>
          <div className="flex items-center space-x-4">
            <a href={TAVERN_INFO.socials.facebook} className="p-2 bg-white/5 hover:bg-brand-olive rounded-full transition-all text-white/80 hover:text-white">
              <Facebook size={20} />
            </a>
            <a href={TAVERN_INFO.socials.instagram} className="p-2 bg-white/5 hover:bg-brand-olive rounded-full transition-all text-white/80 hover:text-white">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-lg font-serif font-semibold text-white">Γρήγοροι Σύνδεσμοι</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-brand-beige transition-colors">Αρχική</Link></li>
            <li><Link to="/about" className="hover:text-brand-beige transition-colors">Η Ταβέρνα μας</Link></li>
            <li><Link to="/menu" className="hover:text-brand-beige transition-colors">Το Μενού μας</Link></li>
            <li><Link to="/gallery" className="hover:text-brand-beige transition-colors">Φωτογραφίες</Link></li>
            <li><Link to="/contact" className="hover:text-brand-beige transition-colors">Επικοινωνία</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-lg font-serif font-semibold text-white">Επικοινωνία</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-olive shrink-0" />
              <span>{TAVERN_INFO.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-olive shrink-0" />
              <a href={`tel:${TAVERN_INFO.phone}`} className="hover:text-brand-beige transition-colors">{TAVERN_INFO.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-olive shrink-0" />
              <a href={`mailto:${TAVERN_INFO.email}`} className="hover:text-brand-beige transition-colors">{TAVERN_INFO.email}</a>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div className="space-y-6">
          <h4 className="text-lg font-serif font-semibold text-white">Ωράριο Λειτουργίας</h4>
          <ul className="space-y-4 text-sm">
            {TAVERN_INFO.hours.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Clock size={18} className="text-brand-olive shrink-0" />
                <div>
                  <p className="font-medium text-white">{item.day}</p>
                  <p className="text-white/60">{item.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 pt-10">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {currentYear} {TAVERN_INFO.name}. Με επιφύλαξη παντός δικαιώματος.</p>
          <div className="flex items-center space-x-6">
            <Link to="#" className="hover:text-white transition-colors">Πολιτική Απορρήτου</Link>
            <Link to="#" className="hover:text-white transition-colors">Όροι Χρήσης</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
