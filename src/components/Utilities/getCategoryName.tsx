const getCategoryName = (categoryName: any) => {
  const dictionary: any = {
    Todo: 'Todo',
    TE: 'Tiendas Especializadas',
    RA: 'Restaurantes y Alimentos',
    TD: 'Tiendas Departamentales',
    SE: 'Servicio y Entretenimiento',
    SB: 'Salud y Belleza',
  };

  return dictionary[categoryName];
};

export default getCategoryName;
