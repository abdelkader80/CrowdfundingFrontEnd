import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Projet } from "../models/projet";

@Injectable({
  providedIn: "root",
})
export class ProjetService {
  constructor(private httpClient: HttpClient) {}

  public host: String = "http://localhost:8080";

  getprojets(page: number, size: number) {
    return this.httpClient.get(
      this.host + "/projets?page=" + page + "&size=" + size
    );
  }
}
