const formatValue = (value: number, type?: 'income' | 'outcome'): string => {
  const formatedValue = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
  return formatedValue;
};

export default formatValue;
