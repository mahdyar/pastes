import axios from "axios";
type createPasteTypes = (
  paste: string,
  slang: string,
  password: string
) => Promise<{
  status: number;
  data: { status: number; slang: string };
}>;

export const createPaste: createPasteTypes = async (paste, slang, password) => {
  const API_URL = import.meta.env.VITE_API_URL as string;
  const response = await axios.post(`${API_URL}/`, { paste, slang, password });

  return {
    status: response.status,
    data: response.data,
  };
};

export const getSlang = async (slang: string, password?: string) => {
  const API_URL = import.meta.env.VITE_API_URL as string;
  const fullURL = `${API_URL}/${slang}${password && `/${password}`}`;
  const response = await axios.get(fullURL);

  return { status: response.status, data: response.data };
};
