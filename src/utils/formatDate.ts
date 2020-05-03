/* eslint-disable import/no-duplicates */
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const formatData = (date: string): string => {
  const formatedDate = format(parseISO(date), 'dd/MM/yyyy', { locale: ptBR });

  return formatedDate;
};

export default formatData;
