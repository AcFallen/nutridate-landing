import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface AnimatedCardProps {
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

export default function AnimatedCard({ title, content, icon }: AnimatedCardProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <motion.div
        className="bg-card p-6 rounded-lg shadow-lg cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
      >
        {icon && <div className="mb-4">{icon}</div>}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="text-muted-foreground line-clamp-3">{content}</div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card p-6 rounded-lg shadow-xl max-w-md w-full m-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{title}</h3>
                <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
                  <X size={24} />
                </button>
              </div>
              {icon && <div className="mb-4">{icon}</div>}
              <div className="text-foreground">{content}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}