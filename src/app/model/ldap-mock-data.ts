import {UserLdap} from "./user-ldap";
import {empty} from "rxjs/internal/Observer";
import {parse} from "@angular/compiler/src/render3/view/style_parser";

export const LDAP_USERS: UserLdap[] = [
  {
    login: 'test.v1',
    nom: 'v1',
    prenom: 'Test',
    nomComplet: 'v1 Test',
    motDePasse: null,
    mail: 'test.v1@epsi.fr',
    role: 'ROLE_USER',
    employeNumero: 1234,
    employeNiveau: 120,
    dateEmbauche: '2020-01-01',
    publishedId: 1,
    active: true,
  },
  {
    login: 'test.v2',
    nom: 'v2',
    prenom: 'Test',
    nomComplet: 'v2 Test',
    motDePasse: '',
    mail: 'test.v2@epsi.fr',
    role: 'ROLE_USER',
    employeNumero: 2234,
    employeNiveau: 220,
    dateEmbauche: '2020-01-01',
    publishedId: 2,
    active: true,
  },
  {
    login: 'test.v3',
    nom: 'v3',
    prenom: 'Test',
    nomComplet: 'v3 Test',
    motDePasse: null,
    mail: 'test.v3@epsi.fr',
    role: 'ROLE_USER',
    employeNumero: 3234,
    employeNiveau: 320,
    dateEmbauche: '2020-01-01',
    publishedId: 3,
    active: true,
  },
];
