import axios from 'axios';

const $host = axios.create({});
// const { enqueueSnackbar } = useSnackbar();


const onSuccess = (response) => {
  if (response?.data) {
    // console.log('Запрос выполнен успешно');
    // console.log(response.data);
  }
  return response;
};

const onError = (response) => {
  // if (response?.data?.ok) {
    // enqueueSnackbar(JSON.stringify(response),"error");
  // }
  return Promise.reject(response);
};

$host.interceptors.response.use(onSuccess, onError);



export { $host };

