export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  stats: { label: string; value: string };
  actionText: string;
}

export const productsData: ProductItem[] = [
  {
    id: 'pendar-core',
    name: 'Pendar Core',
    tagline: 'High-Throughput API Gateway',
    description: 'An enterprise-grade, low-latency API gateway and routing layer built to scale with distributed microservices structures, offering native rate-limiting, authentication, and request telemetry.',
    features: [
      'Sub-millisecond routing overhead',
      'Dynamic security policies & role bindings',
      'Declarative gRPC and GraphQL translation',
      'Distributed rate limiting via Redis cluster'
    ],
    techStack: ['Rust', 'WebAssembly', 'Go', 'Kubernetes'],
    stats: { label: 'Latency reduction', value: '45%' },
    actionText: 'View Technical Spec'
  },
  {
    id: 'pendar-flow',
    name: 'Pendar Flow',
    tagline: 'Event Streaming & Messaging Mesh',
    description: 'A resilient, stateful message pipeline designed for real-time transactional synchronization, out-of-order event resolution, and highly scalable data ingesting across cloud providers.',
    features: [
      'Guaranteed once-only delivery delivery model',
      'High-compression event storage engines',
      'Plug-and-play connector library for legacy enterprise databases',
      'Built-in real-time anomaly detection layers'
    ],
    techStack: ['C++', 'TypeScript', 'Apache Kafka', 'AWS'],
    stats: { label: 'Throughput', value: '1.2M req/s' },
    actionText: 'Request Demo'
  },
  {
    id: 'pendar-pulse',
    name: 'Pendar Pulse',
    tagline: 'Infrastructure Observability Platform',
    description: 'A unified logging, tracing, and metric collection dashboard powered by machine learning algorithms that diagnose performance bottlenecks before they affect clients.',
    features: [
      'Zero-agent runtime telemetry instrumentation',
      'AI-driven predictive anomaly notifications',
      'Automated container provisioning fallbacks',
      'Interactive trace mapping and audit trail analysis'
    ],
    techStack: ['Python', 'Rust', 'ClickHouse', 'React/Astro'],
    stats: { label: 'Mean time to resolution', value: '-80%' },
    actionText: 'Read documentation'
  }
];
