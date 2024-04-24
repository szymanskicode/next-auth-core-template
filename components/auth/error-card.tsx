import { CardWrapper } from "./card-wrapper";
import { LOGIN_PAGE_URL } from "@/routes";

export const ErrorCard = () => {
  return <CardWrapper headerLabel="Oops! Something went wrong!" backButtonHref={LOGIN_PAGE_URL} backButtonLabel="Back to login" />;
};
