
export interface LoginResponse extends Response {
  data: {
    data: {
      accessToken: string;
      refreshToken: string;
    };
  };
}
