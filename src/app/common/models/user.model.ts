export interface User {
  username: string;
  password: string;
}

export interface Products {
  id: number;
  image: string;
  title: string;
}

export interface Product extends Products {
  price: number;
  description: string;
  category: string;
  quantity: number;
  rating: {
    rate: number;
    count: number;
  };
}
export interface LoginResponse {
  token: string;
}

export interface CartItem {
  productId: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  
}
