import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Copy, Check } from "lucide-react";
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

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      toast({
        title: "✅ Address Copied!",
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
    <div className="group relative">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-crypto-purple via-crypto-red to-crypto-purple-glow rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm"></div>
      
      {/* Main card */}
      <div className="relative bg-crypto-card border border-border rounded-2xl p-6 hover:border-crypto-purple/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-crypto-dark p-2 border border-crypto-purple/20">
              <img 
                src={logo} 
                alt={`${name} logo`}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-crypto-text">{name}</h3>
              <p className="text-sm text-crypto-text-muted">{network} • USDT</p>
            </div>
          </div>
        </div>

        {/* Address display */}
        <div className="mb-4">
          <div className="bg-crypto-dark rounded-lg p-3 border border-border">
            <p className="text-sm text-crypto-text-muted mb-1">Wallet Address</p>
            <p className="text-crypto-text font-mono text-sm break-all leading-relaxed">
              {address}
            </p>
          </div>
        </div>

        {/* Copy button */}
        <Button
          onClick={copyToClipboard}
          className="w-full bg-gradient-to-r from-crypto-purple to-crypto-purple-glow hover:from-crypto-purple-glow hover:to-crypto-purple text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-[1.02] active:scale-[0.98]"
          disabled={copied}
        >
          {copied ? (
            <>
              <Check className="w-5 h-5 mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-5 h-5 mr-2" />
              Copy Address
            </>
          )}
        </Button>
      </div>
    </div>
  );
};