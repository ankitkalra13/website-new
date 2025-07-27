import {Building2, FileText, CreditCard,Scale} from 'lucide-react';

export const services = [
  {
    icon: Building2,
    title: 'Business Setup',
    description:
      'Complete business formation services in Dubai and UAE free zones with expert guidance.',
    features: [
      'Free Zone Setup',
      'Mainland Setup',
      'License Processing',
      'Trade Name Registration',
    ],
    href: '/services#business-setup',
  },
  {
    icon: FileText,
    title: 'PRO Services',
    description:
      'Professional government relations services for all your official document needs.',
    features: [
      'Visa Processing',
      'Document Attestation',
      'Government Relations',
      'License Renewals',
    ],
    href: '/services#pro-services',
  },
  {
    icon: CreditCard,
    title: 'Banking Solutions',
    description:
      'Streamlined corporate banking setup with major UAE banks and financial institutions.',
    features: [
      'Account Opening',
      'Trade Finance',
      'Corporate Banking',
      'Investment Solutions',
    ],
    href: '/services#banking',
  },
  {
    icon: Scale,
    title: 'Legal Services',
    description:
      'Comprehensive legal support for business operations and compliance in the UAE.',
    features: [
      'Contract Drafting',
      'Legal Consultation',
      'Compliance',
      'Dispute Resolution',
    ],
    href: '/services#legal',
  },
];
