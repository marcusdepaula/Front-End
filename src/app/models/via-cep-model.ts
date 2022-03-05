export class ViaCepModel {

  cep?: string;
  logradouro?: string;
  numero?: number;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  ibge?: string;
  gia?: string;
  ddd?: string;
  siafi?: string;


  constructor(object: Partial<ViaCepModel>) {
    Object.assign(this, object);
  }

}
