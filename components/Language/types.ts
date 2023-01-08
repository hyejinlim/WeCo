export type LANGUAGE_CATEGORY = {
  label: string;
  value: string;
};

export type LANGUAGE = {
  img: string;
  category: string[];
} & LANGUAGE_CATEGORY;
