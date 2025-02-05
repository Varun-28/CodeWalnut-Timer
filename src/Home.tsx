import { useState } from 'react';
import { Plus, Clock } from 'lucide-react';
import { TimerList } from './components/TimerList';
import { Toaster } from 'sonner';
import { TimerModal } from './components/TimerModal';
import Button from './components/Button';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="hidden md:block">
        <Toaster position="top-right" />
      </div>
      <div className="block md:hidden">
        <Toaster position="bottom-center" />
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Timer</h1>
          </div>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
            icon={<Plus className="w-5 h-5" />}
          >
            Add Timer
          </Button>
        </div>

        <TimerList />

        <TimerModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          isEdit={false}
        />
      </div>
    </div>
  );
}

export default Home;