import { LayoutDashboard, Map, TrendingUp, Settings, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Sidebar() {
  const menuItems = [
    { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', active: true },
    { icon: <Map className="w-5 h-5" />, label: 'Track Map' },
    { icon: <TrendingUp className="w-5 h-5" />, label: 'Analytics' },
    { icon: <Database className="w-5 h-5" />, label: 'Data' },
    { icon: <Settings className="w-5 h-5" />, label: 'Settings' },
  ];

  return (
    <aside className="w-16 bg-accent border-r border-border flex flex-col items-center py-4 space-y-4">
      {menuItems.map((item, index) => (
        <Button
          key={index}
          variant={item.active ? "default" : "ghost"}
          size="icon"
          className={item.active ? "bg-primary hover:bg-primary/90" : ""}
        >
          {item.icon}
        </Button>
      ))}
    </aside>
  );
}
