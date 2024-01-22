import { isAxiosError } from "axios";
import { monolithAPI } from "@/api/api";

interface ApiResponse<T> {
  data?: T;
  errors?: { key: string; message: string }[];
}
export class CustomValidationError extends Error {
  key: string;

  constructor(key: string, message: string) {
    super(message);
    this.name = "CustomValidationError";
    this.key = key;
  }
}

export type AddonResponseBody = {
  id?: string;
  name: string;
  description?: string;
  price: number;
  reference: string;
};

export type AddonFormInput = {
  id?: string;
  name: string;
  description?: string | "";
  price: string;
  reference: string;
};

export interface Addon {
  id?: string;
  name: string;
  description?: string;
  price: number;
  reference: string;
}

export type IPagination = {
  total: number;
  limit: number;
  offset: number;
};

export type ICountAddonPerStatus = {
  total: number;
  available: number;
  unavailable: number;
};

export type ISearchAddonOutput = {
  addons: Addon[];
  pagination: IPagination;
  countPerStatus: ICountAddonPerStatus;
};

type IParams = {
  addonId?: string;
  offset?: number;
  limit?: number;
  orderBy?: string;
  sortBy?: string;
  search?: string;
  status?: string;
};
export const saveAddons = async (
  data: AddonResponseBody
): Promise<ApiResponse<AddonResponseBody>> => {
  try {
    const response = await monolithAPI.put("/foods/addons", data);

    return { data: response.data };
  } catch (error) {
    if (isAxiosError(error) && [400, 409].includes(error.response.status)) {
      if (error.response.data[0].key === "name") {
        throw new CustomValidationError(
          "name",
          "Já existe um complemento com esse nome"
        );
      } else if (error.response.data[0].key === "reference") {
        throw new CustomValidationError(
          "reference",
          "Esse código PDV já existe"
        );
      }
    }

    return { errors: [{ key: "generic", message: error }] };
  }
};

export const getAddonRequest = async ({
  addonId,
}: IParams): Promise<AddonResponseBody> => {
  try {
    const { data } = await monolithAPI.get(`foods/addons/${addonId}`);

    return data;
  } catch (e) {
    return undefined;
  }
};

export const getAddonsList = async ({
  offset = 0,
  limit = 25,
  orderBy = "name",
  sortBy = "ASC",
  search = "",
  status = "",
}: IParams): Promise<ISearchAddonOutput> => {
  try {
    const {
      data: { data = [], pagination, countPerStatus },
    } = await monolithAPI.get<{
      data: Addon[];
      pagination: IPagination;
      countPerStatus: ICountAddonPerStatus;
    }>("foods/addons", {
      params: {
        offset,
        limit,
        orderBy,
        sortBy,
        search,
        status,
      },
    });

    return { addons: data, pagination, countPerStatus };
  } catch (e) {
    return {
      pagination: {
        total: 0,
        offset: 0,
        limit: 0,
      },
      addons: [],
      countPerStatus: {
        total: 0,
        available: 0,
        unavailable: 0,
      },
    };
  }
};
