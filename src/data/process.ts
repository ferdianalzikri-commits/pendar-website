export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const processData: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Discovery & Infrastructure Audit',
    description: 'We audit your current deployment patterns, codebase health, database normalization structures, and performance bottlenecks to identify architectural leverage points.',
    deliverables: ['Performance Bottleneck Report', 'Proposed System Topology', 'Resource Optimization Estimates']
  },
  {
    stepNumber: '02',
    title: 'Iterative Architecture Design',
    description: 'We design clear, low-coupling microservice maps, event models, schema definition structures, and deployment charts tailored to prevent vendor lock-in.',
    deliverables: ['API Contracts & Specifications', 'Data Schema Models', 'Security Compliance Mapping']
  },
  {
    stepNumber: '03',
    title: 'High-Performance Implementation',
    description: 'Our engineering team writes clean, strongly-typed code adhering to strict latency limits. We continuously integrate and test with synthetic loads.',
    deliverables: ['Production-ready Codebases', 'Infrastructure-as-Code Configuration', 'Automated Test Suites']
  },
  {
    stepNumber: '04',
    title: 'Controlled Rollout & Observability',
    description: 'We execute Canary deployments, configure real-time alert boundaries, optimize server parameters, and hand over the telemetry dashboard to your internal team.',
    deliverables: ['Observability Dashboards', 'Failover Runbooks', 'Technical Training Workshop']
  }
];
