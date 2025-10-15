'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Tabs Component
const TabsContext = React.createContext(undefined);

function useTabs() {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error('useTabs must be used within a TabsProvider');
  }
  return context;
}

function Tabs({
  defaultValue,
  value,
  onValueChange,
  children,
  className,
  ...props
}) {
  const [activeValue, setActiveValue] = React.useState(defaultValue);
  const isControlled = value !== undefined;

  const handleValueChange = (val) => {
    if (!isControlled) setActiveValue(val);
    else onValueChange?.(val);
  };

  return (
    <TabsContext.Provider
      value={{
        activeValue: value ?? activeValue,
        handleValueChange,
      }}
    >
      <div
        data-slot="tabs"
        className={cn('flex flex-col gap-2', className)}
        {...props}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
}

function TabsList({
  children,
  className,
  ...props
}) {
  return (
    <div
      role="tablist"
      data-slot="tabs-list"
      className={cn(
        'inline-flex h-10 items-center justify-center rounded-lg bg-neutral-100 p-1 text-neutral-500',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function TabsTrigger({
  value,
  children,
  className,
  ...props
}) {
  const { activeValue, handleValueChange } = useTabs();
  const isActive = activeValue === value;

  return (
    <motion.button
      data-slot="tabs-trigger"
      role="tab"
      whileTap={{ scale: 0.95 }}
      onClick={() => handleValueChange(value)}
      data-state={isActive ? 'active' : 'inactive'}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        isActive
          ? 'bg-white text-neutral-950 shadow-sm'
          : 'text-neutral-500 hover:text-neutral-950',
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}

function TabsContent({
  children,
  value,
  className,
  ...props
}) {
  const { activeValue } = useTabs();
  const isActive = activeValue === value;

  if (!isActive) return null;

  return (
    <motion.div
      role="tabpanel"
      data-slot="tabs-content"
      className={cn('mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2', className)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  useTabs,
};
