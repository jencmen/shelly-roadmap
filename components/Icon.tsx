
import React from 'react';
import {
  Brain,
  Microscope,
  Table,
  Hammer,
  Eye,
  MessageCircleHeart,
  GitPullRequestArrow,
  Feather,
  BatteryMedium,
  Backpack,
  Coffee,
  HeartHandshake,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Sun,
  Sparkles,
  Scale,
  Users,
  Star,
  Clock,
  Zap,
  Wrench,
  Heart,
  Map,
  Activity,
  MessageCircle,
  Flag,
  Quote,
  LucideProps
} from 'lucide-react';

interface IconProps extends LucideProps {
  name: string;
  size?: number | string;
  className?: string;
}

const iconMap: Record<string, React.FC<LucideProps>> = {
  Brain,
  Microscope,
  Table,
  Hammer,
  Eye,
  MessageCircleHeart,
  GitPullRequestArrow,
  Feather,
  BatteryMedium,
  Backpack,
  Coffee,
  HeartHandshake,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Sun,
  Sparkles,
  Scale,
  Users,
  Star,
  Clock,
  Zap,
  Wrench,
  Heart,
  Map,
  Activity,
  MessageCircle,
  Flag,
  Quote
};

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
};