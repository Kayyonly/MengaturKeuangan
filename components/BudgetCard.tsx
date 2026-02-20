'use client';

interface Props {
  balance: number;
  expense: number;
  limit: number;
}

export default function BudgetCard({ balance, expense, limit }: Props) {
  // Hitung persentase penggunaan budget
  const percentage = Math.min((expense / limit) * 100, 100);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="mx-6 mt-4 bg-[#18181b] border border-[#27272a] p-6 rounded-3xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#d4f648] opacity-5 blur-3xl rounded-full"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="px-3 py-1 bg-[#27272a] rounded-full text-xs font-medium text-zinc-300 border border-zinc-700">
            Main Wallet
          </div>
          {/* Icon dompet kecil */}
          <div className="w-8 h-8 rounded-full bg-[#d4f648] flex items-center justify-center text-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm text-zinc-400 font-medium mb-1">Total Balance</p>
          {/* Tampilkan balance dari props, jangan hitung sendiri */}
          <h1 className="text-3xl font-bold text-white tracking-tight">
            {formatCurrency(balance)}
          </h1>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs font-medium">
            <span className="text-zinc-500">MONTHLY BUDGET</span>
            <span className="text-white">{Math.round(percentage)}%</span>
          </div>
          <div className="h-1.5 w-full bg-[#27272a] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#d4f648] rounded-full transition-all duration-500" 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}