import z from 'zod';

import { ValidateProps } from '../@types';

export const validate: ValidateProps = {
  isBlack(value: string): boolean {
    const schema = z
      .string({
        required_error: 'Há campos de texto que ainda não foram preechidos!',
      })
      .min(1, 'Certifique-se que você selecionou ou informou todos os dados!');

    return !!schema.parse(value);
  },

  isDate(value: string): boolean {
    const currentDate = new Date();
    const currentPtBrHours = currentDate.getHours() - 3;
    const minimumDate = new Date(currentDate.setHours(currentPtBrHours));

    const schema = z
      .date({
        errorMap: issue => {
          switch (issue.code) {
            case 'invalid_date': {
              return {
                message:
                  'A data informada não é válida! Por favor, certifique-se dos dados colocados.',
              };
            }
            default: {
              return {
                message: 'Certifique-se que à data inserida é uma data válida!',
              };
            }
          }
        },
      })
      .min(minimumDate, {
        message: 'Uma data do passado não é válida!',
      });

    return !!schema.parse(new Date(value));
  },
};
