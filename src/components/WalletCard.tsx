import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Copy, Check, Zap } from "lucide-react";
import { useState } from "react";

interface WalletCardProps {
  name: string;
  address: string;
  logo: string;
  network: string;
}

export const WalletCard = ({ name, address, logo, network }: WalletCardProps) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      toast({
        title: "✨ Address Copied!",
        description: `${name} address copied to clipboard`,
        duration: 2000,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "❌ Copy Failed",
        description: "Please copy the address manually",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink rounded-3xl opacity-30 group-hover:opacity-60 transition-all duration-500 blur-md animate-glow-pulse"></div>
      
      {/* Electric border animation */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-electric-purple via-electric-blue to-electric-purple rounded-2xl opacity-40 group-hover:opacity-70 transition-all duration-300"></div>
      
      {/* Main glassmorphic card */}
      <div className="relative backdrop-blur-xl bg-gradient-to-br from-crypto-glass/80 via-crypto-card/90 to-crypto-glass/80 border border-crypto-border/50 rounded-2xl p-6 hover:border-neon-purple/60 transition-all duration-500 overflow-hidden group-hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]">
        
        {/* Glass shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-glass-shine"></div>
        
        {/* Header with enhanced styling */}
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center space-x-4">
            {/* Enhanced logo container */}
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-crypto-dark via-crypto-card to-crypto-glass p-3 border border-neon-purple/30 shadow-lg group-hover:shadow-purple group-hover:border-neon-purple/60 transition-all duration-300">
                <img 
                  src={logo} 
                  alt={`${name} logo`}
                  className="w-full h-full object-contain filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
                />
              </div>
              {/* LED indicator */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-neon-green rounded-full shadow-[0_0_10px_rgba(0,255,127,0.6)] animate-neon-flicker"></div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-crypto-text via-crypto-text-accent to-crypto-text bg-clip-text text-transparent mb-1 group-hover:from-neon-cyan group-hover:to-neon-purple transition-all duration-300">
                {name}
              </h3>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-electric-purple to-electric-blue rounded-full text-white shadow-lg">
                  {network}
                </span>
                <span className="text-crypto-text-muted text-sm">•</span>
                <span className="text-neon-cyan text-sm font-medium">USDT</span>
              </div>
            </div>
          </div>
          
          {/* Status indicator */}
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-neon-cyan animate-pulse" />
            <span className="text-xs text-crypto-text-muted">ACTIVE</span>
          </div>
        </div>

        {/* Enhanced address display */}
        <div className="mb-6 relative">
          <div className="relative bg-gradient-to-br from-crypto-dark/80 via-crypto-card/60 to-crypto-glass/40 backdrop-blur-sm rounded-xl p-4 border border-crypto-border/40 shadow-inner group-hover:border-neon-purple/40 transition-all duration-300">
            <div className="flex justify-between items-center mb-2">
              <p className="text-xs font-semibold text-crypto-text-accent uppercase tracking-wider">Wallet Address</p>
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse shadow-[0_0_8px_rgba(0,255,127,0.4)]"></div>
            </div>
            <p className="text-crypto-text font-mono text-sm break-all leading-relaxed tracking-wider selection:bg-neon-purple/30 group-hover:text-crypto-text-secondary transition-colors duration-300">
              {address}
            </p>
            
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-purple/5 via-transparent to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Enhanced copy button */}
        <Button
          onClick={copyToClipboard}
          className={`w-full relative overflow-hidden bg-gradient-to-r from-electric-purple via-electric-blue to-electric-purple text-white font-bold py-4 rounded-xl border border-electric-purple/50 shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-[1.02] active:scale-[0.98] group-hover:border-neon-purple select-none ${
            copied ? 'from-neon-green via-neon-cyan to-neon-green' : ''
          }`}
          disabled={copied}
          style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
        >
          {/* Button shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 animate-electric-slide"></div>
          
          <div className="relative z-10 flex items-center justify-center">
            {copied ? (
              <>
                <Check className="w-5 h-5 mr-2 animate-bounce" />
                <span className="font-extrabold">✅ COPIED!</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                <span className="font-extrabold tracking-wide">COPY ADDRESS</span>
              </>
            )}
          </div>
        </Button>
        
        {/* Floating particles effect */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-neon-cyan rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-neon-pink rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-neon-purple rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>
        )}
      </div>
    </div>
  );
};