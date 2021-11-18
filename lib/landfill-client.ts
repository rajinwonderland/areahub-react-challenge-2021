import {
  IQueryFeaturesResponse,
  IQueryResponse,
} from "@esri/arcgis-rest-feature-layer";
import { queryFeatures } from "./query-features";

export default class LandfillClient {
  private _baseUrl: string;
  constructor() {
    this._baseUrl =
      "https://services1.arcgis.com/Hp6G80Pky0om7QvQ/arcgis/rest/services/Solid_Waste_Landfill_Facilities/FeatureServer/0";
  }

  public buildSearchWhereClause(options: {
    query: string;
    status: LandfillStatus;
    type: LandfillType;
  }) {
    let where = "1=1";
    where += ` AND NAME like '%${options.query}%' OR CITY like '%${options.query}%' OR  STATE like '%${options.query}%' or ZIP like '%${options.query}%'`;
    if (options.status) {
      where += ` AND STATUS = '${options.status}'`;
    }
    if (options.type) {
      where += ` AND TYPE = '${options.type}'`;
    }
    return where;
  }

  public buildWhereClause(options: LandfillWhereOptions) {
    let where = "1=1";
    if (options.name) {
      where += ` AND NAME like '%${options.name}%'`;
    }
    if (options.city) {
      where += ` AND CITY like '%${options.city}%'`;
    }
    if (options.state) {
      where += ` AND STATE like '%${options.state}%'`;
    }
    if (options.zip) {
      where += ` AND ZIP like '%${options.zip}%'`;
    }
    if (options.status) {
      where += ` AND STATUS = '${options.status}'`;
    }
    if (options.type) {
      where += ` AND TYPE = '${options.type}'`;
    }
    return where;
  }
  public async getLandfillTotal(where: LandfillWhereOptions) {
    const total = await queryFeatures({
      url: this._baseUrl,
      where: this.buildWhereClause(where),
      outFields: "*",
      returnGeometry: false,
      outSR: "4326",
      returnCountOnly: true,
      f: "json",
    });
    return (total as IQueryResponse).count || 0;
  }
  public async getLandfills(where: LandfillWhereOptions, page: string = "1") {
    const response = await queryFeatures({
      url: this._baseUrl,
      where: this.buildWhereClause(where),
      outFields: "*",
      returnGeometry: false,
      outSR: "4326",
      resultRecordCount: 10,
      resultOffset: (parseInt(page) - 1) * 10,
      f: "json",
    });

    return this.formatFeatureResponse(
      response as IQueryFeaturesResponse,
      parseInt(page)
    );
  }

  private formatFeatureResponse(
    response: IQueryFeaturesResponse,
    page: number
  ): LandfillResponse {
    if (response?.features.length > 0) {
      return {
        count: response.features.length,
        page,
        landfills: response.features.map(
          (feature) => feature.attributes
        ) as Landfill[],
      };
    }
    return {
      count: 0,
      page,
      landfills: [],
    };
  }
}

export interface LandfillWhereOptions {
  name?: string;
  city?: string;
  state?: string;
  zip?: string;
  status?: LandfillStatus;
  type?: LandfillType;
}
export interface LandfillResponse {
  count: number;
  page: number;
  landfills: Landfill[];
}

export interface Landfill {
  OBJECTID: number;
  SWID: number;
  NAME: string;
  ADDRESS: string;
  CITY: string;
  STATE: string;
  ZIP: string;
  ZIP4: string;
  TELEPHONE: string;
  TYPE: LandfillType;
  STATUS: LandfillStatus;
  COUNTY: string;
  COUNTYFIPS: string;
  COUNTRY: Country;
  LATITUDE: number;
  LONGITUDE: number;
  NAICS_CODE: string;
  NAICS_DESC: string;
  SOURCE: string;
  SOURCEDATE: number;
  VAL_METHOD: string;
  VAL_DATE: number;
  WEBSITE: string;
  REG_ID: string;
  STATUSDATE: string;
  OWNER: string;
  CLOSE_DATE: string;
  PERMIT_NO: string;
}

export enum Country {
  Usa = "USA",
}

export type LandfillStatus = "OPEN" | "CLOSED" | "NOT AVAILABLE";
export type LandfillType =
  | "TRANSFER"
  | "MUNICIPAL"
  | "C&D"
  | "MUNICIPAL, C&D"
  | "INDUSTRIAL"
  | "NOT AVAILABLE"
  | "TRANSFER, C&D";
