type TypeLogin = {
  username: string;
  password: string;
};

type ResponseUser = {
  data: { message: string };
  username: string;
};

type RequestUser = {
  username: string;
  password: string;
};

type ResponseError = {
  errorMessage: string;
};
