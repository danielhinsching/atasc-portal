import type { Escola } from './types'

// Fonte: https://conea.com.br/escolas/ (lida em 25/11/2026) — lista mantida pelo CONEA.
// Coordenadas: centro do município (a EPAGRI é aproximada, sede em Florianópolis).
const IFC = 'Instituto Federal'
const CEDUP = 'Escola técnica estadual'

export const escolas: Escola[] = [
  { id: 'ifc-videira', nome: 'IFC Campus Videira', cidade: 'Videira', tipo: IFC, lat: -27.008, lng: -51.154, mantenedora: 'SETEC/MEC', endereco: 'Rodovia SC 303, Km 05, Caixa Postal 58, CEP 89.560-000', telefone: '(49) 3566-3453', email: 'gabinete@ifc-videira.edu.br', site: 'http://www.ifc-videira.edu.br' },
  { id: 'ifc-santa-rosa-do-sul', nome: 'IFC Campus Santa Rosa do Sul', cidade: 'Santa Rosa do Sul', tipo: IFC, lat: -29.131, lng: -49.719, mantenedora: 'SETEC/MEC', endereco: 'Rua das Rosas, s/n, Vila Nova, Caixa Postal 04, CEP 88.965-000', telefone: '(48) 3534-8030', email: 'contato@santarosa.ifc.edu.br', site: 'http://www.santarosa.ifc.edu.br' },
  { id: 'ifc-rio-do-sul', nome: 'IFC Campus Rio do Sul', cidade: 'Rio do Sul', tipo: IFC, lat: -27.214, lng: -49.643, mantenedora: 'SETEC/MEC', endereco: 'Rua Estrada do Redentor, 5665, Canta Galo, Caixa Postal 441', telefone: '(47) 3531-3700', email: 'ricardo.veiga@ifc.edu.br', site: 'http://www.ifc-riodosul.edu.br/' },
  { id: 'ifc-camboriu', nome: 'IFC Campus Camboriú', cidade: 'Camboriú', tipo: IFC, lat: -27.025, lng: -48.65, mantenedora: 'SETEC/MEC', endereco: 'Rua João da Costa, s/n, Centro, Caixa Postal 16, CEP 88.340-000', telefone: '(47) 2104-0800', email: 'gabinete@ifc-camboriu.edu.br', site: 'http://www.camboriu.ifc.edu.br/' },
  { id: 'ifc-araquari', nome: 'IFC Campus Araquari', cidade: 'Araquari', tipo: IFC, lat: -26.376, lng: -48.722, mantenedora: 'SETEC/MEC', endereco: 'Rodovia BR 280, Km 27, Colégio Agrícola, Caixa Postal 21, CEP 89.245-000', telefone: '(47) 3447-1140', email: 'ifc@ifc-araquari.edu.br', site: 'http://www.ifc-araquari.edu.br/' },
  { id: 'ifc-concordia', nome: 'IFC Campus Concórdia', cidade: 'Concórdia', tipo: IFC, lat: -27.234, lng: -52.027, mantenedora: 'SETEC/MEC', endereco: 'Rodovia SC 283, Km 08, Vila Fragosos, Caixa Postal 58, CEP 89.700-000', telefone: '(49) 3441-4800', email: 'gabinete@ifc-concordia.edu.br', site: 'http://www.ifc-concordia.edu.br/' },
  { id: 'epagri', nome: 'EPAGRI (CEDUPs agrotécnicos)', cidade: 'Florianópolis', tipo: 'Empresa pública estadual', lat: -27.5826, lng: -48.5039, mantenedora: 'Governo do Estado', endereco: 'Florianópolis', telefone: '(48) 3665-5000', email: 'epagri@epagri.sc.gov.br', site: 'https://www.epagri.sc.gov.br/cedups-agrotecnicos/' },
  { id: 'la-salle-xanxere', nome: 'Colégio La Salle – Técnico em Agropecuária', cidade: 'Xanxerê', tipo: 'Colégio agrícola particular', lat: -26.877, lng: -52.404, mantenedora: 'Sociedade Porvir Científico', endereco: 'Rodovia SC 480, km 85, Linha Santa Terezinha, Caixa Postal 16, CEP 89.820-000', telefone: '(49) 3441-7830', email: 'agro@lasalle.org.br', site: 'http://www.lasalle.edu.br/agro' },
  { id: 'cedup-vidal-ramos', nome: 'CEDUP Vidal Ramos', cidade: 'Canoinhas', tipo: CEDUP, lat: -26.177, lng: -50.39, mantenedora: 'SED', endereco: 'Rua Maria Olsen, s/n, Distrito de Marcílio Dias, CEP 89.460-000', telefone: '(47) 3622-4050', email: 'cedupcanoinhas@sed.sc.gov.br', site: 'https://www.facebook.com/CEDUPVIDALRAMOS/' },
  { id: 'cedup-agua-doce', nome: 'CEDUP Prof. Jaldyr Bhering Faustino da Silva', cidade: 'Água Doce', tipo: CEDUP, lat: -26.999, lng: -51.553, mantenedora: 'SED', endereco: 'Rua Brasil, s/n, Centro, Caixa Postal 31, CEP 89.654-000', telefone: '(49) 3524-0133', email: 'cedupaguadoce@sed.sc.gov.br' },
  { id: 'cedup-getulio-vargas', nome: 'CEDUP Getúlio Vargas', cidade: 'São Miguel do Oeste', tipo: CEDUP, lat: -26.724, lng: -53.518, mantenedora: 'SED', endereco: 'Rua Linha Cruzinhas, s/n, Caixa Postal 259, CEP 89.900-000', telefone: '(49) 99125-3252', email: 'cedupsmo@sed.sc.gov.br' },
  { id: 'cedup-campo-ere', nome: 'CEDUP Campo Erê', cidade: 'Campo Erê', tipo: CEDUP, lat: -26.395, lng: -53.087, mantenedora: 'SED', endereco: 'Fazenda Primavera, SC 469, Km 07, CEP 89.980-000', telefone: '(49) 3655-1268', email: 'cedupcampoere@sed.sc.gov.br', site: 'http://cedupcampoere.com/' },
  { id: 'cedup-caetano-costa', nome: 'CEDUP Caetano Costa', cidade: 'São José do Cerrito', tipo: CEDUP, lat: -27.659, lng: -50.578, mantenedora: 'SED', endereco: 'Rodovia BR 282, Km 25, Itararé, Caixa Postal 15, CEP 88.570-000', telefone: '(49) 98826-0002', email: 'cedupccosta@sed.sc.gov.br', site: 'http://cedupcaetanocosta.blogspot.com.br/' },
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
