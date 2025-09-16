import { WalletCard } from "@/components/WalletCard";
import BnbLogo from "@/assets/bnb-logo.png";
import tronLogo from "@/assets/tron-logo.png";
import polygonLogo from "@/assets/polygon-logo.png";
import aptosLogo from "@/assets/aptos-logo.png";
import tonLogo from "@/assets/ton-logo.png";

const Index = () => {
  const wallets = [
    {
      name: "BNB Smart Chain",
      address: "0x0a3f49f13baf95995fbbf595d00aeac6b90d102d",
      logo: BnbLogo,
      network: "BSC",
    },
    {
      name: "TRON",
      address: "TQCWLHWeKjBwJTbzT1qV7uEwPDEeLs4nX5",
      logo: tronLogo,
      network: "TRC20",
    },
    {
      name: "Polygon",
      address: "0x0a3f49f13baf95995fbbf595d00aeac6b90d102d",
      logo: polygonLogo,
      network: "MATIC",
    },
    {
      name: "Aptos",
      address: "0xf4da301681f4c71a5cc8093bc71fd7da850e290a84aa842c5b030eeaca34e87a",
      logo: aptosLogo,
      network: "APT",
    },
    {
      name: "TON",
      address: "UQCPR_EVzT05t894XaRZ2bxpaKXwO5jIswn-MlIn92Iuf40B",
      logo: tonLogo,
      network: "TON",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-crypto-dark via-black to-crypto-dark relative">
      {/* Enhanced background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Main ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-neon-purple/20 via-neon-purple/10 to-transparent rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-neon-cyan/15 via-neon-cyan/8 to-transparent rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-electric-purple/10 via-electric-blue/5 to-transparent rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/6 left-1/6 w-2 h-2 bg-neon-cyan rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-2/3 left-3/4 w-1 h-1 bg-neon-pink rounded-full animate-ping opacity-40" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-1/6 w-1.5 h-1.5 bg-neon-purple rounded-full animate-ping opacity-50" style={{ animationDelay: '0.8s' }}></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(168,85,247,0.1)_1px,transparent_1px)] [background-size:50px_50px] opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            {/* Main title with refined contrast */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-crypto-text-secondary via-crypto-text-accent to-crypto-text-secondary bg-clip-text text-transparent mb-6 tracking-wider relative z-10">
              TKINGBEAST
            </h1>
            
            {/* Subtle title glow effect */}
            <div className="absolute inset-0 text-5xl md:text-7xl lg:text-8xl font-black text-neon-purple/20 blur-lg animate-glow-pulse">
              TKINGBEAST
            </div>
            
            {/* Refined underline */}
            <div className="relative h-1 w-full mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-crypto-text-muted via-neon-purple/60 to-crypto-text-muted rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-electric-purple/30 to-electric-blue/30 rounded-full opacity-40 blur-sm"></div>
            </div>
          </div>
          
          {/* Refined subtitle */}
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-crypto-glass/30 via-crypto-card/50 to-crypto-glass/30 backdrop-blur-xl rounded-2xl border border-crypto-border/40 p-6 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
              <p className="text-xl md:text-2xl font-bold text-crypto-text-secondary mb-2">
                ⚡ <span className="bg-gradient-to-r from-crypto-text-accent to-neon-purple/80 bg-clip-text text-transparent">USDT Payment Hub</span> ⚡
              </p>
              <div className="flex items-center justify-center space-x-4 text-lg md:text-xl">
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-neon-green/60 rounded-full animate-pulse"></div>
                  <span className="text-crypto-text-accent font-medium">Fast</span>
                </span>
                <span className="text-crypto-text-muted">•</span>
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-neon-purple/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span className="text-crypto-text-accent font-medium">Secure</span>
                </span>
                <span className="text-crypto-text-muted">•</span>
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-electric-blue/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span className="text-crypto-text-accent font-medium">Multi-Chain</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Wallet Cards Grid */}
        <div className="grid gap-6 md:gap-8">
          {wallets.map((wallet, index) => (
            <div
              key={wallet.name}
              className="animate-fade-in-up"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'both'
              }}
            >
              <WalletCard {...wallet} />
            </div>
          ))}
        </div>

        {/* Refined Footer */}
        <div className="text-center mt-16 py-12">
          <div className="relative inline-block">
            {/* Subtle glow effect */}
            <div className="absolute -inset-3 bg-gradient-to-r from-crypto-text-muted/20 via-neon-purple/20 to-crypto-text-muted/20 rounded-2xl opacity-40 blur-lg"></div>
            
            {/* Main footer card */}
            <div className="relative bg-gradient-to-br from-crypto-glass/40 via-crypto-card/60 to-crypto-glass/40 backdrop-blur-xl border border-crypto-border/30 rounded-xl px-8 py-4 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
              <p className="text-lg md:text-xl font-semibold text-crypto-text-secondary">
                📌 Tap • Copy • Share 🚀
              </p>
              <div className="mt-1 flex justify-center space-x-2">
                <div className="w-1 h-1 bg-crypto-text-muted rounded-full animate-pulse opacity-60"></div>
                <div className="w-1 h-1 bg-crypto-text-muted rounded-full animate-pulse opacity-60" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-1 h-1 bg-crypto-text-muted rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
