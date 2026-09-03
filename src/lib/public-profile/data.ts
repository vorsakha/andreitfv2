import type { BilingualPublicProfile } from './schema';

export const publicProfile = {
  identity: {
    name: 'Andrei Ferreira',
    siteUrl: 'https://andreitf.co',
    email: 'andreitf.dev@gmail.com',
    location: {
      en: 'Brazil',
      'pt-BR': 'Brasil',
    },
    role: {
      en: 'Full-stack software engineer',
      'pt-BR': 'Engenheiro de software full-stack',
    },
    shortSummary: {
      en: 'I build full-stack software and AI agents.',
      'pt-BR': 'Desenvolvo software full-stack e agentes de IA.',
    },
  },
  links: [
    {
      id: 'github',
      label: { en: 'GitHub', 'pt-BR': 'GitHub' },
      href: 'https://github.com/vorsakha',
      external: true,
    },
    {
      id: 'linkedin',
      label: { en: 'LinkedIn', 'pt-BR': 'LinkedIn' },
      href: 'https://www.linkedin.com/in/andreitf/',
      external: true,
    },
    {
      id: 'email',
      label: { en: 'Email', 'pt-BR': 'Email' },
      href: 'mailto:andreitf.dev@gmail.com',
      external: false,
    },
    {
      id: 'cv',
      label: { en: 'CV', 'pt-BR': 'Currículo' },
      href: '/cv/CV_EN.pdf',
      external: false,
    },
  ],
  employment: {
    organization: 'Coderockr',
    role: {
      en: 'Full-stack software engineer',
      'pt-BR': 'Engenheiro de software full-stack',
    },
    period: { startYear: 2021, endYear: null, current: true },
  },
  work: [
    {
      id: 'geospatial-systems',
      title: {
        en: 'Geospatial systems',
        'pt-BR': 'Sistemas geoespaciais',
      },
      description: {
        en: 'Shareable map state, cloning, legends and accessible layer administration.',
        'pt-BR':
          'Estado de mapa compartilhável, clonagem, legendas e administração acessível de camadas.',
      },
      details: {
        en: [
          'Implemented shareable URL-persisted map state with validated restoration.',
          'Added permission-gated cloning without an extra API request, configurable legends and keyboard-accessible layer administration.',
        ],
        'pt-BR': [
          'Implementei estado de mapa compartilhável e persistido via URL, com restauração validada.',
          'Adicionei clonagem condicionada por permissões sem requisição adicional à API, legendas configuráveis e administração de camadas acessível por teclado.',
        ],
      },
      period: null,
    },
    {
      id: 'contract-management',
      title: {
        en: 'Contract management',
        'pt-BR': 'Gestão de contratos',
      },
      description: {
        en: 'Authorized document workflows across PHP, Doctrine and React.',
        'pt-BR': 'Fluxos autorizados de documentos com PHP, Doctrine e React.',
      },
      details: {
        en: [
          'Delivered authorized PDF comment attachments across a PHP and Doctrine backend and a React frontend.',
          'Covered role checks, upload validation, encrypted storage, transactional rollback, visibility rules and OpenAPI updates.',
        ],
        'pt-BR': [
          'Entreguei anexos PDF autorizados em comentários, do backend PHP e Doctrine ao frontend React.',
          'Cobri verificação de papéis, validação de uploads, armazenamento criptografado, rollback transacional, regras de visibilidade e atualizações do OpenAPI.',
        ],
      },
      period: null,
    },
    {
      id: 'orca-v2',
      title: { en: 'Orca V2', 'pt-BR': 'Orca V2' },
      description: {
        en: 'Frontend architecture and full-stack budgeting workflows.',
        'pt-BR':
          'Arquitetura frontend e fluxos full-stack para gestão de cotações.',
      },
      details: {
        en: [
          'Led the frontend architecture for a V2 rebuild using React, TypeScript, Vite, TanStack Query, Zod, Tailwind CSS, Radix and shadcn/ui.',
          'Expanded into NestJS and PostgreSQL work for budgeting, product-variant and brand-approval flows across the interface, API and relational model.',
        ],
        'pt-BR': [
          'Liderei a arquitetura frontend da reconstrução V2 com React, TypeScript, Vite, TanStack Query, Zod, Tailwind CSS, Radix e shadcn/ui.',
          'Assumi entregas com NestJS e PostgreSQL para fluxos de cotações, variantes de produtos e aprovação de marcas na interface, API e modelo relacional.',
        ],
      },
      period: { startYear: 2024, endYear: 2026, current: false },
    },
  ],
  project: {
    id: 'pi-native-subagents',
    name: 'Pi Native Subagents',
    url: 'https://github.com/vorsakha/pi-native-subagents',
    license: 'MIT',
    status: {
      en: 'Open source',
      'pt-BR': 'Código aberto',
    },
    period: { startYear: 2026, endYear: null, current: true },
    description: {
      en: 'Native background agents across Pi, Claude Code and Codex, with capability-aware routing, supervised workflows, replay and explicit access policies.',
      'pt-BR':
        'Agentes nativos em segundo plano no Pi, Claude Code e Codex, com roteamento por capacidades, fluxos supervisionados, replay e políticas explícitas de acesso.',
    },
    technicalLine: {
      en: 'TypeScript · 3 runtimes',
      'pt-BR': 'TypeScript · 3 runtimes',
    },
  },
  skills: [
    {
      id: 'languages',
      label: { en: 'Languages', 'pt-BR': 'Linguagens' },
      items: {
        en: ['TypeScript', 'JavaScript', 'SQL', 'PHP', 'HTML', 'CSS'],
        'pt-BR': ['TypeScript', 'JavaScript', 'SQL', 'PHP', 'HTML', 'CSS'],
      },
    },
    {
      id: 'frontend',
      label: { en: 'Frontend', 'pt-BR': 'Frontend' },
      items: {
        en: [
          'React',
          'Next.js',
          'React Native',
          'TanStack Query',
          'Zod',
          'Tailwind CSS',
          'Material UI',
          'Leaflet',
        ],
        'pt-BR': [
          'React',
          'Next.js',
          'React Native',
          'TanStack Query',
          'Zod',
          'Tailwind CSS',
          'Material UI',
          'Leaflet',
        ],
      },
    },
    {
      id: 'backend-data',
      label: { en: 'Backend and data', 'pt-BR': 'Backend e dados' },
      items: {
        en: [
          'Node.js',
          'NestJS',
          'Express',
          'REST APIs',
          'GraphQL',
          'PostgreSQL',
          'MongoDB',
          'Doctrine',
          'OpenAPI',
        ],
        'pt-BR': [
          'Node.js',
          'NestJS',
          'Express',
          'APIs REST',
          'GraphQL',
          'PostgreSQL',
          'MongoDB',
          'Doctrine',
          'OpenAPI',
        ],
      },
    },
    {
      id: 'quality-tooling',
      label: {
        en: 'Quality and tooling',
        'pt-BR': 'Qualidade e ferramentas',
      },
      items: {
        en: [
          'Jest',
          'React Testing Library',
          'Cypress',
          'Git',
          'Docker',
          'CI',
          'Model Context Protocol',
          'Multi-agent orchestration',
        ],
        'pt-BR': [
          'Jest',
          'React Testing Library',
          'Cypress',
          'Git',
          'Docker',
          'CI',
          'Model Context Protocol',
          'Orquestração multiagente',
        ],
      },
    },
  ],
  education: [
    {
      id: 'computer-science',
      qualification: {
        en: 'BSc in Computer Science',
        'pt-BR': 'Bacharelado em Ciência da Computação',
      },
      institution: 'Universidade Salvador',
      detail: { en: 'Brazil', 'pt-BR': 'Brasil' },
      year: 2018,
    },
    {
      id: 'english-certificate',
      qualification: {
        en: 'EF SET English Certificate',
        'pt-BR': 'Certificado EF SET de Inglês',
      },
      institution: 'EF SET',
      detail: {
        en: 'C2 Proficient, 75/100',
        'pt-BR': 'C2 Proficiente, 75/100',
      },
      year: 2022,
    },
  ],
  spokenLanguages: {
    en: ['Portuguese, native', 'English, C2'],
    'pt-BR': ['Português, nativo', 'Inglês, C2'],
  },
  notes: [
    {
      slug: 'complexity-should-earn-its-place',
      title: {
        en: 'Complexity should earn its place',
        'pt-BR': 'A complexidade precisa justificar seu lugar',
      },
      summary: {
        en: 'How I use threat models, explicit residual risk and reversibility to decide which safeguards belong.',
        'pt-BR':
          'Como uso modelos de ameaça, risco residual explícito e reversibilidade para decidir quais proteções fazem sentido.',
      },
      body: {
        en: [
          'I like simple systems, but simplicity is not the same as deleting checks. It means making every layer answer for itself. A validation path might still need strict URL parsing, timeouts, response-size limits and decoding limits. That does not automatically mean it needs a custom network-policy subsystem too.',
          'The useful question is not whether another safeguard is possible. It is which actor we are defending against, what that actor can already do and what failure would cost. An authenticated internal tool and a public endpoint open to anonymous input do not have the same threat model. Treating them as if they do produces code that is harder to understand without necessarily reducing meaningful risk.',
          'When I remove a layer, I want the residual risk named. That turns simplification into an engineering decision rather than optimism. The remaining controls should be easy to point at, and the trade-off should be reversible if the boundary changes.',
          'I want enough structure to make failure predictable, but no machinery that exists only to look thorough. I treat complexity as a recurring cost, paid every time the system changes. If a layer cannot name the risk it reduces, it does not belong.',
        ],
        'pt-BR': [
          'Gosto de sistemas simples, mas simplicidade não é o mesmo que remover verificações. Significa fazer com que cada camada justifique sua existência. Um fluxo de validação ainda pode precisar de análise rigorosa de URLs, timeouts, limites de resposta e limites de decodificação. Isso não significa automaticamente que ele também precisa de um subsistema próprio de políticas de rede.',
          'A pergunta útil não é se outra proteção seria possível. É contra qual agente estamos nos defendendo, o que ele já pode fazer e qual seria o custo de uma falha. Uma ferramenta interna autenticada e um endpoint público aberto a entradas anônimas não têm o mesmo modelo de ameaça. Tratá-los como se tivessem produz código mais difícil de entender sem necessariamente reduzir um risco relevante.',
          'Quando removo uma camada, quero que o risco residual seja declarado. Isso transforma simplificação em uma decisão de engenharia, não em otimismo. Os controles restantes devem ser fáceis de identificar, e a escolha deve ser reversível caso o limite do sistema mude.',
          'Quero estrutura suficiente para tornar as falhas previsíveis, mas nenhuma engrenagem que exista apenas para parecer rigorosa. Trato a complexidade como um custo recorrente, pago toda vez que o sistema muda. Se uma camada não consegue apontar o risco que reduz, ela não pertence ao sistema.',
        ],
      },
    },
    {
      slug: 'agents-should-ask-instead-of-guessing',
      title: {
        en: 'Agents should ask instead of guessing',
        'pt-BR': 'Agentes devem perguntar em vez de adivinhar',
      },
      summary: {
        en: 'A bounded question is often better than handing an agent more context.',
        'pt-BR':
          'Uma pergunta delimitada costuma ser melhor do que entregar mais contexto a um agente.',
      },
      body: {
        en: [
          'Agent workflows become unreliable when missing context is treated only as a prompting problem. Giving every child the full conversation feels convenient, but it adds noise, exposes unrelated detail and still does not guarantee that the important decision is understood.',
          'I prefer a narrower contract. A child receives a complete task, works independently and asks one precise question when it reaches a decision it cannot safely infer. The parent keeps the broader context and returns only the answer needed to continue.',
          'That question channel needs the same discipline as any other part of orchestration. It needs a clear sender and recipient, correlated requests, bounded payloads, one-shot answers, cancellation and a record that can survive replay. An agent waiting for an answer should release scarce execution capacity instead of blocking the rest of the workflow.',
          'Not every uncertainty needs a human. Questions can be routed to an authorized planner or reviewer with a retained session. The same boundaries apply. Agents should not see unrelated transcripts, enter recursive question loops or find a path around workflow policy.',
          'A good agent does not press on at any cost. It knows when another step would be a guess. A good orchestration system makes that moment visible.',
        ],
        'pt-BR': [
          'Fluxos de agentes se tornam pouco confiáveis quando a falta de contexto é tratada apenas como um problema de prompt. Entregar a conversa inteira a cada agente parece conveniente, mas adiciona ruído, expõe detalhes sem relação com a tarefa e ainda não garante que a decisão importante seja compreendida.',
          'Prefiro um contrato mais restrito. Um agente recebe uma tarefa completa, trabalha de forma independente e faz uma pergunta precisa quando chega a uma decisão que não pode inferir com segurança. O agente pai mantém o contexto mais amplo e devolve somente a resposta necessária para continuar.',
          'Esse canal de perguntas precisa da mesma disciplina que qualquer outra parte da orquestração. Ele precisa de remetente e destinatário claros, requisições correlacionadas, conteúdo limitado, respostas de uso único, cancelamento e um registro que sobreviva ao replay. Um agente aguardando resposta deve liberar a capacidade de execução em vez de bloquear o restante do fluxo.',
          'Nem toda incerteza precisa de uma pessoa. Perguntas podem ser encaminhadas a um planejador ou revisor autorizado com uma sessão mantida. Os mesmos limites se aplicam. Agentes não devem acessar conversas sem relação com a tarefa, entrar em ciclos recursivos de perguntas ou encontrar caminhos que contornem a política do fluxo.',
          'Um bom agente não continua a qualquer custo. Ele sabe quando o próximo passo seria um palpite. Um bom sistema de orquestração torna esse momento visível.',
        ],
      },
    },
  ],
  copy: {
    en: {
      eyebrow: 'FULL-STACK ENGINEER · AI-NATIVE SYSTEMS',
      headline: ['I build full-stack', 'software and AI agents.'],
      summary: [
        'TypeScript, React, Node.js and PostgreSQL.',
        'Currently building Pi Native Subagents.',
      ],
      navigation: { work: 'Work', notes: 'Notes', about: 'About', cv: 'CV' },
      sections: {
        building: 'Building',
        selectedWork: 'Selected work',
        notes: 'Notes',
      },
    },
    'pt-BR': {
      eyebrow: 'ENGENHEIRO DE SOFTWARE FULL-STACK · BRASIL',
      headline: ['Desenvolvo software full-stack', 'e agentes de IA.'],
      summary: [
        'TypeScript, React, Node.js e PostgreSQL.',
        'Atualmente desenvolvendo Pi Native Subagents.',
      ],
      navigation: {
        work: 'Trabalho',
        notes: 'Notas',
        about: 'Sobre',
        cv: 'Currículo',
      },
      sections: {
        building: 'Em desenvolvimento',
        selectedWork: 'Trabalho selecionado',
        notes: 'Notas',
      },
    },
  },
} as const satisfies BilingualPublicProfile;
