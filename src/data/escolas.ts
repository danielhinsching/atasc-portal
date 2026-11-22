import type { Escola } from './types'

// EXEMPLO: o inventário real tem 13 escolas (IFC, IAESC, La Salle, CEDUPs). Endereços a completar (ver 03).
export const escolas: Escola[] = [
  { id: 'ifc-araquari', nome: 'IFC Campus Araquari', cidade: 'Araquari', tipo: 'Instituto Federal', lat: -26.376, lng: -48.722 },
  { id: 'ifc-camboriu', nome: 'IFC Campus Camboriú', cidade: 'Camboriú', tipo: 'Instituto Federal', lat: -27.025, lng: -48.65 },
  { id: 'ifc-concordia', nome: 'IFC Campus Concórdia', cidade: 'Concórdia', tipo: 'Instituto Federal', lat: -27.234, lng: -52.027 },
  { id: 'ifc-rio-do-sul', nome: 'IFC Campus Rio do Sul', cidade: 'Rio do Sul', tipo: 'Instituto Federal', lat: -27.214, lng: -49.643 },
  { id: 'ifc-videira', nome: 'IFC Campus Videira', cidade: 'Videira', tipo: 'Instituto Federal', lat: -27.008, lng: -51.154 },
  { id: 'cedup-exemplo', nome: 'CEDUP (exemplo)', cidade: 'Lages', tipo: 'Escola técnica estadual', lat: -27.816, lng: -50.326 },
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
