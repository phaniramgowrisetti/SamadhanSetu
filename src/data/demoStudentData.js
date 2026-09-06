/**
 * SamadhanSetu Student Portal Datasets
 * Mock data for student teams, proposals, active projects, and community impact.
 */

export const demoStudentTeams = [
  {
    id: 'TEAM-2026-001',
    name: 'AquaGuard Innovation Lab',
    university: 'Ranchi University - Department of Environmental Engineering',
    lead: 'Ananya Roy',
    members: [
      { name: 'Ananya Roy', role: 'Team Lead & IoT Lead', email: 'ananya.r@ranchiuniv.ac.in' },
      { name: 'Siddharth Verma', role: 'Embedded Systems Specialist', email: 'sid.v@ranchiuniv.ac.in' },
      { name: 'Pooja Soren', role: 'Community Liaison & Data Analyst', email: 'pooja.s@ranchiuniv.ac.in' }
    ],
    challengeId: 'CH-2026-001',
    challengeTitle: 'Rural Water Quality Monitoring & Rapid Contamination Detection',
    status: 'Active Team',
    createdAt: '2026-08-30'
  },
  {
    id: 'TEAM-2026-002',
    name: 'JalShakti Tech Collective',
    university: 'BIT Mesra - Department of Chemical Technology',
    lead: 'Vikramaditya Singh',
    members: [
      { name: 'Vikramaditya Singh', role: 'Team Lead', email: 'vikram@bitmesra.ac.in' },
      { name: 'Meera Kumari', role: 'Filtration Engineer', email: 'meera@bitmesra.ac.in' }
    ],
    challengeId: 'CH-2026-001',
    challengeTitle: 'Rural Water Quality Monitoring & Rapid Contamination Detection',
    status: 'Recruiting Members',
    createdAt: '2026-08-31'
  }
];

export const demoStudentProposals = [
  {
    id: 'PROP-2026-001',
    challengeId: 'CH-2026-001',
    challengeTitle: 'Rural Water Quality Monitoring & Rapid Contamination Detection',
    teamId: 'TEAM-2026-001',
    teamName: 'AquaGuard Innovation Lab',
    title: 'Low-Cost Solar Optical Sensor & Community SMS Alert Mesh',
    abstract: 'Deploying a 3-tier optical turbidity and spectrophotometric sensor kit attached to hand pumps powered by low-cost solar mini-cells, reporting telemetry over LoRaWAN to village water committees.',
    approach: 'Deploy solar-powered optical turbidity sensors connected to LoRaWAN gateway. Send immediate localized SMS alerts to village Jal Sahiya when fluoride or iron levels spike beyond 1.5 ppm.',
    expectedBudget: '₹45,000 per 5 village clusters',
    timelineMonths: 4,
    status: 'Selected for Incubation',
    submittedAt: '2026-08-30T14:20:00Z',
    mentorAssigned: 'Dr. Alok Kumar (HOD Environmental Sciences, Ranchi University)',
    milestones: [
      { title: 'Sensor Prototype Testing', status: 'Completed', dueDate: '2026-09-15' },
      { title: 'Pilot Deployment in Gumla Cluster', status: 'In Progress', dueDate: '2026-10-01' },
      { title: 'Community Feedback & Water Quality Report', status: 'Pending', dueDate: '2026-11-15' }
    ]
  }
];

export const demoStudentProjects = [
  {
    id: 'PROJ-2026-01',
    title: 'Solar Water Quality Mesh - Gumla District Pilot',
    challengeTitle: 'Rural Water Quality Monitoring & Rapid Contamination Detection',
    teamName: 'AquaGuard Innovation Lab',
    university: 'Ranchi University',
    mentor: 'Dr. Alok Kumar',
    status: 'Deployment Phase',
    progress: 75,
    startDate: '2026-09-01',
    targetDeployDate: '2026-11-15',
    locations: ['Gumla Sector 4', 'Latehar Block B', 'Simdega Central'],
    impactMetrics: {
      villagesCovered: 12,
      populationProtected: 4800,
      alertsTriggered: 14,
      waterSamplesValidated: 142
    }
  }
];
