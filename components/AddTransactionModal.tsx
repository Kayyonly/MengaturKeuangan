'use client';

import { useState } from 'react';
import { Transaction, TransactionType } from '@/types/finance';
import { X, ChevronDown } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (tx: Transaction) => void;
}

export default function AddTransactionModal({ isOpen, onClose, onSave }: Props) {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<TransactionType>('expense');
  const [category, setCategory] = useState('Makanan');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      amount: Number(amount),
      type,
      // Jika Income, kita set category jadi 'Income' atau biarkan default, 
      // tapi UI-nya kita sembunyikan.
      category: type === 'income' ? 'Income' : category, 
      description,
      date: new Date().toISOString(),
    });
    setAmount('');
    setDescription('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-md bg-[#09090b] border border-[#27272a] rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 duration-200">
        <div className="px-6 py-6 flex justify-between items-center border-b border-[#27272a]">
          <h2 className="text-lg font-semibold text-white">New Transaction</h2>
          <button onClick={onClose} className="p-2 bg-[#18181b] rounded-full text-zinc-400 hover:text-white border border-[#27272a]">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 px-6 py-6 flex flex-col gap-6">
          {/* Switcher */}
          <div className="bg-[#18181b] p-1 rounded-xl flex border border-[#27272a]">
            <button
              type="button"
              onClick={() => setType('expense')}
              className={`flex-1 py-2.5 rounded-lg text-xs font-medium transition-all ${
                type === 'expense' ? 'bg-[#27272a] text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              Expense
            </button>
            <button
              type="button"
              onClick={() => setType('income')}
              className={`flex-1 py-2.5 rounded-lg text-xs font-medium transition-all ${
                type === 'income' ? 'bg-[#d4f648] text-black shadow-sm' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              Income
            </button>
          </div>

          {/* Amount */}
          <div className="text-center">
            <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-2 block">Amount</label>
            <input 
              type="number" 
              required
              autoFocus
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-transparent text-4xl font-semibold text-white placeholder-zinc-800 outline-none text-center"
              placeholder="0"
            />
          </div>

          {/* Inputs */}
          <div className="space-y-4">
            
            {/* PERBAIKAN: Category hanya muncul jika type === 'expense' */}
            {type === 'expense' && (
              <div className="relative animate-in fade-in slide-in-from-top-2 duration-200">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1.5 block px-1">Category</label>
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-[#18181b] text-white rounded-xl p-4 outline-none appearance-none text-sm border border-[#27272a]"
                >
                  <option>Makanan</option>
                  <option>Sewa</option>
                  <option>Belanja</option>
                  <option>Transport</option>
                  <option>Tagihan</option>
                  <option>Hiburan</option>
                  <option>Lainnya</option>
                </select>
                <ChevronDown className="absolute right-4 bottom-4 text-zinc-500 pointer-events-none" size={16} />
              </div>
            )}

             <div>
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1.5 block px-1">Note</label>
                <input 
                  type="text" 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-[#18181b] text-white rounded-xl p-4 outline-none text-sm border border-[#27272a] placeholder-zinc-600"
                  placeholder={type === 'income' ? "Contoh: Gaji, Bonus, Hadiah..." : "Description..."}
                />
             </div>
          </div>

          <div className="pt-4">
            <button type="submit" className="w-full bg-[#d4f648] text-black font-semibold py-4 rounded-xl hover:bg-[#cbe63d] active:scale-[0.98] transition-all">
              Save Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}