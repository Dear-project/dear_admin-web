export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse extends Response {
  data: {
    data: {
      accessToken: string;
      refreshToken: string;
    };
  };
}
