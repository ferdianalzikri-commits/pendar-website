export interface Client {
  id: string;
  name: string;
  logoPlaceholder: string;
}

export const clients: Client[] = [
  { id: '1', name: 'Alpha Solutions', logoPlaceholder: 'α' },
  { id: '2', name: 'Beta Tech', logoPlaceholder: 'β' },
  { id: '3', name: 'Gamma Global', logoPlaceholder: 'γ' },
  { id: '4', name: 'Delta Dynamics', logoPlaceholder: 'δ' },
  { id: '5', name: 'Epsilon Enterprises', logoPlaceholder: 'ε' },
  { id: '6', name: 'Zeta Systems', logoPlaceholder: 'ζ' }
];
