import { greeter_config } from "nody-greeter-types";

type Branding = Omit<(typeof greeter_config)["branding"], "logo"> & {
  logo_image: string;
};

type BrandingValue = Branding | undefined;

export const branding = greeter_config?.branding as unknown as BrandingValue;
