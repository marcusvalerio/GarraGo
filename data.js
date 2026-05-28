export const user = {
  name: 'Marcus',
  initials: 'MV',
  crews: ['Carioca Crew', 'Vila Atletas'],
  streak: 12,
  weight: 64.0,
  startWeight: 68.4,
  workoutsThisYear: 47,
}

export const streakDays = [
  { l: 'S', on: true }, { l: 'T', on: true }, { l: 'Q', on: true },
  { l: 'Q', on: true }, { l: 'S', on: true }, { l: 'S', on: false },
  { l: 'D', on: false },
]

export const crewEvents = [
  { id: '1', crew: 'Carioca Crew', event: 'Long Run — Aterro',  date: 'Sáb', day: '31', time: '06:00', confirmed: true,  spots: 23, distance: '12 km' },
  { id: '2', crew: 'Vila Atletas', event: 'Treino de Pista',    date: 'Dom', day: '01', time: '07:30', confirmed: false, spots: 11, distance: '5 km'  },
  { id: '3', crew: 'Carioca Crew', event: 'Recovery Run',       date: 'Ter', day: '03', time: '06:30', confirmed: false, spots: 8,  distance: '6 km'  },
]

export const myWorkouts = [
  { id: '1', type: 'Musculação', title: 'Costas & Bíceps', date: 'Hoje',  duration: '1h 05min', volume: '15.400 kg', rated: false },
  { id: '2', type: 'Corrida',    title: 'Easy Run',        date: 'Ontem', duration: '38 min',   distance: '5.8 km', pace: "6'33\"/km", rated: true, rating: 'boa' },
  { id: '3', type: 'Musculação', title: 'Peito & Tríceps', date: 'Seg',   duration: '55 min',   volume: '13.800 kg', rated: true, rating: 'pesada' },
]

export const fichas = [
  {
    id: 'A', name: 'Treino A', focus: 'Peito & Tríceps',
    exercises: [
      { id: '1', name: 'Supino Reto',        sets: [{ reps: 12, kg: 60 }, { reps: 10, kg: 65 }, { reps: 8,  kg: 70 }] },
      { id: '2', name: 'Crucifixo Inclinado',sets: [{ reps: 12, kg: 14 }, { reps: 12, kg: 14 }, { reps: 10, kg: 16 }] },
      { id: '3', name: 'Tríceps Corda',      sets: [{ reps: 15, kg: 25 }, { reps: 12, kg: 30 }, { reps: 10, kg: 32 }] },
      { id: '4', name: 'Tríceps Testa',      sets: [{ reps: 12, kg: 20 }, { reps: 10, kg: 22 }, { reps: 10, kg: 22 }] },
    ],
  },
  {
    id: 'B', name: 'Treino B', focus: 'Costas & Bíceps',
    exercises: [
      { id: '5', name: 'Puxada Frontal', sets: [{ reps: 12, kg: 55 }, { reps: 10, kg: 60 }, { reps: 8,  kg: 65 }] },
      { id: '6', name: 'Remada Baixa',   sets: [{ reps: 12, kg: 50 }, { reps: 10, kg: 55 }, { reps: 10, kg: 55 }] },
      { id: '7', name: 'Rosca Direta',   sets: [{ reps: 12, kg: 30 }, { reps: 10, kg: 35 }, { reps: 8,  kg: 35 }] },
      { id: '8', name: 'Rosca Martelo',  sets: [{ reps: 12, kg: 14 }, { reps: 12, kg: 14 }, { reps: 10, kg: 16 }] },
    ],
  },
  {
    id: 'C', name: 'Treino C', focus: 'Pernas & Ombro',
    exercises: [
      { id: '9',  name: 'Agachamento Livre', sets: [{ reps: 10, kg: 80  }, { reps: 8,  kg: 90  }, { reps: 6,  kg: 100 }] },
      { id: '10', name: 'Leg Press 45°',     sets: [{ reps: 12, kg: 120 }, { reps: 10, kg: 140 }, { reps: 10, kg: 140 }] },
      { id: '11', name: 'Desenvolvimento',   sets: [{ reps: 12, kg: 40  }, { reps: 10, kg: 45  }, { reps: 8,  kg: 50  }] },
      { id: '12', name: 'Elevação Lateral',  sets: [{ reps: 15, kg: 10  }, { reps: 12, kg: 12  }, { reps: 12, kg: 12  }] },
    ],
  },
]

export const weightHistory = [68.4,67.8,67.2,66.9,66.5,66.1,65.8,65.4,65.0,64.7,64.3,64.0]

export const prs = [
  { exercise: 'Supino Reto',    value: '70 kg',  date: 'Mai 2025' },
  { exercise: 'Agachamento',    value: '100 kg', date: 'Abr 2025' },
  { exercise: 'Puxada Frontal', value: '65 kg',  date: 'Mai 2025' },
  { exercise: 'Corrida 5k',     value: '24:12',  date: 'Mar 2025' },
]

export const favoriteCrews = [
  { id: 'c1', name: 'Carioca Crew', members: 142, nextRun: 'Sáb 06:00', tag: 'Corrida urbana' },
  { id: 'c2', name: 'Vila Atletas', members: 67,  nextRun: 'Dom 07:30', tag: 'Pista & Speed'  },
]

export const exploreCrews = [
  { id: 'e1', name: 'Centro Runners', members: 89, nextRun: 'Sáb 07:00', distance: '8 km',  tag: '🏛️ Histórica', desc: 'Cinelândia, Lapa, Santa Teresa', hot: true  },
  { id: 'e2', name: 'Lapa Night Run', members: 54, nextRun: 'Sex 21:00', distance: '6 km',  tag: '🌙 Noturna',   desc: 'Corrida noturna com point no arco da Lapa', hot: true  },
  { id: 'e3', name: 'Tijuca Trail',   members: 38, nextRun: 'Dom 06:30', distance: '10 km', tag: '🌿 Trail',      desc: 'Trilhas no Parque Nacional da Tijuca', hot: false },
]
