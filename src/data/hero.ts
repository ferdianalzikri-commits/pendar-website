export interface HeroData {
  badge1: string;
  badge2: string;
  headline: string;
  checklist: string[];
  primaryCtaText: string;
  primaryCtaUrl: string;
  secondaryCtaText: string;
  secondaryCtaUrl: string;
}

export const heroData: HeroData = {
  badge1: 'Custom Apps',
  badge2: 'Government Operations',
  headline: 'Turning Complex Challenges Into Digital Solutions',
  checklist: [
    'Reduce Complexity',
    'Ensure Confidentiality',
    'Increase Capability'
  ],
  primaryCtaText: 'Contact Our Solution',
  primaryCtaUrl: '#contact',
  secondaryCtaText: 'Watch video',
  secondaryCtaUrl: '#video-placeholder'
};
