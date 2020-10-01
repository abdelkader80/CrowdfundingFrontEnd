export class Projet {
  constructor(
    public id_projet?: number,
    public nom_projet?: string,
    public budget?: number,
    public date_debut?: string,
    public date_fin?: string,
    public somme_demandee?: number,
    public descriptif?: string,
    public image?: string
  ) {}
}
