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

export type ResponseBody = {
  id?: string;
  name: string;
  description?: string;
  price: number;
  reference: string;
};

export type FormInput = {
  id?: string;
  name: string;
  description?: string | "";
  price: string;
  reference: string;
};

export interface item {
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

export type ICountPerStatus = {
  total: number;
  available: number;
  unavailable: number;
};

export type ISearchOutput = {
  items: item[];
  pagination: IPagination;
  countPerStatus: ICountPerStatus;
};

type IParams = {
  id?: string;
  offset?: number;
  limit?: number;
  orderBy?: string;
  sortBy?: string;
  search?: string;
  status?: string;
};
export const save = async (
  data: ResponseBody
): Promise<ApiResponse<ResponseBody>> => {
  try {
    const response = await monolithAPI.put("/foods/", data);

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

export const getRequest = async ({ id }: IParams): Promise<ResponseBody> => {
  try {
    const { data } = await monolithAPI.get(`foods//${id}`);

    return data;
  } catch (e) {
    return undefined;
  }
};

export const getList = async ({
  offset = 0,
  limit = 25,
  orderBy = "name",
  sortBy = "ASC",
  search = "",
  status = "",
}: IParams): Promise<ISearchOutput> => {
  try {
    const {
      data: { data = [], pagination, countPerStatus },
    } = await monolithAPI.get<{
      data: item[];
      pagination: IPagination;
      countPerStatus: ICountPerStatus;
    }>("foods/", {
      params: {
        offset,
        limit,
        orderBy,
        sortBy,
        search,
        status,
      },
    });

    return { items: data, pagination, countPerStatus };
  } catch (e) {
    return {
      pagination: {
        total: 0,
        offset: 0,
        limit: 0,
      },
      items: [],
      countPerStatus: {
        total: 0,
        available: 0,
        unavailable: 0,
      },
    };
  }
};
