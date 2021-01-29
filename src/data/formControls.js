export const formControls = [
  {
    controlName: 'firstName',
    label: "What's your first name?",
    options: {
      placeholder: 'e.g Jane',
      type: 'text',
    },
  },
  {
    controlName: 'address',
    label: "What's your current address?",
    options: {
      type: 'text',
      placeholder: 'e.g Lohmühlenstraße 65',
    },
  },
  {
    controlName: 'occupation',
    label: "What's your occupation",
    options: {
      type: 'radio',
      items: [
        {
          label: 'Employed',
          value: 'EMPLOYED',
        },
        {
          label: 'Self employed',
          value: 'SELF_EMPLOYED',
        },
        {
          label: 'Student',
          value: 'STUDENT',
        },
      ],
    },
  },
  {
    controlName: 'hasChildren',
    label: 'Do you have any children?',
    options: {
      type: 'radio',
      items: [
        {
          label: 'Yes',
          value: 'HAS_CHILDREN',
        },
        {
          label: 'No',
          value: 'HAS_NO_CHILDREN',
        },
      ],
    },
  },
  {
    controlName: 'numberOfChildren',
    label: 'How many children do you have?',
    options: {
      type: 'number',
      placeholder: 'e.g 2',
    },
    visibleOn: {
      previous: {
        operation: 'eq',
        value: 'HAS_CHILDREN',
      },
    },
  },
  {
    controlName: 'email',
    label: "What's your email?",
    options: {
      type: 'email',
      placeholder: 'e.g jane.doe@getpopsure.com',
    },
  },
];
