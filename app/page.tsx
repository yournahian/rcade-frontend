'use client';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useBalance } from 'wagmi';
import { CADE_TOKEN } from '@/lib/contracts';

export default function Home() {
  const { address, isConnected } = useAccount();
  const eth = useBalance({ address });
  const cade = useBalance({ address, token: CADE_TOKEN });

  return (
    <main className="p-6">
      <ConnectButton />
      {isConnected && (
        <div className="mt-6 space-y-2">
          <p><strong>Wallet:</strong> {address}</p>
          <p><strong>ETH:</strong> {eth.data?.formatted}</p>
          <p><strong>CADE:</strong> {cade.data?.formatted}</p>
        </div>
      )}
    </main>
  );
}
