export const cities = {
  nodes: [
    {
      id: 'Medellín',
      zones: {
        name: 'Medellín',
        children: [
          { name: 'Laureles' },
          { name: 'El Poblado' },
          { name: 'Belen' }
        ]
      }
    },
    {
      id: 'Bogotá',
      zones: {
        name: 'Bogotá',
        children: [
          { name: 'Chapinero' },
          { name: 'Usaquén' },
          { name: 'Suba' }
        ]
      }
    },
    {
      id: 'Cali',
      zones: {
        name: 'Cali',
        children: [
          { name: 'San Antonio' },
          { name: 'El Peñón' }
        ]
      }
    },
    {
      id: 'Barranquilla',
      zones: {
        name: 'Barranquilla',
        children: [
          { name: 'El Prado' },
          { name: 'Alto Prado' }
        ]
      }
    }
  ],
  links: [
    { source: 'Medellín', target: 'Bogotá' },
    { source: 'Bogotá', target: 'Cali' },
    { source: 'Cali', target: 'Barranquilla' },
    { source: 'Barranquilla', target: 'Medellín' }
  ]
};
