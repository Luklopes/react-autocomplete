import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { ThemeProviderOmniMF } from "@omni/frontend-ui-components";
import { ToastContainerStyled } from "@/Global.styles";
import Autocomplete from "./features/AutoComplete/autocomplete";

const THREE_SECONDS_IN_MILLISECONDS = 3 * 1000;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: THREE_SECONDS_IN_MILLISECONDS,
    },
  },
});

const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
});

persistQueryClient({
  queryClient,
  persister: localStoragePersister,
});

type IProps = {
  storeId: string;
  routeBasePath?: string;
  authorization: string;
  apiKey: string;
};

const NotFound = () => {
  return <h1>not found</h1>;
};

export const App: React.FC<IProps> = ({ routeBasePath }) => {
  return (
    <BrowserRouter basename={routeBasePath}>
      <QueryClientProvider client={queryClient}>
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          <ThemeProviderOmniMF>
            <ToastContainerStyled
              position="bottom-right"
              closeButton={false}
              draggable
              pauseOnHover={false}
              pauseOnFocusLoss={false}
              hideProgressBar
              autoClose={5000}
            />
            <Routes>
              <Route path="/" element={<Autocomplete />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ThemeProviderOmniMF>
        </QueryParamProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
