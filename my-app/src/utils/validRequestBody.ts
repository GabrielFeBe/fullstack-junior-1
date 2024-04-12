// Função para validar o corpo da requisição em relação a uma interface genérica T
export function validateRequestBody<T>(body: any, expectedInterface: T): any[]{
 
  const arrayOfErrors = [];

  for (const key in expectedInterface) {
    if (typeof body[key] !== typeof expectedInterface[key]) {
      arrayOfErrors.push(key);
    }
  }

  return arrayOfErrors;
}
