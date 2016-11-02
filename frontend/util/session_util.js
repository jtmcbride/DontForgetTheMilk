export const signup = (user, success, error) => {
  $.ajax({
    url: "api/users", 
    type: "post",
    data: {user}, 
    success,
    error
  });
}

export const login = (user, success, error) => {
  $.ajax({
    url: "api/session", 
    type: "post",
    data: {user}, 
    success,
    error
  });
};

export const logout = ( success, error) => {
  $.ajax({
    url: "api/session", 
    type: "delete",
    success,
    error
  });
};