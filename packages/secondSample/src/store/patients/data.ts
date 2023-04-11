/* ******************************************************** */
/* 2023 © TheSprkl for React PROMO (www.thesprkl.io)      */
/* is a proprietary product developed by                    */
/* EGO Creative Innovations Limited (www.ego-cms.com)       */
/* This is a reduced demo version of TheSprkl, the rights   */
/* and terms of use of which are governed by a separate     */
/* commercial license.                                      */
/*                                                          */
/* This promo version is fully functional but contains a    */
/* limited number of items.                                 */
/*                                                          */
/* EULA https://www.thesprkl.io/legal/eula                  */
/* Support https://www.thesprkl.io/contact-us               */
/* Discord https://discord.gg/3qjXP9jCra                    */
/*                                                          */
/* ******************************************************** */

import avatar1 from '../../assets/avatar1.png'

export const patients = [
  {
    id: 1,
    name: 'Alen Klark',
    appointments: {
      reason: 'consultation',
      diagnose: 'headache',
      time: '10:30 pm',
    },
    room: null,
    message: [
      {
        time: '10:30pm',
        message:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        type: 'income',
      },
      {
        time: '10:30pm',
        message:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        type: 'outcome',
      },
    ],
    bloodPressure: '120/80',
    bloodType: 'AB+',
    diagnoses: ['Gallstones'],
    allergies: ['Peanut', 'Penicillin G'],
    height: '180',
    weight: '80',
    visitHistory: [{ data: '10:30', reason: 'headache' }],
    examinationHistory: [{ data: '10:30', reason: 'headache' }],
    meds: ['Peanut', 'Penicillin G'],
    img: 'avatar1',
    age: '37',
    sex: 'male',
    primalPlan: 'Non deserunt',
    secondPlan: 'Minim deserunt',
    phone: '+1 888 888 88 88',
    address: '7453 Rosanna Trace Suite 526 Sheldonbury, CT 61263-7571',
  },

  {
    id: 2,
    name: 'Alen Kein',
    appointments: {
      reason: 'consultation',
      diagnose: 'headache',
      time: '10:30 pm',
    },
    room: null,
    message: [
      {
        time: '10:30pm',
        message:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        type: 'income',
      },
      {
        time: '10:30pm',
        message:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        type: 'outcome',
      },
    ],
    bloodPressure: '120/80',
    bloodType: 'AB+',
    diagnoses: ['Pneumonia'],
    allergies: ['Peanut', 'Penicillin G'],
    height: '180',
    weight: '80',
    visitHistory: [{ data: '10:30', reason: 'headache' }],
    examinationHistory: [{ data: '10:30', reason: 'headache' }],
    meds: ['Ibuprofen', 'Acetaminophen', 'Aspirin', 'Naproxen', 'Diclofenac'],
    img: 'avatar2',
    age: '37',
    sex: 'male',
    primalPlan: 'Non deserunt',
    secondPlan: 'Minim deserunt',
    phone: '+1 888 888 88 88',
    address: '7453 Rosanna Trace Suite 526 Sheldonbury, CT 61263-7571',
  },
  {
    id: 3,
    name: 'John Smith',
    appointments: { reason: 'check-up', diagnose: 'Gastroenteritis', time: '9:00 am' },
    room: null,
    message: [
      {
        time: '9:00 am',
        message: "Hello John, we're looking forward to seeing you today for your check-up!",
        type: 'income',
      },
      { time: '9:15 am', message: 'Everything looks good with your check-up, keep up the good work!', type: 'outcome' },
    ],
    bloodPressure: '120/80',
    bloodType: 'A+',
    diagnoses: ['Common cold'],
    allergies: ['Penicillin'],
    height: '170',
    weight: '75',
    visitHistory: [{ data: '10:30', reason: 'headache' }],
    examinationHistory: [{ data: '10:30', reason: 'headache' }],
    meds: ['Amoxicillin', 'Azithromycin', 'Ciprofloxacin', 'Doxycycline', 'Penicillin'],
    img: 'avatar3',
    age: '30',
    sex: 'male',
    primalPlan: 'Stay healthy!',
    secondPlan: 'Stay healthy!',
    phone: '+1 888 555 1234',
    address: '123 Main St, Anytown, USA',
  },
  {
    id: 4,
    name: 'Jane Doe',
    appointments: {
      reason: 'annual physical',
      diagnose: 'Sore throat',
      time: '10:30 am',
    },
    room: null,
    message: [
      {
        time: '10:30 am',
        message: "Hello Jane, we're looking forward to seeing you today for your annual physical!",
        type: 'income',
      },
      {
        time: '11:15 am',
        message: 'Your annual physical went well, keep up the healthy lifestyle!',
        type: 'outcome',
      },
    ],
    bloodPressure: '118/76',
    bloodType: 'B-',
    diagnoses: ['headache'],
    allergies: ['Peanut', 'Penicillin G'],
    height: '165',
    weight: '60',
    visitHistory: [{ data: '10:30', reason: 'Sore throat' }],
    examinationHistory: [{ data: '10:30', reason: 'Sore throat' }],
    meds: ['Fluoxetine', 'Sertraline', 'Escitalopram', 'Venlafaxine', 'Duloxetine'],
    img: 'avatar4',
    age: '35',
    sex: 'female',
    primalPlan: 'Maintain healthy lifestyle',
    secondPlan: '',
    phone: '+1 888 555 5678',
    address: '456 Elm St, Anytown, USA',
  },
  {
    id: 5,
    name: 'John Doe',
    appointments: {
      reason: 'Annual Checkup',
      diagnose: 'Sinusitis',
      time: '9:00 am',
    },
    room: 102,
    message: [
      {
        time: '11:30am',
        message: "I've been feeling really sick with flu-like symptoms for the past few days. Can you help me?",
        type: 'income',
      },
      {
        time: '11:45am',
        message:
          "Yes, it sounds like you have the flu. I'm going to prescribe you some medication and recommend that you get plenty of rest and fluids.",
        type: 'outcome',
      },
    ],
    bloodPressure: '120/80',
    bloodType: 'A+',
    diagnoses: ['Temporal arteritis'],
    allergies: ['Peanut', 'Penicillin G'],
    height: '170',
    weight: '70',
    visitHistory: [
      { data: '03/10/2022', reason: 'Annual Checkup' },
      { data: '12/01/2022', reason: 'Flu Symptoms' },
    ],
    examinationHistory: [
      { data: '03/10/2022', reason: 'Annual Checkup' },
      { data: '12/01/2022', reason: 'Flu Symptoms' },
    ],
    meds: ['Diphenhydramine', 'Loratadine', 'Cetirizine', 'Fexofenadine', 'Chlorpheniramine'],
    img: 'avatar5',
    age: '45',
    sex: 'male',
    primalPlan: 'Stay healthy',
    secondPlan: 'Eat well and exercise regularly',
    phone: '+1 555-555-5555',
    address: '123 Main Street, Anytown USA',
  },
  {
    id: 6,
    name: 'Jane Smith',
    appointments: {
      reason: 'Flu Symptoms',
      diagnose: 'Influenza',
      time: '11:30 am',
    },
    room: 205,
    message: [
      {
        time: '11:30am',
        message: "I've been feeling really sick with flu-like symptoms for the past few days. Can you help me?",
        type: 'income',
      },
      {
        time: '11:45am',
        message:
          "Yes, it sounds like you have the flu. I'm going to prescribe you some medication and recommend that you get plenty of rest and fluids.",
        type: 'outcome',
      },
    ],
    bloodPressure: '130/90',
    bloodType: 'O-',
    diagnoses: ['Influenza'],
    allergies: ['Penicillin'],
    height: '165',
    weight: '55',
    visitHistory: [
      { data: '03/10/2022', reason: 'Annual Checkup' },
      { data: '12/01/2022', reason: 'Flu Symptoms' },
    ],
    examinationHistory: [
      { data: '03/10/2022', reason: 'Annual Checkup' },
      { data: '12/01/2022', reason: 'Flu Symptoms' },
    ],
    meds: ['Tamiflu'],
    img: 'avatar6',
    age: '29',
    sex: 'female',
    primalPlan: 'Get well soon!',
    secondPlan: 'Rest and stay hydrated',
    phone: '+1 555-555-5555',
    address: '456 Main Street, Anytown USA',
  },
  {
    id: 7,
    name: 'Bob Johnson',
    appointments: {
      reason: 'Heart Checkup',
      diagnose: 'Gastritis',
      time: '2:00 pm',
    },
    room: 306,
    message: [
      {
        time: '11:30am',
        message: "I've been feeling really sick with flu-like symptoms for the past few days. Can you help me?",
        type: 'income',
      },
      {
        time: '11:45am',
        message:
          "Yes, it sounds like you have the flu. I'm going to prescribe you some medication and recommend that you get plenty of rest and fluids.",
        type: 'outcome',
      },
    ],
    bloodPressure: '140/90',
    bloodType: 'B+',
    diagnoses: ['Allergies', 'Sinusitis', 'Migraine'],
    allergies: ['Risperidone', 'Quetiapine'],
    height: '180',
    weight: '90',
    visitHistory: [
      { data: '03/01/2022', reason: 'Flu Symptoms' },
      { data: '12/15/2021', reason: 'Annual Checkup' },
    ],
    examinationHistory: [
      { data: '03/01/2022', reason: 'Flu Symptoms' },
      { data: '12/15/2021', reason: 'Annual Checkup' },
    ],
    meds: ['Risperidone', 'Quetiapine', 'Olanzapine', 'Aripiprazole', 'Clozapine'],
    img: 'avatar3',
    age: '60',
    sex: 'male',
    primalPlan: 'Get well soon!',
    secondPlan: 'Rest and stay hydrated',
    phone: '+1 555-555-5555',
    address: '456 Main Street, Anytown USA',
  },
]
