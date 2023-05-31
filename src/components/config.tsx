interface Author {
  name: string;
  summary: string;
}

interface Social {
  facebook: string;
}

export default {
  title: 'El Paseo Santa Catarina',
  author: {
    name: 'Planigrupo',
    summary: '',
  } as Author, // Anotación de tipo para 'author'
  description:
    'Toda la diversión, compras y entretenimiento que necesitas en un solo lugar. Descubre El Paseo Santa Catarina, un moderno centro comercial en Santa Catarina, México, con una amplia variedad de tiendas, restaurantes, cines y espacios de entretenimiento. ¡Ven y disfruta de una experiencia única de compras y diversión para toda la familia en El Paseo Santa Catarina!',
  social: {
    facebook: 'www.facebook.com/ElPaseoSantaCatarina',
  } as Social, // Anotación de tipo para 'social'
};
