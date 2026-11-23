import type { Escola } from './types'

// Fonte: página Escolas do site atual (lida em 22/11/2026). O site corta alguns endereços no meio do CEP;
// aqui ficam só os trechos completos. A completar com a ATASC (ver 03). Coordenadas: centro do município.
const IFC = 'Instituto Federal'
const CEDUP = 'Escola técnica estadual'

export const escolas: Escola[] = [
  { id: 'ifc-concordia', nome: 'IFC Campus Concórdia', cidade: 'Concórdia', tipo: IFC, lat: -27.234, lng: -52.027, mantenedora: 'SETEC/MEC', endereco: 'SC-283, s/n, Fragosos, Concórdia/SC, CEP 89703-720', telefone: '(49) 3441-4800', email: 'gabinete.concordia@ifc.edu.br', site: 'https://concordia.ifc.edu.br/' },
  { id: 'ifc-videira', nome: 'IFC Campus Videira', cidade: 'Videira', tipo: IFC, lat: -27.008, lng: -51.154, mantenedora: 'SETEC/MEC', endereco: 'SC-135, km 125, Campo Experimental, Videira/SC', telefone: '(49) 3533-4900', email: 'gabinete.videira@ifc.edu.br', site: 'https://videira.ifc.edu.br/' },
  { id: 'ifc-santa-rosa-do-sul', nome: 'IFC Campus Santa Rosa do Sul', cidade: 'Santa Rosa do Sul', tipo: IFC, lat: -29.131, lng: -49.719, mantenedora: 'SETEC/MEC', endereco: 'Rua das Rosas, s/n, Vila Nova, Santa Rosa do Sul/SC', telefone: '(48) 3534-8000', email: 'gabinete.srs@ifc.edu.br', site: 'https://www.santarosa.ifc.edu.br/' },
  { id: 'ifc-rio-do-sul', nome: 'IFC Campus Rio do Sul', cidade: 'Rio do Sul', tipo: IFC, lat: -27.214, lng: -49.643, mantenedora: 'SETEC/MEC', endereco: 'Estrada do Redentor, 5665, Rio do Sul/SC', telefone: '(47) 3531-3700', email: 'gabinete.riodosul@ifc.edu.br', site: 'https://www.riodosul.ifc.edu.br/' },
  { id: 'ifc-camboriu', nome: 'IFC Campus Camboriú', cidade: 'Camboriú', tipo: IFC, lat: -27.025, lng: -48.65, mantenedora: 'SETEC/MEC', endereco: 'Rua Joaquim Garcia, Centro, Camboriú/SC', telefone: '(47) 2104-0800', email: 'gabinete.camboriu@ifc.edu.br', site: 'https://www.camboriu.ifc.edu.br/' },
  { id: 'ifc-araquari', nome: 'IFC Campus Araquari', cidade: 'Araquari', tipo: IFC, lat: -26.376, lng: -48.722, mantenedora: 'SETEC/MEC', endereco: 'Rodovia BR 280, Centro, Araquari/SC', telefone: '(47) 3803-7200', email: 'gabinete.araquari@ifc.edu.br', site: 'https://araquari.ifc.edu.br/' },
  { id: 'iaesc', nome: 'Instituto Assistência e Educação São Canísio (IAESC)', cidade: 'Itapiranga', tipo: 'Colégio agrícola particular', lat: -27.169, lng: -53.717, mantenedora: 'Sociedade Antônio Vieira', endereco: 'Linha Sede Capela, s/n, Itapiranga/SC, CEP 89896-000', telefone: '(49) 3678-2063', email: 'supervisaoiaesc@colegioagricolaitapiranga.com.br', site: 'https://iaesc.educacaoadventista.org.br/' },
  { id: 'la-salle-xanxere', nome: 'Colégio Agrícola La Salle', cidade: 'Xanxerê', tipo: 'Colégio agrícola particular', lat: -26.877, lng: -52.404, mantenedora: 'Sociedade Porvir Científico', endereco: 'Linha Santa Terezinha, SC-480, Xanxerê/SC', telefone: '(49) 3441-7800', email: 'xanxere@lasalle.org.br', site: 'https://linktr.ee/colegiolasallexanxere' },
  { id: 'cedup-vidal-ramos', nome: 'CEDUP Vidal Ramos', cidade: 'Canoinhas', tipo: CEDUP, lat: -26.177, lng: -50.39, mantenedora: 'SED', endereco: 'Estrada Geral Marcílio Dias, s/n, Canoinhas/SC', telefone: '(47) 3622-4050', email: 'cedupcanoinhas@sed.sc.gov.br', site: 'https://www.instagram.com/cedupvidalramos/' },
  { id: 'cedup-agua-doce', nome: 'CEDUP Prof. Jaldyr Bhering Faustino da Silva', cidade: 'Água Doce', tipo: CEDUP, lat: -26.999, lng: -51.553, mantenedora: 'SED', endereco: 'Rua Brasil, s/n, Água Doce/SC', telefone: '(49) 3524-0133', email: 'cedupaguadoce@ser.sc.gov.br', site: 'http://cedupaguadoce.blogspot.com/' },
  { id: 'cedup-getulio-vargas', nome: 'CEDUP Getúlio Vargas', cidade: 'São Miguel do Oeste', tipo: CEDUP, lat: -26.724, lng: -53.518, mantenedora: 'SED', endereco: 'Linha Cruzinhas, s/n, Centro, São Miguel do Oeste/SC', telefone: '(49) 3197-8031', email: 'cedupsmo@sed.sc.gov.br', site: 'https://www.facebook.com/cedupgetuliovargas/' },
  { id: 'cedup-campo-ere', nome: 'CEDUP Campo Erê', cidade: 'Campo Erê', tipo: CEDUP, lat: -26.395, lng: -53.087, mantenedora: 'SED', endereco: 'Fazenda Primavera, SC-469, km 07, Campo Erê/SC', telefone: '(49) 3655-1268', email: 'cedupcampoere@sed.sc.gov.br', site: 'https://www.instagram.com/cedup_campo_ere/' },
  { id: 'cedup-caetano-costa', nome: 'CEDUP Caetano Costa', cidade: 'São José do Cerrito', tipo: CEDUP, lat: -27.659, lng: -50.578, mantenedora: 'SED', endereco: 'BR-282, km 25, Itararé, São José do Cerrito/SC, CEP 88570-000', telefone: '(49) 3289-8905', email: 'cedupcaetanocosta@sed.sc.gov.br', site: 'https://www.instagram.com/cedupcaetanocosta/' },
]

export const sede = {
  nome: 'Sede da ATASC',
  endereco: 'Rua Felipe Schmidt, 390, Ed. Florêncio Costa, Sala 1309, Centro, Florianópolis/SC',
  lat: -27.5954,
  lng: -48.5487,
}

export function listarEscolas(): Escola[] {
  return escolas
}
