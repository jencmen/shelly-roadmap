
export type Category = 'strength' | 'improvement' | 'value';

export interface SummaryCardData {
  id: string;
  category: Category;
  title: string;
  items: string[];
  icon: string;
}

export interface InsightItem {
  id: string;
  category: Category;
  title: string;
  description: string;
  icon: string;
}

export interface JourneyStation {
  id: string;
  topic: string; // The "Improvement" topic
  feedback: string; // "What the feedback says"
  action: string; // "Concrete action"
  metric: string; // "Success metric"
}

export interface ChartDataPoint {
  subject: string;
  A: number;
  fullMark: number;
  category: 'Mind' | 'Heart' | 'Legs'; // Mapping to the new clusters
}

export interface EmotionalTag {
  text: string;
  weight: number; // 1-3 for size variation
}