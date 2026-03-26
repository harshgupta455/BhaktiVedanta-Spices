import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Menu, X, Phone, Mail, MapPin, Instagram, Facebook, Twitter, ArrowRight, CheckCircle2, Star, Quote, ChevronRight, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from './lib/utils';
import { PRODUCTS, Product } from './constants';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Wholesale', path: '/wholesale' },
    { name: 'Recipes', path: '/recipes' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-deep-red rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">B</div>
          <span className={cn("font-serif text-2xl font-bold tracking-tight", isScrolled ? "text-earth-brown" : "text-earth-brown")}>
            BhaktiVedanta <span className="text-deep-red">Spices</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-earth-brown font-medium hover:text-deep-red transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-deep-red text-white p-2 rounded-full hover:bg-red-900 transition-all">
            <ShoppingCart size={20} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-earth-brown" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-earth-brown border-b border-gray-100 pb-2"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-earth-brown text-cream pt-20 pb-10 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-deep-red rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">B</div>
          <span className="font-serif text-2xl font-bold tracking-tight">BhaktiVedanta</span>
        </div>
        <p className="text-cream/70 leading-relaxed">
          Bringing the sacred aroma of traditional Indian kitchens to your home. Pure, authentic, and ethically sourced.
        </p>
        <div className="flex gap-4">
          <Instagram className="hover:text-saffron cursor-pointer transition-colors" />
          <Facebook className="hover:text-saffron cursor-pointer transition-colors" />
          <Twitter className="hover:text-saffron cursor-pointer transition-colors" />
        </div>
      </div>

      <div>
        <h4 className="font-serif text-xl font-bold mb-6">Quick Links</h4>
        <ul className="space-y-3 text-cream/70">
          <li><Link to="/products" className="hover:text-saffron">Our Spices</Link></li>
          <li><Link to="/about" className="hover:text-saffron">Our Story</Link></li>
          <li><Link to="/wholesale" className="hover:text-saffron">Wholesale Inquiry</Link></li>
          <li><Link to="/recipes" className="hover:text-saffron">Recipes & Blog</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-serif text-xl font-bold mb-6">Contact Us</h4>
        <ul className="space-y-4 text-cream/70">
          <li className="flex gap-3"><MapPin size={20} className="text-saffron shrink-0" /> 123 Spice Market, Khari Baoli, Delhi, India</li>
          <li className="flex gap-3"><Phone size={20} className="text-saffron shrink-0" /> +91 98765 43210</li>
          <li className="flex gap-3"><Mail size={20} className="text-saffron shrink-0" /> hello@bhaktivedanta.com</li>
        </ul>
      </div>

      <div>
        <h4 className="font-serif text-xl font-bold mb-6">Newsletter</h4>
        <p className="text-cream/70 mb-4">Get 10% off on your first order & exclusive spice tips.</p>
        <div className="flex gap-2">
          <input type="email" placeholder="Your email" className="bg-white/10 border border-white/20 rounded-full px-4 py-2 w-full focus:outline-none focus:border-saffron" />
          <button className="bg-saffron text-earth-brown p-2 rounded-full hover:bg-gold transition-all">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-cream/40 text-sm">
      © 2026 BhaktiVedanta Spices. All rights reserved. | Privacy Policy | Terms of Service
    </div>
  </footer>
);

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/919876543210" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
  >
    <MessageCircle size={24} />
    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-medium whitespace-nowrap">Chat with us</span>
  </a>
);

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('hasSeenPopup');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 5000); // Show after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenPopup', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-earth-brown/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-cream rounded-[3rem] overflow-hidden max-w-2xl w-full grid grid-cols-1 md:grid-cols-2 shadow-2xl"
          >
            <div className="h-full hidden md:block">
              <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800" alt="Spices" className="w-full h-full object-cover" />
            </div>
            <div className="p-10 space-y-6 flex flex-col justify-center">
              <button onClick={closePopup} className="absolute top-6 right-6 text-earth-brown/40 hover:text-earth-brown"><X size={24} /></button>
              <div className="space-y-2">
                <span className="text-deep-red font-bold uppercase tracking-widest text-xs">Exclusive Offer</span>
                <h3 className="text-3xl font-serif text-earth-brown">Get 15% Off Your First Order</h3>
                <p className="text-earth-brown/60">Join our community of spice lovers and get authentic Indian recipes delivered to your inbox.</p>
              </div>
              <div className="space-y-3">
                <input type="email" placeholder="Enter your email" className="w-full bg-white border border-gold/20 rounded-full px-6 py-3 focus:outline-none focus:border-deep-red" />
                <button className="btn-primary w-full" onClick={closePopup}>Claim My Discount</button>
              </div>
              <p className="text-[10px] text-center text-earth-brown/40 uppercase tracking-widest">No spam. Only pure aroma.</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- Pages ---

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center px-6 pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=2000" 
            alt="Spices background" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-earth-brown/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-8"
          >
            <span className="text-saffron font-bold tracking-widest uppercase text-sm">Traditional Purity. Modern Quality.</span>
            <h1 className="text-5xl md:text-7xl text-white font-serif leading-tight">
              Bring the <span className="italic text-gold">Sacred Soul</span> of Indian Flavors to Your Kitchen.
            </h1>
            <p className="text-cream/80 text-xl leading-relaxed">
              Experience 100% pure, hand-picked spices processed with ancient methods to preserve natural oils, aroma, and health benefits.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/products" className="btn-primary flex items-center gap-2">
                Shop Our Spices <ShoppingCart size={18} />
              </Link>
              <Link to="/wholesale" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-earth-brown">
                Wholesale Inquiry
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-cream border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2 font-bold text-earth-brown"><CheckCircle2 className="text-deep-red" /> FSSAI CERTIFIED</div>
          <div className="flex items-center gap-2 font-bold text-earth-brown"><CheckCircle2 className="text-deep-red" /> 100% ORGANIC</div>
          <div className="flex items-center gap-2 font-bold text-earth-brown"><CheckCircle2 className="text-deep-red" /> ISO 22000</div>
          <div className="flex items-center gap-2 font-bold text-earth-brown"><CheckCircle2 className="text-deep-red" /> TRADITIONAL METHODS</div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl text-earth-brown">Our Best Sellers</h2>
              <p className="text-earth-brown/60 max-w-lg">The most loved spices that define the taste of millions of Indian homes.</p>
            </div>
            <Link to="/products" className="text-deep-red font-bold flex items-center gap-2 hover:gap-4 transition-all">
              View All Products <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
                className="glass-card rounded-3xl overflow-hidden group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold uppercase text-deep-red">
                    {product.category}
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-sm text-earth-brown/60 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-2xl font-bold text-deep-red">₹{product.price}</span>
                    <button className="bg-earth-brown text-white p-2 rounded-full hover:bg-deep-red transition-colors">
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BhaktiVedanta */}
      <section className="py-24 bg-earth-brown text-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1000" alt="Pattern" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl">Why BhaktiVedanta?</h2>
                <p className="text-cream/60 text-lg">We don't just sell spices; we preserve a legacy of purity.</p>
              </div>

              <div className="space-y-8">
                {[
                  { title: "Cold Grinding Technology", desc: "Our spices are ground at low temperatures to retain natural essential oils and aroma." },
                  { title: "Direct Farm Sourcing", desc: "We work directly with farmers to ensure the highest quality and fair trade." },
                  { title: "Zero Adulteration", desc: "No fillers, no artificial colors, no preservatives. Just 100% pure spice." },
                  { title: "Ancient Wisdom", desc: "Blending methods inspired by traditional Ayurvedic principles for health and taste." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-saffron/20 rounded-2xl flex items-center justify-center shrink-0 text-saffron">
                      <CheckCircle2 />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold">{item.title}</h4>
                      <p className="text-cream/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-full border-2 border-gold/30 p-8 animate-spin-slow">
                <div className="w-full h-full rounded-full border-2 border-gold/10"></div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1599143338401-0085882c06ac?auto=format&fit=crop&q=80&w=800" 
                alt="Spice bowl" 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 object-cover rounded-full shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl text-earth-brown">From Farm to Your Plate</h2>
            <p className="text-earth-brown/60 max-w-2xl mx-auto">A transparent journey of quality, hygiene, and tradition.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gold/20 -translate-y-1/2 z-0"></div>
            {[
              { step: "01", title: "Sourcing", desc: "Handpicked from the best regional spice farms." },
              { step: "02", title: "Cleaning", desc: "Multi-stage cleaning to remove impurities." },
              { step: "03", title: "Processing", desc: "Traditional cold-grinding for maximum potency." },
              { step: "04", title: "Packaging", desc: "Aroma-lock packaging for long-lasting freshness." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 bg-white p-8 rounded-3xl border border-gold/10 space-y-4">
                <div className="w-12 h-12 bg-deep-red text-white rounded-full flex items-center justify-center mx-auto font-bold">{item.step}</div>
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-sm text-earth-brown/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-cream/50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl text-earth-brown">What Our Customers Say</h2>
            <div className="flex justify-center gap-1 text-gold">
              {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={20} />)}
            </div>
            <p className="text-earth-brown/60">Trusted by 50,000+ households across India.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Priya Sharma", role: "Home Chef", quote: "The aroma of BhaktiVedanta's Garam Masala is exactly like what my grandmother used to make. Truly authentic!" },
              { name: "Rajesh Iyer", role: "Restaurant Owner", quote: "We switched to their wholesale supply for our chain of restaurants. The consistency in quality is remarkable." },
              { name: "Anjali Gupta", role: "Health Enthusiast", quote: "Finally found turmeric that actually feels pure. The color and texture are so different from store-bought brands." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm space-y-6">
                <Quote className="text-saffron opacity-20" size={40} />
                <p className="text-earth-brown/80 italic leading-relaxed">"{item.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full"></div>
                  <div>
                    <h5 className="font-bold">{item.name}</h5>
                    <p className="text-xs text-earth-brown/50 uppercase tracking-widest">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto bg-deep-red rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=2000" alt="Spices" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif">Bring Authentic Taste Home</h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">Join the BhaktiVedanta family and elevate your everyday cooking with the purest spices in India.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/products" className="bg-white text-deep-red px-10 py-4 rounded-full font-bold hover:bg-cream transition-all">
                Shop Now
              </Link>
              <Link to="/wholesale" className="border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-deep-red transition-all">
                Bulk Orders
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Products = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Whole', 'Ground', 'Blended'];
  
  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl text-earth-brown">Our Spice Collection</h1>
          <p className="text-earth-brown/60 max-w-2xl mx-auto">Explore our range of pure, aromatic, and traditionally processed spices.</p>
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2 rounded-full font-medium transition-all",
                filter === cat ? "bg-deep-red text-white" : "bg-cream text-earth-brown hover:bg-gold/20"
              )}
            >
              {cat} Spices
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="group">
              <div className="glass-card rounded-3xl overflow-hidden">
                <div className="h-64 overflow-hidden relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold uppercase text-deep-red">{product.category}</div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-sm text-earth-brown/60 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-2xl font-bold text-deep-red">₹{product.price}</span>
                    <button className="bg-earth-brown text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-deep-red transition-colors">Add to Cart</button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { pathname } = useLocation();
  const id = pathname.split('/').pop();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) return <div className="pt-40 text-center">Product not found</div>;

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-6">
          <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden border-2 border-gold/10 hover:border-gold transition-colors cursor-pointer">
                <img src={product.image} alt="Thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-deep-red font-bold uppercase tracking-widest text-sm">{product.category} Spices</span>
            <h1 className="text-5xl text-earth-brown">{product.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex text-gold">
                {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <span className="text-earth-brown/40 text-sm">(120+ Reviews)</span>
            </div>
            <p className="text-3xl font-bold text-deep-red">₹{product.price}</p>
          </div>

          <div className="bg-saffron/10 p-4 rounded-2xl border border-saffron/20 flex items-center gap-3">
            <CheckCircle2 className="text-saffron" />
            <span className="font-bold text-earth-brown">{product.usp}</span>
          </div>

          <p className="text-earth-brown/70 text-lg leading-relaxed">{product.description}</p>

          <div className="space-y-4">
            <h4 className="font-bold text-xl">Key Benefits:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-2 text-earth-brown/70">
                  <ChevronRight size={16} className="text-deep-red" /> {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 pt-6">
            <div className="flex items-center border-2 border-gold/20 rounded-full px-4">
              <button className="p-2 text-xl">-</button>
              <span className="px-4 font-bold">1</span>
              <button className="p-2 text-xl">+</button>
            </div>
            <button className="btn-primary flex-1">Add to Cart</button>
          </div>

          <div className="pt-8 border-t border-gold/10 grid grid-cols-3 gap-4 text-center">
            <div className="space-y-1">
              <p className="text-xs uppercase text-earth-brown/40 font-bold">Ingredients</p>
              <p className="text-sm font-bold">{product.ingredients.join(', ')}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs uppercase text-earth-brown/40 font-bold">Shelf Life</p>
              <p className="text-sm font-bold">12 Months</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs uppercase text-earth-brown/40 font-bold">Origin</p>
              <p className="text-sm font-bold">India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Wholesale = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl text-earth-brown">Wholesale & Bulk Inquiries</h1>
            <p className="text-earth-brown/60 text-lg">Partner with BhaktiVedanta Spices for premium quality bulk supplies. We cater to retailers, restaurants, and export buyers globally.</p>
          </div>

          <div className="space-y-6">
            {[
              { title: "Custom Blending", desc: "We can create custom masala blends tailored to your restaurant's signature taste." },
              { title: "White Labeling", desc: "Premium packaging solutions for your own brand." },
              { title: "Global Export", desc: "Certified for international standards with seamless logistics." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 bg-deep-red text-white rounded-full flex items-center justify-center shrink-0"><CheckCircle2 size={20} /></div>
                <div>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-earth-brown/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-10 rounded-[3rem] border-gold/20">
          {!submitted ? (
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-earth-brown/60 uppercase">Full Name</label>
                  <input required type="text" className="w-full bg-cream/30 border border-gold/20 rounded-2xl px-4 py-3 focus:outline-none focus:border-deep-red" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-earth-brown/60 uppercase">Business Name</label>
                  <input required type="text" className="w-full bg-cream/30 border border-gold/20 rounded-2xl px-4 py-3 focus:outline-none focus:border-deep-red" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-earth-brown/60 uppercase">Email Address</label>
                <input required type="email" className="w-full bg-cream/30 border border-gold/20 rounded-2xl px-4 py-3 focus:outline-none focus:border-deep-red" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-earth-brown/60 uppercase">Expected Quantity (Monthly)</label>
                <select className="w-full bg-cream/30 border border-gold/20 rounded-2xl px-4 py-3 focus:outline-none focus:border-deep-red">
                  <option>10kg - 50kg</option>
                  <option>50kg - 200kg</option>
                  <option>200kg - 1 Ton</option>
                  <option>1 Ton +</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-earth-brown/60 uppercase">Message / Requirements</label>
                <textarea rows={4} className="w-full bg-cream/30 border border-gold/20 rounded-2xl px-4 py-3 focus:outline-none focus:border-deep-red"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">Send Inquiry</button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 space-y-6"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-3xl font-serif">Inquiry Received!</h3>
              <p className="text-earth-brown/60">Our wholesale team will get back to you within 24 hours with a custom quote.</p>
              <button onClick={() => setSubmitted(false)} className="text-deep-red font-bold">Send another inquiry</button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/wholesale" element={<Wholesale />} />
            <Route path="/about" element={<div className="pt-40 text-center text-4xl font-serif">Our Story - Coming Soon</div>} />
            <Route path="/recipes" element={<div className="pt-40 text-center text-4xl font-serif">Recipes - Coming Soon</div>} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <NewsletterPopup />
      </div>
    </Router>
  );
}
