export interface CoreValue {
  id: string;
  title: string;
  description: string;
  iconSymbol: string;
}

export const valuesData: CoreValue[] = [
  {
    id: 'performance',
    title: 'Performance First',
    description: 'We believe latency is a feature. We design and build systems that execute with speed, resource efficiency, and minimal overhead.',
    iconSymbol: '⚡'
  },
  {
    id: 'reliability',
    title: 'Uncompromising Stability',
    description: 'Our software is engineered with defensive architectural patterns, self-healing orchestration, and extensive observability.',
    iconSymbol: '🛡️'
  },
  {
    id: 'transparency',
    title: 'Radical Openness',
    description: 'We operate through direct, clear communication. Our codebases are documented, clean, and run without hidden black boxes.',
    iconSymbol: '👁️'
  },
  {
    id: 'innovation',
    title: 'Pragmatic Innovation',
    description: 'We adopt new technology only where it delivers genuine business leverage. We balance modern tools with battle-tested patterns.',
    iconSymbol: '💡'
  }
];
