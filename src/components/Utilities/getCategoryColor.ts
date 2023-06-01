const getCategoryColor = (category: any) => {
  const dictionary: any = {
    Todo: '#1B3089',
    TE: '#00AAC3',
    RA: '#EC6E29',
    TD: '#45AC4C',
    SE: '#7B4795',
    SB: '#406FB4',
  };

  return dictionary[category];
};

export default getCategoryColor;
