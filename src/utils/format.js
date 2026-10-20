import content from "../data/content";

export const formatPrice = (amount) =>
  `${content.currency}${amount.toLocaleString("en-PH")}`;

export const formatDate = (date) =>
  date.toLocaleDateString("en-PH", { year: "numeric", month: "short", day: "numeric" });
