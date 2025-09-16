import { WalletCard } from "@/components/WalletCard";
import bnbLogo from "@/assets/bnb-logo.png";
import tronLogo from "@/assets/tron-logo.png";
import polygonLogo from "@/assets/polygon-logo.png";
import aptosLogo from "@/assets/aptos-logo.png";
import tonLogo from "@/assets/ton-logo.png";

const Index = () => {
  const wallets = [
    {
      name: "BNB Smart Chain",
      address: "0x0a3f49f13baf95995fbbf595d00aeac6b90d102d",
      logo: bnbLogo,
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
    <div className="min-h-screen bg-crypto-dark">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-crypto-purple/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-crypto-red/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-crypto-purple via-crypto-red to-crypto-purple-glow bg-clip-text text-transparent mb-4 animate-pulse">
              TKINGBEAST
            </h1>
            <div className="h-1 w-full bg-gradient-to-r from-crypto-purple via-crypto-red to-crypto-purple-glow rounded-full"></div>
          </div>
          <p className="text-crypto-text-muted text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            🚀 <strong className="text-crypto-text">USDT Payment Hub</strong> 🚀<br />
            <span className="text-crypto-purple">Fast • Secure • Multi-Chain</span>
          </p>
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

        {/* Footer */}
        <div className="text-center mt-12 py-8">
          <div className="inline-block bg-crypto-card border border-crypto-purple/30 rounded-2xl px-8 py-4">
            <p className="text-crypto-text text-lg font-semibold">
              📌 Tap • Copy • Share 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
