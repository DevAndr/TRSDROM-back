export type CreateStorePayload = {
  name: string;
  description: string;
  logo?: string;
  telegramId: string;
};

export type UpdateStorePayload = {
  id: string;
  name?: string;
  description?: string;
  logo?: string;
};
