import { Reverse } from '../Reverse'

describe('Suite de pruebas de la funcion Reverse() usando Arreglos', () => {

  beforeAll(() => {
    console.info('Autor: Jesus Teran');
  })
  it('Test 1 - debe devolver Una secuencia de numeros', () => {
    expect(Reverse("hola")).toEqual("aloh")
  })

})