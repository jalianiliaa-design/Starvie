
import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Tag, 
  Calculator, 
  Settings, 
  Instagram, 
  MessageCircle, 
  Send,
  ChevronRight,
  User,
  ShieldCheck,
  Zap,
  Star,
  Clock,
  Plus,
  Trash2,
  Copy,
  ExternalLink,
  ShoppingBag,
  Info
} from 'lucide-react';
import { ViewState, StoreConfig, AppProduct } from './types';
import { INITIAL_CONFIG, INITIAL_PRODUCTS } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ViewState>('home');
  const [config, setConfig] = useState<StoreConfig>(() => {
    const saved = localStorage.getItem('starvie_config');
    return saved ? JSON.parse(saved) : INITIAL_CONFIG;
  });
  const [products, setProducts] = useState<AppProduct[]>(() => {
    const saved = localStorage.getItem('starvie_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPass, setAdminPass] = useState('');

  useEffect(() => {
    localStorage.setItem('starvie_config', JSON.stringify(config));
  }, [config]);

  useEffect(() => {
    localStorage.setItem('starvie_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    if (activeTab === 'home') {
      setConfig(prev => ({ ...prev, visitorCount: prev.visitorCount + 1 }));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleAdminLogin = () => {
    if (adminPass === '12345@Cicak') { 
      setIsAdmin(true);
    } else {
      alert('Password Salah!');
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomeView config={config} setActiveTab={setActiveTab} />;
      case 'pricelist': return <PriceListView products={products} config={config} />;
      case 'refund': return <RefundCalculatorView />;
      case 'admin': return isAdmin ? (
        <AdminDashboard 
          config={config} 
          setConfig={setConfig} 
          products={products} 
          setProducts={setProducts} 
        />
      ) : (
        <AdminLogin 
          adminPass={adminPass} 
          setAdminPass={setAdminPass} 
          handleLogin={handleAdminLogin} 
        />
      );
      default: return <HomeView config={config} setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col selection:bg-zinc-900 selection:text-white font-sans">
      <header className="sticky top-0 z-50 glass-nav border-b border-zinc-100 px-6 py-4 flex items-center justify-between max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white">
            <ShoppingBag size={18} />
          </div>
          <h1 className="font-extrabold text-xl tracking-tighter">{config.storeName}</h1>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <DesktopNavLink active={activeTab === 'home'} onClick={() => setActiveTab('home')} label="Beranda" />
          <DesktopNavLink active={activeTab === 'pricelist'} onClick={() => setActiveTab('pricelist')} label="Pricelist" />
          <DesktopNavLink active={activeTab === 'refund'} onClick={() => setActiveTab('refund')} label="Refund" />
          <DesktopNavLink active={activeTab === 'admin'} onClick={() => setActiveTab('admin')} label="Admin" />
        </div>
        <div className="md:hidden text-[10px] font-bold uppercase tracking-widest text-zinc-400">
          Official Store
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-6 pb-32">
        {renderContent()}
      </main>

      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 glass-nav border border-zinc-100 shadow-2xl rounded-full px-4 py-3 flex items-center gap-1">
        <MobileNavButton active={activeTab === 'home'} onClick={() => setActiveTab('home')} icon={<Home size={20}/>} />
        <MobileNavButton active={activeTab === 'pricelist'} onClick={() => setActiveTab('pricelist')} icon={<Tag size={20}/>} />
        <MobileNavButton active={activeTab === 'refund'} onClick={() => setActiveTab('refund')} icon={<Calculator size={20}/>} />
        <MobileNavButton active={activeTab === 'admin'} onClick={() => setActiveTab('admin')} icon={<Settings size={20}/>} />
      </nav>
    </div>
  );
};

const DesktopNavLink: React.FC<{ active: boolean; onClick: () => void; label: string }> = ({ active, onClick, label }) => (
  <button onClick={onClick} className={`text-sm font-bold transition-all ${active ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-600'}`}>{label}</button>
);

const MobileNavButton: React.FC<{ active: boolean; onClick: () => void; icon: React.ReactNode }> = ({ active, onClick, icon }) => (
  <button onClick={onClick} className={`w-12 h-12 flex items-center justify-center rounded-full transition-all ${active ? 'bg-zinc-900 text-white shadow-lg' : 'text-zinc-400'}`}>{icon}</button>
);

const HomeView: React.FC<{ config: StoreConfig; setActiveTab: (v: ViewState) => void }> = ({ config, setActiveTab }) => {
  return (
    <div className="animate-fade-in space-y-8">
      {/* Hero Banner Section */}
      <div className="relative group">
        <div className="w-full h-48 md:h-64 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
          <img src={config.bannerPic} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" alt="Opening Banner" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
        
        {/* Profile Overlay */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-20 h-20 rounded-2xl border-4 border-white overflow-hidden shadow-2xl bg-white rotate-3 group-hover:rotate-0 transition-transform duration-500">
            <img src={config.profilePic} className="w-full h-full object-cover" alt="Profile" />
          </div>
        </div>
      </div>

      <div className="pt-10 text-center space-y-2">
        <h2 className="text-3xl font-extrabold tracking-tighter">{config.storeName}</h2>
        <p className="text-zinc-400 text-sm font-medium">Digital Solution for Premium Experience</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <HomeBadge icon={<Zap size={16} />} label="Fast Respon" />
        <HomeBadge icon={<ShieldCheck size={16} />} label="Garansi Full" />
        <HomeBadge icon={<Tag size={16} />} label="Harga Pelajar" />
        <HomeBadge icon={<Star size={16} />} label="Trusted 100%" />
      </div>

      <div className="bg-zinc-50 border border-zinc-100 rounded-[2rem] p-6 space-y-4">
        <h3 className="font-bold flex items-center gap-2 text-zinc-900">
          <Info size={18} /> Informasi Penting
        </h3>
        <div className="grid grid-cols-1 gap-3 text-xs font-medium text-zinc-500">
          <RuleItem text={`Zona Waktu Operasional: ${config.timezone}`} />
          <RuleItem text="Akun risk tidak menjamin kelancaran 100% permanen." />
          <RuleItem text="Order diluar jam kerja diproses di jam operasional berikutnya." />
          <RuleItem text="Pastikan baca deskripsi produk & rules garansi sebelum order." />
        </div>
      </div>

      <div className="space-y-4">
        <button 
          onClick={() => setActiveTab('pricelist')}
          className="w-full py-4 bg-zinc-900 text-white rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg flex items-center justify-center gap-2"
        >
          Mulai Belanja Sekarang <ChevronRight size={20} />
        </button>
        
        <div className="flex items-center gap-2">
          <SocialBtn href={`https://wa.me/${config.whatsapp}`} icon={<MessageCircle size={20}/>} label="WhatsApp" />
          <SocialBtn href={`https://instagram.com/${config.instagram.replace('@','')}`} icon={<Instagram size={20}/>} label="Instagram" />
        </div>
      </div>

      <div className="text-center pt-8 border-t border-zinc-50">
        <p className="text-[10px] text-zinc-300 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
          <User size={10} /> Active Visitors: {config.visitorCount.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

const RuleItem = ({ text }: { text: string }) => (
  <div className="flex gap-2 items-start">
    <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-1.5 shrink-0" />
    <span>{text}</span>
  </div>
);

const HomeBadge = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <div className="bg-white border border-zinc-100 rounded-2xl p-4 flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
    <div className="text-zinc-900 p-2 bg-zinc-50 rounded-xl">{icon}</div>
    <span className="text-[9px] font-bold uppercase tracking-tighter text-zinc-500">{label}</span>
  </div>
);

const SocialBtn = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a href={href} target="_blank" className="flex-1 py-3 border border-zinc-200 rounded-2xl flex items-center justify-center gap-2 text-zinc-500 hover:text-zinc-900 hover:border-zinc-900 hover:bg-zinc-50 transition-all font-bold text-xs">
    {icon} {label}
  </a>
);

const PriceListView: React.FC<{ products: AppProduct[], config: StoreConfig }> = ({ products, config }) => {
  const [search, setSearch] = useState('');
  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="animate-fade-in space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-extrabold tracking-tighter">Daftar Harga</h2>
        <p className="text-zinc-400 text-sm">Update {new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}</p>
      </div>

      <div className="relative group">
        <input 
          type="text" 
          placeholder="Cari aplikasi..." 
          className="w-full pl-12 pr-4 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all font-medium text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-zinc-900 transition-colors" size={20} />
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filtered.length > 0 ? filtered.map(product => (
          <div key={product.id} className="group bg-white rounded-[2rem] border border-zinc-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="relative h-40">
              <img src={product.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute top-4 left-4">
                <span className="bg-black/80 backdrop-blur-md text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{product.category}</span>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <h3 className="text-xl font-extrabold tracking-tight">{product.name}</h3>
              <div className="space-y-6">
                {product.options.map((opt, idx) => (
                  <div key={idx} className="space-y-3">
                    <label className="text-[10px] font-extrabold text-zinc-300 uppercase tracking-widest border-b border-zinc-100 pb-1 inline-block">{opt.label}</label>
                    <div className="grid grid-cols-2 gap-2">
                      {opt.prices.map((p, pIdx) => (
                        <a 
                          key={pIdx}
                          href={`https://wa.me/${config.whatsapp}?text=Halo kak, aku mau pesan aplikasi ${product.name}`}
                          target="_blank"
                          className="flex flex-col p-4 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-zinc-900 hover:text-white transition-all text-left group/price"
                        >
                          <span className="text-[10px] font-bold opacity-60 uppercase">{p.duration}</span>
                          <span className="text-sm font-extrabold">Rp {(p.price/1000).toFixed(0)}K</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )) : (
          <div className="text-center py-20 text-zinc-400 italic font-medium">Ops, produk belum tersedia...</div>
        )}
      </div>
    </div>
  );
};

const RefundCalculatorView: React.FC = () => {
  const [appName, setAppName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [purchasePrice, setPurchasePrice] = useState<number>(0);
  const [purchaseDate, setPurchaseDate] = useState('');
  const [totalDuration, setTotalDuration] = useState<number>(30);
  const [paymentInfo, setPaymentInfo] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const calculateRefund = () => {
    if (!purchasePrice || !purchaseDate) return;
    const today = new Date();
    const orderDate = new Date(purchaseDate);
    const diffTime = Math.abs(today.getTime() - orderDate.getTime());
    const usedDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const remainingDays = Math.max(0, totalDuration - usedDays);
    const adminFee = 1000;
    const dailyPrice = purchasePrice / totalDuration;
    const refundAmount = Math.max(0, Math.floor((dailyPrice * remainingDays) - adminFee));

    const textResult = `Halo, terlampir rincian refund dari pembelian ${appName} Starvie.liy Store.

Username: ${username || '-'}
Email akun: ${email || '-'}
Harga beli: Rp ${purchasePrice.toLocaleString()}
Tanggal order: ${purchaseDate}

📋 DETAIL REFUND PEMBELI
----------------------------
💰 Harga Beli: Rp ${purchasePrice.toLocaleString()}
⏳ Sisa Durasi: ${remainingDays} Hari
📊 Fee admin: 1.000 IDR
----------------------------
✅ DANA DITERIMA: Rp ${refundAmount.toLocaleString()}

Metode refund: ${paymentInfo || '-'}`;
    setResult(textResult);
  };

  return (
    <div className="animate-fade-in space-y-6">
      <h2 className="text-3xl font-extrabold tracking-tighter">Refund Calculator</h2>
      <div className="bg-white border border-zinc-100 rounded-[2rem] p-8 shadow-sm space-y-4">
        <InputGroup label="Nama Aplikasi" value={appName} onChange={setAppName} placeholder="Netflix / Spotify / etc" />
        <div className="grid grid-cols-2 gap-4">
          <InputGroup label="Buyer Username" value={username} onChange={setUsername} placeholder="Username" />
          <InputGroup label="Account Email" value={email} onChange={setEmail} placeholder="Email" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <InputGroup label="Harga Beli (Rp)" type="number" value={purchasePrice} onChange={(val) => setPurchasePrice(Number(val))} />
          <InputGroup label="Tanggal Order" type="date" value={purchaseDate} onChange={setPurchaseDate} />
        </div>
        <InputGroup label="Total Durasi (Hari)" type="number" value={totalDuration} onChange={(val) => setTotalDuration(Number(val))} />
        <InputGroup label="Tujuan Transfer" value={paymentInfo} onChange={setPaymentInfo} placeholder="DANA - 08xxx" />
        <button onClick={calculateRefund} className="w-full py-4 bg-zinc-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all shadow-lg">
          <Calculator size={18} /> Hitung Nominal
        </button>
      </div>

      {result && (
        <div className="bg-zinc-50 p-6 rounded-[2rem] border-2 border-dashed border-zinc-200 space-y-4 animate-fade-in">
           <div className="flex justify-between items-center px-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Copy Format</h4>
              <button onClick={() => { navigator.clipboard.writeText(result); alert('Disalin ke clipboard!'); }} className="flex items-center gap-1 text-[10px] font-bold bg-white px-4 py-2 rounded-xl shadow-sm border hover:bg-zinc-900 hover:text-white transition-all"><Copy size={12} /> Salin Teks</button>
           </div>
           <pre className="text-[11px] font-medium leading-relaxed whitespace-pre-wrap font-mono bg-white p-5 rounded-2xl border border-zinc-100 shadow-inner">{result}</pre>
        </div>
      )}
    </div>
  );
};

const InputGroup: React.FC<{ label: string; value: string | number; onChange: (v: string) => void; placeholder?: string; type?: string }> = ({ label, value, onChange, placeholder, type = 'text' }) => (
  <div className="space-y-1.5">
    <label className="text-[9px] font-extrabold text-zinc-400 uppercase tracking-widest pl-1">{label}</label>
    <input type={type} className="w-full px-4 py-3.5 rounded-2xl bg-zinc-50 border border-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all text-sm font-medium" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
  </div>
);

const AdminLogin: React.FC<{ adminPass: string; setAdminPass: (v: string) => void; handleLogin: () => void }> = ({ adminPass, setAdminPass, handleLogin }) => (
  <div className="min-h-[50vh] flex flex-col items-center justify-center space-y-8 animate-fade-in">
    <div className="w-20 h-20 bg-zinc-900 rounded-[2rem] flex items-center justify-center text-white shadow-2xl rotate-3">
       <Settings size={36} />
    </div>
    <div className="text-center space-y-1">
       <h2 className="text-3xl font-extrabold tracking-tighter">Admin Access</h2>
       <p className="text-zinc-400 text-sm font-medium">Verify credentials to continue.</p>
    </div>
    <div className="w-full max-w-xs space-y-4">
      <input type="password" className="w-full px-5 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-900 text-center text-xl font-bold tracking-widest" placeholder="••••••••" value={adminPass} onChange={(e) => setAdminPass(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleLogin()} />
      <button onClick={handleLogin} className="w-full py-4 bg-zinc-900 text-white rounded-2xl font-bold hover:opacity-90 active:scale-95 transition-all shadow-lg">Authenticate</button>
    </div>
  </div>
);

const AdminDashboard: React.FC<{ config: StoreConfig; setConfig: React.Dispatch<React.SetStateAction<StoreConfig>>; products: AppProduct[]; setProducts: React.Dispatch<React.SetStateAction<AppProduct[]>> }> = ({ config, setConfig, products, setProducts }) => {
  const [activeSubTab, setActiveSubTab] = useState<'profile' | 'products'>('profile');
  const updateConfig = (key: keyof StoreConfig, value: string) => { setConfig(prev => ({ ...prev, [key]: value })); };
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, key: 'profilePic' | 'bannerPic') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => { setConfig(prev => ({ ...prev, [key]: reader.result as string })); };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="animate-fade-in space-y-8 pb-10">
       <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold tracking-tighter">Dashboard</h2>
          <div className="flex bg-zinc-100 p-1.5 rounded-2xl">
             <button onClick={() => setActiveSubTab('profile')} className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all ${activeSubTab === 'profile' ? 'bg-white shadow-sm text-zinc-900' : 'text-zinc-400'}`}>Profile</button>
             <button onClick={() => setActiveSubTab('products')} className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all ${activeSubTab === 'products' ? 'bg-white shadow-sm text-zinc-900' : 'text-zinc-400'}`}>Products</button>
          </div>
       </div>

       {activeSubTab === 'profile' ? (
         <div className="space-y-6">
            <div className="bg-white border border-zinc-100 p-8 rounded-[2rem] space-y-6 shadow-sm">
               <h3 className="font-bold flex items-center gap-2 text-zinc-900"><ExternalLink size={18}/> Global Config</h3>
               <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-widest pl-1">Foto Profil</label>
                    <div className="relative group w-24 h-24">
                       <img src={config.profilePic} className="w-full h-full rounded-2xl object-cover border-2 border-zinc-50 shadow-sm" />
                       <label className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer rounded-2xl transition-all text-white"><Plus/><input type="file" className="hidden" onChange={(e) => handleFileUpload(e, 'profilePic')}/></label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-widest pl-1">Banner Utama</label>
                    <div className="relative group w-full h-24">
                       <img src={config.bannerPic} className="w-full h-full rounded-2xl object-cover border-2 border-zinc-50 shadow-sm" />
                       <label className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer rounded-2xl transition-all text-white"><Plus/><input type="file" className="hidden" onChange={(e) => handleFileUpload(e, 'bannerPic')}/></label>
                    </div>
                  </div>
               </div>
               <InputGroup label="Store Name" value={config.storeName} onChange={(v) => updateConfig('storeName', v)} />
               <InputGroup label="WhatsApp Number" value={config.whatsapp} onChange={(v) => updateConfig('whatsapp', v)} />
               <InputGroup label="Instagram Username" value={config.instagram} onChange={(v) => updateConfig('instagram', v)} />
               <InputGroup label="Telegram Username" value={config.telegram} onChange={(v) => updateConfig('telegram', v)} />
               <InputGroup label="Timezone" value={config.timezone} onChange={(v) => updateConfig('timezone', v)} />
            </div>
         </div>
       ) : (
         <div className="space-y-6">
            <button onClick={() => setProducts(prev => [{ id: Date.now().toString(), name: 'New Item', category: 'Streaming', image: 'https://picsum.photos/400/300', options: [{ label: '1 Month', prices: [{ duration: '1 bln', price: 10000 }] }] }, ...prev])} className="w-full py-4 bg-zinc-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg"><Plus size={18} /> Add New Product</button>
            <div className="space-y-4">
               {products.map((p, idx) => (
                 <AdminProductItem 
                   key={p.id} 
                   product={p} 
                   onDelete={() => setProducts(prev => prev.filter(item => item.id !== p.id))} 
                   onChange={(updated) => { const newProds = [...products]; newProds[idx] = updated; setProducts(newProds); }}
                 />
               ))}
            </div>
         </div>
       )}
    </div>
  );
};

const AdminProductItem: React.FC<{ product: AppProduct; onDelete: () => void; onChange: (p: AppProduct) => void }> = ({ product, onDelete, onChange }) => {
  const [expanded, setExpanded] = useState(false);
  const updateField = (key: keyof AppProduct, value: any) => { onChange({ ...product, [key]: value }); };
  return (
    <div className="bg-white border border-zinc-100 rounded-[2rem] overflow-hidden shadow-sm">
      <div className="p-5 flex items-center justify-between cursor-pointer" onClick={() => setExpanded(!expanded)}>
         <div className="flex items-center gap-4">
            <img src={product.image} className="w-14 h-14 rounded-2xl object-cover border shadow-inner" />
            <div>
              <h4 className="font-bold text-zinc-900">{product.name}</h4>
              <p className="text-[10px] font-extrabold text-zinc-300 uppercase tracking-widest">{product.category}</p>
            </div>
         </div>
         <div className="flex items-center gap-2">
            <button onClick={(e) => { e.stopPropagation(); if(confirm('Hapus produk?')) onDelete(); }} className="p-3 text-zinc-300 hover:text-red-500 transition-colors"><Trash2 size={20}/></button>
            <ChevronRight className={`transition-transform duration-300 ${expanded ? 'rotate-90' : ''}`} size={20} />
         </div>
      </div>
      {expanded && (
        <div className="p-8 border-t border-zinc-50 space-y-6 bg-zinc-50/20 animate-fade-in">
           <div className="grid grid-cols-2 gap-4">
             <InputGroup label="Product Name" value={product.name} onChange={(v) => updateField('name', v)} />
             <InputGroup label="Category" value={product.category} onChange={(v) => updateField('category', v)} />
           </div>
           <InputGroup label="Image Link" value={product.image || ''} onChange={(v) => updateField('image', v)} />
           <div className="space-y-4">
             <div className="flex items-center justify-between px-1">
                <span className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-widest">Pricing Strategy</span>
                <button onClick={() => updateField('options', [...product.options, { label: 'New Tier', prices: [{ duration: '1 month', price: 0 }] }])} className="text-[10px] font-bold text-zinc-900 border-b-2 border-zinc-900 pb-0.5">+ Add Option</button>
             </div>
             {product.options.map((opt, oIdx) => (
               <div key={oIdx} className="bg-white p-6 rounded-[1.5rem] border border-zinc-100 space-y-4 shadow-sm">
                  <div className="flex items-end gap-3">
                    <div className="flex-1"><InputGroup label="Tier Label" value={opt.label} onChange={(v) => { const n = [...product.options]; n[oIdx].label = v; updateField('options', n); }} /></div>
                    <button onClick={() => { const n = product.options.filter((_, i) => i !== oIdx); updateField('options', n); }} className="p-3.5 bg-zinc-50 rounded-2xl text-red-400 hover:bg-red-50 transition-colors"><Trash2 size={18}/></button>
                  </div>
                  <div className="space-y-3">
                    {opt.prices.map((pr, pIdx) => (
                      <div key={pIdx} className="grid grid-cols-5 gap-3">
                         <input className="col-span-2 text-xs p-3 border rounded-xl" placeholder="Duration" value={pr.duration} onChange={(e) => { const n = [...product.options]; n[oIdx].prices[pIdx].duration = e.target.value; updateField('options', n); }} />
                         <input className="col-span-2 text-xs p-3 border rounded-xl" placeholder="Price" type="number" value={pr.price} onChange={(e) => { const n = [...product.options]; n[oIdx].prices[pIdx].price = Number(e.target.value); updateField('options', n); }} />
                         <button onClick={() => { const n = [...product.options]; n[oIdx].prices = n[oIdx].prices.filter((_, i) => i !== pIdx); updateField('options', n); }} className="p-3 text-zinc-200 hover:text-red-400 transition-colors"><Trash2 size={16}/></button>
                      </div>
                    ))}
                    <button onClick={() => { const n = [...product.options]; n[oIdx].prices.push({ duration: '1 month', price: 0 }); updateField('options', n); }} className="text-[10px] font-bold text-zinc-300 hover:text-zinc-900 transition-colors">+ Add Price Row</button>
                  </div>
               </div>
             ))}
           </div>
        </div>
      )}
    </div>
  );
};

export default App;
